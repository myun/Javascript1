function fibonacci_set(max){
    if (max > 1){
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length-1] + fib_list[fib_list.length-2];
        }
        return fib_list;
    } else {
        return [1, 1];
    }
}

function even(n){
    return n % 2 === 0;
}

function sum(numbers){
    var total = 0;
    for (var i=0; i<numbers.length; i += 1){
        total += numbers[i];
    }
    return total;
}


function filter(fibonacci){
    var filtered_fib = [];
    //for each item in fibonacci run it through even and push to
    //filtered_fib if even(item) ===0
    for (var i=0; i<fibonacci.length; i += 1){
        var item;
        item = fibonacci[i];
         if (even(item) === true){
            filtered_fib.push(item);
        }
    }
    return filtered_fib;
}
console.log(sum(filter(fibonacci_set(4000000))));