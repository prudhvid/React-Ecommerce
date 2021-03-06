const products = [
  {
    id: 1,
    name: "Green Dress",
    description: "Green Dress for Women",
    price: 1699,
    gender: "women",
    type: "shirt",
    designer: 1,
    img: "https://assets.ajio.com/medias/sys_master/root/h03/h76/11344430694430/-473Wx593H-460159430-green-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 2,
    name: "Mint Green Shirt",
    description: "Green saree",
    price: 499,
    gender: "women",
    designer: 2,
    type: "saree",
    img: "https://assets.ajio.com/medias/sys_master/root/hd9/h66/10597656363038/-473Wx593H-460124434-green-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
    name: "Women Maroon Kurta",
    description: "Maroon Kurta",
    price: 1499,
    gender: "women",
    type: "kurta",
    designer: 3,
    img: "https://assets.ajio.com/medias/sys_master/root/h80/hec/11284571357214/-473Wx593H-460136594-maroon-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
    name: "Mint Green Kurti Women",
    description: "Mint Green Kurti",
    price: 2000,
    designer: 4,
    gender: "women",
    type: "kurti",
    img: "https://assets.ajio.com/medias/sys_master/root/h1b/h38/10764474318878/-473Wx593H-460074235-mint-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
    name: "Silver Earring",
    description: "Silver Earring",
    price: 499,
    designer: 1,
    gender: "women",
    type: "earring",
    img: "https://assets.ajio.com/medias/sys_master/root/h28/hae/11134870224926/-473Wx593H-460164022-silver-MODEL.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 6,
    name: "Women Silver Necklace",
    description: "Silver Necklace",
    price: 499,
    designer: 2,
    gender: "women",
    type: "necklace",
    img: "https://assets.ajio.com/medias/sys_master/root/hbe/h98/11408013525022/-473Wx593H-460202517-silver-MODEL.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 7,
    name: "Stoles & Dupattas",
    description: "Embroidered Dupatta",
    price: 600,
    designer: 3,
    gender: "women",
    type: "dupatta",
    img: "https://assets.ajio.com/medias/sys_master/root/h71/he8/11396671930398/-473Wx593H-460189289-multi-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
    name: "Pink Dupatta",
    description: "Printed Dupatta",
    price: 1499,
    designer: 4,
    gender: "women",
    type: "dupatta",
    img: "https://assets.ajio.com/medias/sys_master/root/h40/hd0/11372663275550/-473Wx593H-460169324-red-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
    name: "Chanderi Cotton Dupatta",
    description: "Handblock Print Chanderi Pure Silk Cotton Dupatta",
    price: 2100,
    designer: 1,
    gender: "women",
    type: "shirt",
    img: "https://assets.ajio.com/medias/sys_master/root/hac/h4d/11386139869214/-473Wx593H-460189300-indigo-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
    name: "Churidar Kurta",
    description: "Churidar Kurta with Contrast Dupatta Set",
    price: 499,
    designer: 2,
    gender: "women",
    type: "shirt",
    img: "https://assets.ajio.com/medias/sys_master/root/hea/ha7/10400926072862/-473Wx593H-460081996-coral-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
    name: "Kurta with Embroidery",
    description: "Straight Kurta with Embroidery",
    price: 900,
    designer: 3,
    gender: "women",
    type: "watch",
    img: "https://assets.ajio.com/medias/sys_master/root/h96/hc8/10548764803102/-473Wx593H-460094515-ivory-MODEL.jpg",
    inCart: false,
    category: "kurta"
  },
  {
    id: 12,
    name: "Tie-Dyed Dupatta",
    description: "Hand Tie-Dyed Shibori Cotton Mull Dupatta",
    price: 1599,
    designer: 4,
    gender: "women",
    type: "dupatta",
    img: "https://assets.ajio.com/medias/sys_master/root/hfb/h5c/11372843106334/-473Wx593H-460169326-green-MODEL.jpg",
    inCart: false,
    category: "ethnic"
  },
  {
    id: 13,
    name: "Pink Salwar",
    description: "Pink silk chanderi pajamas",
    price: 1199,
    designer: 1,
    gender: "women",
    type: "pajama",
    img: "https://assets.ajio.com/medias/sys_master/root/h01/hf1/11397002559518/-473Wx593H-460170341-fuschia-MODEL4.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 14,
    name: "Palazzo Pants",
    description: "Floral Print Palazzo Pants",
    price: 1499,
    designer: 2,
    gender: "women",
    type: "trousers",
    img: "https://assets.ajio.com/medias/sys_master/root/hf1/h2d/11251608256542/-473Wx593H-460159412-lightgreen-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 15,
    name: "Cotton Kurta Fabric",
    description: "Hand Tie-Dye Bandhini Cotton Kurta Fabric",
    price: 2200,
    designer: 3,
    gender: "women",
    type: "fabric",
    img: "https://assets.ajio.com/medias/sys_master/root/h99/h2a/11372857262110/-473Wx593H-460169339-blue-MODEL.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 16,
    name: "Blue Kurta Fabric",
    description: "Hand Tie-Dyed Mothda Cotton Kurta Fabric",
    price: 800,
    designer: 4,
    gender: "women",
    type: "fabric",
    img: "https://assets.ajio.com/medias/sys_master/root/h35/h28/11287431282718/-473Wx593H-460169354-blue-MODEL2.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 17,
    name: "Printed Straight Kurta",
    description: "Printed Straight Kurta Women",
    price: 1400,
    designer: 1,
    gender: "women",
    type: "kurta",
    img: "https://assets.ajio.com/medias/sys_master/root/h49/hc9/10666888790046/-473Wx593H-460089663-yellow-MODEL.jpg",
    inCart: false,
    category: "ethnic"
  },
  {
    id: 18,
    name: "Print Mashru Bag",
    description: "Ajrak Handblock Print Mashru Bag",
    price: 2500,
    designer: 2,
    gender: "women",
    type: "bag",
    img: "https://assets.ajio.com/medias/sys_master/root/h59/hb3/10795852300318/-473Wx593H-460137487-multi-MODEL.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 19,
    name: "Straight Kurta with Slit",
    description: "Sleeveless Straight Kurta with Slit Hem",
    price: 1200,
    designer: 3,
    gender: "women",
    type: "tie",
    img: "https://assets.ajio.com/medias/sys_master/root/h24/hb0/10342167412766/-473Wx593H-460062773-rust-MODEL.jpg",
    inCart: false,
    category: "ethnic"
  },
  {
    id: 20,
    name: "Kurta with Front Open",
    description: "Printed Sleeveless Kurta with Front Open",
    price: 600,
    designer: 4,
    gender: "men",
    type: "tie",
    img: "https://assets.ajio.com/medias/sys_master/root/hd2/h82/10154526572574/-473Wx593H-460056842-blue-MODEL.jpg",
    inCart: false,
    category: "ethnic"
  },
  {
    id: 21,
    name: 'Tasselled Tie-Up kurta',
    description: 'Printed Chanderi Kurti with Tasselled Tie-Up',
    price: 900,
    designer: 1,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/hbf/h48/11225513984030/-473Wx593H-460159704-grey-MODEL.jpg',
    category: 'kurta'
  },
  {
    id: 22,
    name: 'Flared Kurta with Tassels',
    description: 'Kalidar Print Flared Kurta with Tassels',
    price: 900,
    designer: 2,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/h48/h6f/11265421213726/-473Wx593H-460166024-grey-MODEL.jpg',
    category: 'kurta'
  },
  {
    id: 23,
    name: 'Flared Kurta with Tassels',
    description: 'Embroidery Striped kurta',
    price: 1200,
    designer: 3,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/hdc/ha6/11159305682974/-473Wx593H-460150584-mauve-MODEL.jpg',
    category: 'kurta'
  },
  {
    id: 24,
    name: 'Embroidered collar kurta',
    description: 'Printed Straight Kurta with Embroidered Collar',
    price: 1500,
    designer: 4,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/h6a/he0/11309579829278/-473Wx593H-460158630-coral-MODEL.jpg',
    category: 'kurta'
  },
  {
    id: 25,
    name: 'Embroidered denim kurta',
    description: 'Embroidered Denim Kurta with Bell Sleeves',
    price: 900,
    designer: 1,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/h7c/h71/10967908483102/-473Wx593H-460091626-ltblue-MODEL.jpg',
    category: 'kurta'
  },
  {
    id: 26,
    name: 'Printed A-line Kurta',
    description: 'Printed A-line Kurta',
    price: 800,
    designer: 2,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/hfe/h50/11209124085790/-473Wx593H-460188339-indigo-MODEL.jpg',
    category: 'kurta'
  },
  {
    id: 27,
    name: 'Kurta',
    description: 'Fuschia Flared Kurta',
    price: 1900,
    designer: 3,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/h41/h4f/10411112005662/-473Wx593H-460058780-fuchsia-MODEL.jpg',
    category: 'kurta'
  },{
    id: 28,
    name: 'Pussy bow kurta',
    description: 'Straight Kurta with Pussy Bow',
    price: 1900,
    designer: 4,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/ha4/h5a/10498574516254/-473Wx593H-460089623-olive-MODEL.jpg',
    category: 'kurta'
  },{
    id: 29,
    name: 'Palazzo',
    description: 'Cropped Pleated Palazzo Pants',
    price: 1900,
    designer: 1,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/h4d/h24/11308843335710/-473Wx593H-460159446-coral-MODEL4.jpg',
    category: 'kurta'
  },{
    id: 30,
    name: 'Kalamkari Cotton Palazzos',
    description: 'Handblock Print Kalamkari Cotton Palazzos',
    price: 1900,
    designer: 2,
    gender: 'women',
    img: 'https://assets.ajio.com/medias/sys_master/root/h0c/h7a/11397131468830/-473Wx593H-440784111-beige-MODEL.jpg',
    category: 'kurta'
  }
];

export default products;
