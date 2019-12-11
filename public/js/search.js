function searchBeranda(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchEmail');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabel_riwayat');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    console.log(filter);
}
function searchBerandaStan(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchStan');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabel_stan');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[1];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    console.log(filter);
}
function searchPelangganMikroskil(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchEmail');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabel_pengguna_mikroskil');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[1];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    console.log(filter);
}
function searchPelangganNoncivitas(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchEmail');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabel_pengguna_Noncivitas');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[1];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    console.log(filter);
}
function searchPenyewa(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchEmail');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabel_penyewa');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    console.log(filter);
}
function searchTopUp(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchIdTopUp');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabel_topup');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[1];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    console.log(filter);
}