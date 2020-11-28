class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

set (kay, value) {
  this.data.fill([kay, value], this._hash(kay), this._hash(kay) + 1)
}

get (kay) {
  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i]) {
      if (this.data[i][0] === kay) {
        return this.data[i][1]
      }
    }
  }
}

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
