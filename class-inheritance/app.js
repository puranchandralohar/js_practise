// class person {
  
//     constructor(n,a){
//         this.name = n;
//         this.age = a;
//         // console.log("Hii")
//     }
    
//     sayHi(){
//       console.log("hello")
//     }
    
//     static bat = "batman";
    
//     static hello(){
//       console.log("Static method")
//     }
  
// }

// let person1 = new person("Tony", 18);
// person.hello()
// console.log(person.bat);

// console.log(person1)


// Inheritance

class emp {
    constructor(n){
      this.name = n;
      // console.log("calling emp")
    }
    
    msg(){
      console.log("Hello")
    }
  }
  
  
  class manager extends emp {
    constructor(p,d){
      super(p)
      this.department = d;
    }
    
    msg(){
      console.log("I am new joinee")
    }
    
    info(){
      super.msg()
      this.msg();
      console.log(this.name + " is new " + this.department)
    }
  }
  
  class admin extends manager{
    
  }
  
  // let manager1 = new manager("Priya","HR")
  // // manager1.msg()
  // manager1.info()
  // console.log(manager1)
  
  let admin1 = new admin("Riya", "Programmer");
  
  console.log(admin1)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  