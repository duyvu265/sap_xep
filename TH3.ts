let list:number[]=[1, 9, 4.5, 6.6, 5.7, -4.5];
function selection(data:number[]):void{
    for (let i = 0; i <data.length-1 ; i++) {
        let min:number=list[i];
        let minindex:number=i;
        for (let j = 0; j <list.length ; j++) {
            if (min>list[j]){
                min=list[j];
                minindex=j
            }
        }if (minindex!=i){
            list[minindex]=list[i];
            list[i]=min;

        }
    }
    console.log(list)
}

for (let i = 0; i <list.length ; i++) {
    console.log(list[i])
}