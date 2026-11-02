# Contributing to Energy City

Thanks for helping make Energy City better. Teachers, players and developers are all welcome.

## Suggest something without writing code

Open an issue:

- **Bug report:** something is broken or looks wrong.
- **Game idea:** a new card, a rule change, a new building, anything that would make the game more fun or teach better.

Say who plays it (age or grade) and what you saw happen. Screenshots help.

## Change the game

1. Fork the repository and create a branch, for example `idea/solar-farm-card`.
2. Edit `index.html`. The whole game lives there: the styles at the top, the card list and
   rules near the start of the `<script>`, then turns, the computer player, and drawing the screen.
3. Play it locally: `python3 -m http.server 8000`, then open http://localhost:8000.
4. If you changed cards, costs or rules, run the balance check (needs Node 18 or newer):

   ```bash
   node tools/balance-sim.mjs 40
   ```

   It plays computer-vs-computer games and reports how many turns a game takes and whether
   any game got stuck. Keep games finishing in roughly 12–18 turns per player with no stuck
   games, and put the before and after numbers in your pull request.
5. Open a pull request. Describe what changed, why, and how you tested it.

## Ground rules

- Keep it kid-friendly: plain words, short sentences, nothing scary or mean.
- Keep it one file with no build step, so anyone can open it and play.
- Keep it playable on a phone.
- Every pull request is reviewed by the maintainer, who decides what merges.
