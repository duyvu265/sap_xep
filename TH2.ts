
    let number: number[] = [8, 3, 6, 1, 4, 10, 2, 50];

   function bubbleSortByStep(list: number[]): void {
        let neednestpass: boolean = true;
        for (let i = 0; i < list.length; i++) {
            neednestpass = true;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + i]) {
                    console.log("Swap " + list[j] + " with " + list[j + 1]);
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    neednestpass = true;
                    console.log(list[j])

                }


            }if (neednestpass = false) {
                console.log("Array may be sorted and next pass not needer");
                break;
        }

    }
}
bubbleSortByStep(number);

