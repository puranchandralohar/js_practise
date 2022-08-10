
function hotelVisit(){

    console.log('Going to the Hotel');
    console.log('order food => 2 Roties with Daal');
    console.log('Food is getting prepared');
    preparedFood(eatRoties);
}

function preparedFood(starteating){
    setTimeout(()=>{
        console.log('food is prepared');
        console.log('Deleiverd to the Table');
        starteating();
    },10000)
}

function eatRoties() {
    setTimeout(()=>{
        console.log('Eating Food');
        console.log('Pay Bills');
    },5000)
}

hotelVisit();