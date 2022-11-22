// Call, Apply and Bind ->>>  Function Borrowing Methods.


const person1 = {
    name:"Puran",
    age:26,
    location:"Dhanbad",
    // printDetails:function(){
    //    console.log(this.name);
    // }
}

// person1.printDetails()

const person2 = {
    name:"Ajay",
    age:25,
    location:"Ranchi",
}

// person1.printDetails.call(person2)

// const getDetails =()=>{
//     console.log()
// }

const getDetails = function(designation){
    console.log(this.name,"is working as a", designation)
}

getDetails.call(person1,"FrontEnd Engineer")
getDetails.call(person2,"Tester")


