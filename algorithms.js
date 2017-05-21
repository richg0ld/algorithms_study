const arr = [30,50,7,40,88,15,44,55,22,33,77,99,11,66,1,85];

//선택 정렬 알고리즘
const selectSort = (arr) => {
    arr = arr.slice();

    let min = 0;

    for(let i=0, len=arr.length; i<len; i++){
        min = i;
        for(let j = i+1;j<len;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        [ arr[i], arr[min] ] = [ arr[min], arr[i] ];
    }
    return arr;
};

//버블 정렬 알고리즘
const bubbleSort = (arr) => {
    arr = arr.slice();

    let top = -1, bound = -1, len = arr.length;

    do {
        top = len;
        for(let j = top-1;j>bound;j--){
            if(arr[j]<arr[j-1]){
                [ arr[j], arr[j-1] ] = [ arr[j-1], arr[j] ];
                top = j;
            }
        }
        bound = top;
    } while (top < len);
    return arr;
};

//삽입 정렬 알고리즘
const insertSort = (arr) => {
    arr = arr.slice();

    for(let i = 0, len = arr.length; i < len; i++){
        for(let j=i; j>0 && arr[j] < arr[j-1];j--){
            [ arr[j], arr[j-1] ] = [ arr[j-1], arr[j] ];
        }
    }
    return arr;
};


console.log( "선택 정렬 : ", selectSort(arr) );
console.log( "버블 정렬 : ", bubbleSort(arr) );
console.log( "삽입 정렬 : ", insertSort(arr) );

console.log(arr);