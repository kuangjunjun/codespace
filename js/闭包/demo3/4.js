var arr = []

for (var i = 0; i < 10; i++){
    
    (function a() {
            var j = i
            arr[i] = function () {
                console.log(j);
            }
        }) ()
    }
    
    for (var j = 0; j < arr.length; j++){
        arr[j]()
    }