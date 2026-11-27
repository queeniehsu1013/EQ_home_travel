/* Bangkok 2026 · point-to-point transport guide. Approximate times are planning buffers, not live routing. */
(()=>{
'use strict';
const hotel='Sindhorn Midtown Hotel Bangkok, 68 Langsuan Road, Bangkok, Thailand';
const places={
 airport:'Suvarnabhumi Airport (BKK), Bangkok, Thailand',
 hotel,
 central:'CentralWorld, Bangkok, Thailand',
 safari:'Safari World Bangkok, Thailand',
 noodles:'Baan Kuay Tiew Ruathong, 1/7 Thanon Ratchawithi, Bangkok, Thailand',
 siam:'Siam Discovery, Bangkok, Thailand',
 diora:'DIORA Langsuan, 36 Soi Langsuan, Bangkok, Thailand',
 one:'One Bangkok, Bangkok, Thailand',
 iconsiam:'ICONSIAM, Bangkok, Thailand',
 joe:'Kuay Jab Mr Joe, 313/7 Thanon Chan, Bangkok, Thailand',
 asiatique:'Asiatique The Riverfront, Bangkok, Thailand',
 jurassic:'Jurassic World The Experience, Asiatique Bangkok, Thailand',
 sathorn:'Sathorn Pier, Bangkok, Thailand',
 taksin:'BTS Saphan Taksin Station, Bangkok, Thailand',
 copper:'Copper Beyond Buffet Gaysorn Amarin Bangkok, Thailand',
 chatuchak:'Chatuchak Weekend Market, Bangkok, Thailand'
};
const days=[
 {title:'12/23（三）｜機場 → 飯店 → 聖誕商圈',subtitle:'第一天以接機、入住及步行為主',legs:[
  {a:'airport',b:'hotel',name:'BKK 機場 → Sindhorn Midtown',mode:'driving',icon:'🚗',label:'機場接送／Grab',time:'約 45–90 分鐘',note:'兩大兩小＋行李，優先預約適合的接送車；尖峰可能更久。BKK 國際航廈依預約指示到指定上車區。'},
  {a:'hotel',b:'central',name:'飯店 → CentralWorld',mode:'walking',icon:'🚶',label:'步行',time:'約 12–18 分鐘',note:'從 Langsuan 往 Chit Lom／Ratchaprasong，部分路段可使用空中步道；推車注意電梯與出入口。'},
  {a:'central',b:'hotel',name:'CentralWorld → 飯店',mode:'walking',icon:'🚶',label:'步行或短程 Grab',time:'步行約 12–18 分鐘',note:'聖誕人潮多，若孩子睡著或下雨就叫車，不必硬走。'}
 ]},
 {title:'12/24（四）｜Safari World 包車日',subtitle:'盡量同車往返，省去轉乘與等待',legs:[
  {a:'hotel',b:'safari',name:'飯店 → Safari World',mode:'driving',icon:'🚐',label:'包車／預約專車',time:'約 60–100 分鐘',note:'08:00 左右出發；預留塞車及園區入場時間，確認是否需兒童安全座椅。'},
  {a:'safari',b:'hotel',name:'Safari World → 飯店',mode:'driving',icon:'🚐',label:'原車接回',time:'約 60–110 分鐘',note:'建議與司機約定 15:00–15:30 接送位置；門票與園區 Safari Park 車輛另確認。'}
 ]},
 {title:'12/25（五）｜船麵 → Siam → 按摩 → 聖誕市集',subtitle:'上午跨區 Grab；中午搭 BTS；午後回飯店分流',legs:[
  {a:'hotel',b:'noodles',name:'飯店 → 船麵 Baan Kuay Tiew Ruathong',mode:'driving',icon:'🚗',label:'Grab',time:'約 20–45 分鐘',note:'餐廳在勝利紀念碑一帶，帶孩子直接叫車較省力。'},
  {a:'noodles',b:'siam',name:'船麵 → Siam Discovery',mode:'transit',icon:'🚆',label:'BTS 空鐵（推薦）',time:'含步行約 20–35 分鐘',note:'步行到 BTS Victory Monument，搭 Sukhumvit Line 往 Kheha 方向 3 站至 Siam；再步行到 Siam Discovery。怕熱可改 Grab。'},
  {a:'siam',b:'hotel',name:'Siam 商圈 → 飯店',mode:'transit',icon:'🚆',label:'BTS 1 站＋步行',time:'約 15–25 分鐘',note:'從 Siam 搭 Sukhumvit Line 往 Kheha 方向 1 站到 Chit Lom，步行約 5–10 分鐘回飯店；有購物袋可 Grab。'},
  {a:'hotel',b:'diora',name:'飯店 → DIORA Langsuan',mode:'walking',icon:'🚶',label:'步行／短程叫車',time:'約 10–20 分鐘',note:'按摩時爸爸和孩子可留在飯店；請以地址導航確認 DIORA 門口位置。'},
  {a:'hotel',b:'one',name:'飯店 → One Bangkok 聖誕市集',mode:'driving',icon:'🚗',label:'Grab（推薦）',time:'約 15–35 分鐘',note:'一家四口晚間外出，Grab 最少轉乘；出發前查看當日聖誕活動與人潮。'},
  {a:'one',b:'hotel',name:'One Bangkok → 飯店',mode:'driving',icon:'🚗',label:'Grab',time:'約 15–35 分鐘',note:'19:00 左右返飯店；若孩子累了可直接跳過這站。'}
 ],alternate:[
  {a:'hotel',b:'iconsiam',name:'若改去 ICONSIAM（取代 One Bangkok）',mode:'driving',icon:'🚗',label:'Grab',time:'約 25–55 分鐘',note:'河畔聖誕夜景可替換 One Bangkok，不建議同晚跑兩處；回程同樣叫車。'},
  {a:'hotel',b:'copper',name:'若改吃 Copper Beyond Buffet',mode:'walking',icon:'🚶',label:'步行',time:'約 10–20 分鐘',note:'Gaysorn Amarin 鄰近 CentralWorld；要吃就取代船麵，不要另外塞進去。'}
 ]},
 {title:'12/26（六）｜脆皮豬 → 河濱恐龍／夜市',subtitle:'兩個主要景點同區域，直接叫車最輕鬆',legs:[
  {a:'hotel',b:'joe',name:'飯店 → Mr. Joe 脆皮豬',mode:'driving',icon:'🚗',label:'Grab',time:'約 25–55 分鐘',note:'前往 Thanon Chan 的指定地址，午餐時段留意塞車。'},
  {a:'joe',b:'asiatique',name:'Mr. Joe → Asiatique',mode:'driving',icon:'🚗',label:'Grab',time:'約 10–25 分鐘',note:'到河濱後留時間坐著休息、吃點心；不必急著進恐龍體驗。'},
  {a:'asiatique',b:'jurassic',name:'Asiatique → Jurassic World',mode:'walking',icon:'🚶',label:'園區內步行',time:'約 3–10 分鐘',note:'就在 Asiatique 園區內，依預約入場時間報到；不參加恐龍也能直接逛夜市。'},
  {a:'asiatique',b:'hotel',name:'Asiatique → 飯店',mode:'driving',icon:'🚗',label:'Grab（推薦）',time:'約 25–60 分鐘',note:'帶兩個小孩、晚餐後直接回飯店最省體力。'}
 ],alternate:[
  {a:'asiatique',b:'sathorn',name:'想體驗搭船：Asiatique → Sathorn Pier',mode:'transit',icon:'⛴️',label:'免費接駁船（16:00 後）',time:'船程及候船約 20–45 分鐘',note:'官方公告約 16:00–23:30、25–30 分鐘一班；到 Sathorn Pier 後可步行至 BTS Saphan Taksin，再轉車到 Chit Lom。上船前核對當天船班。'},
  {a:'hotel',b:'chatuchak',name:'若整天改逛洽圖洽週末市集',mode:'transit',icon:'🚆',label:'BTS／Grab',time:'約 35–60 分鐘',note:'僅作為取代河濱日的方案，不與 Mr. Joe、Jurassic World 同天全塞。'}
 ]},
 {title:'12/27（日）｜飯店 → BKK 機場',subtitle:'返台日不排景點，預留國際線報到緩衝',legs:[
  {a:'hotel',b:'airport',name:'Sindhorn Midtown → BKK 機場',mode:'driving',icon:'🚗',label:'預約接送／Grab',time:'約 45–90 分鐘',note:'16:05 起飛，以 13:00 左右抵達機場為目標。建議 11:00 左右離飯店，依當日交通再提前。'}
 ]}
];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function directions(leg){const q=new URLSearchParams({api:'1',origin:places[leg.a],destination:places[leg.b],travelmode:leg.mode});return 'https://www.google.com/maps/dir/?'+q.toString();}
function render(){const root=document.getElementById('day-transport');if(!root)return;const selected=document.querySelector('#day-tabs [aria-selected="true"]');const i=Number(selected?.dataset.day||0);const day=days[i];if(!day)return;const legHtml=(leg)=>'<article class="transfer-card"><div class="transfer-icon" aria-hidden="true">'+esc(leg.icon)+'</div><div class="transfer-main"><strong>'+esc(leg.name)+'</strong><div class="transfer-meta"><span>'+esc(leg.label)+'</span><span>'+esc(leg.time)+'</span></div><p>'+esc(leg.note)+'</p><a href="'+esc(directions(leg))+'" target="_blank" rel="noopener noreferrer" class="transfer-link">開啟 Google Maps 點到點路線 ↗</a></div></article>';root.innerHTML='<section class="transport-panel" aria-label="當日點到點交通"><div class="transport-head"><span class="section-kicker">HOW TO GET THERE · DAY '+(i+1)+'</span><h3>🚏 點到點交通</h3><p>'+esc(day.subtitle)+'</p></div><div class="transfer-list">'+day.legs.map(legHtml).join('')+'</div>'+(day.alternate?.length?'<details class="transfer-alternates"><summary>🌿 展開替代路線／可選行程（'+day.alternate.length+'）</summary><div class="transfer-list">'+day.alternate.map(legHtml).join('')+'</div></details>':'')+'<p class="transport-caution">⏱️ 時間為規劃用的寬鬆估計，非即時路況或保證班次；按導航會顯示出發時的路線與交通狀況。交通方式可依孩子體力彈性改成 Grab。</p></section>';}
document.querySelector('#day-tabs')?.addEventListener('click',e=>{if(e.target.closest('[data-day]'))render()});
render();
})();
