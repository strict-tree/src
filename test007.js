"use strict";

const forEach = function forEach( arr, func ) {
      for ( let i = 0; i <= arr.length; i = i + 1) {
          func(arr[i]);
      }
}

let test = [1, 2, 3, 15, -5];
let myFun = console.log;

forEach(test, myFun);
