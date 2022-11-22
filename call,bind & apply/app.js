// Call, Apply and Bind


const person1 = {
    name:"Puran",
    age:"26",
    location:"Dhanbad",
    printDetails(){
        return this.name
    }
}

const result =  person1.printDetails()

console.log("Result >>>>", result)
