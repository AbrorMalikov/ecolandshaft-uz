/* ==========================================================================
   BUILD-SITE-ZH.JS — CHINESE LOCALIZATION FOR ECO LANDSHAFT (ecolandshaft.uz)
   Slugs are Chinese words in Latin script (Pinyin):
   /zh/, /zh/shangcheng/, /zh/fuwu/..., /zh/guanyu-women/, /zh/lianxi-women/
   ========================================================================== */

const BRAND_ZH = {
  name: 'Eco Landshaft',
  domain: 'https://ecolandshaft.uz',
  phoneFormatted: '+998 (97) 783-82-53',
  phoneDisplay: '+998 (97) 783-82-53',
  phoneRaw: '+998977838253',
  telegramUrl: 'https://t.me/+998977838253',
  telegramHandle: 't.me/+998977838253',
  address: '塔什干市萨马尔罕达尔沃扎街2号 (Samarqand Darvoza St. 2)',
  mapIframe:
    '<iframe src="https://yandex.uz/map-widget/v1/?ll=69.231580%2C41.317540&z=16&pt=69.231580,41.317540,pm2rdm" width="100%" height="100%" frameborder="0" allowfullscreen="true" style="position:relative;border:0;border-radius:24px;" title="Eco Landshaft 乌兹别克斯坦总部"></iframe>'
};

const SERVICES_ZH = [
  {
    slug: 'caoping-puzhe-yu-bozhong',
    url: '/zh/fuwu/caoping-puzhe-yu-bozhong/',
    baseUrl: '/xizmatlar/gazon-ekish-va-yotqizish/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    shortName: '草坪铺设与草籽播种',
    title: '天然草卷铺设、草籽播种与绿化养护工程',
    metaTitle: '塔什干专业草坪铺设与草籽播种 — 天然卷筒草坪基地直供 | Eco Landshaft',
    metaDesc: '乌兹别克斯坦全境提供专业天然草卷铺设与草籽播种工程。自有50公顷草坪繁育基地，当日鲜起直发，激光土地整平，丹麦DLF草籽，官方质保12个月。',
    keywords: '塔什干草坪铺设, 乌兹别克斯坦天然草卷价格, 草籽播种绿化, 卷筒草坪直销, 庭院绿化草坪施工',
    h1: '乌兹别克斯坦专业草坪铺设、天然草卷安装与播种工程',
    priceRange: '15,000 – 35,000 索姆/m²',
    basePrice: 20000,
    clusterTag: '草坪铺设工程',
    calcKey: 'rulonli-gazon',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '2年成熟期密植成品天然草卷或丹麦原装草籽播种，1天内即可打造生机盎然的翠绿草毯。',
    usps: [
      '自有50公顷草坪基地，每日清晨现切起草当日送达',
      '激光平地整平、土壤改良施肥与防杂草基层处理',
      '签署正式施工合同，农艺专家全程指导并提供1年质保'
    ],
    comparisonTable: {
      title: '成品天然卷筒草坪与草籽播种方案对比与造价',
      headers: ['对比维度', '成品天然草卷 (即铺即绿)', '草籽播种施工'],
      rows: [
        ['成坪周期', '铺装后1天即成翠绿草坪', '14–25天发芽，2–3个月成坪'],
        ['抗杂草能力', '纯度99%，草根紧密天然压制杂草', '苗期需要定期人工除草养护'],
        ['根系发达度', '2年苗圃期成熟厚实根毯', '需持续浇灌3–5个月扎根'],
        ['参考单价', '18,000 – 35,000 索姆/m²', '15,000 – 25,000 索姆/m²']
      ]
    },
    steps: [
      { num: '01', title: '免费上门测量与土质勘测', desc: '工程师现场测量面积、测试土壤酸碱度与排水坡度，出具精准方案。' },
      { num: '02', title: '土地翻耕平整与基层改良', desc: '深度旋耕土地、铺设营养黑土、压实整平并预埋喷灌管网。' },
      { num: '03', title: '错缝精细铺设 / 交叉播种', desc: '标准工字交错精细拼缝铺卷，或采用德国设备双向交叉均匀播种。' },
      { num: '04', title: '重型滚压与定根深透浇水', desc: '专用滚筒压实排除根部空气气泡，彻底浇透定根水确保成活。' }
    ],
    faqs: [
      { q: '新铺的草坪什么时候可以踩踏走动？', a: '铺设7–10天后可轻度行走，14天草根与地面土壤深度融合扎实后，即可正常自由踩踏与活动。' },
      { q: '塔什干以外的州府城市可以送货和施工吗？', a: '可以，我们在撒马尔罕、费尔干纳、安集延、布哈拉等所有12个州均设有专业物流配送与移动施工团队，24小时内直达。' }
    ]
  },
  {
    slug: 'zuqiu-changdi-yu-tiyu-chang-jianshe',
    url: '/zh/fuwu/zuqiu-changdi-yu-tiyu-chang-jianshe/',
    baseUrl: '/xizmatlar/futbol-maydonlari-va-tennis-kortlari-qurish/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/></svg>`,
    shortName: '足球场与运动场建设',
    title: '五人制迷你足球场与网球场一站式交钥匙建设',
    metaTitle: '乌兹别克斯坦迷你足球场建设 — FIFA认证人造草坪交钥匙工程 | Eco Landshaft',
    metaDesc: '承建标准20x40米商业迷你足球场、网球场与多功能运动场。透水碎石地基、FIFA认证50毫米单丝运动草坪、抗风围网及专业LED照明系统。',
    keywords: '足球场建设塔什干, 迷你足球场造价, fifa人造草坪乌兹别克斯坦, 网球场工程建设, 商业球场投资',
    h1: '乌兹别克斯坦五人制迷你足球场与运动场一站式交钥匙工程',
    priceRange: '起价 217,000 索姆/m²',
    basePrice: 217000,
    clusterTag: '一站式球场',
    calcKey: 'stadion-qurish',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '建设标准商业迷你球场（20×40米，800m²），采用高透水碎石基层、FIFA认证50mm单丝人造草坪、6米镀锌防风围网与LED高杆投光灯，15–25天交付。',
    usps: [
      '采用FIFA国际足联认证50mm耐磨单丝草，填充高纯石英砂与环保SBR颗粒',
      '科学透水暗渠地基系统，暴雨后30分钟即可快速排干恢复比赛',
      '整套交钥匙工程：钢架立柱、防撞阻燃围网、标准球门与200W专业LED灯组'
    ],
    comparisonTable: {
      title: '标准运动场地建设方案与规格参数',
      headers: ['场地配置', '商业迷你足球场 (20×40m)', '学校/社区运动场', '网球场与排球场'],
      rows: [
        ['场地净尺寸', '20 × 40 米 (800 平方米)', '18 × 36 米 (648 平方米)', '18 × 36 米 (648 平方米)'],
        ['地面面层', 'FIFA 50mm 单丝高耐磨草坪', 'FIFA 40–50mm 运动草坪', 'EPDM弹性橡胶或硬地丙烯酸'],
        ['围网高度', '4 – 6 米 加强型高强聚乙烯网', '4 米 标准防撞围网', '3 – 4 米 镀锌铁丝网+尼龙网'],
        ['照明系统', '8–12组 200W 专业球场LED灯', '6–8组 150W 投光灯', '8组 防眩光网球专用LED灯']
      ]
    },
    steps: [
      { num: '01', title: '场地平整与土方开挖', desc: '机械开挖25–35公分，设计双向泛水坡度并满铺防草透水土工布。' },
      { num: '02', title: '双层透水碎石地基压实', desc: '分层铺设粗碎石与级配小石子，重型压路机振动压实，浇筑混凝土锁边。' },
      { num: '03', title: '钢结构围网与灯杆组装', desc: '焊接60×60mm热镀锌立柱，涂刷防锈烤漆，绷紧高强防风尼龙围网。' },
      { num: '04', title: '草坪热熔拼接与颗粒填充', desc: '专用聚氨酯胶水连接带拼接，裁切白色界线，机械均匀填充石英砂与橡胶颗粒。' }
    ],
    faqs: [
      { q: '投资一座商业20×40米五人制足球场多久能够收回成本？', a: '在乌兹别克斯坦，标准五人制球场按每天出租运营8–10小时计算，平均投资回报周期约为 10 至 16 个月。' },
      { q: '可以在其他州的乡村或县城建设球场吗？', a: '完全可以。我们的专业施工队自带重型机械与原厂材料，已在全乌兹别克斯坦250多个城镇成功交付标准化球场。' }
    ]
  },
  {
    slug: 'xiangjiao-dimian-yu-ertong-youledang',
    url: '/zh/fuwu/xiangjiao-dimian-yu-ertong-youledang/',
    baseUrl: '/xizmatlar/rezina-qoplama-va-bolalar-maydonchalari/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    shortName: 'EPDM橡胶地坪与儿童游乐场',
    title: '儿童乐园EPDM/SBR无缝防摔橡胶地坪与游乐设施安装',
    metaTitle: '塔什干EPDM无缝彩色橡胶地坪 — 儿童游乐场地安全施工 | Eco Landshaft',
    metaDesc: '专业施工抗跌减震无缝彩色EPDM与SBR橡胶颗粒地坪、橡胶安全地砖与儿童游乐设施一体化安装。符合国家儿童游乐安全认证，质保12个月。',
    keywords: 'epdm橡胶地坪塔什干, 儿童游乐场橡胶地面, 橡胶颗粒地坪造价, 无缝弹性地坪, 幼儿园安全地面',
    h1: '乌兹别克斯坦EPDM无缝彩色橡胶地坪与儿童乐园建设工程',
    priceRange: '150,000 – 250,000 索姆/m²',
    basePrice: 180000,
    clusterTag: '无缝橡胶地坪',
    calcKey: 'rezina-maydon',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '高弹性缓冲吸能无缝彩色橡胶地面（10–40mm），适用于幼儿园、学校操场、住宅小区中庭及户外健身器械区。',
    usps: [
      '符合严格跌落缓冲安全防护标准，有效防止儿童奔跑跌摔受伤',
      '环保无毒耐紫外线EPDM橡胶颗粒，12种鲜艳耐候颜色自由拼图',
      '透水防滑全天候使用，耐高温与极寒，施工后24小时即可固化投入使用'
    ],
    comparisonTable: {
      title: '橡胶地坪类型、厚度规格与造价明细表',
      headers: ['地坪类型', '建议厚度', '主要适用场所', '参考造价（包工包料）'],
      rows: [
        ['单层基础SBR橡胶地坪', '10 – 15 mm', '慢跑步道、健身力量器械区、室外健身角', '150,000 – 180,000 索姆/m²'],
        ['双层复合 SBR+EPDM彩色面层', '15 – 20 mm', '幼儿园活动场地、中小学校、小区儿童乐园', '185,000 – 220,000 索姆/m²'],
        ['100%纯新料EPDM彩色地坪', '20 – 40 mm', '高档市政公园、大型商业综合体户外游乐场', '220,000 – 260,000 索姆/m²'],
        ['成品拼装橡胶地砖 (500×500)', '20 – 40 mm', '健身房、庭院步道、临时可拆卸运动区', '160,000 – 210,000 索姆/m²']
      ]
    },
    steps: [
      { num: '01', title: '免费现场勘测与选色设计', desc: '检测水泥或沥青基础平整度，提供12种EPDM实物色卡并设计图案方案。' },
      { num: '02', title: '聚氨酯专用底胶涂刷打底', desc: '彻底清洁地面浮灰油污，滚涂渗透型单组份聚氨酯底胶强化黏结附着力。' },
      { num: '03', title: '机械搅拌与无缝热压摊铺', desc: '强制式搅拌机精准配比颗粒与进口环保胶水，专用摊铺机压实收光。' },
      { num: '04', title: '游乐设施加固安装交付', desc: '24小时常温完全固化后，安装固定儿童组合滑梯、秋千及健身器材。' }
    ],
    faqs: [
      { q: '乌兹别克斯坦夏季高温或冬季寒冬，橡胶地面会开裂变形吗？', a: '不会。我们使用的进口聚氨酯粘合胶水与高弹EPDM颗粒具有极佳的高低温韧性，耐温范围为 -40°C 至 +60°C，永不开裂起鼓。' },
      { q: '除地面外，滑梯、秋千与户外健身器材你们也负责供货安装吗？', a: '是的，我们拥有全套经过欧盟安全认证的儿童游乐设备与户外健身器材，提供地面与设备一站式供货与组装。' }
    ]
  },
  {
    slug: 'yuanyi-jingguan-sheji-yu-lvhua',
    url: '/zh/fuwu/yuanyi-jingguan-sheji-yu-lvhua/',
    baseUrl: '/xizmatlar/landshaft-dizayn-va-kokalamzorlashtirish/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    shortName: '3D园林景观设计',
    title: '高端庭院3D景观设计、名贵树木种植与整体绿化工程',
    metaTitle: '塔什干高端庭院景观设计 — 3D实景效果图与别墅绿化工程 | Eco Landshaft',
    metaDesc: '为乌兹别克斯坦私人别墅、庄园度假村及商业楼盘提供高端3D园林景观设计与一站式绿化施工。包含名贵名木移植、假山水景、大理石铺装与夜景灯光。',
    keywords: '园林景观设计塔什干, 庭院绿化施工, 3d别墅绿化效果图, 观赏树木移植乌兹别克斯坦, 景观假山水景',
    h1: '乌兹别克斯坦高端3D园林景观规划、庭院绿化与水景亮化工程',
    priceRange: '个性化定制方案 (100m²起)',
    basePrice: 49000,
    clusterTag: '3D景观规划',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '逼真3D日景夜景渲染、适生气候名贵针叶乔木、高山岩石景致、天然石板汀步与智能庭院夜景氛围照明。',
    usps: [
      '委托施工一站式交钥匙工程，尊享3D全案景观设计费全额免费减免',
      '自有苗圃直接甄选树龄成熟、耐干旱耐晒的优质名贵乔灌木与草坪',
      '配备资深农艺师全周期跟进，提供整整1年的苗木成活率官方质保'
    ],
    comparisonTable: {
      title: '主流景观风格与施工方案对比',
      headers: ['设计风格', '核心设计亮点', '推荐植物配置', '标准施工周期'],
      rows: [
        ['现代简约极简风', '利落几何硬质铺装、翠绿草坪与隐藏式线性LED灯带', '欧洲红豆杉、绿柱侧柏、薰衣草、造型黑松', '7 – 14 天'],
        ['欧式古典花园风', '对称式林荫小径、芬芳开花灌木与优雅景观花架凉亭', '树状月季、八仙花、白兰花、蓝云杉', '10 – 20 天'],
        ['东方禅意日式庭院', '自然原石置石、枯山水碎石溪流、日式石灯笼', '日本红枫、迎客松、造型罗汉松、生态青苔', '14 – 25 天']
      ]
    },
    steps: [
      { num: '01', title: '主创景观设计师现场勘测', desc: '精准测绘地貌地形、分析光照朝向、分析土壤土质与家庭功能需求。' },
      { num: '02', title: '全景3D效果图与预算编制', desc: '交付逼真日夜景3D鸟瞰渲染图、植物配置苗木清单及透明造价预算表。' },
      { num: '03', title: '隐蔽工程与智能管网铺设', desc: '土方塑形、开挖地下排水通道、铺设美国Hunter喷灌管网与弱电电缆。' },
      { num: '04', title: '名木定植与成坪草毯交付', desc: '大规格特选乔木机械定植、铺设花灌木及天然草卷，撒铺装饰白鹅卵石。' }
    ],
    faqs: [
      { q: '可以先只委托你们做3D景观设计方案吗？', a: '完全可以。如后续绿化工程继续交由我们团队施工，前期支付的全部3D设计费将从工程总款中全额返还抵扣（即设计免费）。' },
      { q: '你们种植的树木花草有死亡包补包换保障吗？', a: '只要园区配套安装了自动喷灌系统，所有由我方选配种植的树木花草均享有整整 1 年的成活保证，枯死无条件免费更换。' }
    ]
  },
  {
    slug: 'zidong-guangai-xitong-hunter',
    url: '/zh/fuwu/zidong-guangai-xitong-hunter/',
    baseUrl: '/xizmatlar/avtomatik-sugorish-tizimi/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    shortName: '美国Hunter智能喷灌',
    title: '美国原装Hunter与Rain Bird草坪自动喷灌及滴灌系统',
    metaTitle: '乌兹别克斯坦智能自动喷灌系统 — 美国原装Hunter设备安装 | Eco Landshaft',
    metaDesc: '塔什干专业安装美国原装Hunter与Rain Bird草坪自动喷灌及滴灌系统。手机Wi-Fi远程控制，配备智能雨量传感器，节水达45%，质保2年。',
    keywords: '自动喷灌系统塔什干, 美国hunter喷头, 草坪喷灌安装价格, 乌兹别克斯坦滴灌工程, 智能节水灌溉',
    h1: '美国原装Hunter与Rain Bird智能草坪自动喷灌系统工程',
    priceRange: '起价 49,000 索姆/m²',
    basePrice: 49000,
    clusterTag: '智能自动灌溉',
    calcKey: 'avtopoliv-landshaft',
    img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '美国原厂Hunter与Rain Bird智能草坪喷灌设备，支持手机APP全球远程操控，结合天气预报节水达45%，1–2天快速安装。',
    usps: [
      '100%美国原装进口Hunter与Rain Bird地埋散射喷头、旋转喷头及电磁阀组',
      '官方质保2年，每年秋末由专业技术工程师免费提供高压气泵吹水防冻越冬维护',
      '专业无痕开槽技术，即使在已成熟铺好的现有草坪上也能整洁微创施工'
    ],
    comparisonTable: {
      title: '人工胶管浇水与美国Hunter智能喷灌对比',
      headers: ['对比项目', 'Hunter智能喷灌系统 (Wi-Fi智控)', '传统人工水管漫灌'],
      rows: [
        ['时间耗费', '全自动夜间精准定时运行，零人工耗费', '每天需专人拉皮管浇水 1.5 – 3 小时'],
        ['喷洒均匀度', '360°精密重叠喷洒，覆盖均匀度达 98%', '水流不均，低洼处积水泡根，边缘干枯发黄'],
        ['节水效率', '带雨量智能感应，下雨停喷，节水高达 45%', '水流过大冲刷表土，蒸发浪费严重'],
        ['树木与花卉', '专设根部恒压微滴灌管路，直达植物深根', '高压水枪直接冲击脆弱花瓣和根系']
      ]
    },
    steps: [
      { num: '01', title: '水压流量测定与水力计算', desc: '水利工程师测定自来水或水井出水量与静动态水压，科学划分喷灌分区。' },
      { num: '02', title: '地埋管道与电磁阀组开挖', desc: '开挖35公分埋深沟槽，铺设耐高压PE管道并组装Hunter防水电磁阀箱。' },
      { num: '03', title: '地埋伸缩喷头精准安装', desc: '安装平整PGP旋转喷头与MP微喷喷嘴，喷头与草坪表面完美齐平不挡割草机。' },
      { num: '04', title: 'Wi-Fi控制器调试与联网', desc: '配置智能手机APP多分区浇水程序、测试无线雨量传感器及云端联网联动。' }
    ],
    faqs: [
      { q: '家里院子已经铺好草坪了，还能加装自动喷灌吗？', a: '完全可以。我们采用专用草皮掀起机械切缝，将原有草皮整齐掀起埋管后再回填复原，施工后浇水压实，数日内即恢复如初看不出痕迹。' },
      { q: '冬季冰冻天气水管会不会冻裂爆管？', a: '不会。每年入冬前（10–11月），我们的售后维保专员会携带大功率空气压缩机对全套管路进行高压吹水排空，彻底排干余水防冻。' }
    ]
  },
  {
    slug: 'chuizhi-lvhua-yu-taihe-zhuangshi',
    url: '/zh/fuwu/chuizhi-lvhua-yu-taihe-zhuangshi/',
    baseUrl: '/xizmatlar/vertikal-kokalamzorlashtirish-fitodekor/',
    svgIcon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    shortName: '立体垂直绿化与生态苔藓',
    title: '室内外立体绿植墙、生态植物幕墙与永生驯鹿苔藓艺术装饰',
    metaTitle: '塔什干垂直立体绿植墙与永生苔藓装饰 — 办公与展厅绿化 | Eco Landshaft',
    metaDesc: '专业设计制作室内外立体植物墙、自动循环水培活体绿植幕墙与北欧进口永生驯鹿苔藓艺术墙。长达10年免浇水免打理，降噪净化空气。',
    keywords: '立体绿化塔什干, 活体植物墙乌兹别克斯坦, 永生苔藓艺术墙, 办公室绿植装饰, 垂直绿化施工',
    h1: '乌兹别克斯坦室内外立体垂直绿化、活体植物墙与永生苔藓工程',
    priceRange: '起价 1,800,000 索姆/m²',
    basePrice: 1800000,
    clusterTag: '绿植生态墙',
    calcKey: 'suniy-gazon',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85',
    shortDesc: '配备微电脑自动循环水培的活体热带绿植生态幕墙，以及免浇水免日照的北欧原装进口永生驯鹿苔藓艺术背景墙。',
    usps: [
      '北欧进口永生驯鹿苔藓，经过天然环保甘油保鲜处理，长达10年免浇水免日晒',
      '无土清洁水培系统配合定时微滴灌与全光谱植物补光灯，室内无异味不招虫',
      '支持企业发光字Logo定制镶嵌、激光异形雕刻底板与艺术拼色拼接'
    ],
    comparisonTable: {
      title: '永生保鲜苔藓艺术墙与活体植物幕墙对比',
      headers: ['特性参数', '北欧进口永生苔藓墙', '室内活体热带植物墙'],
      rows: [
        ['浇水与维护', '完全无需浇水，天然抗静电不吸灰', '微电脑控制封闭式水循环自动滴灌'],
        ['光照环境要求', '无需阳光直射（地下室、无窗走廊亦可）', '需配备植物全光谱生长专用补光灯'],
        ['观赏使用寿命', '保持自然鲜嫩柔软质感长达 7 – 10 年', '四季常青常新，需定期修剪枯叶'],
        ['安装施工速度', '模块化艺术面板，现场1天即可拼挂完成', '骨架防水模块拼装，需 2 – 4 天完工']
      ]
    },
    steps: [
      { num: '01', title: '墙体结构与环境光照勘测', desc: '评估墙面承重能力、检测室内相对湿度与测量天然采光流明照度。' },
      { num: '02', title: '定制艺术视觉排版设计', desc: '根据空间风格渲染3D艺术拼色效果图，精确规划企业Logo融合位置。' },
      { num: '03', title: '防潮基层与植物模块安装', desc: '高分子防水背板紧密贴合，手工精细粘贴高密度永生苔藓或活体水培盒。' },
      { num: '04', title: '自动水循环与照明系统交接', desc: '调试补光灯定时器、测试微循环供水系统并交付详尽日常养护手册。' }
    ],
    faqs: [
      { q: '永生苔藓墙需要定期喷水保持湿度吗？', a: '千万不要喷水！喷水反而会洗掉保鲜保护甘油层。只要室内空气湿度保持在 40%–70% 之间，苔藓即可永久保持如鲜活般的柔软与鲜绿。' },
      { q: '可以在苔藓墙中间嵌入公司的发光亚克力企业Logo吗？', a: '完全可以。我们拥有专业激光数控切割设备，可在苔藓中完美嵌入霓虹发光字、金属拉丝背发光Logo或定制图案。' }
    ]
  }
];

const PRODUCTS_ZH = [
  {
    id: 'gazon-10mm',
    category: 'suniy',
    catLabel: '人造草坪 • 园艺景观',
    name: '10毫米景观人造草坪（Green Garden Eco）',
    pile: '10毫米草高',
    stock: '厂家现货一手批发',
    retail: 48800,
    wholesale: 39500,
    unit: 'm²',
    specs: ['草高: 10毫米', '宽幅: 2米/4米', '抗紫外线抗老化'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'gazon-20mm-standart',
    category: 'suniy',
    catLabel: '人造草坪 • 庭院多功能',
    name: '20毫米庭院人造草坪（Evergreen Comfort）',
    pile: '20毫米草高',
    stock: '厂家一手批发',
    retail: 68000,
    wholesale: 54000,
    unit: 'm²',
    specs: ['草高: 20毫米', '双层高密度底背', '针数密度: 16,800针/m²'],
    img: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'gazon-50mm-fifa',
    category: 'suniy',
    catLabel: '专业运动草坪 • FIFA标准',
    name: '50毫米专业足球场人造草坪（FIFA Standard Football Pro）',
    pile: '50毫米单丝',
    stock: '国际认证标准',
    retail: 135000,
    wholesale: 112000,
    unit: 'm²',
    specs: ['50毫米高耐磨单丝', '分特值: 12,000 Dtex', '10年耐候寿命'],
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-standart',
    category: 'rulonli',
    catLabel: '天然卷筒草坪',
    name: '自营基地鲜切天然草卷（早熟禾 Kentucky Bluegrass）',
    pile: '2年期成熟草根',
    stock: '当日基地起草直发',
    retail: 18000,
    wholesale: 13000,
    unit: 'm²',
    specs: ['每卷规格: 0.8 m²', '根系极其发达紧密', '喜阳耐半阴'],
    img: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rulonli-deluxe',
    category: 'rulonli',
    catLabel: '天然卷筒草坪',
    name: '高端天然草卷「加拿大绿宝石 Canada Green Elite」',
    pile: '特级密植草坪',
    stock: '专业苗圃基地',
    retail: 26000,
    wholesale: 19500,
    unit: 'm²',
    specs: ['草地早熟禾+高羊茅', '翡翠浓绿色泽', '超强抗旱耐践踏'],
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'urug-dlf',
    category: 'urug',
    catLabel: '进口草坪种子 • 丹麦',
    name: '丹麦原装进口 DLF Trifolium 优质草种（10公斤袋装）',
    pile: '10公斤可播约300 m²',
    stock: '丹麦原装保真',
    retail: 950000,
    wholesale: 790000,
    unit: '袋',
    specs: ['播种量: 1公斤/30 m²', '发芽率达: 98%', '官方原装品质认证'],
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rezina-epdm-plitka',
    category: 'rezina',
    catLabel: '安全橡胶地坪',
    name: 'EPDM环保彩色橡胶地砖及无缝地坪（20毫米）',
    pile: '20毫米环保EPDM',
    stock: '官方质保12个月',
    retail: 185000,
    wholesale: 150000,
    unit: 'm²',
    specs: ['厚度: 10–40毫米可选', '高弹减震防跌伤', '12种鲜艳耐候配色'],
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=700&q=80'
  }
];

const REGIONS_ZH = [
  {
    slug: 'samarkand',
    url: '/zh/samarkand/',
    baseUrl: '/samarkand/',
    name: '撒马尔罕',
    locative: '在撒马尔罕',
    cities: '撒马尔罕市、乌尔古特、卡塔库尔干、阿克达里亚、帕斯特达尔戈姆、泰拉克',
    deliveryTime: '12 至 24 小时直达',
    desc: '面向撒马尔罕全境提供人造草坪与天然卷筒草批发直供，承接五人制足球场与EPDM橡胶儿童游乐地坪交钥匙施工。'
  },
  {
    slug: 'fergana',
    url: '/zh/fergana/',
    baseUrl: '/fergana/',
    name: '费尔干纳',
    locative: '在费尔干纳',
    cities: '费尔干纳市、浩罕、马尔吉兰、库瓦、里什坦、阿尔蒂阿雷克',
    deliveryTime: '12 至 24 小时直达',
    desc: '费尔干纳盆地厂家一手现货供应人造草皮及FIFA足球专用草，提供运动场地整体设计与交钥匙施工服务。'
  },
  {
    slug: 'andijan',
    url: '/zh/andijan/',
    baseUrl: '/andijan/',
    name: '安集延',
    locative: '在安集延',
    cities: '安集延市、阿萨卡、沙赫里汉、哈纳巴德、库尔干秋别、巴雷克奇',
    deliveryTime: '14 至 24 小时直达',
    desc: '在安集延承接迷你足球场、网球场建设、EPDM无缝减震地坪施工及全境草坪材料批发配送。'
  },
  {
    slug: 'bukhara',
    url: '/zh/bukhara/',
    baseUrl: '/bukhara/',
    name: '布哈拉',
    locative: '在布哈拉',
    cities: '布哈拉市、卡甘、吉日杜万、卡拉库尔、瓦布肯特、罗米坦',
    deliveryTime: '16 至 24 小时直达',
    desc: '针对布哈拉干旱强日照气候提供高抗紫外线耐晒人造草坪、美国Hunter智能自动灌溉、球场建设与景观设计。'
  },
  {
    slug: 'kashkadarya',
    url: '/zh/kashkadarya/',
    baseUrl: '/kashkadarya/',
    name: '卡什卡达里亚',
    locative: '在卡什卡达里亚',
    cities: '卡尔希市、沙赫里萨布兹、古扎尔、卡桑、基塔卜、穆巴拉克、亚卡巴格',
    deliveryTime: '14 至 24 小时直达',
    desc: '卡什卡达里亚州全境承建标准迷你足球场，大批量批发FIFA 50mm草坪及铺设儿童安全橡胶地坪。'
  },
  {
    slug: 'namangan',
    url: '/zh/namangan/',
    baseUrl: '/namangan/',
    name: '纳曼干',
    locative: '在纳曼干',
    cities: '纳曼干市、丘斯特、卡桑赛、图拉库尔干、帕普、乌奇库尔干',
    deliveryTime: '12 至 24 小时直达',
    desc: '纳曼干专业园林绿化工程、Hunter喷灌系统设计、天然卷筒草与人造草坪一手直销及球场建设。'
  }
];

const BLOG_POSTS_ZH = [
  {
    slug: 'tianran-caoping-he-caoxi-bozhong-duibi',
    title: '成品天然卷筒草坪与草籽播种该如何选？农艺专家深度对比',
    date: '2026年10月15日',
    category: '草坪养护百科',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
    excerpt: '结合乌兹别克斯坦气候、土壤特点与预算工期，为您深度分析成卷铺设与播种的优劣势。',
    link: '/zh/fuwu/caoping-puzhe-yu-bozhong/'
  },
  {
    slug: 'mini-zuqiu-changdi-jianshe-shouyi-fenxi',
    title: '建设一座20×40米五人制迷你足球场需要多少钱？投资回报期测算',
    date: '2026年10月10日',
    category: '球场工程建设',
    img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=900&q=80',
    excerpt: '塔什干及各州球场一站式造价清单：基层碎石、盲排暗渠、FIFA 50mm草坪、围网及LED球场灯全解析。',
    link: '/zh/fuwu/zuqiu-changdi-yu-tiyu-chang-jianshe/'
  },
  {
    slug: 'ertong-youledang-epdm-sbr-xiangjiao-dimian',
    title: '幼儿园与小区儿童乐园EPDM/SBR橡胶地坪选型指南：厚度与安全防跌标准',
    date: '2026年10月04日',
    category: '橡胶地坪知识',
    img: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=900&q=80',
    excerpt: '无缝彩色橡胶地坪在学校、幼儿园与商业游乐场中的不同厚度规范与安全减震要求。',
    link: '/zh/fuwu/xiangjiao-dimian-yu-ertong-youledang/'
  }
];

/* ==========================================================================
   COMPONENT RENDERERS (CHINESE)
   ========================================================================== */

function renderHeaderZh(basePath = '/zh/', context) {
  const { ICONS, renderLangSwitcherMenu } = context;
  const isServiceActive = basePath.startsWith('/zh/fuwu');
  const isShopActive = basePath.startsWith('/zh/shangcheng');
  const isAboutActive = basePath.startsWith('/zh/guanyu-women');
  const isBlogActive = basePath.startsWith('/zh/boke');
  const isContactActive = basePath.startsWith('/zh/lianxi-women');

  return `
  <!-- COMPACT STICKY HEADER (Chinese) -->
  <header class="site-header" role="banner">
    <div class="header-inner">
      <a href="/zh/" class="brand-logo" aria-label="Eco Landshaft 首页">
        <span class="logo-badge">${ICONS.leaf}</span>
        <span><span class="eco-green">Eco</span> Landshaft</span>
      </a>

      <nav class="main-nav" id="mainNavMenu" aria-label="主菜单导航">
        <div class="nav-item has-submenu">
          <a href="/zh/#servicesSection" class="nav-link js-submenu-trigger ${isServiceActive ? 'active' : ''}" aria-haspopup="true">
            <span>服务项目</span>
            <svg class="nav-chevron" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <div class="submenu-dropdown" role="menu" aria-label="服务列表">
            ${SERVICES_ZH.map((s) => `
            <a href="${s.url}" class="submenu-card-link" role="menuitem">
              <span class="submenu-icon">${s.svgIcon}</span>
              <div>
                <div class="submenu-title">${s.shortName}</div>
                <div class="submenu-price">${s.priceRange}</div>
              </div>
            </a>`).join('')}
            <div class="submenu-footer">
              <span>免费现场测量与方案预算：${BRAND_ZH.phoneDisplay}</span>
              <a href="/zh/#smartCalculator">在线精准算价器 →</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="/zh/shangcheng/" class="nav-link ${isShopActive ? 'active' : ''}">商城产品</a>
        </div>

        <div class="nav-item">
          <a href="/zh/guanyu-women/" class="nav-link ${isAboutActive ? 'active' : ''}">关于我们</a>
        </div>

        <div class="nav-item">
          <a href="/zh/boke/" class="nav-link ${isBlogActive ? 'active' : ''}">官方博客</a>
        </div>

        <div class="nav-item">
          <a href="/zh/lianxi-women/" class="nav-link ${isContactActive ? 'active' : ''}">联系我们</a>
        </div>
      </nav>

      <div class="header-actions">
${renderLangSwitcherMenu(basePath, 'zh')}

        <a href="tel:${BRAND_ZH.phoneRaw}" class="header-phone-btn">
          ${ICONS.phone}
          <span>${BRAND_ZH.phoneDisplay}</span>
        </a>

        <button type="button" class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="打开菜单">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderServicesGridSectionZh(context) {
  const { ICONS } = context;
  return `
      <section class="section-block" id="servicesSection">
        <div class="section-header">
          <div class="section-header-left">
            <span class="section-eyebrow">专业服务体系</span>
            <h2 class="section-title">
              草坪铺装、体育球场建设与<span>全案园林绿化</span>
            </h2>
            <p class="section-desc">
              所有工程项目均签署正式法律效力合同，预算透明一口价，提供官方质保保障。
            </p>
          </div>
          <button
            type="button"
            class="nav-pill-btn phone-cta js-open-modal"
            data-title="预约免费上门量尺与咨询"
            data-sub="留下您的联系电话 — 我们的项目经理将在15分钟内致电联系您。"
          >
            <span>预约免费咨询</span>
            <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
          </button>
        </div>

        <div class="services-bento-grid">
          ${SERVICES_ZH.map((s) => `
          <article class="service-bento-card">
            <a href="${s.url}" class="service-card-visual" aria-label="${s.title}">
              <img src="${s.img}" alt="${s.title}" loading="lazy" />
              <span class="service-price-glass">${s.priceRange}</span>
              <span class="service-cluster-badge">${s.clusterTag}</span>
            </a>
            <div class="service-card-body">
              <h3><a href="${s.url}">${s.title}</a></h3>
              <p>${s.shortDesc}</p>
              <ul class="usp-check-list">
                ${s.usps.map((u) => `<li><span class="check-dot">${ICONS.check}</span><span>${u}</span></li>`).join('')}
              </ul>
            </div>
            <div class="service-card-footer">
              <a href="${s.url}" class="btn-service-link">
                <span>查看详情方案</span>
                <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
              </a>
              <button
                type="button"
                class="circle-btn-black js-open-modal"
                data-title="${s.shortName} — 免费精准报价"
                data-sub="留下联系电话 — 专员将在15分钟内为「${s.shortName}」出具明细预算单。"
                aria-label="咨询 ${s.shortName}"
              >
                ${ICONS.arrowUpRight}
              </button>
            </div>
          </article>`).join('\n')}
        </div>
      </section>`;
}

function renderSmartCalculatorZh(defaultService = 'suniy-gazon', context) {
  const { ICONS } = context;
  return `
  <section class="section-block" id="smartCalculator">
    <div class="calculator-bento-shell" data-default-service="${defaultService}">
      <div class="section-header" style="margin-bottom: 8px;">
        <div class="section-header-left">
          <span class="glass-pill-tag">智能在线测算器</span>
          <h2 class="section-title" style="color: #FFFFFF; margin-top: 8px;">
            30秒快速测算您的项目预算
          </h2>
          <p class="section-desc" style="color: rgba(255,255,255,0.78);">
            请选择施工品类或草坪类型，并拖动滑动条指定您的场地面积。
          </p>
        </div>
      </div>

      <div class="calc-grid">
        <div class="calc-controls-panel">
          <span class="calc-step-label">1. 选择施工业务品类</span>
          <div class="calc-type-pills">
            <button type="button" class="calc-type-btn ${defaultService === 'suniy-gazon' ? 'active' : ''}" data-service="suniy-gazon">
              人造草坪<span>起价 48,800 索姆/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rulonli-gazon' ? 'active' : ''}" data-service="rulonli-gazon">
              天然卷筒草坪<span>9,000 – 30,000 索姆/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'gazon-ekish' ? 'active' : ''}" data-service="gazon-ekish">
              草籽播种平整<span>15,000 – 25,000 索姆/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'stadion-qurish' ? 'active' : ''}" data-service="stadion-qurish">
              足球场球场建设<span>起价 217,000 索姆/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'rezina-maydon' ? 'active' : ''}" data-service="rezina-maydon">
              EPDM橡胶地坪<span>150,000 – 250,000 索姆/m²</span>
            </button>
            <button type="button" class="calc-type-btn ${defaultService === 'avtopoliv-landshaft' ? 'active' : ''}" data-service="avtopoliv-landshaft">
              Hunter智能喷灌<span>起价 49,000 索姆/m²</span>
            </button>
          </div>

          <div class="calc-slider-group">
            <div class="calc-slider-header">
              <span class="calc-step-label" style="margin-bottom:0;">2. 场地面积（平方米 / 亩）</span>
              <span class="calc-area-display" id="calcAreaDisplay">150 平方米 (0.23 亩)</span>
            </div>
            <input
              type="range"
              id="calcAreaRange"
              class="range-slider"
              min="20"
              max="2000"
              step="10"
              value="150"
              aria-label="场地面积（平方米）"
            />
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:rgba(255,255,255,0.6); margin-top:6px;">
              <span>20 平方米</span>
              <span>800 平方米 (标准20×40米球场)</span>
              <span>2,000 平方米</span>
            </div>
          </div>

          <span class="calc-step-label">3. 可选配套增值服务</span>
          <div class="calc-options-row">
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptPrep" />
              <span>土地翻耕基底改良 (+15,000 索姆/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptInstall" checked />
              <span>专业人工铺装施工 (+20,000 索姆/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptIrrig" />
              <span>美国Hunter自动喷灌 (+45,000 索姆/m²)</span>
            </label>
            <label class="calc-check-card">
              <input type="checkbox" id="calcOptWholesale" />
              <span>大宗工程批发折扣 (-15%)</span>
            </label>
          </div>
        </div>

        <div class="calc-result-panel">
          <div>
            <span class="outline-pill-tag">预算初步估算</span>
            <div class="calc-total-price" id="calcTotalSum">16,350,000 索姆</div>
            <div class="calc-breakdown-list">
              <div class="calc-breakdown-item">
                <span>施工品类：</span>
                <span id="calcOutService">人造草坪（草高 20–50 毫米）</span>
              </div>
              <div class="calc-breakdown-item">
                <span>测算面积：</span>
                <span id="calcOutArea">150 平方米</span>
              </div>
              <div class="calc-breakdown-item">
                <span id="calcOutMatLabel">标准草卷数量 (2×25米)：</span>
                <span id="calcOutRolls">3 套/件</span>
              </div>
              <div class="calc-breakdown-item">
                <span>预估施工工期：</span>
                <span id="calcOutDays">2 – 4 天</span>
              </div>
              <div class="calc-breakdown-item">
                <span>工程师上门测量及勘测：</span>
                <span style="color:var(--green-700);">完全免费</span>
              </div>
            </div>
          </div>

          <form class="phone-only-form js-phone-form" data-context="在线算价器提交 (ZH)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="请输入您的电话号码"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>获取精准明细报价单</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function renderPortfolioSectionZh() {
  return `
  <section class="section-block" id="portfolioSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">工程案例实景</span>
        <h2 class="section-title">
          乌兹别克斯坦全境<span>已交付精品工程</span>
        </h2>
        <p class="section-desc">
          拖动「施工前后」对比滑块，查看我们在乌兹别克斯坦各地的真实落地项目案例。
        </p>
      </div>
      <div class="ecom-filter-tabs">
        <button type="button" class="ecom-tab-btn js-portfolio-tab active" data-pfilter="all">全部工程</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="gazon">草坪与景观</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="stadion">体育球场</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="rezina">橡胶地坪</button>
        <button type="button" class="ecom-tab-btn js-portfolio-tab" data-pfilter="video">视频实录</button>
      </div>
    </div>

    <div class="portfolio-bento-grid">
      <div class="before-after-card js-portfolio-item" data-pcat="gazon">
        <div class="ba-layer ba-after">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80" alt="施工后：成品翠绿天然草坪" loading="lazy" />
        </div>
        <div class="ba-layer ba-before">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80" alt="施工前：荒芜未经整理的土地" loading="lazy" />
        </div>
        <span class="ba-badge left">改造前</span>
        <span class="ba-badge right">完工后 (天然卷筒草)</span>
        <div class="ba-handle">
          <div class="ba-handle-circle">↔</div>
        </div>
        <input type="range" class="ba-range-input" min="5" max="95" value="50" aria-label="施工前后效果对比滑块" />
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="stadion">
          <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80" alt="五人制迷你足球场 20x40米" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">足球场建设</span>
              <span class="pile-badge">800 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">五人制足球场 (20×40米)</h3>
              <p style="font-size:0.76rem; opacity:0.82;">FIFA 50mm草坪、碎石盲排与LED高杆灯</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="rezina">
          <img src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=800&q=80" alt="儿童乐园EPDM无缝橡胶地坪" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">彩色橡胶地坪</span>
              <span class="pile-badge">420 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">住宅小区中庭儿童乐园安全地坪</h3>
              <p style="font-size:0.76rem; opacity:0.82;">无缝弹性抗跌伤EPDM环保颗粒</p>
            </div>
          </div>
        </article>
      </div>

      <div style="display:flex; flex-direction:column; gap:18px;">
        <article class="portfolio-item-card js-portfolio-item" data-pcat="video">
          <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" alt="3D景观与Hunter喷灌" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">视频实景</span>
              <span class="pile-badge">1,200 m²</span>
            </div>
            <button type="button" class="video-play-btn js-open-modal" data-title="索取高清工程视频实录" data-sub="留下您的联系电话 — 我们将通过Telegram发送项目高清视频实录。" aria-label="观看视频">
              ▶
            </button>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">3D景观造景、草坪铺设与Hunter喷灌</h3>
              <p style="font-size:0.76rem; opacity:0.82;">全案设计与一站式落地效果</p>
            </div>
          </div>
        </article>

        <article class="portfolio-item-card js-portfolio-item" data-pcat="gazon">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" alt="永生苔藓艺术背景墙" loading="lazy" />
          <div class="portfolio-overlay">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="glass-pill-tag">立体生态墙</span>
              <span class="pile-badge">45 m²</span>
            </div>
            <div>
              <h3 style="font-size:1.02rem; font-weight:700;">企业展厅永生驯鹿苔藓艺术墙</h3>
              <p style="font-size:0.76rem; opacity:0.82;">长达10年免浇水免日晒自然保鲜</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

function renderRegionsHubSectionZh() {
  return `
  <section class="section-block" id="regionsSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">服务辐射区域</span>
        <h2 class="section-title">
          塔什干及乌兹别克斯坦<span>各州府直供施工</span>
        </h2>
        <p class="section-desc">
          塔什干中央枢纽仓储中心现货储备，24小时内直达各州配送，专业施工团队全境交钥匙交付。
        </p>
      </div>
    </div>

    <div class="regions-grid">
      ${REGIONS_ZH.map((r) => `
      <a href="${r.url}" class="region-card">
        <div>
          <span class="outline-pill-tag" style="margin-bottom:8px;">24小时直达</span>
          <h4>${r.name}</h4>
          <p style="margin-top:4px;">草坪一手直发与球场一站式建设</p>
        </div>
        <div class="region-arrow">
          <span>查看详情</span>
          <span>→</span>
        </div>
      </a>`).join('')}
    </div>
  </section>`;
}

function renderContactAndMapSectionZh(context) {
  const { ICONS } = context;
  return `
  <section class="section-block" id="contactSection">
    <div class="section-header">
      <div class="section-header-left">
        <span class="section-eyebrow">联系我们</span>
        <h2 class="section-title">
          预约免费咨询与<span>总部展厅地址</span>
        </h2>
        <p class="section-desc">
          只需留下您的联系电话 — 我们的资深项目总监将在15分钟内与您致电沟通。
        </p>
      </div>
    </div>

    <div class="contact-bento-grid">
      <div class="contact-info-card">
        <div>
          <span class="outline-pill-tag">免费专属咨询</span>
          <h3 style="font-size:1.35rem; font-weight:800; margin:10px 0 6px;">
            留下您的电话 — 专员将在15分钟内致电
          </h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
            解答一切技术疑问，提供精准施工预算，并可预约工程师免费携带草样上门测量。
          </p>

          <form class="phone-only-form js-phone-form" data-context="联系表单 (ZH)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (97) 783-82-53"
              required
              aria-label="请输入您的电话号码"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>立即获取免费咨询</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>

        <div class="contact-detail-list">
          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.phone}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">服务热线 (24/7 全天候)：</div>
              <a href="tel:${BRAND_ZH.phoneRaw}" style="font-size:1rem; font-weight:700; color:var(--black-950);">${BRAND_ZH.phoneFormatted}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.send}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">Telegram 在线沟通：</div>
              <a href="${BRAND_ZH.telegramUrl}" target="_blank" rel="noopener" style="font-size:0.96rem; font-weight:700; color:var(--green-800);">${BRAND_ZH.telegramHandle}</a>
            </div>
          </div>

          <div class="contact-detail-item">
            <div class="contact-icon-circle">${ICONS.mapPin}</div>
            <div>
              <div style="font-size:0.73rem; color:var(--text-secondary); font-weight:500;">总部办公室及展厅地址：</div>
              <div style="font-size:0.9rem; font-weight:600; color:var(--black-950);">${BRAND_ZH.address}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-bento-card">
        ${BRAND_ZH.mapIframe}
      </div>
    </div>
  </section>`;
}

function renderFooterZh(context) {
  const { ICONS } = context;
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="/zh/" class="brand-logo" style="color:#FFFFFF; margin-bottom:12px;">
            <span class="logo-badge">${ICONS.leaf}</span>
            <span><span style="color:var(--green-300);">Eco</span> Landshaft</span>
          </a>
          <p style="font-size:0.82rem; color:rgba(255,255,255,0.68); margin-bottom:14px;">
            天然卷筒草坪与人造草坪厂家一手批发零售、五人制足球场建设及儿童游乐场安全橡胶地坪全案工程专家。
          </p>
          <div style="font-size:0.82rem; color:var(--green-300); font-weight:600;">
            ${BRAND_ZH.address}<br/>
            <a href="tel:${BRAND_ZH.phoneRaw}">${BRAND_ZH.phoneFormatted}</a> • <a href="${BRAND_ZH.telegramUrl}" target="_blank" rel="noopener">${BRAND_ZH.telegramHandle}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>工程服务项目</h4>
          <div class="footer-links">
            ${SERVICES_ZH.map((s) => `<a href="${s.url}">${s.shortName}</a>`).join('\n            ')}
          </div>
        </div>

        <div class="footer-col">
          <h4>商城产品与板块</h4>
          <div class="footer-links">
            <a href="/zh/shangcheng/">产品商城（全部品类）</a>
            <a href="/zh/shangcheng/renzao-caoping/">人造草坪产品目录</a>
            <a href="/zh/shangcheng/tianran-caoping/">天然卷筒草坪现货</a>
            <a href="/zh/guanyu-women/">关于我们</a>
            <a href="/zh/boke/">官方博客</a>
            <a href="/zh/lianxi-women/">联系我们</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>覆盖地区</h4>
          <div class="footer-links">
            ${REGIONS_ZH.map((r) => `<a href="${r.url}">${r.name}草坪与球场工程</a>`).join('\n            ')}
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 <strong>${BRAND_ZH.name} (ecolandshaft.uz)</strong> 版权所有。保留所有权利。</div>
        <div>结算方式：现金支付、Uzcard/Humo、对公银行转账（含增值税发票）及分期付款</div>
      </div>
    </div>
  </footer>

  <div class="modal-backdrop" id="quickLeadModal" role="dialog" aria-modal="true" aria-labelledby="modalLeadTitle">
    <div class="modal-glass-box">
      <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="关闭">✕</button>
      <span class="outline-pill-tag">免费专属咨询</span>
      <h3 id="modalLeadTitle" style="font-size:1.28rem; font-weight:800; margin:10px 0 6px;">
        免费咨询与精准预算报价
      </h3>
      <p id="modalLeadSub" style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:16px;">
        留下您的联系电话 — 工程师将在15分钟内致电联系您。
      </p>
      <form class="phone-only-form js-phone-form" data-context="弹窗咨询提交 (ZH)">
        <input
          type="tel"
          class="phone-input-pill"
          placeholder="+998 (__) ___-__-__"
          required
          aria-label="请输入您的电话号码"
        />
        <button type="submit" class="btn-pill-black-full">
          <span>提交咨询申请</span>
          <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
        </button>
      </form>
    </div>
  </div>

  <script src="/assets/js/app.js"></script>
</body>
</html>`;
}

function renderProductCardsZh(list = PRODUCTS_ZH, context) {
  const { ICONS } = context;
  return list.map((p) => `
      <article class="product-card" data-category="${p.category}" data-retail="${p.retail}" data-wholesale="${p.wholesale}" data-unit="${p.unit}">
        <div>
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
            <div class="product-top-badges">
              <span class="pile-badge">${p.pile}</span>
              <span class="stock-badge">${p.stock}</span>
            </div>
          </div>
          <div class="product-meta">${p.catLabel}</div>
          <h3>${p.name}</h3>
          <div class="product-specs">
            ${p.specs.map((sp) => `<span class="spec-chip">${sp}</span>`).join('')}
          </div>
        </div>
        <div class="product-price-row">
          <div class="product-price-val js-product-price">
            ${p.retail.toLocaleString('zh-CN')} 索姆/${p.unit}
            <small class="js-price-note">厂家一手批发价: ${p.wholesale.toLocaleString('zh-CN')} 索姆/${p.unit}</small>
          </div>
          <button
            type="button"
            class="btn-buy-quick js-open-modal"
            data-title="咨询产品: ${p.name}"
            data-sub="留下联系电话 — 专员将计算所需规格并组织快速发货。"
          >
            <span>立即订购</span>
            ${ICONS.arrowUpRight}
          </button>
        </div>
      </article>`).join('\n');
}

/* ==========================================================================
   PAGE BUILDERS (CHINESE)
   ========================================================================== */

function buildHomePageZh(context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BRAND_ZH.domain}/zh/#localbusiness`,
        name: BRAND_ZH.name,
        url: `${BRAND_ZH.domain}/zh/`,
        telephone: BRAND_ZH.phoneFormatted,
        priceRange: '9000 UZS - 3560000 UZS',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Samarkand Darvoza street, Building 2',
          addressLocality: 'Tashkent',
          addressCountry: 'UZ'
        },
        sameAs: [BRAND_ZH.telegramUrl]
      }
    ]
  };

  return `${renderHead({
    title: 'Eco Landshaft — 乌兹别克斯坦草坪铺装、人造草坪批发、足球场与儿童乐园建设 | ecolandshaft.uz',
    description: '塔什干人造草坪与天然卷筒草一手批发零售（起价9,000索姆/m²）。专业草坪铺装、播种绿化、五人制迷你足球场建设及EPDM无缝彩色橡胶地坪一站式交钥匙工程。',
    keywords: '人造草坪塔什干, 乌兹别克斯坦天然草坪购买, 草坪铺设造价, 足球场建设, epdm橡胶地坪, 园林景观设计, hunter喷灌',
    canonicalPath: '/zh/',
    basePath: '/',
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh('/zh/', context)}

  <main class="container">
    <section class="unified-hero-section" aria-label="首页首屏">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">🏆 乌兹别克斯坦草坪与体育运动场地工程建设中心</span>
            <span class="glass-pill-tag">官方品质质保</span>
          </div>
          <h1>
            专业草坪铺设、<span>园林景观设计与体育运动场地建设</span>
          </h1>
          <p class="unified-hero-lead">
            面向乌兹别克斯坦全境提供人造草坪与天然草皮直供安装、立体垂直绿化、EPDM橡胶地坪及足球场「交钥匙」一站式工程。
          </p>

          <div class="hero-action-btns">
            <a href="#servicesSection" class="btn-primary-white">
              <span>查看我们的服务项目</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/zh/shangcheng/" class="btn-secondary-glass">
              <span>进入草坪现货商城</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>

          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>10+ 年</strong>
              <span>行业深耕经验</span>
            </div>
            <div class="hero-metric-item">
              <strong>250,000+ m²</strong>
              <span>成功交付实景</span>
            </div>
            <div class="hero-metric-item">
              <strong>一手货源</strong>
              <span>厂家批发直供</span>
            </div>
            <div class="hero-metric-item">
              <strong>12 个州府</strong>
              <span>24小时全境配送</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">免费专属咨询</span>
          <h2>15分钟内获取免费咨询与工程方案预算</h2>
          <p>
            留下您的联系电话 — 我们的资深工程师将致电为您详细测算造价与提供专业建议。
          </p>
          <form class="phone-only-form js-phone-form" data-context="首页首屏咨询 (ZH)">
            <input
              type="tel"
              class="phone-input-pill"
              placeholder="+998 (__) ___-__-__"
              required
              aria-label="请输入您的电话号码"
            />
            <button type="submit" class="btn-pill-black-full">
              <span>立即免费咨询</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
          <div class="hero-glass-perks">
            <span>• 工程师免费携带仪器上门测量</span>
            <span>• 免费赠送各类草样及EPDM胶粒实物样板</span>
          </div>
        </div>
      </div>
    </section>

    ${renderServicesGridSectionZh(context)}

    <section class="section-block" id="ecommerceSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">现货商城中心</span>
          <h2 class="section-title">
            草坪、种子与<span>橡胶地面材料商城</span>
          </h2>
          <p class="section-desc">
            厂家一手批发及零售价格，全乌兹别克斯坦24小时配送直达施工现场。
          </p>
        </div>
        <div class="price-mode-toggle">
          <button type="button" class="price-mode-btn active" data-mode="retail">零售价</button>
          <button type="button" class="price-mode-btn" data-mode="wholesale">一手批发价</button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCardsZh(PRODUCTS_ZH, context)}
      </div>
    </section>

    ${renderSmartCalculatorZh('suniy-gazon', context)}

    ${renderPortfolioSectionZh()}

    ${renderRegionsHubSectionZh()}

    <section class="section-block" id="faqSection">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">常见问题解答</span>
          <h2 class="section-title">
            客户<span>最关心的常见疑问</span>
          </h2>
        </div>
      </div>

      <div class="faq-grid">
        <details class="faq-item" open>
          <summary>
            <span>人造草坪和天然卷筒草坪每平方米价格是多少？</span>
            <span>+</span>
          </summary>
          <p>
            基地直发天然成熟卷筒草坪根据采购批量不同，价格在 <strong>9,000 至 30,000 索姆/m²</strong> 之间。人造草坪（草高10至50毫米）价格在 <strong>48,800 至 148,000 索姆/m²</strong> 之间。
          </p>
        </details>

        <details class="faq-item" open>
          <summary>
            <span>建设一座标准五人制迷你足球场需要多少天交付？</span>
            <span>+</span>
          </summary>
          <p>
            一座标准的 20×40 米（800 平方米）五人制球场，涵盖碎石盲排地基、镀锌围网、高强尼龙网、LED球场灯及FIFA 50mm草坪，通常在 <strong>15 至 25 天内</strong> 整体交钥匙交付。
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>儿童乐园无缝橡胶地坪提供多长时间的质保？</span>
            <span>+</span>
          </summary>
          <p>
            所有由我们施工的 SBR 弹性缓冲层及纯新料 EPDM 彩色面层均签署正式工程合同，提供 <strong>12个月的官方质保</strong>。
          </p>
        </details>

        <details class="faq-item">
          <summary>
            <span>乌兹别克斯坦其他各州可以送货和包工包料施工吗？</span>
            <span>+</span>
          </summary>
          <p>
            完全可以。我们从塔什干中心仓24小时内调配材料直达全境各州，施工技术团队随车到位，提供全套交钥匙安装。
          </p>
        </details>
      </div>
    </section>

    ${renderContactAndMapSectionZh(context)}
  </main>

  ${renderFooterZh(context)}`;
}

function buildCatalogPageZh({ canonicalPath = '/zh/shangcheng/', basePath = '/katalog/', title, metaDesc, h1, subtitle, defaultFilter = 'all' }, context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    url: `${BRAND_ZH.domain}${canonicalPath}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords: '人造草坪购买塔什干, 人造草皮批发价格, 乌兹别克斯坦天然草卷价格, 丹麦进口草籽, 彩色橡胶地砖',
    canonicalPath,
    basePath,
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh(canonicalPath, context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="面包屑导航">
      <a href="/zh/">首页</a>
      <span>/</span>
      <a href="/zh/shangcheng/">商城</a>
      ${canonicalPath !== '/zh/shangcheng/' ? `<span>/</span><span style="color:var(--green-800);">${h1}</span>` : ''}
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">一手批发与零售现货中心</span>
            <span class="glass-pill-tag">官方正品品质保障</span>
          </div>
          <h1>${h1}</h1>
          <p class="unified-hero-lead">${subtitle}</p>
          <div class="hero-action-btns">
            <a href="/zh/shangcheng/renzao-caoping/" class="btn-primary-white">
              <span>人造草坪产品目录</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
            <a href="/zh/shangcheng/tianran-caoping/" class="btn-secondary-glass">
              <span>天然卷筒草坪现货</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">免费样板与批发报价单</span>
          <h2>索取免费草坪样品与大宗批发价格表</h2>
          <p>
            留下您的联系电话 — 我们将发送10–50mm人造草坪及天然草卷最新厂家现货底价单。
          </p>
          <form class="phone-only-form js-phone-form" data-context="商城批发价咨询 (ZH)">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="请输入您的电话号码" />
            <button type="submit" class="btn-pill-black-full">
              <span>获取批发价目表</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="ecom-toolbar">
        <div class="ecom-filter-tabs">
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'all' ? 'active' : ''}" data-filter="all">全部商品</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'suniy' ? 'active' : ''}" data-filter="suniy">人造草坪 (10–50mm)</button>
          <button type="button" class="ecom-tab-btn ${defaultFilter === 'rulonli' ? 'active' : ''}" data-filter="rulonli">天然卷筒草坪</button>
          <button type="button" class="ecom-tab-btn" data-filter="urug">进口草种</button>
          <button type="button" class="ecom-tab-btn" data-filter="rezina">橡胶地坪与地砖</button>
        </div>
        <div class="price-mode-toggle">
          <button type="button" class="price-mode-btn active" data-mode="retail">零售价格</button>
          <button type="button" class="price-mode-btn" data-mode="wholesale">一手批发底价</button>
        </div>
      </div>

      <div class="products-grid">
        ${renderProductCardsZh(PRODUCTS_ZH, context)}
      </div>
    </section>

    ${renderSmartCalculatorZh(defaultFilter === 'rulonli' ? 'rulonli-gazon' : 'suniy-gazon', context)}

    ${renderPortfolioSectionZh()}

    ${renderRegionsHubSectionZh()}

    ${renderContactAndMapSectionZh(context)}
  </main>

  ${renderFooterZh(context)}`;
}

function buildServicePageZh(service, context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND_ZH.name,
      telephone: BRAND_ZH.phoneFormatted
    },
    areaServed: 'Uzbekistan'
  };

  const rubberConstructorHtml =
    service.calcKey === 'rezina-maydon'
      ? `
      <section class="section-block" id="rubberInteractive">
        <div class="bento-box-glass">
          <span class="section-eyebrow">色卡交互预览</span>
          <h2 class="section-title" style="margin-bottom:8px;">选择您的儿童乐园EPDM配色</h2>
          <p class="section-desc" style="margin-bottom:20px;">
            点击下方耐候色卡，即时预览无缝安全橡胶地坪配色效果。
          </p>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:center;">
            <div>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px;">
                抗紫外线强日照高弹EPDM环保颗粒色系：
              </p>
              <div class="swatch-row">
                <button type="button" class="color-swatch active" style="background:#166534;" data-color="#166534" data-name="翡翠绿" aria-label="翡翠绿"></button>
                <button type="button" class="color-swatch" style="background:#B91C1C;" data-color="#B91C1C" data-name="砖红" aria-label="砖红"></button>
                <button type="button" class="color-swatch" style="background:#1D4ED8;" data-color="#1D4ED8" data-name="深海蓝" aria-label="深海蓝"></button>
                <button type="button" class="color-swatch" style="background:#D97706;" data-color="#D97706" data-name="暖阳黄" aria-label="暖阳黄"></button>
                <button type="button" class="color-swatch" style="background:#7C3AED;" data-color="#7C3AED" data-name="薰衣紫" aria-label="薰衣紫"></button>
                <button type="button" class="color-swatch" style="background:#374151;" data-color="#374151" data-name="玄武黑" aria-label="玄武黑"></button>
              </div>
              <div style="font-size:0.88rem; font-weight:700; margin-top:8px;">
                当前选定配色：<span id="rubberSelectedColorName" style="color:var(--green-800);">翡翠绿</span>
              </div>
            </div>
            <div
              id="rubberPreviewSurface"
              style="height:160px; border-radius:20px; background:#166534; color:#FFFFFF; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; transition: background 0.3s;"
            >
              <strong style="font-size:1.1rem;">无缝环保 EPDM / SBR 橡胶地坪</strong>
              <span style="font-size:0.8rem; opacity:0.88; margin-top:4px;">可选厚度：10 • 15 • 20 • 30 • 40 毫米</span>
            </div>
          </div>
        </div>
      </section>`
      : '';

  return `${renderHead({
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
    canonicalPath: service.url,
    basePath: service.baseUrl,
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh(service.url, context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="面包屑导航">
      <a href="/zh/">首页</a>
      <span>/</span>
      <a href="/zh/#servicesSection">服务项目</a>
      <span>/</span>
      <span style="color:var(--green-800);">${service.shortName}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner" style="background: linear-gradient(115deg, rgba(7, 31, 19, 0.92) 0%, rgba(14, 58, 36, 0.84) 100%), url('${service.img}') center/cover no-repeat;">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${service.clusterTag}</span>
            <span class="glass-pill-tag">官方质保认证</span>
          </div>
          <h1>${service.h1}</h1>
          <p class="unified-hero-lead">${service.shortDesc}</p>
          <ul class="usp-check-list" style="margin-bottom:24px;">
            ${service.usps.map((u) => `<li style="color:#FFFFFF;"><span class="check-dot" style="background:rgba(255,255,255,0.2); color:#FFFFFF;">${ICONS.check}</span><span>${u}</span></li>`).join('')}
          </ul>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>测算工程造价</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="tel:${BRAND_ZH.phoneRaw}" class="btn-secondary-glass">
              <span>${BRAND_ZH.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">免费专属咨询</span>
          <h2>免费上门量尺与预算明细：${service.shortName}</h2>
          <p>
            留下您的联系电话 — 工程师将在15分钟内致电联系您，制定详尽施工与造价方案。
          </p>
          <form class="phone-only-form js-phone-form" data-context="服务页面咨询 (ZH): ${service.shortName}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="请输入您的电话号码" />
            <button type="submit" class="btn-pill-black-full">
              <span>获取专属方案预算</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${rubberConstructorHtml}

    <section class="section-block">
      <div class="comparison-table-wrap">
        <span class="section-eyebrow">价格体系对比</span>
        <h2 class="section-title" style="margin-bottom:16px;">
          ${service.comparisonTable.title}
        </h2>
        <table class="seo-table">
          <thead>
            <tr>
              ${service.comparisonTable.headers.map((h) => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${service.comparisonTable.rows.map((row) => `
            <tr>
              ${row.map((cell, i) => `<td style="${i === 0 ? 'font-weight:700;' : ''}">${cell}</td>`).join('')}
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">标准化施工工序</span>
          <h2 class="section-title">全案工程落地 <span>4个严苛阶段</span></h2>
        </div>
      </div>
      <div class="products-grid">
        ${service.steps.map((st) => `
        <div class="bento-side-card">
          <div>
            <span class="section-eyebrow">阶段 ${st.num}</span>
            <h3 style="font-size:1.02rem; font-weight:700; margin:8px 0;">${st.title}</h3>
            <p style="font-size:0.82rem; color:var(--text-secondary);">${st.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </section>

    ${renderSmartCalculatorZh(service.calcKey, context)}

    ${renderPortfolioSectionZh()}

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">技术答疑</span>
          <h2 class="section-title">常见疑问 <span>专业解答</span></h2>
        </div>
      </div>
      <div class="faq-grid">
        ${service.faqs.map((f) => `
        <details class="faq-item" open>
          <summary><span>${f.q}</span><span>+</span></summary>
          <p>${f.a}</p>
        </details>`).join('')}
      </div>
    </section>

    ${renderRegionsHubSectionZh()}

    ${renderContactAndMapSectionZh(context)}
  </main>

  ${renderFooterZh(context)}`;
}

function buildRegionPageZh(region, context) {
  const { ICONS, renderHead } = context;
  const title = `${region.name}草坪铺装、人造草坪批发直供、足球场与游乐场建设 — Eco Landshaft`;
  const metaDesc = `在${region.name}地区（${region.cities}）提供人造草坪、天然成熟卷筒草坪与丹麦草种快速直供。${region.locative}一站式交钥匙建设五人制迷你足球场与EPDM安全减震橡胶地坪。`;
  const keywords = `人造草坪${region.name}, 天然草卷${region.name}, 足球场建设${region.name}, 橡胶地坪${region.name}`;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${region.locative}草坪销售、球场与游乐地坪工程建设`,
    areaServed: `${region.name}`
  };

  return `${renderHead({
    title,
    description: metaDesc,
    keywords,
    canonicalPath: region.url,
    basePath: region.baseUrl,
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh(region.url, context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="面包屑导航">
      <a href="/zh/">首页</a>
      <span>/</span>
      <a href="/zh/#regionsSection">区域业务</a>
      <span>/</span>
      <span style="color:var(--green-800);">${region.name}</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">${region.name}区域中心</span>
            <span class="glass-pill-tag">直达时效：${region.deliveryTime}</span>
          </div>
          <h1>
            ${region.locative}<span>草坪铺装、足球场地与橡胶游乐地坪工程</span>
          </h1>
          <p class="unified-hero-lead">${region.desc}</p>
          <p style="font-size:0.84rem; color:var(--green-300); font-weight:500; margin-bottom:22px;">
            覆盖服务主要市县及行政区：${region.cities}
          </p>
          <div class="hero-action-btns">
            <a href="#smartCalculator" class="btn-primary-white">
              <span>测算当地工程预算</span>
              <span class="btn-arrow-icon down">${ICONS.arrowDown}</span>
            </a>
            <a href="/zh/shangcheng/" class="btn-secondary-glass">
              <span>进入现货商城</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">全境配送与工程安装</span>
          <h2>测算${region.name}区域配送及施工造价</h2>
          <p>
            留下您的联系电话 — 我们将为您测算发往${region.name}的物流运费与交钥匙施工报价。
          </p>
          <form class="phone-only-form js-phone-form" data-context="区域业务咨询 (ZH): ${region.name}">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="请输入您的电话号码" />
            <button type="submit" class="btn-pill-black-full">
              <span>获取区域专属报价</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderServicesGridSectionZh(context)}

    ${renderSmartCalculatorZh('stadion-qurish', context)}

    ${renderContactAndMapSectionZh(context)}
  </main>

  ${renderFooterZh(context)}`;
}

function buildAboutPageZh(context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '关于 Eco Landshaft',
    url: `${BRAND_ZH.domain}/zh/guanyu-women/`
  };

  return `${renderHead({
    title: '关于 Eco Landshaft | 10年乌兹别克斯坦园林绿化与体育场地建设领军企业',
    description: 'Eco Landshaft (ecolandshaft.uz) 是乌兹别克斯坦领先的综合性生态景观与体育场地工程承包商：自营50公顷优质草皮繁育基地、FIFA认证人造草坪、五人制足球场与无缝橡胶安全地坪。',
    keywords: '关于eco landshaft, 乌兹别克斯坦绿化公司, 塔什干球场建设承包商, 天然草坪繁育基地',
    canonicalPath: '/zh/guanyu-women/',
    basePath: '/biz-haqimizda/',
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh('/zh/guanyu-women/', context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="面包屑导航">
      <a href="/zh/">首页</a>
      <span>/</span>
      <span style="color:var(--green-800);">关于我们</span>
    </nav>

    <section class="unified-hero-section">
      <div class="unified-hero-banner">
        <div class="unified-hero-content">
          <div class="hero-eyebrow-badges">
            <span class="glass-pill-tag">关于 ECO LANDSHAFT</span>
            <span class="glass-pill-tag">全乌兹别克斯坦卓越口碑</span>
          </div>
          <h1>
            在乌兹别克斯坦全境构筑<span>现代化绿色生态景观与一流体育运动空间</span>
          </h1>
          <p class="unified-hero-lead">
            十余年来，我们为尊贵私人官邸、高端住宅社区、国际学校及商业园区打造了生机盎然的景观庭院，并高标准交付商业迷你足球场与防摔橡胶活动场地。
          </p>
          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <strong>35+ 名</strong>
              <span>专职技术团队</span>
            </div>
            <div class="hero-metric-item">
              <strong>250+ 座</strong>
              <span>精品交付工程</span>
            </div>
            <div class="hero-metric-item">
              <strong>50 公顷</strong>
              <span>自营草坪繁育基地</span>
            </div>
            <div class="hero-metric-item">
              <strong>100%</strong>
              <span>合同履约品质质保</span>
            </div>
          </div>
        </div>

        <div class="hero-glass-card">
          <span class="outline-pill-tag">商务考察与合作</span>
          <h2>与我们的工程专家取得联系</h2>
          <p>
            留下您的联系电话 — 我们的商务负责人将在15分钟内致电联系您。
          </p>
          <form class="phone-only-form js-phone-form" data-context="关于我们页面咨询 (ZH)">
            <input type="tel" class="phone-input-pill" placeholder="+998 (__) ___-__-__" required aria-label="请输入您的电话号码" />
            <button type="submit" class="btn-pill-black-full">
              <span>立即联系专家</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    ${renderPortfolioSectionZh()}

    ${renderContactAndMapSectionZh(context)}
  </main>

  ${renderFooterZh(context)}`;
}

function buildBlogPageZh(context) {
  const { ICONS, renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Eco Landshaft 官方专家博客',
    url: `${BRAND_ZH.domain}/zh/boke/`
  };

  return `${renderHead({
    title: '官方博客：草坪日常养护、足球场地建设与园林造景百科 | Eco Landshaft',
    description: 'Eco Landshaft 农艺专家与水利体育工程技术团队撰写的行业干货：天然草卷选型指南、迷你足球场商业投资回报测算及EPDM橡胶地坪厚度规范。',
    keywords: '草坪养护指南, 足球场投资回报分析, 卷筒草与播种对比, epdm橡胶地坪安全标准',
    canonicalPath: '/zh/boke/',
    basePath: '/blog/',
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh('/zh/boke/', context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="面包屑导航">
      <a href="/zh/">首页</a>
      <span>/</span>
      <span style="color:var(--green-800);">官方博客</span>
    </nav>

    <section class="section-block">
      <div class="section-header">
        <div class="section-header-left">
          <span class="section-eyebrow">行业深度干货</span>
          <h1 class="section-title">
            草坪园林、景观设计与<span>体育运动场建设博客</span>
          </h1>
          <p class="section-desc">
            实操技术指南、商业投资回报周期测算及一线农艺专家的实用建议。
          </p>
        </div>
      </div>

      <div class="services-bento-grid">
        ${BLOG_POSTS_ZH.map((post) => `
        <article class="service-bento-card">
          <a href="${post.link}" class="service-card-visual">
            <img src="${post.img}" alt="${post.title}" loading="lazy" />
            <span class="service-price-glass">${post.date}</span>
            <span class="service-cluster-badge">${post.category}</span>
          </a>
          <div class="service-card-body">
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="service-card-footer">
            <a href="${post.link}" class="btn-service-link">
              <span>阅读全文</span>
              <span class="btn-arrow-icon right">${ICONS.arrowRight}</span>
            </a>
          </div>
        </article>`).join('\n')}
      </div>
    </section>

    ${renderSmartCalculatorZh('suniy-gazon', context)}

    ${renderContactAndMapSectionZh(context)}
  </main>

  ${renderFooterZh(context)}`;
}

function buildContactPageZh(context) {
  const { renderHead } = context;
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: '联系我们 — Eco Landshaft',
    url: `${BRAND_ZH.domain}/zh/lianxi-women/`
  };

  return `${renderHead({
    title: '联系方式与展厅地址：塔什干市萨马尔罕达尔沃扎街2号 | Eco Landshaft',
    description: '联系 Eco Landshaft 乌兹别克斯坦总部：+998-97-783-8253，Telegram t.me/+998977838253。免费技术咨询及预约工程师携带实物样品上门量尺。',
    keywords: '联系eco landshaft, 萨马尔罕达尔沃扎街2号, 塔什干草坪公司电话, 园林工程咨询',
    canonicalPath: '/zh/lianxi-women/',
    basePath: '/boglanish/',
    lang: 'zh',
    schemaJson
  })}
<body>
  ${renderHeaderZh('/zh/lianxi-women/', context)}

  <main class="container">
    <nav class="breadcrumb-bar" aria-label="面包屑导航">
      <a href="/zh/">首页</a>
      <span>/</span>
      <span style="color:var(--green-800);">联系我们</span>
    </nav>

    ${renderContactAndMapSectionZh(context)}

    ${renderRegionsHubSectionZh()}
  </main>

  ${renderFooterZh(context)}`;
}

/* ==========================================================================
   DISPATCHER TO WRITE ALL 19 CHINESE PAGES
   ========================================================================== */

function buildAllZh(context) {
  const { writePage } = context;

  // 1. Home
  writePage('zh/index.html', buildHomePageZh(context));

  // 2. Catalog Main
  writePage(
    'zh/shangcheng/index.html',
    buildCatalogPageZh(
      {
        canonicalPath: '/zh/shangcheng/',
        basePath: '/katalog/',
        title: '塔什干人造草坪与天然卷筒草现货商城 — 厂家一手批发与零售 | Eco Landshaft',
        metaDesc: '人造草坪（10mm–50mm）、苗圃成熟天然草卷、丹麦原装草籽及EPDM橡胶地坪一手现货批发与零售商城。',
        h1: '人造草坪与天然卷筒草坪现货商城',
        subtitle: '10至50毫米景观与FIFA专业运动草皮、基地现切新鲜天然草卷及丹麦原装进口草种。',
        defaultFilter: 'all'
      },
      context
    )
  );

  // 3. Catalog Artificial Grass
  writePage(
    'zh/shangcheng/renzao-caoping/index.html',
    buildCatalogPageZh(
      {
        canonicalPath: '/zh/shangcheng/renzao-caoping/',
        basePath: '/katalog/suniy-gazon/',
        title: '塔什干人造草坪购买 — 厂家一手批发及零售（起价 48,800 索姆/m²） | Eco Landshaft',
        metaDesc: '庭院、咖啡馆、商业办公及足球场专用 10mm、20mm、30mm、40mm 及 50mm 人造草坪现货直销。',
        h1: '人造草坪产品目录 (10毫米 – 50毫米)',
        subtitle: '全天候高耐磨抗紫外线日照认证草坪，适用于庭院露台、餐厅及国际足联标准五人制球场。',
        defaultFilter: 'suniy'
      },
      context
    )
  );

  // 4. Catalog Natural Turf Rolls
  writePage(
    'zh/shangcheng/tianran-caoping/index.html',
    buildCatalogPageZh(
      {
        canonicalPath: '/zh/shangcheng/tianran-caoping/',
        basePath: '/katalog/rulonli-gazon/',
        title: '塔什干天然卷筒草坪价格 — 自营苗圃基地成熟草卷即铺即绿 | Eco Landshaft',
        metaDesc: '自营50公顷草坪繁育基地当日现切100%纯天然卷筒草坪，价格 9,000 至 30,000 索姆/m²。',
        h1: '天然卷筒草坪 — 基地直供即铺即绿草毯',
        subtitle: '2年成熟期紧密根系健康草坪：1天即可将您的庭院打造成生机盎然的翠绿草毯。',
        defaultFilter: 'rulonli'
      },
      context
    )
  );

  // 5. All 6 Service Pages
  SERVICES_ZH.forEach((service) => {
    const relFile = service.url.replace(/^\//, '') + 'index.html';
    writePage(relFile, buildServicePageZh(service, context));
  });

  // 6. All 6 Regional Pages
  REGIONS_ZH.forEach((region) => {
    const relFile = region.url.replace(/^\//, '') + 'index.html';
    writePage(relFile, buildRegionPageZh(region, context));
  });

  // 7. About Page
  writePage('zh/guanyu-women/index.html', buildAboutPageZh(context));

  // 8. Blog Page
  writePage('zh/boke/index.html', buildBlogPageZh(context));

  // 9. Contact Page
  writePage('zh/lianxi-women/index.html', buildContactPageZh(context));
}

module.exports = {
  BRAND_ZH,
  SERVICES_ZH,
  PRODUCTS_ZH,
  REGIONS_ZH,
  BLOG_POSTS_ZH,
  buildAllZh
};
