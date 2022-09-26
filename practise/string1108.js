

var defangIPaddr = function() {
    
    let address = "1.1.1.1";
    let string = address.replaceAll('.','[.]');
    return string;
};

console.log(defangIPaddr());

