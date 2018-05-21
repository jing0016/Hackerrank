function main() {
    // var m_temp = readLine().split(' ');
    // var m = parseInt(m_temp[0]);
    // var n = parseInt(m_temp[1]);
    // magazine = readLine().split(' ');
    // ransom = readLine().split(' ');

    var m=6;
    var n=4;
    var magazine = "give me one grand today night".split(" ");
    var ransom = "give one grand today".split(" ");

    // var mFlag = new Array(m);
    // var nFlag = new Array(n);
    // mFlag.fill(0);
    // nFlag.fill(0);
    //
    // for(var i=0;i<n;i++)
    //     {
    //         for(var j=0;j<m;j++)
    //             {
    //                 if(mFlag[j]==0 && ransom[i]==magazine[j])
    //                     {
    //                         mFlag[j]=1;
    //                         nFlag[i]=1;
    //                         break;
    //                     }
    //             }
    //     }
    // for(var i=0;i<n;i++)
    //     {
    //         if(nFlag[i]==0)
    //         {
    //           console.log("No");
    //           return;
    //         }
    //
    //     }
    // console.log("Yes");

    var dic_magazine = {};
    for(var i=0;i<m;i++)
        {
            if(dic_magazine.hasOwnProperty(magazine[i]))
                {
                    dic_magazine[magazine[i]] +=1 ;
                }
            else
                {
                    dic_magazine[magazine[i]] =1;
                }
        }
    for(var j=0;j<n;j++)
        {
            if(dic_magazine.hasOwnProperty(ransom[j]) && dic_magazine[ransom[j]] > 0)
                {
                    dic_magazine[ransom[j]] -=1;
                }
            else
                {
                    console.log("No");
                    return;
                }
        }
    console.log("Yes");

}

main();
