function smallestDifference(firstArray, secondArray) {
    // According to the question insturctions I'm assuming its not null and the length is greater than 0.
    firstArray.sort(function (a, b) { return a - b });
    secondArray.sort(function (a, b) { return a - b });
    let firstArrayIndex = 0, secondArrayIndex = 0;
    let smallestDifference = Math.abs(firstArray[firstArrayIndex] - secondArray[secondArrayIndex]);
    let saveFirstIndex = firstArrayIndex;
    let saveSecondIndex = secondArrayIndex;

    //Check that we are still in the arrays limits.
    while (firstArrayIndex < firstArray.length && secondArrayIndex < secondArray.length) {
        //The value in the secondArray is bigger than the value in the firstArray -if we will promote secondArrayIndex the difference will be larger so we should promote firstArrayIndex.
        if (firstArray[firstArrayIndex] < secondArray[secondArrayIndex])
            firstArrayIndex++;

        //The value in the firstArray is bigger than the value in the secondArray -if we will promote firstArrayIndex the difference will be larger so we should promote secondArrayIndex.
        else
            secondArrayIndex++;

        if (smallestDifference > (Math.abs(firstArray[firstArrayIndex] - secondArray[secondArrayIndex]))) {
            smallestDifference = (Math.abs(firstArray[firstArrayIndex] - secondArray[secondArrayIndex]));
            saveFirstIndex = firstArrayIndex;
            saveSecondIndex = secondArrayIndex;
        }

    }
    
    let smallestDifferenceArray = new Array(firstArray[saveFirstIndex], secondArray[saveSecondIndex]);
    return smallestDifferenceArray;
}



function testEx3() {
    let firstArray = [-1, 5, 10, 20, 28, 3];
    let secondArray = [26, 134, 135, 15, 17];

    let res = smallestDifference(firstArray, secondArray);
    console.log(res);
}