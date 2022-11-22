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

const getDetails = function(designation){
    console.log(this.name,"is working as a", designation)
}

// getDetails.call(person1,"FrontEnd Engineer")
// getDetails.call(person2,"Tester")

// In apply , we pass arrays as an argument
// getDetails.apply(person2,["Senior Developer"])



// Bind does the same as call , but we can store it in a variable.
const man = getDetails.bind(person2,"Graphics Designer")
man()



