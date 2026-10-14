# Testrapport Letterheld 1.3.0

## Resultaat
- Node-testcases: 17/17 geslaagd.
- Syntax en data: OK: 35 syntax- en datacontroles
- Lokale HTTP-resourcecontrole: 69/69 bestanden bereikbaar.
- ZIP heruitpakken en tests opnieuw draaien: geslaagd (zie verificatie onderaan).

## Automatisch afgedekt
- Goal-/skillreferenties en prerequisitecycli.
- Letters: aantallen keuzes, uniciteit en anti-repeat.
- Woorden: metadata, auditieve vraagcontracten en patroonkeuzes.
- Cijfers: bereiken, hoeveelheden en unieke afleiders.
- Rekenen: niet-negatieve uitkomsten en hoeveel-samen.
- Producten/delen: tafellimieten, exacte delingen en inverse feiten.
- Platformneutraliteit van modules en RoundEngine-flow.
- Avatarassetpaden en gelaagde metadatacatalogus.
- Statische mobile-firstvereisten.

## Niet als uitgevoerd geclaimd
- Echte browserconsole en DOM-interactie.
- Werkelijke uitspraakkwaliteit van beschikbare nl-BE-browserstemmen.
- Pixelmatige test op fysieke smartphones.
- Installatieprompt en volledige offline-herstart in een echte browser.

## Finale ZIP-verificatie
De ZIP is opnieuw uitgepakt. Vanuit de uitgepakte map zijn `node --test` en `npm run check` opnieuw geslaagd.
