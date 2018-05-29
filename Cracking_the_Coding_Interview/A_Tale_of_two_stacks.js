function main(input) {
  var arr = input.split("\n");
  var que = [];
  for(var i =1;i<=arr[0];i++)
      {
          if(arr[i].charAt(0) == '1')
              {
                  var enq = arr[i].split(" ");
                  que.push(enq[1]);
              }
          if(arr[i].charAt(0) == '2')
              {
                  que.shift();
              }
          if(arr[i].charAt(0) == '3')
              {
                  console.log(que[0]);
              }
      }
}
