var refTopUp = firebase.database().ref('TopupSaldo');

 refTopUp.on('child_added',function(data){
        refTopUp.child(data.key).on('child_added',function(data){
        if(data.val().status == 'Menunggu Konfirmasi'){
            var tabel = document.getElementById('tabel_topup');
            var btn = document.createElement("BUTTON");
            btn.innerHTML = "Konfirmasi";
            btn.setAttribute('type','button');
            btn.setAttribute('class','btn btn-outline-success btn-sm');
            btn.setAttribute('data-toggle','modal');
            btn.setAttribute('data-target','#konfirmasiTopUp')
            var row = tabel.insertRow(1);

            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var cell6 = row.insertCell(6);

            cell0.innerText = data.val().idPelanggan;
            cell1.innerText = data.val().idTopUp;
            cell2.innerText = data.val().jenisATM;
            cell3.innerText = "Rp " + data.val().nominal.toString().replace(/(\B)(?=(\d{3})+(?!\d))/g, '.');
            cell4.innerText = data.val().status;
            cell5.innerText = data.val().tgl_topup;
            cell6.appendChild(btn);
           
            row.onclick= function(){baris(this)}
        } 
        })
    })

var i;
function baris(position){
    i = position.rowIndex;
    console.log("Click baris ke - " + i);
}
var refPelangganMikroskil = firebase.database().ref('Users/Mikroskil'); 
var refPelangganNonCivitas =  firebase.database().ref('Users/NonCivitas'); 
var refLaporanSaldo = firebase.database().ref('LaporanSaldoDompetDigital/Pelanggan');
function konfirmasiPenambahanSaldo(){
    var idPelangganTU = document.getElementById("tabel_topup").rows[i].cells[0].innerText;
    var idTopUpTU = document.getElementById("tabel_topup").rows[i].cells[1].innerText;
    //Data Mikroskil harus ada agar dapat berjalan
    refPelangganMikroskil.on('child_added',function(data){
        refPelangganMikroskil.child(data.key).once('value',function(data){
            if(data.val().userid == idPelangganTU){
                var idMiso = data.key;
                var saldoAnda = data.val().saldo;
                refTopUp.on('child_added',function(data){
                    refTopUp.child(idPelangganTU).on('child_added',function(data){
                        if(data.key == idTopUpTU){
                            refPelangganMikroskil.child(idMiso).update({saldo : data.val().nominal + saldoAnda});    
                            refTopUp.child(idPelangganTU).child(idTopUpTU).update({status : 'Berhasil'}); 
                            refLaporanSaldo.child(idPelangganTU).child(idTopUpTU).update({deskripsi : 'Top Up Berhasil'}); 
                            location.reload();   
                        }
                    })
                })
                
            }else{
                refPelangganNonCivitas.on('child_added',function(data){
                    if(data.val().userid == idPelangganTU){
                        var saldoAnda = data.val().saldo;
                        var email = data.key;
                        console.log(email);
                        refTopUp.on('child_added',function(data){
                            refTopUp.child(idPelangganTU).on('child_added',function(data){
                                if(data.key == idTopUpTU){
                                    console.log(data.val().nominal);
                                    refPelangganNonCivitas.child(email).update({saldo : parseInt(data.val().nominal + saldoAnda)});    
                                    refTopUp.child(idPelangganTU).child(idTopUpTU).update({status : 'Berhasil'}); 
                                    refLaporanSaldo.child(idPelangganTU).child(idTopUpTU).update({deskripsi : 'Top Up Berhasil'})  
                                    location.reload();   
                                }
                            })
                        })
                        
                    }
                })
                console.log('id tidak sama');
            }
            
        })
    })
}

// function sort(){
//     var table, rows, switching, i, x, y, shouldSwitch;
// table = document.getElementById('tabel_topup');
// switching = true;
// while(switching){
//     switching = false;
//     rows = table.rows;
//     for(i = 1; i < rows.length-1; i++){
//         shouldSwitch = false;
//         x = rows[i].getElementsByTagName("TD")[0];
//         y = rows[i + 1].getElementsByTagName("TD")[0];
//         if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
//             shouldSwitch = true;
//             break;
//         }
//     }
//     if(shouldSwitch){
//         rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
        
//         switching = true;
//     }
// }
// }
