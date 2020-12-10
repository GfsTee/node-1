// const greaterThan = (array) => {
//     const result = array.filter(ele => {
//         // console.log(ele.population > 100000);
//         if (ele.population > 100000) {
//             return ele
//         }
//     })
//     return result
// }
const greaterThan = (array) => {
    const result = array.filter(ele => ele.population > 100000)
    return result
}
const smallerThan = (array) => {
    const result = array.filter(ele => ele.population < 100000)
    return result
}

// module.exports = greaterThan

const removeItem = (array, rem) => {
    return array.filter(ele => ele !== rem)
}
// const removeItem = (array, rem) => {
//     const result = array.filter(ele => {
//         if (ele !== rem) {
//             return ele
//         }
//     })
//     return result
// }
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// module.exports.randomIntFromInterval = randomIntFromInterval
const newFuc = (array, position) => {
    return array[position]
}
module.exports = {
    greaterThan,
    smallerThan,
    removeItem,
    randomIntFromInterval,
    newFuc
}