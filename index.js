// 53 - masala
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 15 }
];
function filterAdultUsers(users) {
    let arr = []
    for(let item of users){
        if (item.age >= 18) {
            arr.push(item)
        }
    }
    console.log(arr);
}
// filterAdultUsers(users); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]






// 54 - masala
function findZeroIndices(matrix) {
    let new_arr = []
   matrix.forEach((item,ind) => {
    let arr = []
        item.forEach((item, index)=>{
            if (item == 0) {
               arr.push(ind,index)
            } 
        })
        new_arr.push(arr)
   }) 
   console.log(new_arr);
}
// findZeroIndices([
//     [1, 0, 3],
//     [4, 5, 0],
//     [7, 0, 9]
// ]); 
// Output: [[0, 1], [1, 2], [2, 1]]





// 55 - masala
function mostFrequentElement(arr) {
    let frequency = {};
    for (let element of arr) {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }

    let maxCount = 0;
    let mostFrequent = null;
    for (let element in frequency) {
        if (frequency[element] > maxCount) {
            maxCount = frequency[element];
            mostFrequent = element;
        }
    }
    
    return mostFrequent;
}
// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4



// 56 - masala
function rotateMatrix(matrix) {
    let result = []
    for(let i = 0; i < matrix.length; i++){
        let arr = []
        for(let g = 0; g < matrix[i].length; g++){
           arr.push(matrix[g][i])
        }
        result.push(arr.reverse(""))
    }
    console.log(result);
}
// rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]); 
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]





// 57 - masala
function filterUniqueElements(arr) {
    let frequency = {};
    for (let item of arr) {
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    }
 
    let uniqueitems = [];
    for (let item of arr) {
        if (frequency[item] === 1) {
            uniqueitems.push(item);
        }
    }
    
    return uniqueitems;
}

// console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]





// 58 - masala
function rotateArray(nums, k) {
    let n = nums.length;
    k = k % n;
    if (k === 0) return nums; 
    return nums.slice(-k).concat(nums.slice(0, n - k));
}
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// Output: [5, 6, 7, 1, 2, 3, 4]

