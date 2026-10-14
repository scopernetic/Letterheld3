# Letterheld 1.3.0
Frameworkloze mobile-first browserapp met geïntegreerde Learning Core v1, vijf leermodules en een originele gelaagde avatarwinkel.

## Starten
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`. Gebruik geen `file://`, omdat ES modules, JSON-imports en de service worker een webserver nodig hebben.

## Testen
```bash
npm test
npm run check
```
Er worden geen dependencies geïnstalleerd.

## Uploaden
Upload de volledige inhoud van deze map naar de documentroot. `index.html` is het startbestand. Behoud alle relatieve mappen.

## Curriculumstatus
De map `data/goals/` bevat compacte, eigen samenvattingen en officiële referentie-ID's. De officiële AHOVOKS-publicatie blijft de gezaghebbende bron. Een skilllink is een gedeeltelijke of directe bijdrage en is geen claim dat Letterheld een volledig minimumdoel afdekt.
