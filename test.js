function counts(nums, maxes) {

    var n=nums.length;
    var m=maxes.length;
    var results = [];


    for(var i=0;i<m;i++)
        {
            var count=0;
            for(var j=0;j<n;j++)
                {
                    if(nums[j]<=maxes[i])
                        {
                            count++;
                        }
                }
            results.push(count);
        }
      return results;
}

function main(){
  var nums = [2,10,5,4,8];
  var maxes = [3,1,7,8];
  counts(nums,maxes);
}

main();
