import { extraPlaces } from "./extraPlaces";

const L = (en, ur, bal) => ({ en, ur, bal });

const corePlaces = [
  {
    slug: "kund-malir",
    category: "beaches",
    image: "/images/kund-malir.jpg",
    name: L("Kund Malir Beach", "کند ملیر ساحل", "کند ملیر ساحل"),
    region: L("Hingol • Lasbela", "ہنگول • لسبیلہ", "ہنگول • لسبیلہ"),
    tag: L("Picnic & swim", "پکنک اور تیراکی", "پکنک و آپ‌بازی"),
    short: L(
      "A wild turquoise beach on the Makran Coastal Highway, often called one of Pakistan's most scenic shores.",
      "مکران ساحلی شاہراہ پر فیروزی پانی والا جنگلی ساحل، پاکستان کے خوبصورت ترین ساحلوں میں شمار ہوتا ہے۔",
      "مکران ساحلی راہ سر فیروزی آپ دار جنگلیں ساحل، پاکستانئے شِرِیں ساحلان نیام تہ اِنت۔"
    ),
    body: L(
      "Kund Malir sits where Hingol National Park meets the Arabian Sea. Travellers stop here on the Karachi–Gwadar drive for swimming, photography and simple picnics. There are few permanent hotels; most visitors camp or use basic huts. Respect turtle nesting seasons and carry waste back to the highway towns.",
      "کند ملیر وہ جگہ ہے جہاں ہنگول نیشنل پارک بحیرہ عرب سے ملتا ہے۔ کراچی سے گوادر کے سفر میں لوگ تیراکی، تصاویر اور سادہ پکنک کے لیے رکتے ہیں۔ مستقل ہوٹل کم ہیں؛ زیادہ تر مہمان کیمپ یا سادہ جھونپڑیاں استعمال کرتے ہیں۔ کچھووں کے موسم کا احترام کریں اور کوڑا واپس شہر لے جائیں۔",
      "کند ملیر اُدا اِنت کہ ہنگول پارک عربی دریا گوں رَند اِنت۔ کراچی تا گوادر سفر تہ مردم آپ‌بازی، عکس و سادہ پکنک بہ رَد رَند اَنت۔ مستقل ہوٹل کم اَنت؛ کیمپ و سادگ کٹ اِنت۔ کَچھو موسمئے احترام کن اِت و آشغال شہر بہ رَد ببر اِت۔"
    ),
  },
  {
    slug: "golden-beach",
    category: "beaches",
    image: "/images/golden-beach.jpg",
    name: L("Golden Beach, Gwadar", "گولڈن بیچ، گوادر", "گولڈن بیچ، گوادر"),
    region: L("Gwadar", "گوادر", "گوادر"),
    tag: L("Sunset shore", "غروب کا ساحل", "روچ‌تراک ساحل"),
    short: L(
      "A long gold-sand strand west of Gwadar city, used for evening walks, family outings and open-sea views.",
      "گوادر شہر کے مغرب میں لمبا سنہری ساحل، شام کی سیر، خاندانی تفریح اور کھلے سمندر کے نظاروں کے لیے۔",
      "گوادرئے روچ‌روچگ لمبیں زردیں ساحل، بیگاہی چرگ، ٹبر پکنک و دریا منظر بہ رَد۔"
    ),
    body: L(
      "Golden Beach is among Gwadar's most visited public shores. The sand catches late light; the water is usually calmer than open Makran swell. Local families picnic here on weekends. Facilities remain simple — bring water and shade.",
      "گولڈن بیچ گوادر کے مصروف ساحلوں میں ہے۔ ریت پر شام کی روشنی خوبصورت لگتی ہے اور پانی عام طور پر ہلکا ہوتا ہے۔ اختتام ہفتہ خاندان پکنک کرتے ہیں۔ سہولیات سادہ ہیں — پانی اور سایہ ساتھ لائیں۔",
      "گولڈن بیچ گوادرئے نامدار ساحلان تہ اِنت۔ بیگاہی روشنی ریت سر شِر اِنت۔ ہفتگ ٹبر پکنک کن اَنت۔ سہولت سادہ اَنت — آپ و سایہ گوں بيا اِت۔"
    ),
  },
  {
    slug: "gwadar-east-bay",
    category: "picnic",
    image: "/images/east-bay.jpg",
    name: L("Gwadar East Bay picnic shore", "گوادر ایسٹ بے پکنک ساحل", "گوادر ایسٹ بے پکنک"),
    region: L("Gwadar", "گوادر", "گوادر"),
    tag: L("Family picnic", "خاندانی پکنک", "ٹبر پکنک"),
    short: L(
      "Sheltered water on the east of the hammerhead peninsula, popular for casual picnics and boat watching.",
      "ہتھوڑے نما جزیرہ نما کے مشرق میں محفوظ پانی، پکنک اور کشتیوں کو دیکھنے کے لیے مقبول۔",
      "ہتھوڑگ جزیرہ نمائے خاورگ محفوظ آپ، پکنک و کشتی بچار بہ رَد نامدار۔"
    ),
    body: L(
      "East Bay sits in the lee of Koh-e-Batil. Compared with the west-facing open coast it is often milder. Residents come with mats, tea and grilled fish. Keep a respectful distance from working fishing boats and harbour traffic.",
      "ایسٹ بے کوہِ بطیل کی آڑ میں ہے۔ کھلے مغربی ساحل کے مقابلے میں یہاں ہوا ہلکی ہو سکتی ہے۔ لوگ دری، چائے اور بھنی مچھلی لے کر آتے ہیں۔ ماہی گیری کی کشتیوں اور بندرگاہ سے فاصلہ رکھیں۔",
      "ایسٹ بے کوہ بطیلئے سایہ تہ اِنت۔ کھلے روچ‌روچگ ساحل ئے مقابلہ تہ ہوا ہلک بہ اِنت۔ مردم دری، چا و بریگ ماہی گوں آر اَنت۔ ماہی گیریئے کشتی و بندر ئے لڑگ مکن اِت۔"
    ),
  },
  {
    slug: "pasni-juddi",
    category: "beaches",
    image: "/images/pasni-juddi.jpg",
    name: L("Juddi / Pasni Beach", "جدی / پسنی ساحل", "جدی / پسنی ساحل"),
    region: L("Pasni", "پسنی", "پسنی"),
    tag: L("Picnic highway stop", "شاہراہ پکنک اسٹاپ", "راہ پکنک سٹاپ"),
    short: L(
      "Golden dunes and a working fishing town — Pasni Beach is a favourite rest on the Makran Coastal Highway.",
      "سنہری ٹیلے اور ماہی گیری کا شہر — پسنی ساحل مکران شاہراہ پر پسندیدہ آرام گاہ ہے۔",
      "زردیں ٹیل و ماہی گیریئے شہر — پسنی ساحل مکران راہ سر نامدار آرام جاگاہ اِنت۔"
    ),
    body: L(
      "Pasni's beach (often called Juddi) combines dune scenery with harbour life. Sunset light is famous among highway travellers. The town behind the sand is a literary centre of Makran — its poets and songs have earned it the nickname 'the Lucknow of Pakistan'. Swim only where locals say the current is safe.",
      "پسنی کا ساحل (جدی) ٹیلوں اور بندرگاہ کی زندگی کو جوڑتا ہے۔ غروبِ آفتاب شاہراہ کے مسافروں میں مشہور ہے۔ ریت کے پیچھے شہر مکران کا ادبی مرکز ہے — اپنے شاعروں اور گیتوں کی وجہ سے اسے 'پاکستان کا لکھنؤ' بھی کہا جاتا ہے۔ تیراکی وہیں کریں جہاں مقامی لوگ بہاؤ محفوظ بتائیں۔",
      "پسنیئے ساحل (جدی) ٹیل و بندرئے زِند ئے جوڑ اِنت۔ روچ‌تراک راہئے مسافران تہ نامدار اِنت۔ شہر مکرانئے لبزانکی مرکز اِنت — شاعر و سُرانئے گوں 'پاکستانئے لکھنؤ' مانگ بیت۔ آپ‌بازی جاگاہ مقامی مردم بپرس اِت۔"
    ),
  },
  {
    slug: "ormara-turtle",
    category: "beaches",
    image: "/images/ormara-turtle.jpg",
    name: L("Ormara turtle beach", "اورمارہ کچھووں کا ساحل", "اورمارہ کَچھو ساحل"),
    region: L("Ormara", "اورمارہ", "اورمارہ"),
    tag: L("Wildlife shore", "جنگلی حیات کا ساحل", "جانوری ساحل"),
    short: L(
      "A quieter Makran beach known for turtle nesting and long empty sand between mountains and sea.",
      "پہاڑ اور سمندر کے درمیان پرسکون ساحل، کچھووں کے انڈے دینے کے لیے مشہور۔",
      "کوہ و دریا نیام ہلیں ساحل، کَچھو آنڈک بہ رَد نامدار۔"
    ),
    body: L(
      "Ormara's beaches remain less built-up than Gwadar. Green turtles nest on parts of this coast. Night driving on the sand and bright lights harm hatchlings. Visit by day, keep dogs away from nests, and support local guidance.",
      "اورمارہ کے ساحل گوادر سے کم آباد ہیں۔ سبز کچھوے یہاں کے ساحل پر انڈے دیتے ہیں۔ رات کو ریت پر گاڑی اور تیز روشنی بچوں (بچے کچھووں) کو نقصان دیتی ہے۔ دن میں آئیں، کتوں کو گھونسلوں سے دور رکھیں اور مقامی رہنمائی کی حمایت کریں۔",
      "اورمارہئے ساحل گوادر ئے کم جوڑگ بوتگ۔ سبز کَچھو اِدا آنڈک اِنت۔ شپ تہ ریت سر گڈی و تیج روشنی کَچھوچ ئے زیان اِنت۔ روچ تہ بيا اِت، سگ ئے جاگاہ ئے لڑ کن اِت۔"
    ),
  },
  {
    slug: "jiwani-coast",
    category: "beaches",
    image: "/images/jiwani.jpg",
    name: L("Jiwani beach & lagoon", "جیوانی ساحل اور کھاڑی", "جیوانی ساحل و کول"),
    region: L("Western Makran", "مغربی مکران", "روچ‌روچگ مکران"),
    tag: L("Birds & border coast", "پرندے اور سرحدی ساحل", "مرغ و سرحد ساحل"),
    short: L(
      "Pakistan's westernmost coastal town: beaches, fishing, and internationally important bird wetlands near the Iranian border.",
      "پاکستان کا سب سے مغربی ساحلی شہر: ساحل، ماہی گیری، اور ایران کی سرحد کے قریب پرندوں کی بین الاقوامی اہمیت کی زمینیں۔",
      "پاکستانئے روچ‌روچگیں ساحلی شہر: ساحل، ماہی گیری و ایران سرحد نزیک مرغانئے بین‌الاقوامی زمین۔"
    ),
    body: L(
      "Jiwani looks across the Gulf of Oman. Its beaches and backwaters attract migratory birds; fishing communities work the same waters. The area is sensitive: follow local rules, avoid military zones, and leave no plastic on the sand.",
      "جیوانی خلیج عمان کی طرف دیکھتا ہے۔ اس کے ساحل اور پچھلے پانی مہاجر پرندوں کو کھینچتے ہیں؛ ماہی گیر یہی پانی میں کام کرتے ہیں۔ علاقہ حساس ہے: مقامی قوانین مانیں، فوجی علاقوں سے بچیں اور ریت پر پلاسٹک نہ چھوڑیں۔",
      "جیوانی عمانئے خلیج سر اِنت۔ ساحل و پچھم آپ مرغ ئے کھِچ اِنت؛ ماہی گیر اِشت پانی تہ کار کن اَنت۔ جاگاہ حساس اِنت: قاعدہ بزان اِت، فوجی جاگاہ لڑگ مکن اِت و ریت سر پلاسٹک مچا اِت۔"
    ),
  },
  {
    slug: "pishukan",
    category: "destinations",
    image: "/images/pishukan.jpg",
    name: L("Pishukan", "پیشوکان", "پیشوکان"),
    region: L("West of Gwadar", "گوادر کے مغرب", "گوادرئے روچ‌روچگ"),
    tag: L("Fishing community", "ماہی گیر برادری", "ماہی گیریئے برادری"),
    short: L(
      "A working fishing settlement west of Gwadar, known for boats, nets and everyday Makran coastal life.",
      "گوادر کے مغرب میں فعال ماہی گیری بستی، کشتیوں، جال اور روزمرہ مکران کی ساحلی زندگی کے لیے معروف۔",
      "گوادرئے روچ‌روچگ ماہی گیریئے ہلک، کشتی، جال و روزگ ساحلی زِند بہ رَد نامدار۔"
    ),
    body: L(
      "Pishukan is not a resort town. Visitors who come respectfully see how Makran's sea economy actually works: landing fish, mending nets, waiting on weather. Ask before photographing people or boats.",
      "پیشوکان ریزورٹ شہر نہیں۔ ادب سے آنے والے دیکھتے ہیں کہ مکران کی سمندری معیشت کیسے چلتی ہے: مچھلی اتارنا، جال مرمت کرنا، موسم کا انتظار۔ لوگوں یا کشتیوں کی تصویر سے پہلے اجازت لیں۔",
      "پیشوکان ریزورٹ شہر نہ اِنت۔ احترام گوں آتک مردم بچار اَنت کہ مکرانئے دریاہی معیشت چوں کار اِت: ماہی اتارگ، جال ئے مرمت، موسمئے انتظار۔ مردم یا کشتی عکس ئے پیش اجازت بگر اِت۔"
    ),
  },
  {
    slug: "koh-batil",
    category: "hills",
    image: "/images/koh-batil.jpg",
    name: L("Koh-e-Batil (Hammerhead)", "کوہِ بطیل (ہتھوڑا)", "کوہِ بطیل (ہتھوڑگ)"),
    region: L("Gwadar old town", "گوادر کا پرانا شہر", "گوادرئے کہن شہر"),
    tag: L("Hill viewpoint", "پہاڑی نظارہ", "کوہ منظر"),
    short: L(
      "The hammer-shaped headland that defines Gwadar: steep stairs, old-town lanes and a 360° view of two bays.",
      "ہتھوڑے کی شکل کا سر جو گوادر کی پہچان ہے: ڈھلوان سیڑھیاں، پرانا شہر اور دونوں خلیجوں کا ۳۶۰° نظارہ۔",
      "ہتھوڑگئے شکلئے کوہ کہ گوادرئے نشان اِنت: ڈھلوان پَڑ، کہن شہر و دو خلیجانئے ۳۶۰° منظر۔"
    ),
    body: L(
      "Koh-e-Batil rises above historic Gwadar. Climbers use a long concrete stair (often cited near 700 steps) to a ridge with views of East Bay, West Bay and the open Arabian Sea. Pearl Continental Gwadar stands on this height. Carry water; the rock reflects heat. The hill is both a picnic viewpoint and a living neighbourhood.",
      "کوہِ بطیل تاریخی گوادر کے اوپر اٹھتا ہے۔ تقریباً سات سو سیڑھیوں کی لمبی سیڑھی سے چوٹی تک جاتے ہیں جہاں ایسٹ بے، ویسٹ بے اور کھلا بحیرہ عرب نظر آتا ہے۔ پرل کانٹینینٹل گوادر اسی بلندی پر ہے۔ پانی ساتھ رکھیں؛ پتھر گرمی پھینکتا ہے۔ یہ پہاڑی پکنک کا مقام اور آباد محلہ دونوں ہے۔",
      "کوہِ بطیل تاریخی گوادرئے سر اِنت۔ تقریباً ست پَڑ ئے پَڑ ئے راہ ئے سر بروج اِنت کہ ایسٹ بے، ویسٹ بے و کھلے عربی دریا پدگ اِنت۔ پرل کانٹینینٹل گوادر اِشے بلندی سر اِنت۔ آپ بدار؛ سنگ گرمی ئے پدگ اِنت۔ اے کوہ پکنکئے جاگاہ و زندگ محلہ دہ بہ اِنت۔"
    ),
  },
  {
    slug: "hingol-park",
    category: "hills",
    image: "/images/hingol.jpg",
    name: L("Hingol National Park & mud volcanoes", "ہنگول نیشنل پارک اور مٹی کے آتش فشاں", "ہنگول پارک و گل آتش‌فشان"),
    region: L("Lasbela–Makran approach", "لسبیلہ–مکران", "لسبیلہ–مکران"),
    tag: L("Mountains & mud volcanoes", "پہاڑ اور مٹی کے آتش فشاں", "کوہ و گل آتش‌فشان"),
    short: L(
      "Desert mountains, mud volcanoes and wind-carved rocks (including the Princess of Hope) on the road into Makran. Also home to the Hinglaj Mata shrine, one of Hinduism's most sacred sites.",
      "صحرائی پہاڑ، مٹی کے آتش فشاں اور ہوا سے تراشے پتھر (پرنسس آف ہوپ سمیت) مکران کی راہ پر۔ ہنگلاج ماتا کا شریکار، ہندومت کی مقدس ترین جگہوں میں سے، بھی یہیں ہے۔",
      "بیابان کوہ، گل آتش‌فشان و ہوا تراشگ سنگ (پرنسس آف ہوپ ہم) مکرانئے راہ سر۔ ہنگلاج ماتئے دربار ہم اِدا اِنت۔"
    ),
    body: L(
      "Hingol is Pakistan's largest national park by area and the scenic gateway to the Makran highway. Mud volcanoes bubble grey slurry; the Hingol River reaches the sea nearby. The Hinglaj Mata (Nani Mandir) shrine in the Hingol gorge draws thousands of pilgrims each spring. The Princess of Hope and other hoodoos are fragile — do not climb the fins. Combine with Kund Malir for a full day.",
      "رقبے کے لحاظ سے ہنگول پاکستان کا سب سے بڑا نیشنل پارک ہے اور مکران شاہراہ کا دلکش دروازہ ہے۔ مٹی کے آتش فشاں سرمئی کیچڑ اگلتے ہیں؛ ہنگول دریا قریب ہی سمندر سے ملتا ہے۔ ہنگول گھاٹی میں ہنگلاج ماتا (نانی مندر) ہر بہار ہزاروں زائرین کو کھینچتا ہے۔ پرنسس آف ہوپ نازک چٹانیں ہیں — ان پر نہ چڑھیں۔ کند ملیر کے ساتھ پورا دن بنائیں۔",
      "پیمائشئے روہ ئے ہنگول پاکستانئے مزیں پارک اِنت و مکران راہئے شِرِیں دروازہ اِنت۔ گل آتش‌فشان سرمئی کیچڑ اِنت؛ ہنگول رود نزیک دریا گوں رَند اِنت۔ ہنگلاج ماتا (نانی مندر) ہر بہار ہزار زائر کھِچ اِنت۔ نازک سنگان سر مروج مہ کن اِت۔ کند ملیر گوں یک روژ جوڑ۔"
    ),
  },
  {
    slug: "astola-teaser",
    category: "destinations",
    image: "/images/astola.jpg",
    name: L("Astola Island (Haft Talar)", "جزیرہ استولا (ہفت تلار)", "استولا (ہفت تلار)"),
    region: L("Offshore from Pasni", "پسنی کے سامنے سمندر", "پسنی پَچگ دریا"),
    tag: L("Marine protected island", "سمندری محفوظ جزیرہ", "دریاہی محفوظ دیپ"),
    short: L(
      "Pakistan's largest offshore island and first Marine Protected Area: turtles, reefs, a Kali temple and a fishermen's mosque. See the dedicated Astola page.",
      "پاکستان کا سب سے بڑا ساحلی جزیرہ اور پہلا میرین پروٹیکٹڈ ایریا: کچھوے، چٹانیں، کالی مندر اور ماہی گیروں کی مسجد۔ استولا کا مخصوص صفحہ دیکھیں۔",
      "پاکستانئے مزیں پَچگ دیپ و اولین دریاہی محفوظ جاگاہ: کَچھو، سنگ، کالی مندر و ماہی گیریئے مسجد۔ استولا پَن بچار۔"
    ),
    body: L(
      "Astola (Jazira Haft Talar, 'island of seven hills') lies about 39 km east of Pasni. It is Pakistan's first Marine Protected Area (2017). Seasonal fishermen camp; there is no hotel. Access is by private boat in fair weather only. Full history, temple and nature notes are on the Astola page.",
      "استولا (جزیزہ ہفت تلار، 'سات پہاڑیوں کا جزیرہ') پسنی سے تقریباً ۳۹ کلومیٹر مشرق میں ہے۔ ۲۰۱۷ میں پاکستان کا پہلا میرین پروٹیکٹڈ ایریا بنا۔ موسمی ماہی گیر کیمپ کرتے ہیں؛ کوئی ہوٹل نہیں۔ صرف اچھے موسم میں نجی کشتی سے جائیں۔ مکمل تاریخ، مندر اور فطرت کی تفصیل استولا صفحے پر ہے۔",
      "استولا (ہفت تلار) پسنی لڑگ تقریباً ۳۹ کلومیٹر اِنت۔ ۲۰۱۷ تہ پاکستانئے اولین دریاہی محفوظ جاگاہ بوت۔ موسمی ماہی گیر کیمپ کن اَنت؛ ہوٹل نہ اِنت۔ شِر ہوا تہ نجی کشتی گوں برو۔ گیش زان استولا پَن تہ اِنت۔"
    ),
  },
  {
    slug: "pc-gwadar",
    category: "hotels",
    image: "/images/pc-gwadar.jpg",
    name: L("Pearl Continental Gwadar", "پرل کانٹینینٹل گوادر", "پی سی گوادر"),
    region: L("Koh-e-Batil, Gwadar", "کوہِ بطیل، گوادر", "کوہِ بطیل، گوادر"),
    tag: L("Hilltop hotel", "پہاڑی ہوٹل", "کوہ ہوٹل"),
    phone: "(086) 4212223",
    short: L(
      "The best-known full-service hotel in Gwadar, built on Koh-e-Batil with views over harbour and sea.",
      "گوادر کا معروف مکمل سہولیات والا ہوٹل، کوہِ بطیل پر بندرگاہ اور سمندر کے نظاروں کے ساتھ۔",
      "گوادرئے نامدار پورا سہولت دار ہوٹل، کوہِ بطیل سر بندر و دریائے منظر گوں۔"
    ),
    body: L(
      "PC Gwadar (Zaver Pearl-Continental) is the landmark stay for official and tourist visitors: rooms facing the Arabian Sea, conference halls and a hilltop site on the hammerhead. Rates are higher than town guesthouses. Confirm bookings in peak winter (Nov–Feb). This listing is informational, not an advertisement.",
      "پی سی گوادر (زیور پرل کانٹینینٹل) سرکاری اور سیاحتی مہمانوں کے لیے نمایاں قیام ہے: بحیرہ عرب رخ کمروں، کانفرنس ہال اور ہتھوڑے پہاڑی پر مقام۔ نرخ شہر کے گیسٹ ہاؤس سے زیادہ ہیں۔ شدید سردی (نومبر–فروری) میں بکنگ یقینی بنائیں۔ یہ فہرست معلوماتی ہے، اشتہار نہیں۔",
      "پی سی گوادر مہمانانئے نامدار قیام اِنت: عربی دریا سمت کوٹھ، کانفرنس حال و کوہ سر جاگاہ۔ نرخ شہرئے گیسٹ ہاؤس ئے گیش اَنت۔ زمستان تہ بکنگ پکا کن۔ اے زان اِنت، تبلیغ نہ۔"
    ),
  },
  {
    slug: "gwadar-guesthouse",
    category: "stays",
    image: "/images/gwadar-town-GH.jpg",
    name: L("Gwadar town guesthouses", "گوادر کے گیسٹ ہاؤس", "گوادرئے گیسٹ ہاوس"),
    region: L("Gwadar city", "گوادر شہر", "گوادر شہر"),
    tag: L("Mid-range stay", "درمیانہ قیام", "نیامگ قیام"),
    short: L(
      "Small hotels and guesthouses in town, closer to bazaar, harbour and shared taxis than the hilltop resort.",
      "شہر میں چھوٹے ہوٹل اور گیسٹ ہاؤس، پہاڑی ریزورٹ کے مقابلے بازار، بندرگاہ اور مشترکہ ٹیکسی کے قریب۔",
      "شہر تہ ہُردیں ہوٹل و گیسٹ ہاوس، کوہ ریزورٹ ئے مقابلہ بازار و بندر نزیک۔"
    ),
    body: L(
      "Most independent travellers sleep in Gwadar's mid-range guesthouses: air-conditioned rooms, simple breakfast, generators during load-shedding. Choose places with recent reviews, ask about water hours, and keep copies of ID as hotels require. Support locally owned lodging when you can.",
      "زیادہ تر آزاد مسافر گوادر کے درمیانے گیسٹ ہاؤس میں ٹھہرتے ہیں: اے سی کمرے، سادہ ناشتہ، لوڈ شیڈنگ میں جنریٹر۔ تازہ ریویو والی جگہیں چنیں، پانی کے اوقات پوچھیں اور شناختی کارڈ کی کاپی رکھیں۔ موقع ملے تو مقامی ملکیت کے قیام کو ترجیح دیں۔",
      "گیش آزاد مسافر گوادرئے نیامگ گیسٹ ہاوس تہ نند اَنت: اے سی کوٹھ، سادہ ناشتہ۔ نوکین ریویو دار جاگاہ انتخاب کن، آپئے وہٹ بپرس و شناخت بدار۔ موقع بوت مقامی قیام ئے دیم بہ بر۔"
    ),
  },
  {
    slug: "pasni-stay",
    category: "stays",
    image: "/images/pasni-stay.jpg",
    name: L("Pasni rest houses & small hotels", "پسنی ریسٹ ہاؤس اور چھوٹے ہوٹل", "پسنی ریسٹ ہاوس"),
    region: L("Pasni", "پسنی", "پسنی"),
    tag: L("Town stay", "شہری قیام", "شہرئے قیام"),
    short: L(
      "Limited rooms near the harbour — book ahead if you plan a boat toward Astola or a literary visit to Pasni.",
      "بندرگاہ کے قریب محدود کمرے — استولا کی کشتی یا پسنی کے ادبی دورے کے لیے پہلے بکنگ کریں۔",
      "بندر نزیک کم کوٹھ — استولا کشتی یا پسنیئے ادبی دورہ بہ رَد پیش بکنگ کن۔"
    ),
    body: L(
      "Pasni has fewer tourist beds than Gwadar. Options include small hotels and occasional rest houses. Seafood is the local table. Use Pasni as a base for Juddi Beach and, in settled weather, boat inquiries for Astola — always with licensed local skippers.",
      "پسنی میں گوادر سے کم سیاحتی کمرے ہیں۔ چھوٹے ہوٹل اور کبھی ریسٹ ہاؤس ملتے ہیں۔ کھانا سمندری غذا ہے۔ جدی ساحل کے لیے پسنی کو بنیاد بنائیں اور اچھے موسم میں استولا کی کشتی صرف لائسنس یافتہ مقامی ناخدا سے پوچھیں۔",
      "پسنی تہ گوادر ئے کم سیاحتی کوٹھ اَنت۔ ہُردیں ہوٹل و کہن ریسٹ ہاوس ملت اَنت۔ دریاہی نان اِنت۔ جدی ساحل بہ رَد پسنی بنیاد کن اِت و استولا کشتی مجاز ناخدا گوں بپرس اِت۔"
    ),
  },
  {
    slug: "highway-camps",
    category: "stays",
    image: "/images/kundmalir-beach-hut.jpg",
    name: L("Highway beach huts & camps", "شاہراہ کے ساحلی کیمپ اور جھونپڑیاں", "راہئے ساحلی کیمپ و کٹ"),
    region: L("Kund Malir • Sapat • Golden Beach", "کند ملیر • سپٹ • گولڈن بیچ", "کند ملیر • سپٹ • گولڈن بیچ"),
    tag: L("Camping stay", "کیمپنگ قیام", "کیمپ قیام"),
    short: L(
      "Seasonal bamboo or concrete huts on the highway beaches — basic, windy, and closest to the water.",
      "شاہراہ کے ساحلوں پر موسمی بانس یا کنکریٹ جھونپڑیاں — سادہ، ہوا دار اور پانی کے قریب ترین۔",
      "راہئے ساحل سر موسمی بانس یا کنکریٹ کٹ — سادگ، گوات دار و آپ نزیک ترین۔"
    ),
    body: L(
      "Between Karachi and Gwadar, informal camps appear in high season. Expect shared toilets, limited electricity and generator noise. Bring a warm layer for night wind, cash, and a torch. Never camp on active turtle nest lines. Check with highway police about night safety.",
      "کراچی اور گوادر کے درمیان سیاحتی موسم میں غیر رسمی کیمپ لگتے ہیں۔ مشترکہ بیت الخلاء، محدود بجلی اور جنریٹر کی آواز۔ رات کی ہوا کے لیے گرم کپڑا، نقدی اور ٹارچ رکھیں۔ کچھووں کے فعال گھونسلوں پر کیمپ کبھی نہ کریں۔ رات کی حفاظت کے لیے ہائی وے پولیس سے رابطہ کریں۔",
      "کراچی و گوادر نیام سیاحتئے موسم تہ کیمپ بوت اَنت۔ مشترکہ بیت الخلا، کم بجلی و جنریٹرئے آواز۔ شپئے گوات بہ رَد گرم جامگ، نقد و ٹارچ بدار۔ کَچھو آنڈک جاگاہ سر کیمپ ہمیشہ مہ کن۔ شپئے ایمنی بہ رَد راہ پولیس گوں رابطہ کن۔"
    ),
  },
  {
    slug: "ormara-stay",
    category: "hotels",
    image: "/images/ormara-stay.jpg",
    name: L("Ormara lodges", "اورمارہ لاجز", "اورمارہ لاج"),
    region: L("Ormara", "اورمارہ", "اورمارہ"),
    tag: L("Quiet overnight", "پرسکون رات", "ہلیں شپ"),
    short: L(
      "Simple overnight rooms for highway travellers between Kund Malir and Pasni/Gwadar.",
      "کند ملیر اور پسنی/گوادر کے درمیان مسافروں کے لیے سادہ رات کے کمرے۔",
      "کند ملیر و پسنی/گوادر نیام مسافران بہ رَد سادہ شپئے کوٹھ۔"
    ),
    body: L(
      "Ormara is a naval and fishing town with a handful of basic lodges. It is a logical sleep-stop on the long N-10 drive. Do not photograph naval facilities. Beaches nearby are better at dawn than midday heat.",
      "اورمارہ بحریہ اور ماہی گیری کا شہر ہے جہاں چند بنیادی لاج ہیں۔ لمبی این-۱۰ سفر پر آرام کے لیے منطقی اسٹاپ ہے۔ بحری تنصیبات کی تصویر نہ کھینچیں۔ نزدیکی ساحل دوپہر کی گرمی سے بہتر صبح کے وقت ہیں۔",
      "اورمارہ بحری و ماہی گیریئے شہر اِنت کہ چند بنیادی لاج اَنت۔ دیرینہ این-۱۰ سفر ئے آرامئے منطقی سٹاپ اِنت۔ بحری جاگاہ عکس مہ کن۔ نزیک ساحل بیگاہی گیش شِرِیں اَنت۔"
    ),
  },
];

export const places = [...corePlaces, ...extraPlaces];

export const categories = [
  { id: "destinations", path: "/destinations", key: "navDest", icon: "🧭" },
  { id: "beaches", path: "/beaches", key: "navBeaches", icon: "🏖️" },
  { id: "picnic", path: "/picnic", key: "navPicnic", icon: "🧺" },
  { id: "hills", path: "/hills", key: "navHills", icon: "⛰️" },
  { id: "hotels", path: "/hotels", key: "navHotels", icon: "🏨" },
  { id: "stays", path: "/stays", key: "navStays", icon: "🛏️" },
];

export function loc(obj, lang) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en;
}
