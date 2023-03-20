   function add(num1,num2){
    if(typeof( num1) == "number" &&
     typeof( num2) == "number" ){

        return num1+num2;
    }else{
        return "you have to input numbers only";
    }
}

var sub = function(num1,num2){
    if(typeof( num1) == "number" &&
     typeof( num2) == "number" ){

        return num1-num2;
    }else{
        return "you have to input numbers only";
    }
}

var multiply = function(num1,num2){
    if(typeof( num1) == "number" &&
     typeof( num2) == "number" ){

        return num1*num2;
    }else{
        return "you have to input numbers only";
    }
}

var yourAge= function (name,date){

    var year = new Date();
    var age = year.getFullYear() - date;
    if(age <= 0){
        return " not real date";
    } else{
        return `welcome ${name} your age is ${age}`;
    }
}
var myage = ""
module.exports ={
	first: add,
	second: sub,
	third: multiply,
    four:yourAge,
    five:yourAge
}
