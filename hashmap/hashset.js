const{Node,LinkedList} = require('./linked-list.js');

class Node{
    constructor(key,next){
        this.key = key;
        this.next = null;
    }
}

class HashSet{
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }
    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        let hashedKey = total % this.size;
        return hashedKey;
    }
    add(key){
        let hashedKey = this.hash(key);
        if(!this.map[hashedKey]){
            this.map[hashedKey] = new Node(key);
        }else{
            let current = this.map[hashedKey];
            while(current.next){
                current = current.next;
            }
            current.next = new Node(key);
        }
    }
   get(key){
   let hashedKey = this.hash(key);
        if(this.map[hashedKey]){
            let current = this.map[hashedKey];
            while(current){
                if(current.key === key){
                    return true;
                }
                current = current.next;
            }
        }
        return false;
       }
   resize(){
      const oldArray = this.bucketsArray;
       this.capacity *= 2; // Double the size
       this.bucketsArray = new Array(this.capacity).fill(null);
       this.occupied = 0;

      oldArray.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        this.add(current.key, current.value); // Keys are re-hashed
        current = current.next;
      }
      });
      }
   has(key){
    let hashedKey = this.hash(key);
        if(this.map[hashedKey]){
            let current = this.map[hashedKey];
            while(current){
                if(current.key === key){
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
    remove(key){
        let hashedKey = this.hash(key);
        if(this.map[hashedKey]){
            let current = this.map[hashedKey];
            if(current.key === key){
                this.map[hashedKey] = current.next;
            }else{
                while(current.next){
                    if(current.next.key === key){
                        current.next = current.next.next;
                        return true;
                    }
                    current = current.next;
                }
            }
        }
        return false;
        }
   length(){
      return this.occupied;
      }
   clear() {
      this.bucketsArray = new Array(16).fill(null);
      this.occupied = 0;
      }
   keys(){
      let keys = [];
      for(let i = 0; i < this.map.length; i++){
        if(this.map[i]){
            let current = this.map[i];
            while(current){
                keys.push(current.key);
                current = current.next;
            }
        }
    }
    return keys;
}
}