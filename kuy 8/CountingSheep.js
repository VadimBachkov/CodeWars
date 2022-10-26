function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((previousValue, item) => {
        return item ? previousValue + 1 : previousValue
    }, 0)
}