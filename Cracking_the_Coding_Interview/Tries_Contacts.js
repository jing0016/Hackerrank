var contacts = {};
function addContact(contact) {
   var root = contacts;
   for(var i=0; i<contact.length; i++) {
       var c = contact[i];
       if (!root[c]) root[c]= { count:0 };
       root[c].count++;
       root = root[c];
   }
}
function getContactCount(prefix) {
    var root = contacts;
    for(var i=0; i<prefix.length;i++) {
        if (!root || !root[prefix[i]]) return 0;
        root=root[prefix[i]];
    }

    return root.count;
}
function main() {
    var n = parseInt(readLine());

    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if (op === "add") addContact(contact);
        else console.log(getContactCount(contact));
    }
}

// function main(){
//   addContact("andy");
//   console.log(getContactCount("nd"));
// }
main();
