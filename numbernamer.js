//number namer. breakdown number by digit, add up names for each digit in end
//sample inputnum, inputs below
var inputnum = -2300000219;
var name = [];

var is_teen = false;
var is_tens = 0
var is_hund = 0
console.log(inputnum)
//Set number to absolute value
if (inputnum < 0){
  var inputnum = inputnum * -1;

}
//breaksdown number by digit, outputs digit + placevalue (10^x)
var length = inputnum.toString().length;
var tenth = Math.pow(10,(length-1));

//loops through each digit in the number
for (var i = 0; i < length; i++){
  var arc = inputnum.toString().slice(i,i+length);
  var digit_ten = tenth / Math.pow(10, i)
  var arcd = Math.floor(arc/digit_ten);

  //check for hundreds place values
  if (digit_ten.toString().length % 3 === 0){
    var is_hund =+ 1;
    if(arcd === 0){
      continue;
    }
    if(arcd === 1){
      var nam1 = "one hundred"
    }
    else if(arcd === 2){
      var nam1 = "two hundred"
    }
    else if(arcd === 3){
      var nam1 = "three hundred"
    }
    else if(arcd === 4){
      var nam1 = "four hundred"
    }
    else if(arcd === 5){
      var nam1 = "five hundred"
    }
    else if(arcd === 6){
      var nam1 = "six hundred"
    }
    else if(arcd === 7){
      var nam1 = "seven hundred"
    }
    else if(arcd === 8){
      var nam1 = "eight hundred"
    }
    else if(arcd === 9){
      var nam1 = "nine hundred"
    }
    //add nam1 (the word) to name (list of entire number name)
    name.push(nam1);
  }
  else if (((digit_ten.toString().length)+ 1) % 3 === 0 || is_teen === true){
    if(arcd === 0){
      var inp1 = inputnum.toString().slice(i+1,i+2)
      var inp2 = inputnum.toString().slice(i-1,i)
      if(inp1 !== "0" && inp2 !== "0" && inp2 !== ""){
        var nam1 = "and";
      }
      else{
        continue;
      }
    }
    else if(arcd === 1 || is_teen === true){
      //"teens" section
      if (is_teen === true){
        if(arcd === 0){
          var nam1 = "ten"
        }
        else if(arcd === 1){
          var nam1 = "eleven"
        }
        else if(arcd === 2){
          var nam1 = "twelve"
        }
        else if(arcd === 3){
          var nam1 = "thirteen"
        }
        else if(arcd === 4){
          var nam1 = "fourteen"
        }
        else if(arcd === 5){
          var nam1 = "fifteen"
        }
        else if(arcd === 6){
          var nam1 = "sixteen"
        }
        else if(arcd === 7){
          var nam1 = "seventeen"
        }
        else if(arcd === 8){
          var nam1 = "eighteen"
        }
        else if(arcd === 9){
          var nam1 = "nineteen"
        }
      }
      else{
        var is_teen = true
      }
    }
    else if(arcd === 2){
      var nam1 = "twenty"
    }
    else if(arcd === 3){
      var nam1 = "thirty"
    }
    else if(arcd === 4){
      var nam1 = "forty"
    }
    else if(arcd === 5){
      var nam1 = "fifty"
    }
    else if(arcd === 6){
      var nam1 = "sixty"
    }
    else if(arcd === 7){
      var nam1 = "seventy"
    }
    else if(arcd === 8){
      var nam1 = "eighty"
    }
    else if(arcd === 9){
      var nam1 = "ninety"
    }
    if(is_teen === false || ((digit_ten.toString().length)+ 2) % 3 === 0){
      name.push(nam1);
    }
  }
  else if (((digit_ten.toString().length)+ 2) % 3 === 0 && is_teen === false){
    if(arcd === 0){
      if(length === 1){
        var nam1 = "zero"
      }
      else{
        continue;
      }
    }
    else if(arcd === 1){
      var nam1 = "one"
    }
    else if(arcd === 2){
      var nam1 = "two"
    }
    else if(arcd === 3){
      var nam1 = "three"
    }
    else if(arcd === 4){
      var nam1 = "four"
    }
    else if(arcd === 5){
      var nam1 = "five"
    }
    else if(arcd === 6){
      var nam1 = "six"
    }
    else if(arcd === 7){
      var nam1 = "seven"
    }
    else if(arcd === 8){
      var nam1 = "eight"
    }
    else if(arcd === 9){
      var nam1 = "nine"
    }
    if (digit_ten.toString().length === 1){
      name.push(nam1);
    }
    else{
      if (digit_ten.toString().length === 4){
        name.push(nam1 +" thousand,")
      }
      else if (digit_ten.toString().length === 7){
        name.push(nam1 +" million,")
      }
      else if (digit_ten.toString().length === 10){
        name.push(nam1 +" billion,")
      }
      else if (digit_ten.toString().length === 13){
        name.push(nam1 +" trillion,")
      }
      else if (digit_ten.toString().length === 16){
        name.push(nam1 +" quadrillion,")
      }
      else if (digit_ten.toString().length === 19){
        name.push(nam1 +" quintillion,")
      }
      else if (digit_ten.toString().length === 22){
        name.push(nam1 +" sextillion,")
      }
      else if (digit_ten.toString().length === 25){
        name.push(nam1 +" septillion,")
      }
      else if (digit_ten.toString().length === 28){
        name.push(nam1 +" octillion,")
      }
      else if (digit_ten.toString().length === 31){
        name.push(nam1 +" nonillion,")
      }
      else if (digit_ten.toString().length === 34){
        name.push(nam1 +" decillion,")
      }
      else if (digit_ten.toString().length === 37){
        name.push(nam1 +" undecillion,")
      }
      else if (digit_ten.toString().length === 40){
        name.push(nam1 +" duodecillion,")
      }
      else if (digit_ten.toString().length === 43){
        name.push(nam1 +" tredecillion,")
      }
      else if (digit_ten.toString().length === 46){
        name.push(nam1 +" quattuordecillion,")
      }
      else if (digit_ten.toString().length === 49){
        name.push(nam1 +" quindecillion,")
      }
      else if (digit_ten.toString().length === 52){
        name.push(nam1 +" sexdecillion,")
      }
      else if (digit_ten.toString().length === 55){
        name.push(nam1 +" septendecillion,")
      }
      else if (digit_ten.toString().length === 58){
        name.push(nam1 +" octodevillion,")
      }
      else if (digit_ten.toString().length === 61){
        name.push(nam1 +" novemdecillion,")
      }
      else if (digit_ten.toString().length === 64){
        name.push(nam1 +" vigintillion,")
      }
      else if (digit_ten.toString().length === 67){
        name.push(nam1 +" unvigintillion,")
      }
      else if (digit_ten.toString().length === 70){
        name.push(nam1 +" duovigintillion,")
      }
      else if (digit_ten.toString().length === 73){
        name.push(nam1 +" trevigintillion,")
      }
      else if (digit_ten.toString().length === 76){
        name.push(nam1 +" quattuorvigintillion,")
      }
      else if (digit_ten.toString().length === 79){
        name.push(nam1 +" quinvigintillion,")
      }
      else if (digit_ten.toString().length === 82){
        name.push(nam1 +" sexvigintillion,")
      }
      else if (digit_ten.toString().length === 85){
        name.push(nam1 +" septenvigintillion,")
      }
      else if (digit_ten.toString().length === 88){
        name.push(nam1 +" octovigintillion,")
      }
      else if (digit_ten.toString().length === 91){
        name.push(nam1 +" novemvigintillion,")
      }
      else if (digit_ten.toString().length === 94){
        name.push(nam1 +" trigintillion,")
      }
      else if (digit_ten.toString().length === 97){
        name.push(nam1 +" untrigintillion,")
      }
      else if (digit_ten.toString().length === 100){
        name.push(nam1 +" duotrigintillion,")
      }
    }
  }
}

//adds "negative" if input number is negative
if (inputnum > 0){
  name.unshift("negative");
}
var mergedword = name.join(" ");

console.log(mergedword)
