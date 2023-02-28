let number: number[] = [8, 3, 6, 1, 4, 10, 2, 50];
function bubblesort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j]
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list
}

console.log(bubblesort(number))




