//Creating an array using classes
class myArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
  
    push(item) {
      this.data[this.length] = item; //Begins at 0 and assigns the number to index 0 at first
      this.length++; // Increment length every time we call this method
    }
    pop() {
      const lastItem = this.data[this.length - 1]; // assign lastItem to the last array
      delete this.data[this.length - 1]; // delete the value in the last index which is length - 1
      this.length--; // decrement the length -1 on every pop
    }
    deleteItem(index) {
      const item = this.data[index];
      this.shiftItems(index);
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        // shifts all array elements to the left
        this.data[i] = this.data[i + 1]; // assigning old value to the next one example newrr[1] now equals aloha
      }
      delete this.data[this.length - 1]; // deletes the data at the end
      this.length--; // decrements the length by one
    }
  }
  
  const newArr = new myArray();
  
  newArr.push("hi");
  newArr.push("hello");
  newArr.push("aloha");
  newArr.push("hola");
  newArr.deleteItem(1);
  newArr.pop();
  
  console.log(newArr); // prints myArray { length: 2, data: { '0': 'hi', '1': 'aloha' } }


  // Basic Array Methods
//   ----------------------------------------------------------------------

const myArray = ['a','b','c','d','e']

// Add item to end of array
myArray.push('f') // O(N)

//Removes last item from array 
myArray.pop() // O(1)

// Add item to beginning of array 
myArray.unshift() // O(N)

// Add item to index 2 as string
myArray.splice(2,0,'string') //O(N)

// Reverse a string 
//   ----------------------------------------------------------------------

//Method 1 

const myString = "Hello my name is Musab";

function reverse(str) {
  const splitStrings = str.split("");
  const backwardsArray = [];
  const lengthArr = splitStrings.length;

  for (let i = lengthArr; i >= 0; i--) {
    backwardsArray.push(splitStrings[i]);
  }

  console.log(backwardsArray.join(""));
}
reverse(myString);


//Built in JS method
function reverse2(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverse2(myString));


//Built in JS method
function reverse2(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverse2(myString));

  // Merging sorted arrays
//   ----------------------------------------------------------------------

const array1 = [0, 3, 4, 31];

const array2 = [4, 6, 30];

let index1 = 0;
let index2 = 0;
function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];

  let array1Item = arr1[index1];
  let arrayItem2 = arr2[index2];

  while (array1Item || arrayItem2) {
    console.log(array1Item, arrayItem2);
    if (!arrayItem2 || array1Item < arrayItem2) {
      mergedArr.push(array1Item);
      array1Item = arr1[index1];
      index1++;
    } else {
      mergedArr.push(arrayItem2);
      arrayItem2 = arr2[index2];
      index2++;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays(array1, array2));