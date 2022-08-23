let arr = ["puran","chandra"];

let object ={
    name:"puran",
    city:"dhanbad",
    getDetails:function(){
        console.log(`Hey I am ${this.name} from ${this.city}`);
    }
}

let cities = object.city;
console.log(cities);
object.getDetails();

console.log(object.__proto__);
console.log(Object.prototype);
console.log(object.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

let object2 ={
    name:"Anurag"
}

object2.__proto__=object;
console.log(object2.city);
