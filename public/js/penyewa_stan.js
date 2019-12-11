
var i=1;
var refPenyewa = firebase.database().ref('Users/Penyewa');
refPenyewa.on('child_added',function(data){
    if(data.val().status == "Aktif"){
    var tabel = document.getElementById('tabel_penyewa');
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Perpanjang";
    btn.setAttribute('type','button');
    btn.setAttribute('class','btn');
    btn.setAttribute('data-toggle','modal');
    btn.setAttribute('data-target','#perpanjangPenyewaan');
    var setIDPerpanjang = i.toString() + "perpanjang";
    btn.setAttribute('id',setIDPerpanjang);

    var btn1 = document.createElement("BUTTON");
    btn1.innerHTML = "Nonaktifkan";
    btn1.setAttribute('type','button');
    btn1.setAttribute('class','btn');
    btn1.setAttribute('data-toggle','modal');
    btn1.setAttribute('data-target','#NonaktifkanPenyewaan');
    var setIDNonaktifkan = i.toString() + "nonaktifkan";
    btn1.setAttribute('id',setIDNonaktifkan);

    var bullet = document.createElement("I");
    bullet.setAttribute('class','fas fa-circle');
    var setIDBullet = i.toString() +"bullet";
    bullet.setAttribute('id',setIDBullet)
    var row = tabel.insertRow(1);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell0.innerText = data.val().no_stan;
    cell1.innerText = data.val().email;
    cell2.innerText = data.val().status;
    cell3.innerText = new Date(data.val().tgl_mulai_sewa).toLocaleDateString();
    cell4.innerText = new Date(data.val().tgl_jatuhTempo_sewa).toLocaleDateString();
    cell4.appendChild(bullet);
    cell5.appendChild(btn);
    cell5.appendChild(btn1);


    
    var test = document.getElementById(setIDPerpanjang);
    test.style.color = "#ffffff";
    test.style.boxShadow = "0 5px 10px 0 rgba(0,0,0,.2)";
    test.style.background = "linear-gradient(-135deg,#1de9b6 0,#1dc4e9 100%)";
    test.style.border = "0px";
    test.style.fontSize = "12px";
    test.style.borderRadius = "15px";

    var test1 = document.getElementById(setIDNonaktifkan);
    test1.style.marginLeft = "5px";
    test1.style.color = "#ffffff";
    test1.style.boxShadow = "0 5px 10px 0 rgba(0,0,0,.2)";
    test1.style.background = "linear-gradient(-135deg,#ef9a9a 0,#e57373 100%)";
    test1.style.border = "0px";
    test1.style.fontSize = "12px";
    test1.style.borderRadius = "15px";

    var test2 = document.getElementById(setIDBullet);
    test2.style.fontSize = "10px";
    test2.style.marginLeft = "15px";
    if(new Date().getTime() <= new Date(data.val().tgl_jatuhTempo_sewa).getTime()){
        console.log("Belum Jatuh Tempo");
        // var tabel = document.getElementById("tabel_penyewa");
        // tabel.rows[i].cells[4].style.color = "#1de9b6";
        cell4.style.color = "#1de9b6";
        // cell5.setAttribute('disabled',true);
        test1.setAttribute('disabled',true);
        test.setAttribute('disabled',true);
        console.log( tabel.rows[i].cells[4].innerText);    
    }else{
        console.log("Jatuh Tempo");
        // var tabel = document.getElementById("tabel_penyewa");
        // tabel.rows[i].cells[4].style.color = "#f44236";
        cell4.style.color = "#f44236";
        cell5.setAttribute('disabled',false);
        console.log(i.toString());
        // document.getElementById(i.toString()).disabled = false;
    }
    row.onclick= function(){baris(this)}
    i++;
    }
})

var testi;
function baris(position){
    testi = position.rowIndex;
    console.log("Click baris ke - " + testi);
}
function nonAktifkanPenyewa(){
    var email= document.getElementById("tabel_penyewa").rows[testi].cells[1].innerText;
    refPenyewa.on('child_added',function(data){
      if(email == data.val().email){
        console.log(data.val().email);   
        refPenyewa.child(data.key).update({status : "Tidak Aktif"});
        location.reload();
      }
    })
}


