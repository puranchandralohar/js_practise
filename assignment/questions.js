for(let i=1;i<=5;i++){ 
    let stars=" "; 
    for(let j=1;j<=5;j++){
             if(i==j || i+j==6) {
            stars+=" * ";
        }
        else if(i!=j){
            stars+="   ";
        }
    } 
    console.log(stars);
   
   }