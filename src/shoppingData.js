const SHOP_DATA = [
  {
    id: 1,
    title: 'Lenses',
    routeName: 'lenses',
    items: [
      {
        id: 1,
        name: 'Canon RF 28-70mm f/2L USM',
        imageUrl: 'https://i.ibb.co/xLRbRr6/canon28-70.jpg',
        price: 2999
      },
      {
        id: 2,
        name: 'Canon RF 70-200mm f/2.8L IS USM',
        imageUrl: 'https://i.ibb.co/2kW9tRC/canon70-200.jpg',
        price: 2699
      },
      {
        id: 3,
        name: 'ZEISS Otus 100mm f/1.4 ZE',
        imageUrl: 'https://i.ibb.co/k58r38R/otus100.jpg',
        price: 4990
      },
      {
        id: 4,
        name: 'Leica Summilux-M 35mm f/1.4 ASPH.',
        imageUrl: 'https://i.ibb.co/HGdBJ2t/summilux35.jpg',
        price: 5895
      },
      {
        id: 5,
        name: 'Leica Noctilux-M 50mm f/0.95 ASPH.',
        imageUrl: 'https://i.ibb.co/sHT4jTK/noctilux50.jpg',
        price: 12495
      },
      {
        id: 6,
        name: 'Sony FE 20mm f/1.8 G',
        imageUrl: 'https://i.ibb.co/Vjxvdf0/sony20.jpg',
        price: 898
      },
      {
        id: 7,
        name: 'Sigma 105mm f/1.4 DG HSM Art',
        imageUrl: 'https://i.ibb.co/jMqhBxg/sigma105.jpg',
        price: 1599
      },
      {
        id: 8,
        name: 'Nikon AF-S Nikkor 14-24mm f/2.8G ED',
        imageUrl: 'https://i.ibb.co/PzFcSxG/nikon14-24.jpg',
        price: 1746
      },
      {
        id: 9,
        name: 'Hasselblad XCD 80mm f/1.9',
        imageUrl: 'https://i.ibb.co/dmmMcYL/hasselblad80.jpg',
        price: 4845
      }
    ]
  },
  {
    id: 2,
    title: 'Film',
    routeName: 'film',
    items: [
      {
        id: 1,
        name: 'Kodak Portra 400 CN 35mm (x5)',
        imageUrl: 'https://i.ibb.co/0QQJHmz/portra400-35.jpg',
        price: 48
      },
      {
        id: 2,
        name: 'Fujifilm PRO 400H CN 35mm',
        imageUrl: 'https://i.ibb.co/KySg5QR/fuji400h-35.jpg',
        price: 12
      },
      {
        id: 3,
        name: 'Ilford HP5 Plus B&W 35mm',
        imageUrl: 'https://i.ibb.co/VBZn3C6/ilford-HP5-35.jpg',
        price: 6
      },
      {
        id: 4,
        name: 'Kodak Portra 400 CN 120 (x5)',
        imageUrl: 'https://i.ibb.co/N9NZrp2/portra400-120.jpg',
        price: 43
      },
      {
        id: 5,
        name: 'Kodak Ektachrome E100 Slide 120 (x5)',
        imageUrl: 'https://i.ibb.co/YtRDZh5/ektachrome-120.jpg',
        price: 52
      },
      {
        id: 6,
        name: 'Kodak Tri-X 400 B&W 120 (x5)',
        imageUrl: 'https://i.ibb.co/YkYVTX8/tri-X400-120.jpg',
        price: 52
      },
      {
        id: 7,
        name: 'Cinestill 800T CN 120',
        imageUrl: 'hhttps://i.ibb.co/N1dBjYb/cinestill800-T-120.jpg',
        price: 15
      },
      {
        id: 8,
        name: 'Kodak Ektar 100 CN 4x5 (10 sheets)',
        imageUrl: 'https://i.ibb.co/T0FJ6gf/ektar100-4x5.jpg',
        price: 44
      },
      {
        id: 9,
        name: 'Fujifilm Provia 100F Slide 8x10 (20 sheets)',
        imageUrl: 'https://i.ibb.co/vkL6fTv/provia-8x10.jpg',
        price: 300
      }
    ]
  },
  {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 1,
        name: 'Gitzo GT2542 Carbon Fiber Tripod',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 1330
      },
      {
        id: 2,
        name: 'Pelican 1510TP Waterproof Case',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 261
      },
      {
        id: 3,
        name: 'Peak Design SL-BK-3 Camera Strap',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 4,
        name: 'Peak Design Everyday Backpack (30L)',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 233
      },
      {
        id: 5,
        name: 'B+W 77mm XS-Pro UV Haze MRC-Nano 010M Filter',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 63
      },
      {
        id: 6,
        name: 'SanDisk 1TB Extreme UHS-I SDXC Memory Card',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 399
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 1,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 2,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 3,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 4,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
]