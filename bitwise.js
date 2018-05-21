function getMaxLessThanK(n, k) {
    var max = 0;

    for(var i=1;i<n;i++)
        {
            for(var j=i+1;j<=n;j++)
                {
                    var x = i & j;
                    if(x<k)
                    {
                      if(max<x)
                      {
                        max = x;
                      }
                    }
                }

        }

    return max;

}


function main(){
  var n=8; k=5;
  console.log(getMaxLessThanK(n, k));
}

main();
