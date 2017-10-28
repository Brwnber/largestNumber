let numArray = [10, 32, 7, 60, 12, 9, 40, 54, 21, 100];

let largest = 0; 

for (i = 0; i < numArray.length; i++) {
    let current = numArray[i]

    if (current > largest) {
        largest = current;
    }
}

let j = 0

while (j < numArray.length) {
    let current = numArray[j]
    console.log("The greatest number is: " + largest)
    j++

    if (current > largest) {
        largest = current;
    }
}
console.log(largest)