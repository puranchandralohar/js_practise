function countDown(n){
    if(n<=0){
        console.log('ended');
        return
    }
    console.log(n)
    countDown(n-1)
}
countDown(10)