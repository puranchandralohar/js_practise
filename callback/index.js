// Going to the Hotel
// Order the Food
// Wait for the food, its cooking - taking time 20 min
// food Delevered
// Having food - taking time 15 min
// Payment


function goingResturent(callback){
    console.log("Entering the Resturent and got a table");
    callback()
  }
  
  function orderFood(callback){
    setTimeout(function() {
      console.log("Given Order")
      callback()
    }, 5000);  
  }
  
  function prepaaringFood(callback){
    setTimeout(function(){
    console.log("wait your food is preparing")
    callback()
    },10000)
  }
  
  function foodDelevered(callback){
    console.log("Food is done, serve")
    callback()
  }
  
  function havingFood(callback){
    setTimeout(()=>{
    console.log("Eating the Food")
      callback()
    },7000)
  }
  
  function payment(){
    console.log("Payment Done")
  }
  
  
  goingResturent(function(){
    orderFood(function(){
        prepaaringFood(function(){
            foodDelevered(function(){
                havingFood(function(){
                    payment()
                })
            })
        })
    })
  })
 
 
 
 
 
  
  
  
  
  