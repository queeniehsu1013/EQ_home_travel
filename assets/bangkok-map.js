/* Bangkok interactive map. Illustrated pins are conceptual, Google Maps handles navigation. */
(() => {
'use strict';
const spots=[
 {key:'hotel',n:1,name:'Sindhorn Midtown 飯店',sub:'全程住宿・Langsuan',day:0,x:49,y:57,query:'Sindhorn Midtown Hotel Bangkok',match:['Sindhorn Midtown']},
 {key:'central',n:2,name:'CentralWorld',sub:'12/23・聖誕商圈',day:1,x:47,y:35,query:'CentralWorld Bangkok',match:['CentralWorld']},
 {key:'safari',n:3,name:'Safari World',sub:'12/24・動物園',day:2,x:82,y:26,query:'Safari World Bangkok',match:['Safari World','Safari Park','Marine Park']},
 {key:'noodle',n:4,name:'Baan Kuay Tiew 船麵',sub:'12/25・勝利紀念碑',day:3,x:53,y:21,query:'Baan Kuay Tiew Ruathong 1/7 Thanon Ratchawithi Bangkok',match:['Baan Kuay Tiew','船麵']},
 {key:'siam',n:5,name:'Siam Discovery',sub:'12/25・文創購物',day:3,x:28,y:45,query:'Siam Discovery Bangkok',match:['Siam Discovery','Siam Square']},
 {key:'diora',n:6,name:'DIORA Langsuan',sub:'12/25・媽媽按摩',day:3,x:70,y:56,query:'DIORA Langsuan 36 Soi Langsuan Bangkok',match:['DIORA']},
 {key:'one',n:7,name:'One Bangkok',sub:'12/25・聖誕市集',day:3,x:78,y:72,query:'One Bangkok',match:['One Bangkok']},
 {key:'joe',n:8,name:'Mr. Joe 脆皮豬',sub:'12/26・午餐',day:4,x:38,y:73,query:'Kuay Jab Mr Joe 313/7 Thanon Chan Bangkok',match:['Mr. Joe','Mr Joe']},
 {key:'asiatique',n:9,name:'Asiatique＋侏羅紀世界',sub:'12/26・河畔夜市',day:4,x:29,y:91,query:'Asiatique The Riverfront Bangkok',match:['Asiatique','Jurassic World']}
];
const section=document.getElementById('trip-map');if(!section)return;
const canvas=document.getElementById('map-canvas'),list=document.getElementById('map-location-list'),filters=document.getElementById('map-day-filters'),selected=document.getElementById('map-selected');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let day=0,current='hotel';
const locate=url=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(url);
spots.forEach(p=>{const b=document.createElement('button');b.type='button';b.className='map-pin';b.dataset.key=p.key;b.setAttribute('aria-label',p.n+' '+p.name);b.textContent=p.n;b.style.left=p.x+'%';b.style.top=p.y+'%';b.addEventListener('click',()=>focus(p.key,false));canvas.appendChild(b)});
function paint(){
 filters.innerHTML=[{d:0,name:'全部'},{d:1,name:'12/23'},{d:2,name:'12/24'},{d:3,name:'12/25'},{d:4,name:'12/26'}].map(p=>'<button type="button" data-day="'+p.d+'" class="'+(day===p.d?'active':'')+'" aria-pressed="'+(day===p.d)+'">'+p.name+'</button>').join('');
 filters.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{day=Number(b.dataset.day);paint()}));
 const visible=spots.filter(p=>day===0||p.day===day||p.day===0);
 list.innerHTML=visible.map(p=>'<button type="button" class="map-place-button '+(p.key===current?'active':'')+'" data-spot="'+p.key+'"><span class="map-place-number">'+p.n+'</span><span><strong>'+esc(p.name)+'</strong><small>'+esc(p.sub)+'</small></span></button>').join('');
 list.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>focus(b.dataset.spot,true)));
 canvas.querySelectorAll('.map-pin').forEach(b=>{const p=spots.find(s=>s.key===b.dataset.key);b.classList.toggle('active',p.key===current);b.classList.toggle('dimmed',day!==0 && p.day!==0 && p.day!==day);b.setAttribute('aria-pressed',String(p.key===current));});
 const p=spots.find(p=>p.key===current);selected.innerHTML='<h3>'+esc(p.name)+'</h3><p>'+esc(p.sub)+'｜點位為手繪示意，非精確座標。</p><a href="'+locate(p.query)+'" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航 ↗</a>';
}
function focus(key,jump){if(!spots.some(p=>p.key===key))return;current=key;day=0;paint();if(jump){section.scrollIntoView({behavior:'smooth',block:'start'});const b=canvas.querySelector('[data-key="'+key+'"]');setTimeout(()=>{if(b)b.focus({preventScroll:true})},200)}}
function findSpot(txt){return spots.find(p=>p.match.some(k=>txt.toLowerCase().includes(k.toLowerCase())))}
function decorateEvents(){
 const root=document.getElementById('day-detail');if(!root)return;
 root.querySelectorAll('.event').forEach(item=>{if(item.querySelector('.map-jump'))return;const title=item.querySelector('.event-title');const p=findSpot((title?.textContent||'')+' '+(item.querySelector('.event-desc')?.textContent||''));if(!p)return;const target=item.querySelector('.event-actions')||item;const button=document.createElement('button');button.type='button';button.className='map-jump';button.textContent='🗺️ 在地圖查看';button.addEventListener('click',()=>focus(p.key,true));target.appendChild(button)});
}
const itinerary=document.getElementById('day-detail');
if(itinerary){const observer=new MutationObserver(()=>decorateEvents());observer.observe(itinerary,{childList:true,subtree:true});decorateEvents();}
paint();
})();
