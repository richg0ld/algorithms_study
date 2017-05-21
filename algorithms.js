const arr = [30,50,7,40,88,15,44,55,22,33,77,99,11,66,1,85];

//선택 정렬 알고리즘
const selectSort = arr => {
    arr = arr.slice();

    let min = 0;

    for(let len=arr.length, i=0; i<len; i++){
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
const bubbleSort = arr => {
    arr = arr.slice();

    let len = arr.length, top = -1, bound = -1;

    do {
        top = len;
        for(let j = top-1; j>bound; j--){
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
const insertSort = arr => {
    arr = arr.slice();

    for(let len = arr.length, i = 0; i < len; i++){
        for(let j=i; j>0 && arr[j] < arr[j-1];j--){
            [ arr[j], arr[j-1] ] = [ arr[j-1], arr[j] ];
        }
    }
    return arr;
};

//셸 정렬 알고리즘
const shellSort = arr => {
    arr = arr.slice();

    for(let len = arr.length, d = len/2; d>=1; d = d/2){
        for(let i = d; i<len; i++){
            for(let j = i; j>=d && arr[j] < arr[j-d]; j=j-d){
                [ arr[j], arr[j-d] ] = [ arr[j-d], arr[j] ];
            }
        }
    }

    return arr;
};

//합병 정렬 알고리즘
// const mergeSort = arr => {
//     const merge = (arr1, arr2) => {
//         let result = [];
//         arr1 = arr1.slice(), arr2 = arr2.slice();
//
//         let i, j, k, len1 = arr1.length, len2 = arr2.length;
//         i = j = k = 0;
//         while(i<n && j<m){
//             if(arr1[i] <= arr2[j]) {
//                 result[k++] = arr1[i++];
//             }else{
//                 result[k++] = arr2[i++];
//             }
//         }
//         for(;i<len1;i++){
//             result[k++] = arr1[j];
//         }
//         for(;j<len2;j++){
//             result[k++] = arr2[j];
//         }
//         return result;
//     };
//
//     arr = arr.slice();
//     let len = arr.length, arrB = [], mid;
//
//     if(len <= 1) return;
//     mid = len/2;
//
// };

// //퀵 정렬 알고리즘
// const quickSort = arr => {
//     const partition = (arrA) => {
//         let lenA = arrA.length, i = 1, j = lenA-1;
//         while(i<j){
//             while(arrA[i] < arrA[0] && i<lenA){
//                 i++;
//             }
//             while(arrA[i] >= arrA[0] && i>0){
//                 i--;
//             }
//             if(i<j){
//                 [ arrA[i], arrA[j] ] = [ arrA[j], arrA[i] ];
//             }else{
//                 [ arrA[0], arrA[j] ] = [ arrA[j], arrA[0] ];
//             }
//         }
//         return j;
//     };
//
//     arr = arr.slice();
//     let len = arr.length, pivot;
//
//     if(len <= 1) return;
//     pivot = partition(arr);
//
//
//     return arr;
// };

console.log( "선택 정렬 : ", selectSort(arr) );
console.log( "버블 정렬 : ", bubbleSort(arr) );
console.log( "삽입 정렬 : ", insertSort(arr) );
console.log( "셸 정렬 : ", shellSort(arr) );

console.log(arr);