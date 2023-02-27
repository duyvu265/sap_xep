function insertionSort(arr:number[]):number[] {
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;console.log(`${arr} vi tri ${i}`)
        }
        arr[j + 1] = key;
        console.log( `${arr} vi tri ${i}`)
    }
    return  arr
}

insertionSort([1,9,5,2,7,3]);
