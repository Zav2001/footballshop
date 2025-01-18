const mongoose = require("mongoose");

const REQUIRED_VALIDATION_MESSAGE = "{PATH} is required";

let powerSchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.Types.String },
  name: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: [true, "power already exists."],
  },
  weight: {
    type: mongoose.Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  description: { type: mongoose.Schema.Types.String },
  price: {
    type: mongoose.Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  images: {
    type: mongoose.Schema.Types.Array,
  },
  likes: [{ type: mongoose.Schema.Types.String }],
  reviews: [],
});

let power = mongoose.model("power", powerSchema);

module.exports = power;
module.exports.seedpowers = () => {
  power.find({}).then((powers) => {
    if (powers.length > 0) return;

    const powersSeed = [
      {
        brand: "Puma",
        name: "Puma Future 7 Ultimate Firm Ground Football Boots",
        description:
"Պատրաստվե՛ք բարձրացնել ձեր խաղը Puma Future 7 Ultimate Form Ground/Artificial Ground ֆուտբոլային կոշիկներով: Վերամշակված FUZIONFIT360 վերնաշապիկով այս կոշիկներն առաջարկում են հաջորդ սերնդի հարմարվողական տեղավորում, որը համատեղում է PWRPRINT, PWRTAPE, լրացուցիչ առաձգական տրիկոտաժը և փափուկը: Երկկողմանի ցանց, որի վերին մասում կա առնվազն 20% վերամշակված նյութ, ցուցադրում է Puma-ի հավատարմությունը, որը հագեցած է առաջադեմ գամասեղով, ապահովում է աննման ձգողականություն և արագաշարժ մանևրներ Կրունկների միկրո ծակոտկեն լցոնում, այն պահում է ձեր ոտքը բարձված և հարմարավետ գնդակի հետ շփման հիմնական հատվածների վրա, իսկ ժանյակով փակումը ապահովում է թեթև, շարժական ներբան NanoGrip տեխնոլոգիան ապահովում է, որ ձեր ոտքը մնում է կայուն՝ կանխելով սայթաքումները և առավելագույնի հասցնելով ձեր կատարողականությունը Դիզայնը ավարտելու համար կոշիկները ներկայացնում են խորհրդանշական Puma cat-ի լոգոն և ապագա գրաֆիկա՝ ապրանքանիշի ճանաչման համար: Խնդրում ենք ծանոթանալ արտադրանքի պիտակին՝ ամբողջական կազմի և խնամքի ցուցումների համար։",
        price: 79900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20335102_l_a3.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20335102_l.jpg",
          "https://www.sportsdirect.com/images/products/20335102_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20335102_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20335102_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20335102_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20335102_l_a5.jpg",
        ],
      },
      {
        brand: "Nike",
        name: "Nike Mercurial Superfly 9 Elite Firm Ground Football Boots",
        description:
"Պատրաստվե՛ք բարձրացնել ձեր խաղը Nike Mercurial Superfly 9 Elite Firm Ground ֆուտբոլային կոշիկներով: Վերևը, պատրաստված Vaporposite+-ից, միախառնում է կպչուն ցանցը պրեմիում նյութի հետ՝ ապահովելով գնդակի օպտիմալ կառավարում նույնիսկ բարձր արագությամբ: Ֆուտբոլի հետ միասին: - Հատուկ 3/4 Zoom Air միավոր, այն ապահովում է լրացուցիչ զսպանակավոր զգացողություն, որը ձեզ առաջ է մղում Բարակ, բայց ամուր նյութից պատրաստված արագության վանդակը, առանց ծանրաբեռնելու ձեր ոտքը: Բազմակողմանի ձգում, որը հնարավորություն է տալիս արագորեն շարժվել դաշտի վրայով The Flyknit նյութը փաթաթվում է ձեր կոճին՝ ապահովելով փափուկ և առաձգական գործվածք, որն ապահովում է մատների ուրվագծային տուփ և բարելավված կրունկների արգելափակում: Դիզայնը ամբողջացնելու համար Mercurial-ի նրբագեղ դետալները և Nike-ի խորհրդանշական շունչը ոճ են հաղորդում ձեր կատարողականությանը, խնդրում ենք դիմել ապրանքի պիտակին՝ ամբողջական կազմի և խնամքի հրահանգների համար:",
        price: 74900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20102069_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20102069_l.jpg",
          "https://www.sportsdirect.com/images/products/20102069_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20102069_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20102069_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20102069_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20102069_l_a5.jpg",
        ],
      },
      {
        brand: "Adidas",
        name: "Adidas 24 Predator Elite Laceless Firm Ground Football Boots",
        description:
"Պատրաստվե՛ք ձեր խաղը բարձրացնելու adidas Predator Elite Laceless Firm Ground ֆուտբոլային կոշիկներով: Անկախ նրանից, թե դուք պայքարում եք դրա հետ բարձր մրցակցային խաղում կամ վայելում եք ընկերական խաղ ընկերների հետ, այս կոշիկները կատարյալ միջոց են ձեր խաղը հաջորդ մակարդակ բարձրացնելու համար: Ստեղծված HybridTouch 2.0 առանց ժանյակավոր վերնամասով, այս կոշիկներն ապահովում են անթերի տեղավորում, որը թույլ է տալիս առավելագույն վերահսկողություն և շարժունություն խաղադաշտում: Primeknit օձիքով այս կոշիկներն ապահովում են ամուր և աջակցող տեղավորում՝ միաժամանակ ապահովելով օպտիմալ հարմարավետություն խաղադաշտում: Նախագծված ուժեղ բռնելու և ճշգրիտ կրակոցներ անելու համար՝ Strikeskin ռետինե լողակները ռազմավարականորեն տեղակայված թույլ են տալիս սանձազերծել կրակելու ձեր վարպետությունը: ControlFrame 2.0 արտաքին ներբանը, որն օժտված է կրունկների արտաքին հաշվիչով, ապահովում է դինամիկ ձգում և անսասան կայունություն՝ թույլ տալով ձեզ վերահսկել խաղը: Դիզայնն ավարտելու համար խորհրդանշական կողային 3 գծերը ցուցադրում են adidas-ի հավատարմությունը գերազանցության և նորարարության նկատմամբ: Բաղադրությունը՝ Վերին/Աստառը՝ Սինթետիկ. Տակացու՝ տեքստիլ։ Հետևեք խնամքի հրահանգներին:",
        price: 69900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20367440_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20367440_l.jpg",
          "https://www.sportsdirect.com/images/products/20367440_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20367440_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20367440_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20367440_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20367440_l_a5.jpg",
        ],
      },
      {
        brand: "Adidas",
        name: "Adidas X Crazyfast Elite Firm Ground Football Boots",
        description:
"Պատրաստվե՛ք ոճով տիրել խաղադաշտում adidas X Crazyfast Elite Firm Ground ֆուտբոլային կոշիկներով: Ունենալով PRIMEKNIT օձիք, այն համատեղում է ոճը, ուժը և հարթ հարմարավետությունը՝ ապահովելու համար, որ դուք կարող եք շարժվել առանց շեղումների: Այս կոշիկները պատրաստված են Առնվազն 20% վերամշակված բովանդակություն, որը ցույց է տալիս ապրանքանիշի հավատարմությունը կայունությանը վանդակը, ածխածնային կրունկի կողպեքը և կաղապարված կայուն լողակները, այս կոշիկները միասին աշխատում են՝ նվազագույնի հասցնելու շարժումը և առավելագույնի հասցնելու հարմարավետությունը կրունկի ներսում նույնիսկ բարձր արագության դեպքում: Դիզայնը ավարտելու համար խորհրդանշական 3 գծերը և Crazyfast լոգոն ցուցադրվում են կոշիկների կողքին՝ ապրանքանիշի ճանաչման համար: Հետևեք խնամքի հրահանգներին։",
        price: 64900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20341019_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20341019_l.jpg",
          "https://www.sportsdirect.com/images/products/20341019_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20341019_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20341019_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20341019_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20341019_l_a5.jpg",
        ],
      },
      {
        brand: "Nike",
        name: "Nike Phantom GX II Elite LV8 Firm Ground Boots",
        description:
"Պատրաստվե՛ք տիրել դաշտում Nike Phantom Luna II Elite LV8 FG ֆուտբոլային կոշիկներով: Նախագծված են փոխանցման հսկողության և հարվածների ճշգրտության համար, այս կոշիկների երկրորդ սերունդը բարձրացնում է ձեր հմտությունները նոր բարձունքների վրա: Վերին մասը պատրաստված է բարելավված Flyknit մանվածքից: Տարբեր հյուսվածքներով, որոնք ապահովում են աներևակայելի փափուկ ծածկույթ և ուժեղացված բռնում: Հատկանշվում է մատնահետքի թարմացված հյուսվածք, ցածր կտրվածքով մանյակ և ժանյակավոր փակում, այս կոշիկներն առաջարկում են և՛ ոճ, և՛ ֆունկցիոնալություն Այս կոշիկները ձեր ոտքը ամուր փաթաթված են պահում և ամբողջովին անջրանցիկ են պահում տարբեր գամասեղների համադրությամբ՝ այն ապահովում է բացառիկ ձգողականություն և անխափան պտույտ՝ երեք կլորացված եզրերով, ռազմավարականորեն տեղադրված են կայունացնող կամուրջով Մաքսիմալ կայունություն և շարժունություն Դիզայնը լրացնելու համար կողքի վրա գտնվող խորհրդանշական առանձնահատկությունները՝ ապրանքանիշի ճանաչման համար, խնդրում ենք դիմել արտադրանքի պիտակին՝ ամբողջական կազմի և խնամքի հրահանգների համար:",
        price: 67900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20359015_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20359015_l.jpg",
          "https://www.sportsdirect.com/images/products/20359015_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20359015_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20359015_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20359015_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20359015_l_a5.jpg",
        ],
      },
      {
        brand: "Puma",
        name: "Puma Future Ultimate Soft Ground Football Boots",
        description:
"Պատրաստվեք ոճով նվաճել խաղադաշտը Puma Future Ultimate Soft Ground ֆուտբոլային կոշիկներով: FUZIONFIT360 վերնամասը համատեղում է մշակված երկակի ցանցը, առաձգական տրիկոտաժը և լրացուցիչ PWRTAPE աջակցությունը, ինչը ձեզ տալիս է հարմարավետության և կայունության կատարյալ համադրություն: 3D հյուսվածքներով ռազմավարականորեն տեղադրված: Հիմնական կոնտակտային գոտիներում ձեր գնդակի բռնումը և կառավարումը չի զիջում ոչ մեկին, ինչը ձեզ հնարավորություն կտա խաղալ փոխելու խաղերը, որոնք պատրաստված են գերթեթև Peba հիմքի նյութից, այս կոշիկներն առաջարկում են գերազանց հարմարավետություն՝ թույլ տալով կենտրոնանալ բացառապես ձեր կատարողականի վրա: Կրունկի միկրո ծակոտկեն լցոնումն ապահովում է կողպված կրունկը, մինչդեռ NanoGrip տեխնոլոգիայով շարժական գուլպաները պաշտպանում են ձեր ոտքը և կանխում են սահելը: կոճ առանց խախտելու ճկունությունը Ունի երկակի խտության դինամիկ շարժման համակարգ, այն առաջարկում է ուժեղացված ձգողականություն և ճկունություն, ինչը թույլ է տալիս հեշտությամբ նավարկել խաղադաշտը ճշգրտությամբ: Թեթև TPU ներբանը հագեցած է մետաղական ամրացված գամասեղներով՝ ապահովելով բացառիկ կայունություն փափուկ գետնի մակերեսների վրա: Դիզայնը ավարտելու համար Puma Cat պատկերանշանը առջևի և կրունկի վրա ցույց է տալիս ապրանքանիշի հավատարմությունը գերազանցությանը: Բաղադրությունը՝ Վերին մասը՝ 74,49% Սինթետիկ, 25,51% Տեքստիլ։ Աստիճան՝ 100% սինթետիկ։ Գուլպա՝ 100% Տեքստիլ: Տակացու՝ 100% սինթետիկ: Հետևեք խնամքի հրահանգներին",
        price: 59900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/19302718_l_a3.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/19302718_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/19302718_l.jpg",
          "https://www.sportsdirect.com/images/products/19302718_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/19302718_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/19302718_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/19302718_l_a5.jpg",
        ],
      },
      {
        brand: "Nike",
        name: "Nike Mercurial Vapor Elite Firm Ground Football Boots",
        description:
"Nike Mercurial Vapor Elite Firm Ground ֆուտբոլային կոշիկները հմտորեն նախագծված են Zoom Air միավորով, որը ներկառուցված է ափսեի մեջ, որն օգնում է բարձրացնել ճկունությունը, որպեսզի ձեր առաջին հպումը միշտ լինի ձեր լավագույնը: Կաղապարված շևրոնային գամասեղները ապահովում են մեծ ձգողականություն և պայթյունավտանգ արագություն, մինչդեռ Nike Swoosh բրենդինգը և Mercurial դետալավորումն ավելացնում են ավարտական շոշափումը։",
        price: 99900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/26311503_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/26311503_l.jpg",
          "https://www.sportsdirect.com/images/products/26311503_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/26311503_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/26311503_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/26311503_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/26311503_l_a5.jpg",
        ],
      },
      {
        brand: "Adidas",
        name: "Adidas Copa Pure II+ Firm Ground Football Boots",
        description:
"Պատրաստվե՛ք խաղադաշտում ձեր իսկական ներուժը բացահայտելու adidas-ի «Copa Pure II+» ամուր գրունտային ֆուտբոլային կոշիկներով: Պատրաստված է Fusionskin վերնամասով, հապտիկ շեշտադրումները նախագծված են ուժեղացված փափուկ հպման և բացառիկ դիմացկունության համար՝ թույլ տալով կատարել ճշգրիտ փոխանցումներ և հզոր: Հեշտությամբ արված նկարներ, որոնք պատրաստված են առնվազն 20% վերամշակված նյութերից, այն ցուցադրում է կայունության հանդեպ հավատարմությունը՝ նախագծված Primeknit օձիքը ապահովում է աջակցող պարկ՝ փաթաթելով ձեր ոտքը թեթև բարձիկով Կոշիկները ապահովում են ձեր ոտքերի վրա թեթև մնալը, բարձրացնելով ձեր շարժունությունը և արագությունը. adidas-ի լոգոտիպը և 3 գծավոր կողային բրենդը տալիս են համարձակ տեսք խաղադաշտում: Բաղադրությունը՝ սինթետիկ, տեքստիլ: Տակացու՝ սինթետիկ: Հետևեք խնամքի հրահանգներին",
        price: 84900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/19300101_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20353201_l.jpg",
          "https://www.sportsdirect.com/images/products/20353201_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20353201_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20353201_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20353201_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20353201_l_a5.jpg",
        ]
      },
      {
        brand: "Puma",
        name: "Puma Ultra 1.2 FG Football Boots",
        description:
"Այս Puma Ultra 1.2 FG ֆուտբոլային կոշիկները նախագծված են Pebax SpeedUnit արտաքին ներբանով, որը ոգեշնչված է արագ արագացման համար վազող ցայտերով, մինչդեռ GripControl Pro ծածկույթը ուժեղացնում է ձեր առաջին հպումը գնդակի վրա վճռական կառավարելու համար: Կոշիկները ունեն թեթև MATRYXEVO հյուսված: վերին մասը, որը կառուցված է ռեակտիվ Kevlar և Carbon մանվածքներով, հիմնական աջակցության համար, մինչդեռ Nano Grip տեխնոլոգիայով շարժական գուլպաները օգնում են ոտքը կողպել տեղում, իսկ կաղապարված գամասեղները ձեզ տալիս են ձգողականություն, որն անհրաժեշտ է հողի ամուր մակերեսների վրա հաջողության հասնելու համար:",
        price: 68900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20702041_l_a3.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20702041_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20702041_l.jpg",
          "https://www.sportsdirect.com/images/products/20702041_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20702041_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20702041_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20702041_l_a5.jpg",
        ],
      },
      {
        brand: "Puma",
        name: "Puma King .1 Firm Ground Football Boots",
        description:
"Puma King .1 ամուր գրունտային ֆուտբոլային կոշիկները մշակվել են ձեզ հաղթելու համար: Թեթև փափուկ վերնամասը ձեր ոտքի շուրջը փաթաթելով, երկրորդ սերնդի Dynamic Motion System արտաքին ներբանն ապահովում է ձգողականություն և շարժունություն ուղղության անկանխատեսելի փոփոխությունների համար։",
        price: 104900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20342003_l_a3.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20342003_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20342003_l.jpg",
          "https://www.sportsdirect.com/images/products/20342003_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20342003_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20342003_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20342003_l_a5.jpg",
        ],
      },
      {
        brand: "Nike",
        name: "Nike Mercurial Superfly Elite Soft Ground Football Boots",
        description:
"Պատրաստվեք հաղթահարել ձեր մրցակցությունը Nike Mercurial Superfly Elite Soft Ground ֆուտբոլային կոշիկներով: Նախագծված սպորտի էնտուզիաստ սիրահարների համար, ովքեր միշտ պատրաստ են դիմակայել մարտահրավերներին, այս կոշիկները ձեր խաղը կբարձրացնեն հաջորդ մակարդակ: 360-ով: - աստիճանի կոնստրուկցիա, որը սերտորեն փաթաթվում է ձեր ոտքի շուրջը, դուք կունենաք ապահով, երկրորդ մաշկի տեղավորում, որը ձեզ հարմարավետ և ինքնավստահ կպահի նույնիսկ ամենաինտենսիվ համընկնումների ժամանակ Խաղի հաղթական քայլերն անելու համար Flyknit-ը ամբողջ վերևում, որն աջակցում է բոլոր պայմանների կառավարման տեխնոլոգիային, ուժեղացնում է ձեր առաջին հպումը, որը ձեզ անհրաժեշտ է տիրելու խաղադաշտում Ապահովեք առավելագույն ձգողականություն թաց և ցեխոտ մակերևույթների վրա, դուք հեշտությամբ կկարողանաք գերազանցել ձեր հակառակորդներին Խորհրդանշական Nike Swoosh ապրանքանիշը վերջնական տեսք է հաղորդում ձեր խաղադաշտում՝ դարձնելով ձեզ բոլորի ուշադրության կենտրոնում Սինթետիկ՝ Աստառ՝ Սինթետիկ։ Տակացու՝ սինթետիկ։",
        price: 119000,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/19101508_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/19101508_l.jpg",
          "https://www.sportsdirect.com/images/products/19101508_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/19101508_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/19101508_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/19101508_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/19101508_l_a5.jpg",
        ],
      },
      {
        brand: "Puma",
        name: "Puma Ultra Ultimate Firm Ground Football Boots Adults",
        description:
"Բոցավառեք ձեր ֆուտբոլային խաղը և սավառնեք դեպի հաղթանակ Puma Ultra Ultimate ամուր գրունտային ֆուտբոլային կոշիկներով: Որպես ապրանքանիշ, որն ապրում և շնչում է ֆուտբոլը, Puma-ն պարտավոր է բարձրացնել ձեր խաղը խաղադաշտում, և այս կոշիկները բացառություն չեն: Թեթև ULTRAWEAVE վերնամասը: Այս կոշիկները ստեղծում են պարզ ուրվագիծ, որը թույլ է տալիս շարժվել ճկունությամբ և ճշգրտությամբ, ամրացված PWRTAPE-ն ապահովում է հավելյալ կայունություն և աջակցություն, ինչը թույլ է տալիս արագ փոխել ձեր հակառակորդներին SPEEDPLATE ներբանը Ոգեշնչում Puma-ի վազքուղիներից, որն ապահովում է ուժեղացված ձգում և շարժունություն գետնի վրա ամուր մակերևույթների վրա, դուք կարող եք հեշտությամբ նավարկել անկանխատեսելի շարժումները և տեմպերի փոփոխությունները, ինչի պատճառով էլ այս կոշիկները առաջնային են ցուցադրեք հարթ ժանյակով փակում՝ ապահով տեղավորվելու և հավելյալ հարմարավետության համար ամբողջ խաղի ընթացքում: Եվ, իհարկե, Puma ապրանքանիշը լրացնում է տեսքը՝ պատվո նշան, որը նշանակում է, որ դուք կրքոտ ֆուտբոլասերների համաշխարհային համայնքի մի մասն եք: Նախագծված ամուր հողի վրա կատաղի և մրցակցային առիթների համար՝ Puma Ultra Ultimate ամուր հողակոշիկները ձեր ամբողջ ներուժը բացելու ձեր բանալին են: Բաղադրությունը՝ Վերին մասը՝ 95,51% Սինթետիկ, 4,49% Տեքստիլ։ Աստառ՝ 66.40% Տեքստիլ, 33.60% Սինթետիկ: Արտաքին ներբան՝ 100% սինթետիկ: Խնամք. Խնդրում ենք հետևել խնամքի հրահանգներին։",
        price: 64900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20321913_l_a3.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20321913_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20321913_l.jpg",
          "https://www.sportsdirect.com/images/products/20321913_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20321913_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20321913_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20321913_l_a5.jpg",
        ],
      },
      {
        brand: "Adidas",
        name: "Adidas Speedflow+ Sn99",
        description:
"Թեթև և առանց ժանյակավոր կոշիկների, այս ֆուտբոլային կոշիկները դրված են ածխածնային մանրաթելից երկարացված ներդիրով և առջևի երկու լրացուցիչ գամասեղներով՝ լրացուցիչ շարժման և արագացման համար: Adidas PRIMEKNIT-ի հարմարվողական օձիքը միավորվում է ածխածնային կրունկի կողպեքով և կայուն թևերով՝ ապահովելով բարձր բարձրություն: - Արագության կողպեք և աջակցում է նորացված Speedskin-ի վերին մասը, որը պատրաստված է մի շարք վերամշակված նյութերից:",
        price: 79900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20369699_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20369699_l.jpg",
          "https://www.sportsdirect.com/images/products/20369699_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20369699_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20369699_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20369699_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20369699_l_a5.jpg",
        ],
      },
      {
        brand: "Under Armour",
        name: "Under Armour Clone Magnetico Elite 3.0 Firm Ground Football Boots",
        description:
"Under Armour Clone Magnetico Elite 3.0 FG ֆուտբոլային կոշիկներն անխափան փաթաթվում են ձեր ոտքի շուրջը՝ օգնելով առավելագույն հարմարավետության հասնել մինչև վերջին սուլիչը: Սկսած տարբերակիչ 3D տեքստուրային վերնամասից՝ լրացուցիչ ճշգրտության և գնդակի դեմ ձգվելու համար, անջատված ժանյակային համակարգը ստեղծում է ավելի մեծ մակերես, որպեսզի գնդակը հարվածի: Պահպանելով թեթև կառուցվածքը, կոշիկները նախագծված են ներկառուցված կայուն ներբանով և կաղապարված գամասեղներով՝ պայթուցիկ արագության համար խաղադաշտում:",
        price: 64900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20308101_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20308101_l.jpg",
          "https://www.sportsdirect.com/images/products/20308101_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20308101_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20308101_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20308101_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20308101_l_a5.jpg",
        ],
      },
      {
        brand: "Under Armour",
        name: "Under Armour Armour Shadow Elite 2 Firm Ground Football Boots",
        description:
"Under Armour Clone Magnetico Elite 3.0 FG ֆուտբոլային կոշիկներն անխափան փաթաթվում են ձեր ոտքի շուրջը՝ օգնելով առավելագույն հարմարավետության հասնել մինչև վերջին սուլիչը: Սկսած տարբերակիչ 3D տեքստուրային վերնամասից՝ լրացուցիչ ճշգրտության և գնդակի դեմ ձգվելու համար, անջատված ժանյակային համակարգը ստեղծում է ավելի մեծ մակերես, որպեսզի գնդակը հարվածի: Պահպանելով թեթև կառուցվածքը, կոշիկները նախագծված են ներկառուցված կայուն ներբանով և կաղապարված գամասեղներով՝ պայթուցիկ արագության համար խաղադաշտում:",
        price: 67900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20359203_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20359203_l.jpg",
          "https://www.sportsdirect.com/images/products/20359203_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20359203_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20359203_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20359203_l_a4.jpg",
        ],
      },
      {
        brand: "New Balance",
        name: "New Balance Tekela V4+ Pro Low Firm Ground Football Boots",
        description:
"Ձեռք բերեք մեծություն խաղադաշտում New Balance-ի Tekela V4+ Pro Low Firm Ground ֆուտբոլային կոշիկներով: Այս կոշիկները պարծենում են ուժեղացված ձգողականությամբ և ինտուիտիվ տեղավորմամբ և զգացողությամբ, որոնք միավորվում են՝ օպտիմալացնելու յուրաքանչյուր փոխանցում և հարված: Ստեղծված է նորարարական Hypoknit վերնամասով, այն ապահովում է անզուգական ձգում և աջակցություն: Թեթև վերին պատյանով այն ուժեղացնում է գնդակի հպումը և ձեզ վստահություն է հաղորդում չեմպիոնի պես հանդես գալու համար: 3D Molded FuelCell ներբանի և թեթև նեյլոնե ներբանի համադրությունը ապահովում է հարմարավետություն և դինամիկ, շարժիչ զգացողություն յուրաքանչյուր քայլում: Ունենալով բարձրացված 3D դետալներ ոտնաթաթի միջնամասում, ամուր հիմքի տակով և կոնաձև և անկյունագծով եզրագծերով՝ այս կոշիկներն ապահովում են գերազանց բռնում, կայունություն և ճկունություն դաշտում: Ունենալով նրբագեղ, ցածր ուրվագիծ՝ այս կոշիկները վստահություն և ոճ են հաղորդում խաղադաշտում: Դիզայնն ավարտելու համար N խորհրդանշական պատկերանշանը կոշիկների կողային հատկանիշների վրա՝ ապրանքանիշի ճանաչման համար: Խնդրում ենք ծանոթանալ արտադրանքի պիտակին՝ ամբողջական կազմի և խնամքի ցուցումների համար:",
        price: 49900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20359903_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20359903_l.jpg",
          "https://www.sportsdirect.com/images/products/20359903_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20359903_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20359903_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20359903_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20359903_l_a5.jpg"
        ],
      },
      {
        brand: "New Balance",
        name: "New Balance Tekela V4+ Magia Firm Ground Football Boots",
        description:
"Պատրաստվեք վառել ձեր խաղը New Balance-ի Tekela V4+ Magia Firm Ground ֆուտբոլային կոշիկներով: Անկախ նրանից, թե դա ինտենսիվ հանդիպում է, թե խիստ մարզում, այս կոշիկները նախատեսված են ձեր կատարողականությունը նոր բարձունքների բարձրացնելու համար: Ստեղծված HypoKnit վերնամասով, այս կոշիկներն ապահովում են բացառիկ ճկունություն և հենարան՝ ձևավորելով ձեր ոտքը՝ հարմարեցման համար: Այս կոշիկները պարծենում են թեթև ներբանով, որը առավելագույնի հասցնում է էներգիայի փոխանցումը խաղի ընթացքում: Հարմարավետ աստառը և գուլպաների երեսպատումը ապահովում են հարմարավետ տեղավորում՝ թույլ տալով մնալ կենտրոնացած և լավագույնս հանդես գալ: Հեշտ դիզայնի և առանց ժանյակների կառուցվածքի շնորհիվ դուք կարող եք վայելել անթերի և հարմարավետ փորձը խաղադաշտում: Արտաքին ներբանների գամասեղներն ապահովում են բարձր ամրություն ամուր գետնի վրա՝ տալով ձեզ կայունություն և կառավարում արագ և ճշգրիտ մանևրներ կատարելու համար: Դիզայնը ավարտելու համար կողքին դրված N պատկերանշանը ցույց է տալիս բրենդի նվիրվածությունը գերազանցության և նորարարության: Խնդրում ենք ծանոթանալ արտադրանքի պիտակին՝ ամբողջական կազմի և խնամքի ցուցումների համար:",
        price: 62900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20359603_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20359603_l.jpg",
          "https://www.sportsdirect.com/images/products/20359603_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20359603_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20359603_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20359603_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20359603_l_a5.jpg"
        ],
      },
      {
        brand: "New Balance",
        name: "New Balance 442 V2 Academy Firm Ground",
        description:
"Ստեղծված ժառանգությունը համապատասխանում է ժամանակակից կատարողականությանը 442 V2 Academy FG ֆուտբոլային կոշիկներում: Ունենալով կատարյալ հավասարակշռություն ձևի և գործառույթի միջև՝ այս թիկնոցն առանձնանում է պրեմիում դասի սինթետիկ վերնամասով և թեթև TPU ափսեով՝ երկարատև ամրություն ապահովելու համար: Այս ամուր գետնին պատի TPU գամասեղների ծայրերը հատուկ նախագծված են ամուր հողի վրա օգտագործելու համար՝ օգնելու ձեզ օպտիմալացնել ձեր աշխատանքը, իսկ գերհարմարավետ ներքին երեսպատումն անհավանական զգացողություն է հաղորդում արդեն ճկուն տեղավորմանը: Այս թիկնոցը հարգանք է պահանջում։",
        price: 62900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20304603_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20304603_l.jpg",
          "https://www.sportsdirect.com/images/products/20304603_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20304603_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20304603_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20304603_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20304603_l_a5.jpg"
        ],
      },
      {
        brand: "Sondico",
        name: "Sondico Blaze Firm Ground Football Boots",
        description:
"Տղամարդկանց Sondico Blaze Firm Ground ֆուտբոլային կոշիկները կատարյալ են խաղերի և մարզումների համար, որոնք պատրաստված են կոճաձև օձիքով և ժանյակով ամրացմամբ՝ ապահով տեղավորելու համար, մինչդեռ բարձված միջերակն ապահովում է արձագանքող զգացողություն: Կաղապարված գամասեղային ներբանը ֆանտաստիկ կառչում է հանկարծակի պտույտների և կանգառների համար, մինչդեռ վերին մասի հյուսվածքային ծածկույթը օգնում է բարելավել գնդակի հպումը և կառավարումը, որը լրացվում է Sondico ապրանքանիշով կողքից:",
        price: 39900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20800518_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20800518_l.jpg",
          "https://www.sportsdirect.com/images/products/20800518_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20800518_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20800518_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20800518_l_a4.jpg",
          "https://www.sportsdirect.com/images/products/20800518_l_a5.jpg"
        ],
      },
      {
        brand: "Sondico",
        name: "Sondico Storm FG Sn42",
        description:
"Sondico-ն ներկայացնում է Storm Firm Ground Football Boots-ը, որը կատարյալ ուղեկից է խաղի օրը: Սինթետիկ նյութերից պատրաստված դասական ցածր վերնամասով այս կոշիկներն առաջարկում են ոճ և կատարողականություն: Տրիկոտաժե լեզուները և կոճ գուլպաները ապահովում են հարմարավետության լրացուցիչ շերտեր՝ ապահովելով հարմարավետ տեղավորում, որը թույլ է տալիս կենտրոնանալ ձեր խաղի վրա: Կլոր մատները ժանյակավոր ամրացումներով երաշխավորում են անվտանգ ամրացում՝ թույլ տալով արագ շրջադարձեր կատարել վստահորեն: Հյուսվածքային դետալները մանրակրկիտ նախագծված են ձեր գնդակի կառավարումն ուժեղացնելու համար, իսկ հատուկ նախագծված ճարմանդները հատուկ հարմարեցված են կարճ խոտածածկով խաղադաշտերի համար՝ տալով ձեզ վերջնական բռնում և ձգում: Այս կոշիկները ոչ միայն գերազանցում են ֆունկցիոնալությունը, այլև իրենց վառ գույներով: Արտահայտեք ձեր յուրահատուկ ոճը և շքեղություն ավելացրեք ձեր համընկնող տեսքին: Եվ եկեք չմոռանանք խորհրդանշական Sondico ապրանքանիշը, որը որակի և իսկականության խորհրդանիշ է: Անկախ նրանից՝ խաղալով տեղական լիգայում, թե մարզվելով ձեր թիմի հետ՝ Sondico-ի Storm Firm Ground ֆուտբոլային կոշիկներն իդեալական ընտրություն են: Ընդունեք խաղի կիրքը, բարձրացրեք ձեր կատարումը և թողեք ձեր հետքը խաղադաշտում:",
        price: 41900,
        weight: 200,
        image: "https://www.sportsdirect.com/images/products/20803303_l.jpg",
        likes: [],
        reviews: [],
        images: [
          "https://www.sportsdirect.com/images/products/20803303_l.jpg",
          "https://www.sportsdirect.com/images/products/20803303_l_a1.jpg",
          "https://www.sportsdirect.com/images/products/20803303_l_a2.jpg",
          "https://www.sportsdirect.com/images/products/20803303_l_a3.jpg",
          "https://www.sportsdirect.com/images/products/20803303_l_a4.jpg",
        ],
      },
    ];

    power
      .create(powersSeed)
      .then(() => console.log("Seeded boots successfully."))
      .catch((error) => console.log(error));
  });
};
