//objects

// let radius = 1;
// let x = 2;
// let y = 2;

// const circle ={
//     radius :1,
//     location:{
//         x:2,
//         y:2,
//     },
// };

// console.log(circle["location"]["y"]);


function createCircle(){

    let p = {
        radius:2,
        draw:function(){
            return 'Draw Circle'
        }
    }
    return p;
}

let x = createCircle();
console.log(x.radius, x.draw());