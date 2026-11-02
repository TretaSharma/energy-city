// Plays computer-vs-computer games with the real code in index.html and reports how long they take.
// Usage: node tools/balance-sim.mjs [games=40] [players=2]
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const games = Number(process.argv[2] || 40);
const players = Number(process.argv[3] || 2);
const html = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
let code = html.slice(html.lastIndexOf('<script>') + 8, html.lastIndexOf('</script>'));

// The game seals itself in a closure; open it so the simulator can start games and read the state.
code = code.replace("(() => {\n'use strict';", '');
code = code.slice(0, code.lastIndexOf('})();'));
// Run the computer players' pauses almost instantly.
code = code.replace('setTimeout(r, ms)', 'setTimeout(r, ms * 0.00001)').replace('}, 1600);', '}, 0);');

// Just enough of a browser for the game to run without drawing anything.
const blank = () => ({ innerHTML: '', classList: { add() {}, remove() {}, toggle() {} }, prepend() {}, appendChild() {},
  setAttribute() {}, removeAttribute() {}, focus() {}, scrollIntoView() {}, getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }),
  dataset: {}, style: {}, isConnected: false, getContext: () => ({}) });
Object.assign(globalThis, {
  window: { matchMedia: () => ({ matches: false }) },
  matchMedia: () => ({ matches: false }),
  document: { querySelector: () => blank(), querySelectorAll: () => [], createElement: blank, addEventListener() {}, activeElement: null, body: blank() },
  localStorage: { getItem: () => '1', setItem() {}, removeItem() {} },
  requestAnimationFrame: () => 0, cancelAnimationFrame() {}, addEventListener() {}, getComputedStyle: () => ({ paddingBottom: '0' }),
  innerWidth: 800, innerHeight: 800, // phone-sized, so the desktop fit-to-screen code stays out of the way
});

const game = new Function(code + '\n;return { startGame, state: () => G };')();
const turns = [], lost = [];
let stuck = 0;
for (let g = 0; g < games; g++) {
  game.startGame(Array.from({ length: players }, (_, i) => ({ name: 'Bot ' + (i + 1), bot: true })));
  const started = Date.now();
  while (!game.state().over && Date.now() - started < 15000) await new Promise(r => setTimeout(r, 0));
  const G = game.state();
  if (!G.over) { stuck++; continue; }
  turns.push(G.round);
  G.players.forEach(p => lost.push(p.stats.lost));
}
const avg = a => (a.reduce((x, y) => x + y, 0) / (a.length || 1)).toFixed(1);
console.log(`${players} players, ${games} games`);
console.log(`turns per player: ${avg(turns)} (fastest ${Math.min(...turns)}, slowest ${Math.max(...turns)})`);
console.log(`generators lost to trouble per player: ${avg(lost)}`);
console.log(`stuck games: ${stuck}`);
process.exit(stuck ? 1 : 0);
