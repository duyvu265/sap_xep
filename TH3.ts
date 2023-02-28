let list:number[]=[7, 9, 4.5, 6.6, 5.7, -4.5,1];
function selection(list:number[]):number[] {
    for (let i = 0; i < list.length; i++) {
        let min = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        let tem = list[i];
        list[i] = list[min];
        list[min] = tem;
    }return list
}

console.log(selection(list))