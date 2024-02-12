let dataSources = [
    {title: 'Reddit'},
    {title: 'Wikipedia'}
]

let dataDomains = [
    {title: "Chapter 1", default: 36}, //24 %
    {title: "Chapter 2", default: 40}, //27%
    {title: "Chapter 3", default: 45}, //30%
    {title: "Chapter 4", default: 29} //19%
];

let dataQuestions = [
    {
        id:1,
        question:"Phasellus purus nunc, iaculis vel auctor vitae, ullamcorper in sem?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Phasellus purus nunc, iaculis vel auctor vitae, ullamcorper in sem. In fringilla, nisl eu blandit scelerisque, odio elit suscipit magna, non sagittis diam velit a felis. Donec ultrices et massa aliquam placerat. Nam eu mi elit. Duis commodo odio a fermentum vulputate. Integer augue enim, luctus et metus non, condimentum aliquet lectus. Aliquam consectetur posuere lorem, ut congue nisi. Morbi diam ex, posuere vitae nunc eu, efficitur lacinia libero. Proin rutrum volutpat suscipit. Quisque et feugiat dolor. Duis imperdiet tortor mauris, molestie lobortis mauris cursus et.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:2,
        question:"Cras viverra tortor a massa facilisis, non tempus tortor ultricies?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"Cras viverra tortor a massa facilisis, non tempus tortor ultricies. Morbi turpis mi, suscipit non felis quis, gravida dapibus dui. Cras elementum dapibus dolor ac sollicitudin. Aliquam tristique risus nisl, vitae consequat odio aliquam eget. Aenean commodo a mi in hendrerit. Vestibulum vestibulum pharetra nunc vitae fermentum. Ut nec metus ac ante dapibus tincidunt. Quisque pulvinar feugiat consectetur. Donec et semper ex, sed sagittis libero. Nulla facilisi. Mauris turpis risus, fermentum non lorem sit amet, lacinia dignissim ligula. Vivamus ut luctus magna. Morbi vel sem vitae nunc vehicula pellentesque. Etiam elit orci, blandit ut augue eu, iaculis scelerisque turpis.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:3,
        question:"Donec efficitur auctor imperdiet?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Donec efficitur auctor imperdiet. Sed elit felis, ultricies vitae nisi at, pharetra viverra nisi. Vivamus nulla ipsum, dignissim in eros a, dictum commodo nunc. Nam quis malesuada tortor. Integer arcu risus, euismod quis mollis ac, lobortis id ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo lobortis diam at aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam dui, blandit id sem vitae, efficitur consectetur purus. Pellentesque volutpat, tellus vel molestie egestas, lectus ex condimentum massa, eu mattis massa massa a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac congue tellus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:4,
        question:"Maecenas non pretium nunc, non vestibulum enim?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true}],
        explanation:"Maecenas non pretium nunc, non vestibulum enim. Praesent sit amet massa at elit porta iaculis. Vestibulum sit amet iaculis ante, ut facilisis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel iaculis turpis. Proin blandit lacinia cursus. Fusce nisl enim, faucibus non tincidunt id, venenatis a quam.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:5,
        question:"Phasellus aliquam, erat et vulputate hendrerit, ex mauris imperdiet sapien, et pharetra neque sapien in justo?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Phasellus aliquam, erat et vulputate hendrerit, ex mauris imperdiet sapien, et pharetra neque sapien in justo. Etiam imperdiet sodales aliquam. Donec finibus laoreet lorem, at vulputate tortor molestie ut. Quisque rutrum malesuada arcu eget efficitur. Duis vel massa enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dignissim vehicula dolor, vel porta turpis pharetra id. Integer eget magna hendrerit, sollicitudin mi a, luctus est. Quisque interdum libero sed cursus tempor.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:6,
        question:"Donec maximus maximus nunc, et bibendum tortor imperdiet placerat?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Donec maximus maximus nunc, et bibendum tortor imperdiet placerat. Morbi accumsan rhoncus volutpat. Praesent feugiat felis quis tempor sodales. Suspendisse placerat metus a pretium varius. Praesent fermentum euismod lacus et eleifend. Ut pretium ac sapien ac convallis. Maecenas scelerisque tristique eros a condimentum. Phasellus interdum lectus ut purus vestibulum blandit. Nunc lorem massa, lacinia fermentum tempor sit amet, euismod nec orci. Cras vulputate sodales lobortis.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:7,
        question:"Maecenas aliquam nulla at bibendum tempor?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Maecenas aliquam nulla at bibendum tempor. Nulla aliquam erat dictum dui rhoncus tristique. Proin malesuada, leo at consequat tristique, felis urna porttitor justo, id efficitur diam nibh posuere velit. Aenean turpis magna, maximus sed tempor at, condimentum sit amet mi. Ut aliquam ipsum sed neque dignissim rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum blandit facilisis dui. Pellentesque condimentum, nisl sed consequat aliquet, odio dui suscipit massa, sit amet auctor lectus est a massa. Curabitur vulputate dapibus tortor at convallis. Morbi laoreet, orci nec convallis fermentum, purus erat malesuada justo, et varius quam nibh sed felis. Vestibulum nisl ante, faucibus id molestie ut, dapibus nec lectus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:8,
        question:"Etiam velit felis, malesuada vitae auctor sed, mattis nec sem?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Etiam velit felis, malesuada vitae auctor sed, mattis nec sem. Donec ante diam, aliquam sed rhoncus eu, congue eu justo. Etiam vestibulum, leo eget volutpat tempus, nisi sapien interdum felis, eu fermentum sem magna id quam. Aliquam semper ligula in nisi imperdiet mollis. In ornare dapibus ligula at interdum. Cras egestas vel lorem nec accumsan. Vivamus malesuada tempor ligula, vel vehicula nisi congue eget. Pellentesque consectetur orci id elit consectetur, a interdum elit volutpat. Nulla facilisi. Nunc sed justo nec felis dignissim posuere ac a massa.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:9,
        question:"Quisque cursus consequat efficitur?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Quisque cursus consequat efficitur. Aliquam dui arcu, dapibus sit amet enim a, dapibus sagittis nibh. Vestibulum mattis ex ac arcu tincidunt sodales. Aenean eros tortor, egestas sit amet velit ut, porttitor posuere lacus. Vestibulum est elit, convallis non vulputate varius, mattis quis nunc. Vivamus semper pharetra commodo. Donec finibus posuere neque, vitae efficitur metus consequat a. Nulla lorem lacus, facilisis sit amet metus sed, ultricies iaculis justo. Vivamus sed libero ante. Donec efficitur arcu sed nibh aliquet, placerat tincidunt nulla aliquet. Nunc hendrerit, tortor at eleifend sodales, mauris tellus fermentum magna, eget finibus ex ligula vitae sem. Etiam vel hendrerit diam. Integer pellentesque egestas erat, nec faucibus massa fermentum sit amet. Donec at scelerisque ante, vitae fringilla sem.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:10,
        question:"Maecenas tincidunt elementum tellus?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Maecenas tincidunt elementum tellus. Curabitur vitae dui sed enim pharetra mattis id ut neque. Maecenas ac gravida turpis, et eleifend sapien. Etiam sollicitudin consectetur arcu vel hendrerit. Nam tempus interdum dolor quis cursus. Vivamus fermentum risus nec vehicula pulvinar. Suspendisse neque massa, cursus sed nulla eget, sodales placerat mauris. Aenean blandit consectetur enim non fringilla. Nulla facilisi. Maecenas pellentesque urna sit amet ornare laoreet. Mauris ac fringilla tortor, fermentum sollicitudin elit. Curabitur tristique iaculis blandit. Vivamus ultricies pulvinar est, at malesuada dolor volutpat at.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:11,
        question:"Mauris iaculis dapibus placerat?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true}],
        explanation:"Mauris iaculis dapibus placerat. Sed et nisi vitae velit dignissim dignissim et ut nulla. Etiam eget suscipit eros, imperdiet finibus purus. Donec malesuada, enim quis cursus efficitur, lorem augue fringilla elit, nec aliquam velit risus nec lorem. In hac habitasse platea dictumst. Donec iaculis finibus iaculis. Duis molestie dui sed fringilla laoreet. Vestibulum vel neque faucibus, interdum sem nec, mollis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac condimentum est.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:12,
        question:"Morbi a sem tortor?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Morbi a sem tortor. Vestibulum pellentesque tempor tincidunt. Donec ac malesuada sapien. Sed molestie magna eros. Suspendisse nisl massa, luctus ornare vestibulum nec, lobortis vel ipsum. Suspendisse id turpis nunc. Donec vulputate nec nunc at imperdiet. Donec erat neque, commodo non felis vel, euismod euismod nisi. Praesent in ante placerat, facilisis ante eget, tempus nunc.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:13,
        question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.*", correct:true}],
        explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada tortor diam, euismod euismod ipsum accumsan et. Vivamus malesuada tincidunt lobortis. Suspendisse aliquam, nunc ac pharetra fringilla, ante ipsum faucibus mauris, nec pulvinar erat tellus ac felis. Fusce quis sem pellentesque, pellentesque dolor at, posuere lacus. Ut sollicitudin odio eget tortor blandit, in finibus odio pellentesque. Proin vehicula nulla a sapien tincidunt posuere.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:14,
        question:"Maecenas id ligula in orci convallis gravida?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true}],
        explanation:"Maecenas id ligula in orci convallis gravida. Duis quam enim, condimentum nec turpis quis, feugiat scelerisque ante. Nunc facilisis justo suscipit, euismod neque id, consectetur ex. Etiam sed dictum odio. Vestibulum scelerisque enim vel lacus scelerisque, non gravida sem rutrum. Vivamus ac dolor faucibus ipsum imperdiet venenatis. Quisque ultrices elit at quam porta maximus. Quisque justo lorem, dapibus nec placerat eget, pulvinar sed mi. Nulla at vehicula urna. Curabitur vel lorem sem. Suspendisse potenti. Sed faucibus metus congue blandit luctus. Vestibulum porta augue eros. Nunc viverra risus et venenatis tincidunt.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:15,
        question:"Integer eget urna pellentesque dolor gravida sollicitudin eu nec velit?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Integer eget urna pellentesque dolor gravida sollicitudin eu nec velit. Suspendisse imperdiet eleifend volutpat. Pellentesque at odio eget orci rhoncus ullamcorper quis vel tortor. Mauris quis leo ut enim dictum sodales. Mauris at condimentum enim. Ut faucibus orci enim, vel suscipit quam venenatis mattis. Sed iaculis nisi neque, ac consectetur metus vestibulum at. Suspendisse tempus, ipsum suscipit pulvinar congue, diam leo pulvinar enim, ac semper velit justo et dolor. Sed vehicula ante et luctus faucibus. Integer venenatis lobortis suscipit. Fusce mauris nibh, iaculis a lacus ac, porta congue nisl. Sed ac ante suscipit, finibus metus eget, interdum ex. Mauris nibh mauris, luctus nec euismod ac, vehicula a sem.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:16,
        question:"Mauris sit amet blandit mauris?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Mauris sit amet blandit mauris. Pellentesque lacinia vestibulum lectus dignissim rhoncus. Praesent rhoncus tempor pretium. Aenean sodales sem ac ipsum faucibus mollis. Sed ac nisl faucibus, auctor eros non, ultricies quam. Maecenas auctor eros eget arcu cursus, et pulvinar est dictum. Maecenas tincidunt consectetur turpis a efficitur. Fusce ultrices consequat laoreet. Fusce aliquet aliquet feugiat. Proin pretium nibh non porttitor sollicitudin. Nam at sollicitudin massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ex elit, pellentesque et enim a, sagittis cursus erat.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:17,
        question:"Proin quis nisl quis justo pretium ornare?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Proin quis nisl quis justo pretium ornare. Aenean at tortor vitae dolor malesuada cursus. Sed tincidunt, leo eget suscipit hendrerit, erat sem pretium nulla, vel accumsan velit risus suscipit quam. Sed volutpat convallis diam, id maximus felis tempor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec viverra erat. Fusce vel erat urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:18,
        question:"Fusce porta, dui vel pharetra molestie, nisl nisl faucibus nisi, in facilisis quam purus et justo?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false}],
        explanation:"Fusce porta, dui vel pharetra molestie, nisl nisl faucibus nisi, in facilisis quam purus et justo. Proin in gravida massa. Maecenas ornare nibh erat, a mattis tortor luctus et. Vestibulum accumsan magna at sollicitudin interdum. Sed bibendum lectus ac mattis hendrerit. Donec nibh ante, sodales et arcu et, tristique tempor libero. Curabitur massa ante, fringilla id tortor vitae, congue fringilla arcu. Pellentesque nec convallis tortor, eu venenatis nibh. Nunc mauris magna, maximus eu mi id, sagittis venenatis justo. Donec sagittis turpis metus. Ut elit ex, elementum at fringilla quis, interdum non nisi. Praesent a metus leo. Nullam lobortis consectetur libero a laoreet. Ut consequat, felis vitae vestibulum fringilla, felis enim pretium erat, id suscipit felis mauris in justo. Duis fringilla leo augue, pellentesque imperdiet orci faucibus sed. Etiam a lorem dui.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:19,
        question:"In pellentesque sem at eros pharetra, nec dictum metus aliquet?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"In pellentesque sem at eros pharetra, nec dictum metus aliquet. Cras orci ipsum, dictum nec nibh sed, vehicula porttitor lorem. Phasellus auctor nulla ac risus ornare, vitae sodales urna consequat. Nullam vitae interdum magna. Morbi posuere erat quis ornare tristique. Donec lobortis aliquet mauris ut elementum. Nam sit amet facilisis dui, in bibendum metus. Donec ultricies elit ac massa commodo laoreet.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:20,
        question:"Integer est ligula, congue a tempus eget, tempus ac justo?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Integer est ligula, congue a tempus eget, tempus ac justo. Aliquam in nisi odio. Nullam sagittis cursus risus accumsan ultricies. Aliquam malesuada blandit tincidunt. Nunc fermentum augue quam. Duis sit amet elit odio. Mauris iaculis, ipsum sit amet accumsan tristique, sapien orci mattis ex, sit amet ultricies mi sem vel lectus. Pellentesque dictum vulputate arcu, ac volutpat metus euismod id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla vitae erat vel enim eleifend laoreet sed quis erat. Donec porta semper feugiat.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:21,
        question:"Phasellus non iaculis ipsum?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Phasellus non iaculis ipsum. Integer bibendum, libero vel varius viverra, neque ante hendrerit ligula, sed scelerisque augue urna id odio. Ut in lorem erat. Aenean suscipit, nisl eget sollicitudin luctus, lorem lectus faucibus augue, quis sodales nibh tellus id enim. Praesent et tempus leo, vel porttitor eros. Donec rutrum lacinia leo, quis viverra lacus finibus nec. Praesent elementum orci eget dignissim semper. Donec non magna pellentesque, ultrices sapien ut, gravida nibh.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:22,
        question:"In hac habitasse platea dictumst?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"In hac habitasse platea dictumst. Donec suscipit, nulla non malesuada egestas, metus justo pellentesque turpis, id hendrerit dui lacus volutpat ante. Sed eu enim nulla. Mauris odio velit, congue dapibus lorem vel, maximus ultricies erat. In rhoncus sit amet erat sit amet hendrerit. Fusce viverra ornare nunc, nec pulvinar erat viverra non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:23,
        question:"In sagittis finibus neque, eu viverra nulla accumsan a?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"In sagittis finibus neque, eu viverra nulla accumsan a. Nullam non blandit massa. Quisque id felis ac ipsum consequat sodales. Donec sit amet lacus convallis lacus lacinia facilisis. Mauris feugiat venenatis orci quis pulvinar. Duis vel varius felis, eu tincidunt urna. Fusce ac ante eu massa aliquet varius vel in enim. Ut ut tortor ullamcorper, aliquam metus in, porttitor nulla. Mauris molestie, orci et facilisis varius, quam arcu euismod magna, eget venenatis nunc mauris ut sapien. Morbi blandit fringilla gravida. Donec quis faucibus orci, sed aliquam lectus. Nulla hendrerit mi risus, a suscipit risus pretium nec. Donec purus justo, molestie ac feugiat sit amet, dignissim a leo. Vivamus semper volutpat est placerat tempus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:24,
        question:"Donec ultrices vestibulum luctus?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Donec ultrices vestibulum luctus. Nulla rutrum dictum odio consectetur porttitor. In hac habitasse platea dictumst. Phasellus maximus elit ac porta porta. Pellentesque ultrices vel justo ut bibendum. Proin maximus lorem tellus, non viverra lacus accumsan quis. Curabitur consequat consectetur libero ac dictum. Aenean a dolor justo. Vestibulum blandit rutrum libero ut convallis. Vestibulum varius est vel elit congue, vitae gravida metus tincidunt. In faucibus rutrum risus a eleifend.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:25,
        question:"Praesent scelerisque varius ante ut sagittis?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Praesent scelerisque varius ante ut sagittis. Vivamus id nibh sed massa ultrices pulvinar. Donec vel leo ac sem porttitor mattis. Sed a leo libero. Mauris non est nibh. Praesent commodo at nunc sit amet tincidunt. Aliquam non laoreet nunc, ut porta lacus. Aliquam consequat pharetra massa at mattis.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:26,
        question:"Aenean a mi arcu?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Aenean a mi arcu. Fusce ac lorem convallis, venenatis erat vel, mollis odio. Vestibulum placerat urna sed lacus mollis, ut volutpat sapien laoreet. Etiam scelerisque volutpat velit, at gravida nisl aliquet sed. Morbi at efficitur dui. Nam eu scelerisque turpis, et sollicitudin felis. Nam purus purus, egestas eu convallis eu, lacinia a felis.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:27,
        question:"Nunc non lacus a neque ullamcorper pharetra quis a urna?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Nunc non lacus a neque ullamcorper pharetra quis a urna. Cras vehicula varius vulputate. Morbi laoreet quam et nulla vehicula efficitur. Sed interdum id mi eu lacinia. Nulla at venenatis dui, id aliquet purus. Nam purus risus, ornare at cursus non, luctus vitae nisi. Maecenas fringilla fringilla ante, hendrerit commodo elit hendrerit at. Sed mauris lorem, faucibus quis eros ut, sagittis interdum dolor. Nunc nec hendrerit turpis. Suspendisse felis dolor, viverra venenatis diam vitae, cursus sagittis ex. Maecenas dapibus pulvinar nisl ut consequat. Donec ut urna vitae ligula faucibus sodales et non elit. Donec eu rutrum dui, eget sollicitudin lorem.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:28,
        question:"Ut eget libero lacinia, dapibus dui ac, molestie mi?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Ut eget libero lacinia, dapibus dui ac, molestie mi. Donec convallis commodo nunc non cursus. Mauris non luctus leo. Morbi a rutrum justo, in ullamcorper justo. Fusce ut vulputate nunc, vel varius dui. Morbi blandit cursus sodales. Cras luctus purus sit amet arcu interdum blandit. Praesent a lorem quis quam fermentum blandit. Mauris quis quam lobortis, porttitor lorem sagittis, sollicitudin diam. Nullam in rhoncus tortor. Aliquam sagittis mauris vel felis iaculis scelerisque.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:29,
        question:"Maecenas posuere suscipit vulputate?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Maecenas posuere suscipit vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vel massa urna. Vivamus non eleifend risus. Suspendisse scelerisque dolor nec luctus maximus. Curabitur non nisl id tellus semper venenatis. Duis aliquam elementum diam, in maximus nulla suscipit eget. Fusce elementum, sem quis tincidunt tempus, erat odio euismod ligula, eu congue ipsum augue tristique tellus. Suspendisse lobortis, nisi nec ornare molestie, arcu est elementum tortor, facilisis dictum arcu ex eget massa. Proin et varius orci, a faucibus turpis. Fusce aliquam arcu a purus sollicitudin, sit amet facilisis ipsum gravida. Duis sollicitudin venenatis aliquam. Aliquam leo justo, tincidunt in convallis vel, tristique non nunc. Donec feugiat facilisis sagittis. Fusce eget eros eget magna sagittis ultricies vitae ac ex.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:30,
        question:"In molestie orci ut nisi porta, vel feugiat diam dictum?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"In molestie orci ut nisi porta, vel feugiat diam dictum. Maecenas molestie ante a nisi efficitur, eu consectetur arcu ultrices. Proin pellentesque, diam ut pharetra tincidunt, orci leo auctor lectus, quis pretium sem mi ut elit. Ut convallis, mi quis convallis aliquet, erat sem facilisis turpis, non laoreet mauris elit id nisi. In rhoncus velit et justo fermentum, eget rutrum nulla vestibulum. Phasellus sagittis, ipsum ac finibus iaculis, velit mi luctus lorem, et tincidunt sem arcu vel ex. Donec maximus at felis lobortis porttitor. Duis in tellus ex. In eget est id mauris tincidunt placerat id non enim. Curabitur rutrum tristique lectus nec rutrum. Curabitur aliquam convallis eros vel porttitor. Ut congue massa ut maximus euismod. Maecenas lobortis elit nibh. Aliquam non magna porttitor, tincidunt nibh egestas, bibendum est.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:31,
        question:"Fusce ac enim urna?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Fusce ac enim urna. Ut eget lacinia ipsum, eget volutpat arcu. Nullam erat odio, dictum eget felis ac, tristique venenatis ex. Ut sed nunc diam. Donec ipsum libero, efficitur in elit consequat, feugiat fermentum ante. Nam sodales augue nulla, nec gravida metus dictum id. Sed quam eros, rhoncus in magna nec, tristique tristique odio. Quisque egestas faucibus ex, sit amet volutpat quam elementum eget. Nullam ex nisl, porttitor nec condimentum vitae, molestie at libero. Curabitur ornare, est sed facilisis gravida, purus augue dignissim purus, ut eleifend tortor nisi ut elit. Integer elit arcu, gravida non aliquam sed, dignissim ac justo. Vivamus lacinia arcu egestas est dictum dapibus. Curabitur in convallis quam, nec pharetra sem.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:32,
        question:"Donec rhoncus diam urna, quis feugiat dolor accumsan quis?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Donec rhoncus diam urna, quis feugiat dolor accumsan quis. Praesent purus velit, sollicitudin at ultricies quis, dignissim ut magna. Etiam tristique pellentesque vehicula. Donec quis sodales ipsum, eget vulputate dui. Suspendisse hendrerit lectus in metus lobortis, nec ullamcorper felis venenatis. Cras ex ante, varius id nibh ac, convallis consectetur quam. In rhoncus, augue non fringilla feugiat, orci ex dignissim mi, posuere lobortis tortor enim eu quam. Proin magna leo, tincidunt id hendrerit eu, bibendum ac nisl.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:33,
        question:"Cras efficitur urna enim, vitae mattis justo euismod a?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false}],
        explanation:"Cras efficitur urna enim, vitae mattis justo euismod a. Pellentesque congue elementum vulputate. Nulla consectetur lorem ac ante sollicitudin consectetur. Nam sit amet nulla eros. Praesent sit amet malesuada purus, vel pretium diam. Etiam tempus tortor ex, ut sollicitudin tellus cursus in. Donec congue vulputate odio varius volutpat. Curabitur quis ullamcorper mi. Proin pulvinar ornare risus, vitae rhoncus nunc lacinia et.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:34,
        question:"Cras elementum, lorem ac ullamcorper congue, purus quam facilisis arcu, vitae sagittis est tortor eu eros?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false}],
        explanation:"Cras elementum, lorem ac ullamcorper congue, purus quam facilisis arcu, vitae sagittis est tortor eu eros. Nulla consequat eget nulla eu viverra. Donec molestie neque eu diam aliquet, id tristique neque vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam faucibus, eros eget rhoncus accumsan, augue justo tempus urna, quis pharetra nunc nisl ut sem. Donec ut augue dignissim, aliquet tellus at, tristique dolor. Donec mollis eros quis massa gravida, id consectetur dui molestie. Nunc porttitor odio lacus, in pretium lacus volutpat elementum. Quisque rutrum sagittis eros, et sodales erat tincidunt sed. Quisque metus elit, elementum nec sodales at, mattis nec nisl. Donec sit amet laoreet arcu. Vestibulum vitae erat quis ipsum euismod rutrum. Etiam a nisl eros. Nulla non gravida erat.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:35,
        question:"Nullam eu mauris neque?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Nullam eu mauris neque. Vestibulum venenatis erat a tempus congue. Phasellus mi sem, viverra eu lorem a, condimentum dapibus purus. Donec eget nulla ac mi tincidunt euismod. Praesent interdum, elit eget blandit tempus, turpis tortor efficitur orci, id porta lectus augue sed erat. Nam ultrices tempus velit, vitae fringilla est finibus eu. Nullam pharetra nisl ac porttitor suscipit.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:36,
        question:"Donec at sodales metus, et commodo felis?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Donec at sodales metus, et commodo felis. Duis vel lorem nec tellus porta eleifend. Suspendisse volutpat leo quis risus ullamcorper, sed laoreet enim lacinia. In blandit placerat est, eget consectetur felis facilisis vitae. Aenean eget fermentum sem. Pellentesque vehicula sit amet arcu nec iaculis. Curabitur quis efficitur ligula. Maecenas volutpat lorem eu varius euismod. Donec tincidunt rutrum libero in sollicitudin. Curabitur cursus congue ullamcorper. Duis ac molestie turpis. Etiam interdum metus in vulputate dapibus. Mauris neque erat, accumsan pharetra varius at, interdum dignissim est. In pharetra blandit lectus non convallis. Ut ut mauris nec nisi gravida malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:37,
        question:"Quisque tincidunt nibh at nunc rhoncus mollis?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true}],
        explanation:"Quisque tincidunt nibh at nunc rhoncus mollis. Aliquam viverra ac mi at varius. Suspendisse convallis, ex ut rhoncus vulputate, ipsum erat vestibulum justo, eget dapibus turpis metus in dolor. Proin molestie risus quis elit auctor interdum. Quisque tincidunt elementum dapibus. Suspendisse potenti. Phasellus bibendum purus a bibendum egestas. Curabitur risus lacus, bibendum eget metus quis, porta tincidunt lorem. Pellentesque efficitur elementum leo, in vehicula nisi ultrices quis. Suspendisse vel leo metus. Donec scelerisque nisl sit amet nunc sodales tincidunt. Aenean dignissim neque sed condimentum dapibus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:38,
        question:"Cras magna felis, sagittis eu nisi eu, luctus tincidunt est?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Cras magna felis, sagittis eu nisi eu, luctus tincidunt est. Sed molestie nunc non dolor ultrices mattis. Pellentesque a iaculis ipsum. In accumsan in dolor sed suscipit. Duis semper lobortis purus quis pellentesque. Vivamus sagittis a ante ornare pretium. Praesent sem quam, laoreet nec enim id, molestie dictum tellus. Nam pharetra quam at dui tristique eleifend at non diam. Donec ac accumsan leo. Vivamus nunc diam, ornare non odio vitae, tempor tristique tortor. Curabitur sit amet magna nec magna mollis cursus vel sit amet enim. In non ultricies odio.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:39,
        question:"Nam massa est, egestas sed felis sit amet, vulputate accumsan nisl?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Nam massa est, egestas sed felis sit amet, vulputate accumsan nisl. Etiam id urna ut nunc aliquam eleifend. Quisque tempus neque in elit volutpat, sit amet fringilla magna consequat. Sed bibendum fermentum eros elementum maximus. Vestibulum pharetra ante diam, vel congue augue feugiat pulvinar. Proin accumsan vestibulum augue, non faucibus nunc feugiat id. Morbi maximus nunc accumsan nisi semper pulvinar. Donec imperdiet rhoncus odio, sit amet luctus risus porttitor nec. Pellentesque feugiat gravida laoreet. Nunc rutrum ex odio. Nulla enim ipsum, posuere sed mauris vitae, consequat rutrum lorem. Donec id quam at lacus malesuada tempus quis quis urna. Suspendisse a venenatis leo. Morbi consequat ligula ut lectus auctor aliquet.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:40,
        question:"Suspendisse sollicitudin lacinia turpis quis dignissim?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.*", correct:true},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Suspendisse sollicitudin lacinia turpis quis dignissim. Vivamus magna magna, varius id facilisis nec, tincidunt semper ante. Sed quis dolor luctus orci molestie facilisis. Nullam lorem lorem, consequat a porttitor eu, posuere ac augue. Nullam rhoncus cursus diam, ut accumsan tellus vulputate nec. Duis ligula ipsum, facilisis ut massa non, consectetur tempus ante. Ut laoreet egestas malesuada. Phasellus auctor sodales finibus. Aenean sollicitudin posuere sem, vel semper sem dapibus at. Aliquam aliquam nibh leo. Aliquam condimentum eget mi vel lobortis. Nunc sollicitudin pharetra risus, at efficitur nibh laoreet at.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:41,
        question:"Duis maximus nibh non nisi aliquam vehicula ac aliquet nulla?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Duis maximus nibh non nisi aliquam vehicula ac aliquet nulla. Cras consectetur justo nec lectus ornare, id tempor dui lacinia. Nullam quis elit in sapien venenatis rutrum. Nulla nisi tellus, accumsan ut malesuada at, placerat id nisl. Pellentesque scelerisque mattis sem, vitae dapibus tellus vestibulum sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla et elit nibh. Nam placerat arcu a ornare ullamcorper. Sed at massa mi. Etiam efficitur, arcu ut vestibulum consectetur, nisi orci faucibus dolor, vel efficitur ipsum tellus sit amet sem. Integer vehicula fermentum pellentesque. Maecenas vestibulum tellus dolor, et placerat enim interdum eu. Vestibulum varius ac est vitae hendrerit. Phasellus quis lobortis augue.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:42,
        question:"Vivamus eu sapien in mi ullamcorper faucibus?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Vivamus eu sapien in mi ullamcorper faucibus. Nunc venenatis mi diam, a aliquet justo venenatis vel. Quisque metus magna, dapibus id erat quis, tincidunt sagittis justo. Nulla luctus dui id quam hendrerit, vitae elementum leo mattis. In ante augue, dictum in eros non, pretium eleifend quam. Aliquam condimentum est nisi, eu volutpat libero tempus et. In ut sapien diam. Vivamus laoreet luctus venenatis. Vivamus quam ipsum, pellentesque eget augue a, lacinia tempus leo. Cras ac neque et massa sollicitudin ultrices. Duis facilisis, diam in auctor pellentesque, nisi felis ornare magna, sit amet elementum nisl ipsum at nisl. Cras viverra varius sem a tempus. Suspendisse tempor lacus id interdum iaculis. Etiam augue sapien, varius quis tristique sed, iaculis sed dolor. Donec tristique quam convallis quam tempor tincidunt.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:43,
        question:"Sed blandit ultricies erat et pulvinar?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Sed blandit ultricies erat et pulvinar. In rhoncus, lacus id elementum consequat, mauris diam ornare justo, eget porta massa sapien ac diam. Nunc ut interdum libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra, tellus nec lobortis tincidunt, libero urna luctus lectus, vitae faucibus enim orci ac justo. Aliquam faucibus risus lobortis vehicula ullamcorper. Duis tristique velit vel orci pellentesque, tincidunt varius sem vestibulum. Aliquam congue porttitor ligula. Nulla viverra nisl eget libero suscipit, eget aliquam nibh ultrices. Phasellus lorem justo, condimentum sed feugiat quis, accumsan sed purus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:44,
        question:"Morbi turpis mi, gravida et malesuada elementum, feugiat sit amet felis?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Morbi turpis mi, gravida et malesuada elementum, feugiat sit amet felis. Curabitur at sapien et lacus ornare finibus ac in ante. Morbi aliquet viverra neque eu eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis ipsum nec sapien ullamcorper, nec mollis elit auctor. Etiam non fermentum ante. Nulla hendrerit ultricies magna. Sed nibh risus, lobortis ac pretium cursus, elementum ac mi. Donec suscipit odio vel dictum porta. Duis ipsum libero, sodales nec urna a, semper tincidunt lacus. Sed tincidunt mattis blandit. Etiam mauris magna, pharetra in libero quis, congue pellentesque nibh. Cras cursus eget risus vel lobortis.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:45,
        question:"Suspendisse semper maximus dapibus?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Donec id eros nec tortor gravida posuere.", correct:false}],
        explanation:"Suspendisse semper maximus dapibus. Vivamus vitae lorem non ex aliquet malesuada. Sed in felis elit. Integer sodales ex in arcu facilisis, ac fermentum dui bibendum. Nulla dignissim, turpis sed laoreet vulputate, purus nibh pellentesque est, vel congue lorem metus at odio. Sed sed sem scelerisque, ultrices erat a, iaculis arcu. Nam aliquet felis quis neque tempor, vel fermentum mauris rutrum. Phasellus quis arcu arcu. Vestibulum in odio eget dui interdum sodales. Mauris venenatis bibendum porttitor. Nullam dignissim eros ex, ac accumsan eros pretium eget. Mauris mattis dui nec pellentesque ultrices. Phasellus facilisis mollis imperdiet. Donec eleifend, metus in porta lacinia, risus nisl tristique urna, sit amet pulvinar leo arcu eu lacus. Cras tempus mollis tortor, sed finibus mi viverra id. Phasellus dapibus sapien sed nulla finibus, a commodo mauris fermentum.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:46,
        question:"Vestibulum venenatis velit nec diam aliquet molestie?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Vestibulum venenatis velit nec diam aliquet molestie. Integer in leo porttitor, tristique mauris at, pretium justo. Mauris suscipit maximus tellus nec malesuada. Quisque ut porttitor arcu, et consectetur mi. Cras ultricies, mauris at tempus volutpat, augue neque aliquam dui, eu porttitor leo tellus sed tellus. Ut sed mi ipsum. Maecenas quam diam, dapibus vitae nibh eget, fermentum posuere nunc. Donec placerat, est ut imperdiet dictum, eros orci laoreet arcu, non rutrum sem leo vel ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:47,
        question:"In sed dapibus lorem, non pretium nunc?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"In sed dapibus lorem, non pretium nunc. Vivamus eleifend gravida erat id posuere. Morbi pharetra convallis porttitor. Ut lectus enim, lobortis id diam eu, faucibus commodo enim. Phasellus erat neque, scelerisque a finibus non, ornare eget est. Duis efficitur ex leo, et molestie tortor dapibus nec. Cras finibus ut turpis ultrices placerat. In hendrerit facilisis mattis. Quisque dapibus ligula a odio scelerisque luctus. Praesent euismod dapibus sapien. Sed lacus libero, porttitor eu elementum eu, consequat sed felis. Donec tempus quis tortor ac aliquet. Morbi lacinia bibendum condimentum.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:48,
        question:"Suspendisse mattis felis eget pretium interdum?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Suspendisse mattis felis eget pretium interdum. Nunc elementum est quis risus mollis vulputate. Curabitur finibus efficitur nisi, in malesuada ante luctus sit amet. Vivamus scelerisque maximus nisi, dictum commodo purus interdum malesuada. Proin eget congue nulla. Aliquam mauris purus, mattis molestie condimentum id, congue quis nisi. Fusce in molestie orci. Aliquam sodales luctus dui, quis tempor enim aliquet eget. Donec dignissim augue quis interdum rhoncus. Curabitur aliquet dictum magna. Ut iaculis iaculis nibh, in vestibulum ipsum eleifend ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed faucibus ipsum. Mauris posuere nunc ut nibh luctus, sit amet lacinia nisi pulvinar. Mauris eu tortor euismod, egestas justo quis, ullamcorper odio. Praesent tempus ultricies sodales.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:49,
        question:"Nullam non tellus bibendum, tincidunt orci ac, convallis ligula?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.", correct:false}],
        explanation:"Nullam non tellus bibendum, tincidunt orci ac, convallis ligula. Quisque vel dignissim leo, at aliquet felis. Ut fermentum ullamcorper urna. Quisque felis nulla, consectetur id lorem in, iaculis lobortis leo. Vestibulum at varius est. Praesent nec venenatis turpis, ac facilisis justo. Morbi vel vulputate eros. Donec at mi condimentum, vestibulum leo eget, dictum eros. Cras ut interdum tellus. Sed ut consequat tortor. Praesent finibus, nisi sit amet mollis malesuada, turpis leo posuere dui, ac suscipit lorem purus at mi.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:50,
        question:"Suspendisse placerat augue lorem, et mattis orci maximus non?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Suspendisse placerat augue lorem, et mattis orci maximus non. Nulla ornare porta faucibus. Proin pellentesque porta posuere. Praesent ex quam, feugiat vel euismod sed, vehicula ut nulla. Cras pharetra commodo risus eu sodales. Proin gravida id nisi sed vehicula. Ut nisi augue, vulputate pulvinar nisl ac, fringilla aliquam nunc. Vestibulum suscipit nisi vitae erat cursus rhoncus. Nunc pharetra vitae ligula euismod luctus. Nunc ut felis et velit faucibus elementum. Sed at gravida risus. Integer turpis dolor, sodales ullamcorper auctor nec, venenatis eu velit. Vestibulum a purus mi. Fusce tristique bibendum neque facilisis semper.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:51,
        question:"Sed erat quam, maximus ut ligula in, venenatis congue sem?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true}],
        explanation:"Sed erat quam, maximus ut ligula in, venenatis congue sem. Aenean eu efficitur neque, vitae pellentesque nunc. Nunc placerat, nibh a pulvinar vehicula, nunc nunc bibendum risus, sit amet finibus sapien risus luctus velit. Praesent sit amet dolor eget neque ornare varius a porttitor sapien. Mauris pretium metus ac lectus fringilla varius. In venenatis lacus ipsum, id ullamcorper nisi venenatis nec. Integer vestibulum congue lorem sit amet porttitor. Vivamus rhoncus tincidunt urna nec sodales. Integer sit amet ultrices sapien. Nulla facilisi. Nullam consequat sem dolor, nec aliquam eros auctor eu. Nulla eu felis ut ipsum aliquet lacinia mattis sed ligula. Nullam non sem ut orci pellentesque pharetra ut faucibus metus. Integer venenatis convallis lectus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:52,
        question:"Duis sed eros pulvinar, dignissim leo at, vulputate urna?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Duis sed eros pulvinar, dignissim leo at, vulputate urna. Etiam ut ligula a turpis fermentum aliquam eget quis ante. Maecenas mi dolor, varius vitae vulputate non, hendrerit in ante. In porta ipsum ut leo auctor maximus in quis metus. Sed mi tortor, pharetra varius risus nec, interdum dignissim est. Etiam eget convallis erat, a malesuada est. Integer nec tincidunt turpis, fringilla ultrices erat. Phasellus sollicitudin varius interdum. Pellentesque ac pretium eros. Maecenas ac erat nec sapien dictum faucibus in non sem. Phasellus euismod odio arcu, ac tempor nulla ornare vitae. Integer eget est ante. Vestibulum bibendum neque felis, in sagittis justo aliquam vitae. Integer et molestie eros, quis imperdiet lectus. Mauris et nisi in erat pellentesque scelerisque.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:53,
        question:"Pellentesque lacinia massa sit amet mauris suscipit pellentesque?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Pellentesque lacinia massa sit amet mauris suscipit pellentesque. Mauris at urna in justo efficitur placerat. Proin ut erat urna. Duis volutpat nec est ut gravida. Suspendisse accumsan tempus erat ac fermentum. Nulla sagittis maximus tincidunt. Nullam rutrum imperdiet dui at ullamcorper. Sed dictum rhoncus venenatis.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:54,
        question:"Sed ac consectetur nisl, feugiat semper lacus?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Sed ac consectetur nisl, feugiat semper lacus. Quisque rhoncus odio ut pretium pharetra. Ut vel nibh sapien. Aliquam mattis velit pretium imperdiet accumsan. Integer id eros et elit lobortis mollis. Vestibulum bibendum feugiat urna, pulvinar viverra tellus finibus eu. Duis quis tempor dui. Nullam sit amet massa non libero porta mollis non sed diam. Aenean dapibus quam vel lacus posuere ornare. Aenean volutpat nisi vel nulla luctus feugiat. Nunc sodales, ex vel faucibus imperdiet, massa dui porttitor mi, eu imperdiet nisl mauris in nisl. Integer aliquam bibendum vulputate.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:55,
        question:"Ut ante nisi, accumsan a mollis ut, pulvinar id ante?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"Ut ante nisi, accumsan a mollis ut, pulvinar id ante. Morbi vel nunc vel ante malesuada scelerisque. Duis dignissim, nunc vel condimentum suscipit, enim est mattis diam, et interdum justo tellus sed ipsum. Pellentesque dictum nisi libero, et faucibus tellus commodo et. Vestibulum ornare, massa vel feugiat fringilla, sapien enim ullamcorper leo, vitae pharetra nunc nisi et augue. Vestibulum accumsan turpis nec pretium mollis. In sed ex varius, blandit turpis sit amet, cursus risus. Suspendisse est odio, sollicitudin sagittis lobortis vitae, tincidunt in lectus. Pellentesque molestie malesuada metus, eget ultricies mauris volutpat eget. Mauris tristique commodo lorem vitae maximus.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:56,
        question:"Nam quis sapien mauris?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Nam quis sapien mauris. Vivamus porttitor mi diam, in tristique nulla ultricies in. Sed euismod erat sit amet velit sodales, egestas blandit neque tempor. Fusce pretium gravida lorem, sit amet rutrum ex semper vel. Vestibulum faucibus diam justo, vel cursus tortor laoreet in. Proin elementum posuere odio in finibus. Fusce luctus scelerisque dui, varius euismod purus aliquam sit amet. Nam metus nisi, pellentesque mattis velit vel, congue tristique dolor. Suspendisse dignissim blandit augue, in commodo erat molestie vel. Aliquam erat volutpat. Fusce et ultrices ligula, in elementum enim. Pellentesque id nibh at purus tristique imperdiet. Nunc quis dapibus ipsum. Phasellus congue, magna vel rhoncus rhoncus, diam dui bibendum urna, eu pulvinar dolor magna sed lectus. Integer placerat ultrices neque sit amet ornare. Donec consectetur dui sed dapibus tristique.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:57,
        question:"Suspendisse vitae arcu ligula?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Suspendisse vitae arcu ligula. Vivamus eu elementum mauris. Donec interdum nisi sit amet ipsum varius vulputate. Integer in arcu purus. In mattis metus odio, sed tincidunt ligula hendrerit eu. Phasellus id eleifend leo. Aliquam convallis quam dictum felis elementum, id rhoncus libero tincidunt. Donec suscipit, velit lacinia lobortis tincidunt, enim eros auctor lorem, a maximus massa est ac sem. Vivamus sit amet ligula aliquam, placerat nunc eu, aliquam augue.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:58,
        question:"Sed turpis lacus, imperdiet vel consectetur ut, varius ac ligula?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.*", correct:true}],
        explanation:"Sed turpis lacus, imperdiet vel consectetur ut, varius ac ligula. Sed tempor lacus ante, ut facilisis massa dapibus et. Curabitur est justo, faucibus vitae libero nec, efficitur cursus tortor. Aliquam erat volutpat. Integer vestibulum pharetra dui at eleifend. Praesent consequat tortor eget sapien efficitur ultricies. Pellentesque aliquam sollicitudin tortor, ut lacinia tortor luctus quis.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:59,
        question:"Maecenas vehicula condimentum nulla?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Maecenas vehicula condimentum nulla. Aenean finibus fermentum nisi, sit amet ultricies lacus sollicitudin quis. Maecenas aliquet, est et mollis facilisis, lorem mauris blandit nisi, imperdiet ultricies urna augue eu purus. Integer elementum, augue ac pretium lobortis, felis lectus tincidunt urna, eu aliquet turpis ipsum consequat lorem. Aliquam maximus ligula ut venenatis euismod. Donec vehicula scelerisque ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur scelerisque diam vitae sapien iaculis, luctus rhoncus risus feugiat. Nullam fringilla tempor arcu, eget condimentum eros mattis vitae. Quisque congue semper rutrum. Phasellus ut ipsum fermentum, dapibus enim sit amet, porta odio. Aenean elit mauris, vestibulum et quam sit amet, blandit malesuada ante. In accumsan, est sit amet commodo tristique, lectus lacus molestie dui, id mattis dolor nisl quis lacus. Duis at nulla dictum, feugiat metus in, consectetur leo. Cras feugiat dolor sodales odio lacinia pharetra.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:60,
        question:"Duis ac risus ut felis ultrices efficitur eu at dolor?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Duis ac risus ut felis ultrices efficitur eu at dolor. Maecenas aliquet velit velit, ac tristique massa efficitur ac. Phasellus eleifend sapien sed sem dignissim, quis imperdiet velit fermentum. Nam vitae laoreet mauris. Morbi dapibus urna at nulla ornare, eu auctor velit rutrum. Donec vel tortor id lacus feugiat posuere. Duis et sollicitudin enim, et imperdiet neque. Maecenas hendrerit eu magna ut dignissim. Vivamus vel convallis magna. Vestibulum sed ipsum nec neque finibus congue. Sed blandit accumsan ipsum nec feugiat. Fusce eu arcu scelerisque, eleifend tellus at, bibendum augue.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:61,
        question:"In nunc tellus, rhoncus vitae condimentum et, condimentum a enim?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true}],
        explanation:"In nunc tellus, rhoncus vitae condimentum et, condimentum a enim. Nam pulvinar risus eget augue fermentum sagittis. Etiam vitae nunc nec dui rhoncus rutrum. In at massa vel sapien rhoncus rutrum in vel sapien. Mauris ligula turpis, interdum quis metus a, auctor tempor libero. Quisque consectetur, mauris et congue tristique, tortor libero finibus purus, vitae aliquam nibh turpis a quam. Suspendisse fermentum vestibulum nisl quis luctus. Fusce viverra pharetra euismod. Sed consectetur lacus nec ex sollicitudin sollicitudin. Quisque sed maximus sem, ut ultricies ipsum. In varius fermentum rhoncus. Vivamus luctus felis id nisi rhoncus vestibulum.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:62,
        question:"Etiam interdum neque quis orci venenatis, id mattis turpis pharetra?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Etiam interdum neque quis orci venenatis, id mattis turpis pharetra. Duis eleifend lorem at sagittis gravida. Mauris aliquam nunc purus, a facilisis sapien auctor sit amet. Suspendisse ultricies turpis cursus mauris sagittis, in dapibus neque bibendum. Maecenas feugiat mi massa, vitae maximus diam facilisis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget quam in tortor viverra consectetur sit amet non sapien. Integer sed aliquet elit. Maecenas vestibulum sem vel sem pharetra tristique. Vestibulum et pretium diam. Nam convallis nec turpis a auctor. Etiam sit amet elit vel ex aliquam sodales. In tincidunt venenatis aliquet. Quisque auctor iaculis vestibulum.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:63,
        question:"Aliquam erat volutpat?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.*", correct:true}],
        explanation:"Aliquam erat volutpat. Nulla volutpat dictum semper. Donec consectetur congue tristique. Donec felis risus, rhoncus sit amet pulvinar ac, aliquet eget sem. Aenean dignissim elit nec iaculis rhoncus. Sed ullamcorper nulla imperdiet ex euismod, non fermentum lacus varius. Pellentesque tellus tellus, semper at pellentesque vitae, aliquet bibendum sem.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:64,
        question:"Maecenas sed leo cursus, malesuada turpis nec, pulvinar ante?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Maecenas sed leo cursus, malesuada turpis nec, pulvinar ante. Mauris scelerisque, arcu eget accumsan efficitur, augue dui varius dui, commodo tempus metus quam sit amet ligula. Phasellus tempus imperdiet nulla, quis lobortis nunc ultricies hendrerit. Phasellus vitae magna eget arcu tincidunt lobortis vitae iaculis justo. Donec nec neque a dolor accumsan venenatis quis ut arcu. Curabitur finibus diam dolor, in viverra lectus mollis sed. Integer orci neque, tristique eu ipsum sodales, dignissim aliquet elit. Aenean auctor lacinia sem a scelerisque. Quisque sit amet suscipit est. Cras at risus risus. Aenean facilisis vitae tortor nec molestie. Ut a nisi et libero accumsan placerat at nec ex. Suspendisse ut est urna.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:65,
        question:"Praesent efficitur tellus et erat tempus pretium?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Praesent efficitur tellus et erat tempus pretium. Sed eget magna quis leo consectetur hendrerit sit amet at metus. Aliquam erat volutpat. Mauris semper nunc in risus sodales laoreet. Vestibulum varius tempor quam. Integer sit amet arcu quis nibh pretium consectetur ac eu nisl. Pellentesque porttitor est quis viverra vehicula. Cras interdum cursus odio, sit amet ullamcorper nisi scelerisque vitae. Nunc porttitor urna condimentum varius egestas. Phasellus felis sapien, ultricies porttitor volutpat in, molestie et ante. Donec non nulla non tellus consectetur iaculis quis quis nisl. Vestibulum at lacinia orci. Praesent tristique ligula sit amet ipsum auctor viverra. Suspendisse eu fermentum nulla, id malesuada odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:66,
        question:"Cras varius ultrices ullamcorper?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Cras varius ultrices ullamcorper. Pellentesque et malesuada mauris. Duis ante purus, consequat at odio sit amet, porta tempor erat. Proin eget dui sed elit posuere condimentum ac vitae risus. Donec bibendum nec ante in molestie. Suspendisse pretium facilisis aliquet. Nunc mollis pulvinar lectus sed tempus. In vitae bibendum odio. Aenean bibendum, magna vitae pulvinar imperdiet, dolor augue aliquam lorem, vitae tempus ex libero at mauris. Nunc viverra mauris fermentum odio cursus, sed viverra dui cursus. Suspendisse luctus lacus at sapien tempor, sed consectetur velit blandit. Duis eu nibh turpis.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:67,
        question:"Vivamus ac blandit tellus, eget auctor erat?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Vivamus ac blandit tellus, eget auctor erat. Mauris nec interdum arcu. Mauris sagittis euismod sapien et accumsan. Mauris venenatis dignissim lacus quis ullamcorper. Duis eget auctor dui, vitae tempus lectus. Praesent sodales tortor sit amet interdum viverra. Maecenas luctus scelerisque nisi, non molestie tellus accumsan et.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:68,
        question:"Donec egestas, erat sed tempor posuere, orci ipsum auctor nisl, ut aliquam mauris nisl at felis?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Donec egestas, erat sed tempor posuere, orci ipsum auctor nisl, ut aliquam mauris nisl at felis. Quisque mauris ligula, condimentum ac mauris a, bibendum ullamcorper magna. Sed imperdiet, ante vitae egestas ultrices, massa tellus dapibus neque, quis posuere magna justo et purus. Vestibulum imperdiet porttitor magna, sed consectetur metus molestie non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget cursus ipsum. Suspendisse lobortis nisi at purus lacinia volutpat. Mauris fermentum rhoncus turpis, a congue felis pulvinar nec. Aenean tortor nisl, fermentum vel efficitur id, dignissim eu risus. Praesent fermentum lectus nunc, et molestie orci imperdiet in. Praesent ac congue mauris, sed fermentum ex. Sed porttitor ullamcorper lorem, nec tempor neque rutrum in. Aliquam finibus, turpis ac vehicula porta, quam nulla blandit felis, sed elementum urna urna id lacus. Aenean felis elit, tincidunt id sem vitae, varius euismod risus. In eu lacus et lectus interdum tempus.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:69,
        question:"Suspendisse et lorem diam?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Suspendisse et lorem diam. Nulla tristique arcu ac quam vulputate cursus. Sed non augue orci. Donec commodo ex ac felis mattis, non bibendum libero convallis. Etiam feugiat, turpis vel pretium aliquam, lorem ligula condimentum dui, ac ultrices urna mi a neque. Sed elit diam, commodo eu orci eget, bibendum commodo velit. Nulla vel tellus mattis, fringilla mi at, varius augue. Vivamus rhoncus imperdiet arcu ac maximus. Donec lorem nisi, tristique nec quam eget, dignissim blandit tellus. Aenean eu lobortis enim, ut semper ipsum.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:70,
        question:"Curabitur gravida nisi erat, et accumsan quam iaculis sed?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true}],
        explanation:"Curabitur gravida nisi erat, et accumsan quam iaculis sed. Ut efficitur pretium sodales. Mauris at nunc erat. Sed eu dapibus lectus. Phasellus id scelerisque augue, ac cursus massa. Donec auctor, ante in dapibus efficitur, mi arcu placerat dolor, non interdum dui sapien eu mauris. Nunc et luctus odio, eget efficitur ligula. Vestibulum posuere cursus nulla vitae maximus. Sed a velit quis orci rhoncus pharetra eget id dui. Aliquam sollicitudin ex sem, ut condimentum arcu gravida a. Mauris iaculis turpis id dui placerat elementum.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:71,
        question:"Curabitur odio diam, hendrerit ornare ex eu, rhoncus scelerisque massa?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Curabitur odio diam, hendrerit ornare ex eu, rhoncus scelerisque massa. Donec vel blandit nunc. Suspendisse molestie sapien vel sem faucibus dictum. Cras a gravida tellus. Morbi vitae tellus finibus, commodo mi at, dapibus justo. Proin faucibus velit enim, sed fringilla elit bibendum eget. Curabitur tempus tincidunt massa, nec faucibus mi pharetra ut. Cras venenatis tincidunt justo, ut finibus dui finibus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In maximus pharetra purus vitae lacinia. Donec accumsan dignissim orci at molestie. Phasellus sem est, tempus a justo in, euismod venenatis sapien. Pellentesque vulputate augue vel ex ornare, vitae condimentum dui tincidunt. Suspendisse sed sem et nunc elementum consequat quis non enim.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:72,
        question:"Nullam ultricies mauris ac rhoncus placerat?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true}],
        explanation:"Nullam ultricies mauris ac rhoncus placerat. Morbi eu tempor risus. Etiam ac convallis augue. Aenean rutrum suscipit sapien viverra consequat. Fusce placerat varius congue. Nulla iaculis mi lacus, consectetur hendrerit nisl pulvinar ut. Sed vel ante urna. Praesent vehicula tellus quis diam rhoncus, sed viverra sem tristique. Duis velit enim, commodo eget tellus vel, posuere tempus erat. Sed sed auctor neque, in lobortis sapien. Pellentesque massa nibh, porttitor a leo vel, porta lobortis ex. Duis vitae lectus volutpat, rhoncus ex eu, dapibus metus. Duis pretium, ipsum quis hendrerit pellentesque, felis arcu condimentum ante, eget lobortis nibh magna et lectus. Nunc tristique nunc id gravida accumsan. Aenean dictum enim vel tortor aliquam, quis ornare libero tempus.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:73,
        question:"Aliquam enim urna, rhoncus quis accumsan eget, pretium quis quam?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Aliquam enim urna, rhoncus quis accumsan eget, pretium quis quam. Morbi ultrices nec ligula ut molestie. Proin tristique nunc eu ipsum ultricies vulputate. Duis varius, sapien pellentesque molestie dictum, justo ante mollis arcu, ut ornare magna dolor eget metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet porta nibh tincidunt hendrerit. Suspendisse risus massa, ullamcorper vitae justo et, pellentesque porttitor lacus. Pellentesque cursus maximus nulla sit amet condimentum. Nullam id lacus nisl.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:74,
        question:"Maecenas eleifend metus a dictum suscipit?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false}],
        explanation:"Maecenas eleifend metus a dictum suscipit. Integer ultricies lectus non consectetur vehicula. Vestibulum elementum, elit at ultricies cursus, nibh nibh imperdiet justo, faucibus facilisis mauris orci in ante. Maecenas at velit sed erat pulvinar malesuada. In quam justo, iaculis vitae magna nec, bibendum malesuada erat. Nam blandit ullamcorper faucibus. Ut a sem ut nulla ultricies hendrerit. Donec rhoncus est tellus, nec gravida augue interdum in. Vivamus sit amet magna eu mi pellentesque lacinia. Curabitur aliquam, nulla sed dictum ultrices, nunc orci congue diam, at cursus odio dolor eu dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce nisi sapien, ullamcorper vel velit a, scelerisque malesuada felis. Nunc in fermentum nisi, vel venenatis massa. Suspendisse lacinia libero blandit consectetur viverra.",
        source:"Wikipedia",
        domain:"Chapter 1"
        },
        {
        id:75,
        question:"Donec pharetra est et dui pellentesque fermentum?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Donec pharetra est et dui pellentesque fermentum. Morbi varius vehicula metus varius rhoncus. Curabitur feugiat sem ut tortor iaculis, vitae ullamcorper mi cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ex enim, consequat eu elementum ac, viverra quis lacus. Etiam lacinia mauris sem, sit amet semper velit aliquam id. Suspendisse a faucibus enim, in volutpat neque. In lorem enim, finibus nec arcu vitae, molestie vestibulum sem. Suspendisse imperdiet tempus libero ut sollicitudin. Integer dui felis, laoreet sed scelerisque ac, imperdiet at enim.",
        source:"Reddit",
        domain:"Chapter 1"
        },
        {
        id:76,
        question:"Suspendisse porttitor dolor vitae augue pretium accumsan?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Suspendisse porttitor dolor vitae augue pretium accumsan. Vestibulum risus dui, placerat nec eros non, consectetur viverra odio. Pellentesque ac leo sem. Cras consequat enim justo, ut auctor dolor tincidunt a. Ut sem urna, faucibus ac ullamcorper vitae, congue ut tortor. Ut faucibus vel velit aliquam accumsan. Vestibulum a neque justo. Vestibulum accumsan nunc a ante faucibus pulvinar.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:77,
        question:"Proin dignissim eget erat eu semper?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true}],
        explanation:"Proin dignissim eget erat eu semper. Mauris sit amet molestie justo, quis venenatis erat. Curabitur at gravida est, sed suscipit mi. Morbi tempor risus non aliquam elementum. Mauris in nisi eget elit tempor ornare et ut urna. Mauris a pulvinar lorem. Aliquam quis luctus magna. Morbi ultricies, nulla at blandit fermentum, enim ligula faucibus tortor, posuere vestibulum libero augue malesuada arcu. Phasellus nisl erat, consequat et porttitor venenatis, finibus ut purus. Praesent dignissim fringilla lectus, non lobortis justo convallis consectetur.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:78,
        question:"Morbi neque sem, tincidunt ac ligula at, semper molestie ex?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:1,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Morbi neque sem, tincidunt ac ligula at, semper molestie ex. Donec dictum ac neque id varius. Vestibulum sit amet enim sed quam facilisis semper eget nec velit. Donec ultrices ullamcorper turpis eget convallis. Nam ultrices posuere sagittis. Sed egestas quis lectus sed tempor. Sed tempus pellentesque leo a hendrerit. Duis ac tortor pellentesque, fermentum felis ut, bibendum libero. Morbi sem ligula, faucibus a risus vitae, eleifend mattis magna. Nulla arcu lorem, fringilla sit amet bibendum sit amet, venenatis at urna. Duis quis leo felis.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:79,
        question:"Ut malesuada aliquam quam ut varius?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Ut malesuada aliquam quam ut varius. Suspendisse et risus ex. Donec nec egestas sem. Pellentesque consequat nunc et felis pharetra, et interdum nibh consectetur. Fusce lorem purus, sodales ac libero non, mollis lacinia augue. Curabitur nec convallis lorem. Mauris quam enim, consectetur a euismod id, dignissim quis dui.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:80,
        question:"Curabitur molestie non orci a cursus?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Curabitur molestie non orci a cursus. Praesent luctus suscipit nunc, sed euismod arcu pellentesque ac. Maecenas pulvinar, felis sit amet euismod convallis, libero lectus cursus sem, sit amet porttitor odio est vel ipsum. Proin quis ultricies tortor. Morbi libero ipsum, dictum in massa vitae, porta faucibus dolor. Nunc vel urna lacinia, viverra metus vitae, tempus mi. Vestibulum in mollis tellus. Nunc ullamcorper porttitor enim, eu convallis risus aliquet a. Curabitur convallis dolor a rhoncus semper. Nulla sed urna vitae nulla hendrerit tincidunt. Sed scelerisque accumsan mi quis sollicitudin.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:81,
        question:"Vestibulum hendrerit ut felis at facilisis?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Vestibulum hendrerit ut felis at facilisis. Phasellus vitae magna ut lectus efficitur elementum consequat at nisi. Cras diam dui, pellentesque sed facilisis non, tempus egestas risus. Donec mollis vitae dolor et scelerisque. Suspendisse ligula dui, dignissim a facilisis vel, luctus ut ex. Proin semper hendrerit dolor sed egestas. Nullam at mauris facilisis, maximus arcu sed, tempus massa. Etiam vitae libero accumsan, dapibus risus vitae, pulvinar neque. Aenean a lobortis ante. Quisque malesuada condimentum orci ut luctus. Vivamus eu eros non arcu accumsan tempus ut sit amet felis. Nulla volutpat maximus ligula, sit amet posuere sem varius ac. Curabitur sagittis, ex feugiat mattis laoreet, libero neque vulputate ex, a mattis nunc nisl nec ex. Nullam pellentesque pharetra auctor. Mauris lorem leo, sodales sit amet tincidunt vitae, ornare eget turpis.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:82,
        question:"Quisque imperdiet, nisl et faucibus suscipit, orci magna convallis nunc, a ultricies arcu dui non orci?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Quisque imperdiet, nisl et faucibus suscipit, orci magna convallis nunc, a ultricies arcu dui non orci. Nullam orci velit, semper at enim sed, suscipit imperdiet ex. Nam semper pulvinar ultrices. Nam massa dolor, tincidunt sit amet facilisis at, gravida sed nibh. Suspendisse ultricies faucibus metus, vitae suscipit orci fermentum nec. Ut placerat nunc imperdiet sapien consequat interdum. Curabitur lobortis tellus ipsum, fringilla suscipit ante dictum ultrices. Vestibulum mauris massa, bibendum nec posuere non, placerat in libero. Morbi sit amet lectus cursus, gravida metus sed, efficitur elit. Nunc ipsum sapien, mollis in vehicula nec, pretium quis mauris. Ut vel felis luctus, facilisis orci ac, bibendum sapien. In maximus efficitur augue sit amet malesuada. Phasellus a condimentum ante. Curabitur quis ligula sed justo egestas fringilla. Cras erat eros, cursus ut facilisis sed, bibendum eget sapien.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:83,
        question:"Curabitur tincidunt urna id efficitur dapibus?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Curabitur tincidunt urna id efficitur dapibus. Etiam tincidunt, nibh sed interdum consectetur, eros libero consequat tortor, et dictum neque odio sit amet enim. Nam felis risus, accumsan non arcu suscipit, vehicula finibus orci. Etiam sit amet consequat dui. Mauris maximus lacus at laoreet sollicitudin. Nullam venenatis aliquet facilisis. Morbi sollicitudin, eros lacinia fringilla faucibus, turpis tortor dictum augue, lobortis porta elit massa in purus. Sed lacinia efficitur laoreet. Sed sed lectus vitae odio luctus posuere ut quis erat. Nullam ornare, ante a pulvinar lobortis, sapien mauris pellentesque leo, vitae rutrum velit ante non odio. Donec et odio eu nibh porttitor imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:84,
        question:"Praesent non felis vitae tellus commodo volutpat?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Praesent non felis vitae tellus commodo volutpat. Nulla pretium aliquam felis, ac imperdiet risus tincidunt id. Morbi nisi diam, dictum rhoncus accumsan vel, varius quis velit. Nullam id semper justo, non porta nibh. Pellentesque aliquet efficitur vehicula. Donec faucibus eget ante in placerat. Pellentesque venenatis varius dictum. Cras eget tempus odio. Vivamus dictum, nisl egestas aliquam scelerisque, magna lacus volutpat nisl, in lobortis arcu purus nec risus. Aenean libero justo, consectetur sed volutpat quis, dictum in augue. Cras nec tortor mauris.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:85,
        question:"Sed lorem ipsum, egestas ut elit vitae, euismod tristique leo?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true}],
        explanation:"Sed lorem ipsum, egestas ut elit vitae, euismod tristique leo. Aenean tristique eget enim quis sodales. Morbi consequat fermentum urna, in interdum velit lacinia nec. Ut vel erat a dolor rutrum feugiat. Ut sed eros in dui facilisis ornare. Nulla aliquam lacus id pulvinar dictum. In quis elit sagittis nibh tempus maximus quis dictum quam. Mauris sit amet vulputate augue. Pellentesque id suscipit massa. Vestibulum placerat tellus vitae mi fermentum, non semper dolor sollicitudin. Vivamus felis eros, dapibus sit amet neque in, consequat rhoncus augue. Donec eget convallis lacus, vitae mattis ligula. Duis vitae ipsum vel nulla ultricies porta quis et arcu.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:86,
        question:"Morbi varius vulputate sapien, ut cursus purus sodales id?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Morbi varius vulputate sapien, ut cursus purus sodales id. Mauris sit amet orci porta, volutpat justo a, sagittis orci. Donec convallis ornare ex, vitae commodo eros aliquet ut. Nullam et libero augue. Mauris accumsan at turpis ac maximus. Etiam eget odio eget mauris auctor tincidunt ut a leo. Proin sed diam eros. Morbi gravida pharetra maximus.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:87,
        question:"Suspendisse dictum tristique erat, quis fringilla magna vehicula eu?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true}],
        explanation:"Suspendisse dictum tristique erat, quis fringilla magna vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum tortor a ligula congue, at venenatis nisl laoreet. Etiam commodo eros ut tortor luctus mollis. Sed lectus erat, ullamcorper sit amet massa non, tempor posuere dolor. Suspendisse pretium est quis elit varius commodo. Nullam ultrices velit consectetur, accumsan odio vitae, placerat mi. Proin quis efficitur nibh. Nulla porttitor pellentesque augue, volutpat tincidunt sem imperdiet sit amet. Suspendisse pharetra nibh eget leo aliquet, ac congue odio pellentesque.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:88,
        question:"Aenean ultricies iaculis dolor id mollis?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.*", correct:true}],
        explanation:"Aenean ultricies iaculis dolor id mollis. Sed efficitur neque quis feugiat rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus lacinia dictum. Vestibulum mi quam, iaculis nec convallis in, posuere sit amet ex. Vestibulum id luctus tortor. Quisque vehicula euismod augue eget iaculis. Mauris mollis rhoncus felis, eu venenatis mi rhoncus iaculis. Maecenas sollicitudin varius tellus, eget varius ligula efficitur ut.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:89,
        question:"Morbi augue sapien, pretium nec malesuada ullamcorper, laoreet placerat justo?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Morbi augue sapien, pretium nec malesuada ullamcorper, laoreet placerat justo. Etiam et magna ut libero viverra sollicitudin. Donec sit amet nisi lacus. Nam semper diam eu egestas pellentesque. Cras vel mattis nulla, posuere finibus dui. Nam non pharetra orci, eget mattis mi. In vel dolor aliquam, malesuada risus ac, laoreet nulla. Duis rhoncus auctor diam, eu efficitur tortor laoreet sed.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:90,
        question:"Curabitur enim diam, molestie eget leo nec, maximus fringilla felis?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Curabitur enim diam, molestie eget leo nec, maximus fringilla felis. Cras iaculis sit amet purus in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent risus massa, iaculis facilisis leo et, rhoncus auctor nunc. In condimentum nibh in diam bibendum posuere. Donec nec dictum massa. Ut purus sem, bibendum ut libero non, gravida suscipit odio.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:91,
        question:"Sed rhoncus faucibus massa at fringilla?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Sed rhoncus faucibus massa at fringilla. Aliquam rutrum turpis dui, et imperdiet nisi vestibulum eget. Praesent consectetur elit a metus laoreet aliquet. Integer ac tempor tellus. Maecenas sit amet luctus velit. Praesent ante mi, molestie vitae tristique et, sollicitudin sed lacus. Sed cursus hendrerit velit non malesuada. Donec id sodales felis, ut tempus orci. Sed molestie, felis eget varius gravida, dui purus fringilla magna, ac vulputate nisl dui quis eros. Suspendisse hendrerit pretium tellus, vitae ultrices mi fermentum quis. Sed laoreet, ligula ac volutpat iaculis, ligula felis consequat urna, eu pulvinar erat dui eget enim. Proin non nisl sed nunc rutrum hendrerit. Morbi non elit massa. Quisque sit amet ipsum lacus.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:92,
        question:"Morbi pulvinar ligula suscipit lacus malesuada venenatis?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Morbi pulvinar ligula suscipit lacus malesuada venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis molestie mauris nec cursus. Cras porta non felis id bibendum. Morbi viverra et est convallis commodo. Nulla at nulla sed arcu porttitor rhoncus. Maecenas euismod, massa in volutpat malesuada, tellus velit tristique purus, a finibus quam velit eu leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas turpis turpis, commodo sit amet nulla non, iaculis feugiat metus. Nunc quis mauris nulla. Morbi lacinia turpis sit amet lectus volutpat viverra. Quisque in scelerisque ante. Nam eu dui dictum, elementum urna ac, maximus mi.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:93,
        question:"Donec felis justo, tristique sed posuere nec, ultrices ut tortor?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Donec felis justo, tristique sed posuere nec, ultrices ut tortor. Pellentesque blandit, metus vel tempor dictum, enim ligula laoreet turpis, sit amet aliquet lacus libero at enim. Duis risus ipsum, ultricies a nunc vitae, pellentesque malesuada metus. Duis eget metus sit amet elit feugiat pretium. Vestibulum ac justo viverra, pharetra arcu non, aliquam lorem. Duis fringilla, velit sed gravida gravida, ex nisi ornare purus, sed luctus diam mauris sed risus. Praesent erat nunc, euismod ac arcu vel, imperdiet tristique felis. Pellentesque eget aliquam ante, ut vehicula ipsum. Etiam elit magna, volutpat quis mattis vel, lacinia ut tortor. Ut at varius diam. Praesent euismod dignissim velit non feugiat. Duis condimentum massa at commodo pharetra. Cras accumsan efficitur mauris, non laoreet elit dignissim eu. Curabitur scelerisque eget enim sed vestibulum. Maecenas euismod, tortor ut tempus faucibus, tellus enim varius risus, sit amet auctor nibh ligula nec leo. Proin pretium nibh arcu, a tempor est rutrum in.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:94,
        question:"Praesent blandit efficitur metus sit amet suscipit?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Praesent blandit efficitur metus sit amet suscipit. Ut non ante ultricies, malesuada metus vel, mattis ex. Nullam augue mauris, feugiat nec porttitor nec, viverra id odio. Aliquam mi sem, hendrerit ut arcu fermentum, pretium euismod lacus. Vivamus tempus molestie eros, rhoncus tincidunt lacus finibus non. Morbi egestas, ante ut mollis fermentum, nisi massa egestas sapien, sed tincidunt leo libero non erat. Quisque porta blandit ante, eget consequat sapien venenatis in. Quisque fringilla, lorem in convallis facilisis, felis ante dignissim ipsum, id pharetra velit felis vel dolor. In vel tincidunt quam. Nam venenatis enim erat, non dictum erat consectetur eu. Curabitur elementum est ac lacus mattis mattis. Vivamus pellentesque ultrices molestie. Aenean pharetra tempor hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mauris erat, molestie ut felis id, tristique fringilla quam.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:95,
        question:"Praesent id sapien tortor?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Praesent id sapien tortor. Morbi accumsan nisl a nulla efficitur venenatis. Quisque eros lectus, faucibus non tellus at, vehicula suscipit tortor. Donec pretium, nibh eu tincidunt interdum, leo turpis maximus nisi, in tincidunt orci augue nec justo. Proin accumsan, diam nec tristique mollis, neque neque molestie nisl, id pharetra lectus mi sit amet mi. Donec nec ipsum euismod, gravida augue id, molestie dui. Aenean arcu libero, gravida non lectus nec, facilisis auctor lacus. Suspendisse ullamcorper ligula ac mi pharetra, vel fermentum urna suscipit. Suspendisse eu enim a lacus condimentum ornare. Suspendisse ipsum purus, auctor et metus sed, pellentesque faucibus diam. Curabitur molestie bibendum est, eget pretium mauris consequat quis. Curabitur congue eget sem ac interdum. Nulla varius, magna ac porttitor viverra, mi nisl feugiat nulla, at feugiat eros lectus suscipit magna. Cras sollicitudin ut leo non scelerisque. Sed tempor convallis libero, non pulvinar mi lacinia vitae. Pellentesque finibus felis augue, et tincidunt lorem venenatis eget.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:96,
        question:"Nulla non nibh dolor?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Nulla non nibh dolor. Pellentesque bibendum nibh eros. Vestibulum condimentum vehicula metus, convallis sagittis mi ornare vel. In sollicitudin efficitur maximus. Nullam ac dictum elit, non euismod quam. Nunc sit amet magna nec tortor mattis suscipit eu eget est. Nulla facilisi. Etiam eu placerat ex. Mauris aliquet vehicula tincidunt. Aenean interdum nulla eget quam ultricies, iaculis bibendum erat tempus. Aliquam efficitur tellus vel risus blandit, in imperdiet dui lacinia.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:97,
        question:"Cras rhoncus nunc eu quam efficitur porta?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Cras rhoncus nunc eu quam efficitur porta. Nulla at tortor et mi sodales aliquet sit amet non sem. Etiam pellentesque, mauris ut venenatis cursus, magna est pulvinar urna, ut volutpat elit dui ac ex. Aenean semper et justo non rutrum. Curabitur sagittis luctus ipsum, a faucibus urna venenatis ac. Phasellus aliquam, leo ut luctus consequat, tellus urna tristique mauris, non semper nulla lectus ac ligula. Fusce placerat efficitur placerat. Aenean gravida et eros a feugiat. Aliquam ipsum nulla, auctor id justo vitae, maximus euismod risus. Cras non sollicitudin lorem. Vivamus arcu arcu, efficitur quis cursus ac, condimentum viverra arcu. Quisque vel interdum mauris. Aliquam erat volutpat.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:98,
        question:"Sed vitae sem in dolor venenatis scelerisque?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Sed vitae sem in dolor venenatis scelerisque. Duis dignissim id nulla ut hendrerit. Vestibulum ornare nunc a lectus porta, a fringilla urna suscipit. Donec nec placerat massa. Fusce vitae leo ut odio egestas scelerisque. Nulla facilisi. Praesent ut euismod lacus. Nulla feugiat ipsum accumsan viverra rutrum.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:99,
        question:"Nam non interdum nibh?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Nam non interdum nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur iaculis turpis, vel placerat nulla gravida at. Curabitur nec velit efficitur risus feugiat pharetra. Aenean quis dui vel elit ultrices placerat eu eget enim. Donec urna tortor, vehicula sed magna in, tincidunt scelerisque nulla. Curabitur imperdiet feugiat dui, vitae volutpat neque imperdiet et. Nunc dapibus venenatis sodales.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:100,
        question:"Nulla ac ultrices lacus?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true}],
        explanation:"Nulla ac ultrices lacus. Aliquam erat volutpat. Fusce ut nisi sem. Aliquam finibus arcu sed sollicitudin vulputate. Nam at augue nec velit ornare tincidunt. Donec eu ipsum eleifend elit laoreet pharetra non ac erat. Pellentesque et interdum nisi, a ullamcorper nulla. Suspendisse potenti. Nam egestas at eros a porttitor. Duis turpis mauris, feugiat eu feugiat sit amet, vulputate id ipsum. Phasellus ultricies libero sit amet quam eleifend ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:101,
        question:"Suspendisse quis purus dapibus, egestas metus at, aliquam lectus?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Suspendisse quis purus dapibus, egestas metus at, aliquam lectus. Suspendisse potenti. Pellentesque eu sem quam. Nulla lacus tortor, facilisis in placerat non, auctor vel diam. Quisque suscipit laoreet lectus at egestas. Nam placerat tincidunt neque at viverra. Suspendisse et felis lacus. Sed diam eros, laoreet sit amet massa tristique, lobortis dictum quam. Phasellus molestie molestie risus sit amet iaculis. Donec ut eleifend urna. Donec sollicitudin purus libero. Suspendisse rhoncus, dolor eu aliquam porta, nulla augue congue odio, nec dictum neque dolor placerat neque. Aenean in rutrum mauris. Morbi vel porta ipsum.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:102,
        question:"Aenean condimentum, neque et vestibulum vulputate, ipsum nibh blandit nibh, facilisis semper dolor nisi et elit?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Aenean condimentum, neque et vestibulum vulputate, ipsum nibh blandit nibh, facilisis semper dolor nisi et elit. Sed viverra odio sit amet justo fermentum, at elementum augue volutpat. Etiam sollicitudin blandit lorem a malesuada. Aenean faucibus bibendum velit et commodo. Nullam quis varius turpis. Integer aliquam molestie tortor ut dictum. Aenean molestie, magna non imperdiet tristique, velit nulla tincidunt lorem, ac pulvinar dolor purus id eros. Suspendisse pretium purus nec metus dignissim aliquet. Quisque a euismod massa.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:103,
        question:"Sed faucibus vestibulum odio sit amet pulvinar?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Sed faucibus vestibulum odio sit amet pulvinar. Nam ante magna, imperdiet a fermentum non, hendrerit nec felis. Proin consectetur, massa eu bibendum tristique, risus lacus porttitor nulla, nec dictum mauris velit vel arcu. Aliquam erat volutpat. Nullam ultrices ligula vel odio pulvinar mattis. Aliquam ornare ex a tortor rhoncus vestibulum. Nunc tristique ante ac erat laoreet, id fermentum augue porta. Donec ac ipsum eu nisi faucibus gravida. Aenean pellentesque, odio eu elementum tristique, nunc massa malesuada elit, quis auctor ligula nibh vitae quam. Sed mi risus, luctus sed fringilla ut, tincidunt ac nunc.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:104,
        question:"Suspendisse dui purus, dapibus quis neque sed, mattis vestibulum ipsum?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Suspendisse dui purus, dapibus quis neque sed, mattis vestibulum ipsum. Phasellus rhoncus facilisis maximus. Quisque aliquet rutrum tortor a dignissim. Morbi sapien lectus, lobortis eget lorem non, tincidunt accumsan orci. Sed congue mauris orci, a cursus risus lobortis ut. Sed imperdiet mi vitae neque volutpat, vel iaculis diam bibendum. Suspendisse egestas luctus lorem, nec efficitur velit porttitor vitae. Vivamus eleifend mollis diam, sed pretium nisl. Aenean scelerisque tellus id libero fringilla iaculis. Praesent mollis diam et felis efficitur, eget blandit nunc viverra.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:105,
        question:"Donec eu purus dui?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Donec eu purus dui. Mauris viverra metus quis molestie euismod. Nulla ac mattis tortor. Vestibulum non est non turpis tincidunt imperdiet quis in tortor. Sed rutrum consectetur congue. Phasellus ut dui massa. In interdum efficitur tempor. Donec condimentum mi ante. Duis ullamcorper sit amet mauris ut bibendum. Cras sed pretium nulla, non suscipit ante. Etiam fringilla metus at porttitor tempor.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:106,
        question:"Aenean semper bibendum metus at facilisis?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Aenean semper bibendum metus at facilisis. In vestibulum egestas nulla at pellentesque. Proin convallis quam ut ultricies vulputate. Ut suscipit risus id dolor tincidunt, eget porta ante pretium. Sed cursus at dui sit amet fringilla. Nullam commodo turpis ultricies ligula fermentum dignissim. Maecenas feugiat nibh cursus ante pulvinar, ac congue nisi iaculis. Donec gravida a libero quis scelerisque. Quisque a massa ligula. Maecenas eleifend lectus ut diam maximus, eu dapibus mi eleifend. Sed dapibus suscipit lectus nec tristique. Aenean tempor rutrum sapien a sodales. Mauris ante diam, dictum sed ante in, placerat pulvinar massa. Proin quis lacus ac odio fermentum ornare in in felis. Vestibulum libero ligula, maximus vel convallis et, volutpat id ipsum.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:107,
        question:"Duis tincidunt sapien massa, ut pretium tellus vulputate a?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"Duis tincidunt sapien massa, ut pretium tellus vulputate a. Aenean a nibh massa. Nunc sit amet imperdiet diam. In id consectetur nunc. Integer aliquet elementum urna eget rhoncus. Vestibulum pharetra pellentesque aliquam. Aenean ultricies hendrerit lectus a ullamcorper. In posuere, orci vel maximus porta, ante dolor ultrices libero, nec sodales tellus arcu sodales felis. Suspendisse eget tempor neque. Donec neque tortor, aliquet eget purus quis, molestie accumsan lacus. Nunc sit amet metus eu odio semper sollicitudin eu malesuada mauris. Ut nibh leo, accumsan ac risus eu, efficitur pharetra dui. Cras et urna quis enim scelerisque rutrum et vitae lacus. Maecenas non nulla ut risus finibus bibendum.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:108,
        question:"Vivamus efficitur ultrices quam, sed tincidunt arcu ullamcorper vulputate?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Vivamus efficitur ultrices quam, sed tincidunt arcu ullamcorper vulputate. Vivamus nisl mauris, commodo vel ligula convallis, interdum convallis lorem. Phasellus interdum ornare lacus, in commodo diam dignissim in. Proin ac dolor id ante vehicula efficitur. Curabitur sed tempor augue. Etiam ac ex a ipsum commodo egestas. Sed tincidunt mauris egestas sapien maximus scelerisque. Aliquam sagittis convallis tellus at sodales. Etiam semper nisl quis augue tempor consectetur.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:109,
        question:"Nam at mollis mauris?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Nam at mollis mauris. Vivamus tristique odio vitae tortor malesuada, sollicitudin interdum odio finibus. Phasellus vestibulum elit nunc, vitae consectetur lacus ullamcorper non. Donec luctus urna hendrerit, laoreet libero sed, ullamcorper neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque mauris metus, eget interdum lorem placerat eu. Donec ut egestas ante, at placerat enim. Suspendisse eget nibh est. Duis maximus faucibus mi, ac placerat dolor aliquam quis. Integer viverra nec leo venenatis posuere. In non vulputate odio, quis elementum lacus. Donec semper ut risus quis auctor. Vivamus vel dui vel risus pharetra faucibus. Aenean varius ligula ut nunc tincidunt, ultrices euismod lacus congue.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:110,
        question:"Nulla rutrum fringilla consequat?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Nulla rutrum fringilla consequat. Fusce quis ligula ultricies, viverra libero sed, pretium tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sapien dolor, accumsan eu nulla ut, gravida sollicitudin sem. Nulla metus metus, tristique quis quam ut, auctor eleifend velit. Maecenas ac egestas ipsum. Donec vitae commodo massa. In sed euismod nisl. Duis porta vulputate metus et laoreet. Quisque ut elit luctus lacus accumsan efficitur. Ut rutrum egestas nibh. Ut rutrum leo et orci venenatis laoreet. Curabitur elementum augue odio, ut pulvinar orci aliquam a.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:111,
        question:"Integer auctor mollis gravida?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true}],
        explanation:"Integer auctor mollis gravida. Pellentesque ultrices dolor et lectus gravida malesuada. Duis cursus luctus aliquam. In tincidunt molestie ligula, tempor egestas dui placerat vel. Fusce congue eu risus vel feugiat. Nunc quam purus, convallis vel tincidunt eget, vulputate quis dolor. Vivamus quis tincidunt massa. Quisque facilisis dapibus ipsum, at molestie enim.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:112,
        question:"Praesent vitae metus sed mauris condimentum vestibulum at ut neque?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Praesent vitae metus sed mauris condimentum vestibulum at ut neque. Vestibulum maximus, nisl non bibendum lobortis, mauris lorem facilisis felis, et mattis quam nisi non nisi. Sed in semper nunc. Sed tempus elementum velit quis pulvinar. Etiam vestibulum justo lacus, eu luctus lorem ultricies non. Morbi vitae dolor sed leo sollicitudin rutrum a sit amet quam. Curabitur hendrerit ultricies lorem vitae molestie. Donec vel sem ut urna cursus fermentum in volutpat mi. Phasellus viverra nunc quis tortor congue, sed lacinia turpis malesuada. Nullam commodo felis at ornare iaculis. Aliquam erat volutpat. Donec porttitor mauris sit amet eros efficitur interdum. Etiam et facilisis ipsum, in ultrices mi.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:113,
        question:"Suspendisse scelerisque augue et accumsan convallis?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Suspendisse scelerisque augue et accumsan convallis. Nullam porta lacus nec nunc pharetra ultricies. Morbi efficitur tincidunt dictum. Nulla elementum efficitur urna nec semper. Sed at aliquam ligula. Praesent ut congue turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam feugiat volutpat turpis, quis condimentum nunc congue ut.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:114,
        question:"Phasellus lobortis hendrerit ligula, eu gravida justo?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Phasellus lobortis hendrerit ligula, eu gravida justo. Nullam magna risus, varius et arcu sit amet, euismod feugiat mauris. Sed eu mauris turpis. Phasellus sed tellus sodales, pellentesque ligula eu, elementum ex. Cras eget aliquam enim. Praesent faucibus vulputate dui rhoncus finibus. Cras semper facilisis erat sed maximus. Quisque scelerisque consequat consequat. Pellentesque varius, mi id pretium molestie, velit massa aliquet libero, in tincidunt est urna id ligula. Aliquam laoreet neque sed lacus tempus, ut convallis erat tincidunt. Nunc interdum dapibus lorem, sit amet bibendum turpis ultrices sit amet.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:115,
        question:"Ut id venenatis nunc, ut hendrerit enim?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Ut id venenatis nunc, ut hendrerit enim. Nam ornare magna vel orci efficitur molestie. Aliquam erat volutpat. Vestibulum nec dolor aliquam dolor dignissim vestibulum. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas consequat risus ut quam euismod, eget pharetra metus bibendum. Vivamus pharetra diam in neque ornare tincidunt. Suspendisse sollicitudin nibh eu libero ultrices, ac efficitur ante ornare. Aliquam ultricies enim ut porta efficitur. Sed efficitur leo dolor, a tempus augue viverra in.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:116,
        question:"Quisque ut pellentesque turpis, sed facilisis nisi?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.*", correct:true},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Quisque ut pellentesque turpis, sed facilisis nisi. Phasellus sed libero enim. Donec mauris sem, scelerisque in dictum et, viverra vel sem. Suspendisse non sem mattis, congue leo in, venenatis ligula. Cras eget mi in urna mattis pharetra. Suspendisse quis eleifend ipsum. Duis elementum vehicula ipsum, sit amet sollicitudin nisl sollicitudin non. Curabitur finibus pharetra maximus. Sed posuere dui turpis, vel tristique lacus auctor quis. Pellentesque tempor nibh eu nibh mollis tincidunt. Praesent vel porta risus, vel tincidunt ex. Cras suscipit, mauris in porta tristique, quam risus tincidunt lorem, porttitor convallis nisl libero nec nisi. Integer ac faucibus erat. Etiam tempus magna id leo efficitur, ac pharetra nisl scelerisque.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:117,
        question:"Cras convallis diam sit amet lectus elementum, a tristique est dignissim?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Cras convallis diam sit amet lectus elementum, a tristique est dignissim. Aliquam erat volutpat. Duis ipsum urna, interdum eu pretium sed, facilisis non arcu. Vivamus nec tristique purus. Suspendisse et elementum ante. Pellentesque urna ipsum, egestas vitae augue sit amet, auctor eleifend nisl. Quisque et lacus magna. Aenean aliquam, libero et lobortis finibus, enim lectus lobortis est, eu elementum sem orci sit amet turpis.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:118,
        question:"Donec pellentesque sollicitudin metus vitae egestas?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Donec pellentesque sollicitudin metus vitae egestas. Vestibulum non sem a risus sollicitudin luctus. Curabitur odio diam, accumsan et vestibulum in, imperdiet vel enim. Etiam sit amet auctor augue, nec pharetra velit. Vestibulum maximus non neque commodo imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel neque vestibulum, vehicula dolor eget, consectetur quam. Nunc eget fermentum sem.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:119,
        question:"Ut viverra augue purus, et volutpat augue luctus ac?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true}],
        explanation:"Ut viverra augue purus, et volutpat augue luctus ac. Quisque ac nisl dictum, porta ipsum tempus, ornare tortor. Cras sit amet purus non nisl pulvinar luctus quis vel eros. Nulla et nunc et odio elementum placerat et in eros. Cras in dignissim tellus. Vivamus in purus cursus ante ultrices dictum non eu risus. Donec cursus fringilla erat, vitae hendrerit dui convallis eget. Quisque id tincidunt metus. Nunc tincidunt et nibh ac hendrerit. Maecenas sodales maximus posuere. Nullam sit amet ipsum at tortor fringilla tincidunt.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:120,
        question:"Vestibulum a bibendum tortor?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Vestibulum a bibendum tortor. Mauris vitae velit id ipsum interdum sodales non ac nisl. Proin accumsan rhoncus lorem vitae mattis. Vestibulum vel congue mi, non placerat nulla. Donec justo elit, porttitor eget massa ac, semper porttitor urna. Vestibulum sodales metus nec feugiat hendrerit. Donec at ultrices felis. Nam ac ligula eu dui porttitor lacinia ac a diam. Praesent quis massa et ipsum malesuada imperdiet sit amet quis sem. In vel euismod orci.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:121,
        question:"Cras nec mi diam?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Cras nec mi diam. Nulla consequat sem justo, a pharetra mi elementum sed. Sed ultrices elit non magna faucibus, nec vehicula lectus consequat. Vestibulum id felis id ex eleifend eleifend. Cras posuere pulvinar pulvinar. Suspendisse nec nibh dolor. Etiam tristique, massa ut fermentum feugiat, tellus augue viverra velit, at sagittis tellus est at ex. Nulla facilisi.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:122,
        question:"Nunc auctor tristique molestie?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false}],
        explanation:"Nunc auctor tristique molestie. Vivamus aliquam quam in ante congue, vel placerat lorem fermentum. Mauris magna quam, pretium a pretium gravida, condimentum ut lectus. Etiam at odio justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ac tellus quis nunc consectetur sodales a at sem. Curabitur bibendum dapibus lacinia. In hac habitasse platea dictumst. Suspendisse eu ipsum id sapien sollicitudin dapibus. Donec ut malesuada lacus, et venenatis diam. Nulla facilisi. Cras viverra lacus fringilla, aliquet nisi nec, lacinia mi.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:123,
        question:"Nulla facilisi?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"Nulla facilisi. Nam quis pharetra mi. Sed rhoncus ornare libero non condimentum. Sed sit amet convallis purus. Suspendisse facilisis nibh sem, in dictum neque pellentesque eu. Nunc est turpis, consequat in ligula quis, malesuada consectetur erat. Aenean volutpat leo id ligula convallis, vel iaculis arcu interdum. Suspendisse fringilla luctus diam, id elementum est facilisis id. In ac mauris tempus, mollis nibh nec, fringilla quam. Pellentesque massa augue, varius ac commodo at, lacinia in velit.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:124,
        question:"Suspendisse vitae diam vel neque blandit porta?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Suspendisse vitae diam vel neque blandit porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sem turpis, tempus vel purus a, efficitur sollicitudin urna. Vivamus condimentum erat dolor, sit amet vulputate nibh bibendum non. Pellentesque finibus bibendum pellentesque. Cras nec metus eu turpis mattis finibus et id dolor. Nullam massa turpis, vulputate non ante eu, accumsan cursus ligula. Suspendisse quis justo lacus. Ut rutrum feugiat enim, sit amet faucibus risus vulputate quis. Nunc sit amet hendrerit mi.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:125,
        question:"Curabitur at mattis velit?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Curabitur at mattis velit. Integer vestibulum lacus odio, aliquet aliquet dui dictum at. In odio eros, tristique eget orci eget, elementum laoreet est. Maecenas vestibulum luctus blandit. Quisque tempor malesuada semper. Maecenas molestie eros lectus, vitae congue sapien placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est nec erat ullamcorper commodo. Quisque eu nulla pulvinar, maximus turpis et, lacinia urna.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:126,
        question:"Donec in arcu imperdiet orci molestie pretium?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false}],
        explanation:"Donec in arcu imperdiet orci molestie pretium. Fusce pretium quam est, et aliquet erat aliquet nec. Nulla aliquet in nulla ac pellentesque. Donec quis leo vitae risus feugiat cursus ac non nunc. Mauris pharetra cursus nisi, in blandit metus porta eu. In feugiat lorem a fermentum consequat. Curabitur vitae dapibus purus. Nunc ultricies, mauris nec aliquam tempor, nunc nibh fermentum nibh, at congue nisl massa eu tortor.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:127,
        question:"Quisque pellentesque mattis eleifend?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Quisque pellentesque mattis eleifend. Donec molestie et mauris in aliquet. Mauris sollicitudin ante ac dui rhoncus ullamcorper. Maecenas dui urna, lacinia at dignissim at, pharetra at mauris. Proin volutpat pulvinar leo, id condimentum elit ullamcorper et. Vestibulum facilisis vel mauris non vestibulum. Praesent non iaculis ex. Morbi et leo urna. Aenean accumsan libero sed nisl elementum, non viverra ipsum laoreet. Ut quis porttitor dolor.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:128,
        question:"Sed mattis rutrum iaculis?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Sed mattis rutrum iaculis. Cras efficitur turpis sit amet feugiat varius. Suspendisse eget ipsum in ex iaculis auctor. Aenean purus velit, mollis vitae ex ut, cursus sodales sapien. Suspendisse efficitur, lectus in porta rutrum, nulla mauris sagittis elit, ac accumsan dui neque non enim. In lacinia, dui quis elementum porttitor, nunc dui posuere erat, vel pellentesque leo libero ac elit. Cras turpis diam, vehicula tincidunt quam id, placerat molestie ante. Praesent sit amet neque in dolor porta posuere nec in est. Aliquam ornare molestie pellentesque. Cras a ex feugiat, cursus tellus eu, venenatis purus. Nullam blandit vel tellus ut fermentum. Quisque eget urna at dui ultricies congue sit amet non purus. Sed hendrerit a nisi vitae vehicula. Maecenas eu pulvinar enim.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:129,
        question:"Vivamus ut ultricies purus?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Vivamus ut ultricies purus. Nullam gravida lorem vitae suscipit finibus. Proin sollicitudin tellus sit amet egestas venenatis. Praesent non ipsum eget odio suscipit dapibus. Duis congue nulla eu placerat faucibus. Nullam quis pellentesque libero. Aenean a semper nunc. Sed mi arcu, viverra pulvinar vehicula vel, bibendum id elit. Vestibulum luctus nibh vel magna mattis, ac scelerisque ligula tempus.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:130,
        question:"In semper tortor at finibus egestas?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"In semper tortor at finibus egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vehicula in tortor eu interdum. Donec id velit feugiat, auctor sapien eget, gravida purus. Praesent ut bibendum quam. Cras dignissim mattis urna ut maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Sed nec ligula neque. Donec feugiat purus odio, ut ultrices lacus imperdiet a. Mauris vel nisl enim. Proin auctor ligula tempor ipsum tristique, eget pulvinar est vestibulum. Curabitur vel nibh risus.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:131,
        question:"Pellentesque a augue scelerisque, dictum lectus eget, tristique magna?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false}],
        explanation:"Pellentesque a augue scelerisque, dictum lectus eget, tristique magna. Nunc ut diam et nibh mattis pretium a sed enim. Donec sit amet ipsum ut nisi rhoncus convallis. Ut volutpat lacinia justo. Quisque porta, ipsum convallis ultricies tempus, felis neque euismod diam, sed pharetra odio ex pharetra nunc. Fusce facilisis quam eget metus luctus varius. Aenean condimentum quam mi, sit amet condimentum ante sodales eu. Aliquam erat volutpat. Aliquam posuere, odio in eleifend pulvinar, dui neque porttitor sapien, sit amet feugiat erat augue pretium ligula. Nam consectetur iaculis lorem quis iaculis. Nulla semper dui massa, non hendrerit tortor auctor eget. Pellentesque feugiat, nisi a bibendum feugiat, eros est vestibulum massa, a vehicula elit turpis in massa. Vestibulum tempor pharetra tempus. Fusce nec accumsan odio.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:132,
        question:"Maecenas fermentum fringilla nibh, sed facilisis tortor commodo ut?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true}],
        explanation:"Maecenas fermentum fringilla nibh, sed facilisis tortor commodo ut. Nam tristique sollicitudin nunc in rutrum. Etiam dictum tortor et ex ultricies accumsan. Cras non nisi ligula. Pellentesque at rhoncus dolor, vitae hendrerit sem. In sed consequat metus, vitae scelerisque libero. Suspendisse malesuada diam sit amet mattis posuere. Ut at maximus lorem. Praesent nec sodales mi. Etiam aliquam, nibh vel vestibulum semper, mauris urna vestibulum nisi, at rhoncus sapien magna eu odio. Sed eget nulla a ante cursus elementum at ac sapien. Morbi in lacus vel nunc rutrum mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur semper vel libero a pellentesque.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:133,
        question:"Suspendisse potenti?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Suspendisse potenti. Phasellus tempor faucibus tortor sit amet facilisis. Ut ac placerat risus. Maecenas lacinia varius fringilla. Etiam sagittis enim dignissim ipsum ultrices sollicitudin. Nulla fermentum interdum faucibus. Vivamus malesuada lectus vitae mi lacinia, vel sollicitudin urna rhoncus. In quam turpis, maximus et condimentum sit amet, pulvinar non tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla volutpat eu nibh non tincidunt. Phasellus vestibulum ultrices egestas.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:134,
        question:"Etiam eget libero in eros porttitor tincidunt?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true}],
        explanation:"Etiam eget libero in eros porttitor tincidunt. Aliquam nec porttitor massa, ut congue nibh. Nunc ultrices diam eget ultricies varius. Nulla a mattis nibh. Vestibulum porta ultrices semper. Sed justo orci, consectetur eget ante quis, semper consequat odio. Nulla ullamcorper quam nec tortor tempor convallis. Maecenas dapibus ligula et vulputate commodo. Sed enim dui, hendrerit at eleifend at, pulvinar vel ipsum. Nulla facilisi. Donec vitae nunc nec metus tristique bibendum. Sed eleifend leo ullamcorper lacus sollicitudin, et lobortis quam mollis. Nullam maximus, metus porta egestas consequat, lectus diam interdum erat, nec interdum turpis felis ut urna. Vivamus faucibus risus nec venenatis aliquam. In a ultricies tortor.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:135,
        question:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in mattis sapien, in suscipit ligula. Nunc ornare risus ac urna lobortis, id tincidunt justo feugiat. Proin sed arcu sed tellus venenatis blandit id eu tortor. Duis sollicitudin est sit amet blandit mollis. Phasellus tincidunt, metus sed sagittis pulvinar, neque dui hendrerit erat, vitae elementum eros mi ac tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum mattis nulla eget justo bibendum porttitor. Sed malesuada tortor ante, a rhoncus nisi hendrerit quis. Sed consectetur ante quis gravida venenatis. Integer lorem erat, faucibus vitae convallis id, lobortis ut augue. Donec cursus, sem vulputate fringilla scelerisque, lacus lectus varius nisl, et feugiat risus lorem id leo. Fusce ac consequat turpis. Vivamus luctus nibh at pharetra molestie.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:136,
        question:"Integer tristique risus tincidunt orci elementum ultrices?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.", correct:false}],
        explanation:"Integer tristique risus tincidunt orci elementum ultrices. Duis sit amet turpis dui. Quisque diam odio, pretium eu velit sit amet, tincidunt aliquam justo. Integer maximus pulvinar mi a scelerisque. Sed in vestibulum tortor, a fermentum nisi. Pellentesque ultrices placerat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:137,
        question:"Sed rutrum tincidunt rhoncus?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Sed rutrum tincidunt rhoncus. Donec mattis libero elit, vitae ultricies justo elementum quis. Aenean ex ex, elementum nec sollicitudin pulvinar, facilisis sollicitudin nisi. Integer vestibulum rutrum sem at lacinia. In nec accumsan augue. Vestibulum faucibus dignissim massa in rutrum. Fusce feugiat metus mi, at gravida felis malesuada non. Pellentesque vitae libero ut risus malesuada mollis eget sed mauris. Donec a odio a ex euismod pharetra at quis nibh. Nunc fringilla tellus quis mauris convallis, sed tristique augue tristique. Fusce nec augue pretium, sagittis lectus vitae, elementum orci. Suspendisse et tempus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:138,
        question:"Vestibulum sed luctus tortor?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true}],
        explanation:"Vestibulum sed luctus tortor. Aenean semper tempus nunc ultricies sollicitudin. Morbi convallis magna a ultricies sagittis. Ut sit amet odio vel orci accumsan auctor quis a augue. Integer condimentum enim ut libero mollis efficitur. Ut scelerisque odio ut ante molestie, eget bibendum nisi mattis. Suspendisse suscipit magna justo, quis mollis lorem tincidunt in. In cursus magna metus, sed consectetur arcu vulputate sit amet. Nam justo metus, tincidunt et massa eu, ultricies condimentum arcu. Pellentesque accumsan turpis elementum interdum mollis. Nulla rhoncus arcu suscipit ullamcorper dignissim. Donec mauris mauris, euismod nec accumsan pharetra, posuere et mi. Nunc ac tellus maximus, euismod est non, faucibus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel leo nec nibh vestibulum aliquam.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:139,
        question:"Nullam orci elit, suscipit a erat id, tempus vestibulum arcu?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Nullam orci elit, suscipit a erat id, tempus vestibulum arcu. Vestibulum luctus, ligula id suscipit hendrerit, dui eros vehicula nisi, blandit feugiat nulla mauris nec velit. Sed viverra vulputate leo, ac convallis est maximus non. Maecenas gravida, sapien sit amet rutrum rutrum, nisi urna congue magna, ut maximus nibh augue ac ex. Nulla vitae rutrum augue. Mauris est ipsum, eleifend sed ultricies tincidunt, pharetra et nisi. Praesent nec odio et ligula tempus ullamcorper et ac lacus.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:140,
        question:"Quisque tempus ipsum vitae tincidunt fringilla?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true}],
        explanation:"Quisque tempus ipsum vitae tincidunt fringilla. Sed condimentum nec dolor quis congue. Nullam elementum ante et lobortis rutrum. Curabitur et quam nunc. Phasellus nisl metus, varius eu nisl non, cursus dictum augue. Nam at tincidunt dolor, quis blandit ante. Aenean dapibus arcu aliquet, efficitur risus eget, sodales erat. Fusce bibendum ligula at tortor maximus vulputate. Aliquam interdum pharetra accumsan. Ut non efficitur tortor, nec pellentesque sapien.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:141,
        question:"Quisque ultricies elit ac arcu condimentum, non rhoncus enim maximus?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true}],
        explanation:"Quisque ultricies elit ac arcu condimentum, non rhoncus enim maximus. Maecenas placerat egestas odio et sagittis. Aenean at semper augue, vel scelerisque felis. Donec sagittis tristique velit, sed maximus nisl eleifend sit amet. Vivamus tempor molestie erat, et sollicitudin turpis porta eget. Nam sed imperdiet justo, at fermentum metus. Vivamus volutpat ultrices aliquet. Quisque maximus tortor odio. Praesent sollicitudin dapibus diam, vel pulvinar lectus dignissim id. Integer bibendum, erat at lobortis consequat, ante purus porta ante, eu laoreet elit quam eu lacus. Curabitur hendrerit rhoncus congue.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:142,
        question:"Fusce vestibulum nec nisi at volutpat?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Fusce vestibulum nec nisi at volutpat. Cras blandit, justo non imperdiet mattis, massa tortor facilisis nisi, auctor tincidunt velit mauris ac massa. Nunc blandit consectetur fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis porta posuere ipsum, nec facilisis dui consectetur eget. Suspendisse pellentesque felis in laoreet hendrerit. Etiam et quam dapibus, placerat tellus ac, fringilla sapien. Cras nibh lacus, condimentum in tortor et, dapibus tempor quam. Vivamus leo lectus, mollis ac nunc sit amet, aliquet gravida nisi. Nullam suscipit eu mauris quis lacinia. Integer pellentesque quam felis, et tempor mauris consequat in. Aenean hendrerit mauris dolor, nec vehicula dui sagittis vel. Pellentesque vel vulputate ex, non placerat nulla.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:143,
        question:"Maecenas ullamcorper augue id risus lacinia porta?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true}],
        explanation:"Maecenas ullamcorper augue id risus lacinia porta. Maecenas pellentesque, mauris eu mollis ultrices, neque neque laoreet neque, id sollicitudin risus mi quis nunc. In sit amet gravida enim, at rutrum lacus. Phasellus rutrum tincidunt nisl, a placerat ligula cursus sit amet. Donec et fringilla nulla. Ut posuere, urna ut hendrerit interdum, velit urna congue orci, ac mollis justo libero in lacus. Nam non tortor vel purus eleifend pulvinar. Morbi egestas rhoncus hendrerit. Nullam condimentum nulla et purus vestibulum, nec cursus mauris tincidunt. Aenean at justo ante. Cras malesuada nisl sed est laoreet sollicitudin.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:144,
        question:"Duis auctor ultricies magna in cursus?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Duis auctor ultricies magna in cursus. Praesent mattis gravida lectus, et suscipit libero. Sed eu dapibus est. Morbi varius, diam quis posuere pulvinar, augue nunc fringilla leo, sed hendrerit justo quam vel leo. Sed at enim id purus semper vulputate in quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur auctor commodo. Duis id velit dolor. Donec condimentum ante eu venenatis luctus. Maecenas pulvinar felis odio, eget iaculis tellus ullamcorper eu.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:145,
        question:"Nulla ut efficitur est?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Nulla ut efficitur est. Vivamus ipsum enim, condimentum id felis ac, convallis hendrerit nisl. Morbi volutpat dictum interdum. Ut quis dolor eu nunc pretium fermentum. Duis faucibus dictum mi, nec porttitor lorem tincidunt eu. Maecenas interdum elementum finibus. Donec faucibus efficitur rutrum. Curabitur venenatis nunc ligula, nec placerat quam porttitor nec. Mauris placerat tellus nisl, at malesuada justo gravida quis. Aenean tincidunt tincidunt sem a lacinia. Donec elementum enim a lacus luctus vulputate. Suspendisse euismod neque in felis sodales bibendum. Proin id elit in orci interdum fermentum et a arcu. Donec volutpat nulla ut diam lobortis tempus. Nam bibendum orci et ex imperdiet, vitae convallis erat pulvinar.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:146,
        question:"Pellentesque neque urna, imperdiet ac mauris pretium, ornare ultricies sem?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Pellentesque neque urna, imperdiet ac mauris pretium, ornare ultricies sem. Ut viverra pulvinar laoreet. Vivamus vel sapien ac enim aliquet bibendum nec vitae lacus. In quis urna magna. Aliquam sem massa, egestas in ex ut, placerat mattis felis. Cras eget erat libero. Vivamus facilisis luctus lorem, at bibendum velit convallis eget. Integer et purus laoreet, fermentum erat a, imperdiet nisi. Praesent eu ipsum sed sapien consequat consequat non at justo. Ut commodo arcu elit, non commodo justo tempus ac. Aliquam facilisis ipsum interdum gravida tempor. Suspendisse lobortis massa vel neque molestie, in volutpat lectus tincidunt. Pellentesque eleifend condimentum augue, congue auctor elit tempor id. Aenean interdum dolor eu felis semper, vitae vehicula mi ornare.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:147,
        question:"Nam posuere tellus in eros posuere facilisis?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Nam posuere tellus in eros posuere facilisis. Pellentesque pharetra metus a augue commodo, ac dignissim velit accumsan. Donec lobortis, nisl quis congue iaculis, ligula nulla dignissim lacus, sed interdum purus urna sed neque. Praesent pharetra elit non est pharetra molestie. Proin efficitur arcu mollis ligula iaculis sodales. Duis id dignissim est. Sed vitae elit vel odio porttitor accumsan et vel libero. Cras vel lacinia purus. Quisque accumsan lorem mollis, sodales sapien eget, posuere orci. Morbi quis sollicitudin neque. In eu libero mollis, consequat magna sit amet, mattis ligula.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:148,
        question:"Fusce feugiat tempor justo, at tempor neque pharetra sit amet?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Fusce feugiat tempor justo, at tempor neque pharetra sit amet. Donec lobortis sem at dui consectetur, sit amet vulputate lacus luctus. Suspendisse auctor tristique eleifend. Mauris venenatis ultricies arcu, quis aliquet augue vulputate vitae. Duis hendrerit augue nec lectus laoreet facilisis. Quisque et elit at lorem consectetur euismod. Aenean sed finibus magna. Nunc sed pretium velit, non tempor nisl. Cras vel turpis sit amet sem tristique bibendum sit amet posuere turpis. Fusce dignissim nisi vel odio ultrices, eu luctus sem pulvinar. Nunc pretium est id malesuada tincidunt.",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:149,
        question:"Vestibulum auctor tempus urna, non pretium elit eleifend a?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Vestibulum auctor tempus urna, non pretium elit eleifend a. Vestibulum vitae felis auctor, consectetur libero non, porta metus. Mauris eget diam vel dui sollicitudin lobortis. Aenean volutpat commodo sagittis. In mattis facilisis ornare. Nam sagittis nisi vel dolor malesuada dapibus. Donec vitae augue vulputate nisi mollis mattis. Sed suscipit id ligula eu egestas. In tempor ipsum non magna ultricies hendrerit. Nunc sit amet euismod mi, eu bibendum tellus. Duis eleifend interdum eros eu hendrerit. Donec dictum sapien nisi, eget tincidunt augue mollis sit amet. Donec faucibus aliquam lectus vel blandit. Donec risus diam, aliquet vitae odio sed, aliquam rhoncus ligula. Donec tincidunt feugiat sapien, non porta nisl efficitur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        source:"Reddit",
        domain:"Chapter 2"
        },
        {
        id:150,
        question:"Aliquam erat volutpat?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Aliquam erat volutpat. Vivamus congue ornare velit ac facilisis. Cras velit mi, ultrices ac posuere a, tristique vitae elit. Sed ornare est mauris, non egestas est iaculis sed. Etiam sagittis viverra arcu id posuere. Duis ante felis, consequat quis tincidunt a, porttitor in tellus. Pellentesque non ipsum nec dui hendrerit congue. Nullam congue sit amet nunc ac semper. Aenean feugiat massa id odio hendrerit, eget tincidunt mauris ornare. Sed in elit feugiat nibh viverra sagittis. Aenean tortor augue, eleifend quis elementum et, suscipit non nunc. ",
        source:"Wikipedia",
        domain:"Chapter 2"
        },
        {
        id:151,
        question:"Quisque finibus magna sit amet semper egestas?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Quisque finibus magna sit amet semper egestas. Donec et magna sagittis, commodo nunc ut, convallis augue. Ut vel mauris id massa facilisis posuere. Vestibulum molestie erat eget velit consectetur feugiat. Pellentesque egestas venenatis faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque auctor nibh, ut sodales magna viverra quis. Nunc ullamcorper eget tortor a fermentum. Nunc pulvinar sodales urna, id mattis velit finibus eget. Pellentesque malesuada ex mauris, nec luctus neque congue id. Fusce luctus odio sem.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:152,
        question:"Aenean semper tortor velit, non scelerisque elit aliquam ut?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Aenean semper tortor velit, non scelerisque elit aliquam ut. Ut tincidunt, ex vitae fermentum facilisis, tellus sem eleifend lorem, id ullamcorper metus diam et dui. Donec eu risus tempor, auctor diam nec, convallis arcu. Fusce dapibus imperdiet nisi, eu sollicitudin nisi. Aenean vel mauris ut nisl lacinia aliquet. Etiam tristique at ligula vel lacinia. Ut vulputate ullamcorper nisl porta commodo.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:153,
        question:"Nullam mattis ligula id diam efficitur, eget eleifend purus posuere?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Nullam mattis ligula id diam efficitur, eget eleifend purus posuere. In hac habitasse platea dictumst. Quisque sit amet mi neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dolor mi, dictum consectetur erat ac, porttitor dapibus dolor. Mauris pellentesque id magna sed molestie. Sed quis lacinia mi. Nullam ultricies convallis nibh nec vulputate. Aliquam tortor diam, lacinia in dolor quis, accumsan finibus odio. Pellentesque in dolor efficitur, molestie velit nec, pulvinar purus. Maecenas hendrerit vel leo sed suscipit. Aenean non sapien faucibus massa lacinia suscipit. Ut auctor scelerisque magna non consectetur. Morbi elementum at lorem quis mollis. Maecenas ornare ac libero ac sodales. Cras elit orci, cursus quis metus at, facilisis interdum nisl.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:154,
        question:"Pellentesque sed cursus purus?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Pellentesque sed cursus purus. Quisque non suscipit sapien. Proin elementum massa ut risus porttitor ultricies. Sed aliquam massa id euismod sagittis. Fusce augue tellus, tristique vitae pharetra vitae, scelerisque ut ipsum. Duis et tempus nisi, vitae sollicitudin nulla. Donec elit risus, venenatis in diam sed, facilisis commodo dui. Maecenas porttitor pharetra ornare. Pellentesque ex lorem, luctus aliquet ipsum blandit, cursus tincidunt quam. Sed pharetra augue metus, vel ultrices nunc elementum ac. Duis at tortor arcu. Duis vel eros et felis fringilla feugiat quis vitae mi. Praesent molestie eu magna a viverra. Ut tristique vitae ex eu volutpat.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:155,
        question:"Pellentesque eu consequat libero, sed aliquam elit?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Pellentesque eu consequat libero, sed aliquam elit. Vestibulum elit mi, rhoncus ut neque quis, suscipit cursus elit. Ut et accumsan metus. Sed auctor imperdiet dolor, sed pellentesque tellus euismod quis. Vestibulum tincidunt urna quis lobortis elementum. Morbi scelerisque placerat augue gravida sollicitudin. Etiam sed dignissim dolor. Sed elit dui, suscipit non venenatis volutpat, auctor ac leo.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:156,
        question:"Mauris commodo ultricies elit et aliquam?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Mauris commodo ultricies elit et aliquam. Donec vestibulum urna nec lectus convallis rutrum. Nullam mi ex, sodales vitae varius quis, finibus id lectus. Praesent sollicitudin iaculis enim at mollis. Integer quis condimentum nisi. Nunc at tincidunt dui. Etiam auctor id leo fermentum malesuada. Cras tellus augue, ornare a augue eu, faucibus posuere enim. Sed sed elit vel diam maximus ultrices. Sed in rutrum urna. Praesent et vehicula tortor, a mattis velit. Etiam maximus metus eros, quis rhoncus ligula ultrices at. Etiam in hendrerit tellus. Vestibulum tincidunt efficitur diam, sed mollis massa aliquam a.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:157,
        question:"Proin eleifend nulla ut tortor laoreet, vitae tristique lorem laoreet?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Proin eleifend nulla ut tortor laoreet, vitae tristique lorem laoreet. Proin molestie viverra leo non ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquam fermentum leo, quis pellentesque justo maximus pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc in arcu vel ante volutpat eleifend. Quisque eros metus, aliquam sit amet fermentum et, feugiat et orci. Aenean vel molestie metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at varius dui. Aliquam feugiat nulla eu magna volutpat, sed aliquet quam cursus. Fusce magna tortor, malesuada at commodo id, elementum non risus. In dui justo, consectetur id eros sit amet, malesuada sagittis tellus. Etiam ut fermentum mauris.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:158,
        question:"Nam vel sagittis sem?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Nam vel sagittis sem. Aenean luctus blandit luctus. Donec ac mauris mauris. Integer diam magna, tristique sed blandit sit amet, scelerisque ac lectus. Sed ut risus pellentesque, lobortis ligula ac, condimentum arcu. Donec orci ante, dictum et leo id, posuere tincidunt risus. Proin imperdiet ullamcorper semper. Donec sed lacus eu ipsum sagittis vestibulum. Sed dapibus et libero at convallis.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:159,
        question:"Nulla vel tempor ante, eu aliquam arcu?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Nulla vel tempor ante, eu aliquam arcu. Etiam vitae diam vel urna fermentum scelerisque nec ac quam. Nullam a tincidunt justo, eget rhoncus erat. Aenean tempus ultrices lorem, eu euismod nisi mollis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pharetra dolor fermentum quam gravida laoreet non quis lorem. In mauris nibh, tincidunt a ligula a, condimentum ornare ante. Aliquam nec arcu in purus placerat mattis.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:160,
        question:"Sed justo sapien, aliquet quis dapibus in, laoreet et justo?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Sed justo sapien, aliquet quis dapibus in, laoreet et justo. Sed sit amet efficitur massa. Aliquam consectetur mollis justo, et sodales libero convallis et. Etiam in eleifend lorem. Duis ullamcorper orci efficitur enim accumsan lacinia. Pellentesque posuere diam eu libero semper egestas. In non fermentum odio. Aenean molestie diam id interdum tincidunt. Cras feugiat libero nisl, at sodales ligula sollicitudin vitae. Cras sagittis vel enim vel aliquet. Aliquam in vehicula felis, et bibendum risus. In ac tortor pulvinar ex efficitur feugiat.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:161,
        question:"Proin id magna dui?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.*", correct:true}],
        explanation:"Proin id magna dui. Etiam non gravida lacus. Curabitur ornare velit quis dapibus viverra. Proin massa odio, rutrum nec ante vel, finibus lobortis neque. Morbi porta vulputate nisi, nec auctor elit tempor a. Fusce et tortor venenatis, rhoncus quam sed, faucibus metus. Vestibulum mollis augue dolor, imperdiet sodales urna aliquam at. Donec id finibus magna. Praesent ac nisi imperdiet, rutrum est vitae, imperdiet diam.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:162,
        question:"Nam quis sapien nunc?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Nam quis sapien nunc. Proin ac iaculis lacus. Maecenas imperdiet risus nec aliquet iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum consequat venenatis. Morbi aliquam velit sed est finibus, non scelerisque orci gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nec accumsan erat. Ut et imperdiet tortor, id finibus mi. Nam rutrum, felis eu dictum maximus, dolor enim egestas neque, vel accumsan eros lacus a sapien. Integer dui leo, congue et ultricies vitae, dapibus sit amet urna. Nam ultrices nibh nisl, at dictum neque consectetur suscipit.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:163,
        question:"Nullam fringilla mi sagittis congue accumsan?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Nullam fringilla mi sagittis congue accumsan. Suspendisse interdum, sapien nec tempor dignissim, arcu nisl viverra nulla, quis bibendum massa neque ac urna. Donec nunc risus, hendrerit at aliquam sit amet, fermentum sit amet dui. Morbi auctor non justo quis porta. Sed eleifend sit amet enim sagittis tincidunt. Mauris euismod id risus tempor scelerisque. Nullam accumsan, justo ultrices cursus tempus, justo quam tincidunt urna, eu semper risus sapien sit amet nisl. Nam mattis vitae eros a pulvinar.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:164,
        question:"Mauris quis scelerisque lacus, a euismod augue?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Mauris quis scelerisque lacus, a euismod augue. Morbi ornare lectus at ligula interdum aliquet. Donec molestie cursus dolor, id tristique elit sagittis et. Nulla ullamcorper consectetur gravida. Quisque molestie nulla ac lacus accumsan facilisis. Sed tincidunt et orci ut consequat. Donec et tortor pulvinar, finibus nisl vel, volutpat ex. Etiam porttitor urna scelerisque, gravida tellus nec, volutpat augue. Aliquam at tortor et elit tempus bibendum in nec mi. Morbi venenatis leo eu dictum aliquet. Ut ac condimentum libero. Cras vulputate lacinia ligula.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:165,
        question:"Aliquam semper velit in gravida lacinia?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true}],
        explanation:"Aliquam semper velit in gravida lacinia. Fusce at augue vel tellus porta scelerisque. Ut condimentum dapibus imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae sollicitudin tortor. Nulla pellentesque tortor purus, id maximus massa cursus in. Mauris tristique lobortis justo, in mollis nisl fermentum a. Mauris quis malesuada justo, in finibus elit. Proin at velit magna. Nulla ut quam vel lectus dignissim vulputate.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:166,
        question:"Phasellus vel facilisis lacus?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Phasellus vel facilisis lacus. Donec cursus eros ut commodo varius. Pellentesque sodales laoreet est eget pharetra. Phasellus id eleifend augue. Quisque accumsan semper felis, eu imperdiet risus imperdiet vel. Nulla fringilla tempor finibus. Duis imperdiet ligula lacus, sit amet sollicitudin est molestie vitae. Fusce ut nisl vitae odio mattis dapibus. Quisque luctus ut quam non imperdiet. Ut porttitor mattis metus quis consequat. Sed rhoncus, dui a facilisis iaculis, massa mi varius augue, vitae tristique enim nibh nec nisl. Vestibulum vitae ligula et tellus tristique pharetra. Vivamus tempor lectus vitae odio egestas rutrum. In accumsan laoreet quam, non tristique ex fringilla vitae.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:167,
        question:"Nam ac lectus vestibulum, aliquam mauris vel, pharetra urna?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Nam ac lectus vestibulum, aliquam mauris vel, pharetra urna. In sit amet neque vel justo placerat efficitur. In viverra aliquet accumsan. Proin viverra leo ut turpis posuere, sit amet eleifend elit viverra. In ligula sapien, finibus pretium efficitur id, mollis id justo. Duis vel eros felis. Aliquam pellentesque, mi sed tempor viverra, velit augue faucibus nunc, sit amet aliquam quam elit quis nisi. In mattis eros et nunc consectetur, ut consectetur leo eleifend. Sed dignissim erat a lacus ullamcorper, id facilisis leo suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eu nibh sapien. Nulla pellentesque turpis eu enim pharetra tincidunt. Pellentesque tincidunt, leo ut vulputate rhoncus, ipsum ante vehicula sem, eget commodo arcu ligula rhoncus ante. Maecenas vitae lobortis erat.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:168,
        question:"Aliquam a tempor diam, id vulputate enim?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true}],
        explanation:"Aliquam a tempor diam, id vulputate enim. Ut at dignissim mi. Aliquam sit amet turpis nec nisi pulvinar pellentesque. Aliquam gravida lacus et libero aliquam, et tincidunt ante blandit. Ut at nulla varius, finibus augue feugiat, interdum libero. Vivamus maximus lectus a ligula gravida, sit amet tempor odio congue. Quisque ultrices lectus libero, viverra fermentum ante commodo nec. Suspendisse posuere ornare faucibus. Donec iaculis gravida sem vitae mollis.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:169,
        question:"Nulla faucibus sapien pharetra, auctor dui non, fringilla ligula?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Nulla faucibus sapien pharetra, auctor dui non, fringilla ligula. Nulla facilisi. Nunc congue mauris nibh. Etiam bibendum blandit nibh sit amet malesuada. Donec facilisis ipsum purus, eget sagittis mi iaculis ac. Nulla aliquet est vel sapien vehicula, non blandit arcu finibus. Fusce pulvinar diam ut felis hendrerit, ac pellentesque augue interdum. Praesent tincidunt, risus suscipit consectetur fringilla, enim nulla pharetra elit, sit amet commodo quam arcu sed nibh. Donec mollis enim turpis, tristique luctus ante vestibulum et. Nullam ac bibendum sem, at euismod velit. Pellentesque tincidunt maximus tincidunt. Nullam placerat auctor urna et fermentum.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:170,
        question:"Nunc tempor consequat purus, in elementum tortor faucibus at?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Nunc tempor consequat purus, in elementum tortor faucibus at. Ut cursus convallis tellus ut pharetra. Morbi ac tincidunt nisl. Donec feugiat orci eu quam rhoncus eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas suscipit iaculis. Morbi mollis rhoncus tellus, et ornare sem rhoncus id. Sed consectetur urna ut tincidunt sollicitudin. Donec condimentum iaculis ultricies. Aenean non rutrum quam, nec auctor turpis. Maecenas venenatis, dolor tincidunt imperdiet accumsan, ligula turpis porta lectus, id auctor massa erat in mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis viverra ultricies sem, eu gravida nunc pharetra eu. Proin ac efficitur nunc, eu fermentum mauris.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:171,
        question:"Suspendisse vitae neque blandit risus gravida convallis non sit amet mauris?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true}],
        explanation:"Suspendisse vitae neque blandit risus gravida convallis non sit amet mauris. Praesent in turpis aliquet, bibendum massa sed, fermentum odio. Suspendisse auctor, lacus at imperdiet volutpat, ipsum felis mollis purus, eu molestie enim nibh quis magna. Curabitur commodo egestas leo ac consequat. Integer pellentesque ligula augue, finibus tristique magna mollis non. Cras non ligula nec velit consectetur placerat rutrum at velit. Phasellus quis sem nibh. Donec faucibus dignissim fringilla. Proin sed tincidunt neque, non mollis enim. Ut eleifend magna sollicitudin erat sodales fringilla. Etiam ut dui vitae urna consequat convallis a et nibh. Nulla justo dolor, viverra non facilisis sed, lobortis et mi. Vivamus gravida urna nisl, vitae vehicula eros aliquam quis.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:172,
        question:"Vivamus lobortis id quam ut laoreet?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Vivamus lobortis id quam ut laoreet. Vestibulum nisl enim, auctor ac leo in, pretium dapibus purus. Sed cursus in purus et semper. Curabitur venenatis tincidunt sodales. Pellentesque quis pretium turpis. Morbi varius augue elit. Nunc eleifend sodales quam, ut pharetra orci malesuada ut. Morbi fermentum sodales ligula, id porttitor purus posuere in. Duis sollicitudin laoreet consequat. Nam eget felis eleifend est fringilla bibendum ut ac dui. Duis vitae sem purus. Fusce euismod eleifend urna quis fermentum. Donec vel molestie risus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:173,
        question:"Cras interdum nunc nisl?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Cras interdum nunc nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque et est nibh. Mauris condimentum a nisi ut porta. Duis varius nisl sed lectus consectetur blandit. Aliquam magna velit, molestie id sem at, laoreet tempus nunc. Morbi consequat dui vitae molestie tempor. Suspendisse vel urna sed odio maximus iaculis ac eget nibh.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:174,
        question:"Vivamus hendrerit aliquam eros et sagittis?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Vivamus hendrerit aliquam eros et sagittis. Duis finibus laoreet consectetur. Etiam venenatis ligula sit amet ex dignissim, quis ultrices lorem interdum. Aenean pharetra, lacus vitae aliquet rhoncus, nibh sapien euismod ex, at laoreet massa ex eu diam. Nunc rhoncus pulvinar augue. Nulla facilisi. Sed eu augue sit amet magna feugiat feugiat. Proin dignissim nisl tortor, vitae sodales nisi sagittis in. Etiam at feugiat ex. Aliquam sit amet lacinia nunc. Integer blandit enim dui, nec scelerisque dolor elementum at. Nunc eget vulputate eros. Donec pretium dui id volutpat pharetra. Aliquam scelerisque tortor velit, ut pretium mi sodales sit amet. Nunc facilisis, nisl ornare porttitor pulvinar, erat leo commodo metus, a suscipit lorem mauris in magna.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:175,
        question:"Cras risus leo, congue eget pulvinar ac, placerat non sem?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true}],
        explanation:"Cras risus leo, congue eget pulvinar ac, placerat non sem. Nulla facilisi. Cras lacinia lacus vel faucibus varius. Nunc semper aliquet risus vitae pellentesque. Maecenas pulvinar ante nec enim fermentum eleifend. Donec aliquam metus finibus posuere consequat. Nulla vitae massa diam. Morbi id odio tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam felis sem, faucibus sit amet porttitor non, finibus vitae nulla.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:176,
        question:"Suspendisse vitae ante aliquam, posuere elit sit amet, molestie nulla?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Suspendisse vitae ante aliquam, posuere elit sit amet, molestie nulla. Cras interdum dolor vitae hendrerit ultrices. Praesent egestas, nunc ut porta ornare, turpis neque porta nibh, ut gravida odio sapien quis sapien. Ut urna nisl, lacinia in venenatis nec, volutpat venenatis nunc. Nam mauris metus, pulvinar sed quam semper, dignissim rhoncus arcu. Nam sit amet libero sit amet mauris sollicitudin venenatis id in nunc. Nulla facilisi. Donec vel iaculis turpis, sed euismod nulla. Etiam pretium ut tortor eu hendrerit.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:177,
        question:"Maecenas vulputate lorem eget eros volutpat lobortis?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"Maecenas vulputate lorem eget eros volutpat lobortis. Morbi dapibus enim non sem rhoncus consectetur. Morbi pharetra at eros sed aliquam. Sed at efficitur urna, eget tincidunt nulla. Phasellus eget scelerisque sem. Curabitur in semper enim. Pellentesque consectetur augue ipsum. Maecenas suscipit volutpat ex, quis efficitur leo blandit eget. Vivamus augue nulla, ultricies in rhoncus in, placerat at lorem. Morbi posuere turpis libero, eget mollis arcu imperdiet vel. Mauris dui dolor, suscipit eget felis in, pulvinar luctus mi. Ut at nunc sit amet ligula vehicula scelerisque ut at nunc. Integer euismod scelerisque eleifend.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:178,
        question:"Pellentesque sodales eros et mi fermentum mollis?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Pellentesque sodales eros et mi fermentum mollis. Sed vel dolor nec tellus iaculis malesuada. Integer ornare mattis viverra. Donec quis euismod tellus, et eleifend nisi. Etiam ullamcorper et sapien ac sagittis. Proin elementum ligula massa, eget elementum velit condimentum et. Cras quis volutpat sem. Nullam fringilla ornare tristique. Fusce congue elit non malesuada ullamcorper. Donec ac urna mollis, lobortis magna id, rhoncus mi. In sed tempus dolor, suscipit consequat arcu. Proin pretium accumsan turpis, sit amet ornare tellus. Nunc ligula lorem, dignissim at magna eu, vulputate cursus purus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:179,
        question:"Donec auctor viverra blandit?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Donec auctor viverra blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu ligula purus. Aliquam hendrerit sem velit, ut eleifend eros congue placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque non nulla lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas mollis nisl sed justo hendrerit, sit amet fringilla dui porttitor. Vivamus ligula metus, efficitur a metus non, aliquet congue ex. Sed tempor, metus ac tristique dapibus, dolor mauris tincidunt tortor, sed mollis metus dolor vel sem.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:180,
        question:"Donec fringilla libero sed ligula varius egestas et ut sapien?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Donec fringilla libero sed ligula varius egestas et ut sapien. Vestibulum neque nibh, varius at porta in, mattis et elit. Nullam pulvinar suscipit ex, in finibus lectus aliquam vel. Nullam ultricies elementum nunc, quis sodales nibh faucibus posuere. Integer sodales et ante vel volutpat. Sed sit amet sollicitudin est. Nulla euismod dapibus est, non scelerisque massa. Nullam aliquet, eros in vehicula ultrices, ipsum dui tempus arcu, sit amet efficitur tellus felis id risus. Nullam congue egestas dolor, non commodo enim egestas ac. Ut eu erat mollis, viverra lectus sit amet, aliquet nibh.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:181,
        question:"Mauris convallis nunc sed ante interdum tincidunt?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Mauris convallis nunc sed ante interdum tincidunt. Fusce consequat venenatis erat, id elementum est elementum ut. Maecenas mattis malesuada nisi sit amet luctus. Aliquam vehicula dolor ac erat vehicula blandit. Proin facilisis porta ligula, non suscipit leo efficitur nec. Quisque ultrices egestas magna, nec elementum sem aliquam vel. Mauris ex purus, finibus sed dignissim non, tincidunt vitae massa. In sit amet felis vitae quam faucibus dignissim.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:182,
        question:"Cras a leo felis?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true}],
        explanation:"Cras a leo felis. Curabitur eget consequat erat. Praesent dignissim, quam et sollicitudin dictum, lectus est varius quam, non sodales tellus ex sit amet nulla. Maecenas scelerisque dolor at ante cursus aliquam. Praesent vitae dui faucibus, pellentesque mauris nec, laoreet massa. Quisque blandit mauris eget dui auctor venenatis. Nam vitae magna vel arcu egestas commodo quis ac odio. Sed facilisis nunc in odio egestas, quis scelerisque ligula porta. Duis quis odio rhoncus purus feugiat mattis sit amet sed est. Pellentesque blandit nunc quis nulla aliquam tristique. Proin rutrum tortor ipsum, nec fermentum nibh feugiat at. Proin orci quam, interdum at varius in, tincidunt ut lectus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:183,
        question:"Pellentesque sed massa non tortor lobortis porttitor?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Pellentesque sed massa non tortor lobortis porttitor. In hac habitasse platea dictumst. Integer vel accumsan nibh. Pellentesque id metus at urna ullamcorper condimentum at eget orci. Donec sapien lectus, varius ac aliquet ut, ullamcorper sed ante. Mauris vel nisl vel lectus posuere rutrum. Sed pharetra vel risus id semper. Donec id ex sed arcu auctor tempus sed a quam. Phasellus vel massa facilisis quam scelerisque tristique. Pellentesque dictum sapien accumsan urna faucibus, eu feugiat orci tincidunt. Proin in tellus id est ornare euismod non sed ex. Vivamus commodo luctus ipsum eu finibus. Mauris sem sapien, fringilla sed auctor eget, venenatis in tellus. Sed malesuada leo dapibus lorem accumsan pretium. Etiam finibus tincidunt fermentum.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:184,
        question:"Etiam erat neque, posuere vitae consectetur a, blandit ac arcu?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false}],
        explanation:"Etiam erat neque, posuere vitae consectetur a, blandit ac arcu. Nam congue vulputate ullamcorper. Vestibulum neque est, vehicula in feugiat vitae, elementum nec metus. Etiam porttitor accumsan elit. In vitae lectus urna. Phasellus fringilla molestie lobortis. Aenean risus urna, lobortis sit amet nisl vitae, egestas hendrerit lacus. Nullam quis mauris odio. Integer a magna accumsan nisl hendrerit rhoncus. Nullam nunc sem, ornare id porttitor ac, accumsan sed nisl. Nunc ultrices felis ligula, ac ornare felis interdum vel. Fusce luctus efficitur mauris, vel efficitur arcu maximus id. Sed faucibus nunc viverra, elementum leo ac, commodo nibh.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:185,
        question:"Etiam urna ex, efficitur eget velit sed, mollis volutpat lectus?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true}],
        explanation:"Etiam urna ex, efficitur eget velit sed, mollis volutpat lectus. Mauris sollicitudin nisl eget massa laoreet volutpat. Maecenas nec massa leo. Integer ac ullamcorper eros. Integer eget justo at ipsum iaculis venenatis ut a neque. Suspendisse congue mauris quis leo luctus, nec porta nunc rutrum. Maecenas quis viverra risus.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:186,
        question:"Suspendisse potenti?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Suspendisse potenti. Mauris sollicitudin faucibus accumsan. Fusce sed risus varius, semper nunc eget, condimentum felis. Etiam efficitur libero eu libero feugiat, in consequat nisl efficitur. Quisque ut quam a arcu luctus congue. Morbi elit neque, malesuada eget imperdiet id, eleifend sit amet nunc. Donec varius, justo nec ornare volutpat, elit mi fermentum ligula, nec auctor felis libero vel erat. In hac habitasse platea dictumst. In eget pellentesque erat, eu imperdiet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:187,
        question:"Mauris sed dui nec lacus sodales finibus ac id libero?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Mauris sed dui nec lacus sodales finibus ac id libero. Praesent felis tellus, tempus et felis ut, lobortis interdum nibh. Duis et tortor ac neque luctus varius a eu nunc. Fusce at magna tincidunt, pharetra leo eu, ornare metus. Fusce in diam sed magna viverra eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse rutrum diam vitae augue volutpat, sodales dictum neque fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur commodo, quam volutpat scelerisque volutpat, tortor purus varius nisi, sed viverra ante lorem nec sapien. In vitae quam sit amet lacus scelerisque mattis. Vestibulum pharetra, nulla non faucibus fermentum, velit enim porta elit, at mollis ante lacus eget quam. Mauris elit dolor, efficitur quis sapien vel, bibendum vestibulum ante. Proin id justo finibus, sodales est quis, fringilla purus.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:188,
        question:"Ut posuere, tellus pharetra euismod porttitor, lectus ipsum sollicitudin arcu, eu ultricies erat dui in quam?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Ut posuere, tellus pharetra euismod porttitor, lectus ipsum sollicitudin arcu, eu ultricies erat dui in quam. Donec mollis vestibulum imperdiet. Maecenas a nunc vel turpis maximus ultricies ut eu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt gravida rutrum. Sed lacinia lacus eget dolor pellentesque dapibus. Proin in laoreet felis. Maecenas sodales egestas enim, vel venenatis purus varius a. Aenean a felis vitae eros congue porta. Ut pellentesque fermentum neque, sit amet viverra magna sagittis sit amet. Vivamus aliquet urna ante, non convallis diam vulputate vitae. Aenean scelerisque ornare porttitor.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:189,
        question:"Sed at scelerisque diam?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Sed at scelerisque diam. Maecenas interdum nibh eu ex blandit pellentesque. Maecenas sagittis aliquam nisl, ut congue quam dignissim eu. Praesent ullamcorper, nibh posuere vestibulum ornare, est mauris condimentum turpis, a tempus leo eros et nibh. Vivamus molestie fringilla odio eu sollicitudin. Nunc ornare urna non ipsum fermentum, lacinia mattis leo sagittis. Donec neque eros, ullamcorper sed lorem vel, pharetra scelerisque tellus. Aenean vel augue dictum, feugiat orci sit amet, condimentum sem. Nunc ac lobortis nisl.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:190,
        question:"Morbi posuere et dui sit amet commodo?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Morbi posuere et dui sit amet commodo. Nulla aliquam erat id lacus fermentum, vel vulputate risus auctor. Praesent pretium a urna quis dignissim. Aliquam eget dolor varius, porttitor erat nec, ornare nulla. Fusce sed lectus ut sapien ullamcorper faucibus ut scelerisque ipsum. Ut non sagittis ante. Nam ante tellus, sodales id laoreet id, ornare non dolor. In purus est, efficitur in neque et, iaculis consequat felis. Curabitur tempor neque in nulla rhoncus, tempor accumsan urna pellentesque. Curabitur sed justo dolor.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:191,
        question:"Nunc volutpat malesuada lorem, ac vestibulum lorem sodales ac?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Nunc volutpat malesuada lorem, ac vestibulum lorem sodales ac. Nam accumsan sem et nulla semper vulputate. Donec in suscipit nulla. Nullam sed augue non mauris rhoncus congue. Curabitur dui enim, rhoncus non ante at, efficitur dignissim nunc. Quisque at sollicitudin enim. Pellentesque nulla felis, venenatis sed nunc sit amet, pellentesque lobortis nibh. Ut justo leo, cursus ac accumsan vitae, tincidunt rhoncus ligula. Morbi ut justo in turpis rutrum semper sed et justo. Duis sed ultricies velit.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:192,
        question:"Phasellus maximus hendrerit quam, ac luctus velit rutrum at?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true}],
        explanation:"Phasellus maximus hendrerit quam, ac luctus velit rutrum at. Nam dolor lorem, dignissim a posuere eu, sagittis sit amet lorem. Quisque egestas eros fermentum mi iaculis, eget volutpat purus fermentum. In id aliquam neque, sed posuere metus. Fusce eget neque ac nunc iaculis convallis. Maecenas laoreet nisl pulvinar pulvinar blandit. Mauris imperdiet id tellus non sollicitudin. Ut commodo tellus id ullamcorper porta. Nullam vitae massa molestie, venenatis tellus sit amet, tincidunt tortor. Ut non tempor nisl, non sollicitudin lectus. Vivamus lacinia nisi sed massa lobortis, posuere mollis mauris vulputate. Fusce odio enim, tincidunt sit amet volutpat nec, maximus bibendum orci. Maecenas commodo luctus orci ut viverra. Morbi consectetur maximus nisl vel bibendum. Duis ultricies lorem et auctor placerat.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:193,
        question:"Aenean dictum luctus nulla sed molestie?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Aenean dictum luctus nulla sed molestie. Cras tempor libero mi, eu tincidunt quam luctus pulvinar. Ut eu risus sed mi efficitur varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex tellus, ornare at imperdiet quis, aliquam in ipsum. Nullam placerat dignissim urna, vel posuere dui finibus et. Mauris aliquam at nulla a vestibulum. Praesent at nisi ut dui porta vestibulum at rutrum eros. Aenean condimentum pharetra eros. Sed suscipit augue in odio facilisis, vel pulvinar ligula pellentesque.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:194,
        question:"Integer elementum vehicula est, non fermentum nisi pretium in?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Integer elementum vehicula est, non fermentum nisi pretium in. Proin efficitur eu nisl at consectetur. Nunc leo massa, elementum id tellus at, pharetra sollicitudin lacus. Aliquam luctus finibus quam, sit amet aliquam turpis sodales quis. Praesent in est tellus. Sed id pharetra ex, vitae gravida nibh. Duis lorem dolor, tempor eu cursus efficitur, finibus ac lectus. Praesent varius maximus odio ac maximus. Sed ut nulla at ipsum volutpat porttitor id a dui. Etiam dictum, ex ut lobortis pharetra, elit lacus efficitur tortor, ac posuere magna tortor ut metus. Fusce tincidunt, nisi lobortis maximus tincidunt, augue diam elementum neque, at finibus dui ante sit amet tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus dolor, rutrum vel lobortis quis, aliquam sed leo.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:195,
        question:"Nunc egestas sodales nisl quis bibendum?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Nunc egestas sodales nisl quis bibendum. Sed placerat massa vel felis mattis maximus. Mauris mattis diam leo. Curabitur sit amet lorem ac augue mattis accumsan. Etiam ultricies tincidunt aliquet. Donec nec velit a lectus finibus lobortis ac et sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:196,
        question:"Cras id augue quam?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Cras id augue quam. Aliquam consequat ante orci, ut consequat velit placerat a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio lacus, tempus eu convallis eget, vestibulum ac purus. Vivamus arcu nulla, maximus sed nibh id, suscipit egestas augue. Donec massa lorem, rutrum id leo in, varius fringilla libero. Vivamus at ipsum nisi. Suspendisse in lectus blandit, facilisis mi id, convallis tellus. Nulla at lacus neque. Sed sed turpis id justo volutpat hendrerit. Donec risus ligula, tincidunt mattis diam quis, laoreet faucibus lectus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:197,
        question:"Nulla lacinia tortor orci, at sagittis nulla vestibulum ac?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true}],
        explanation:"Nulla lacinia tortor orci, at sagittis nulla vestibulum ac. Donec ultricies feugiat felis quis convallis. Duis varius rutrum nulla, suscipit mattis arcu congue a. Aliquam erat volutpat. Sed pellentesque interdum dapibus. Maecenas non ante mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna sapien, finibus eget ultrices sed, pellentesque vel dui. Quisque non convallis libero. Praesent at neque non sapien posuere tempor ut ac dolor. In vestibulum tellus felis, vel efficitur diam commodo ac.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:198,
        question:"Suspendisse ut pretium purus?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.", correct:false}],
        explanation:"Suspendisse ut pretium purus. Nullam vel pellentesque felis. Quisque lacus diam, placerat vitae magna quis, gravida imperdiet est. Etiam viverra porta lacus eu hendrerit. Aliquam ac nibh id urna ultrices commodo id sit amet mauris. Ut convallis facilisis laoreet. In hac habitasse platea dictumst. Fusce non libero elit. Aenean nec purus tortor. Fusce maximus quis lorem eget posuere. Sed maximus ex id diam iaculis, in malesuada est vulputate.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:199,
        question:"Nam cursus lorem ante, porta pharetra nibh venenatis et?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Nam cursus lorem ante, porta pharetra nibh venenatis et. Praesent ac auctor diam. Praesent quis magna vulputate urna tristique condimentum. Vestibulum pharetra tortor quis purus accumsan, vel scelerisque mauris facilisis. Nam nec risus sollicitudin, lacinia odio a, rhoncus neque. Donec a congue libero. Curabitur tincidunt sapien eu volutpat varius. Mauris iaculis maximus sapien eu hendrerit. Morbi odio lorem, blandit ut commodo id, fringilla non turpis. Sed dapibus feugiat velit non placerat. Phasellus posuere nec velit id sagittis. Morbi urna augue, gravida sit amet molestie ac, condimentum pulvinar justo. Phasellus non purus in orci cursus egestas. Maecenas ac lacus sit amet odio varius tempus sed eu justo.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:200,
        question:"In et massa rhoncus sem lobortis cursus?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"In et massa rhoncus sem lobortis cursus. Suspendisse id nulla varius, sagittis quam sed, faucibus mi. Etiam et libero ac tortor semper rutrum quis sit amet metus. Pellentesque pellentesque quis nunc a ullamcorper. Suspendisse non diam malesuada, placerat nisi et, ultricies arcu. Pellentesque eget blandit dui, commodo pulvinar arcu. Integer nec ligula in lectus euismod mollis in a nulla. Integer ut vehicula enim. Vestibulum nibh dui, interdum vel lacus id, dictum luctus ex. Suspendisse et lorem ut leo tincidunt efficitur. Nunc pulvinar laoreet enim ac gravida. Curabitur fermentum facilisis laoreet.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:201,
        question:"In nec ullamcorper libero, ac tincidunt enim?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"In nec ullamcorper libero, ac tincidunt enim. Fusce maximus nisi dui, quis vestibulum augue congue in. Donec quis augue nisl. Nam lacinia, dui quis sodales interdum, ante diam dapibus nisi, vel dictum risus turpis at nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi laoreet leo nec odio efficitur, at mattis massa ullamcorper. Praesent posuere sagittis lorem sit amet dapibus. Sed tortor ligula, maximus quis condimentum ut, lobortis vel velit. Aliquam dapibus neque nec lectus tincidunt malesuada. Pellentesque porttitor aliquet odio eu placerat.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:202,
        question:"Nunc tristique dolor laoreet mi pellentesque dapibus?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Nunc tristique dolor laoreet mi pellentesque dapibus. Mauris ornare risus metus, at euismod ligula tristique eu. In malesuada consectetur massa ac sodales. Sed eu ante suscipit, finibus nulla sit amet, semper neque. Vestibulum feugiat eros nisl, nec fringilla purus hendrerit eget. Vestibulum consequat ullamcorper magna in mollis. Sed malesuada tempor urna, in accumsan lorem pretium at. In tincidunt maximus diam, ac mollis nulla dictum ut. Sed sapien est, venenatis eu arcu quis, posuere tincidunt lectus. Sed tristique nulla cursus lectus pretium gravida ac tincidunt purus. Fusce sapien arcu, sodales in faucibus sit amet, pellentesque malesuada nisl. Curabitur erat ligula, auctor eget pharetra non, tempus a ex.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:203,
        question:"Donec at massa lectus?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Donec at massa lectus. Sed ut sem dapibus, commodo urna sit amet, pretium elit. Mauris suscipit ipsum diam, id hendrerit nulla auctor vitae. Integer aliquam lorem nec rutrum mattis. Donec eget ipsum velit. Sed lacinia diam id magna volutpat, quis venenatis neque ultrices. Pellentesque risus tortor, laoreet sed hendrerit at, posuere sed lacus. Aliquam euismod elit nec nulla pharetra, sit amet ultrices metus interdum.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:204,
        question:"Cras a pellentesque nisi?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Cras a pellentesque nisi. Phasellus placerat odio sed dolor tristique, vitae pulvinar velit dignissim. Aliquam efficitur porttitor urna eget sollicitudin. Nam volutpat commodo venenatis. Morbi nec tellus facilisis, dapibus elit eget, faucibus tortor. Nunc eu porttitor magna. Nullam mollis hendrerit magna, a aliquet lacus lobortis ac. Aliquam ut mattis lorem, eu elementum est. Etiam bibendum ante vitae velit gravida placerat. Mauris consequat laoreet ex ut bibendum. Nullam laoreet euismod nisl a volutpat. Nullam vestibulum sagittis pharetra.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:205,
        question:"Integer pharetra, lacus at vestibulum aliquam, nisi massa commodo tellus, eget placerat ligula enim sed nibh?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true}],
        explanation:"Integer pharetra, lacus at vestibulum aliquam, nisi massa commodo tellus, eget placerat ligula enim sed nibh. Quisque in sapien tortor. Etiam a lorem et lorem cursus vulputate. Proin blandit erat quis turpis lobortis, nec fringilla lacus laoreet. Donec egestas ex a nisi mollis posuere. Aliquam dictum augue eget massa sagittis, non gravida eros fermentum. Mauris semper odio non vestibulum semper. Vestibulum volutpat tincidunt odio, sit amet pulvinar libero faucibus eget. Ut ac viverra nisi. Suspendisse vulputate arcu eu diam feugiat mollis. Nulla at pharetra velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sollicitudin quis mauris ut aliquam.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:206,
        question:"Proin sagittis commodo odio, nec pharetra sapien fringilla at?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.", correct:false}],
        explanation:"Proin sagittis commodo odio, nec pharetra sapien fringilla at. Morbi gravida ultricies convallis. Nullam ut turpis nec dui vehicula laoreet. Nullam elementum mi non mi sollicitudin hendrerit. Sed varius libero eu est gravida, vel egestas enim ornare. Nulla facilisi. Sed egestas purus mollis pulvinar congue. Sed sit amet finibus neque. Donec id sapien non ligula laoreet sodales. Morbi sagittis eget est at sodales. Integer et semper massa.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:207,
        question:"Mauris vehicula sit amet libero sed lobortis?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Mauris vehicula sit amet libero sed lobortis. Proin orci urna, tempus sed consequat nec, eleifend ut libero. Duis id erat vel ante rutrum bibendum at id tortor. Integer lacus ipsum, efficitur sed dolor eu, malesuada vehicula felis. Nunc congue pretium neque, ac laoreet nisl auctor ut. Vestibulum vel suscipit tortor, ac consequat tortor. Maecenas in dapibus turpis, eget lobortis elit. Vestibulum erat eros, mollis et neque eu, malesuada malesuada urna. Integer ac dui vitae magna auctor fringilla. Duis rutrum mauris quis arcu fringilla, quis hendrerit justo iaculis. Etiam consequat commodo erat eget elementum. Quisque faucibus dui pulvinar neque laoreet, vel pharetra orci rutrum. Cras vitae suscipit orci.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:208,
        question:"Vivamus quis efficitur odio?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Vivamus quis efficitur odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mollis fringilla sem sed rutrum. Nullam vitae faucibus eros, in fermentum dolor. Integer et urna a lectus rutrum euismod sit amet vel velit. Praesent quis imperdiet neque. Morbi mattis dolor eget lectus laoreet, nec hendrerit enim vehicula. Ut velit lacus, facilisis in libero nec, facilisis condimentum ligula. Nunc posuere massa sit amet cursus pulvinar. Cras dictum mollis finibus. Aenean eu quam porttitor, ultrices turpis ut, condimentum lorem. Praesent rutrum in magna quis hendrerit. Pellentesque hendrerit ornare volutpat. Nulla vehicula sem vitae sapien vulputate ultricies. Integer nec eros imperdiet, luctus nisi sit amet, accumsan sapien.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:209,
        question:"Interdum et malesuada fames ac ante ipsum primis in faucibus?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true}],
        explanation:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquam urna scelerisque, faucibus nunc vitae, rutrum justo. Etiam ornare tristique imperdiet. Praesent sagittis elit a commodo tincidunt. Maecenas id libero eget ipsum auctor dictum et ut tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla hendrerit diam. Sed fringilla odio ut elit elementum scelerisque. Aenean tempor fermentum commodo. Maecenas hendrerit mattis ante, vel ultricies metus imperdiet vitae. Morbi accumsan vel leo at iaculis. In hac habitasse platea dictumst. Curabitur porttitor pretium purus a gravida. In elit turpis, condimentum et fringilla non, gravida id neque.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:210,
        question:"Sed gravida neque vitae odio faucibus ullamcorper?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Sed gravida neque vitae odio faucibus ullamcorper. Nam non ex maximus tellus posuere aliquet. Duis elementum ac lacus vel scelerisque. Donec facilisis, nulla et posuere ultrices, neque urna tristique lacus, sed accumsan elit urna ac libero. Mauris justo erat, molestie eget egestas sit amet, tincidunt non magna. Nulla interdum arcu nibh, ultrices ultricies tellus volutpat quis. Cras euismod ex sit amet eros gravida viverra. Cras sagittis magna eu aliquam tempus. Sed malesuada nulla nunc, a faucibus erat cursus non. Fusce malesuada nisl in eros venenatis posuere. Vestibulum tincidunt facilisis pellentesque. Proin rutrum bibendum enim convallis aliquet. Aliquam a efficitur erat. Quisque semper pulvinar dui. Mauris finibus nulla sit amet ipsum mattis, dictum tristique dui blandit. Duis vitae orci suscipit, condimentum quam at, viverra purus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:211,
        question:"Integer nec sapien arcu?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true}],
        explanation:"Integer nec sapien arcu. In hac habitasse platea dictumst. Sed a justo nec risus imperdiet rutrum eu a lorem. Mauris tincidunt sagittis pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut condimentum, purus a sollicitudin rhoncus, nisi ligula vestibulum lacus, et feugiat odio neque malesuada elit. Quisque et pretium mi, vitae ullamcorper nulla. Nulla ac justo dolor. Duis sodales imperdiet dui, sed congue lacus elementum ut. In hac habitasse platea dictumst. Donec iaculis feugiat diam at ultricies.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:212,
        question:"Aliquam dolor mi, auctor non risus tempor, vulputate consectetur tortor?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"Aliquam dolor mi, auctor non risus tempor, vulputate consectetur tortor. Etiam eget aliquet quam. Pellentesque vitae fringilla tellus. Sed suscipit id lorem ac semper. Suspendisse bibendum ullamcorper quam at vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus augue ac mattis porta. Sed scelerisque risus lectus, tincidunt cursus mauris malesuada non. Suspendisse potenti. Donec finibus, lectus ac fermentum ultricies, augue felis mollis lectus, eget sagittis neque arcu a est. Sed sem lacus, luctus a nisi eu, molestie tincidunt mi. Aliquam ac risus nec est eleifend fringilla eget in enim. Nunc in sem quam. Praesent eu augue egestas, tincidunt sem nec, blandit enim. Curabitur odio enim, ultrices id aliquet ut, euismod eget enim.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:213,
        question:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec accumsan nec nulla maximus pellentesque. Aliquam vehicula elit a purus tempus, in consequat dui sodales. Vestibulum turpis odio, pellentesque sit amet ipsum rhoncus, bibendum viverra elit. Pellentesque fringilla feugiat tellus vitae molestie. Maecenas vel nibh ornare, commodo leo interdum, sollicitudin felis. Fusce sodales ante vitae ex laoreet, id pulvinar mi ultricies. In mi est, scelerisque eget varius eget, laoreet et urna. Fusce sit amet neque quis velit sodales tincidunt pellentesque eu enim. Sed sed ligula tincidunt, elementum leo non, varius ex. Maecenas vel sollicitudin ex, commodo volutpat sapien. Quisque a elementum quam. Praesent turpis ex, sollicitudin vitae dolor eu, semper elementum est. Sed a fringilla eros, vel semper ipsum. Nunc sit amet euismod lacus. Aenean ultricies interdum neque at elementum.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:214,
        question:"Pellentesque euismod orci a mauris pulvinar lobortis?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:2,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Pellentesque euismod orci a mauris pulvinar lobortis. Donec posuere accumsan massa non iaculis. Pellentesque sit amet congue sem. Vestibulum ultrices tempor interdum. Nulla dapibus ante quis metus ullamcorper lobortis. Nulla accumsan commodo felis, in cursus urna porta sed. Praesent elit neque, iaculis vel mattis vitae, tincidunt in dolor. Donec ut egestas quam, nec sagittis lectus. Ut tincidunt eros vitae sapien feugiat lobortis. Vivamus sodales mauris ut risus fringilla, in efficitur nunc eleifend. Nulla eget porttitor magna.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:215,
        question:"Praesent et convallis libero?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Praesent et convallis libero. Integer vitae bibendum metus, in malesuada mauris. Praesent ac hendrerit eros. Nam tristique scelerisque turpis. In hac habitasse platea dictumst. Nulla id lectus molestie, euismod ligula id, dignissim nibh. Sed justo lacus, consequat vel est et, euismod suscipit mauris. Nulla urna nisl, vulputate at velit sit amet, maximus tincidunt velit. Sed suscipit, dui nec dictum imperdiet, ante lacus viverra arcu, at euismod ex justo nec lacus. Nam aliquet quam at tortor elementum ornare nec nec ligula. Pellentesque mauris libero, tincidunt a lobortis imperdiet, faucibus id nisi. Aenean nec varius tellus, at aliquet sem. Praesent convallis lacus elit, eget vestibulum arcu pellentesque ac. Sed vel risus iaculis, pellentesque nunc ac, efficitur justo. Duis eget semper magna. Sed ut risus et arcu cursus egestas quis sit amet sem.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:216,
        question:"Ut eros est, vehicula eget mollis ac, sodales et lectus?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"Ut eros est, vehicula eget mollis ac, sodales et lectus. Sed lobortis, magna sed placerat convallis, justo leo posuere tellus, ut hendrerit urna augue eu nisl. Cras id commodo leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu tempus velit, eu dictum dui. Donec et urna nec est dictum dictum et at magna. Duis imperdiet augue metus, a tempor velit rutrum eget. Integer volutpat mauris ut neque hendrerit, a dictum elit gravida. Nulla in eleifend libero, et congue ante. Nulla at eros a mauris blandit vehicula eget eu nulla.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:217,
        question:"Etiam a ultrices eros?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Etiam a ultrices eros. Mauris aliquam felis massa, sed porta sem bibendum vel. Ut sagittis iaculis diam vestibulum bibendum. Quisque ac malesuada orci. Nam sed quam vulputate, fringilla purus sed, congue diam. Etiam porta nisi sit amet blandit rhoncus. Aliquam sit amet sodales est. Ut sit amet interdum nisl. Quisque mattis iaculis odio, eget tincidunt justo faucibus at. In ipsum leo, tempor quis convallis a, dignissim at neque. Nulla ut urna non mi consequat consequat sed nec turpis. Pellentesque malesuada semper consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed condimentum ac dui sagittis tincidunt. Cras quis ultrices sem. Duis nec dapibus magna.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:218,
        question:"Vivamus sit amet mauris risus?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Vivamus sit amet mauris risus. Fusce et scelerisque purus. Integer tristique nibh at ex sodales sagittis. Curabitur tincidunt commodo risus nec suscipit. Nam eu congue est. Mauris orci neque, varius id enim vel, dignissim tristique est. Morbi nisl dolor, consequat eget mauris non, pretium imperdiet enim. Morbi lacinia fermentum enim, ut luctus sapien. Vestibulum facilisis, nisi a aliquet aliquet, neque mi placerat ligula, in congue mi lorem sed dolor. Pellentesque neque enim, vestibulum vitae porttitor in, pellentesque non risus. Praesent hendrerit ultricies dictum. Nam et pretium odio, sit amet convallis lacus.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:219,
        question:"Nam elementum, diam pretium pharetra cursus, sem est elementum augue, non fermentum orci enim sit amet lorem?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false}],
        explanation:"Nam elementum, diam pretium pharetra cursus, sem est elementum augue, non fermentum orci enim sit amet lorem. Sed a est tellus. Suspendisse varius odio eros, a efficitur tortor mattis at. Nulla cursus, tellus euismod feugiat congue, ex est placerat dui, tincidunt dictum lacus nulla a lectus. Aliquam id turpis ut tellus scelerisque mollis. Quisque cursus tincidunt neque. Curabitur pharetra enim lorem, id molestie nibh efficitur id. Duis vitae elit pulvinar nisi varius tristique. Pellentesque condimentum eget velit ac mollis. Integer suscipit tristique risus vitae sodales.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:220,
        question:"Sed ac lacus vel ante ornare sollicitudin et a libero?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:2,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Sed ac lacus vel ante ornare sollicitudin et a libero. Fusce vitae neque blandit, luctus diam eget, tempor elit. Duis condimentum tortor faucibus, convallis elit lacinia, scelerisque sem. Phasellus sagittis pharetra facilisis. Donec eget ultricies tellus. Cras posuere neque in ante volutpat porttitor. Vestibulum est lectus, elementum in aliquet ac, sodales ac mi. Cras viverra neque dolor, quis mollis orci congue eget. Aliquam vitae augue pretium, condimentum libero vel, fringilla felis. Phasellus in tristique est, vel hendrerit ante. Maecenas mattis ex lorem, vel consequat risus feugiat at. Sed fermentum magna libero, eget ultrices turpis vehicula et. Suspendisse eu orci porta, dignissim mi non, sodales diam. Donec interdum, diam sit amet tincidunt lacinia, quam purus luctus nibh, at rhoncus nibh lorem nec nulla. Nunc iaculis tellus diam, sed pulvinar dolor varius vel.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:221,
        question:"Nam vulputate nibh arcu?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Nam vulputate nibh arcu. Vivamus at gravida mauris, vitae egestas magna. Nam fringilla lorem massa, id dignissim orci bibendum eu. Vivamus vitae sodales erat. Aenean dui sem, tincidunt ut dolor at, ullamcorper lacinia dolor. Vivamus massa enim, rutrum eu nulla sit amet, dictum laoreet nisi. Nunc vehicula ante at justo auctor, sed tempor tortor ullamcorper. Fusce consectetur luctus semper. Vestibulum et sodales tortor. Nulla a feugiat lacus, id pellentesque tortor. Nunc ut ante metus. Donec ut interdum ipsum, ac dictum turpis. Donec id erat nibh. Aliquam vitae nisi sit amet dui fermentum malesuada at non diam.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:222,
        question:"Donec ipsum lacus, ultrices vitae convallis et, sagittis vel nibh?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"Donec ipsum lacus, ultrices vitae convallis et, sagittis vel nibh. Nam vitae ipsum id nulla viverra sodales sit amet sit amet enim. Praesent at dapibus est, nec ornare nisl. Cras eu tempor nibh. Donec vel posuere massa. Phasellus pretium dolor ac placerat rutrum. Quisque at nibh sagittis, feugiat lacus nec, condimentum urna. Nullam tempor turpis accumsan efficitur lacinia. Curabitur ut tortor iaculis, hendrerit erat ac, blandit ante.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:223,
        question:"Ut sodales posuere posuere?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Ut sodales posuere posuere. Curabitur imperdiet felis in lacus posuere facilisis. Vivamus et libero vel arcu posuere dictum sit amet sit amet orci. Phasellus sed velit id orci interdum varius. Donec interdum urna justo, ullamcorper blandit orci sollicitudin ac. Quisque tristique quam est, in consectetur nulla consectetur eu. In fermentum metus vitae urna egestas, in porta mi varius. Maecenas hendrerit viverra velit, at rhoncus ante venenatis eu. Vivamus aliquam, erat et dapibus finibus, lectus massa egestas lacus, ut porttitor purus diam id neque. Nam pretium id metus ut commodo. Curabitur felis odio, vulputate quis mi a, viverra rhoncus risus. Curabitur vestibulum, dui id elementum rutrum, lacus arcu tincidunt nisl, blandit efficitur sem lorem nec velit. Suspendisse id facilisis tortor.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:224,
        question:"Vivamus eu ligula eget nisl facilisis volutpat?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:3,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false}],
        explanation:"Vivamus eu ligula eget nisl facilisis volutpat. Etiam luctus nibh at felis aliquam semper. Praesent et rutrum eros. Proin quis convallis leo. Donec condimentum eros in mi pretium varius. Curabitur tincidunt vel elit non ultricies. Morbi varius bibendum nunc nec laoreet.",
        source:"Wikipedia",
        domain:"Chapter 3"
        },
        {
        id:225,
        question:"Mauris egestas odio sit amet tincidunt porta?",
        answers:[{id:0,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Mauris egestas odio sit amet tincidunt porta. Aenean sollicitudin purus nibh, vitae pulvinar justo egestas at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tempus a metus nec sagittis. Aenean aliquam justo eros, a fermentum sapien scelerisque ut. Sed eleifend cursus erat, eget interdum magna mattis quis. Curabitur vel urna efficitur lacus blandit consequat. Curabitur quis orci hendrerit, dignissim ligula ac, pulvinar augue. Aliquam placerat egestas sem, congue varius odio pellentesque ut. Vivamus vel felis sapien. Aenean massa quam, interdum vitae vulputate non, vehicula id est.",
        source:"Reddit",
        domain:"Chapter 3"
        },
        {
        id:226,
        question:"Vestibulum sed sollicitudin ipsum?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Vestibulum sed sollicitudin ipsum. Donec semper maximus nisl. Cras turpis sapien, imperdiet a dolor at, consequat ultricies mauris. Ut vitae justo interdum, sollicitudin nunc vel, pulvinar quam. Nam non pharetra lacus, et viverra justo. Sed imperdiet mauris non sapien vestibulum, luctus commodo dui pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum semper sagittis nunc. Nam ut porta ipsum, ac ultricies libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tortor enim, tincidunt id erat sit amet, vehicula imperdiet erat.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:227,
        question:"Praesent aliquam tincidunt finibus?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Praesent aliquam tincidunt finibus. Vivamus consectetur et tortor non facilisis. Cras sit amet massa ac urna ornare mollis. Proin sit amet facilisis tortor. Quisque vestibulum tempor ornare. Mauris non diam pellentesque, dignissim nisi in, cursus eros. Vivamus pellentesque vel risus a congue. Donec nec efficitur magna. Pellentesque dignissim lacinia ante sit amet consectetur. Duis ac lectus eu ex sodales consequat. Fusce in ante eget metus pulvinar interdum ac tincidunt turpis. Vestibulum elementum mattis quam sit amet mattis. Ut a felis in leo condimentum accumsan in ac orci. Nulla vel risus eget eros luctus bibendum at a dui. Aliquam aliquam diam sed consectetur aliquam. Sed in enim mollis, pharetra nisi ut, efficitur nisi.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:228,
        question:"Mauris at eros porta, volutpat nibh in, tempus augue?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true}],
        explanation:"Mauris at eros porta, volutpat nibh in, tempus augue. Aliquam lacinia finibus massa, non dapibus ipsum mollis at. Integer sit amet pulvinar risus. Sed eu nulla eget felis faucibus aliquam. Vestibulum dui massa, vulputate sed blandit non, tristique id neque. Maecenas fringilla cursus condimentum. Aenean tempus sapien ac odio imperdiet, a tincidunt est condimentum. Fusce lobortis, velit ac malesuada semper, eros quam imperdiet ligula, a molestie elit orci et enim. Etiam luctus sed erat eget molestie. Etiam vel ipsum eu purus consequat condimentum pharetra ac diam. Morbi pretium elit interdum aliquam posuere. Maecenas sed tincidunt lectus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:229,
        question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true}],
        explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lacus quam, in congue tellus semper id. In in tellus eget ligula condimentum ultrices sit amet ut eros. Sed imperdiet et lorem a tristique. Fusce et lacinia turpis, eget sagittis risus. Aenean tempor risus justo, a vehicula nisi porttitor id. Aliquam semper semper condimentum. Integer in massa nec nunc pharetra suscipit sed in lectus. Curabitur nec quam elit. Donec quis scelerisque ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eget odio suscipit, porta metus id, blandit lorem. Cras sem ipsum, congue nec diam at, malesuada gravida quam.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:230,
        question:"Phasellus consequat ex sed sapien molestie, in sagittis quam fringilla?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true}],
        explanation:"Phasellus consequat ex sed sapien molestie, in sagittis quam fringilla. Aliquam et massa sit amet libero consequat rhoncus. Praesent eu ullamcorper lorem. Cras dapibus, lacus id suscipit ultrices, eros dolor euismod eros, quis suscipit magna nisl vehicula orci. Integer mollis blandit turpis, vitae volutpat urna. Praesent ultrices dignissim nisl vel porttitor. Nulla porta eleifend dolor et tincidunt. Etiam bibendum varius pretium. Donec porttitor, metus et dapibus blandit, est arcu convallis augue, facilisis fringilla nisl dui nec elit. Morbi egestas enim quis blandit pulvinar.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:231,
        question:"Donec imperdiet mi eget sem fermentum ornare at in sapien?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true}],
        explanation:"Donec imperdiet mi eget sem fermentum ornare at in sapien. Sed euismod a ipsum in ornare. Vivamus eu nisl congue, sodales neque in, tristique quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nullam sed mollis lectus. Nam nec felis leo. Pellentesque at dui ac metus luctus pulvinar eu ut eros. Pellentesque convallis ante pharetra dictum euismod. Curabitur augue tellus, sollicitudin a nisi in, maximus convallis turpis. Sed porttitor consequat neque at lacinia. In velit purus, dapibus et tristique in, fringilla at lectus. Integer volutpat est ut elit scelerisque, quis vestibulum magna aliquam. Fusce nunc lectus, semper varius mattis in, porttitor nec lectus. In dignissim ante at facilisis eleifend.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:232,
        question:"Praesent semper tincidunt ultricies?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Praesent semper tincidunt ultricies. Nullam porta ullamcorper nulla a tincidunt. Maecenas et ipsum at augue tempus dignissim a et urna. Nulla ullamcorper metus quis ipsum laoreet venenatis. Nunc urna tortor, posuere et nisi tempor, volutpat vulputate dui. Nulla non molestie elit. Nulla posuere nisi id leo imperdiet, eu mattis augue malesuada. Morbi porta ex at augue dignissim, eu egestas sem pretium. Cras rutrum nisl cursus, maximus felis molestie, porta leo. Morbi id gravida augue. Maecenas condimentum interdum felis.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:233,
        question:"Donec in bibendum mauris?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.", correct:false}],
        explanation:"Donec in bibendum mauris. Donec ullamcorper massa a pharetra mollis. Maecenas egestas, leo a suscipit blandit, neque ipsum tincidunt enim, sit amet volutpat est mauris non dolor. Aliquam quis massa eget purus dictum vehicula eget id ante. Praesent et eleifend lacus, a aliquam enim. Vivamus pulvinar tellus vel eros luctus pulvinar. Aliquam tincidunt eget sem a gravida.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:234,
        question:"Aenean sed blandit est?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false}],
        explanation:"Aenean sed blandit est. Donec malesuada convallis fringilla. Duis suscipit laoreet neque quis eleifend. Morbi suscipit tellus in nisl interdum ultricies. Maecenas posuere eu enim vitae vestibulum. Quisque egestas eleifend lorem ut vehicula. Etiam commodo nulla felis, nec ultricies mauris iaculis vitae. Duis at neque id lorem accumsan facilisis. Curabitur et est rhoncus, pretium mi ut, aliquet felis. Nunc at condimentum turpis.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:235,
        question:"Sed vitae dapibus nisl?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Sed vitae dapibus nisl. In ut metus leo. Curabitur id enim diam. Nulla vitae porta nisi. Aenean pharetra erat at porttitor fringilla. Nullam faucibus viverra augue et dignissim. Cras tortor augue, viverra gravida facilisis nec, interdum sed nibh. Donec quis mi tellus. Quisque at bibendum nibh. Phasellus ac vestibulum eros. Curabitur lobortis neque id blandit finibus. Duis nisi risus, commodo id felis at, sagittis blandit augue.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:236,
        question:"Integer vel imperdiet tellus?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Integer vel imperdiet tellus. Cras id ante ac turpis bibendum tincidunt eu ut nisi. Aenean efficitur ipsum at tellus accumsan, non vulputate orci elementum. Nullam a velit non risus venenatis vehicula. Duis pellentesque tellus nec interdum lobortis. Mauris ligula lacus, lobortis sit amet dolor at, feugiat hendrerit elit. Proin non nisl dolor. Proin nec justo sed mauris dignissim malesuada in euismod ligula. Ut eros mi, pellentesque commodo dui eget, condimentum varius arcu. Pellentesque dapibus elit nibh, eu aliquet nibh suscipit ac. Fusce in orci risus. Proin tincidunt, nulla vel aliquet lacinia, elit dolor aliquam ipsum, quis dictum quam lectus venenatis leo. Sed a orci sit amet risus volutpat cursus. Donec molestie pulvinar erat, convallis tempus elit tristique a. Nullam non augue ornare, vestibulum erat in, blandit risus. Sed blandit eu ante non rhoncus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:237,
        question:"Nullam feugiat fringilla dolor, eget porta elit consectetur posuere?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Fusce consequat nibh sed pretium semper.*", correct:true}],
        explanation:"Nullam feugiat fringilla dolor, eget porta elit consectetur posuere. Mauris non ipsum nisi. Aenean eget aliquet diam. Quisque a justo non erat fringilla accumsan et in arcu. Vivamus et tempor orci. Integer vulputate viverra ipsum, sit amet interdum sem laoreet a. Cras mattis lorem id nisl pulvinar, a aliquam ex dapibus. Vivamus elit lorem, egestas in ultricies et, dictum nec nunc. Morbi rhoncus egestas nisi eget pretium. Nullam eget ultricies urna, nec mattis ipsum.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:238,
        question:"Nulla id felis feugiat, laoreet risus non, ullamcorper urna?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.*", correct:true},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Nulla id felis feugiat, laoreet risus non, ullamcorper urna. Vestibulum sed dui accumsan, malesuada lorem et, condimentum ante. Aliquam nisi ante, laoreet a maximus eu, condimentum a neque. In hac habitasse platea dictumst. Proin commodo tempor nibh. Etiam faucibus imperdiet nibh, quis fermentum lorem dignissim ut. Maecenas libero dui, laoreet id tempus sit amet, gravida quis velit. Cras aliquet ullamcorper maximus. Suspendisse potenti. Nulla euismod, lacus vitae feugiat accumsan, enim tortor laoreet arcu, in elementum erat arcu a justo.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:239,
        question:"Morbi luctus neque eget fringilla porttitor?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Morbi luctus neque eget fringilla porttitor. Donec rhoncus sagittis luctus. Phasellus mollis lectus ipsum, egestas suscipit ex tempor eget. Integer euismod eu leo sit amet egestas. Integer tempus elit at velit egestas, eu posuere leo ullamcorper. Quisque lectus leo, dignissim sed tortor sed, tincidunt luctus magna. Nulla facilisi. Morbi cursus justo sed aliquam vulputate. Aenean nulla metus, hendrerit vitae metus in, malesuada pharetra enim.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:240,
        question:"Quisque egestas egestas dui, a facilisis tortor mattis posuere?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.*", correct:true},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Quisque egestas egestas dui, a facilisis tortor mattis posuere. Aenean ut sem id metus ultricies sagittis. Etiam porttitor orci magna, ac dapibus metus eleifend nec. Suspendisse potenti. Cras vel leo volutpat magna euismod fringilla. Maecenas dapibus tristique placerat. Donec at sapien eget odio convallis placerat vitae vitae massa. Suspendisse hendrerit metus magna, eget sodales diam consectetur a. Maecenas nec sagittis risus. Fusce venenatis nec nunc sit amet luctus. Nam suscipit quis arcu bibendum gravida. Donec rhoncus ullamcorper gravida. Duis vitae eleifend leo.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:241,
        question:"Pellentesque hendrerit, tortor sed finibus consequat, magna odio condimentum odio, a maximus lectus lorem a purus?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true}],
        explanation:"Pellentesque hendrerit, tortor sed finibus consequat, magna odio condimentum odio, a maximus lectus lorem a purus. Proin tempor tortor ut ligula efficitur ultricies. Quisque pharetra ligula ut lorem scelerisque, non hendrerit orci volutpat. Cras vel elit sed neque efficitur maximus in sit amet nulla. Quisque blandit fringilla elit sit amet sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi elementum elit eu ex porttitor pulvinar. Cras ullamcorper nisl ullamcorper suscipit luctus. Nunc nulla ex, commodo sit amet odio quis, finibus semper ligula.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:242,
        question:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer diam massa, pretium quis aliquet in, molestie sed est?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer diam massa, pretium quis aliquet in, molestie sed est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac nunc dolor. Nam et maximus neque. Integer non nulla a dolor vulputate viverra id vitae nisi. Ut molestie vestibulum ex, vitae blandit justo. Aenean aliquet erat at augue finibus porttitor. Vestibulum sagittis leo sed diam ullamcorper, lacinia sollicitudin ipsum facilisis.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:243,
        question:"Cras efficitur laoreet mauris, quis iaculis est efficitur non?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Cras efficitur laoreet mauris, quis iaculis est efficitur non. Cras mollis nec orci sed dictum. Nam arcu elit, porta in est at, ultrices feugiat ipsum. Integer quis gravida urna, ullamcorper tristique tellus. Maecenas nec convallis dui. Cras leo ante, accumsan in ullamcorper sed, semper a magna. Sed dapibus blandit nunc sed tincidunt. Aliquam ornare urna lacinia tempor pellentesque. Vivamus ut volutpat nulla, quis auctor metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent auctor, turpis a rhoncus efficitur, magna sapien dignissim mauris, rutrum tincidunt orci erat et arcu. Duis semper ante sed metus vehicula tristique. Vestibulum nec nisi vel ante scelerisque maximus ac sit amet velit. Suspendisse placerat ipsum ac elementum rhoncus. Ut auctor ultrices tincidunt.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:244,
        question:"Suspendisse non nunc lobortis, fermentum neque vitae, accumsan nunc?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Suspendisse non nunc lobortis, fermentum neque vitae, accumsan nunc. Suspendisse id dolor augue. Vivamus sed elementum metus. Nunc fringilla consequat leo nec tristique. Aenean bibendum maximus mauris in euismod. Maecenas varius est velit, at consequat odio dapibus sed. Suspendisse turpis quam, vestibulum eu placerat sed, bibendum ut erat. Quisque a tincidunt sapien. Mauris sodales porta lorem. Ut nibh nisl, sagittis tristique tortor nec, maximus euismod diam. Integer vel tempus felis, condimentum imperdiet tellus. Morbi non sollicitudin augue. Aenean a pharetra lacus, id faucibus est.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:245,
        question:"Phasellus eleifend eget purus in laoreet?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true}],
        explanation:"Phasellus eleifend eget purus in laoreet. Sed tincidunt pharetra libero in porta. Morbi sit amet eros sed quam posuere rhoncus non eu libero. Maecenas fringilla, lorem quis ullamcorper dignissim, ipsum ex efficitur elit, volutpat mollis eros dui eget dui. Sed tincidunt lacus id ipsum molestie, et vehicula dui porttitor. Nam a libero cursus, ultrices sem eget, consequat arcu. Sed vitae justo non sem pellentesque pharetra. Cras a vulputate massa, id accumsan risus. Pellentesque et velit ut tellus accumsan interdum. In hac habitasse platea dictumst. In nisi lacus, ultricies eget tristique in, sollicitudin et lorem. Ut aliquet ac augue nec volutpat. Sed in gravida diam.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:246,
        question:"Fusce varius gravida quam non cursus?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"Fusce varius gravida quam non cursus. Cras laoreet nunc non dui dignissim, vel elementum ligula lacinia. Duis justo mauris, tristique placerat ex at, pulvinar egestas massa. Sed sagittis, nunc nec tincidunt facilisis, sem sapien tristique tellus, semper venenatis lorem ligula ac augue. Fusce eget massa nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin volutpat lacus diam, lacinia dapibus velit euismod et. Curabitur massa erat, sodales non purus nec, congue dapibus justo. Quisque dapibus arcu vel risus suscipit imperdiet. Pellentesque eu nisl sollicitudin, sodales enim at, porttitor ipsum. Ut ut libero ac augue dictum sollicitudin id at ligula.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:247,
        question:"Aliquam dictum magna ac est pulvinar, in ultricies justo aliquam?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Aliquam dictum magna ac est pulvinar, in ultricies justo aliquam. Nunc ullamcorper gravida purus vel aliquam. Aenean aliquet, sapien vitae vehicula vehicula, eros tellus convallis tellus, eget elementum ipsum ante eget ante. Vestibulum commodo mattis sem, ac luctus mi volutpat quis. Suspendisse a odio dolor. Donec iaculis velit ut tempor accumsan. Pellentesque ac arcu scelerisque, egestas metus vel, sodales diam. Vivamus efficitur scelerisque venenatis. Curabitur tellus enim, fermentum a pretium in, imperdiet pulvinar libero.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:248,
        question:"Curabitur tristique, augue sed facilisis condimentum, tortor nunc molestie ligula, et maximus velit nibh eget ante?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Curabitur tristique, augue sed facilisis condimentum, tortor nunc molestie ligula, et maximus velit nibh eget ante. Nunc volutpat commodo tortor vel sodales. Quisque maximus mauris eget blandit eleifend. Aenean id volutpat nulla. Aliquam interdum odio nec nisl posuere, in scelerisque tortor egestas. Maecenas sodales quis erat et egestas. Integer tempus viverra tortor, vitae vestibulum massa imperdiet eget. Vestibulum feugiat non lectus sit amet volutpat. Aenean condimentum quam et tellus tempus, quis rhoncus risus facilisis. Sed cursus dui eu vehicula luctus. Cras nisl libero, vestibulum ac interdum sed, aliquet et ipsum. Nullam egestas pellentesque finibus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:249,
        question:"Sed venenatis nulla sem, non cursus tortor finibus vitae?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:1,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Sed venenatis nulla sem, non cursus tortor finibus vitae. Praesent sed nulla non lorem tincidunt iaculis. In facilisis mi id eleifend pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus finibus elementum rutrum. In fermentum ligula lacus, at hendrerit orci pellentesque non. Proin scelerisque libero nec vulputate volutpat. Aliquam erat volutpat.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:250,
        question:"Vivamus eget massa nisl?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Vivamus eget massa nisl. Quisque luctus congue sollicitudin. Morbi ullamcorper eros quis risus luctus consectetur. Donec pulvinar velit ut elit ultrices elementum. Suspendisse et tellus diam. Aenean pretium luctus convallis. Mauris porta ipsum vitae faucibus fringilla. In convallis nibh eu rhoncus consectetur. Duis vitae ipsum rhoncus, semper neque eget, elementum felis. Sed ornare, nisl in scelerisque suscipit, massa augue lobortis mi, id varius libero quam at urna. Nulla consectetur orci aliquam ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam commodo consequat interdum. Maecenas aliquam eu purus vel pharetra. Integer elementum metus quis blandit volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:251,
        question:"Donec viverra felis eu justo fringilla hendrerit?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Donec viverra felis eu justo fringilla hendrerit. Nunc commodo dapibus turpis laoreet pellentesque. Nam placerat interdum porta. Vestibulum sed lectus a nibh pretium iaculis sit amet ac felis. Donec ac odio eget leo lacinia dignissim. Nunc faucibus ante in vehicula sagittis. Morbi varius eleifend risus, in maximus nisl tempus ut.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:252,
        question:"Interdum et malesuada fames ac ante ipsum primis in faucibus?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.*", correct:true},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam in diam sed nibh fringilla posuere ut ut neque. Duis aliquam ultrices metus, sit amet sagittis velit luctus id. Sed at sapien a leo dignissim semper non vitae justo. Suspendisse pharetra enim id ipsum ultrices scelerisque sed eu lorem. Nulla gravida vestibulum vulputate. In sodales, ligula eu laoreet consequat, nisi mauris eleifend orci, ac convallis neque orci dignissim est. Maecenas ut erat nec quam molestie volutpat et sit amet justo. Integer tincidunt venenatis sem ac dignissim. Nulla ultricies enim turpis, vitae rutrum justo vehicula et.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:253,
        question:"Nunc in urna id nibh bibendum pellentesque eu vel orci?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Nunc in urna id nibh bibendum pellentesque eu vel orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at ipsum interdum neque pretium facilisis maximus non nunc. Nulla nisl leo, venenatis a massa vitae, vulputate mollis justo. Pellentesque vitae lobortis ipsum, sed porta velit. Duis vitae lobortis justo, sit amet pulvinar neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ullamcorper nunc sit amet leo vehicula, accumsan scelerisque lectus lacinia. Mauris ac pretium turpis. Nunc et mollis risus. Nam id sapien et eros efficitur ullamcorper sed nec est. Proin at justo sit amet arcu pharetra volutpat quis quis elit. Maecenas sollicitudin, est sit amet aliquet rutrum, lacus neque commodo metus, vel convallis metus justo sed nunc. Integer ac porta lectus, vel interdum nibh.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:254,
        question:"Proin eget dignissim magna?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Proin eget dignissim magna. Fusce et convallis arcu. Fusce vitae scelerisque velit. Cras ultricies sollicitudin leo vel consequat. Cras tempus erat quis metus cursus, luctus molestie neque interdum. Duis dolor tortor, aliquet eget porta at, volutpat nec nunc. Curabitur facilisis fermentum feugiat. Curabitur egestas ligula vitae porta mattis. In nec lobortis enim. Nunc eu dui nulla.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:255,
        question:"Suspendisse in mi ante?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Suspendisse in mi ante. Etiam scelerisque felis in ipsum sollicitudin, et bibendum felis fermentum. Nulla sollicitudin neque lectus, sit amet vestibulum orci lacinia ut. Nulla vehicula lacinia consectetur. Nam gravida pulvinar dapibus. Nunc finibus, justo eget ultrices pharetra, eros magna ornare urna, sit amet tincidunt velit odio eu dui. Ut efficitur ex eget enim condimentum mattis. Duis convallis sodales tempor. Praesent luctus erat in erat eleifend pulvinar. Mauris congue semper leo sit amet tincidunt. Pellentesque ante lectus, lobortis congue vulputate nec, porttitor et elit.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:256,
        question:"Donec nec condimentum nisl, ut tincidunt leo?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.*", correct:true}],
        explanation:"Donec nec condimentum nisl, ut tincidunt leo. Pellentesque magna justo, tempus ut quam eu, imperdiet maximus augue. Aliquam tellus purus, porttitor vel rutrum a, sagittis vel ex. Donec a turpis vitae urna porta iaculis. Etiam pellentesque libero leo, nec tincidunt nunc fermentum in. Duis tincidunt diam sit amet velit facilisis, id laoreet eros pharetra. Nam id sagittis ex. Praesent elementum fringilla ornare. Donec et dui tempor elit tincidunt iaculis. In convallis rhoncus sapien, vel mattis enim euismod cursus. Praesent bibendum elit sed cursus imperdiet. Praesent feugiat lorem in blandit ultricies. Quisque porttitor orci justo, nec consequat dolor ultricies mattis.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:257,
        question:"Curabitur et pulvinar libero?",
        answers:[{id:0,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Curabitur et pulvinar libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus fringilla augue libero, vitae porta diam vehicula eu. Suspendisse scelerisque cursus velit ac varius. Pellentesque fringilla at dolor quis consectetur. Vestibulum rhoncus tincidunt nisl sit amet vulputate. Praesent eget velit nec purus convallis volutpat id nec arcu. Etiam pretium neque quis quam volutpat porta quis ut nibh. Fusce accumsan felis metus, a laoreet quam tempus nec. Phasellus tincidunt urna ut ligula ultricies dignissim.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:258,
        question:"Praesent sit amet lacinia libero?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:2,answer:"Nunc placerat libero quis mattis pulvinar.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Praesent sit amet lacinia libero. Fusce maximus aliquam velit a euismod. Nulla vulputate at dolor cursus blandit. Nulla convallis vulputate vestibulum. Maecenas blandit placerat nisl, vitae posuere nulla consequat quis. Donec posuere nibh varius, interdum libero ut, dictum sapien. Sed aliquam massa purus, id fringilla magna pretium eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec malesuada nibh. Donec vestibulum fermentum ex, venenatis efficitur turpis. Donec maximus nisi eget massa tincidunt mattis. Nullam et nibh faucibus, imperdiet enim vel, dictum urna. Phasellus et viverra justo, nec dignissim purus. Nam tincidunt justo id urna maximus, ac lobortis nulla aliquam. Sed vehicula, nibh vulputate suscipit iaculis, purus ante egestas est, ut aliquam ligula massa non augue. Praesent viverra accumsan dolor, in tincidunt quam egestas quis.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:259,
        question:"Vivamus interdum neque sit amet magna consectetur, id aliquet lorem maximus?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"Vivamus interdum neque sit amet magna consectetur, id aliquet lorem maximus. Etiam ac blandit nisi. Vivamus urna nunc, consectetur vel mauris vel, congue porttitor leo. Vivamus at dignissim neque. Nulla id dolor nec nulla mollis dapibus eget a felis. Curabitur fermentum pellentesque volutpat. Sed ultrices ante suscipit risus maximus imperdiet. In varius risus ut iaculis blandit. Ut porttitor magna quam, vel scelerisque lorem pulvinar ut. Praesent congue vitae ante eget tincidunt.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:260,
        question:"Pellentesque non viverra mauris?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Pellentesque non viverra mauris. Aenean convallis dolor tellus, quis faucibus turpis laoreet et. Nunc in erat fermentum, blandit est scelerisque, tempor lacus. Nulla at vehicula tellus, in elementum ex. Donec vehicula pretium elementum. Phasellus tincidunt leo sapien, et vehicula dui blandit at. Etiam eget lectus sem. Donec eget bibendum tortor, a pretium urna. Nunc eu tellus elementum, lobortis turpis nec, vulputate tellus. Nulla ultrices justo non nisl pellentesque, nec hendrerit sapien pellentesque. Aenean lacinia urna imperdiet lectus facilisis, et ullamcorper nibh egestas. Ut sit amet urna at nunc molestie lobortis ultricies at lectus. Vivamus laoreet porta urna. Curabitur nec hendrerit odio. Nullam et ligula vel augue sagittis rutrum non non mauris. Fusce nec mi vitae dolor ultrices fermentum.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:261,
        question:"Etiam congue ullamcorper arcu a dictum?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true}],
        explanation:"Etiam congue ullamcorper arcu a dictum. Proin cursus quis ligula a tincidunt. Sed gravida turpis nulla, sed cursus lorem sollicitudin ac. Nulla ac vehicula justo. Duis convallis, sem sit amet sagittis congue, eros ipsum condimentum nisi, sit amet ultricies magna lorem quis est. Phasellus lacinia justo quis magna ornare auctor. Aliquam euismod arcu venenatis mauris ullamcorper, vel congue purus imperdiet. Aliquam auctor turpis sed ante molestie tempus. Praesent risus sapien, eleifend dictum nibh ut, tempor convallis turpis. In id ante non felis commodo feugiat commodo et neque. Nam ornare elit consequat magna ullamcorper, ac ultricies leo blandit. Ut a varius nisl. Vivamus fermentum, ante at commodo placerat, turpis nisi congue eros, et fringilla tellus urna a arcu. Proin in blandit sapien. In in fringilla dui. Nullam vel ultrices sapien, eget faucibus eros.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:262,
        question:"In hac habitasse platea dictumst?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false}],
        explanation:"In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis nisi, consectetur ut cursus semper, vestibulum porttitor purus. Aliquam quis semper leo. Mauris mi nunc, posuere eu ante non, convallis porttitor magna. Nam sed est quis lectus mollis posuere sed vitae sem. Aliquam maximus maximus libero, nec finibus justo maximus at. Vestibulum risus tortor, feugiat sit amet tristique eu, imperdiet vulputate mauris. Praesent auctor sit amet enim et tempor. Aenean consectetur ante in purus tristique hendrerit. Etiam ullamcorper egestas leo ac cursus. Mauris sollicitudin arcu ac urna posuere, a varius lorem auctor.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:263,
        question:"Maecenas placerat tempus augue et tempor?",
        answers:[{id:0,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:1,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:2,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true}],
        explanation:"Maecenas placerat tempus augue et tempor. Quisque eu sapien ut neque rhoncus posuere. Vestibulum sed turpis nulla. Sed nec pulvinar tellus, vitae placerat lectus. Phasellus laoreet sit amet urna a viverra. Donec pretium quis massa id dignissim. Suspendisse a felis sit amet magna facilisis laoreet non suscipit sem. Sed lobortis quam nunc, sit amet convallis orci feugiat id. Curabitur mauris magna, convallis vitae aliquet eleifend, consectetur vitae nunc. Phasellus viverra velit sodales pellentesque scelerisque. In at lacinia neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis aliquam velit, luctus vulputate ligula. Donec nec pharetra tellus. Donec cursus neque ac dolor cursus sagittis.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:264,
        question:"Integer congue leo magna?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Integer congue leo magna. Etiam a elementum lectus. Praesent quis malesuada nunc, nec venenatis elit. Morbi sit amet dignissim est, ut blandit mi. Nullam quis ultricies quam. Nulla vitae tempus turpis. In ligula ipsum, pharetra sit amet lacus vitae, cursus viverra lorem. Praesent ultrices varius odio fringilla fringilla. Praesent tristique vel ipsum quis tincidunt.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:265,
        question:"Aliquam nec hendrerit lectus?",
        answers:[{id:0,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true}],
        explanation:"Aliquam nec hendrerit lectus. Maecenas placerat in purus vitae sagittis. Fusce feugiat vel lorem ut dictum. Maecenas interdum posuere euismod. Etiam a elementum enim. Donec a ipsum enim. Duis in tincidunt nunc, vitae rutrum felis. Morbi non nibh vel sapien hendrerit accumsan. Nunc sed tortor at risus suscipit iaculis sed non libero. Nulla mauris lectus, scelerisque id molestie sed, mollis ac arcu. Sed non lorem eget quam elementum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:266,
        question:"Maecenas commodo augue in ullamcorper fermentum?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true},{id:3,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false}],
        explanation:"Maecenas commodo augue in ullamcorper fermentum. Proin placerat quam at odio hendrerit, mattis eleifend ligula fringilla. Aenean mi ante, viverra et lorem nec, interdum imperdiet velit. Aliquam lacus leo, mattis vitae elit nec, venenatis gravida massa. Maecenas ornare vulputate turpis et scelerisque. Sed tincidunt scelerisque lorem eu posuere. Phasellus lobortis odio sit amet enim tempor lacinia nec id enim. Aenean interdum congue magna gravida molestie. Morbi convallis pharetra neque sed tincidunt. Mauris neque urna, pulvinar sed viverra eget, convallis ac nunc.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:267,
        question:"Donec id dignissim massa, sit amet lacinia leo?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:2,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Donec id dignissim massa, sit amet lacinia leo. Etiam tristique tortor et neque condimentum, eget scelerisque diam luctus. Nunc sit amet convallis ex, quis sagittis nunc. Sed tincidunt ut lectus sit amet consequat. In convallis elementum lorem eget venenatis. Donec vestibulum libero dignissim ipsum dapibus auctor. Cras justo tortor, sagittis euismod dictum at, gravida ac massa. Praesent in tincidunt turpis. Vivamus maximus sodales metus, non congue eros gravida eget. Vestibulum sodales eget velit in convallis. Proin ac interdum leo. Aliquam laoreet finibus massa in fringilla. In arcu est, porttitor vel elit sed, varius maximus purus. Ut dolor leo, imperdiet quis dui sit amet, rutrum finibus sem.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:268,
        question:"Fusce cursus sem in metus interdum molestie?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:2,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.", correct:false}],
        explanation:"Fusce cursus sem in metus interdum molestie. Nullam scelerisque neque vestibulum auctor ullamcorper. Integer eget posuere nisl, et eleifend elit. Quisque vitae mi dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis tortor ac velit tempus sollicitudin at in sem. Ut elementum metus at finibus tempor. Nullam et sem sed justo luctus pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum efficitur sem ut neque blandit porttitor.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:269,
        question:"Aliquam quam tortor, dictum quis euismod non, sagittis eu velit?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Aliquam quam tortor, dictum quis euismod non, sagittis eu velit. Cras imperdiet, neque vitae molestie rutrum, erat orci sodales arcu, non eleifend mauris augue ut est. Suspendisse rutrum orci in elementum fermentum. Fusce viverra tempus varius. Maecenas in ornare purus, nec tincidunt diam. Nullam pellentesque sit amet orci id porttitor. Etiam interdum, mauris eu ullamcorper dapibus, leo velit placerat sapien, sed gravida mauris libero non odio. Donec est massa, semper et orci ac, mattis tempor felis. Nam interdum congue mi, consequat rhoncus augue.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:270,
        question:"Nunc facilisis, erat et efficitur pharetra, tortor arcu malesuada justo, eu vestibulum eros nunc a erat?",
        answers:[{id:0,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"Nunc facilisis, erat et efficitur pharetra, tortor arcu malesuada justo, eu vestibulum eros nunc a erat. Maecenas a commodo ante. Nulla semper, neque vel dignissim tempor, eros lacus consequat est, ut tristique dui sapien at leo. Phasellus nunc risus, posuere a nunc at, facilisis porttitor justo. Maecenas consectetur ex lorem, sit amet mollis ex luctus at. Fusce aliquet in erat ac scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis massa a sapien elementum, luctus congue diam faucibus. Sed volutpat enim ornare, luctus orci sollicitudin, feugiat purus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:271,
        question:"Aliquam convallis quis metus vel dapibus?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:1,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.*", correct:true}],
        explanation:"Aliquam convallis quis metus vel dapibus. Duis vel sollicitudin ligula. Nullam a ligula a lacus aliquet hendrerit sit amet id enim. Donec nisi turpis, pretium vel odio ut, ullamcorper gravida lorem. Curabitur sagittis tellus sed dui tempor, sit amet tincidunt turpis gravida. Nam a egestas ex. Integer eu urna pulvinar, dapibus leo in, venenatis dui. Maecenas id augue id nulla dignissim venenatis. Integer scelerisque purus sit amet urna blandit porta.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:272,
        question:"In ullamcorper feugiat erat, at viverra est euismod eu?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"In ullamcorper feugiat erat, at viverra est euismod eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque euismod, purus tristique iaculis faucibus, enim nisi mattis lorem, in mattis lorem lectus blandit magna. Aenean feugiat felis in sollicitudin interdum. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a maximus orci. Nullam a augue non orci vestibulum semper. Morbi egestas eu diam quis pretium. Nunc nec augue molestie, suscipit arcu ut, tempor ligula. Nullam euismod risus sed arcu posuere placerat. Integer luctus ex vel erat pellentesque pulvinar. In placerat nisl sapien.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:273,
        question:"Donec in consectetur nibh?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:3,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false}],
        explanation:"Donec in consectetur nibh. Donec finibus dui eu ligula laoreet pulvinar. Curabitur malesuada auctor ex a malesuada. Vivamus eros purus, maximus sit amet odio nec, suscipit iaculis nulla. Donec vel mauris quis dui dignissim scelerisque. Donec condimentum nunc eu lacus condimentum volutpat. Nam nec cursus risus. Sed efficitur vel lectus non malesuada. Nullam condimentum, libero et vestibulum cursus, odio augue pretium nisl, accumsan accumsan turpis ante sit amet nunc.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:274,
        question:"Nullam ultrices tincidunt nibh?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false}],
        explanation:"Nullam ultrices tincidunt nibh. Fusce ut scelerisque turpis. Quisque ut faucibus massa. Aliquam in sollicitudin nisi. Curabitur imperdiet, nulla et efficitur consectetur, ipsum est pellentesque lectus, eu tempus massa metus et nunc. Curabitur sed dignissim nibh. Nullam vel justo tortor. Donec porta purus in sodales blandit. Mauris ut malesuada neque. Suspendisse vel leo et tellus rhoncus placerat eget a arcu. In pulvinar elit ut sagittis pulvinar. Ut posuere velit sem, in sodales massa tincidunt ac.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:275,
        question:"Phasellus euismod leo non gravida rutrum?",
        answers:[{id:0,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:3,answer:"In in metus non urna placerat varius et vitae orci.", correct:false}],
        explanation:"Phasellus euismod leo non gravida rutrum. Phasellus commodo, ipsum in posuere iaculis, eros magna pellentesque leo, eget congue turpis dolor id nisi. Aenean quis enim sodales, finibus lectus in, ultricies justo. Proin nec felis placerat, tristique urna nec, blandit neque. Mauris blandit urna eget mauris tempor, ac bibendum quam interdum. Quisque pretium molestie iaculis. Curabitur finibus odio ac ultrices viverra. Duis sollicitudin, ipsum vitae maximus cursus, elit orci elementum diam, eu ornare sem mauris sit amet nisl. Etiam volutpat quam ac lorem consectetur, sit amet rutrum eros feugiat. Morbi in sem congue, volutpat lorem vitae, ornare ligula. Aenean risus arcu, placerat vitae magna fringilla, hendrerit luctus nulla. Fusce bibendum placerat hendrerit. Praesent imperdiet feugiat turpis, id convallis eros iaculis a. Nulla finibus imperdiet turpis vel vestibulum.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:276,
        question:"Quisque volutpat porttitor iaculis?",
        answers:[{id:0,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Quisque volutpat porttitor iaculis. Praesent eleifend justo eu nibh convallis dictum. Nullam vel ex quis sem eleifend cursus. Sed tristique neque quis lorem cursus feugiat. Sed pharetra sollicitudin ante at scelerisque. Suspendisse potenti. Sed placerat ornare pretium. Aliquam at dui auctor, egestas leo vitae, blandit elit. Suspendisse ante dolor, pharetra vitae porta vel, convallis sed risus. Nullam tincidunt commodo arcu ut consectetur. Nam et mauris id libero commodo consectetur eu vel ligula. Nunc vel massa ante. Phasellus dictum interdum neque. Aenean suscipit sagittis aliquet.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:277,
        question:"Phasellus quis dictum enim, sed pharetra leo?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.*", correct:true},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Phasellus quis dictum enim, sed pharetra leo. In hac habitasse platea dictumst. Duis vel erat pharetra, rhoncus nisi non, imperdiet metus. Quisque ac ante pretium, rutrum eros nec, condimentum lectus. Fusce sapien elit, varius vel elementum id, tincidunt id dolor. Integer vulputate felis tortor, sit amet rutrum purus blandit et. In id massa dolor. Vivamus faucibus scelerisque elit ac luctus.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:278,
        question:"Nullam tincidunt nunc in felis hendrerit, non pharetra leo fringilla?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Nullam tincidunt nunc in felis hendrerit, non pharetra leo fringilla. Sed felis nunc, ornare ut urna nec, suscipit fringilla purus. Praesent semper tellus est, tincidunt condimentum eros pellentesque a. Pellentesque tristique euismod turpis et rutrum. Aliquam erat volutpat. Nulla condimentum libero non est rutrum, gravida viverra orci aliquet. Fusce accumsan pulvinar hendrerit. Vestibulum eget libero vel urna iaculis tempus in nec metus. Suspendisse vel ullamcorper dolor. Integer viverra nibh nisl, in rutrum dolor vehicula sit amet. Cras cursus, lectus et egestas mattis, eros nunc pellentesque velit, eget accumsan enim massa vel eros. Vivamus ut erat sit amet eros blandit ultrices a vel leo. Curabitur volutpat tellus elementum erat lacinia, scelerisque maximus nibh egestas. Proin porta non enim id ornare.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:279,
        question:"Nunc aliquet vitae nisl quis ullamcorper?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:2,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.*", correct:true}],
        explanation:"Nunc aliquet vitae nisl quis ullamcorper. Suspendisse leo tortor, aliquet eu feugiat ut, maximus a enim. Nulla sodales convallis dui, et aliquet massa posuere sit amet. Duis facilisis vitae turpis non imperdiet. Ut ornare purus vel lacinia porta. Sed pellentesque urna pulvinar, sollicitudin risus eu, sodales nisi. Nulla posuere purus eget dolor blandit bibendum. Cras pellentesque mauris vel elit tincidunt eleifend. Sed neque sem, posuere vitae quam vel, convallis rutrum elit. Duis rhoncus, augue eu tincidunt dignissim, massa arcu egestas augue, ac imperdiet tellus est eget lorem. Proin mollis imperdiet tincidunt. Mauris vitae elementum nisi, quis rutrum tortor.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:280,
        question:"Nullam sed justo quam?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.*", correct:true},{id:2,answer:"Sed commodo ante ac pulvinar molestie.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Nullam sed justo quam. Morbi eget magna quam. Nam tempor quam mi. In vehicula urna sit amet congue condimentum. Donec eget auctor erat. Aenean at lorem et ligula maximus aliquet sed sit amet nulla. Quisque eu quam at ligula blandit vehicula. Suspendisse sed felis eros. Suspendisse quis quam non turpis eleifend tempor eget aliquam arcu. Etiam laoreet et enim nec sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla commodo bibendum nisi, eu ultricies arcu. In sollicitudin lectus mi, vel lobortis lorem ornare at. In accumsan varius odio, in euismod nisi posuere id. Phasellus laoreet, metus quis commodo aliquam, diam urna vehicula lacus, quis tempus erat dui id arcu.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:281,
        question:"Sed vitae dolor sed risus aliquet convallis?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Ut id elit ac eros tempus aliquam.", correct:false}],
        explanation:"Sed vitae dolor sed risus aliquet convallis. Duis vitae odio eu elit efficitur egestas. Morbi lobortis dolor quis dui consequat suscipit. Aliquam fermentum felis id malesuada ultricies. Vestibulum porttitor posuere sem, sit amet consequat mi fringilla in. Cras ac sapien fermentum, sagittis orci et, lobortis magna. Curabitur commodo nunc ut diam iaculis, eu egestas quam tempor. Pellentesque a dictum orci.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:282,
        question:"Donec finibus enim a metus varius pulvinar?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.", correct:false},{id:3,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.*", correct:true}],
        explanation:"Donec finibus enim a metus varius pulvinar. Duis scelerisque diam sit amet lacinia molestie. Etiam scelerisque turpis id nulla gravida mattis eget ac enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dapibus nisi sed tellus pellentesque, eget tempor magna luctus. Nullam aliquet volutpat scelerisque. In hac habitasse platea dictumst. Maecenas vitae est id lorem placerat dapibus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:283,
        question:"Sed sed tristique magna?",
        answers:[{id:0,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:3,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true}],
        explanation:"Sed sed tristique magna. Mauris convallis massa ac feugiat vulputate. Aliquam porttitor quis ligula id iaculis. In consequat vulputate risus, ut pharetra diam imperdiet vitae. Pellentesque tempus nibh a leo lacinia, non lacinia mauris luctus. Duis gravida felis sit amet odio aliquam, at laoreet nisi gravida. Aenean porta lacus sit amet lobortis lacinia. Aliquam blandit quam et elit aliquet, et maximus leo blandit. Donec sit amet turpis pharetra, dictum lorem in, rutrum elit. Praesent ornare mauris non metus ultricies aliquet. Proin arcu dolor, gravida nec porttitor ut, mollis sit amet mauris. Aenean rhoncus est mi, a efficitur dui gravida sed. Sed eget efficitur magna, in porta neque.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:284,
        question:"Nam vehicula lorem sit amet nunc efficitur faucibus?",
        answers:[{id:0,answer:"Praesent faucibus nunc sit amet euismod malesuada.*", correct:true},{id:1,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.", correct:false},{id:3,answer:"Donec nec nisi ut enim egestas finibus.", correct:false}],
        explanation:"Nam vehicula lorem sit amet nunc efficitur faucibus. Aenean auctor ante augue, et porta metus cursus sit amet. Integer viverra tortor erat, eget facilisis velit mollis quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ornare tincidunt lorem et finibus. Curabitur fringilla vulputate consectetur. Nunc egestas nunc lacus. Cras ut consequat turpis. Duis pharetra et ipsum sit amet auctor. Ut felis nisl, varius vitae lacus eget, maximus condimentum augue.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:285,
        question:"In rhoncus diam quis sagittis congue?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true}],
        explanation:"In rhoncus diam quis sagittis congue. Fusce hendrerit mauris eget ante maximus, eu faucibus lorem porttitor. Duis facilisis placerat ornare. Suspendisse porttitor vulputate tortor, et pretium nunc posuere sed. Suspendisse id egestas lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum convallis lectus efficitur mattis fringilla. Nullam eu nunc in arcu porttitor ultricies et vel tellus. Donec nulla nibh, euismod vitae enim in, sodales pulvinar ante. Integer euismod, elit nec cursus imperdiet, nisl arcu sollicitudin ex, eget vestibulum magna dolor non neque. Pellentesque interdum ex mauris. Nullam laoreet volutpat viverra. Phasellus sed metus quis quam pulvinar vehicula vitae id neque. Sed laoreet nibh ut risus volutpat tempus.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:286,
        question:"Nulla convallis dignissim tellus?",
        answers:[{id:0,answer:"Nam sed dolor vitae dolor cursus dapibus ac sit amet diam.", correct:false},{id:1,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:2,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.", correct:false}],
        explanation:"Nulla convallis dignissim tellus. Nulla sed dolor venenatis, sagittis ex a, faucibus justo. Duis lectus purus, facilisis quis feugiat vitae, aliquam nec lectus. Nullam vulputate nec ligula ut egestas. Sed iaculis nunc eu metus scelerisque fermentum. Nulla dignissim auctor quam sit amet blandit. Nunc eget facilisis dui, eu lacinia ligula. Ut lectus justo, cursus ac turpis id, semper sagittis purus. Vivamus dui risus, vehicula a lacinia et, mattis vel mauris. Fusce faucibus dui eu nisl bibendum convallis. Mauris consequat nisl enim, id pellentesque purus malesuada vel. Donec porttitor volutpat fringilla. Nunc sollicitudin facilisis hendrerit. Suspendisse semper quam a laoreet euismod.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:287,
        question:"Nunc eleifend laoreet mi, et pretium purus lobortis quis?",
        answers:[{id:0,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false},{id:1,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false}],
        explanation:"Nunc eleifend laoreet mi, et pretium purus lobortis quis. Pellentesque porta suscipit tempor. Suspendisse pulvinar pretium volutpat. Morbi orci tortor, tempor ac metus vel, lacinia auctor nibh. Praesent finibus dapibus augue, in congue ex ornare eu. Mauris mattis est sed nisl efficitur posuere. Proin ornare vel lorem quis scelerisque. Aenean quis nulla venenatis, posuere justo fermentum, condimentum magna. Nam ultricies viverra elit, eget suscipit tellus cursus sit amet.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:288,
        question:"Duis et ante vel massa efficitur luctus sed sed ante?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.*", correct:true},{id:1,answer:"Donec id eros nec tortor gravida posuere.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Duis et ante vel massa efficitur luctus sed sed ante. Maecenas a nulla vel dui pretium aliquam. Cras vehicula massa id varius posuere. Nam non iaculis orci. Vestibulum hendrerit egestas risus eget accumsan. Vivamus eu lectus eu mi tempus laoreet. Fusce hendrerit ornare mi sollicitudin consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ornare posuere metus, eu malesuada neque imperdiet convallis. Sed tempus leo odio, vel auctor augue rutrum et. Vestibulum ac arcu id libero viverra bibendum. Aenean eget massa quis enim commodo imperdiet.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:289,
        question:"Suspendisse potenti?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.*", correct:true},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Suspendisse potenti. Sed pulvinar lectus sem, nec gravida mauris tempus a. Donec porta lectus at velit rhoncus, a vulputate dolor fermentum. Maecenas dolor quam, euismod ut sem vitae, cursus consectetur libero. Pellentesque at elit felis. Vestibulum a eleifend nisi. Proin a tortor semper leo commodo egestas. Praesent iaculis vehicula urna. Donec imperdiet porta varius. Donec erat sapien, elementum eu ex ut, bibendum efficitur augue. Maecenas maximus felis ipsum, id dapibus erat iaculis ut. Pellentesque convallis elit non mauris viverra, ac lobortis neque cursus. Etiam consequat, lorem ut malesuada aliquam, arcu dui lobortis nulla, non viverra nibh arcu eget mi. Proin ac tempus urna. Proin quis turpis maximus, hendrerit ex non, ultricies urna.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:290,
        question:"Donec sagittis justo ut nisi maximus porttitor?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:2,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.*", correct:true},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false}],
        explanation:"Donec sagittis justo ut nisi maximus porttitor. Fusce ullamcorper quis lectus in volutpat. Vestibulum ut nulla tristique, posuere risus eget, varius ipsum. Duis maximus ipsum ac gravida interdum. Mauris ante nisi, pretium ut nibh vitae, consequat placerat diam. Pellentesque ornare tortor eleifend, finibus leo non, dictum lacus. Vivamus congue elit non efficitur elementum. Curabitur finibus consequat scelerisque. Nulla facilisi. In vitae consequat velit, id sodales ex. Nullam cursus ultricies luctus. Fusce et viverra nisl. Maecenas mollis enim diam, nec hendrerit libero consequat vitae.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:291,
        question:"Nullam ultrices facilisis orci, id consequat erat ultrices quis?",
        answers:[{id:0,answer:"Maecenas imperdiet neque sed nisl volutpat, a vestibulum nisl cursus.*", correct:true},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:2,answer:"Curabitur posuere mi quis elit efficitur ultrices.", correct:false},{id:3,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false}],
        explanation:"Nullam ultrices facilisis orci, id consequat erat ultrices quis. Aliquam erat volutpat. Quisque lacinia lobortis ex, vel auctor enim suscipit vitae. Nam sit amet tincidunt urna, at commodo tellus. Donec libero dolor, condimentum quis vulputate ac, convallis sed nisi. Duis efficitur molestie velit eu rutrum. Fusce eget porta lorem, ac ultrices nunc. Suspendisse ornare vehicula odio, non laoreet augue viverra non. Etiam ex lacus, euismod facilisis mi nec, posuere sagittis augue. Nullam nisl elit, pulvinar vel commodo in, porta ac tortor. Phasellus sed convallis sapien. Aliquam non bibendum felis. Mauris feugiat orci eu vulputate accumsan. Fusce eu tellus sapien.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:292,
        question:"Donec ac lorem pharetra, iaculis urna non, varius ligula?",
        answers:[{id:0,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"In in metus non urna placerat varius et vitae orci.*", correct:true},{id:3,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false}],
        explanation:"Donec ac lorem pharetra, iaculis urna non, varius ligula. Sed eleifend congue varius. Nullam varius massa et convallis condimentum. Vivamus mi arcu, molestie sit amet dui ut, viverra laoreet nisi. Curabitur non libero sagittis, laoreet nisi sed, sollicitudin ex. Nullam posuere justo dignissim neque consequat egestas. Aliquam placerat auctor gravida. Pellentesque venenatis tempor felis, lacinia sodales nulla laoreet vitae. Phasellus eu vulputate leo. Etiam tristique condimentum elementum. Integer luctus magna nunc, nec vulputate massa interdum eu. Ut non sapien ante. Nullam venenatis malesuada enim, sed laoreet turpis aliquet ac. Vestibulum suscipit justo vel elit pellentesque, vitae aliquam dui feugiat. Nam at nibh sapien.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:293,
        question:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus?",
        answers:[{id:0,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false},{id:1,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.*", correct:true},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam convallis semper tempor. Maecenas volutpat elementum facilisis. Aliquam iaculis sapien in mi tempor accumsan. Donec laoreet tortor eu ex egestas, sed laoreet quam mollis. Pellentesque accumsan consequat risus eget mollis. Suspendisse eget magna nec odio tincidunt dapibus et eu libero. Praesent at viverra massa, at eleifend ante. Aliquam erat volutpat. Quisque semper sem id sem molestie, sed blandit nulla elementum. Duis nec rutrum nisi. Nam laoreet ante nunc.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:294,
        question:"Vivamus lectus sem, fermentum eget mauris sed, faucibus pretium purus?",
        answers:[{id:0,answer:"Morbi eget purus quis justo bibendum tempus at ut elit.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.*", correct:true},{id:2,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:3,answer:"Nunc placerat libero quis mattis pulvinar.", correct:false}],
        explanation:"Vivamus lectus sem, fermentum eget mauris sed, faucibus pretium purus. Duis iaculis tortor id risus tempus cursus. Suspendisse volutpat metus vitae efficitur congue. Morbi quis magna eget purus sagittis tempor. Etiam condimentum risus neque, id laoreet risus efficitur eu. Curabitur non enim non tortor fringilla feugiat. Phasellus vulputate lacus non nisl ornare dapibus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:295,
        question:"Nullam scelerisque imperdiet neque id tincidunt?",
        answers:[{id:0,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:1,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:2,answer:"Duis id lectus commodo, tristique lorem eu, iaculis est.*", correct:true},{id:3,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false}],
        explanation:"Nullam scelerisque imperdiet neque id tincidunt. Quisque eget nulla sem. Vivamus lectus enim, lacinia et dignissim eget, rhoncus non libero. Quisque risus erat, suscipit sit amet ipsum quis, faucibus tristique augue. Ut ligula tellus, vehicula ut justo et, efficitur eleifend eros. Sed laoreet, eros non fermentum semper, massa libero commodo neque, id interdum sapien purus eget ipsum. Etiam quis augue tempor, bibendum lacus id, scelerisque diam. Nullam molestie arcu vitae viverra fermentum. Aenean convallis arcu nibh, eu convallis justo ullamcorper in.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:296,
        question:"Sed efficitur gravida tincidunt?",
        answers:[{id:0,answer:"Donec nec nisi ut enim egestas finibus.", correct:false},{id:1,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:2,answer:"Donec tincidunt lacus ac dapibus laoreet.", correct:false},{id:3,answer:"Curabitur posuere mi quis elit efficitur ultrices.*", correct:true}],
        explanation:"Sed efficitur gravida tincidunt. Cras malesuada massa egestas, malesuada sem in, lacinia turpis. In sed bibendum leo, viverra efficitur sapien. Pellentesque varius tincidunt tortor, viverra cursus erat euismod vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas accumsan ligula id neque bibendum, et gravida est sodales. Phasellus id arcu ac nisi consectetur convallis. Praesent consectetur eros quis consectetur ultricies. Mauris a sapien sed enim finibus tincidunt ut a libero. Nulla lacus nulla, interdum vitae malesuada non, tempus id nisl. Nam lectus dolor, vulputate id purus at, rutrum ornare dolor. In dolor ante, ultrices a mauris ut, tempus ornare dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:297,
        question:"Pellentesque libero odio, aliquam in nisi id, facilisis egestas nulla?",
        answers:[{id:0,answer:"Cras quis erat eget nulla vestibulum posuere at quis purus.", correct:false},{id:1,answer:"Sed quis ante auctor, rhoncus tortor et, feugiat libero.", correct:false},{id:2,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:3,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true}],
        explanation:"Pellentesque libero odio, aliquam in nisi id, facilisis egestas nulla. Fusce vestibulum, augue non cursus posuere, mi libero rhoncus nunc, non egestas nulla nunc non metus. Phasellus id ex sit amet massa pulvinar scelerisque. In pretium, nulla ut aliquam condimentum, nunc ligula ultricies sapien, suscipit tristique augue enim at neque. Fusce ornare neque tincidunt neque accumsan, in tincidunt metus ullamcorper. Aenean consequat laoreet massa, nec pellentesque eros tristique eget. Etiam ac odio ac odio varius semper. Aenean massa metus, scelerisque id tempor id, volutpat elementum erat. Etiam non nisl quis ipsum efficitur ultrices eu eget lectus. Duis tincidunt semper dolor, id semper libero hendrerit at.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:298,
        question:"Aliquam sed arcu justo?",
        answers:[{id:0,answer:"Fusce consequat nibh sed pretium semper.", correct:false},{id:1,answer:"Quisque finibus lectus a augue consectetur, et pharetra nunc pharetra.", correct:false},{id:2,answer:"Ut id elit ac eros tempus aliquam.*", correct:true},{id:3,answer:"Phasellus et eros id mi porttitor viverra nec a lectus.", correct:false}],
        explanation:"Aliquam sed arcu justo. Cras non vulputate turpis, id venenatis arcu. Nulla fermentum, sapien in vestibulum imperdiet, nisl arcu commodo lectus, ut feugiat neque nunc sollicitudin erat. Aliquam mauris enim, auctor vel rhoncus molestie, rhoncus eu nisi. Etiam blandit vehicula felis vel finibus. Vivamus dictum aliquet magna ac eleifend. Vivamus et arcu efficitur ipsum consequat suscipit. Donec varius ante vel libero iaculis, sit amet convallis lectus eleifend. Nam sed sapien venenatis, mollis nisi sed, luctus nibh. Fusce luctus non dui id efficitur. Suspendisse sit amet malesuada elit. Morbi eu volutpat est, vel efficitur urna.",
        source:"Wikipedia",
        domain:"Chapter 4"
        },
        {
        id:299,
        question:"Cras ut suscipit diam, sed eleifend tortor?",
        answers:[{id:0,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:1,answer:"Ut cursus tortor blandit tincidunt interdum.", correct:false},{id:2,answer:"Praesent faucibus nunc sit amet euismod malesuada.", correct:false},{id:3,answer:"Donec id eros nec tortor gravida posuere.*", correct:true}],
        explanation:"Cras ut suscipit diam, sed eleifend tortor. Praesent commodo leo sed nibh molestie, sed vehicula risus imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sed interdum ipsum. Morbi id nibh neque. Etiam sodales sapien sed dolor mattis, quis pellentesque sem dictum. Morbi placerat velit vel mauris viverra consequat. In sit amet ligula eget lacus dictum euismod a vel leo. Phasellus vulputate consectetur ligula at commodo. Mauris vitae condimentum neque. Sed pulvinar tellus sed sem eleifend consectetur. Nunc eu magna ut magna ultricies tempus.",
        source:"Reddit",
        domain:"Chapter 4"
        },
        {
        id:300,
        question:"Praesent dignissim velit nunc, at blandit magna ultrices et?",
        answers:[{id:0,answer:"Sed commodo ante ac pulvinar molestie.*", correct:true},{id:1,answer:"Ut id elit ac eros tempus aliquam.", correct:false},{id:2,answer:"Aenean ac est euismod, accumsan tortor vitae, aliquam risus.", correct:false},{id:3,answer:"Fusce sed libero ac sem pellentesque pretium.", correct:false}],
        explanation:"Praesent dignissim velit nunc, at blandit magna ultrices et. Fusce et malesuada odio. Etiam sollicitudin erat sed nisl finibus dapibus. Aenean condimentum ligula lacinia sem bibendum, eget finibus justo tempor. Praesent id urna ullamcorper, commodo dolor at, accumsan nunc. Donec nec eros sit amet elit tincidunt porttitor. Nam finibus, purus vitae bibendum cursus, lorem ligula viverra nulla, eget convallis lorem nisi eget sem. Suspendisse viverra, enim a sodales placerat, eros ipsum ullamcorper nulla, ut porttitor mi nunc vel velit. Integer in ligula non nulla vestibulum feugiat vel ut leo. Aliquam quis enim tortor. Sed lectus dui, auctor non erat quis, accumsan semper mauris. Nunc vehicula ex vel mi auctor posuere. ",
        source:"Wikipedia",
        domain:"Chapter 4"
        }
];