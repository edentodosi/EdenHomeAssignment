function maxSumSubsequence(arr) {
    if (arr == null || arr.length < 1) {
        console.log('invalid params, please insert valid params');
    }
    if (arr.length == 1) {
        return [arr[0],[arr[0]]];
    }

    let maxSumArray = new Array(arr.length);//Array that keeps the biggest sum. 
    let sequence = new Array(arr.length);//Array that saves the index of the value that comes after the current value and make the max subsequence.
    let startIndex = 0;
    let maxSum = arr[0];
    for (i = arr.length - 1; i >= 0; i--) {
        maxSumArray[i] = arr[i];
        sequence[i] = i;
        //Going over the rest of the array and checking which subsequence brings the biggest sum.
        for (j = i + 1; j < arr.length; j++) {
            //Checking if strictly increasing and if the sum with the current value brings the max subsequence. 
            if (arr[j] > arr[i] && arr[i] + maxSumArray[j] > maxSumArray[i]) {
                maxSumArray[i] = arr[i] + maxSumArray[j];
                sequence[i] = j;
            }
        }
        //Updating the max sum and the index that starting the max subsequence. 
        if (maxSum < maxSumArray[i]) {
            startIndex = i;
            maxSum = maxSumArray[i];
        }
    }
    //Creating the subsequence 
    let finalSubSequence = [];
    finalSubSequence.push(arr[startIndex]);
    //As long as the next index its not the current index.
    while (sequence[startIndex] != startIndex) {
        startIndex = sequence[startIndex];
        finalSubSequence.push(arr[startIndex]);
    }

    return [maxSum, finalSubSequence];
}



function testEx4() {
    let arr = [10, 70, 20, 30, 50, 11, 30];
    console.log(maxSumSubsequence(arr));
}