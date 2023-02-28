let list: number[] = [4, 3, 6, 1, 9, 5, 2];

function insert(data: number[]): void {
    for (let i = 0; i < data.length ; i++) {
        let min = data[i];
        let minindex: number = i - 1;
        while (minindex >= 0 && min <= data[minindex]) {
            data[minindex + 1] = data[minindex]
            minindex--;
        }
        data[minindex + 1] = min;
        console.log(data)
    }
}


insert(list);