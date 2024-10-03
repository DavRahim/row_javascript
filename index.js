

// number 

// console.log(Math.round(0.999));

console.log("text" + "anything");

console.log("amader desh " + "dada der desh");


console.log(typeof ("akfk"));

console.log(Math.round(Math.random() * 100));


const Arr = [223, 3, 3, 4, 4, 4, 11, 4, 4, 4]

Arr.forEach((item) => {
    if (item % 2 === 0) {
        console.log(item);
    }

})

const evenArr = Arr.map((item) => {
    const oddArr = []
    if (item % 2 === 0) {
        oddArr.push(item)
    }

    return oddArr
})

console.log(evenArr, "evenArr");
