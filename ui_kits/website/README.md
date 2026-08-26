# UI kit — vanillabp.io

A click-through recreation of the VanillaBP marketing site, rebuilt on the design
system's own components. Open `index.html`.

| Screen | Source |
|---|---|
| `HomeScreen.jsx` | `vanillabp/design-system` → `hero.html` (hero, engine switch, code panel) + `vanillabp/landing-page` → `src/content/AboutContent.json` |
| `AdaptersScreen.jsx` | `src/content/AdaptersAvailable.json`, `public/code/adapter_example.java` |
| `BlueprintsScreen.jsx` | `src/content/BlueprintContent.json` |
| `BpmnScreen.jsx` | `src/content/BPMNContent.json`, `src/locales/en/translation.json` (contact form labels) |
| `Site.jsx` | `src/router/config.ts` (routes), `src/components/Header`, `src/components/Footer` |

Every value comes from `styles.css`; nothing here defines its own colours or
sizes. Interactions are real but fake: routing is local state, the engine switch
flips a label, and the contact form does not submit.

The routes match the live site: `/`, `/features`, `/blueprints`, `/bpmn`, `/about`.
`/about` currently renders the home screen — the About page's own layout was not
recoverable from the sources without guessing.
