let list: number[] = [3,5,2,6,1,9,8];
function bubblesort1(list:number[]):number[] {
    for (let i = 0; i <list.length ; i++) {
        for (let j = 0; j <list.length-i ; j++) {
            if (list[j]>list[j+1]){
                let temp=list[j]
                list[j]=list[j+1];
                list[j+1]=temp;
            }
        }
    } return list
}

console.log(bubblesort1(list))


