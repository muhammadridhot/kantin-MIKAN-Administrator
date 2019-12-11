var refPenyewa = firebase.database().ref('Users/Penyewa');
var tgl = new Date();
Date.prototype.addDays = function(days){
    var date = new Date(this.valueOf());
    // console.log(date);
    date.setDate(date.getDate() + days);
    return date;
}
var mulaiSewa = tgl;
var jatuhTempo = tgl.addDays(31);

if(new Date().getTime() <= jatuhTempo.getTime()){
    console.log("Belum Jatuh Tempo");
}else{
    console.log("Jatuh Tempo");
}

var i=1;
// function baris(position){
//     i = position.rowIndex;
//     console.log("Click baris ke - " + i);
// }

refPenyewa.on('child_added',function(data){
    if(data.val().status == "Tidak Aktif"){
        var tabel = document.getElementById('tabel_konfirmasi_penyewa');
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Konfirmasi";
        btn.setAttribute('type','button');
        btn.setAttribute('class','btn');
        btn.setAttribute('data-toggle','modal');
        btn.setAttribute('data-target','#konfirmasiPenyewaan');
        var setIDkonfirmasi = i.toString() + "konfirmasi";
        btn.setAttribute('id',setIDkonfirmasi);
        var row = tabel.insertRow(1);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell0.innerText = data.val().no_stan;
        cell1.innerText = data.val().email;
        cell2.innerText = data.val().status;
        cell3.appendChild(btn);

        var test = document.getElementById(setIDkonfirmasi);
        test.style.color = "#ffffff";
        test.style.boxShadow = "0 5px 10px 0 rgba(0,0,0,.2)";
        test.style.background = "linear-gradient(-135deg,#1de9b6 0,#1dc4e9 100%)";
        test.style.border = "0px";
        test.style.fontSize = "12px";
        test.style.borderRadius = "15px";
        row.onclick= function(){baris(this)}
        i++;

    }
})

var testi;
function baris(position){
    testi = position.rowIndex;
    console.log("Click baris ke - " + testi);
}
function konfirmasiStatusPenyewaan(){
    refPenyewa.on('child_added',function(data){
        if(data.val().status == "Tidak Aktif"){
            var email = document.getElementById("tabel_konfirmasi_penyewa").rows[testi].cells[1].innerText;
            if(email == data.val().email){
                console.log(email); 
                refPenyewa.child(email.substring(0,email.indexOf("."))).update({status : "Aktif"});
                refPenyewa.child(email.substring(0,email.indexOf("."))).update({tgl_mulai_sewa : mulaiSewa});  
                refPenyewa.child(email.substring(0,email.indexOf("."))).update({tgl_jatuhTempo_sewa : jatuhTempo});
                location.reload();
            }
        }
    })
    
    console.log("YES");
}