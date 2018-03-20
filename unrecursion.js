'use strict';

// var module = {
//     id:'unrecursion',
//     exports:{

//     }
// }
function un_binary_search(arr,key){
    var low = 0,
        high = arr.length-1;
        while(low<=high){
            var mid = parseInt((high+low)/2);
            if(key == arr[mid]){
                return mid;
            }else if(key<arr[mid]){
             low = mid+1;
            }else if(key<arr[mid]){
                high = mid -1;
            }else{
                return -1;
            }
        }
};
function binary_search(arr,low,high,key){
  
    if(low>high){
        return -1;
    }
    var mid = parseInt((low+high)/2);
    if(arr[mid]==key){
        return mid;
    }else if(arr[mid]>key){
        high = mid-1;
        return binary_search(arr,low,high,key);
    }else if(arr[mid]<key){
        low = mid+1;
        return binary_search(arr,low,high,key);
    }
};
function bubble_sort(arr){
    for(var i = 0;i<arr.length-1;i++){
        for(var j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var sw = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = sw;
            }
        }
    }
}
function quick_sort(arr){//快速排序，将数组拆一半，然后递归调用
    if(arr.length<=1){
        return arr;
    }
    var pivoIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivoIndex,1)[0];

    var left = [];
    var right = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quick_sort(left).concat([pivot],quick_sort(right));
}
module.exports= {
    un_binary_search:un_binary_search,
    binary_search:binary_search,
    quick_sort:quick_sort
};