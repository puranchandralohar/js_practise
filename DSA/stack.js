let top = -1;
let stack =[];
let size = 4;

function main(){
    Push(5)
    Push(3)
    Push(9)
    Push(9)
    Pop()
    Push(7)
    console.log(Peak())
    return stack
}
console.log(main())

//Push
function Push(data){
  if(size <= top+1){
    console.log("Stack is Full")
  }
  else{
    top++;
    stack[top] = data;
  }
}

//pop
function Pop(){
  let removed=stack[top];
  if(top < 0){
    console.log("Stack is Empty")
  }
  else {
    top--;
  }
  return removed;
}

//peak
function Peak(){
  return stack[top]
}
