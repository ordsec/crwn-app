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
        imageUrl: 'https://i.ibb.co/8Bb143n/gitzo-tripod.jpg',
        price: 1330
      },
      {
        id: 2,
        name: 'Pelican 1510TP Waterproof Case',
        imageUrl: 'https://i.ibb.co/KjsrrW2/pelican-case.jpg',
        price: 261
      },
      {
        id: 3,
        name: 'Peak Design SL-BK-3 Camera Strap',
        imageUrl: 'https://i.ibb.co/wNN6Kjq/peak-design-strap.jpg',
        price: 90
      },
      {
        id: 4,
        name: 'Peak Design Everyday Backpack (30L)',
        imageUrl: 'https://i.ibb.co/X781n0M/peak-design-pack.jpg',
        price: 233
      },
      {
        id: 5,
        name: 'B+W 77mm XS-Pro UV Haze MRC-Nano 010M Filter',
        imageUrl: 'https://i.ibb.co/fqV7ZCp/bw-filter.jpg',
        price: 63
      },
      {
        id: 6,
        name: 'SanDisk 1TB Extreme UHS-I SDXC Memory Card',
        imageUrl: 'https://i.ibb.co/H7gyQkR/sandisk-sd.jpg',
        price: 399
      }
    ]
  },
  {
    id: 4,
    title: 'Digital cameras',
    routeName: 'digitalcameras',
    items: [
      {
        id: 1,
        name: 'Canon EOS R5 Mirrorless Camera & 24-105 f/4L lens',
        imageUrl: 'https://i.ibb.co/0f2PKBr/canon-r5-24-105.jpg',
        price: 4999
      },
      {
        id: 2,
        name: 'Sony Alpha a7R IV Mirrorless Camera (Body)',
        imageUrl: 'https://i.ibb.co/mbgFrgr/sony-a7r-iv.jpg',
        price: 3498
      },
      {
        id: 3,
        name: 'Canon EOS 1DX Mark III DSLR Camera (Body)',
        imageUrl: 'https://i.ibb.co/Fb3rbzZ/canon-1dx-iii.jpg',
        price: 6499
      },
      {
        id: 4,
        name: 'Fujifilm GFX 50R Medium Format Mirrorless Camera (Body)',
        imageUrl: 'https://i.ibb.co/K5qn0F7/fuji-gfx-50r.jpg',
        price: 3499
      },
      {
        id: 5,
        name: 'Leica Q2 Digital Mirrorless Camera',
        imageUrl: 'https://i.ibb.co/T40x4Nr/leica-q2.jpg',
        price: 4995
      },
      {
        id: 6,
        name: 'Leica M10-R Digital Rangefinder Camera',
        imageUrl: 'https://i.ibb.co/TRHc9QJ/leica-m10-r.jpg',
        price: 8295
      },
      {
        id: 7,
        name: 'Hasselblad H6D-400c MS Medium Format DSLR Camera',
        imageUrl: 'https://i.ibb.co/Bqf2yKm/hasselblad-h6d.jpg',
        price: 47995
      }
    ]
  },
  {
    id: 5,
    title: 'Film Cameras',
    routeName: 'filmcameras',
    items: [
      {
        id: 1,
        name: 'Contax G2 35mm Rangefinder Camera & Biogon 28mm f/2.8 lens',
        imageUrl: 'https://i.ibb.co/nL46Bp8/contax-g2.jpg',
        price: 1299
      },
      {
        id: 2,
        name: 'Canon AE-1 35mm DSLR Camera & FD 28 f/2.8 lens',
        imageUrl: 'https://i.ibb.co/BcVzjnc/canon-ae-1.jpg',
        price: 300
      },
      {
        id: 3,
        name: 'Leica M6 0.72x 35mm Rangefinder Camera',
        imageUrl: 'https://i.ibb.co/mJ0YmMD/leica-m6.jpg',
        price: 2700
      },
      {
        id: 4,
        name: 'Fujifilm GA645 6x4.5 Medium Format Camera',
        imageUrl: 'https://i.ibb.co/t3tk42M/fuji-ga645.jpg',
        price: 750
      },
      {
        id: 5,
        name: 'Plaubel Makina 670 6x7 Medium Format Rangefinder Camera',
        imageUrl: 'https://i.ibb.co/5TqY6hy/makina-670.jpg',
        price: 2600
      },
      {
        id: 6,
        name: 'Mamiya RZ67 Pro II Camera & Sekor Z 110mm f/2.8 Lens',
        imageUrl: 'https://i.ibb.co/4PWkpBs/mamiya-rz67-ii.jpg',
        price: 2100
      }
    ]
  }
]

export default SHOP_DATA;