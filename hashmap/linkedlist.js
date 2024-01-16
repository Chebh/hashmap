
class LinkedListnode{
    constructor(value,next){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
   append(value){
        let node = new LinkedListnode(value);
        if(!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
    prepend(value){
        let node = new LinkedListnode(value);
        node.next = this.head;
        this.head = node;
    }
    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    head(){
        return this.head;
    }
   tail(){
    if(!this.head){
            return null;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }
    at(index){
        if(index < 0 || index >= this.size()){
            return null;
        }
        let count = 0;
        let current = this.head;
        while(current){
            if(count === index){
                return current;
            }
            count++;
            current = current.next;
        }
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            let current = this.head;
            this.head = null;
            return current;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        let temp = current.next;
        current.next = null;
        return temp;
    }
    contains(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    find(value){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === value){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    tostring(){
        let current = this.head;
        let string = "";
        while(current){
            string += `{ ${current.value} } -> `;
            current = current.next;
        }
        string += "NULL";
        return string;
    }
    insertat(index,value){
        if(index < 0 || index > this.size()){
            return false;
        }
        if(index === 0){
            this.prepend(value);
            return true;
        }
        if(index === this.size()){
            this.append(value);
            return true;
        }
        let count = 0;
        let current = this.head;
        while(current){
            if(count === index - 1){
                let node = new LinkedListnode(value);
                node.next = current.next;
                current.next = node;
                return true;
            }
            count++;
            current = current.next;
        }
    }
    removeat(index){
        if(index < 0 || index >= this.size()){
            return null;
        }
        if(index === 0){
            let current = this.head;
            this.head = current.next;
            return current;
        }
        let count = 0;
        let current = this.head;
        while(current){
            if(count === index - 1){
                let temp = current.next;
                current.next = temp.next;
                return temp;
            }
            count++;
            current = current.next;
        }
    }
}
module.exports = LinkedList,LinkedListnode;