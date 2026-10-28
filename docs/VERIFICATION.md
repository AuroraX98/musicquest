# Verification scope — release 1.1.1

## Automated checks shipped here

Run `npm test` from the repository root. These checks cover:

- 165 unique lessons with prerequisites, examples, practice feedback and contextual glossary definitions.
- Preservation of all 108 earlier lesson objects; 57 additional genre studies and their section diagrams.
- 655 distinct reference rows and retained prior lookup names.
- Exact-name and alias search ranking, category filtering and empty results.
- 69 authored audio listening views: synthesized pitches, onsets, durations, low gain, 12-second bound and cleanup in a mocked Web Audio environment.
- Progress opt-in/off, known-ID filtering, duplicate inputs, import merging, export roundtrip, invalid input, clear epochs, stale-tab writes, serialized actions and storage failures using isolated fixtures.

These are not substitutes for audible listening or browser interaction tests. JavaScript syntax validity alone does not verify Strudel semantics. Reference entries distinguish source review from event-level pure-pattern tests performed separately against published core/mini/transpiler 1.2.6 (53 assertions for 35 added entries). Those packages are not embedded here.

## Manual/browser evidence

An isolated desktop browser audit exercised course navigation, all seven genre-topic routes, lesson stages, wrong/correct feedback, reference search/filter/pagination, glossaries, export, synthetic import variants, progress saving/reload and audio control states. It found issues with import replacement, stale-tab clearing, malformed routes, focus, search-state restoration and a two-bar playback label. The release includes targeted fixes; final regression status is recorded below before publication.

## Limits

No claim of complete WCAG conformance, every browser, mobile-device testing, actual listening certification, or exhaustive current Strudel API coverage is made. The available browser interface did not provide narrow-viewport/zoom control or native file-dialog cancellation. Source logic covers empty file selection, but that is not an observed native-cancel test. Audio events and controls were tested; actual device-output quality was not heard. No offline cache or cloud progress sync is implemented.

Web Locks provide cross-tab write serialization where supported. Without that API, fresh storage reads and events reduce stale state but do not make writes transactionally atomic. Use one tab when changing saving preferences.

## Final regression

On October 28, 2026, the source owner ran the targeted post-fix cloud-browser regression after the independent reviewer became unavailable. Two valid synthetic imports retained both reflected lessons. With two tabs open, Clear changed both from 2 to 0 and disabled the stale reflection action; reload remained 0. Saving was restored to off. Malformed unit/glossary routes and missing topics recovered; sidebar navigation focused MAIN; reference query/category and glossary query survived lesson navigation and Back. Note, written-chord, chord-sequence and comparison Play/Stop states worked, including keyboard Enter. The two-bar button label matched its example. Captured console errors were browser-extension metadata errors, not app-origin errors.

The sanitized package was started through its `npm start` command by the managed preview daemon and opened in a real cloud browser. Home showed both course counts, release 1.1.1 and the first Strudel lesson with its glossary. Automated tests passed under Node.js 24.22.1. Node 18 is the declared minimum, not a separately tested runtime. This is local-package verification. Public hosting access was subsequently enabled using the hosting service; the deployed 1.1.1 page loaded in the cloud browser at its canonical public URL. A credential-free shell request returned HTTP403 and the web extractor did not support the host; these do not establish an anonymous HTTP pass. No network-disabled browser test was performed.
