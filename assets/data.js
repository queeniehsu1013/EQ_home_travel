/* EQ Home Travel · 旅行資料。未來其他旅程可以複製本結構另建頁面。 */
window.EQ_TRIP = {
  title: '曼谷，聖誕節見！',
  days: [
    { date:'12/23',weekday:'三', short:'抵達', title:'初見曼谷，遇見聖誕夜', subtitle:'CentralWorld · 抹茶 · 聖誕燈飾',tone:'easy',toneLabel:'輕鬆啟程',illustration:'🎄',intro:'第一天以入住、拍聖誕樹與慢慢享受百貨商圈為主。',events:[
      {time:'09:45',title:'桃園出發',desc:'TPE 桃園機場第二航廈起飛；提前準備小孩零食與薄外套。',emoji:'✈️'},
      {time:'下午',title:'入境與入住飯店',desc:'抵達 BKK 後通關領行李，搭車前往 Sindhorn Midtown；依實際抵達時間休息。',emoji:'🏨',place:'Sindhorn Midtown Hotel Bangkok'},
      {time:'17:00',title:'CentralWorld 聖誕散步',desc:'拍聖誕樹、逛百貨、吃晚餐；人多時不勉強久留。',emoji:'🎄',place:'CentralWorld Bangkok'},
      {time:'順路',title:'Sanji Matcha Bar',desc:'有空再喝一杯抹茶拿鐵，不必特地繞路。',emoji:'🍵',place:'Sanji Matcha Bar CentralWorld Bangkok',optional:true},
      {time:'20:00',title:'回飯店休息',desc:'保留體力，準備明天的動物探險。',emoji:'🌙'}
    ]},
    {date:'12/24',weekday:'四',short:'動物園',title:'長頸鹿與小小探險家',subtitle:'Safari World · 一整天的動物時光',tone:'active',toneLabel:'今天較耗體力',illustration:'🦒',intro:'全程唯一的大型戶外景點。包車往返，表演挑喜歡的看就好。',events:[
      {time:'07:30',title:'早餐、準備出發',desc:'帶水、防曬、帽子、濕紙巾與小愛的推車。',emoji:'🥐'},
      {time:'08:00',title:'包車前往 Safari World',desc:'預留約 60–90 分鐘以上車程；聖誕旺季以當日路況為準。',emoji:'🚗',place:'Safari World Bangkok'},
      {time:'09:00',title:'Safari Park · 乘車看動物',desc:'先確認園區遊覽車與 Safari Park 的票券包含項目。',emoji:'🦓',place:'Safari World Bangkok'},
      {time:'11:30',title:'園內午餐＋補水',desc:'讓孩子好好坐下休息，不用趕每一場表演。',emoji:'🍱'},
      {time:'12:30',title:'Marine Park',desc:'挑 1–2 場適合孩子的活動；表演時間依園區當日公告。',emoji:'🐬',place:'Safari World Bangkok'},
      {time:'15:00',title:'返回飯店',desc:'晚上不再排正式景點，附近吃飯或外帶即可。',emoji:'🌿'}
    ]},
    {date:'12/25',weekday:'五',short:'逛街',title:'聖誕節，媽媽也要好好玩',subtitle:'船麵 · Siam · 按摩 · 聖誕市集',tone:'medium',toneLabel:'彈性購物日',illustration:'🎁',intro:'上午吃船麵，中午逛泰國選物；爸爸帶孩子休息，媽媽按摩。傍晚市集視體力擇一。',events:[
      {time:'09:00',title:'飯店早餐',desc:'睡飽再慢慢出門。',emoji:'☀️'},
      {time:'11:00',title:'Baan Kuay Tiew Ruathong 船麵',desc:'勝利紀念碑附近；小孩可詢問不辣、清淡的湯底選項。',emoji:'🍜',place:'Baan Kuay Tiew Ruathong 1/7 Thanon Ratchawithi Bangkok'},
      {time:'12:30',title:'Siam Square & Siam Discovery',desc:'找泰國設計小物、Gentlewoman 包包、鞋子、ODS 選物；最多抓 2 小時。',emoji:'👜',place:'Siam Discovery Bangkok'},
      {time:'14:30',title:'DIORA Langsuan · 媽媽按摩',desc:'建議事先預約 60–90 分鐘；爸爸帶孩子回飯店休息。',emoji:'💆‍♀️',place:'DIORA Langsuan Bangkok'},
      {time:'17:00',title:'One Bangkok 聖誕市集',desc:'手作、燈飾、晚餐。若孩子累了就直接回飯店。請行前再次確認活動日期。',emoji:'✨',place:'One Bangkok',optional:true},
      {time:'替代',title:'ICONSIAM 河岸燈飾',desc:'若想以河景＋聖誕樹為主，可替換 One Bangkok；不建議同晚跑兩處。',emoji:'🌟',place:'ICONSIAM Bangkok',optional:true}
    ]},
    {date:'12/26',weekday:'六',short:'河畔',title:'脆皮豬、恐龍與河畔晚風',subtitle:'Mr. Joe · Jurassic World · Asiatique',tone:'medium',toneLabel:'午後河畔散步',illustration:'🦖',intro:'把同區域景點放同一天；恐龍若太刺激可直接跳過，只逛河畔夜市。',events:[
      {time:'09:00',title:'飯店早餐／泳池',desc:'今天早上不早起，留點玩水與慢慢整理的時間。',emoji:'🏊'},
      {time:'11:30',title:'Mr. Joe 脆皮豬',desc:'313/7 Thanon Chan；招牌脆皮豬與胡椒粿汁，安排在中午。',emoji:'🍖',place:'Kuay Jab Mr Joe 313/7 Thanon Chan Bangkok'},
      {time:'13:00',title:'前往 Asiatique 河濱',desc:'小孩可散步、喝飲料、稍作休息。',emoji:'🌊',place:'Asiatique The Riverfront Bangkok'},
      {time:'15:00',title:'Jurassic World: The Experience',desc:'預估約 60 分鐘，確認是否適合怕大聲音的小愛。',emoji:'🦕',place:'Jurassic World The Experience Bangkok',optional:true},
      {time:'16:30',title:'Asiatique 河濱夜市',desc:'紀念品、晚餐與摩天輪；約 19:00 返飯店。',emoji:'🎡',place:'Asiatique The Riverfront Bangkok'},
      {time:'候補',title:'洽圖洽週末市集',desc:'若取消恐龍與河濱日，可改上午逛手作與包包，下午回飯店休息；不和原行程硬塞。',emoji:'🛍️',place:'Chatuchak Weekend Market Bangkok',optional:true}
    ]},
    {date:'12/27',weekday:'日',short:'回家',title:'裝滿回憶，慢慢回家',subtitle:'早餐 · 退房 · BKK 機場',tone:'easy',toneLabel:'輕鬆回程',illustration:'✈️',intro:'不安排景點，交通抓寬鬆，早點到機場準備回台灣。',events:[
      {time:'08:00',title:'飯店早餐、整理行李',desc:'檢查護照、隨身物品、小朋友的玩具。',emoji:'🧳'},
      {time:'11:00',title:'退房，前往 BKK',desc:'視車況調整；國際線以起飛前約 3 小時到機場為目標。',emoji:'🚗',place:'Suvarnabhumi Airport Bangkok'},
      {time:'16:05',title:'從曼谷飛回桃園',desc:'旅程結束，下一趟見。',emoji:'✈️'}
    ]}
  ],
  categories:[
    {id:'all',label:'全部'}, {id:'food',label:'美食'}, {id:'shop',label:'選物・市集'}, {id:'matcha',label:'抹茶'}, {id:'relax',label:'按摩'}, {id:'play',label:'親子'}
  ],
  places:[
    {name:'Safari World 野生世界',category:'play',emoji:'🦒',tag:'確定必去',desc:'Safari Park 乘車遊園與 Marine Park；建議包車，整天只排這裡。',query:'Safari World Bangkok',day:'12/24'},
    {name:'CentralWorld 聖誕商圈',category:'shop',emoji:'🎄',tag:'確定必去',desc:'第一天散步拍聖誕裝置、逛百貨、吃晚餐。',query:'CentralWorld Bangkok',day:'12/23'},
    {name:'Baan Kuay Tiew Ruathong',category:'food',emoji:'🍜',tag:'必吃',desc:'妳收藏的勝利紀念碑船麵，1/7 Ratchawithi Road。',query:'Baan Kuay Tiew Ruathong 1/7 Thanon Ratchawithi Bangkok',day:'12/25'},
    {name:'Mr. Joe 脆皮豬',category:'food',emoji:'🍖',tag:'必吃',desc:'313/7 Thanon Chan；招牌脆皮豬與胡椒粿汁。',query:'Kuay Jab Mr Joe 313/7 Thanon Chan Bangkok',day:'12/26'},
    {name:'Siam Discovery · ODS',category:'shop',emoji:'🎨',tag:'泰國設計',desc:'有質感的文創、選物、生活雜貨；和 Siam Square 一起逛。',query:'Siam Discovery Bangkok',day:'12/25'},
    {name:'Siam Square · Gentlewoman',category:'shop',emoji:'👜',tag:'包包鞋子',desc:'泰國設計服飾、托特包、鞋子與特色小店。',query:'Siam Square Bangkok',day:'12/25'},
    {name:'One Bangkok 聖誕市集',category:'shop',emoji:'🎁',tag:'聖誕限定',desc:'晚間燈飾與手作攤位；行前再確認活動與開放時間。',query:'One Bangkok',day:'12/25'},
    {name:'ICONSIAM 河畔',category:'shop',emoji:'✨',tag:'聖誕替代',desc:'漂亮河景與百貨燈飾；可取代 One Bangkok，不同晚都去才輕鬆。',query:'ICONSIAM Bangkok',day:'候補'},
    {name:'Asiatique 河濱夜市',category:'shop',emoji:'🎡',tag:'親子夜市',desc:'河畔散步、摩天輪與紀念品；和 Jurassic World 同區域。',query:'Asiatique The Riverfront Bangkok',day:'12/26'},
    {name:'Chatuchak 洽圖洽市集',category:'shop',emoji:'🧺',tag:'候補',desc:'週末尋寶、手作與包包；天熱人多，取代河畔日而非加塞。',query:'Chatuchak Weekend Market Bangkok',day:'候補'},
    {name:'Sanji Matcha Bar',category:'matcha',emoji:'🍵',tag:'抹茶拿鐵',desc:'CentralWorld 3 樓附近，第一天順路喝。',query:'Sanji Matcha Bar CentralWorld Bangkok',day:'12/23'},
    {name:'ChaEn Matcha',category:'matcha',emoji:'🍵',tag:'抹茶拿鐵',desc:'Siam 商圈抹茶選項；以實際店址與營業資訊為準。',query:'ChaEn Matcha Siam Square One Bangkok',day:'12/25'},
    {name:'CHAYA & CO.',category:'matcha',emoji:'🫖',tag:'茶具候補',desc:'找茶筅、茶碗、茶杓；如果距離太遠就不特地跑。',query:'CHAYA and CO Bangkok',day:'候補'},
    {name:'DIORA Langsuan',category:'relax',emoji:'💆',tag:'媽媽時間',desc:'離飯店近；爸爸顧孩子，媽媽預約 60–90 分鐘。',query:'DIORA Langsuan 36 Soi Langsuan Bangkok',day:'12/25',url:'https://booking.dioraworld.com/'},
    {name:'Perception Blind Massage',category:'relax',emoji:'🌿',tag:'CP 值候補',desc:'若想找更平價的足部按摩可比較療程與分店位置。',query:'Perception Blind Massage Bangkok',day:'候補',url:'https://perceptionblindmassage.com/'},
    {name:'Copper Beyond Buffet',category:'food',emoji:'🍽️',tag:'需預約 · 可選',desc:'Gaysorn Amarin 分店。若確定吃，取代 12/25 午餐，不額外加塞。',query:'Copper Beyond Buffet Gaysorn Amarin Bangkok',day:'候補',url:'https://linktr.ee/copperbeyondbuffet'},
    {name:'Jurassic World: The Experience',category:'play',emoji:'🦖',tag:'可選',desc:'Asiatique 沉浸式恐龍體驗，可能有吼叫和強烈聲光；先評估小愛接受度。',query:'Jurassic World The Experience Bangkok',day:'12/26'}
  ],
  todos:[
    {title:'預約 Safari World 門票',note:'確認 Safari Park、Marine Park、園區車與表演時間'},
    {title:'安排 Safari World 包車',note:'12/24 往返、確認兒童座椅需求'},
    {title:'預約 DIORA Langsuan',note:'12/25 下午，60–90 分鐘'},
    {title:'確認 Jurassic World 是否參加',note:'評估小愛是否怕恐龍聲光'},
    {title:'決定是否預約 Copper Buffet',note:'若要吃則替換船麵午餐；確認兒童身高收費'},
    {title:'確認 BKK 機場接送',note:'12/23 接機、12/27 送機'},
    {title:'請飯店備註 2 位兒童同行',note:'保留訂房經理確認免費共床的 Email'},
    {title:'查詢聖誕市集最新公告',note:'One Bangkok、CentralWorld、ICONSIAM'}
  ]
};
