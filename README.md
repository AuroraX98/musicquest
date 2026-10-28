# MusicQuest

**Understand a small musical idea, hear or inspect an original example, then put it to work.**

MusicQuest is a self-contained learning website with two separate, prerequisite-aware courses. Start without music-theory or coding experience. The paths grow toward advanced, practical decisions—not a promise of professional results or a complete conservatory curriculum.

## Who it is for

### Music theory for DAW producers — 115 lessons

For people making music in FL Studio, Ableton Live or another DAW who want to understand rhythm, pitch, chords, harmony, melody, bass, groove, tension and arrangement. FL Studio transfer tasks use musical concepts rather than assuming a particular version's interface. This is music theory and introductory sound design, **not a mixing/mastering course**.

The course includes 57 arrangement lessons: two shared foundations followed by distinct dubstep, trance, synthwave, rap, pop, selected classical-form and cinematic-cue workshops. Learn each section's purpose and why parts can complement each other through register, rhythm, envelope, harmony, space and contrast. The examples are original studies, not copied artist songs or rigid genre recipes.

### Making music with Strudel — 50 lessons

For beginners who want to understand patterns and functions before combining them into deliberate musical ideas. Start with syntax, values and timing; progress through pattern transformations, harmony and more involved composition choices.

Read and reason in MusicQuest, then type your work in [external Strudel](https://strudel.cc/). **There is no embedded Strudel engine, editor or music-authoring workspace.**

## How to use it

1. Open a course and start with its first lesson. You can revisit or skip freely; prerequisites are named, not locked.
2. Read **Understand**, inspect **See & hear**, then answer **Try it**. Every lesson includes a contextual plain-language glossary and an external creative task.
3. Where offered, use **Play** and **Stop** to compare quiet, simplified listening examples. Start with low device volume. These synth demonstrations explain a concept; they are not full productions or performances of Strudel code.
4. A correct check enables **Mark reflected on**. It records your reflection, not mastery certification.
5. Use the course/topic maps, genre workshops, searchable glossary and searchable function guide when you need a reminder.
6. Saving is optional. In **Progress**, enable browser saving or stay session-only. Export a JSON backup before changing devices or clearing browser data. Import merges recognized lesson progress with existing progress. Saving is local to this browser and origin; there is no account or cloud sync.

Audio stops on navigation, Stop or hiding the tab and is bounded to 12 seconds. Labeled note and rhythm diagrams provide non-audio alternatives. A keyboard skip link reaches the main content. Multiple saved-progress tabs reconcile updates; avoid changing saving settings in several tabs at once. Cross-tab serialization uses Web Locks where available; the fallback is not transactionally atomic.

## Online or local use

**Online:** open [MusicQuest on ChatGPT Sites](https://musicquest.aurorax.chatgpt.site/) from ChatGPT or a normal browser. The hosted site is public. An internet connection is required; this is a learning website, not a conversational ChatGPT tutor.

**Local / offline-capable copy:** download or clone this repository while online, then run the local server below. Lessons, examples, glossary, reference data and synthesized demonstrations are bundled; they do not call an external API. Local startup and course loading were tested. A browser session with networking explicitly disabled was not available for verification, so this is not an offline-PWA or network-disconnection certification. External Strudel and documentation links still require internet. ChatGPT itself is not made available offline.

Progress stays in the browser and origin where you use the app. Hosted and localhost progress are separate; use Export/Import to transfer a backup. No cloud sync or offline cache is promised.

## Run locally

Requires Node.js 18 or newer. No dependency installation or build is needed.

```sh
git clone https://github.com/AuroraX98/musicquest.git
cd musicquest
npm start
```

Open **http://127.0.0.1:4173/**. Stop the server with Ctrl+C. To select another port on macOS/Linux, use `PORT=8080 npm start`.

The server exposes only `dist/` on your local loopback interface. Alternatively, serve `dist/` using a static web host. Do not open `index.html` directly as a `file:` URL: lessons load through browser fetch requests. No server-side API, database, credentials or paid audio service is required. The public hosted version is linked above; this local server does not publish your machine.

## Checks

```sh
npm test
```

Tests validate curriculum structure, glossary/prerequisite coverage, preservation of earlier lesson data, reference search ranking, progress parsing/merging/storage behavior, and synthesized audio event schedules using mocks. Mock audio checks do **not** certify audible quality. See [verification scope](docs/VERIFICATION.md).

## Reference coverage and provenance

The guide has **655 canonical reference rows**, including scoped helpers and command families—not 655 universally available standalone functions. It combines a pinned October 3, 2026 cheat-sheet inventory with a bounded October 28, 2026 official-source audit. Aliases, legacy names, optional engines and environment dependencies are labeled.

Some examples were tested as pure patterns against published Strudel packages version 1.2.6; others are source-reviewed fragments. Neither means every example was executed in the current live Strudel browser or heard. Read each entry's notes and [machine-readable coverage scope](dist/reference-scope.json). There is no claim to cover every callable in every version or extension.

See [source provenance](dist/sources.json) and [notices](NOTICES.md). No Strudel runtime, third-party sample library, artist recording or copied composition is bundled.

## License

The original application code, styles, HTML, tests and tooling are under the [MIT License](LICENSE). Original course prose and educational data are **not included in that code-license grant**; no separate content reuse license is granted here. Third-party names, documentation and linked packages retain their own rights and licenses. See [NOTICES.md](NOTICES.md) for scope.
