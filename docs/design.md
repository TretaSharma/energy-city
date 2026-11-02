# Energy City design notes

## The board

Each player has one map: 8 downtown lots (2 rows of 4), a highway, and a Data Center
with 4 server racks. Every map holds the same buildings:

| Building | How many | Generators to power it |
|---|---|---|
| House | 4 | 2 |
| School | 1 | 4 |
| Factory | 2 | 6 |
| Hospital | 1 | 8 |
| Server rack (Data Center) | 4 | 2 |

That is 40 generators to finish a city.

## City rules

- A School can't go next to a Factory.
- A Hospital can't go next to a Factory.
- A Hospital needs a House next to it.

"Next to" means left, right, up or down. The rules are checked every time a building
is placed or moved. Of the 840 ways to arrange the 8 buildings, 100 follow all three
rules, so there are many good cities to find but most random layouts don't work.

## A turn

1. The power plant adds 1 generator.
2. Draw 1 card (after the player's first House is placed).
3. Place buildings, move them, and put generators into buildings and racks.
4. End the turn.

Everyone starts with 5 generators. When someone powers all 8 buildings and all 4 racks,
the players after them get one last turn, so everyone has had the same number of turns.
If more than one city finishes, the one built with the most clean power wins.

## The Energy Deck (57 cards, shared)

| Card | Copies | Effect |
|---|---|---|
| Generator | 6 | +1 |
| Wind Turbine | 10 | +2, clean |
| Solar Panels | 7 | +3, clean |
| Smart Grid AI | 2 | +1 per powered server rack |
| Diesel Generators | 5 | +4; your Hospital loses 1 |
| Nuclear Generators | 4 | +6; your School loses 3 |
| Overload | 2 | +3; skip your next turn |
| Protest | 6 | Lose 2 |
| Server Outage | 2 | Data Center loses 1 (Firewall blocks it) |
| Heat Wave | 2 | Lose 1 per powered server rack |
| Power Grab | 3 | Take up to 3 unplaced generators from a rival |
| Envy Country | 2 | Take up to 4 from a rival, into your Data Center |
| Insurance | 2 | Protect one building from losses |
| Theft Insurance | 2 | Blocks the next Power Grab or Envy Country |
| Firewall Upgrade | 2 | Blocks the next Server Outage |

Losses come from unplaced generators first, then from unfinished, uninsured buildings.
If Diesel or Nuclear hits a Hospital or School that has no power yet, the smoke takes
generators from the rest of the city instead, so placing those buildings last doesn't dodge it.

## Balance

`tools/balance-sim.mjs` plays computer-vs-computer games with the real game code.
With the numbers above, a 2-player game takes about 14–15 turns per player (range 11–19),
each player loses about 7 generators to trouble, and no game gets stuck. A 4-player game
takes about 14 turns. Aim to keep changes inside 12–18 turns with no stuck games.
