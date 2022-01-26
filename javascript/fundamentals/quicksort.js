// function sort(arr, low, high)
// let high = arr[length-1]
// let low = arr[0]
// let pivot = 

function sort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];
    var low = [];
    var high = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? low.push(array[i]) : high.push(array[i]);
    }

    return sort(low).concat(pivot, sort(high));
};

var unsorted = [23, 45, 16, 37, 3, 99, 22];
var sorted = sort(unsorted);

console.log(sorted);
