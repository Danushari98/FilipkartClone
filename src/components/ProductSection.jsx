import { useState } from "react";
import "./ProductSection.css";

function ProductSection() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);


  const allProducts = {
    "Mobiles & Tablets": [
      { name: "iPhone 15 Pro", price: "₹1,29,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3nXrwyjYfleObj1X30ZOfAnZ1a2xPVWqYQ&s" },
      { name: "Samsung Galaxy S24 Ultra", price: "₹1,39,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdI6iVtB_UEYvfWF2JHVktZO0-eHX-2SCR7w&s" },
      { name: "OnePlus 12", price: "₹64,999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkDIWd3DIGkwR-7yFT7Unbj_OAFbrLkNyBw&s" },
      { name: "POCO M7 5G", price: "₹8,499", img: "https://i02.appmifile.com/mi-com-product/fly-birds/poco-m7/PC/00d55520447ac8a9ec31bdf123cdc7f0.jpg" },
      { name: "Vivo T4 Lite", price: "₹12,999", img: "https://cdn.beebom.com/content/2025/07/vivo-t4-lite-5g-in-blue-colour-option-back-design.jpg" },
      { name: "Oppo Reno 11", price: "₹22,999", img: "https://drnareshkumar.in/wp-content/uploads/2025/07/Oppo-Reno-14-Pro-5G_20250630_134137_0000-1024x576.webp" },
      { name: "iQOO Z9 5G", price: "₹14,999", img: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1680678352553/zip/img/iqoo9pro-charge-video-mb.jpg.webp" },
      { name: "Realme Narzo 70 Pro", price: "₹18,999", img: "https://s3b.cashify.in/gpro/uploads/2024/02/28141609/Narzo_70_1_1200x600-1024x512.webp" },
      { name: "Pixel 8", price: "₹74,999", img: "https://cdn.editorji.com/1689079222375/64ad4db65b8d8_google-pixel-8-price-launch-tipped_img.0000000.jpg" },
      { name: "Redmi Note 13", price: "₹16,499", img: "https://i.ytimg.com/vi/mz-7Iwb41QY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALygBywdcMl6bHbp80IXzHo3rqqQ " },
      { name: "Lava Blaze 5G", price: "₹10,499", img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/16/full/1734341075-1906.jpg" },
      { name: "Infinix Zero 30", price: "₹17,999", img: "https://m.media-amazon.com/images/I/51bhY9rloQL.jpg" },
      { name: "Nokia G42 5G", price: "₹11,499", img: "https://i.ytimg.com/vi/shWlIw8DkGM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSeLSm7xKexW9vklhgwsvR7UDMBw" },
      { name: "Apple iPad Air", price: "₹54,999", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue-wifi?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM3hxSU9Rc1hENld5ZlZGbisxZU9hWGJrbFd6ZHBvVk05L3d0WWlJMkh3MEU1V0hVSjZLVHJGenZsOFVicTBNclV1ZnhKeHNGWFhISWx4Q0lTRXA4dkY5Q2drLzhtOFgzejV4MENrZ0JFZVBwak9PMXpaSGlQNVErR3pISzM5NVpB&traceId=1" },
      { name: "Samsung Tab S9", price: "₹68,999", img: "https://m.media-amazon.com/images/I/71O5U+2PKWL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Realme Pad 2", price: "₹18,499", img: "https://www.gizbot.com/img/2023/07/realme-pad-2-featured-1690280904.jpg" },
      { name: "Lenovo Tab M10", price: "₹14,999", img: "https://images.droidsans.com/wp-content/uploads/2022/02/lenovo-tab-m10-plus-3rd-gen-specs-04.jpg" },
      { name: "Honor Pad X9", price: "₹15,999", img: "https://i.ytimg.com/vi/BBJ1RRRX4cc/maxresdefault.jpg" },
      { name: "iPad Mini 6", price: "₹46,999", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-2-202410_FMT_WHH?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=eDJDc00wczl1QWk5QmpVYitFNXQwOVgrSXpWVEhWaW9YTGlWRHFoSHU0OHNRQmFqeDVSd1F0U01sc01qRmFYSjFHNjlCSGljd3lKZmVzelVwRHRBMENrakpGNnhCWWJJa3RUVzhiczBkd2djSjdMTWFCN2xYb201eDlmYkRzMWc5aXVaZmpDQU5mR0d3d25sb0VQRmpB&traceId=1" },
      { name: "Xiaomi Pad 6", price: "₹27,999", img: "https://www.gadgetmatch.com/wp-content/uploads/2023/08/xiaomi-pad-6-review-gadgetmatch-20230810-03.jpg" },
    ],

    Electronics: [
      { name: "Sony Headphones", price: "₹3,499", img: "https://www.sony-asia.com/image/fb0ca0319f3f6fc16dfc08f6ff1cdb38?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320" },
      { name: "Boat Airdopes 441", price: "₹1,999", img: "https://i.ytimg.com/vi/00AWzlV2Tpw/maxresdefault.jpg" },
      { name: "JBL Speaker", price: "₹4,499", img: "https://m.media-amazon.com/images/I/71N8si9jomL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Canon DSLR", price: "₹44,999", img: "https://camerajabber.com/wp-content/uploads/2020/07/Canon_R5_07-scaled-1.jpg" },
      { name: "Mi Smart Band 8", price: "₹2,999", img: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-smart-band-8/m/overview/0b931f4f682567fde4e6a0d5e6c9fb64.png" },
      { name: "HP Laptop", price: "₹54,999", img: "https://images.jdmagicbox.com/quickquotes/images_main/second-hand-hp-laptop-2222941194-91s6y1qw.jpg" },
      { name: "Logitech Mouse", price: "₹899", img: "https://images.indianexpress.com/2022/10/logitech-fb.jpg" },
      { name: "Dell Monitor", price: "₹12,999", img: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/output-devices/composite-franchise-imagery/monitor/monitor-ultrasharp-family-franchise-page-1.jpg?fmt=jpg&wid=552&hei=460" },
      { name: "Samsung SSD", price: "₹5,499", img: "https://shop.clarioncomputers.in/wp-content/uploads/2024/07/SAMSUNG-980-500-GB-M.2-NVME-SSD-1-1.jpg" },
      { name: "TP-Link Router", price: "₹2,199", img: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/Y2864649-01?pgw=1" },
      { name: "Canon Printer", price: "₹6,499", img: "https://m.media-amazon.com/images/I/517hTqQvQ7L._AC_UF1000,1000_QL80_.jpg" },
      { name: "Sandisk Pendrive", price: "₹499", img: "https://m.media-amazon.com/images/I/61TuPtmTScL.jpg" },
      { name: "Apple AirPods Pro", price: "₹21,999", img: "https://www.apple.com/v/airpods/aa/images/meta/airpods__dh7xkbort402_og.png" },
      { name: "Smart Watch", price: "₹3,999", img: "https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/Jupiter25/1400x800_E2LIVE._SX1242_QL85_.jpg" },
      { name: "Power Bank", price: "₹1,299", img: "https://m.media-amazon.com/images/G/31/img22/WLA/2025/SoftLaunches_Sanjay/Ambrane/Ambrane_1242x450._SX1242_QL85_.jpg" },
      { name: "Gaming Mouse", price: "₹1,599", img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2024/03/gravastar-mercury-m1-pro-body.jpg?w=1600&h=900&fit=crop" },
      { name: "Smart LED Bulb", price: "₹799", img: "https://cdn.thewirecutter.com/wp-content/media/2024/02/smartledlightbulbs-2048px-07781-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" },
      { name: "Wireless Keyboard", price: "₹1,099", img: "https://cdn-ilaclcn.nitrocdn.com/IkKLERBsKJGajeJFZLrFyvZvzALRcamy/assets/images/optimized/rev-4926cca/www.netspaceindia.com/wp-content/uploads/2021/05/wireless-keyboard-1-1024x576.jpeg" },
      { name: "Tablet Stand", price: "₹699", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/furniture-accessory/j/x/a/steel-table-frame-for-table-best-for-study-or-dining-purpose-original-imag89wgvmq8zbhr.jpeg?q=90" },
      { name: "Phone Tripod", price: "₹1,199", img: "https://cdn.thewirecutter.com/wp-content/media/2024/05/phonetripods-2048px-2400-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" },
    ],

    Fashion: [
    { name: "Men's T-shirt", price: "₹499", img: "https://thehouseofrare.com/cdn/shop/files/molo-red.jpg?v=1750659751" },
    { name: "Women's Kurti", price: "₹699", img: "https://m.media-amazon.com/images/I/61tyq4EnOpL._AC_UY1100_.jpg" },
    { name: "Men’s Jeans", price: "₹1,299", img: "https://assets.ajio.com/medias/sys_master/root/20250613/YwJl/684bc92f55340d4b4fa91720/-473Wx593H-701345279-grey-MODEL.jpg" },
    { name: "Women’s Top", price: "₹899", img: "https://m.media-amazon.com/images/I/71V9cS6vRJL._AC_UY1100_.jpg" },
    { name: "Men’s Shirt", price: "₹999", img: "https://campussutra.com/cdn/shop/files/CSMOVSRT7609_3_52eadbc3-3c06-4480-abda-47bf3a54c0dd.jpg?v=1730801146&width=2000" },
    { name: "Women’s Dress", price: "₹1,499", img: "https://mahezon.in/cdn/shop/files/IMG-20241126-WA0674_800x1026_crop_center@2x.jpg?v=1732617734" },
    { name: "Men’s Jacket", price: "₹2,499", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/jacket/c/u/j/xxl-no-classic-latest-fashion-black-biker-leather-jacket-for-men-original-imagtzbkwz4wjzwb.jpeg?q=90" },
    { name: "Women’s Saree", price: "₹1,199", img: "https://www.bringitonline.in/uploads/2/2/4/5/22456530/female-model-photography-shoot-devyani-234_orig.jpg" },
    { name: "Men’s Shorts", price: "₹699", img: "https://www.technosport.in/cdn/shop/files/OR46Beetle_1.jpg?v=1738841775&width=1946" },
    { name: "Women’s Skirt", price: "₹799", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAZXhBf1TAEa0ZeD77zffhtWrTV3qUtjklw&s" },
    { name: "Kids T-shirt", price: "₹399", img: "https://www.tbhai.com/cdn/shop/products/NavyBlue7.png?v=1632293620" },
    { name: "Kids Frock", price: "₹499", img: "https://www.prashantisarees.com/cdn/shop/files/NQV12193-01.jpg?v=1733668992" },
    { name: "Women’s Handbag", price: "₹2,199", img: "https://m.media-amazon.com/images/I/61Z9jVNpWoL._AC_UY900_.jpg" },
    { name: "Men’s Wallet", price: "₹799", img: "https://www.themessycorner.in/cdn/shop/products/personalized-leather-men-s-wallet-black-the-messy-corner-mens-wallet-20319342690460_1800x.jpg?v=1628998037" },
    { name: "Men’s Watch", price: "₹3,499", img: "https://www.pierrecardinwatches.com/cdn/shop/files/CF.1004.PD.2_3.jpg?v=1731319393" },
    { name: "Women’s Watch", price: "₹2,999", img: "https://jokerandwitch.com/cdn/shop/products/AMWW397_hand_1080x.jpg?v=1626184889" },
    { name: "Men’s Cap", price: "₹299", img: "https://m.media-amazon.com/images/I/71tfUZuSYIL._AC_UY1100_.jpg" },
    { name: "Women’s Sunglasses", price: "₹1,999", img: "https://funkytradition.com/cdn/shop/files/0_2019-Fashion-Round-Sunglasses-Women-Brand-Designer-Luxury-Metal-Sun-Glasses-Classic-Retro-Outdoor-Eyewear-Oculos_0079d389-153f-48a8-8d3a-928126597c19.jpg?v=1723512244" },
    { name: "Men’s Belt", price: "₹499", img: "https://imagescdn.peterengland.com/img/app/product/3/39691911-14204113.jpg?auto=format&w=390" },
    { name: "Women’s Heels", price: "₹1,799", img: "https://shoethatfitsyou.in/cdn/shop/products/Black_stiletto.jpg?v=1571967681" },
  ],
  
  "Home & Furniture": [
  {
    name: "Wakefit Orthopedic Memory Foam Mattress",
    price: "₹9,999",
    img: "https://www.wakefit.co/blog/wp-content/uploads/2019/09/image-23-300x208.png",
  },
  {
    name: "Nilkamal Plastic Chair Set of 2",
    price: "₹2,499",
    img: "https://www.nilkamalfurniture.com/cdn/shop/files/BRZE2CHRCWBN.webp?v=1753767148&width=360",
  },
  {
    name: "Godrej Interio Queen Size Bed",
    price: "₹16,499",
    img: "https://m.media-amazon.com/images/I/71FenenM74L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Flipkart Perfect Homes Coffee Table",
    price: "₹4,199",
    img: "https://rukminim2.flixcart.com/image/704/844/xif0q/coffee-table/u/q/w/86-36-acacia-kasia-86-36-43-de-ct-5527-h-flipkart-perfect-homes-original-imahafm7gumugupe.jpeg?q=90&crop=false",
  },
  {
    name: "Cello Wardrobe 2 Door Plastic Cabinet",
    price: "₹5,999",
    img: "https://m.media-amazon.com/images/I/91LGsIRBXJL.jpg",
  },
  {
    name: "HomeTown Solid Wood Dining Table Set (4 Seater)",
    price: "₹13,499",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLYCQs-P03Q5r076IiqEA5-jmYDAdltr6Bg&s",
  },
  {
    name: "Green Soul Jupiter Gaming Chair",
    price: "₹12,999",
    img: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017547119_437Wx649H_202305151207061.jpeg",
  },
  {
    name: "Wakefit Study Table with Drawer",
    price: "₹6,499",
    img: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/WSTA/WSTATHENAPG/WSTATHENAPG_LS_1.jpg?tr=w-3840",
  },
  {
    name: "Durian Recliner Single Seater",
    price: "₹19,499",
    img: "https://images.durian.in/Durian/durian/product/800x800/222231706188481.jpg",
  },
  {
    name: "Adorn India L Shape Sofa Set (5 Seater)",
    price: "₹27,999",
    img: "https://adornindia.co.in/cdn/shop/files/1001_66afe502-7cca-4fb7-a63c-cacf0168a59e.jpg?v=1733396765",
  },
  {
    name: "Flipkart Perfect Homes Bookshelf",
    price: "₹3,799",
    img: "https://rukminim2.flixcart.com/image/480/640/kzvlua80/book-shelf/d/w/s/carbon-steel-pb-fphs-cover-bookshelf1-flipkart-perfect-homes-original-imagbse2ugesyuwc.jpeg?q=90",
  },
  {
    name: "Spacewood Computer Desk",
    price: "₹5,499",
    img: "https://www.burodesking.com/images/base/base1.jpg",
  },
  {
    name: "Durfi Bed Side Table (Engineered Wood)",
    price: "₹2,199",
    img: "https://m.media-amazon.com/images/I/41w30n446dL.jpg",
  },
  {
    name: "Flipkart Perfect Homes Bean Bag XXL",
    price: "₹1,499",
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/bean-bag/q/i/g/xxxl-fkphs-302-bbw-cp-blk-3xl-flipkart-perfect-homes-studio-original-imahyc7dsryhw4aw.jpeg?q=90",
  },
  {
    name: "HomeTown Wooden Shoe Rack",
    price: "₹3,999",
    img: "https://rukminim2.flixcart.com/image/480/640/jl16s280/shoe-rack/u/z/a/830028547001-hometown-original-imaf89f6yz7fxgvq.jpeg?q=90",
  },
  {
    name: "Durian Office Table Set with Chair",
    price: "₹9,799",
    img: "https://content.jdmagicbox.com/quickquotes/images_main/l-shaped-wooden-office-table-and-chair-set-801807636-jha0fv4e.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
  },
  {
    name: "Flipkart Perfect Homes Curtains Set of 2",
    price: "₹899",
    img: "https://rukminim2.flixcart.com/image/480/640/kqse07k0/curtain/c/c/h/ctw-1015-153-window-cotton-window-curtains-pack-of-2-eyelet-original-imag4q4zxshszkxr.jpeg?q=90",
  },
  {
    name: "SleepyCat Plus Memory Foam Pillow",
    price: "₹1,999",
    img: "https://m.media-amazon.com/images/I/81gicixEF7L.jpg",
  },
  {
    name: "Urban Ladder Wall Clock (Round)",
    price: "₹1,499",
    img: "https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/450x0/J4R0kDr1Pz-VAWDWC33GD87758_3.jpg",
  },
  {
    name: "Home Centre Floor Lamp (Wood & Fabric Shade)",
    price: "₹3,499",
    img: "https://m.media-amazon.com/images/I/61tTZBe88EL.jpg",
  },
],
"Appliances": [
  {
    name: "LG 7 kg Fully Automatic Washing Machine",
    price: "₹21,499",
    img: "https://rukminim2.flixcart.com/image/704/844/washing-machine-new/w/z/z/lg-t8067teelr-original-imae5hwcd29834t3.jpeg?q=20&crop=false",
  },
  {
    name: "Samsung 192 L Direct Cool Refrigerator",
    price: "₹15,999",
    img: "https://dailydeals365.in/wp-content/uploads/2023/02/81ScJm4GDLL._SL1500_.jpg",
  },
  {
    name: "Whirlpool 20 L Solo Microwave Oven",
    price: "₹6,999",
    img: "https://m.media-amazon.com/images/I/61W8n0p+vUL._AC_UF350,350_QL80_.jpg",
  },
  {
    name: "IFB 1.5 Ton 3 Star Split AC",
    price: "₹36,499",
    img: "https://m.media-amazon.com/images/I/41OATflhnnL.jpg",
  },
  {
    name: "Philips 750W Mixer Grinder (3 Jars)",
    price: "₹3,499",
    img: "https://www.rasoishop.com/cdn/shop/files/8720389014642.jpg?v=1696272211",
  },
  {
    name: "Havells 1200mm Ceiling Fan",
    price: "₹1,999",
    img: "https://m.media-amazon.com/images/I/61K7CG-ecML._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Prestige Induction Cooktop 1200W",
    price: "₹2,299",
    img: "https://m.media-amazon.com/images/I/31hlGduA4lL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Usha 25 L Water Heater",
    price: "₹8,299",
    img: "https://m.media-amazon.com/images/I/51t3VW1hniL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Kent Grand RO + UV + UF Water Purifier",
    price: "₹13,499",
    img: "https://www.jvelectric.co.in/stores/image/cache/catalog/kent_grand_product_big-399x525.jpg",
  },
  {
    name: "Bajaj Majesty 15 L Oven Toaster Grill",
    price: "₹5,699",
    img: "https://m.media-amazon.com/images/I/71qvAWWkgxL.jpg",
  },
  {
    name: "Bosch 8 kg Front Load Washing Machine",
    price: "₹42,999",
    img: "https://m.media-amazon.com/images/I/61hDAJ1ZMXL.jpg",
  },
  {
    name: "Philips HD9200 Air Fryer 4.1 L",
    price: "₹9,499",
    img: "https://www.jiomart.com/images/product/original/492572875/philips-essential-spectre-4-1l-airfryer-with-healthy-frying-with-rapid-air-technology-hd9200-black-digital-o492572875-p593828684-1-202511180340.jpeg?im=Resize=(420,420)",
  },
  {
    name: "Butterfly Smart Glass Gas Stove (2 Burner)",
    price: "₹2,499",
    img: "https://m.media-amazon.com/images/I/71yosGlGvWL.jpg",
  },
  {
    name: "Dyson V8 Absolute Cord-Free Vacuum Cleaner",
    price: "₹29,999",
    img: "https://m.media-amazon.com/images/I/610WJrBNrEL._AC_UF350,350_QL80_.jpg",
  },
  {
    name: "Havells Steam Iron 1600W",
    price: "₹1,799",
    img: "https://m.media-amazon.com/images/I/71f1MRQff5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Pigeon Electric Kettle 1.5 L",
    price: "₹899",
    img: "https://m.media-amazon.com/images/I/810-sGseHwL.jpg",
  },
  {
    name: "Voltas Beko 8 Place Dishwasher",
    price: "₹22,999",
    img: "https://www.favobliss.com/image/cache/catalog/Voltas-Beko-DT8B-Dishwasher%20%20(3)-550x550.jpg",
  },
  {
    name: "LG 32 L Convection Microwave Oven",
    price: "₹15,499",
    img: "https://m.media-amazon.com/images/I/81bj+66bFhL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Crompton 25 L Desert Air Cooler",
    price: "₹6,199",
    img: "https://rukminim2.flixcart.com/image/704/844/l1xwqkw0/air-cooler/x/g/z/-original-imagded23yngqhgn.jpeg?q=20&crop=false",
  },
  {
    name: "Philips Hair Dryer HP8100/60",
    price: "₹899",
    img: "https://m.media-amazon.com/images/I/61I2seGaPUL._AC_UF1000,1000_QL80_.jpg",
  },
],
"Beauty, Toys & More": [
  {
    name: "Maybelline Fit Me Matte Foundation",
    price: "₹499",
    img: "https://m.media-amazon.com/images/I/418-0bNNQgL.jpg",
  },
  {
    name: "L’Oreal Paris Shampoo Total Repair 5 (650 ml)",
    price: "₹499",
    img: "https://images-static.nykaa.com/media/catalog/product/a/c/ace06428901526588985_12.jpg?tr=w-500",
  },
  {
    name: "Nivea Soft Light Moisturizer Cream 300ml",
    price: "₹299",
    img: "https://images.apollo247.in/pub/media/catalog/product/n/i/niv0414_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
  },
  {
    name: "Lakme Eyeconic Kajal (Black)",
    price: "₹210",
    img: "https://images-static.nykaa.com/media/catalog/product/0/0/0060d70LAKME00000332-new_4.jpg?tr=w-500",
  },
  {
    name: "Philips Beard Trimmer BT3211/15",
    price: "₹1,299",
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/trimmer/p/6/p/0-5-10-mm-bt3211-15-stainless-steel-corded-cordless-philips-original-imahyqb3wkp6u2g6.jpeg?q=90",
  },
  {
    name: "Mamaearth Ubtan Face Wash 200ml",
    price: "₹399",
    img: "https://cdn01.pharmeasy.in/dam/products_otc/A28151/mamaearth-ubtan-natural-turmeric-saffron-face-wash-tube-of-200-ml-100ml-x-2-6.2-1632778226.jpg",
  },
  {
    name: "Ponds Super Light Gel Moisturizer 100g",
    price: "₹249",
    img: "https://m.media-amazon.com/images/I/51UpwNx0JSL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Denver Hamilton Deodorant Spray 165ml",
    price: "₹199",
    img: "https://www.quickpantry.in/cdn/shop/products/denver-hamilton-deodorant-body-spray-for-men-165-ml-quick-pantry.jpg?v=1738620803",
  },
  {
    name: "Hot Wheels Basic Car Set of 5",
    price: "₹699",
    img: "https://m.media-amazon.com/images/I/71VItuH2dML.jpg",
  },
  {
    name: "LEGO Classic Creative Bricks 221 pcs",
    price: "₹1,999",
    img: "https://m.media-amazon.com/images/I/713-28JZJ0L.jpg",
  },
  {
    name: "Barbie Dreamtopia Doll (Blonde)",
    price: "₹849",
    img: "https://www.funcorp.in/cdn/shop/files/HGR01_6.jpg?v=1685450038",
  },
  {
    name: "Fastrack Reflex Vox Smartwatch",
    price: "₹3,499",
    img: "https://m.media-amazon.com/images/I/61TVb9Z5PRL._AC_UY1000_.jpg",
  },
  {
    name: "Toyzone Rechargeable Remote Car",
    price: "₹1,299",
    img: "https://toyzone.in/cdn/shop/files/IMG_9647.jpg?v=1755629970&width=1946",
  },
  {
    name: "Dove Intense Repair Conditioner 180ml",
    price: "₹249",
    img: "https://media6.ppl-media.com/tr:h-550,w-550,c-at_max,dpr-2/static/img/product/366898/dove-intense-repair-damage-therapy-conditioner-180-ml-13-11-18-17-23_1_display_1720608376_7bea01dc.jpg",
  },
  {
    name: "Wow Skin Science Onion Hair Oil 200ml",
    price: "₹399",
    img: "https://media6.ppl-media.com/tr:h-550,w-550,c-at_max,dpr-2/static/img/product/173522/wow-skin-science-onion-black-seed-hair-oil-200-ml_1_display_1715680456_7fe0592d.jpg",
  },
  {
    name: "Philips Hair Straightener BHS393",
    price: "₹2,499",
    img: "https://m.media-amazon.com/images/I/61zVGTjnTxL._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "Ajmal Perfume Silver Shade 100ml",
    price: "₹899",
    img: "https://m.media-amazon.com/images/I/61c1aZeKWOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Wild Stone Code Body Spray 120ml",
    price: "₹249",
    img: "https://codegrooming.com/cdn/shop/files/Chrome120ml_88cd2dd4-d0f6-4eb4-b4b7-0ea7ff7e0e0d.png?v=1713529514",
  },
  {
    name: "Nerf Elite 2.0 Commander Blaster",
    price: "₹1,099",
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/toy-weapon/q/c/q/-original-imahcusdzeauzgzn.jpeg?q=90",
  },
  {
    name: "Rubik’s Cube 3x3 Original",
    price: "₹299",
    img: "https://cdn.prod.website-files.com/6595ca03bcd68f311fd41872/673cc25c8154cdc74cf26fae_product__MASTER_main.jpg",
  },
],

"Grocery": [
  { name: "India Gate Rozana Basmati Rice 5 kg", price: "₹2,499", img: "https://rukminim2.flixcart.com/image/480/640/klscivk0/rice/7/i/z/white-feast-rozzana-basmati-rice-bag-india-gate-original-imagytzcfuaw3gvq.jpeg?q=90" },
  { name: "Fortune Premium Kachi Ghani Pure Mustard Oil 5 L", price: "₹4,799", img: "https://rukminim2.flixcart.com/image/704/844/xif0q/edible-oil/k/d/w/5-kachi-ghani-pure-mustard-oil-phhr-jar-1-mustard-oil-fortune-original-imah5hmvnqh7h2tz.jpeg?q=90" },
  { name: "Haldiram's Khatta Meetha 400 g", price: "₹299", img: "https://www.urbangroc.com/wp-content/uploads/2021/04/Haldirams-Khatta-Meetha.jpg" },
  { name: "Amul Fresh Cow Milk 1 L", price: "₹69", img: "https://www.jiomart.com/images/product/original/590002686/amul-gold-full-cream-milk-1-l-pouch-product-images-o590002686-p590049228-0-202409131647.jpg" },
  { name: "Milky Mist Toned Paneer 200 g", price: "₹81", img: "https://5.imimg.com/data5/SELLER/Default/2023/4/298764910/IP/UW/ZZ/88982623/whatsapp-image-2023-04-07-at-6-00-44-pm.jpeg" },
  { name: "Tata Salt Iodised Table Salt 1 kg", price: "₹63", img: "https://m.media-amazon.com/images/I/616LG6VGBWL._AC_UF894,1000_QL80_.jpg" },
  { name: "Surf Excel Matic Top Load Detergent 2 kg", price: "₹289", img: "https://m.media-amazon.com/images/I/51xoF1fPbgL.jpg" },
  { name: "Lipton Yellow Label Tea 250 g", price: "₹199", img: "https://rukminim2.flixcart.com/image/480/640/j3orcsw0/tea/7/3/f/250-yellow-label-tea-yellow-tea-leaves-lipton-original-imaeurgtzm7p7ngy.jpeg?q=90" },
  { name: "Maggi 2-Minute Noodles Masala 70 g × 5", price: "₹49", img: "https://m.media-amazon.com/images/I/71Y7pDHbi8L._AC_UF894,1000_QL80_.jpg" },
  { name: "Tata Salt Lite 1 kg", price: "₹69", img: "https://m.media-amazon.com/images/I/81Zm+cRKt0L._AC_UF894,1000_QL80_.jpg" },
  { name: "Parle-G Original Biscuits 1 kg", price: "₹299", img: "https://images-cdn.ubuy.co.in/63550747c4c076612a776722-parle-g-biscuits-1-kg-original-gluco.jpg" },
  { name: "Knorr Soup Mushroom 60 g", price: "₹55", img: "https://m.media-amazon.com/images/I/61LYQ8FgTwS._AC_UF894,1000_QL80_.jpg" },
  { name: "Eveready Alkaline AA Batteries 4-Pack", price: "₹119", img: "https://m.media-amazon.com/images/I/619XCon07OL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Catch Spices Turmeric Powder 100 g", price: "₹99", img: "https://m.media-amazon.com/images/I/71AK6ErhjhL._AC_UF894,1000_QL80_.jpg" },
  { name: "Dabur Amla Hair Oil 450 ml", price: "₹219", img: "https://www.jiomart.com/images/product/original/490004775/dabur-amla-hair-oil-450-ml-product-images-o490004775-p490004775-1-202207282044.jpg?im=Resize=(1000,1000)" },
  { name: "Nutella Hazelnut Cocoa Spread 400 g", price: "₹399", img: "https://m.media-amazon.com/images/I/51rv3XKrivL._AC_UF894,1000_QL80_.jpg" },
  { name: "Coca-Cola Regular Can 330 ml × 6", price: "₹239", img: "https://cdn.mafrservices.com/sys-master-root/h7c/h21/10279957233694/758516_main.jpg" },
  { name: "Cadbury Dairy Milk Chocolate 60 g", price: "₹65", img: "https://jammubasket.com/images/products/1825_cadbury-dairy-milk-silk-oreo-chocolate-130-g-82efa19833b481245d8da23636457954.jpeg" },
  { name: "Tata Salt Plus Vitamins 1 kg", price: "₹75", img: "https://m.media-amazon.com/images/I/61O8JmQzMLL.jpg" },
  { name: "Aashirvaad Whole Wheat Atta 5 kg", price: "₹269", img: "https://m.media-amazon.com/images/I/71PWhguzXkL._AC_UF894,1000_QL80_.jpg" },
  { name: "Tata Gold Medals Premium Tea 1 kg", price: "₹699", img: "https://www.tatanutrikorner.com/cdn/shop/files/61ZjHgCnGuL._SL1000.jpg?v=1745569622&width=1445" },
]


  };

 // 🛒 BUY HANDLER
   const handleBuy = (product) => {
    // product save pannrom
    localStorage.setItem("buyProduct", JSON.stringify(product));

    // NEW TAB open
    window.open("/buy-now", "_blank");
  };

  return (
    <div className="product-section">
      {Object.keys(allProducts).map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="product-grid">
            {allProducts[category].map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>

                <button
                  className="buy-btn"
                  onClick={() => handleBuy(product)}
                >
                  BUY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;