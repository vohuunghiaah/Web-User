const allProduct = [
  {
    id: 1,
    name: "Bàn phím cơ SteelSeries Apex Pro",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_06.jpg",
    orginalPrice: "3.500.000đ",
    discountPercent: "-8%",
    currentPrice: "3.220.000đ",
    price: 3220000,
    priceDiscountText: "Giảm 280.000đ",
    link: "./product-details.html?id=1",
  },
  {
    id: 2,
    name: "Bàn phím cơ Leopold FC750R",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_12.webp",
    orginalPrice: "2.300.000đ",
    discountPercent: "-13%",
    currentPrice: "2.001.000đ",
    price: 2001000,
    priceDiscountText: "Giảm 299.000đ",
    link: "./product-details.html?id=2",
  },
  {
    id: 3,
    name: "Bàn phím cơ Corsair K95 RGB Platinum",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_04.png",
    orginalPrice: "3.200.000đ",
    discountPercent: "-10%",
    currentPrice: "2.880.000đ",
    price: 2880000,
    priceDiscountText: "Giảm 320.000đ",
    link: "./product-details.html?id=3",
  },
  {
    id: 4,
    name: "Bàn phím cơ Razer BlackWidow V3",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_05.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-12%",
    currentPrice: "2.464.000đ",
    price: 2464000,
    priceDiscountText: "Giảm 336.000đ",
    link: "./product-details.html?id=4",
  },
  {
    id: 5,
    name: "Bàn phím cơ không dây AULA F75",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_02.png",
    orginalPrice: "1.000.000đ",
    discountPercent: "-20%",
    currentPrice: "800.000đ",
    price: 800000,
    priceDiscountText: "Giảm 200.000đ",
    link: "./product-details.html?id=5",
  },
  {
    id: 6,
    name: "Bàn phím cơ HyperX Alloy Elite 2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_07.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=6",
  },
  {
    id: 7,
    name: "Bàn phím cơ ASUS ROG Strix Scope",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_08.jpeg",
    orginalPrice: "2.600.000đ",
    discountPercent: "-14%",
    currentPrice: "2.236.000đ",
    price: 2236000,
    priceDiscountText: "Giảm 364.000đ",
    link: "./product-details.html?id=7",
  },
  {
    id: 8,
    name: "Bàn phím cơ Cooler Master CK550",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_09.webp",
    orginalPrice: "1.800.000đ",
    discountPercent: "-22%",
    currentPrice: "1.404.000đ",
    price: 1404000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=8",
  },
  {
    id: 9,
    name: "Bàn phím cơ Ducky One 3",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_10.webp",
    orginalPrice: "2.400.000đ",
    discountPercent: "-16%",
    currentPrice: "2.016.000đ",
    price: 2016000,
    priceDiscountText: "Giảm 384.000đ",
    link: "./product-details.html?id=9",
  },
  {
    id: 10,
    name: "Bàn phím cơ Varmilo VA87M",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_11.webp",
    orginalPrice: "2.100.000đ",
    discountPercent: "-20%",
    currentPrice: "1.680.000đ",
    price: 1680000,
    priceDiscountText: "Giảm 420.000đ",
    link: "./product-details.html?id=10",
  },
  {
    id: 11,
    name: "Bàn phím cơ Logitech G Pro X",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_03.png",
    orginalPrice: "2.500.000đ",
    discountPercent: "-15%",
    currentPrice: "2.125.000đ",
    price: 2125000,
    priceDiscountText: "Giảm 375.000đ",
    link: "./product-details.html?id=11",
  },
  {
    id: 12,
    name: "Bàn phím cơ Filco Majestouch 2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_13.webp",
    orginalPrice: "2.700.000đ",
    discountPercent: "-11%",
    currentPrice: "2.403.000đ",
    price: 2403000,
    priceDiscountText: "Giảm 297.000đ",
    link: "./product-details.html?id=12",
  },
  {
    id: 13,
    name: "Bàn phím cơ Keychron K8",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_14.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-25%",
    currentPrice: "1.125.000đ",
    price: 1125000,
    priceDiscountText: "Giảm 375.000đ",
    link: "./product-details.html?id=13",
  },
  {
    id: 14,
    name: "Bàn phím cơ Anne Pro 2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_15.webp",
    orginalPrice: "1.600.000đ",
    discountPercent: "-19%",
    currentPrice: "1.296.000đ",
    price: 1296000,
    priceDiscountText: "Giảm 304.000đ",
    link: "./product-details.html?id=14",
  },
  {
    id: 15,
    name: "Bàn phím cơ RK61",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_16.webp",
    orginalPrice: "1.200.000đ",
    discountPercent: "-30%",
    currentPrice: "840.000đ",
    price: 840000,
    priceDiscountText: "Giảm 360.000đ",
    link: "./product-details.html?id=15",
  },
  {
    id: 16,
    name: "Bàn phím cơ GMMK Pro",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_17.webp",
    orginalPrice: "2.800.000đ",
    discountPercent: "-17%",
    currentPrice: "2.324.000đ",
    price: 2324000,
    priceDiscountText: "Giảm 476.000đ",
    link: "./product-details.html?id=16",
  },
  {
    id: 17,
    name: "Bàn phím cơ Drop ALT",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_18.jpg",
    orginalPrice: "3.000.000đ",
    discountPercent: "-9%",
    currentPrice: "2.730.000đ",
    price: 2730000,
    priceDiscountText: "Giảm 270.000đ",
    link: "./product-details.html?id=17",
  },
  {
    id: 18,
    name: "Bàn phím cơ Massdrop Ctrl",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_19.jpg",
    orginalPrice: "2.900.000đ",
    discountPercent: "-15%",
    currentPrice: "2.465.000đ",
    price: 2465000,
    priceDiscountText: "Giảm 435.000đ",
    link: "./product-details.html?id=18",
  },
  {
    id: 19,
    name: "Bàn phím cơ Vortex Race 3",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_20.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-21%",
    currentPrice: "1.738.000đ",
    price: 1738000,
    priceDiscountText: "Giảm 462.000đ",
    link: "./product-details.html?id=19",
  },
  {
    id: 20,
    name: "Bàn phím cơ KBDfans KBD75",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_21.jpg",
    orginalPrice: "2.500.000đ",
    discountPercent: "-18%",
    currentPrice: "2.050.000đ",
    price: 2050000,
    priceDiscountText: "Giảm 450.000đ",
    link: "./product-details.html?id=20",
  },
  {
    id: 21,
    name: "Bàn phím cơ Tofu65",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_22.jpg",
    orginalPrice: "2.600.000đ",
    discountPercent: "-16%",
    currentPrice: "2.184.000đ",
    price: 2184000,
    priceDiscountText: "Giảm 416.000đ",
    link: "./product-details.html?id=21",
  },
  {
    id: 22,
    name: "Bàn phím cơ NK65 Entry Edition",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_23.jpg",
    orginalPrice: "2.300.000đ",
    discountPercent: "-23%",
    currentPrice: "1.771.000đ",
    price: 1771000,
    priceDiscountText: "Giảm 529.000đ",
    link: "./product-details.html?id=22",
  },
  {
    id: 23,
    name: "Bàn phím cơ Rama M65-B",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_24.webp",
    orginalPrice: "4.500.000đ",
    discountPercent: "-7%",
    currentPrice: "4.185.000đ",
    price: 4185000,
    priceDiscountText: "Giảm 315.000đ",
    link: "./product-details.html?id=23",
  },
  {
    id: 24,
    name: "Bàn phím cơ Satisfaction75",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_25.jpg",
    orginalPrice: "5.200.000đ",
    discountPercent: "-5%",
    currentPrice: "4.940.000đ",
    price: 4940000,
    priceDiscountText: "Giảm 260.000đ",
    link: "./product-details.html?id=24",
  },
  {
    id: 25,
    name: "Bàn phím cơ Think6.5 V2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_26.webp",
    orginalPrice: "3.800.000đ",
    discountPercent: "-12%",
    currentPrice: "3.344.000đ",
    price: 3344000,
    priceDiscountText: "Giảm 456.000đ",
    link: "./product-details.html?id=25",
  },
  {
    id: 26,
    name: "Bàn phím cơ Space65",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_27.jpg",
    orginalPrice: "4.200.000đ",
    discountPercent: "-10%",
    currentPrice: "3.780.000đ",
    price: 3780000,
    priceDiscountText: "Giảm 420.000đ",
    link: "./product-details.html?id=26",
  },
  {
    id: 27,
    name: "Bàn phím cơ Polaris",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_28.webp",
    orginalPrice: "3.500.000đ",
    discountPercent: "-14%",
    currentPrice: "3.010.000đ",
    price: 3010000,
    priceDiscountText: "Giảm 490.000đ",
    link: "./product-details.html?id=27",
  },
  {
    id: 28,
    name: "Bàn phím cơ Vega",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_29.png",
    orginalPrice: "4.000.000đ",
    discountPercent: "-8%",
    currentPrice: "3.680.000đ",
    price: 3680000,
    priceDiscountText: "Giảm 320.000đ",
    link: "./product-details.html?id=28",
  },
  {
    id: 29,
    name: "Bàn phím cơ Iron165",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_30.png",
    orginalPrice: "3.600.000đ",
    discountPercent: "-11%",
    currentPrice: "3.204.000đ",
    price: 3204000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=29",
  },
  {
    id: 30,
    name: "Bàn phím cơ Bauer",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_31.jpg",
    orginalPrice: "3.200.000đ",
    discountPercent: "-13%",
    currentPrice: "2.784.000đ",
    price: 2784000,
    priceDiscountText: "Giảm 416.000đ",
    link: "./product-details.html?id=30",
  },
  {
    id: 31,
    name: "Bàn phím cơ Matrix 2.0 Add",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_32.jpg",
    orginalPrice: "4.800.000đ",
    discountPercent: "-6%",
    currentPrice: "4.512.000đ",
    price: 4512000,
    priceDiscountText: "Giảm 288.000đ",
    link: "./product-details.html?id=31",
  },
  {
    id: 32,
    name: "Bàn phím cơ TGR Alice",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_33.jpg",
    orginalPrice: "5.500.000đ",
    discountPercent: "-4%",
    currentPrice: "5.280.000đ",
    price: 5280000,
    priceDiscountText: "Giảm 220.000đ",
    link: "./product-details.html?id=32",
  },
  {
    id: 33,
    name: "Bàn phím cơ Keycult No.1 Rev.1",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_34.jpg",
    orginalPrice: "6.200.000đ",
    discountPercent: "-3%",
    currentPrice: "6.014.000đ",
    price: 6014000,
    priceDiscountText: "Giảm 186.000đ",
    link: "./product-details.html?id=33",
  },
  {
    id: 34,
    name: "Bàn phím cơ Duck Viper V2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_35.jpg",
    orginalPrice: "4.500.000đ",
    discountPercent: "-9%",
    currentPrice: "4.095.000đ",
    price: 4095000,
    priceDiscountText: "Giảm 405.000đ",
    link: "./product-details.html?id=34",
  },
  {
    id: 35,
    name: "Bàn phím cơ Duck Eagle V2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_36.jpg",
    orginalPrice: "4.200.000đ",
    discountPercent: "-12%",
    currentPrice: "3.696.000đ",
    price: 3696000,
    priceDiscountText: "Giảm 504.000đ",
    link: "./product-details.html?id=35",
  },
  {
    id: 36,
    name: "Bàn phím cơ Duck Lightsaver V3",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_37.jpg",
    orginalPrice: "4.800.000đ",
    discountPercent: "-8%",
    currentPrice: "4.416.000đ",
    price: 4416000,
    priceDiscountText: "Giảm 384.000đ",
    link: "./product-details.html?id=36",
  },
  {
    id: 37,
    name: "Bàn phím cơ Duck Orion V2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_38.png",
    orginalPrice: "3.900.000đ",
    discountPercent: "-15%",
    currentPrice: "3.315.000đ",
    price: 3315000,
    priceDiscountText: "Giảm 585.000đ",
    link: "./product-details.html?id=37",
  },
  {
    id: 38,
    name: "Bàn phím cơ Duck Octagon V2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_39.jpg",
    orginalPrice: "4.100.000đ",
    discountPercent: "-11%",
    currentPrice: "3.649.000đ",
    price: 3649000,
    priceDiscountText: "Giảm 451.000đ",
    link: "./product-details.html?id=38",
  },
  {
    id: 39,
    name: "Bàn phím cơ Duck Jetfire",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_40.webp",
    orginalPrice: "3.700.000đ",
    discountPercent: "-14%",
    currentPrice: "3.182.000đ",
    price: 3182000,
    priceDiscountText: "Giảm 518.000đ",
    link: "./product-details.html?id=39",
  },
  {
    id: 40,
    name: "Bàn phím cơ Duck Blackbird",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_41.webp",
    orginalPrice: "4.300.000đ",
    discountPercent: "-10%",
    currentPrice: "3.870.000đ",
    price: 3870000,
    priceDiscountText: "Giảm 430.000đ",
    link: "./product-details.html?id=40",
  },
  {
    id: 41,
    name: "Bàn phím cơ Duck Mini V2",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_42.webp",
    orginalPrice: "3.500.000đ",
    discountPercent: "-16%",
    currentPrice: "2.940.000đ",
    price: 2940000,
    priceDiscountText: "Giảm 560.000đ",
    link: "./product-details.html?id=41",
  },
  {
    id: 42,
    name: "Bàn phím cơ Duck Poker II",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_43.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-20%",
    currentPrice: "2.240.000đ",
    price: 2240000,
    priceDiscountText: "Giảm 560.000đ",
    link: "./product-details.html?id=42",
  },
  {
    id: 43,
    name: "Bàn phím cơ Duck Shine 3",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_44.webp",
    orginalPrice: "2.600.000đ",
    discountPercent: "-18%",
    currentPrice: "2.132.000đ",
    price: 2132000,
    priceDiscountText: "Giảm 468.000đ",
    link: "./product-details.html?id=43",
  },
  {
    id: 44,
    name: "Bàn phím cơ Duck Shine 4",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_45.png",
    orginalPrice: "2.900.000đ",
    discountPercent: "-17%",
    currentPrice: "2.407.000đ",
    price: 2407000,
    priceDiscountText: "Giảm 493.000đ",
    link: "./product-details.html?id=44",
  },
  {
    id: 45,
    name: "Bàn phím cơ Duck Shine 5",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_46.png",
    orginalPrice: "3.100.000đ",
    discountPercent: "-15%",
    currentPrice: "2.635.000đ",
    price: 2635000,
    priceDiscountText: "Giảm 465.000đ",
    link: "./product-details.html?id=45",
  },
  {
    id: 46,
    name: "Bàn phím cơ Duck Shine 6",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_47.webp",
    orginalPrice: "3.300.000đ",
    discountPercent: "-13%",
    currentPrice: "2.871.000đ",
    price: 2871000,
    priceDiscountText: "Giảm 429.000đ",
    link: "./product-details.html?id=46",
  },
  {
    id: 47,
    name: "Bàn phím cơ Duck Shine 7",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_48.webp",
    orginalPrice: "3.500.000đ",
    discountPercent: "-12%",
    currentPrice: "3.080.000đ",
    price: 3080000,
    priceDiscountText: "Giảm 420.000đ",
    link: "./product-details.html?id=47",
  },
  {
    id: 48,
    name: "Bàn phím cơ Duck Shine 8",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_49.webp",
    orginalPrice: "3.700.000đ",
    discountPercent: "-11%",
    currentPrice: "3.293.000đ",
    price: 3293000,
    priceDiscountText: "Giảm 407.000đ",
    link: "./product-details.html?id=48",
  },
  {
    id: 49,
    name: "Bàn phím cơ Duck Shine 9",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_50.webp",
    orginalPrice: "3.900.000đ",
    discountPercent: "-10%",
    currentPrice: "3.510.000đ",
    price: 3510000,
    priceDiscountText: "Giảm 390.000đ",
    link: "./product-details.html?id=49",
  },
  {
    id: 50,
    name: "Bàn phím cơ Duck Shine 10",
    category: "keyboard",
    imgSrc: "./assets/img/Keyboard/keyboard_01.jpg",
    orginalPrice: "4.100.000đ",
    discountPercent: "-9%",
    currentPrice: "3.731.000đ",
    price: 3731000,
    priceDiscountText: "Giảm 369.000đ",
    link: "./product-details.html?id=50",
  },
  {
    id: 51,
    name: "Chuột gaming Logitech G Pro X Superlight",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_01.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-15%",
    currentPrice: "1.870.000đ",
    price: 1870000,
    priceDiscountText: "Giảm 330.000đ",
    link: "./product-details.html?id=51",
  },
  {
    id: 52,
    name: "Chuột gaming Razer DeathAdder V3 Pro",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_02.jpg",
    orginalPrice: "2.500.000đ",
    discountPercent: "-12%",
    currentPrice: "2.200.000đ",
    price: 2200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=52",
  },
  {
    id: 53,
    name: "Chuột gaming SteelSeries Aerox 3",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_03.png",
    orginalPrice: "1.800.000đ",
    discountPercent: "-18%",
    currentPrice: "1.476.000đ",
    price: 1476000,
    priceDiscountText: "Giảm 324.000đ",
    link: "./product-details.html?id=53",
  },
  {
    id: 54,
    name: "Chuột gaming Corsair Dark Core RGB Pro",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_04.jpg",
    orginalPrice: "2.100.000đ",
    discountPercent: "-14%",
    currentPrice: "1.806.000đ",
    price: 1806000,
    priceDiscountText: "Giảm 294.000đ",
    link: "./product-details.html?id=54",
  },
  {
    id: 55,
    name: "Chuột gaming HyperX Pulsefire Haste",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_05.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=55",
  },
  {
    id: 56,
    name: "Chuột gaming ASUS ROG Gladius III",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_06.webp",
    orginalPrice: "1.900.000đ",
    discountPercent: "-16%",
    currentPrice: "1.596.000đ",
    price: 1596000,
    priceDiscountText: "Giảm 304.000đ",
    link: "./product-details.html?id=56",
  },
  {
    id: 57,
    name: "Chuột gaming Cooler Master MM711",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_07.jpg",
    orginalPrice: "1.200.000đ",
    discountPercent: "-25%",
    currentPrice: "900.000đ",
    price: 900000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=57",
  },
  {
    id: 58,
    name: "Chuột gaming Zowie EC2-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_08.jpg",
    orginalPrice: "1.600.000đ",
    discountPercent: "-19%",
    currentPrice: "1.296.000đ",
    price: 1296000,
    priceDiscountText: "Giảm 304.000đ",
    link: "./product-details.html?id=58",
  },
  {
    id: 59,
    name: "Chuột gaming Finalmouse Starlight-12",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_09.jpg",
    orginalPrice: "3.500.000đ",
    discountPercent: "-8%",
    currentPrice: "3.220.000đ",
    price: 3220000,
    priceDiscountText: "Giảm 280.000đ",
    link: "./product-details.html?id=59",
  },
  {
    id: 60,
    name: "Chuột gaming Glorious Model O",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_10.jpg",
    orginalPrice: "1.400.000đ",
    discountPercent: "-22%",
    currentPrice: "1.092.000đ",
    price: 1092000,
    priceDiscountText: "Giảm 308.000đ",
    link: "./product-details.html?id=60",
  },
  {
    id: 61,
    name: "Chuột gaming Glorious Model D",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_11.jpg",
    orginalPrice: "1.400.000đ",
    discountPercent: "-21%",
    currentPrice: "1.106.000đ",
    price: 1106000,
    priceDiscountText: "Giảm 294.000đ",
    link: "./product-details.html?id=61",
  },
  {
    id: 62,
    name: "Chuột gaming Pulsar Xlite V2",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_12.jpg",
    orginalPrice: "1.800.000đ",
    discountPercent: "-17%",
    currentPrice: "1.494.000đ",
    price: 1494000,
    priceDiscountText: "Giảm 306.000đ",
    link: "./product-details.html?id=62",
  },
  {
    id: 63,
    name: "Chuột gaming Ninjutso OOX",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_13.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-13%",
    currentPrice: "1.914.000đ",
    price: 1914000,
    priceDiscountText: "Giảm 286.000đ",
    link: "./product-details.html?id=63",
  },
  {
    id: 64,
    name: "Chuột gaming Xtrfy M42",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_14.webp",
    orginalPrice: "1.600.000đ",
    discountPercent: "-20%",
    currentPrice: "1.280.000đ",
    price: 1280000,
    priceDiscountText: "Giảm 320.000đ",
    link: "./product-details.html?id=64",
  },
  {
    id: 65,
    name: "Chuột gaming Xtrfy M4",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_15.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-23%",
    currentPrice: "1.155.000đ",
    price: 1155000,
    priceDiscountText: "Giảm 345.000đ",
    link: "./product-details.html?id=65",
  },
  {
    id: 66,
    name: "Chuột gaming Endgame Gear XM1R",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_16.jpg",
    orginalPrice: "1.700.000đ",
    discountPercent: "-18%",
    currentPrice: "1.394.000đ",
    price: 1394000,
    priceDiscountText: "Giảm 306.000đ",
    link: "./product-details.html?id=66",
  },
  {
    id: 67,
    name: "Chuột gaming Vaxee Outset AX",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_17.png",
    orginalPrice: "1.800.000đ",
    discountPercent: "-16%",
    currentPrice: "1.512.000đ",
    price: 1512000,
    priceDiscountText: "Giảm 288.000đ",
    link: "./product-details.html?id=67",
  },
  {
    id: 68,
    name: "Chuột gaming Vaxee NP-01",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_18.jpg",
    orginalPrice: "1.600.000đ",
    discountPercent: "-19%",
    currentPrice: "1.296.000đ",
    price: 1296000,
    priceDiscountText: "Giảm 304.000đ",
    link: "./product-details.html?id=68",
  },
  {
    id: 69,
    name: "Chuột gaming Vaxee Zygen NP-01S",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_19.png",
    orginalPrice: "1.700.000đ",
    discountPercent: "-17%",
    currentPrice: "1.411.000đ",
    price: 1411000,
    priceDiscountText: "Giảm 289.000đ",
    link: "./product-details.html?id=69",
  },
  {
    id: 70,
    name: "Chuột gaming Roccat Kone Pro Air",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_20.jpg",
    orginalPrice: "2.000.000đ",
    discountPercent: "-15%",
    currentPrice: "1.700.000đ",
    price: 1700000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=70",
  },
  {
    id: 71,
    name: "Chuột gaming Roccat Burst Pro",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_21.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-24%",
    currentPrice: "1.140.000đ",
    price: 1140000,
    priceDiscountText: "Giảm 360.000đ",
    link: "./product-details.html?id=71",
  },
  {
    id: 72,
    name: "Chuột gaming Roccat Kain 120",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_22.webp",
    orginalPrice: "1.400.000đ",
    discountPercent: "-21%",
    currentPrice: "1.106.000đ",
    price: 1106000,
    priceDiscountText: "Giảm 294.000đ",
    link: "./product-details.html?id=72",
  },
  {
    id: 73,
    name: "Chuột gaming BenQ Zowie FK1-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_23.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=73",
  },
  {
    id: 74,
    name: "Chuột gaming BenQ Zowie FK2-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_24.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=74",
  },
  {
    id: 75,
    name: "Chuột gaming BenQ Zowie S1-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_25.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=75",
  },
  {
    id: 76,
    name: "Chuột gaming BenQ Zowie S2-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_26.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=76",
  },
  {
    id: 77,
    name: "Chuột gaming BenQ Zowie ZA11-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_27.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=77",
  },
  {
    id: 78,
    name: "Chuột gaming BenQ Zowie ZA12-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_28.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=78",
  },
  {
    id: 79,
    name: "Chuột gaming BenQ Zowie ZA13-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_29.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=79",
  },
  {
    id: 80,
    name: "Chuột gaming BenQ Zowie EC1-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_30.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=80",
  },
  {
    id: 81,
    name: "Chuột gaming BenQ Zowie EC3-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_31.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=81",
  },
  {
    id: 82,
    name: "Chuột gaming BenQ Zowie FK1+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_32.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=82",
  },
  {
    id: 83,
    name: "Chuột gaming BenQ Zowie FK2+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_33.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=83",
  },
  {
    id: 84,
    name: "Chuột gaming BenQ Zowie S1+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_34.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=84",
  },
  {
    id: 85,
    name: "Chuột gaming BenQ Zowie S2+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_35.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=85",
  },
  {
    id: 86,
    name: "Chuột gaming BenQ Zowie ZA11+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_36.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=86",
  },
  {
    id: 87,
    name: "Chuột gaming BenQ Zowie ZA12+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_37.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=87",
  },
  {
    id: 88,
    name: "Chuột gaming BenQ Zowie ZA13+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_38.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=88",
  },
  {
    id: 89,
    name: "Chuột gaming BenQ Zowie EC1+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_39.webp",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=89",
  },
  {
    id: 90,
    name: "Chuột gaming BenQ Zowie EC3+-C",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_40.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=90",
  },
  {
    id: 91,
    name: "Chuột gaming BenQ Zowie FK1-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_41.webp",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=91",
  },
  {
    id: 92,
    name: "Chuột gaming BenQ Zowie FK2-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_42.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=92",
  },
  {
    id: 93,
    name: "Chuột gaming BenQ Zowie S1-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_43.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=93",
  },
  {
    id: 94,
    name: "Chuột gaming BenQ Zowie S2-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_44.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=94",
  },
  {
    id: 95,
    name: "Chuột gaming BenQ Zowie ZA11-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_45.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=95",
  },
  {
    id: 96,
    name: "Chuột gaming BenQ Zowie ZA12-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_46.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=96",
  },
  {
    id: 97,
    name: "Chuột gaming BenQ Zowie ZA13-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_47.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=97",
  },
  {
    id: 98,
    name: "Chuột gaming BenQ Zowie EC1-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_48.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=98",
  },
  {
    id: 99,
    name: "Chuột gaming BenQ Zowie EC3-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_49.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=99",
  },
  {
    id: 100,
    name: "Chuột gaming BenQ Zowie EC2-CW",
    category: "mouse",
    imgSrc: "./assets/img/Mouse/mouse_50.png",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=100",
  },
  {
    id: 101,
    name: "Tai nghe gaming Logitech G Pro X",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_01.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-15%",
    currentPrice: "2.380.000đ",
    price: 2380000,
    priceDiscountText: "Giảm 420.000đ",
    link: "./product-details.html?id=101",
  },
  {
    id: 102,
    name: "Tai nghe gaming Razer BlackShark V2 Pro",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_02.jpg",
    orginalPrice: "3.200.000đ",
    discountPercent: "-12%",
    currentPrice: "2.816.000đ",
    price: 2816000,
    priceDiscountText: "Giảm 384.000đ",
    link: "./product-details.html?id=102",
  },
  {
    id: 103,
    name: "Tai nghe gaming SteelSeries Arctis Pro",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_03.jpg",
    orginalPrice: "4.500.000đ",
    discountPercent: "-10%",
    currentPrice: "4.050.000đ",
    price: 4050000,
    priceDiscountText: "Giảm 450.000đ",
    link: "./product-details.html?id=103",
  },
  {
    id: 104,
    name: "Tai nghe gaming Corsair Virtuoso RGB Wireless",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_04.jpg",
    orginalPrice: "3.800.000đ",
    discountPercent: "-14%",
    currentPrice: "3.268.000đ",
    price: 3268000,
    priceDiscountText: "Giảm 532.000đ",
    link: "./product-details.html?id=104",
  },
  {
    id: 105,
    name: "Tai nghe gaming HyperX Cloud Alpha S",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_05.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-18%",
    currentPrice: "1.804.000đ",
    price: 1804000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=105",
  },
  {
    id: 106,
    name: "Tai nghe gaming ASUS ROG Delta S",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_06.jpg",
    orginalPrice: "2.600.000đ",
    discountPercent: "-16%",
    currentPrice: "2.184.000đ",
    price: 2184000,
    priceDiscountText: "Giảm 416.000đ",
    link: "./product-details.html?id=106",
  },
  {
    id: 107,
    name: "Tai nghe gaming Cooler Master MH751",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_07.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-20%",
    currentPrice: "1.200.000đ",
    price: 1200000,
    priceDiscountText: "Giảm 300.000đ",
    link: "./product-details.html?id=107",
  },
  {
    id: 108,
    name: "Tai nghe gaming Sennheiser GSP 600",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_08.jpg",
    orginalPrice: "3.500.000đ",
    discountPercent: "-13%",
    currentPrice: "3.045.000đ",
    price: 3045000,
    priceDiscountText: "Giảm 455.000đ",
    link: "./product-details.html?id=108",
  },
  {
    id: 109,
    name: "Tai nghe gaming Audio-Technica ATH-G1",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_09.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-17%",
    currentPrice: "2.324.000đ",
    price: 2324000,
    priceDiscountText: "Giảm 476.000đ",
    link: "./product-details.html?id=109",
  },
  {
    id: 110,
    name: "Tai nghe gaming Beyerdynamic DT 990",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_10.jpg",
    orginalPrice: "3.200.000đ",
    discountPercent: "-11%",
    currentPrice: "2.848.000đ",
    price: 2848000,
    priceDiscountText: "Giảm 352.000đ",
    link: "./product-details.html?id=110",
  },
  {
    id: 111,
    name: "Tai nghe gaming Beyerdynamic DT 770",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_11.jpg",
    orginalPrice: "2.900.000đ",
    discountPercent: "-15%",
    currentPrice: "2.465.000đ",
    price: 2465000,
    priceDiscountText: "Giảm 435.000đ",
    link: "./product-details.html?id=111",
  },
  {
    id: 112,
    name: "Tai nghe gaming Beyerdynamic DT 880",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_12.jpg",
    orginalPrice: "3.000.000đ",
    discountPercent: "-14%",
    currentPrice: "2.580.000đ",
    price: 2580000,
    priceDiscountText: "Giảm 420.000đ",
    link: "./product-details.html?id=112",
  },
  {
    id: 113,
    name: "Tai nghe gaming AKG K702",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_13.jpg",
    orginalPrice: "2.700.000đ",
    discountPercent: "-19%",
    currentPrice: "2.187.000đ",
    price: 2187000,
    priceDiscountText: "Giảm 513.000đ",
    link: "./product-details.html?id=113",
  },
  {
    id: 114,
    name: "Tai nghe gaming AKG K612 Pro",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_14.jpg",
    orginalPrice: "2.400.000đ",
    discountPercent: "-21%",
    currentPrice: "1.896.000đ",
    price: 1896000,
    priceDiscountText: "Giảm 504.000đ",
    link: "./product-details.html?id=114",
  },
  {
    id: 115,
    name: "Tai nghe gaming AKG K712 Pro",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_15.jpg",
    orginalPrice: "3.100.000đ",
    discountPercent: "-16%",
    currentPrice: "2.604.000đ",
    price: 2604000,
    priceDiscountText: "Giảm 496.000đ",
    link: "./product-details.html?id=115",
  },
  {
    id: 116,
    name: "Tai nghe gaming Philips Fidelio X2HR",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_16.jpg",
    orginalPrice: "2.500.000đ",
    discountPercent: "-18%",
    currentPrice: "2.050.000đ",
    price: 2050000,
    priceDiscountText: "Giảm 450.000đ",
    link: "./product-details.html?id=116",
  },
  {
    id: 117,
    name: "Tai nghe gaming Philips SHP9500",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_17.jpg",
    orginalPrice: "1.800.000đ",
    discountPercent: "-22%",
    currentPrice: "1.404.000đ",
    price: 1404000,
    priceDiscountText: "Giảm 396.000đ",
    link: "./product-details.html?id=117",
  },
  {
    id: 118,
    name: "Tai nghe gaming Philips Fidelio L2",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_18.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-20%",
    currentPrice: "1.760.000đ",
    price: 1760000,
    priceDiscountText: "Giảm 440.000đ",
    link: "./product-details.html?id=118",
  },
  {
    id: 119,
    name: "Tai nghe gaming Philips Fidelio X1",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_19.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-17%",
    currentPrice: "2.324.000đ",
    price: 2324000,
    priceDiscountText: "Giảm 476.000đ",
    link: "./product-details.html?id=119",
  },
  {
    id: 120,
    name: "Tai nghe gaming Philips Fidelio X3",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_20.jpg",
    orginalPrice: "3.200.000đ",
    discountPercent: "-15%",
    currentPrice: "2.720.000đ",
    price: 2720000,
    priceDiscountText: "Giảm 480.000đ",
    link: "./product-details.html?id=120",
  },
  {
    id: 121,
    name: "Tai nghe gaming Hifiman Sundara",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_21.jpg",
    orginalPrice: "4.200.000đ",
    discountPercent: "-12%",
    currentPrice: "3.696.000đ",
    price: 3696000,
    priceDiscountText: "Giảm 504.000đ",
    link: "./product-details.html?id=121",
  },
  {
    id: 122,
    name: "Tai nghe gaming Hifiman HE400se",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_22.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-18%",
    currentPrice: "2.296.000đ",
    price: 2296000,
    priceDiscountText: "Giảm 504.000đ",
    link: "./product-details.html?id=122",
  },
  {
    id: 123,
    name: "Tai nghe gaming Hifiman HE560",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_23.jpg",
    orginalPrice: "5.500.000đ",
    discountPercent: "-9%",
    currentPrice: "5.005.000đ",
    price: 5005000,
    priceDiscountText: "Giảm 495.000đ",
    link: "./product-details.html?id=123",
  },
  {
    id: 124,
    name: "Tai nghe gaming Hifiman Ananda",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_24.jpg",
    orginalPrice: "8.500.000đ",
    discountPercent: "-7%",
    currentPrice: "7.905.000đ",
    price: 7905000,
    priceDiscountText: "Giảm 595.000đ",
    link: "./product-details.html?id=124",
  },
  {
    id: 125,
    name: "Tai nghe gaming Hifiman Arya",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_25.jpg",
    orginalPrice: "12.000.000đ",
    discountPercent: "-5%",
    currentPrice: "11.400.000đ",
    price: 11400000,
    priceDiscountText: "Giảm 600.000đ",
    link: "./product-details.html?id=125",
  },
  {
    id: 126,
    name: "Tai nghe gaming Focal Clear",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_26.jpg",
    orginalPrice: "15.000.000đ",
    discountPercent: "-4%",
    currentPrice: "14.400.000đ",
    price: 14400000,
    priceDiscountText: "Giảm 600.000đ",
    link: "./product-details.html?id=126",
  },
  {
    id: 127,
    name: "Tai nghe gaming Focal Utopia",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_27.jpg",
    orginalPrice: "45.000.000đ",
    discountPercent: "-2%",
    currentPrice: "44.100.000đ",
    price: 44100000,
    priceDiscountText: "Giảm 900.000đ",
    link: "./product-details.html?id=127",
  },
  {
    id: 128,
    name: "Tai nghe gaming Focal Stellia",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_28.jpg",
    orginalPrice: "35.000.000đ",
    discountPercent: "-3%",
    currentPrice: "33.950.000đ",
    price: 33950000,
    priceDiscountText: "Giảm 1.050.000đ",
    link: "./product-details.html?id=128",
  },
  {
    id: 129,
    name: "Tai nghe gaming Focal Elegia",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_29.jpg",
    orginalPrice: "8.500.000đ",
    discountPercent: "-8%",
    currentPrice: "7.820.000đ",
    price: 7820000,
    priceDiscountText: "Giảm 680.000đ",
    link: "./product-details.html?id=129",
  },
  {
    id: 130,
    name: "Tai nghe gaming Focal Radiance",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_30.jpg",
    orginalPrice: "12.000.000đ",
    discountPercent: "-6%",
    currentPrice: "11.280.000đ",
    price: 11280000,
    priceDiscountText: "Giảm 720.000đ",
    link: "./product-details.html?id=130",
  },
  {
    id: 131,
    name: "Tai nghe gaming Audeze LCD-2",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_31.jpg",
    orginalPrice: "18.000.000đ",
    discountPercent: "-5%",
    currentPrice: "17.100.000đ",
    price: 17100000,
    priceDiscountText: "Giảm 900.000đ",
    link: "./product-details.html?id=131",
  },
  {
    id: 132,
    name: "Tai nghe gaming Audeze LCD-3",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_32.jpg",
    orginalPrice: "28.000.000đ",
    discountPercent: "-4%",
    currentPrice: "26.880.000đ",
    price: 26880000,
    priceDiscountText: "Giảm 1.120.000đ",
    link: "./product-details.html?id=132",
  },
  {
    id: 133,
    name: "Tai nghe gaming Audeze LCD-4",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_33.jpg",
    orginalPrice: "45.000.000đ",
    discountPercent: "-3%",
    currentPrice: "43.650.000đ",
    price: 43650000,
    priceDiscountText: "Giảm 1.350.000đ",
    link: "./product-details.html?id=133",
  },
  {
    id: 134,
    name: "Tai nghe gaming Audeze LCD-X",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_34.jpg",
    orginalPrice: "22.000.000đ",
    discountPercent: "-6%",
    currentPrice: "20.680.000đ",
    price: 20680000,
    priceDiscountText: "Giảm 1.320.000đ",
    link: "./product-details.html?id=134",
  },
  {
    id: 135,
    name: "Tai nghe gaming Audeze LCD-1",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_35.jpg",
    orginalPrice: "8.500.000đ",
    discountPercent: "-9%",
    currentPrice: "7.735.000đ",
    price: 7735000,
    priceDiscountText: "Giảm 765.000đ",
    link: "./product-details.html?id=135",
  },
  {
    id: 136,
    name: "Tai nghe gaming Audeze LCD-GX",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_36.jpg",
    orginalPrice: "15.000.000đ",
    discountPercent: "-7%",
    currentPrice: "13.950.000đ",
    price: 13950000,
    priceDiscountText: "Giảm 1.050.000đ",
    link: "./product-details.html?id=136",
  },
  {
    id: 137,
    name: "Tai nghe gaming Audeze LCD-2C",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_37.jpg",
    orginalPrice: "16.000.000đ",
    discountPercent: "-8%",
    currentPrice: "14.720.000đ",
    price: 14720000,
    priceDiscountText: "Giảm 1.280.000đ",
    link: "./product-details.html?id=137",
  },
  {
    id: 138,
    name: "Tai nghe gaming Audeze LCD-3F",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_38.jpg",
    orginalPrice: "26.000.000đ",
    discountPercent: "-5%",
    currentPrice: "24.700.000đ",
    price: 24700000,
    priceDiscountText: "Giảm 1.300.000đ",
    link: "./product-details.html?id=138",
  },
  {
    id: 139,
    name: "Tai nghe gaming Audeze LCD-4Z",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_39.jpg",
    orginalPrice: "42.000.000đ",
    discountPercent: "-4%",
    currentPrice: "40.320.000đ",
    price: 40320000,
    priceDiscountText: "Giảm 1.680.000đ",
    link: "./product-details.html?id=139",
  },
  {
    id: 140,
    name: "Tai nghe gaming Audeze LCD-XC",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_40.jpg",
    orginalPrice: "20.000.000đ",
    discountPercent: "-6%",
    currentPrice: "18.800.000đ",
    price: 18800000,
    priceDiscountText: "Giảm 1.200.000đ",
    link: "./product-details.html?id=140",
  },
  {
    id: 141,
    name: "Tai nghe gaming Audeze LCD-2 Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_41.jpg",
    orginalPrice: "15.500.000đ",
    discountPercent: "-7%",
    currentPrice: "14.415.000đ",
    price: 14415000,
    priceDiscountText: "Giảm 1.085.000đ",
    link: "./product-details.html?id=141",
  },
  {
    id: 142,
    name: "Tai nghe gaming Audeze LCD-3 Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_42.jpg",
    orginalPrice: "25.000.000đ",
    discountPercent: "-5%",
    currentPrice: "23.750.000đ",
    price: 23750000,
    priceDiscountText: "Giảm 1.250.000đ",
    link: "./product-details.html?id=142",
  },
  {
    id: 143,
    name: "Tai nghe gaming Audeze LCD-4 Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_43.jpg",
    orginalPrice: "40.000.000đ",
    discountPercent: "-3%",
    currentPrice: "38.800.000đ",
    price: 38800000,
    priceDiscountText: "Giảm 1.200.000đ",
    link: "./product-details.html?id=143",
  },
  {
    id: 144,
    name: "Tai nghe gaming Audeze LCD-X Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_44.jpg",
    orginalPrice: "19.000.000đ",
    discountPercent: "-6%",
    currentPrice: "17.860.000đ",
    price: 17860000,
    priceDiscountText: "Giảm 1.140.000đ",
    link: "./product-details.html?id=144",
  },
  {
    id: 145,
    name: "Tai nghe gaming Audeze LCD-1 Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_45.jpg",
    orginalPrice: "7.500.000đ",
    discountPercent: "-9%",
    currentPrice: "6.825.000đ",
    price: 6825000,
    priceDiscountText: "Giảm 675.000đ",
    link: "./product-details.html?id=145",
  },
  {
    id: 146,
    name: "Tai nghe gaming Audeze LCD-GX Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_46.jpg",
    orginalPrice: "13.500.000đ",
    discountPercent: "-7%",
    currentPrice: "12.555.000đ",
    price: 12555000,
    priceDiscountText: "Giảm 945.000đ",
    link: "./product-details.html?id=146",
  },
  {
    id: 147,
    name: "Tai nghe gaming Audeze LCD-2C Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_47.jpg",
    orginalPrice: "14.000.000đ",
    discountPercent: "-8%",
    currentPrice: "12.880.000đ",
    price: 12880000,
    priceDiscountText: "Giảm 1.120.000đ",
    link: "./product-details.html?id=147",
  },
  {
    id: 148,
    name: "Tai nghe gaming Audeze LCD-3F Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_48.jpg",
    orginalPrice: "23.000.000đ",
    discountPercent: "-5%",
    currentPrice: "21.850.000đ",
    price: 21850000,
    priceDiscountText: "Giảm 1.150.000đ",
    link: "./product-details.html?id=148",
  },
  {
    id: 149,
    name: "Tai nghe gaming Audeze LCD-4Z Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_49.jpg",
    orginalPrice: "38.000.000đ",
    discountPercent: "-4%",
    currentPrice: "36.480.000đ",
    price: 36480000,
    priceDiscountText: "Giảm 1.520.000đ",
    link: "./product-details.html?id=149",
  },
  {
    id: 150,
    name: "Tai nghe gaming Audeze LCD-XC Classic",
    category: "headphone",
    imgSrc: "./assets/img/HEADPHONE/headphone_50.jpg",
    orginalPrice: "18.000.000đ",
    discountPercent: "-6%",
    currentPrice: "16.920.000đ",
    price: 16920000,
    priceDiscountText: "Giảm 1.080.000đ",
    link: "./product-details.html?id=150",
  },
  {
    id: 151,
    name: "Sạc dự phòng Xiaomi Power Bank 20000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_01.jpg",
    orginalPrice: "800.000đ",
    discountPercent: "-15%",
    currentPrice: "680.000đ",
    price: 680000,
    priceDiscountText: "Giảm 120.000đ",
    link: "./product-details.html?id=151",
  },
  {
    id: 152,
    name: "Sạc dự phòng Anker PowerCore 10000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_02.jpg",
    orginalPrice: "600.000đ",
    discountPercent: "-20%",
    currentPrice: "480.000đ",
    price: 480000,
    priceDiscountText: "Giảm 120.000đ",
    link: "./product-details.html?id=152",
  },
  {
    id: 153,
    name: "Sạc dự phòng Samsung Wireless Power Bank 10000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_03.jpg",
    orginalPrice: "1.200.000đ",
    discountPercent: "-12%",
    currentPrice: "1.056.000đ",
    price: 1056000,
    priceDiscountText: "Giảm 144.000đ",
    link: "./product-details.html?id=153",
  },
  {
    id: 154,
    name: "Sạc dự phòng Romoss Sense 6 Plus 20000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_04.jpg",
    orginalPrice: "700.000đ",
    discountPercent: "-18%",
    currentPrice: "574.000đ",
    price: 574000,
    priceDiscountText: "Giảm 126.000đ",
    link: "./product-details.html?id=154",
  },
  {
    id: 155,
    name: "Sạc dự phòng Baseus Blade 10000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_05.jpg",
    orginalPrice: "500.000đ",
    discountPercent: "-22%",
    currentPrice: "390.000đ",
    price: 390000,
    priceDiscountText: "Giảm 110.000đ",
    link: "./product-details.html?id=155",
  },
  {
    id: 156,
    name: "Sạc dự phòng RavPower 20000mAh PD",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_06.jpg",
    orginalPrice: "900.000đ",
    discountPercent: "-16%",
    currentPrice: "756.000đ",
    price: 756000,
    priceDiscountText: "Giảm 144.000đ",
    link: "./product-details.html?id=156",
  },
  {
    id: 157,
    name: "Sạc dự phòng Mophie Powerstation Plus 10000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_07.jpg",
    orginalPrice: "1.500.000đ",
    discountPercent: "-14%",
    currentPrice: "1.290.000đ",
    price: 1290000,
    priceDiscountText: "Giảm 210.000đ",
    link: "./product-details.html?id=157",
  },
  {
    id: 158,
    name: "Sạc dự phòng Belkin Boost Charge 10000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_08.jpg",
    orginalPrice: "1.100.000đ",
    discountPercent: "-17%",
    currentPrice: "913.000đ",
    price: 913000,
    priceDiscountText: "Giảm 187.000đ",
    link: "./product-details.html?id=158",
  },
  {
    id: 159,
    name: "Sạc dự phòng Zendure SuperTank 27000mAh",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_09.jpg",
    orginalPrice: "2.500.000đ",
    discountPercent: "-10%",
    currentPrice: "2.250.000đ",
    price: 2250000,
    priceDiscountText: "Giảm 250.000đ",
    link: "./product-details.html?id=159",
  },
  {
    id: 160,
    name: "Sạc dự phòng Goal Zero Yeti 1000",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_10.jpg",
    orginalPrice: "8.500.000đ",
    discountPercent: "-8%",
    currentPrice: "7.820.000đ",
    price: 7820000,
    priceDiscountText: "Giảm 680.000đ",
    link: "./product-details.html?id=160",
  },
  {
    id: 161,
    name: "Sạc dự phòng Jackery Explorer 240",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_11.jpg",
    orginalPrice: "3.200.000đ",
    discountPercent: "-13%",
    currentPrice: "2.784.000đ",
    price: 2784000,
    priceDiscountText: "Giảm 416.000đ",
    link: "./product-details.html?id=161",
  },
  {
    id: 162,
    name: "Sạc dự phòng EcoFlow River 600",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_12.jpg",
    orginalPrice: "5.500.000đ",
    discountPercent: "-11%",
    currentPrice: "4.895.000đ",
    price: 4895000,
    priceDiscountText: "Giảm 605.000đ",
    link: "./product-details.html?id=162",
  },
  {
    id: 163,
    name: "Sạc dự phòng Bluetti EB3A",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_13.jpg",
    orginalPrice: "4.200.000đ",
    discountPercent: "-15%",
    currentPrice: "3.570.000đ",
    price: 3570000,
    priceDiscountText: "Giảm 630.000đ",
    link: "./product-details.html?id=163",
  },
  {
    id: 164,
    name: "Sạc dự phòng Renogy Phoenix 200",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_14.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-19%",
    currentPrice: "2.268.000đ",
    price: 2268000,
    priceDiscountText: "Giảm 532.000đ",
    link: "./product-details.html?id=164",
  },
  {
    id: 165,
    name: "Sạc dự phòng Rockpals 300W",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_15.jpg",
    orginalPrice: "3.500.000đ",
    discountPercent: "-16%",
    currentPrice: "2.940.000đ",
    price: 2940000,
    priceDiscountText: "Giảm 560.000đ",
    link: "./product-details.html?id=165",
  },
  {
    id: 166,
    name: "Sạc dự phòng Suaoki S270",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_16.jpg",
    orginalPrice: "2.200.000đ",
    discountPercent: "-21%",
    currentPrice: "1.738.000đ",
    price: 1738000,
    priceDiscountText: "Giảm 462.000đ",
    link: "./product-details.html?id=166",
  },
  {
    id: 167,
    name: "Sạc dự phòng Flashfish 300W",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_17.jpg",
    orginalPrice: "2.800.000đ",
    discountPercent: "-18%",
    currentPrice: "2.296.000đ",
    price: 2296000,
    priceDiscountText: "Giảm 504.000đ",
    link: "./product-details.html?id=167",
  },
  {
    id: 168,
    name: "Sạc dự phòng Westing iGen1200",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_18.jpg",
    orginalPrice: "4.500.000đ",
    discountPercent: "-14%",
    currentPrice: "3.870.000đ",
    price: 3870000,
    priceDiscountText: "Giảm 630.000đ",
    link: "./product-details.html?id=168",
  },
  {
    id: 169,
    name: "Sạc dự phòng Champion 2000W",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_19.jpg",
    orginalPrice: "6.800.000đ",
    discountPercent: "-12%",
    currentPrice: "5.984.000đ",
    price: 5984000,
    priceDiscountText: "Giảm 816.000đ",
    link: "./product-details.html?id=169",
  },
  {
    id: 170,
    name: "Sạc dự phòng Generac GP3000i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_20.jpg",
    orginalPrice: "8.200.000đ",
    discountPercent: "-10%",
    currentPrice: "7.380.000đ",
    price: 7380000,
    priceDiscountText: "Giảm 820.000đ",
    link: "./product-details.html?id=170",
  },
  {
    id: 171,
    name: "Sạc dự phòng Honda EU2200i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_21.jpg",
    orginalPrice: "12.500.000đ",
    discountPercent: "-8%",
    currentPrice: "11.500.000đ",
    price: 11500000,
    priceDiscountText: "Giảm 1.000.000đ",
    link: "./product-details.html?id=171",
  },
  {
    id: 172,
    name: "Sạc dự phòng Yamaha EF2000iS",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_22.jpg",
    orginalPrice: "11.800.000đ",
    discountPercent: "-9%",
    currentPrice: "10.738.000đ",
    price: 10738000,
    priceDiscountText: "Giảm 1.062.000đ",
    link: "./product-details.html?id=172",
  },
  {
    id: 173,
    name: "Sạc dự phòng Briggs & Stratton P2200",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_23.jpg",
    orginalPrice: "9.500.000đ",
    discountPercent: "-11%",
    currentPrice: "8.455.000đ",
    price: 8455000,
    priceDiscountText: "Giảm 1.045.000đ",
    link: "./product-details.html?id=173",
  },
  {
    id: 174,
    name: "Sạc dự phòng Champion 100263",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_24.jpg",
    orginalPrice: "7.200.000đ",
    discountPercent: "-13%",
    currentPrice: "6.264.000đ",
    price: 6264000,
    priceDiscountText: "Giảm 936.000đ",
    link: "./product-details.html?id=174",
  },
  {
    id: 175,
    name: "Sạc dự phòng DuroMax XP12000EH",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_25.jpg",
    orginalPrice: "15.800.000đ",
    discountPercent: "-7%",
    currentPrice: "14.694.000đ",
    price: 14694000,
    priceDiscountText: "Giảm 1.106.000đ",
    link: "./product-details.html?id=175",
  },
  {
    id: 176,
    name: "Sạc dự phòng WEN 56200i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_26.jpg",
    orginalPrice: "6.500.000đ",
    discountPercent: "-15%",
    currentPrice: "5.525.000đ",
    price: 5525000,
    priceDiscountText: "Giảm 975.000đ",
    link: "./product-details.html?id=176",
  },
  {
    id: 177,
    name: "Sạc dự phòng Firman P03601",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_27.jpg",
    orginalPrice: "5.800.000đ",
    discountPercent: "-17%",
    currentPrice: "4.814.000đ",
    price: 4814000,
    priceDiscountText: "Giảm 986.000đ",
    link: "./product-details.html?id=177",
  },
  {
    id: 178,
    name: "Sạc dự phòng Pulsar PG10000",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_28.jpg",
    orginalPrice: "4.200.000đ",
    discountPercent: "-19%",
    currentPrice: "3.402.000đ",
    price: 3402000,
    priceDiscountText: "Giảm 798.000đ",
    link: "./product-details.html?id=178",
  },
  {
    id: 179,
    name: "Sạc dự phòng All Power APGG3000",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_29.jpg",
    orginalPrice: "3.800.000đ",
    discountPercent: "-20%",
    currentPrice: "3.040.000đ",
    price: 3040000,
    priceDiscountText: "Giảm 760.000đ",
    link: "./product-details.html?id=179",
  },
  {
    id: 180,
    name: "Sạc dự phòng Sportsman GEN2000i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_30.jpg",
    orginalPrice: "4.500.000đ",
    discountPercent: "-18%",
    currentPrice: "3.690.000đ",
    price: 3690000,
    priceDiscountText: "Giảm 810.000đ",
    link: "./product-details.html?id=180",
  },
  {
    id: 181,
    name: "Sạc dự phòng PowerSmart PS50A",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_31.jpg",
    orginalPrice: "2.900.000đ",
    discountPercent: "-22%",
    currentPrice: "2.262.000đ",
    price: 2262000,
    priceDiscountText: "Giảm 638.000đ",
    link: "./product-details.html?id=181",
  },
  {
    id: 182,
    name: "Sạc dự phòng A-iPower SUA2000i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_32.jpg",
    orginalPrice: "3.200.000đ",
    discountPercent: "-21%",
    currentPrice: "2.528.000đ",
    price: 2528000,
    priceDiscountText: "Giảm 672.000đ",
    link: "./product-details.html?id=182",
  },
  {
    id: 183,
    name: "Sạc dự phòng Westingh WH2200iXLT",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_33.webp",
    orginalPrice: "4.800.000đ",
    discountPercent: "-16%",
    currentPrice: "4.032.000đ",
    price: 4032000,
    priceDiscountText: "Giảm 768.000đ",
    link: "./product-details.html?id=183",
  },
  {
    id: 184,
    name: "Sạc dự phòng Generac GP8000E",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_34.png",
    orginalPrice: "18.500.000đ",
    discountPercent: "-6%",
    currentPrice: "17.390.000đ",
    price: 17390000,
    priceDiscountText: "Giảm 1.110.000đ",
    link: "./product-details.html?id=184",
  },
  {
    id: 185,
    name: "Sạc dự phòng Champion 100302",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_35.png",
    orginalPrice: "12.800.000đ",
    discountPercent: "-8%",
    currentPrice: "11.776.000đ",
    price: 11776000,
    priceDiscountText: "Giảm 1.024.000đ",
    link: "./product-details.html?id=185",
  },
  {
    id: 186,
    name: "Sạc dự phòng DuroMax XP12000E",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_36.webp",
    orginalPrice: "14.200.000đ",
    discountPercent: "-7%",
    currentPrice: "13.206.000đ",
    price: 13206000,
    priceDiscountText: "Giảm 994.000đ",
    link: "./product-details.html?id=186",
  },
  {
    id: 187,
    name: "Sạc dự phòng WEN DF1100T",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_37.png",
    orginalPrice: "8.500.000đ",
    discountPercent: "-12%",
    currentPrice: "7.480.000đ",
    price: 7480000,
    priceDiscountText: "Giảm 1.020.000đ",
    link: "./product-details.html?id=187",
  },
  {
    id: 188,
    name: "Sạc dự phòng Firman P03603",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_38.webp",
    orginalPrice: "7.800.000đ",
    discountPercent: "-14%",
    currentPrice: "6.708.000đ",
    price: 6708000,
    priceDiscountText: "Giảm 1.092.000đ",
    link: "./product-details.html?id=188",
  },
  {
    id: 189,
    name: "Sạc dự phòng Pulsar PG12000",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_39.webp",
    orginalPrice: "6.200.000đ",
    discountPercent: "-16%",
    currentPrice: "5.208.000đ",
    price: 5208000,
    priceDiscountText: "Giảm 992.000đ",
    link: "./product-details.html?id=189",
  },
  {
    id: 190,
    name: "Sạc dự phòng All Power APGG5000",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_40.webp",
    orginalPrice: "5.500.000đ",
    discountPercent: "-18%",
    currentPrice: "4.510.000đ",
    price: 4510000,
    priceDiscountText: "Giảm 990.000đ",
    link: "./product-details.html?id=190",
  },
  {
    id: 191,
    name: "Sạc dự phòng Sportsman GEN4000i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/FONENG-PX102-Product-1.webp",
    orginalPrice: "6.800.000đ",
    discountPercent: "-15%",
    currentPrice: "5.780.000đ",
    price: 5780000,
    priceDiscountText: "Giảm 1.020.000đ",
    link: "./product-details.html?id=191",
  },
  {
    id: 192,
    name: "Sạc dự phòng PowerSmart PS100A",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_42.png",
    orginalPrice: "4.200.000đ",
    discountPercent: "-20%",
    currentPrice: "3.360.000đ",
    price: 3360000,
    priceDiscountText: "Giảm 840.000đ",
    link: "./product-details.html?id=192",
  },
  {
    id: 193,
    name: "Sạc dự phòng A-iPower SUA4000i",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_43.png",
    orginalPrice: "5.200.000đ",
    discountPercent: "-17%",
    currentPrice: "4.316.000đ",
    price: 4316000,
    priceDiscountText: "Giảm 884.000đ",
    link: "./product-details.html?id=193",
  },
  {
    id: 194,
    name: "Sạc dự phòng Westing WH4500iXLT",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_44.png",
    orginalPrice: "7.500.000đ",
    discountPercent: "-13%",
    currentPrice: "6.525.000đ",
    price: 6525000,
    priceDiscountText: "Giảm 975.000đ",
    link: "./product-details.html?id=194",
  },
  {
    id: 195,
    name: "Sạc dự phòng Generac GP15000E",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_45.webp",
    orginalPrice: "25.000.000đ",
    discountPercent: "-5%",
    currentPrice: "23.750.000đ",
    price: 23750000,
    priceDiscountText: "Giảm 1.250.000đ",
    link: "./product-details.html?id=195",
  },
  {
    id: 196,
    name: "Sạc dự phòng Champion 100302",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_46.png",
    orginalPrice: "18.800.000đ",
    discountPercent: "-7%",
    currentPrice: "17.484.000đ",
    price: 17484000,
    priceDiscountText: "Giảm 1.316.000đ",
    link: "./product-details.html?id=196",
  },
  {
    id: 197,
    name: "Sạc dự phòng DuroMax XP15000E",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_47.webp",
    orginalPrice: "22.500.000đ",
    discountPercent: "-6%",
    currentPrice: "21.150.000đ",
    price: 21150000,
    priceDiscountText: "Giảm 1.350.000đ",
    link: "./product-details.html?id=197",
  },
  {
    id: 198,
    name: "Sạc dự phòng WEN DF2200T",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_48.webp",
    orginalPrice: "12.500.000đ",
    discountPercent: "-10%",
    currentPrice: "11.250.000đ",
    price: 11250000,
    priceDiscountText: "Giảm 1.250.000đ",
    link: "./product-details.html?id=198",
  },
  {
    id: 199,
    name: "Sạc dự phòng Firman P03605",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_49.png",
    orginalPrice: "11.200.000đ",
    discountPercent: "-12%",
    currentPrice: "9.856.000đ",
    price: 9856000,
    priceDiscountText: "Giảm 1.344.000đ",
    link: "./product-details.html?id=199",
  },
  {
    id: 200,
    name: "Sạc dự phòng Pulsar PG20000",
    category: "powerbank",
    imgSrc: "./assets/img/SACDUPHONG/sacduphong_50.webp",
    orginalPrice: "9.800.000đ",
    discountPercent: "-14%",
    currentPrice: "8.428.000đ",
    price: 8428000,
    priceDiscountText: "Giảm 1.372.000đ",
    link: "./product-details.html?id=200",
  },
];

// --- 8. NAVIGATION SYSTEM (SPA) - Đặt ở đây để có thể truy cập từ mọi nơi ---
// Hàm để ẩn tất cả các view và hiển thị view được chọn
window.showView = function (viewId) {
  // Các view yêu cầu đăng nhập
  const protectedViews = ["admin", "profile", "orders"];

  // Kiểm tra nếu view cần đăng nhập
  if (protectedViews.includes(viewId)) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Bạn cần đăng nhập để truy cập trang này!");
      viewId = "login"; // Chuyển hướng về login
    }
  }

  // Ẩn tất cả view
  document.querySelectorAll(".spa-view").forEach((view) => {
    view.classList.remove("active");
  });

  // Hiển thị view được yêu cầu
  const viewToShow = document.getElementById(viewId);
  if (viewToShow) {
    viewToShow.classList.add("active");
    console.log("View được hiển thị:", viewId);
  } else {
    console.error("Không tìm thấy view với ID:", viewId);
  }

  // Cập nhật URL hash để hỗ trợ điều hướng
  window.location.hash = viewId;
};

// Đợi DOM load xong
document.addEventListener("DOMContentLoaded", function () {
  // -2. Cài đặt và trạng thái -
  const productsPerPage = 12;
  let currentPage = 1;
  let currentCategory = "all";
  let currentPriceFilters = [];
  let currentSort = "default";
  let currentSearchQuery = ""; // Thêm biến lưu từ khóa tìm kiếm
  let totalPages = 1;
  // -3. Lấy các phần tử DOM-
  const productsList = document.getElementById("product-list-container");
  const paginationContainer = document.getElementById("pagination");
  const productTemplate = document.getElementById("product-template");
  const categoryLinks = document.querySelectorAll(
    "#category-filters .products__category__items--details, #category-filters .products-category__items--details"
  );
  const priceCheckboxes = document.querySelectorAll(
    ".form__budget__checkbox input[type='checkbox']"
  );
  const sortSelect = document.getElementById("sort-select");
  const resetButton = document.getElementById("reset-filters");
  const titleName = document.querySelector(".title__left__name");
  const titlePath = document.querySelector(".title__left__path--highlight");
  const paginationLinksContainer = document.getElementById("pagination-links");
  const prevButton = document.getElementById("pagination-prev");
  const nextButton = document.getElementById("pagination-next");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  function displayProducts(selectedCategories) {
    let filteredProduct = [...allProduct];

    // LỌC THEO TÌM KIẾM (ưu tiên cao nhất)
    if (currentSearchQuery.trim() !== "") {
      const query = currentSearchQuery.toLowerCase().trim();
      filteredProduct = filteredProduct.filter((product) => {
        return product.name.toLowerCase().includes(query);
      });
    }

    // LỌC THEO DANH MỤC
    if (!selectedCategories.includes("all")) {
      // Lọc sản phẩm
      filteredProduct = filteredProduct.filter((product) => {
        // Trả về true NẾU danh mục của sản phẩm
        // CÓ NẰM TRONG mảng các danh mục đã chọn
        return selectedCategories.includes(product.category);
      });
    }
    // LỌC THEO GIÁ
    if (
      currentPriceFilters.length > 0 &&
      !currentPriceFilters.includes("all")
    ) {
      filteredProduct = filteredProduct.filter((p) => {
        return currentPriceFilters.some((rangeValue) => {
          const range = parsePriceRange(rangeValue);
          return p.price >= range.min && p.price <= range.max;
        });
      });
    }
    // SẮP XẾP
    switch (currentSort) {
      case "price-asc":
        filteredProduct.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProduct.sort((a, b) => b.price - a.price);
        break;
      case "default":
        filteredProduct.sort((a, b) => a.id - b.id);
        break;
    }

    // PHÂN TRANG - đảm bảo currentPage nằm trong khoảng hợp lệ theo kết quả lọc
    const computedTotalPages =
      Math.ceil(filteredProduct.length / productsPerPage) || 0;
    if (computedTotalPages === 0) {
      currentPage = 1;
    } else if (currentPage > computedTotalPages) {
      currentPage = computedTotalPages;
    } else if (currentPage < 1) {
      currentPage = 1;
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsForThisPage = filteredProduct.slice(startIndex, endIndex);

    // CẬP NHẬT HEADER HIỂN THỊ SỐ LƯỢNG
    const resultsHeader = document.querySelector(".products__list__header h3");
    if (resultsHeader) {
      const displayStart = filteredProduct.length > 0 ? startIndex + 1 : 0;
      const displayEnd = Math.min(endIndex, filteredProduct.length);
      resultsHeader.textContent = `Kết quả tìm thấy: ${displayStart}-${displayEnd} trong ${filteredProduct.length} sản phẩm`;
    }

    // HIỂN THỊ
    const existingItems = productsList.querySelectorAll(
      ".products__list__item"
    );
    existingItems.forEach((item) => item.remove());
    productsForThisPage.forEach((product) => {
      const clone = productTemplate.content.cloneNode(true);

      // Lưu product id vào data attribute để dùng khi click
      clone
        .querySelector(".product-link")
        .setAttribute("data-product-id", product.id);
      clone.querySelector(".product-link").href = "#";
      clone.querySelector("img").src = product.imgSrc;
      clone.querySelector("img").alt = product.name;
      clone.querySelector(".products__list__item--name").textContent =
        product.name;
      clone.querySelector(".products__list__item--price").textContent =
        product.currentPrice;

      // Ẩn hiện các phẩn tử tùy chọn
      const installmentSpan = clone.querySelector(
        ".products__list__item--installment"
      );
      installmentSpan.style.display = "inline-block";

      const originalPriceSpan = clone.querySelector(
        ".products__list__item--discount1"
      );
      product.orginalPrice
        ? (originalPriceSpan.textContent = product.orginalPrice)
        : (originalPriceSpan.style.display = "none");

      const discountPercentSpan = clone.querySelector(
        ".products__list__item--discount2"
      );
      product.discountPercent
        ? (discountPercentSpan.textContent = product.discountPercent)
        : (discountPercentSpan.style.display = "none");

      const priceDiscountTextSpan = clone.querySelector(
        ".products__list__item--priceDiscount"
      );
      product.priceDiscountText
        ? (priceDiscountTextSpan.textContent = product.priceDiscountText)
        : (priceDiscountTextSpan.style.display = "none");

      // Gắn sự kiện "Thêm vào giỏ" cho mỗi item render
      const cartBtn = clone.querySelector(".products__list__item--img__cart");
      if (cartBtn) {
        cartBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          try {
            const productName = product.name;
            const priceText = product.currentPrice;
            const price =
              parseInt(String(priceText).replace(/[^\d]/g, "")) || 0;
            const image = product.imgSrc;
            if (typeof addToCart === "function") {
              addToCart(productName, price, image, 1);
            } else {
              console.error("Hàm addToCart không tồn tại");
            }
          } catch (err) {
            console.error("Lỗi thêm vào giỏ:", err);
          }
        });
      }

      productsList.appendChild(clone);
    });
    // HIỂN THỊ PHÂN TRANG
    displayPagination(filteredProduct.length);
  }

  // Hàm cuộn lên đầu trang
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // -- HÀM PHỤ --
  function displayPagination(totalFilteredProducts) {
    // Nếu không có container phân trang trong DOM thì không làm gì
    if (!paginationLinksContainer) return;

    // 1. Xóa các nút số trang cũ
    paginationLinksContainer.innerHTML = "";

    // 2. Tính toán tổng số trang (và cập nhật biến toàn cục)
    totalPages = Math.ceil(totalFilteredProducts / productsPerPage) || 0;

    // Nếu không có trang nào thì disable prev/next và thoát
    if (totalPages === 0) {
      if (prevButton) prevButton.classList.add("disabled");
      if (nextButton) nextButton.classList.add("disabled");
      return;
    }

    // 3. Tạo các nút số trang mới
    for (let i = 1; i <= totalPages; i++) {
      const pageLinkWrapper = document.createElement("div");
      pageLinkWrapper.className =
        "products__pagination__cover__links__link__link";
      pageLinkWrapper.style.cursor = "pointer";

      if (i === currentPage) pageLinkWrapper.classList.add("active");

      pageLinkWrapper.innerHTML = `<span>${i}</span>`;
      pageLinkWrapper.addEventListener("click", () => {
        currentPage = i;
        if (typeof filterProductsFromActiveCategories === "function")
          filterProductsFromActiveCategories();
        scrollToTop();
      });

      paginationLinksContainer.appendChild(pageLinkWrapper);
    }

    // 4. Cập nhật trạng thái cho các nút mũi tên (ẩn/hiện hoặc vô hiệu hóa)
    if (prevButton) {
      if (currentPage === 1) prevButton.classList.add("disabled");
      else prevButton.classList.remove("disabled");
    }
    if (nextButton) {
      if (currentPage === totalPages) nextButton.classList.add("disabled");
      else nextButton.classList.remove("disabled");
    }
  }
  function filterProductsFromActiveCategories() {
    // 1. Tạo một mảng rỗng để chứa các danh mục được chọn
    const activeCategories = [];

    // 2. Tìm tất cả các link danh mục đang có class ".active"
    const activeLinks = document.querySelectorAll(
      ".products__category__items--details.active"
    );

    // 3. Lặp qua các link tìm được
    activeLinks.forEach((link) => {
      // Lấy giá trị từ thuộc tính 'data-category' (ví dụ: "mouse", "keyboard", "all")
      // và thêm nó vào mảng
      activeCategories.push(link.getAttribute("data-category"));
    });
    if (activeCategories.length === 0 && allCategoriesLink) {
      // 1. Tự động bật lại class 'active' cho nút "Tất cả"
      allCategoriesLink.classList.add("active");

      // 2. Thêm "all" vào mảng để lọc
      activeCategories.push("all");
    }

    // (Tùy chọn) In ra để kiểm tra xem bạn đã lấy đúng chưa
    console.log("Các danh mục đang được lọc:", activeCategories);

    // 4. Gọi hàm hiển thị sản phẩm CHÍNH
    // và truyền mảng danh mục bạn vừa thu thập được vào đó
    displayProducts(activeCategories);
  }
  function parsePriceRange(rangeValue) {
    switch (rangeValue) {
      case "500k-1m":
        return { min: 500000, max: 1000000 };
      case "1m-2m":
        return { min: 1000000, max: 2000000 };
      case "2m-3m":
        return { min: 2000000, max: 3000000 };
      case "over3m":
        return { min: 3000000, max: Infinity };
      default:
        return { min: 0, max: Infinity };
    }
  }
  // Hàm cập nhật Tiêu đề trang
  function updateTitle(category = "all") {
    // Nếu đang ở chế độ tìm kiếm, không cập nhật lại title (để giữ "Kết quả tìm kiếm")
    if (currentSearchQuery.trim() !== "") {
      return;
    }

    let name = "Tất cả sản phẩm";

    // Cập nhật tên theo category
    const categoryNames = {
      all: "Tất cả sản phẩm",
      mouse: "Chuột",
      keyboard: "Bàn phím",
      headphone: "Tai nghe",
      powerbank: "Sạc dự phòng",
    };

    name = categoryNames[category] || "Tất cả sản phẩm";

    if (titleName) titleName.textContent = name;
    if (titlePath) titlePath.textContent = name;
  }

  // --- 6. GẮN CÁC BỘ LẮNG NGHE SỰ KIỆN ---

  // Sự kiện cho các nút Danh mục

  // 1. Tìm tất cả các link danh mục
  const categoryLink = document.querySelectorAll(
    ".products__category__items--details"
  );
  const allCategoriesLink = document.querySelector('[data-category="all"]');

  // 2. Mặc định kích hoạt "Tất cả" khi tải trang
  if (allCategoriesLink) {
    allCategoriesLink.classList.add("active");
  }

  // 3. Gắn sự kiện click cho từng link danh mục
  categoryLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Ngăn thẻ <a> tải lại trang
      e.preventDefault();

      // Ngăn sự kiện click này chạy đến các hàm khác (như hàm SPA ở dưới)
      e.stopPropagation();

      // Luôn lấy thẻ <a>, ngay cả khi click vào <img> hay <span> bên trong
      const clickedLink = e.currentTarget;
      const isAllCategory = clickedLink === allCategoriesLink;

      if (isAllCategory) {
        // KỊCH BẢN 1: Click vào "Tất cả"
        clickedLink.classList.add("active");

        // Xóa .active khỏi TẤT CẢ các mục khác
        categoryLink.forEach((otherLink) => {
          if (otherLink !== allCategoriesLink) {
            otherLink.classList.remove("active");
          }
        });
      } else {
        // KỊCH BẢN 2: Click vào mục khác (Chuột, Bàn phím...)

        // Tắt "Tất cả" đi
        if (allCategoriesLink) {
          allCategoriesLink.classList.remove("active");
        }

        // Đây là điểm khác biệt: .toggle() sẽ bật nếu đang tắt, và tắt nếu đang bật
        clickedLink.classList.toggle("active");
      }

      // Xóa trạng thái focus để tránh CSS :focus giữ hiệu ứng hiển thị tick
      if (document.activeElement === clickedLink) {
        clickedLink.blur();
      }

      // Reset tìm kiếm khi click vào category
      currentSearchQuery = "";
      if (searchInput) searchInput.value = "";

      // 4. Gọi hàm lọc sản phẩm
      filterProductsFromActiveCategories();
    });
  });
  filterProductsFromActiveCategories();
  // Sự kiện cho các checkbox Mức giá
  priceCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      currentPriceFilters = []; // Xây dựng lại mảng filter
      priceCheckboxes.forEach((box) => {
        if (box.checked) {
          currentPriceFilters.push(box.value);
        }
      });

      // Logic cho checkbox "Tất cả"
      if (currentPriceFilters.includes("all")) {
        currentPriceFilters = ["all"]; // Chỉ giữ lại 'all'
        priceCheckboxes.forEach((box) => {
          if (box.value !== "all") box.checked = false;
        });
      } else {
        // Nếu chọn mục khác, bỏ check 'Tất cả'
        document.getElementById("all").checked = false;
      }

      currentPage = 1; // Reset về trang 1
      filterProductsFromActiveCategories(); // Lọc và hiển thị lại
    });
  });

  // Sự kiện cho dropdown Sắp xếp
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    currentPage = 1; // Reset về trang 1
    filterProductsFromActiveCategories(); // Vẽ lại
    scrollToTop(); // Cuộn lên đầu trang
  });

  // Sự kiện cho nút "Đặt lại"
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Reset state
    currentPage = 1;
    currentCategory = "all";
    currentPriceFilters = ["all"];
    currentSort = "default";
    currentSearchQuery = ""; // Reset từ khóa tìm kiếm

    // Reset UI
    categoryLinks.forEach((l) => l.classList.remove("active"));
    document.querySelector('[data-category="all"]').classList.add("active");

    priceCheckboxes.forEach((box) => (box.checked = false));
    document.getElementById("all").checked = true;

    sortSelect.value = "default";

    // Xóa nội dung trong ô search
    if (searchInput) searchInput.value = "";

    updateTitle("all");
    filterProductsFromActiveCategories();
    scrollToTop(); // Cuộn lên đầu trang
  });

  // Sự kiện cho nút Previous
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      filterProductsFromActiveCategories();
      scrollToTop(); // Cuộn lên đầu trang
    }
  });

  // Sự kiện cho nút Next
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      filterProductsFromActiveCategories();
      scrollToTop(); // Cuộn lên đầu trang
    }
  });

  // Cho phép click cả vào vùng bao quanh mũi tên để chuyển trang
  const prevContainer = prevButton
    ? prevButton.closest(".products__pagination__cover__arr-cover")
    : null;
  if (prevContainer) {
    prevContainer.addEventListener("click", () => {
      if (currentPage > 1) {
        prevButton.click();
      }
    });
  }

  const nextContainer = nextButton
    ? nextButton.closest(".products__pagination__cover__arr-cover")
    : null;
  if (nextContainer) {
    nextContainer.addEventListener("click", () => {
      if (currentPage < totalPages) {
        nextButton.click();
      }
    });
  }

  // Xử lý tìm kiếm
  function handleSearch() {
    const query = searchInput ? searchInput.value.trim() : "";

    if (query === "") {
      alert("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    // Chuyển đến trang sản phẩm
    showView("view-products");

    // Cập nhật state
    currentSearchQuery = query;
    currentPage = 1;
    currentCategory = "all"; // Reset về tất cả để tìm trong toàn bộ sản phẩm

    // Reset UI category (không highlight category nào)
    categoryLinks.forEach((l) => l.classList.remove("active"));
    const allCategoryLink = document.querySelector('[data-category="all"]');
    if (allCategoryLink) allCategoryLink.classList.add("active");

    // Cập nhật tiêu đề
    if (titleName) titleName.textContent = "Kết quả tìm kiếm";
    if (titlePath) titlePath.textContent = `"${query}"`;

    // Hiển thị kết quả
    filterProductsFromActiveCategories();
    scrollToTop();
  }

  // Event listener cho nút search
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleSearch();
    });
  }

  // Event listener cho phím Enter trong ô search
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      }
    });
  }

  document.addEventListener("click", (e) => {
    const tile = e.target.closest(
      '.category-feature-item[data-view="products"]'
    );
    if (!tile) return;

    e.preventDefault();

    // Dùng .dataset thay vì getAttribute
    const category = tile.dataset.category || "all";

    showView("view-products");

    // Reset về trang 1 và category được chọn
    currentCategory = category;
    currentPage = 1;
    currentSearchQuery = ""; // Reset từ khóa tìm kiếm

    // Reset UI
    categoryLinks.forEach((l) => l.classList.remove("active"));
    const sidebarLink = document.querySelector(
      `#category-filters [data-category="${category}"]`
    );
    if (sidebarLink) sidebarLink.classList.add("active");

    // Xóa nội dung trong ô search
    if (searchInput) searchInput.value = "";

    updateTitle(category);
    filterProductsFromActiveCategories();

    // Đơn giản hóa việc cuộn trang
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 2. Lắng nghe tất cả các cú click trên thanh điều hướng và dropdown
  // Sử dụng event delegation trên document với capture phase để xử lý trước
  document.addEventListener("click", (e) => {
    // Ưu tiên: nếu click vào nút thêm giỏ hàng thì bỏ qua handler điều hướng
    if (
      e.target.closest(
        ".products__list__item--img__cart, .product-hottest-item--img__cart"
      )
    ) {
      return;
    }
    // Bỏ qua khi click bên trong pagination để tránh xung đột điều hướng SPA
    if (e.target.closest("#pagination")) {
      return;
    }
    // Hỗ trợ cả <a> và bất kỳ phần tử nào có data-view (ví dụ: .category-feature-item)
    const link = e.target.closest("a");
    const trigger = e.target.closest("[data-view]");
    if (!link && !trigger) {
      return;
    }
    // XỬ LÝ LINK SẢN PHẨM (trong danh sách sản phẩm)
    if (link.classList.contains("product-link")) {
      e.preventDefault();
      e.stopPropagation(); // Ngăn các handler khác
      e.stopImmediatePropagation(); // Ngăn các handler khác trong cùng phase
      const productId = link.getAttribute("data-product-id");
      console.log("Click vào sản phẩm, ID:", productId); // Debug log
      if (productId && typeof allProduct !== "undefined") {
        displayProductDetails(parseInt(productId));
      } else {
        console.error(
          "Không tìm thấy productId:",
          productId,
          "hoặc allProduct chưa được định nghĩa"
        );
      }
      return false;
    }
    // Chỉ xử lý các link có thuộc tính data-view
    // Xác định phần tử kích hoạt (ưu tiên link nếu có, fallback trigger)
    const source = link || trigger;
    if (!source.dataset.view) {
      return;
    }

    e.preventDefault(); // Ngăn trình duyệt tải lại trang
    // KHÔNG dùng stopImmediatePropagation() để không chặn các handler khác (như Shop Now button)

    // Lấy thông tin từ các thuộc tính 'data-'
    const viewName = source.dataset.view; // vd: "products"
    const category = source.dataset.category; // vd: "mouse" hoặc undefined

    // 3. Hiển thị view tương ứng
    showView(`view-${viewName}`); // vd: showView("view-products")

    // 4. XỬ LÝ VIEW PRODUCT-DETAILS
    if (viewName === "product-details") {
      const productId = source.getAttribute("data-product-id");
      if (productId && typeof allProduct !== "undefined") {
        displayProductDetails(parseInt(productId));
      }
      return;
    }

    // 5. KIỂM TRA ĐẶC BIỆT: Nếu là link SẢN PHẨM
    if (viewName === "products") {
      // Nếu có một danh mục được chỉ định (vd: "mouse")
      if (category) {
        // CẬP NHẬT TRẠNG THÁI CỦA TRANG SẢN PHẨM
        currentCategory = category;
        currentPage = 1;
        currentSearchQuery = ""; // Reset từ khóa tìm kiếm

        // Đồng bộ hóa bộ lọc (ví dụ: làm cho nút 'Chuột' có class 'active')
        categoryLinks.forEach((l) => l.classList.remove("active"));
        const activeCategoryLink = document.querySelector(
          `#category-filters [data-category="${category}"]`
        );
        if (activeCategoryLink) {
          activeCategoryLink.classList.add("active");
        }

        // Xóa nội dung trong ô search
        if (searchInput) searchInput.value = "";

        // Cập nhật tiêu đề trang
        updateTitle(category);

        // Sau khi đã cập nhật trạng thái, vẽ lại danh sách sản phẩm
        filterProductsFromActiveCategories();
        scrollToTop(); // Cuộn lên đầu trang
      } else {
        // Nếu chỉ bấm vào "Sản phẩm" (không có danh mục)
        // thì reset về "Tất cả" (nút reset sẽ tự xóa search query)
        resetButton.click(); // Giả lập một cú click vào nút "Đặt lại"
      }
    }
  });

  // 5. Hiển thị trang chủ khi tải lần đầu
  showView("view-home");
});
// Kết thúc DOMContentLoaded
// --- PRODUCT DETAILS HANDLERS ---
// Hàm hiển thị chi tiết sản phẩm trong SPA
function displayProductDetails(productId) {
  console.log("displayProductDetails được gọi với ID:", productId); // Debug log

  if (typeof allProduct === "undefined") {
    console.error("Dữ liệu sản phẩm chưa được tải");
    return;
  }

  const product = allProduct.find((p) => p.id === productId);
  if (!product) {
    console.error("Không tìm thấy sản phẩm với ID: " + productId);
    return;
  }

  console.log("Sản phẩm tìm thấy:", product.name); // Debug log

  // Tìm các phần tử trong view-product-details
  const detailView = document.getElementById("view-product-details");
  if (!detailView) {
    console.error("Không tìm thấy view-product-details trong DOM");
    return;
  }

  console.log("View product details tìm thấy"); // Debug log

  // Cập nhật thông tin sản phẩm
  const img = detailView.querySelector("#product-detail-img");
  const name = detailView.querySelector("#product-detail-name");
  const currentPrice = detailView.querySelector(
    "#product-detail-current-price"
  );
  const oldPrice = detailView.querySelector("#product-detail-old-price");
  const sale = detailView.querySelector("#product-detail-sale");
  const description = detailView.querySelector("#product-detail-description");
  const featuresList = detailView.querySelector("#product-detail-features");
  const breadcrumbCategory = detailView.querySelector("#breadcrumb-category");
  const breadcrumbProductName = detailView.querySelector(
    "#breadcrumb-product-name"
  );

  if (img) {
    img.src = product.imgSrc;
    img.alt = product.name;
  }
  if (name) name.textContent = product.name;
  if (currentPrice) currentPrice.textContent = product.currentPrice;

  if (oldPrice) {
    if (product.orginalPrice) {
      oldPrice.textContent = product.orginalPrice;
      oldPrice.style.display = "inline";
    } else {
      oldPrice.style.display = "none";
    }
  }

  if (sale) {
    if (product.discountPercent) {
      sale.textContent = product.discountPercent;
      sale.style.display = "inline";
    } else {
      sale.style.display = "none";
    }
  }

  // Cập nhật mô tả
  if (description) {
    description.textContent = getDefaultDescription(product);
  }

  // Cập nhật tính năng
  if (featuresList) {
    const features = getDefaultFeatures(product);
    featuresList.innerHTML = features
      .map((feature) => `<li><i class="ri-check-line"></i>${feature}</li>`)
      .join("");
  }

  // Cập nhật breadcrumb: luôn hiển thị "Tất cả sản phẩm"
  if (breadcrumbCategory) {
    breadcrumbCategory.innerHTML = `<a href="#" data-view="products">Tất cả sản phẩm</a>`;
  }
  if (breadcrumbProductName) {
    breadcrumbProductName.textContent = product.name;
  }

  // Cập nhật title
  document.title = product.name + " - Xtray";

  // Hiển thị view
  console.log("Gọi showView để hiển thị view-product-details"); // Debug log
  if (typeof showView === "function") {
    showView("view-product-details");
  } else if (typeof window.showView === "function") {
    window.showView("view-product-details");
  } else {
    // Fallback: tự implement
    document.querySelectorAll(".spa-view").forEach((view) => {
      view.classList.remove("active");
    });
    const viewToShow = document.getElementById("view-product-details");
    if (viewToShow) {
      viewToShow.classList.add("active");
      console.log("View đã được hiển thị");
    } else {
      console.error("Không tìm thấy view-product-details");
    }
  }

  // Cuộn lên đầu trang
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Khởi tạo chức năng tăng/giảm số lượng
  setupQuantityControls();

  // Khởi tạo nút "Thêm vào giỏ" cho trang chi tiết sản phẩm
  setupAddToCartButton(product);
}

// Hàm thiết lập điều khiển số lượng
function setupQuantityControls() {
  const quantityInput = document.getElementById("product-quantity");
  const decreaseBtn = document.querySelector(".products__show-right-buy-in");
  const increaseBtn = document.querySelector(".products__show-right-buy-de");

  if (!quantityInput || !decreaseBtn || !increaseBtn) {
    return; // Không tìm thấy các phần tử, có thể view chưa được hiển thị
  }

  // Luôn reset số lượng về 1 mỗi khi mở trang chi tiết sản phẩm
  quantityInput.value = "1";

  // Xóa event listeners cũ (nếu có) để tránh duplicate
  const newDecreaseBtn = decreaseBtn.cloneNode(true);
  const newIncreaseBtn = increaseBtn.cloneNode(true);
  decreaseBtn.parentNode.replaceChild(newDecreaseBtn, decreaseBtn);
  increaseBtn.parentNode.replaceChild(newIncreaseBtn, increaseBtn);

  // Lấy lại các phần tử sau khi clone
  const decrease = document.querySelector(".products__show-right-buy-in");
  const increase = document.querySelector(".products__show-right-buy-de");

  // Hàm kiểm tra và cập nhật số lượng
  function updateQuantity(newValue) {
    let quantity = parseInt(newValue) || 1;

    // Đảm bảo số lượng trong khoảng hợp lệ
    if (quantity < 1) {
      quantity = 1;
    }
    // Có thể thêm giới hạn tối đa nếu cần
    // if (quantity > maxQuantity) {
    //   quantity = maxQuantity;
    // }

    quantityInput.value = quantity;
    return quantity;
  }

  // Xử lý khi nhấn nút giảm (-)
  decrease.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const currentValue = parseInt(quantityInput.value) || 1;
    updateQuantity(currentValue - 1);
  });

  // Xử lý khi nhấn nút tăng (+)
  increase.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const currentValue = parseInt(quantityInput.value) || 1;
    updateQuantity(currentValue + 1);
  });

  // Xử lý khi người dùng nhập trực tiếp vào input
  quantityInput.addEventListener("change", function () {
    updateQuantity(this.value);
  });

  // Xử lý khi người dùng nhập (realtime validation)
  quantityInput.addEventListener("input", function () {
    // Chỉ cho phép nhập số
    this.value = this.value.replace(/[^\d]/g, "");
  });

  // Xử lý phím Enter
  quantityInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateQuantity(this.value);
      this.blur(); // Bỏ focus sau khi nhập
    }
  });
}

// Hàm thiết lập nút "Thêm vào giỏ" cho trang chi tiết sản phẩm
function setupAddToCartButton(product) {
  const addToCartBtn = document.getElementById("product-add-to-cart");

  if (!addToCartBtn) {
    return; // Không tìm thấy nút
  }

  // Xóa event listener cũ (nếu có) để tránh duplicate bằng cách clone nút
  const newBtn = addToCartBtn.cloneNode(true);
  addToCartBtn.parentNode.replaceChild(newBtn, addToCartBtn);

  const btn = document.getElementById("product-add-to-cart");

  // Thêm event listener mới
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Lấy số lượng từ input
    const quantityInput = document.getElementById("product-quantity");
    const quantity = parseInt(quantityInput?.value) || 1;

    // Lấy thông tin sản phẩm từ product object (đã có sẵn khi gọi hàm)
    const productName = product.name;
    const priceText = product.currentPrice;
    const price = parseInt(priceText.replace(/[^\d]/g, ""));
    const image = product.imgSrc;

    // Gọi hàm addToCart với số lượng
    if (typeof addToCart === "function") {
      addToCart(productName, price, image, quantity);
    } else {
      console.error("Hàm addToCart không tồn tại");
    }
  });

  // Thiết lập nút "Mua ngay" để chuyển thẳng đến trang thanh toán
  setupBuyNowButton(product);
}

// Hàm thiết lập nút "Mua ngay"
function setupBuyNowButton(product) {
  const buyNowBtn = document.querySelector(".products__show-right-buy-buy");

  if (!buyNowBtn) {
    console.error("Không tìm thấy nút Mua ngay");
    return;
  }

  // Xóa event listener cũ bằng cách clone nút
  const newBtn = buyNowBtn.cloneNode(true);
  buyNowBtn.parentNode.replaceChild(newBtn, buyNowBtn);

  const btn = document.querySelector(".products__show-right-buy-buy");

  // Thêm event listener mới
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Lấy số lượng từ input
    const quantityInput = document.getElementById("product-quantity");
    const quantity = parseInt(quantityInput?.value) || 1;

    // Lấy thông tin sản phẩm
    const productName = product.name;
    const priceText = product.currentPrice;
    const price = parseInt(priceText.replace(/[^\d]/g, ""));
    const image = product.imgSrc;

    // Xóa giỏ hàng hiện tại và thêm sản phẩm vào giỏ hàng mới
    cart = [
      { name: productName, price: price, image: image, quantity: quantity },
    ];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Mở modal giỏ hàng và hiển thị trang thanh toán
    if (window.router && typeof window.router.openModal === "function") {
      window.router.openModal("cart-modal");
      // Cập nhật cart và checkout
      renderCart();
      renderCheckout();
      // Chuyển đến trang thanh toán
      setTimeout(() => {
        showPage("thanhtoan-page");
      }, 100);
    } else {
      console.error("Không thể mở modal");
    }
  });
}

// --- 2. CÁC HÀM TIỆN ÍCH (Giữ nguyên) ---

// Hàm lấy tham số từ URL query string
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Hàm chuyển đổi category sang tên tiếng Việt
function getCategoryName(category) {
  const categoryMap = {
    keyboard: "Bàn phím",
    mouse: "Chuột",
    headphone: "Tai nghe",
    powerbank: "Sạc dự phòng",
  };
  return categoryMap[category] || category;
}

// Hàm tạo mô tả mặc định dựa trên category
function getDefaultDescription(product) {
  const { category, name } = product; // Gọn hơn
  const descriptions = {
    keyboard: `${name} là bàn phím cơ chất lượng cao với thiết kế hiện đại, mang đến trải nghiệm gõ phím mượt mà và chính xác. Với các phím cơ có độ bền cao và phản hồi nhanh, sản phẩm này phù hợp cho cả công việc và giải trí. Bàn phím được trang bị đèn LED RGB đẹp mắt và nhiều tính năng tiện ích khác.`,
    mouse: `${name} là chuột gaming chuyên nghiệp với độ chính xác cao và thiết kế ergonomic thoải mái. Với cảm biến quang học tiên tiến, chuột mang đến độ nhạy cao và phản hồi nhanh, phù hợp cho cả gaming và công việc hàng ngày. Sản phẩm được làm từ chất liệu cao cấp, bền bỉ theo thời gian.`,
    headphone: `${name} là tai nghe gaming chất lượng cao với âm thanh sống động và rõ ràng. Với công nghệ âm thanh tiên tiến, tai nghe mang đến trải nghiệm âm thanh chân thực, bass mạnh mẽ và khả năng chống ồn tốt. Thiết kế thoải mái, phù hợp cho sử dụng lâu dài.`,
    powerbank: `${name} là sạc dự phòng công suất cao với dung lượng pin lớn, đáp ứng nhu cầu sạc cho nhiều thiết bị. Với công nghệ sạc nhanh và an toàn, sản phẩm giúp bạn luôn có nguồn năng lượng dự phòng khi cần thiết. Thiết kế gọn nhẹ, dễ dàng mang theo mọi nơi.`,
  };
  return (
    descriptions[category] ||
    `${name} là sản phẩm chất lượng cao với thiết kế hiện đại và nhiều tính năng tiện ích.`
  );
}

// Hàm tạo danh sách tính năng mặc định
function getDefaultFeatures(product) {
  const { category } = product; // Gọn hơn
  const featuresMap = {
    keyboard: [
      "Thiết kế chắc chắn và bền bỉ",
      "Phím cơ có độ bền cao",
      "Phản hồi nhanh và chính xác",
      "Đèn LED RGB đẹp mắt",
      "Tương thích đa nền tảng",
    ],
    mouse: [
      "Cảm biến quang học độ chính xác cao",
      "Thiết kế ergonomic thoải mái",
      "Độ nhạy cao, phản hồi nhanh",
      "Bề mặt chống trượt",
      "Tuổi thọ pin/switch lâu dài",
    ],
    headphone: [
      "Âm thanh sống động và chân thực",
      "Bass mạnh mẽ, treble rõ ràng",
      "Khả năng chống ồn tốt",
      "Thiết kế thoải mái, nhẹ nhàng",
      "Micro tích hợp chất lượng cao",
    ],
    powerbank: [
      "Dung lượng pin lớn, sạc được nhiều lần",
      "Công nghệ sạc nhanh",
      "Bảo vệ an toàn đa lớp",
      "Thiết kế gọn nhẹ, dễ mang theo",
      "Tương thích với nhiều thiết bị",
    ],
  };
  return (
    featuresMap[category] || [
      "Chất lượng cao",
      "Thiết kế hiện đại",
      "Bền bỉ theo thời gian",
      "Giá trị tốt",
      "Hỗ trợ bảo hành đầy đủ",
    ]
  );
}

// Hàm cập nhật breadcrumb
function updateBreadcrumb(product) {
  const categoryName = getCategoryName(product.category);
  DOM.breadcrumb.innerHTML = `
        <a href="#">Trang chủ</a> <span class="breadcrumb-sep">&gt;</span> 
        <a href="#">Sản phẩm</a> <span class="breadcrumb-sep">&gt;</span> 
        <a href="#">${categoryName}</a> <span class="breadcrumb-sep">&gt;</span> 
        <span>${product.name}</span>
    `;
}

// Hàm hiển thị sản phẩm (Tối ưu)
function displayProduct(product) {
  // Cập nhật hình ảnh, tên, giá
  DOM.img.src = product.imgSrc;
  DOM.img.alt = product.name;
  DOM.name.textContent = product.name;
  DOM.currentPrice.textContent = product.currentPrice;

  // Cập nhật giá (Tối ưu logic ẩn/hiện)
  DOM.oldPrice.textContent = product.originalPrice || "";
  DOM.oldPrice.style.display = product.originalPrice ? "inline" : "none";

  DOM.salePercent.textContent = product.discountPercent || "";
  DOM.salePercent.style.display = product.discountPercent ? "inline" : "none";

  // Cập nhật mô tả (Tối ưu logic)
  DOM.description.textContent =
    product.description || getDefaultDescription(product);

  // Cập nhật tính năng (Tối ưu logic)
  const features = product.features || getDefaultFeatures(product);
  DOM.featuresList.innerHTML = features
    .map((feature) => `<li><i class="ri-check-line"></i>${feature}</li>`)
    .join("");

  // Cập nhật breadcrumb và title trang
  updateBreadcrumb(product);
  document.title = product.name + " - Xtray";
}

// --- 4. HÀM KHỞI TẠO (Tối ưu) ---
function init() {
  const productId = getURLParameter("id");
  if (!productId) {
    console.error("Không tìm thấy ID sản phẩm trong URL");
    return;
  }

  // Giả định `allProduct` (số ít) được tải từ file products.js
  if (typeof allProduct === "undefined") {
    console.error("Dữ liệu sản phẩm (allProduct) chưa được tải.");
    return;
  }

  const product = allProduct.find((p) => p.id === parseInt(productId));

  if (!product) {
    console.error("Không tìm thấy sản phẩm với ID: " + productId);
    alert("Không tìm thấy sản phẩm!");
    return;
  }

  displayProduct(product);
}

// Chạy hàm init khi HTML đã được tải xong
window.addEventListener("DOMContentLoaded", init);
