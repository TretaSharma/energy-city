# Energy City

A city-building board game for grades 3–5, played in the browser. Kids plan a city
under real design constraints, power it with clean or dirty energy, and light up the
data center that runs AI, learning along the way that AI runs on electricity.

Play against the computer, or with two players on one screen. It works on phones,
tablets and laptops, with no accounts and no install.

## How to play

- Everyone starts with **5 generators**. Each turn your power plant adds **+1**, then you
  **draw 1 card** from the Energy Deck everyone shares.
- **Place your first House to start.** Drag buildings onto your map whenever you like,
  and drag them around to move or swap them.
- Drag a ⚡ from "to place" onto a building (or tap the building) to power it.
  House 2 · School 4 · Factory 6 · Hospital 8.
- A card that can't do anything right now goes back into the deck.
- **City rules:** Schools and Hospitals need clean air, so they can't go next to a
  Factory. A Hospital also needs a House next door. ("Next to" means left, right, up or down.)
- Out past the highway sits your **Data Center**: 4 server racks, 2 generators each.
- **Win** by powering all 8 buildings and the Data Center. When someone finishes, everyone
  else gets one last turn. If more than one city finishes, the cleanest city wins.

The Energy Deck mixes power (Wind, Solar, Generator, Smart Grid), power with a cost
(Diesel, Nuclear, Overload), trouble (Protest, Server Outage, Heat Wave), sneaky moves
(Power Grab, Envy Country) and protection (Insurance, Theft Insurance, Firewall).
The full card list and the balance numbers are in [docs/design.md](docs/design.md).

## Run it

The whole game is one file, `index.html`. There is no build step and no server code.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Any static host can serve the file as it is.

## Contributing

Ideas, bug reports and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).
Every change goes through a pull request and is reviewed by the maintainer before it merges.

## Learning goals

Grounded in NGSS 3-5-ETS1-2: generate and compare multiple solutions to a problem based
on how well they meet the criteria and constraints of the design problem.

- Make decisions under resource constraints and plan around the criteria.
- Understand what different energy resources can and can't do (Wind vs. Nuclear).
- Evaluate strategies against placement constraints.
- See how unpredictable events change the state of a system.

## Credits

Energy City started as a tabletop game designed by Griffin Wilde, Chelsi Miller,
Treta Sharma and Nick for LS 301, Games for Learning. The digital version is maintained
by Treta Sharma.

The Kineks Round Bold font is embedded under the SIL Open Font License 1.1
([docs/FONT-LICENSE-KineksRound.txt](docs/FONT-LICENSE-KineksRound.txt)). Chewy, Public Sans
and VT323 load from Google Fonts.

## License

Code: [MIT](LICENSE). The embedded font keeps its own OFL license.
