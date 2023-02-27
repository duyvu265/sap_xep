// let list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
// function BubbleSort(data:number[]):void {
//     for (let i = 0; i <data.length ; i++) {
//         for (let j = 0; j <data.length-i ; j++) {
//             if (data[i]>data[i+1]){
//                 let  temp=list[j]
//                 list[j]=list[j+1];
//                 list[j+1]=temp;
//             }console.log(data[j])
//         }
//     }
//
// }
//
// BubbleSort(list);


let list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];


function bubbleSort(list: number[]): void {
    let needNextPass: boolean = true;
    for (let k = 1; k < list.length && needNextPass; k++) {
        needNextPass = false;
        for (let i = 0; i < list.length - k; i++) {
            if (list[i] > list[i + 1]) {
                let temp: number = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                needNextPass = true;
                console.log(list[i])
            }
        }
    }
}

bubbleSort(list);



