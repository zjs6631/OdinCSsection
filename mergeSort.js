export function mergeSort(array){ //implementation of merge sort using JS
    if(!Array.isArray(array) || isNaN(array[0])){ //if empty array then invalid
        return "Invalid input";
    }
    if (array.length === 1) return array; //length === 1 then the array is sorted, so return it

    const mid = Math.floor(array.length / 2); //else use math.floor to return a midpoint value
    //Math.floor always rounds down so 5/2 = 2

    //slice returns a new array containing the elements from point a to point b
    //does not include the element contained at the second parameter(noninclusive)
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    //sort the newly created halves
    left = mergeSort(left);
    right = mergeSort(right);

    //return the results of those sorts merged together
    return merge(left, right);

    function merge(left, right){
        const mergedArr = []; //create an array to be the merged array

        while(left.length > 0 && right.length > 0){ //while 
            if (left[0] < right[0]){ //tests which element is smaller
                                     //pushes smallest element onto the array
                                     //then uses .shift() to remove that pushed element
                                     //to continue processing the merge
                mergedArr.push(left[0]);
                left.shift();
            } else {
                mergedArr.push(right[0]);
                right.shift();
            }
        }

        //these handle the rest of the sorting (if one of the two arrays hits length of 0 before the other)
        //
        while(right.length > 0){
            mergedArr.push(right[0]);
            right.shift();
        }

        while(left.length > 0){
            mergedArr.push(left[0]);

            left.shift();
        }

        return mergedArr; //return the merged result
    }
}

