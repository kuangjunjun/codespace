var arr = []

// for (var i = 0; i < 10; i++){

for (var i = 0; i < 10; i++){
//     arr[i] = function () {
//         console.log(i);
//     }
//  }

    (function a(j) {
        arr[i] = function () {
            console.log(j);
        }
    }) (i)
}

for (var j = 0; j < arr.length; j++){
    arr[j]()
}








// (function () {
//     console.log(123);
// }) ()