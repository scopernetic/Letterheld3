import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(new URL('..',import.meta.url).pathname);
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(d,x.name)):path.join(d,x.name))}
test('geen directe platform-API in modules',()=>{for(const f of walk(path.join(root,'modules')).filter(x=>x.endsWith('.js'))){const s=fs.readFileSync(f,'utf8');assert(!/localStorage|speechSynthesis|Android|Capacitor/.test(s),f)}});
test('avatarassets bestaan',()=>{const items=JSON.parse(fs.readFileSync(path.join(root,'data/avatar/items.json')));assert(items.length>=30);for(const i of items)assert(fs.existsSync(path.join(root,i.asset)),i.asset)});
test('mobile-first garanties aanwezig',()=>{const s=fs.readFileSync(path.join(root,'css/app.css'),'utf8');for(const x of['100dvh','safe-area-inset-top','@media(max-width:620px)','@media(max-height:600px)'])assert(s.includes(x))});
test('Roundflow bevat next en antwoordvergrendeling',()=>{const s=fs.readFileSync(path.join(root,'modules/shared/quiz-module.js'),'utf8');assert(s.includes('if(answered)return'));assert(s.includes('data-action="next"'));assert(s.includes('ctx.speech.speak(repeatText)'))});
