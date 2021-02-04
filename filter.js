const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filteredNumsArr = numsArr.filter((value, index) => value % 2 === 0); // implicit return
const filteredNumsArr = numsArr.filter((value, index) => { return value % 2 === 0; });

console.log(filteredNumsArr); // [ 2 4 6 8...]
















// Behind scenes
function filterLookAlike(arr, callbackFunc) {
    let updatedArr = [];

    // go through each item
    // check if condition passes -> if yes update array
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (callbackFunc(item)) {
            updatedArr.push(item);
        }
    }

    return updatedArr;
}

const evenNums = filterLookAlike(numsArr, (value, index) => {
    return value % 2 === 0;
});