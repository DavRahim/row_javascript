

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
