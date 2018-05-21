
document.getElementById("btn0").addEventListener("click", function(){

  document.getElementById("res").innerHTML += "0";

});

document.getElementById("btn1").addEventListener("click", function(){

  document.getElementById("res").innerHTML += "1";

});


document.getElementById("btnClr").addEventListener("click", function(){

  document.getElementById("res").innerHTML = "";

});

document.getElementById("btnSum").addEventListener("click", function(){

  document.getElementById("res").innerHTML += "+";

});

document.getElementById("btnSub").addEventListener("click", function(){

  document.getElementById("res").innerHTML += "-";

});
document.getElementById("btnMul").addEventListener("click", function(){

  document.getElementById("res").innerHTML += "*";

});
document.getElementById("btnDiv").addEventListener("click", function(){

  document.getElementById("res").innerHTML += "/";

});

document.getElementById("btnEql").addEventListener("click", function(){

  var expressions = document.getElementById("res").innerHTML;

  if(expressions.indexOf("+")!= -1)
  {
    var pos = expressions.indexOf("+");
    var operator = "+";
  }
  else if(expressions.indexOf("-")!= -1)
  {
    var pos = expressions.indexOf("-");
    var operator = "-";
  }
  else if(expressions.indexOf("*")!= -1)
  {
    var pos = expressions.indexOf("*");
    var operator = "*";
  }
  else {
    var pos = expressions.indexOf("/")
    var operator = "/";
  }

    var oprand1 = parseInt(expressions.substr(0,pos),2);
    var oprand2 = parseInt(expressions.substring(pos+1,expressions.length),2);
    var newExpression = oprand1 + operator + oprand2;
    var result = eval(newExpression);


  document.getElementById("res").innerHTML = result.toString(2);

});
