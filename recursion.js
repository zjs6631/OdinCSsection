
import { mergeSort } from "./mergeSort.js";

function fibs(num) {
    //if the number is less than 0 then there's 
    //nothing to process
    if (num < 1 || isNaN(num)){
        return "Invalid request";
    }

    //base case 1 to handle fibs(1)
    if (num === 1) return [0];

    //base case for fibs(2)
    if (num === 2) return [0, 1];

    //...(SPREAD operator) adds the following content to the array
    //so it's returning an array containing the content of fibs(num-1)

    return [...fibs(num - 1),
    fibs(num-1)[num-2] + fibs(num - 1)[num-3]];
};



console.log(fibs(10));
let arr = [3,5,1,2,6];
console.log("The unsorted array is: " + arr);
arr = mergeSort(arr);
console.log("The sorted array is: " + arr);

console.log("A demonstration of Math.floor... Math.floor(5/2) = " + Math.floor(5/2));