var refPelangganNonCivitas = firebase.database().ref('Users/NonCivitas');
var test = "";
$(document).ready(function () {
    refPelangganNonCivitas.on('child_added',function(data){
        var tabel = document.getElementById('tabel_pengguna_Noncivitas');
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

    
        console.log(data.val());
        cell0.innerText = data.val().nama;
        cell1.innerText = data.val().email;
        cell2.innerText = "Rp " + data.val().saldo.toString().replace(/(\B)(?=(\d{3})+(?!\d))/g, '.');
        cell3.appendChild(btn);

    })
});

