
// function hotelVisit(){

//     console.log('Going to the Hotel');
//     console.log('order food => 2 Roties with Daal');
//     console.log('Food is getting prepared');
//     preparedFood(eatRoties);
// }

// function preparedFood(starteating){
//     setTimeout(()=>{
//         console.log('food is prepared');
//         console.log('Deleiverd to the Table');
//         starteating();
//     },10000)
// }

// function eatRoties() {
//     setTimeout(()=>{
//         console.log('Eating Food');
//         console.log('Pay Bills');
//     },5000)
// }

// hotelVisit();


//Promises

// let momsPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('collected all golds');
//         reject('killed by adheera')
//     },5000)
// });

// momsPromise
//     .then((result) => console.log('Climax',result))
//     .catch((error)=>console.log(error));

//Promises - part 2

// entering into the hotel , 
// order items , 
// preprtion of food in kitchen,
// serve delivering food to the table,
// start eating food,
// paying the bill,
// leaving the hotel

// function prepration(callback){
//     setTimeout(()=>{
//         console.log('preparing food');
//         console.log('server deliver food to the table');
//         callback()
//     },3000)

// }

// function eatingFood(){
//     setTimeout(()=>{
//         console.log('Eating my meal');
//         console.log('Paying Bills');
//         console.log('Leaving Hotel');
//     },2000);

// }


// function dinnerScenario(){

//     console.log('entering into the hotel');
//     console.log('Ordering Masala Dosa');
//     console.log('server informing the chef to prepre food');
//     prepration(eatingFood);
// }

// dinnerScenario();

/////////////////////////////////////////////////////////

// Promise


function prepration(){
    return new Promise((resolve,reject)=>{
    let vegetablesPresent = true;
    if(vegetablesPresent){
            setTimeout(()=>{
                console.log('preparing food');
                console.log('Server delevring the food to table');
                resolve();
            },3000);
        } else{
            reject('No vegetables');
        }
    });
}

function eatingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Eating food');
            resolve();
        },2000);
    });
}
function payment(){
    return new Promise((resolve,reject)=>{
        let pursePresent = true;
        if(pursePresent){
            setTimeout(()=>{
                console.log('paying the bills');
                console.log('leaving the hotel');
                resolve();
            });
        }else{
            reject('Run from hotel');
        }
    })
} 


function dinnerScenario(){

    console.log('entering into the hotel');
    console.log('Ordering Masala Dosa');
    console.log('server informing the chef to prepre food');
    prepration()
    .then(()=>{
        console.log('food preparing and delievering =>  Successfully');
        return eatingFood();
    })
    .then(()=>{
        console.log('Successfully');
        return payment();
    })
    .then(()=>console.log('sucessfull'))
    .catch(()=>console.log('failed'));
    
}

dinnerScenario();
