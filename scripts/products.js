let products = [
    {
        id: 1,
        title: 'Hoodie "Rolling Stones" white',
        price: 250,
        image: "./assets/img/hoodies/1.jpg",
        type: "hoodie",
        tags: ["hoodie", "rolling", "stones", "white"]
    },
    {
        id: 2,
        title: 'Hoodie - Black Simple',
        price: 200,
        image: "./assets/img/hoodies/2.jpg",
        type: "hoodie",
        tags: ["hoodie", "black", "simple"]
    },
    {
        id: 3,
        title: 'Hoodie - White Simple',
        price: 200,
        image: "./assets/img/hoodies/3.jpg",
        type: "hoodie",
        tags: ["hoodie", "white", "simple"]
    },
    {
        id: 4,
        title: 'Hoodie "Drew" Black',
        price: 270,
        image: "./assets/img/hoodies/4.jpg",
        type: "hoodie",
        tags: ["hoodie", "drew", "black", "smile", "face"]
    },
    {
        id: 5,
        title: 'Hoodie "Berserk"',
        price: 300,
        image: "./assets/img/hoodies/5.jpg",
        type: "hoodie",
        tags: ["hoodie", "berserk", "face", "japanese", "japan"]
    },
    {
        id: 6,
        title: 'Hoodie "Breaking Bad" blue  ',
        price: 220,
        image: "./assets/img/hoodies/6.jpg",
        type: "hoodie",
        tags: ["hoodie", "breaking", "bad", "blue"]
    },
    {
        id: 7,
        title: 'Hoodie "Japan Tokyo" black',
        price: 240,
        image: "./assets/img/hoodies/7.jpg",
        type: "hoodie",
        tags: ["hoodie", "japan", "tokyo", "black"]
    },
    {
        id: 8,
        title: 'T-Shirt "White" Black & White',
        price: 70,
        image: "./assets/img/tshirts/1.jpg",
        type: "tshirt",
        tags: ["tshirt", "white", "black"]
    },
    {
        id: 9,
        title: 'T-Shirt "Thug" White Japanese',
        price: 100,
        image: "./assets/img/tshirts/2.jpg",
        type: "tshirt",
        tags: ["tshirt", "thug", "white", "japan", "japanese"]
    },
    {
        id: 10,
        title: 'T-Shirt "Wall Street Bull" Black',
        price: 90,
        image: "./assets/img/tshirts/3.jpg",
        type: "tshirt",
        tags: ["tshirt", "wall", "street", "bull", "black"]
    },
    {
        id: 11,
        title: 'T-Shirt "Bullshit" Black',
        price: 80,
        image: "./assets/img/tshirts/4.jpg",
        type: "tshirt",
        tags: ["tshirt", "bullshit", "black"]
    },
    {
        id: 12,
        title: 'T-Shirt - Black Simple',
        price: 50,
        image: "./assets/img/tshirts/5.jpg",
        type: "tshirt",
        tags: ["tshirt", "black", "simple"]
    },
    {
        id: 13,
        title: 'T-Shirt - White Simple',
        price: 50,
        image: "./assets/img/tshirts/6.jpg",
        type: "tshirt",
        tags: ["tshirt", "white", "simple"]
    },
    {
        id: 14,
        title: 'Balaclava Ski Mask - White',
        price: 40,
        image: "./assets/img/hats/1.jpg",
        type: "hat",
        tags: ["hat", "white", "balaclava", "ski", "mask"]
    },
    {
        id: 15,
        title: 'Watch Hat - "Hello World" Black & Fuchsias',
        price: 20,
        image: "./assets/img/hats/2.jpg",
        type: "hat",
        tags: ["hat", "watch", "hello", "world", "you", "fucking", "suck", "black", "fuchsias"]
    },
    {
        id: 16,
        title: 'Cap - "Toronto Raptors" Black & White',
        price: 25,
        image: "./assets/img/hats/3.jpg",
        type: "hat",
        tags: ["hat", "cap", "toronto", "raptors", "black", "white"]
    },
    {
        id: 17,
        title: 'Cap - "New York Yankees" Black & Pink',
        price: 25,
        image: "./assets/img/hats/4.jpg",
        type: "hat",
        tags: ["hat", "cap", "new", "york", "yankees", "black", "pink"]
    },
    {
        id: 18,
        title: 'Visor - Pink',
        price: 20,
        image: "./assets/img/hats/5.jpg",
        type: "hat",
        tags: ["hat", "visor", "pink"]
    },
    {
        id: 19,
        title: 'Bucket Hat - "Sport" Black',
        price: 30,
        image: "./assets/img/hats/6.jpg",
        type: "hat",
        tags: ["hat", "bucket", "hat", "sport", "black"]
    },
    {
        id: 20,
        title: 'Bucket Hat - "Thug Life" White',
        price: 30,
        image: "./assets/img/hats/7.jpg",
        type: "hat",
        tags: ["hat", "bucket", "hat", "thug", "life", "white"]
    },
    {
        id: 21,
        title: 'Jeans - "Sarchon" Black',
        price: 70,
        image: "./assets/img/pants/1.jpg",
        type: "pants",
        tags: ["pants", "jeans", "sarchon", "black"]
    },
    {
        id: 22,
        title: 'Cargo - Black & Cammo',
        price: 65,
        image: "./assets/img/pants/2.jpg",
        type: "pants",
        tags: ["pants", "cargo", "black", "cammo"]
    },
    {
        id: 23,
        title: 'Cargo - "Tactical" Black',
        price: 60,
        image: "./assets/img/pants/3.jpg",
        type: "pants",
        tags: ["pants", "cargo", "black", "cammo"]
    },
    {
        id: 24,
        title: 'Cargo - Black & Orange',
        price: 65,
        image: "./assets/img/pants/4.jpg",
        type: "pants",
        tags: ["pants", "cargo", "black", "orange"]
    },
    {
        id: 25,
        title: 'Joggers - Gray & Black',
        price: 45,
        image: "./assets/img/pants/5.jpg",
        type: "pants",
        tags: ["pants", "joggers", "gray", "black"]
    },
    {
        id: 26,
        title: 'Joggers Cargo - Chandal Orange',
        price: 60,
        image: "./assets/img/pants/6.jpg",
        type: "pants",
        tags: ["pants", "joggers", "cargo", "chandal", "orange"]
    },
    {
        id: 27,
        title: 'Basketball Shoes - "Retro" Black & Red',
        price: 300,
        image: "./assets/img/shoes/1.jpg",
        type: "shoes",
        tags: ["shoes", "basketball", "sneakers", "black", "red", "retro"]
    },
    {
        id: 28,
        title: 'Basketball Shoes - Black & Orange',
        price: 320,
        image: "./assets/img/shoes/2.jpg",
        type: "shoes",
        tags: ["shoes", "basketball", "shoes", "black", "orange"]
    },    {
        id: 29,
        title: 'Sneakers - "Fashion" Black',
        price: 250,
        image: "./assets/img/shoes/3.jpg",
        type: "shoes",
        tags: ["shoes", "sneakers", "fashion", "black"]
    },    {
        id: 30,
        title: 'Sneakers - "Fashion" White & Black',
        price: 250,
        image: "./assets/img/shoes/4.jpg",
        type: "shoes",
        tags: ["shoes", "sneakers", "fashion", "white", "black"]
    },    {
        id: 31,
        title: 'Sneakers - "Fashion" Blue & Brown',
        price: 250,
        image: "./assets/img/shoes/5.jpg",
        type: "shoes",
        tags: ["shoes", "sneakers", "fashion", "blue", "brown"]
    },    {
        id: 32,
        title: 'Skechers - Black',
        price: 200,
        image: "./assets/img/shoes/6.jpg",
        type: "shoes",
        tags: ["shoes", "skechers", "black"]
    },    {
        id: 33,
        title: 'Trekking Boots - "Outdoor" Black',
        price: 350,
        image: "./assets/img/shoes/7.jpg",
        type: "shoes",
        tags: ["shoes", "trekking", "boots", "outdoor", "black"]
    },
];

const splitProds = (size) => {
    let chunk = [];
    for(let i = 0; i < products.length ; i+= size) {
        chunk.push(products.slice(i, i + size));
    } 
    return chunk
}
const allProds = {
    prodList: splitProds(8),
    next: 1,
    limit: splitProds(8).length
};
