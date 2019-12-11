refStan = firebase.database().ref("Stan/KantinB");
var i=1;
refStan.on('child_added',function(data){
    var tabel = document.getElementById('tabel_stan');
    var row = tabel.insertRow(i);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    cell0.innerText = data.val().nama;
    if(data.val().status){
        cell1.innerText = "Sedang disewa";
    }else{
        cell1.innerText = "Belum tersewa";
    }
    i++;
    
})