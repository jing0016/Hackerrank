function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    var arr = a;
    var temp=0;
    var str = "";
    for(var i =0;i<k;i++)
        {
            temp = arr.shift(arr[i]);
            arr.push(temp);

        }
    for(var i=0;i<arr.length;i++)
        {
            str += arr[i];
            str += " ";
        }
    console.log(str);
}

main();
