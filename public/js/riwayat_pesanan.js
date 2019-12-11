var jumlahTransaksi=0;
var refRiwayat = firebase.database().ref('Riwayat_Pesanan');
refRiwayat.on('child_added',function(data){
    refRiwayat.child(data.key).on('child_added',function(data){
        var tabel = document.getElementById('tabel_riwayat');
        var row = tabel.insertRow(1);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);

        cell0.innerText = data.val().idOrder;
        cell1.innerText = data.val().idPelanggan;
        cell2.innerText = data.val().nama_stan;
        cell3.innerText = data.val().no_meja;
        cell4.innerText = "Rp " + data.val().total_harga.toString().replace(/(\B)(?=(\d{3})+(?!\d))/g, '.');
        cell5.innerText = data.val().status;

        jumlahTransaksi++;

    })
    
    // document.getElementById('jlhPelanggan').innerText = jumlahTransaksi.toString();

})

function sort(){
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('tabel_riwayat');
    switching = true;
    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < rows.length-1; i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            
            switching = true;
        }
    }
}

