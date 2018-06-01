function main() {
    //const n = parseInt(readLine(), 10);
    const n = 13;

    var a = [];
    var b = [94455,20555,20535,53125,73634,148,63772,17738,62995,13401,95912,13449,92211]

    for (let i = 0; i < n; i++) {
        //const aItem = parseInt(readLine(), 10);
        const aItem = b[i];
        //a.push(aItem);
        sortArray(a,aItem);
        median(a);
    }
}

function sortArray(a,e){
  if(a.length == 0)
      {
          a.push(e);
          return;
      }
  else
      {
          for(let j = 0; j <a.length; j++)
              {
                  if(e < a[j])
                      {
                        a.splice(j,0,e);
                        return;
                      }
              }
          a.push(e);
          return;
      }
}

function median(a)
{
  if(a.length % 2 == 0)
     {
         var midEven = ((a[a.length / 2 - 1] + a[a.length / 2])/2).toFixed(1);
         console.log(midEven);
     }
  else
      {
          var midOdd = (a[Math.floor(a.length / 2)]).toFixed(1);
          console.log(midOdd);
      }
}
main();
