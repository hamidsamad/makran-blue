const L = (en, ur, bal) => ({ en, ur, bal });

export const extraPlaces = [
  {
    slug: "princess-hope",
    category: "hills",
    tags: ["landmark", "photography", "highway"],
    image: "/images/princess-hope.jpg",
    name: L("Princess of Hope", "پرنسس آف ہوپ", "پرنسس آف ہوپ"),
    region: L("Hingol National Park", "ہنگول نیشنل پارک", "ہنگول"),
    tag: L("Natural landmark", "قدرتی نشان", "قدرتی نشان"),
    short: L(
      "Wind-carved hoodoo with a human-like silhouette — the most photographed stop on the N-10 into Makran.",
      "ہوا سے تراشی گئی انسانی شکل کی چٹان — مکران میں داخلے والی این-۱۰ پر سب سے زیادہ فوٹو کھینچی جانے والی جگہ۔",
      "ہوا تراشگ انسانی شکلئے سنگ — مکرانئے این-۱۰ سر گیش عکس بوتگیں جاگاہ۔"
    ),
    body: L(
      "Do not climb the fragile fins. Best light is morning or late afternoon. Combine with Hingol mud volcanoes and Kund Malir. Best season October–March. The formation was famously named during a 2002 Hollywood documentary shoot when the silhouette reminded the crew of a princess gazing at the sea.",
      "نازک چٹانوں پر نہ چڑھیں۔ بہترین روشنی صبح یا دیر شام کی ہے۔ ہنگول کے مٹی کے آتش فشاں اور کند ملیر کے ساتھ ملائیں۔ بہترین موسم اکتوبر تا مارچ۔ یہ نام ۲۰۰۲ میں ایک ہالی ووڈ دستاویزی فلم کی شوٹنگ کے دوران مشہور ہوا جب یہ شکل سمندر کو دیکھتی شہزادی جی لگی۔",
      "نازک سنگان سر مروج مہ کن۔ شِرِیں روشنی روچ یا بیگاہ۔ ہنگولئے گل آتش‌فشان و کند ملیر گوں یک کن۔ شِرِیں موسم اکتوبر تا مارچ۔ اے نام ۲۰۰۲ ایک فلمئے شوٹنگ تہ نامدار بوتگ۔"
    ),
  },
  {
    slug: "sphinx",
    category: "hills",
    tags: ["landmark", "photography"],
    image: "/images/sphinx.jpg",
    name: L("Balochistan Sphinx", "بلوچستان کا ابوالہول", "بلوچستان سفِنکس"),
    region: L("Hingol", "ہنگول", "ہنگول"),
    tag: L("Geological landmark", "ارضیاتی نشان", "زمینئے نشان"),
    short: L(
      "Naturally eroded sphinx-like rock on the Makran highway approach.",
      "مکران شاہراہ پر قدرتی طور پر کٹا ہوا ابوالہول نما پتھر۔",
      "مکران راہ سر قدرتی تراشتگ سفِنکس سنگ۔"
    ),
    body: L(
      "A roadside geology stop, not a built monument. Stay on established pull-offs; the rock is part of a living park landscape. Wind and rare rain carved these limestone shapes over thousands of years.",
      "سڑک کنارے ارضیات کا اسٹاپ ہے، کوئی عمارت نہیں۔ مقررہ اسٹاپوں پر ہی رکیں؛ یہ چٹان زندہ پارک کے منظر کا حصہ ہے۔ ہوا اور شاذ و نادر بارش نے ہزاروں سال میں یہ چونے کے پتھر کی شکلیں تراشی ہیں۔",
      "راہ کنارئے زمینشناسئے سٹاپ اِنت، جوڑگ نہ۔ مقرر سٹاپان سر رک۔ اے سنگ پارکئے زندگ منظرئے بنڈ اِنت۔ ہوا و کم بارش ہزار سالان تہ اے سنگ تراشتگ اَنت۔"
    ),
  },
  {
    slug: "buzi-pass",
    category: "hills",
    tags: ["picnic", "photography", "highway", "sunset"],
    image: "/images/buzi-pass.jpg",
    name: L("Buzi Pass", "بزی پاس", "بزی پاس"),
    region: L("Makran Coastal Highway", "مکران ساحلی شاہراہ", "مکران ساحلی راہ"),
    tag: L("Mountain sea pass", "پہاڑی سمندری درہ", "کوہ دریا درہ"),
    short: L(
      "Dramatic N-10 cut between mountains with Arabian Sea views — one of the signature photo stops of the coastal highway.",
      "پہاڑوں کے درمیان این-۱۰ کا شاندار راستہ، بحیرہ عرب کے نظارے — ساحلی شاہراہ کا نمایاں فوٹو اسٹاپ۔",
      "کوہانئے نیام این-۱۰ئے شاندار راستہ، عربی دریائے منظر — ساحلی راہئے نامدار عکس سٹاپ۔"
    ),
    body: L(
      "Short photo stop, not a long hike. Watch traffic on blind curves. Excellent picnic break between Hingol and Kund Malir.",
      "مختصر فوٹو اسٹاپ ہے، لمبی پیدل سیر نہیں۔ اندھے موڑوں پر ٹریفک سے احتیاط کریں۔ ہنگول اور کند ملیر کے درمیان بہترین پکنک وقفہ۔",
      "ننک عکس سٹاپ اِنت، دیر پیدل چرگ نہ۔ اَنداہ موڑان تہ گڈی ئے ہوش دار۔ ہنگول و کند ملیر نیام شِرِیں پکنک وقفہ۔"
    ),
  },
  {
    slug: "kapasi",
    category: "beaches",
    tags: ["sunset", "picnic"],
    image: "/images/kapasi.jpg",
    name: L("Kapasi Beach", "کپاسی ساحل", "کپاسی ساحل"),
    region: L("Koh-e-Batil, Gwadar", "کوہِ بطیل، گوادر", "کوہِ بطیل، گوادر"),
    tag: L("Sunset beach", "غروبِ آفتاب کا ساحل", "روچ‌تراک ساحل"),
    short: L(
      "Accessible from the Koh-e-Batil side with Arabian Sea views — prime Gwadar sunset sand.",
      "کوہِ بطیل کی طرف سے رسائی، بحیرہ عرب کے نظارے — گوادر کا بہترین غروب والا ساحل۔",
      "کوہِ بطیلئے سمت ئے رسائی، عربی دریائے منظر — گوادرئے شِرِیں روچ‌تراک ساحل۔"
    ),
    body: L(
      "Easier than Kund Malir if you are already in Gwadar. Bring water; cliffs drop steeply. Pair with Hammerhead viewpoint and Sunset Park.",
      "اگر آپ گوادر میں ہوں تو کند ملیر سے آسان ہے۔ پانی ساتھ رکھیں؛ چٹانیں اونچی گری ہوئی ہیں۔ ہتھوڑا پوائنٹ اور سن سیٹ پارک کے ساتھ ملائیں۔",
      "چوں تئی گوادر تہ بہ اِنت، کند ملیر ئے آسان اِنت۔ آپ بدار؛ کف چُٹ بوتگ اَنت۔ ہتھوڑ منظر و سن سیٹ پارک گوں یک کن۔"
    ),
  },
  {
    slug: "sunset-park",
    category: "picnic",
    tags: ["sunset", "picnic"],
    image: "/images/sunset-park-gwadar.jpg",
    name: L("Sunset Park, Gwadar", "سن سیٹ پارک، گوادر", "سن سیٹ پارک، گوادر"),
    region: L("Near Hammerhead", "ہتھوڑے کے قریب", "ہتھوڑ نزیک"),
    tag: L("Sunset viewpoint", "غروب دیکھنے کی جگہ", "روچ‌تراک منظر جاگاہ"),
    short: L(
      "Dedicated sunset-viewing stop near the Hammerhead, listed among Gwadar's city attractions.",
      "ہتھوڑے کے قریب غروب دیکھنے کی مخصوص جگہ، گوادر کی شہری سیاحت کی فہرست میں۔",
      "ہتھوڑ نزیک روچ‌تراک بچارگئے مخصوص جاگاہ، گوادرئے شہری سیاحتئے فہرست تہ۔"
    ),
    body: L(
      "Urban picnic compared with the highway wilderness. Arrive before the sun drops; parking fills on holidays. Tea stalls and family seating are common in season.",
      "شاہراہ کی جنگلی سیر کے مقابلے یہ شہری پکنک ہے۔ سورج گرنے سے پہلے پہنچیں؛ چھٹیوں میں پارکنگ بھر جاتی ہے۔ موسم میں چائے کے اسٹال اور خاندانی نشستیں عام ہیں۔",
      "راہئے بیابانئے مقابلہ تہ اے شہرئے پکنک اِنت۔ روچ ئے تراک پیش بيا؛ چھٹیان تہ پارکنگ پُر بوت۔ موسم تہ چا اسٹال و ٹبر نششت عام اَنت۔"
    ),
  },
  {
    slug: "zarrain",
    category: "beaches",
    tags: ["hidden", "camping"],
    image: "/images/zarrain-pasni.jpg",
    name: L("Zarrain Beach", "زرین ساحل", "زرین ساحل"),
    region: L("Pasni", "پسنی", "پسنی"),
    tag: L("Hidden Pasni beach", "پسنی کا پرسکون ساحل", "پسنیئے ہلیں ساحل"),
    short: L(
      "Quieter Pasni-area shore for camping and fishing culture — ask locals before overnight stays.",
      "پسنی کا پرسکون ساحل، کیمپنگ اور ماہی گیری کی ثقافت — رات گزارنے سے پہلے مقامی لوگوں سے پوچھیں۔",
      "پسنیئے ہلیں ساحل، کیمپ و ماہی گیریئے رواج بہ رَد — شپ ئے پیش مقامی مردم ئے بپرس۔"
    ),
    body: L(
      "Treat as a community beach, not a resort. Pack out rubbish. Combine with Juddi Beach and a Pasni overnight (Juddi Hotel, Sachan Hotel and 3G Hotel are commonly listed small stays).",
      "اسے ریزورٹ نہیں، بستی کا ساحل سمجھیں۔ کوڑا ساتھ واپس لے جائیں۔ جدی ساحل اور پسنی کی رات کے ساتھ ملائیں (جدی ہوٹل، سچن ہوٹل اور 3G ہوٹل عام فہرستوں میں ہیں)۔",
      "اے ریزورٹ نہ، برادریئے ساحل اِنت۔ آشغال گوں ببر۔ جدی ساحل و پسنیئے شپ گوں یک کن (جدی ہوٹل، سچن و 3G ہوٹل عام فہرستان تہ اَنت)۔"
    ),
  },
  {
    slug: "ganz",
    category: "destinations",
    tags: ["fishing", "photography"],
    image: "/images/jiwani.jpg",
    name: L("Ganz", "گنز", "گنز"),
    region: L("West of Gwadar", "گوادر کے مغرب", "گوادرئے روچ‌روچگ"),
    tag: L("Fishing settlement", "ماہی گیری بستی", "ماہی گیریئے ہلک"),
    short: L(
      "Small coastal settlement with traditional boats between Gwadar and Jiwani on the western run.",
      "گوادر اور جیوانی کے درمیان چھوٹی ساحلی بستی، روایتی کشتیوں کے ساتھ۔",
      "گوادر و جیوانی نیام ہُردیں ساحلی ہلک، رواجی کشتیان گوں۔"
    ),
    body: L(
      "Ask before photographs. No hotel strip. Part of the coastal chain toward the Iran border region.",
      "تصویر کھینچنے سے پہلے اجازت لیں۔ یہاں ہوٹلوں کی لائن نہیں۔ ایران کی سرحد کی طرف جانے والے ساحلی سلسلے کا حصہ ہے۔",
      "عکس ئے پیش اجازت بگر۔ اِدا ہوٹل لائن نہ اِنت۔ ایران سرحدئے سمت شلیں ساحلی سلسلئے بنڈ اِنت۔"
    ),
  },
  {
    slug: "sadaf-resort",
    category: "hotels",
    tags: ["stay", "family"],
    image: "/images/sadaf-resort-gwadar.jpg",
    name: L("Sadaf Resort", "صدف ریزورٹ", "صدف ریزورٹ"),
    region: L("Marine Drive / Old City, Gwadar", "میرین ڈرائیو / پرانا شہر، گوادر", "گوادرئے کہن شہر"),
    tag: L("Resort hotel", "ریزورٹ ہوٹل", "ریزورٹ ہوٹل"),
    phone: "(086) 4210967",
    short: L(
      "Well-known stay around Marine Drive and Gwadar Old City for families and coastal sightseeing.",
      "میرین ڈرائیو اور پرانے شہر کے قریب معروف قیام، خاندانوں اور ساحلی سیر کے لیے۔",
      "میرین ڈرائیو و کہن شہر نزیک نامدار قیام، ٹبران و ساحلی سیر بہ رَد۔"
    ),
    body: L(
      "Listings place Sadaf near the old city rather than the Koh-e-Batil ridge. Confirm current rates and generator hours. Informational listing, not an advertisement.",
      "فہرستوں میں صدف پرانے شہر کے قریب ہے، کوہِ بطیل کی چوٹی پر نہیں۔ موجودہ نرخ اور جنریٹر کے اوقات پوچھیں۔ یہ معلوماتی فہرست ہے، اشتہار نہیں۔",
      "فہرستان تہ صدف کہن شہر نزیک اِنت، کوہِ بطیل سر نہ۔ اِدیں نرخ و جنریٹرئے وہٹ بپرس۔ اے زانئے فہرست اِنت، تبلیغ نہ۔"
    ),
  },
  {
    slug: "royal-resort",
    category: "hotels",
    tags: ["stay"],
    image: "/images/royal-resort-gwadar.jpg",
    name: L("Royal Resort Gwadar", "رائل ریزورٹ گوادر", "رائل ریزورٹ گوادر"),
    region: L("Airport Road, Gwadar", "ایئرپورٹ روڈ، گوادر", "گوادرئے ایئرپورٹ راہ"),
    tag: L("Hotel", "ہوٹل", "ہوٹل"),
    phone: "0333 2008766",
    short: L(
      "Resort-style rooms near Airport Road — another Gwadar hub option besides PC and Sadaf.",
      "ایئرپورٹ روڈ کے قریب ریزورٹ طرز کے کمرے — پی سی اور صدف کے علاوہ ایک اور آپشن۔",
      "ایئرپورٹ راہ نزیک ریزورٹئے کوٹھ — پی سی و صدف ئے دیگریں انتخاب۔"
    ),
    body: L(
      "Useful when the hilltop PC is full. Check recent reviews. Phone numbers change — verify locally.",
      "جب پی سی بھرا ہو تو مفید۔ تازہ ریویو دیکھیں۔ فون نمبر بدلتے رہتے ہیں — مقامی طور پر تصدیق کریں۔",
      "چوں پی سی پر بوتگ بہ اِنت کارمند۔ نوکین ریویو بچار۔ فون نمبر بدل بہ کنت — مقامی تصدیق کن۔"
    ),
  },
  {
    slug: "ormara-resorts",
    category: "hotels",
    tags: ["camping", "stay"],
    image: "/images/ormara-resort.jpg",
    name: L("Ormara beach resorts & huts", "اورمارہ ریزورٹ اور جھونپڑیاں", "اورمارہ ریزورٹ و کٹ"),
    region: L("Ormara", "اورمارہ", "اورمارہ"),
    tag: L("Stay + beach + camping", "قیام، ساحل اور کیمپ", "نندگ، ساحل، کیمپ"),
    short: L(
      "Gidan Beach Resort, Ormara Huts and Crystal Beach camping are commonly listed overnight options — more beds than Kund Malir.",
      "گیدان بیچ ریزورٹ، اورمارہ ہٹس اور کرسٹل بیچ کیمپنگ عام فہرستوں میں — کند ملیر سے زیادہ کمرے۔",
      "گیدان بیچ ریزورٹ، اورمارہ کٹ و کرسٹل بیچ کیمپ عام فہرستان تہ — کند ملیر ئے گیش کوٹھ۔"
    ),
    body: L(
      "Ormara is the practical hotel stop between the Hingol wilderness and Pasni/Gwadar. Do not photograph naval areas. Turtle beaches need dark nights — no driving on nest sand.",
      "ہنگول کی جنگل اور پسنی/گوادر کے درمیان اورمارہ عملی ہوٹل اسٹاپ ہے۔ بحریہ کے علاقوں کی تصویر نہ کھینچیں۔ کچھووں کے ساحلوں کو اندھیری رات چاہیے — گھونسلے کی ریت پر گاڑی نہ چلائیں۔",
      "ہنگولئے بیابان و پسنی/گوادر نیام اورمارہ عملی ہوٹل سٹاپ اِنت۔ بحری جاگاہانئے عکس مکن۔ کَچھو ساحلان ئے تاریک شپ لوڑیت — آنڈک ریت سر گڈی مکن۔"
    ),
  },
  {
    slug: "pasni-hotels",
    category: "hotels",
    tags: ["stay"],
    image: "/images/pasni-stay.jpg",
    name: L("Sachaan Hotel Pasni", "ساچان ہوٹل پسنی", "ساچان ہوٹل پسنی"),
    region: L("Pasni", "پسنی", "پسنی"),
    tag: L("Overnight for Astola", "استولا کے لیے رات", "استولا بہ رَد شپ"),
    short: L(
      "Juddi Hotel, Sachan Hotel & Restaurant, and 3G Hotel Pasni are frequently listed bases for Juddi Beach and Astola weather windows.",
      "جدی ہوٹل، سچن ہوٹل اینڈ ریسٹورنٹ اور 3G ہوٹل پسنی — جدی ساحل اور استولا کے موسم کے لیے عام بنیادیں۔",
      "جدی ہوٹل، سچن ہوٹل و 3G ہوٹل پسنی — جدی ساحل و استولا ئے ہوائے وہٹ بہ رَد عام بنیاد۔"
    ),
    body: L(
      "Book ahead in winter. Seafood is the table. Use only local skippers for Astola. Cultural visits to the poets' town need the same courtesy as any small harbour.",
      "سردیوں میں پہلے بکنگ کریں۔ کھانا سمندری غذا ہے۔ استولا کے لیے صرف مقامی لائسنس یافتہ ناخدا استعمال کریں۔ شاعروں کے شہر کے دور کے لیے وہی ادب رکھیں جو کسی چھوٹی بندرگاہ کے لیے رکھی جاتی ہے۔",
      "زمستان تہ پیش بکنگ کن۔ نان دریاہی نان اِنت۔ استولا بہ رَد صرف مقامی مجاز ناخدا کار کن۔ شاعرانئے شہرئے دور بہ رَد ہُردیں بندر ئے گوں اِشو احترام دار۔"
    ),
  },
];

export const n10Route = [
  "Karachi",
  "Gadani",
  "Sonmiani",
  "Sapat Beach",
  "Hingol National Park",
  "Princess of Hope",
  "Balochistan Sphinx",
  "Buzi Pass",
  "Kund Malir",
  "Golden Beach",
  "Ormara",
  "Pasni",
  "Juddi Beach",
  "Zarrain Beach",
  "Astola Island",
  "Gwadar",
  "Pishukan",
  "Ganz",
  "Jiwani",
];
