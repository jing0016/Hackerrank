function main(){

  const expression = "}([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}";
  var arr = expression.split("");
  var sign = [];
  var i = 0;
  if(arr[0] == ')' || arr[0] == ']' || arr[0] == '}')
  {
    console.log("NO");
    return;//continue in hackerrank
  }
  for(; i<arr.length;i++)
  {
    if(arr[i] == '(' || arr[i] == '[' || arr[i] == '{')
    {
      sign.push(arr[i]);
    }
    else
    {
      if((arr[i] == ')' && sign[sign.length - 1] == '(') ||
         (arr[i] == ']' && sign[sign.length - 1] == '[') ||
         (arr[i] == '}' && sign[sign.length - 1] == '{')
        )
      {
        sign.pop();
      }
      else
      {
        console.log("NO");
        break;
      }
    }
   }
   if(i == arr.length && sign.length == 0)
   {
     console.log("YES");
   }
   else if(i == arr.length && sign.length > 0)
        {
            console.log("NO");
        }

}

main();
