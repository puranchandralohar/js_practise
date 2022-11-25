// Find  number of Vowels in a String ?

function countVowels(str){
    let vowels = 'aeiou';
    let count=0;

    let newStr = str.toLowerCase()

    for(let i=0; i<newStr.length; i++){
        if(vowels.includes(newStr[i])){
            count++
        }
        }
        return count;
}

let result = countVowels("Aanana")
console.log(result)