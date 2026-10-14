# Architectuur Letterheld 1.3.0
`js/app.js` orkestreert. `js/learning/core.js` beheert doelen, skills, evidence, mastery en learning briefs. Iedere leermodule exporteert `definition` en `create(ctx)` en gebruikt dezelfde quizlifecycle: `init`, `render`, `handleAction`, `newRound`, `destroy`.

Modules gebruiken contextservices voor profiel, spraak, rewards, learning core en avatar. Ze roepen geen opslag-, browser-spraak- of Android-API rechtstreeks aan.

## Nieuwe module toevoegen
1. Registreer skills in `data/learning/skills.json`.
2. Voeg pure generator en tests toe.
3. Exporteer `definition` en `create`.
4. Registreer de module in `js/registry.js`.
5. Voeg alle runtimebestanden aan `sw.js` toe.

## Evidence en mastery
Een antwoord schrijft maximaal één compact evidence-event per `roundId + skillId`. Mastery gebruikt configureerbare startregels; die zijn Letterheldbeleid en geen officiële norm. Begeleidersbeleid kan later via `progress.learning.policy` worden uitgebreid.
