

// number 

// console.log(Math.round(0.999));

// console.log("text" + "anything");

// console.log("amader desh " + "dada der desh");


// console.log(typeof ("akfk"));

// console.log(Math.round(Math.random() * 100));


const Arr = [223, 3, 3, 4, 4, 4, 11, 4, 4, 4]

Arr.forEach((item) => {
    if (item % 2 === 0) {
        // console.log(item);
    }

})

const evenArr = Arr.map((item) => {
    const oddArr = []
    if (item % 2 === 0) {
        oddArr.push(item)
    }

    return oddArr
})

// console.log(evenArr, "evenArr");

const notFour = evenArr.
    filter((item) => {
        //    console.log(item);
    })


const roundNumber = [22, 23, 24, 45];

const randNum = roundNumber.filter((item) => {
    if (item % 2 === 0) {
        return item
    }
})

console.log(randNum);

console.log(Math.round(Math.random() * 100));



const numberOdd = roundNumber.findIndex((item) => item === 33)

console.log(numberOdd, "numberOdd");


const manObj = {
    name: "Kalmal Uddin",
    age: 40,
    height: 56,
    education: "HSC",
}

const carObj = {
    name: "Toyta",
    model: "Allon",
    price: 3200000,
    kilo: 30000
}

console.log(carObj.name);


const products = [
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 50,
        categories: "oil",
        img: "https//:www.index.com"
    },
    {
        name: "coconut oil",
        price: 49,
        categories: "oil",
        img: "https//:www.index.com"
    },
]




const productMap = products.map((item) => {
    return {
        name: item.categories,
        categories: item.img
    }
})

const productFilter = products.filter((item) => {
    if (item.price === 49) {
        return item
    }
})
const productFilter2 = products.filter((item) => {
    if (item.price === 49) {
        return item
    }
})






console.log(productFilter);