let name = {
    firstName:"Puran",
    lastName:"Chandra",
    getName:function(){
        console.log(this.firstName + " "+ this.lastName)
    }
}

name.getName();