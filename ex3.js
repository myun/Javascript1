function findDuplicates (array){
    var duplicates = [];
    // for (var i=0; i< array.length; i++) {
    //     if (duplicates[array[i]]) {
    //         duplicates[array[i]]++;
    //     }else {
    //         duplicates[array[i]] = 1;
    //     }
    // }
    // console.log(duplicates);
    // var newDuplicates = [];
    // for (var item in duplicates) {
    //     if (duplicates[item] > 1) {
    //         newDuplicates.push(item);
    //     }
    // }
    for (var i =0; i < array.length; i++) {
        var item = array[i];
        for (var n = 0; n < array.length; n++) {
            if (i === n) {
                continue;
            }
            var other = array[n];
            if (item === other && inArray(item, duplicates) === false) {

                duplicates.push(item);
            }
        }
    }
    return duplicates;
}
function inArray (item, array) {
    for (var n = 0; n < array.length; n++) {
        if (item === array[n]) {
            return true;
        }
    }
    return false;
}

var list = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
console.log(findDuplicates(list));