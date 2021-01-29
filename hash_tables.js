// Basic Object 
//   ----------------------------------------------------------------------
let user = { 
    age:24,
    name:'Musab',
    greeting: function(){
        console.log(`My my name is ${this.name}`)
    }   
}


// Sets and Maps
//   ----------------------------------------------------------------------
const a = new Map() // allows you to use any data type as a key (numbers, functions etc) items are ordered

const b = new Set() // only stores keys no values






// Custom hash table made with CLass
//   ----------------------------------------------------------------------
class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    set(key, value) {
      let address = this._hash(key);
  
      if (!this.data[address]) {
        this.data[address] = [];
        this.data[address].push(key, value);
      }
      this.data[address].push(key, value);
    }
    get(key) {
      // retrieves the value
      let address = this._hash(key);
      console.log(this.data[address][1]);
    }
  }
  
  const myHashTable = new HashTable(50);
  
  myHashTable.set("grapes", 10000);
  myHashTable.get("grapes"); // returns 10000
  myHashTable.set("apples", 9);
  myHashTable.get("apples"); // returns 9