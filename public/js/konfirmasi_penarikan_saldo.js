var refTarikSaldo = firebase.database().ref("TarikSaldo");
var id = 1;
refTarikSaldo.on('child_added',function(data){
    refTarikSaldo.child(data.key).on('child_added',function(data){
        if(data.val().status == "Menunggu Konfirmasi"){
            var tabel = document.getElementById('tabel_penarikan_saldo');
            var btn = document.createElement("BUTTON");
            btn.innerHTML = "Konfirmasi";
            btn.setAttribute('type','button');
            btn.setAttribute('class','btn');
            btn.setAttribute('data-toggle','modal');
            btn.setAttribute('data-target','#konfrimasiPenarikanSaldo')
            btn.setAttribute('id',id.toString());
            var row = tabel.insertRow(1);

            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var cell6 = row.insertCell(6);
            var cell7 = row.insertCell(7);

            cell0.innerText = data.val().idPenarikan;
            cell1.innerText = data.val().email;
            cell2.innerText = data.val().noRek;
            cell3.innerText = data.val().atm;
            cell4.innerText = "Rp " + data.val().nominal.toString().replace(/(\B)(?=(\d{3})+(?!\d))/g, '.');
            cell5.innerText = data.val().tglPenarikan;
            cell6.innerText = data.val().status;
            cell7.appendChild(btn);
            row.onclick= function(){baris(this)}

            var test = document.getElementById(id.toString());
            test.style.color = "#ffffff";
            test.style.boxShadow = "0 5px 10px 0 rgba(0,0,0,.2)";
            test.style.background = "linear-gradient(-135deg,#1de9b6 0,#1dc4e9 100%)";
            test.style.border = "0px";
            test.style.fontSize = "12px";
            test.style.borderRadius = "15px";
        }
    })
})

var i;
function baris(position){
    i = position.rowIndex;
    console.log("Click baris ke - " + i);
    // no = document.getElementById("table_info_users").rows[i].cells[0].innerText;
}

var refLaporanSaldo = firebase.database().ref('LaporanSaldoDompetDigital/Penyewa');
function konfrimasiPenarikanSaldo(){
    var idPenarikan = document.getElementById("tabel_penarikan_saldo").rows[i].cells[0].innerText;
   refTarikSaldo.on('child_added',function(data){
        refTarikSaldo.child(data.key).on('child_added',function(data1){
            if(data1.val().status == "Menunggu Konfirmasi"){
                refTarikSaldo.child(data.key).child(idPenarikan).update({status : "Berhasil"});
                refLaporanSaldo.child(data.key).child(idPenarikan).update({deskripsi : "Berhasil"})
                location.reload();
            }
        })
   })
}