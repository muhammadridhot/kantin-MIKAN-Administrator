var refPelangganMikroskil = firebase.database().ref('Users/Mikroskil');
var test = "";
$(document).ready(function () {
    refPelangganMikroskil.on('child_added',function(data){
        var tabel = document.getElementById('tabel_pengguna_mikroskil');
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Blokir";
        btn.setAttribute('type','button');
        btn.setAttribute('class','btn btn-outline-danger btn-sm');
        btn.setAttribute('data-toggle','modal');
        btn.setAttribute('data-target','#blokirPengguna')
        var row = tabel.insertRow(1);
    
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
    
        console.log(data.val());
        cell0.innerText = data.val().idMiso;
        cell1.innerText = data.val().nama;
        cell2.innerText = data.val().email;
        cell3.innerText = "Rp " + data.val().saldo.toString().replace(/(\B)(?=(\d{3})+(?!\d))/g, '.');
        cell4.appendChild(btn);
    })
});

