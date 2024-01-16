
const{Node,LinkedList} = require('./linked-list.js');


class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashMap{
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
    add(key,value){
        let hashedKey = this.hash(key);
        if(!this.map[hashedKey]){
            this.map[hashedKey] = new Node(key,value);
        }else{
            let current = this.map[hashedKey];
            while(current.next){
                current = current.next;
            }
            current.next = new Node(key,value);
        }
    }
    get(key){
        let hashedKey = this.hash(key);
        if(this.map[hashedKey]){
            let current = this.map[hashedKey];
            while(current){
                if(current.key === key){
                    return current.value;
                }
                current = current.next;
            }
        }
        return null;
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
        let count = 0;
        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                count++;
            }
        }
        return count;
    }
    clear(){
            this.map = new Array(this.size);
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
    values(){
        let values = [];
        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                let current = this.map[i];
                while(current){
                    values.push(current.value);
                    current = current.next;
                }
            }
        }
        return values;
    }
    entities(){
        let entities = [];
        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                let current = this.map[i];
                while(current){
                    entities.push([current.key,current.value]);
                    current = current.next;
                }
            }
        }
        return entities;
    }
}