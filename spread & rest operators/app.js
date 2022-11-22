


// Rest Operator
function addNumbers(a,b,c,...other){
    // console.log(arguments) //ES5 Method
    console.log(other) 

return a+b+c;

}

const result = addNumbers(2,5,4,5,6,8)

console.log(result)


// Spread

let names  = ["Puran C","Sourav G","Mahi","C Ronaldo","L Messi","Sunil C"];

function getNames(n1,n2,n3,...other){
    console.log(n1,n2,n3,other)
}
getNames(...names)



// With Objects

const students = {
    name:"Puran",
    age:"26",
    hobbies:["Cricket","Singing"]
}

// const age =  students.age;
const {name, age,...rest} = students

console.log("age->>>",age)
console.log("Rest Things->>>",rest)


// Spread 

const newStudents ={
    ...students,
    age:"27"
}

console.log("new Object >>>",newStudents)

