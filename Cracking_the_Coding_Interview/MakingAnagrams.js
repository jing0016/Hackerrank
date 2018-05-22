function main() {
    // var a = readLine();
    // var b = readLine();

    var a_count_array = checkLetter("fiowjxciow");
    var b_count_array = checkLetter("fjiwoiewlxk");

    var deleteNumber = 0;

    for(var i =0;i<26;i++)
        {

            deleteNumber += Math.abs(a_count_array[i]-b_count_array[i]);
        }

    console.log(deleteNumber);
}

function checkLetter(str){
    var count_array = new Array(26);
    count_array.fill(0);
    var str_array = str.split("");
    str_array.sort();

    for(var i=0;i<str_array.length;i++)
        {
            var count=1;
            while(str_array[i]==str_array[i+1])
                {
                    count++;
                    i++
                }
            var index = str_array[i].charCodeAt(0) - 97;
            count_array[index] = count;
        }
    return count_array;
}

main();
