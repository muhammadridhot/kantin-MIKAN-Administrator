var path = require('path');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var admin = require('firebase-admin');

var serviceAccount =require('./kantin-online-mikroskil-9ee2c-firebase-adminsdk-p5wiu-d0b9e7b43a.json');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.set('views',__dirname + '/views');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

// inisialisasi firebase admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://kantin-online-mikroskil-9ee2c.firebaseio.com/'
});
// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var refRiwayatPesanan = db.ref("/Riwayat_Pesanan");
// var refUsersMikroskil = db.ref("/Users/Mikroskil");
var refUsersNoncivitas = db.ref("/Users/NonCivitas");
var refPenyewaStan = db.ref("Users/Penyewa");
var refTopUp = db.ref("TopupSaldo");
// var idOrder = [];
// var idPelanggan = [];
// var email = [];
// var stan = []
// var total = [];
// var no_meja = [];
// var keyRiwayatPesanan = {};
// var jumlah_pelanggan = 0;
// var jumlah_penyewa;
// var beranda = {idOrder, idPelanggan, email, stan, total, no_meja, jumlah_pelanggan, jumlah_penyewa};
// var idMiso_mikroskil = [];
// var nama_mikroskil = [];
// var email_mikroskil = [];
// var saldo_mikroskil = [];
// var informasi_pengguna_mikroskil = {idMiso_mikroskil, nama_mikroskil, email_mikroskil,saldo_mikroskil};
// var idMiso_noncivitas = [];
// var nama_noncivitas = [];
// var email_noncivitas = [];
// var saldo_noncivitas = [];
// var informasi_pengguna_noncivitas = {idMiso_noncivitas, nama_noncivitas, email_noncivitas,saldo_noncivitas};
// var no_stan_penyewa = [];
// var email_penyewa = [];
// var status_penyewa = [];
// var masa_sewa = [];
// var penyewa = {no_stan_penyewa, email_penyewa,status_penyewa,masa_sewa};
// var konfirmasi_no_stan_penyewa = [];
// var konfirmasi_email_penyewa = [];
// var konfirmasi_status_penyewa = [];
// var konfirmasi_masa_sewa = [];
// var konfirmasi_penyewa = {konfirmasi_no_stan_penyewa, konfirmasi_email_penyewa,konfirmasi_status_penyewa,konfirmasi_masa_sewa};
// var idPelanggan_topup = [];
// var idTopUp = [];
// var jenis_atm = [];
// var nominal_topup = [];
// var status_topup = [];
// var tgl_topUp = [];
// var topup_saldo = {idPelanggan_topup, idTopUp, jenis_atm, nominal_topup, status_topup, tgl_topUp, topup_saldo};
// Retrieve new posts as they are added to our database
// refRiwayatPesanan.on("child_added", function(snapshot, prevChildKey) {
//     keyRiwayatPesanan = snapshot.key;
//     refRiwayatPesanan.child(keyRiwayatPesanan).on("child_added",function(snapshot,prevChildKey){
//         idOrder.push(snapshot.child('idOrder').val());
//         idPelanggan.push(snapshot.child('idPelanggan').val());
//         stan.push(snapshot.child('nama_stan').val());
//         total.push(snapshot.child('total_harga').val());
//         no_meja.push(snapshot.child('no_meja').val());
//     });
//   });


// refUsersMikroskil.on("child_added",function(snapshot,prevChildKey){
//     idMiso_mikroskil.push(snapshot.child('idMiso').val());
//     nama_mikroskil.push(snapshot.child('nama').val());
//     email_mikroskil.push(snapshot.child('email').val());
//     saldo_mikroskil.push(snapshot.child('saldo').val());
//     jumlah_pelanggan++;
// });

// refUsersNoncivitas.on("child_added",function(snapshot,prevChildKey){
//     idMiso_noncivitas.push(snapshot.child('idMiso').val());
//     nama_noncivitas.push(snapshot.child('nama').val());
//     email_noncivitas.push(snapshot.child('email').val());
//     saldo_noncivitas.push(snapshot.child('saldo').val());
//     jumlah_pelanggan++;
// });

// refTopUp.on("child_added",function(snapshot,prevChildKey){
//     refTopUp.child(snapshot.key).on("child_added",function(snapshot,prevChildKey){
//         idPelanggan_topup.push(snapshot.child('idPelanggan').val());
//         idTopUp.push(snapshot.child('idTopUp').val());
//         jenis_atm.push(snapshot.child('jenisATM').val());
//         nominal_topup.push(snapshot.child('nominal').val());
//         status_topup.push(snapshot.child('status').val());
//         tgl_topUp.push(snapshot.child('tgl_topup').val());
//     })
// })
app.get('/login',function(req,res){
    res.render('login');
})
app.post('/login',function(req,res){
    res.end(JSON.stringify(req.body));
})


app.get('/beranda',function(req,res){
    // jumlah_penyewa = 0;
    // refPenyewaStan.on("child_added",function(snapshot,prevChildKey){
    //     if(snapshot.child('status').val() == "Aktif"){
    //         jumlah_penyewa++;
    //     }
    // })
    // beranda = {idOrder, idPelanggan, email, stan, total, no_meja, jumlah_pelanggan, jumlah_penyewa};
    res.render('beranda.ejs');
})
app.get('/informasi-pengguna-mikroskil',function(req,res){
    res.render('informasi-pengguna-mikroskil.ejs');
})
app.get('/informasi-pengguna-noncivitas',function(req,res){
    res.render('informasi-pengguna-noncivitas.ejs');
})
app.get('/topup',function(req,res){
    res.render('topup.ejs');
})
app.get('/penarikan-saldo',function(req,res){
    res.render('penarikan-saldo.ejs');
})

app.get('/penyewa-stan',function(req,res){

    // var no_stan_penyewa = [];
    // var email_penyewa = [];
    // var status_penyewa = [];
    // var masa_sewa = [];
    // var tgl_mulai_sewa = [];
    // var tgl_jatuhTempo_sewa = [];
    // var penyewa = {no_stan_penyewa, email_penyewa,status_penyewa,masa_sewa,tgl_mulai_sewa,tgl_jatuhTempo_sewa};
    // refPenyewaStan.on("child_added",function(snapshot,prevChildKey){
    //     if(snapshot.child('status').val() == "Aktif"){
    //         no_stan_penyewa.push(snapshot.child('no_stan').val());
    //         email_penyewa.push(snapshot.child('email').val());
    //         status_penyewa.push(snapshot.child('status').val());
    //         masa_sewa.push(snapshot.child('masa_sewa').val());
    //         tgl_mulai_sewa.push(new Date(snapshot.child('tgl_mulai_sewa').val()).toLocaleDateString());
    //         tgl_jatuhTempo_sewa.push(new Date(snapshot.child('tgl_jatuhTempo_sewa').val()).toLocaleDateString());
    //     }
    // })
    res.render('penyewa-stan.ejs');
})
app.get('/konfirmasi-penyewa-stan',function(req,res){
    // var konfirmasi_no_stan_penyewa = [];
    // var konfirmasi_email_penyewa = [];
    // var konfirmasi_status_penyewa = [];
    // var konfirmasi_masa_sewa = [];
    // var konfirmasi_tgl_mulai_sewa = [];
    // var konfirmasi_tgl_jatuhTempo_sewa = [];
    // var konfirmasi_penyewa = {konfirmasi_no_stan_penyewa, konfirmasi_email_penyewa,konfirmasi_status_penyewa,konfirmasi_masa_sewa, konfirmasi_tgl_mulai_sewa, konfirmasi_tgl_jatuhTempo_sewa};
    // refPenyewaStan.on("child_added",function(snapshot,prevChildKey){
    //     if(snapshot.child('status').val() == "Tidak Aktif"){
    //         konfirmasi_no_stan_penyewa.push(snapshot.child('no_stan').val());
    //         konfirmasi_email_penyewa.push(snapshot.child('email').val());
    //         konfirmasi_status_penyewa.push(snapshot.child('status').val());
    //         konfirmasi_masa_sewa.push(snapshot.child('masa_sewa').val());
    //         konfirmasi_tgl_mulai_sewa.push(snapshot.child('tgl_mulai_sewa').val());
    //         konfirmasi_tgl_jatuhTempo_sewa.push(new Date(snapshot.child('tgl_mulai_sewa').val()).toLocaleDateString());
    //     }
    // })
    res.render('konfirmasi-penyewa-stan.ejs');
})


app.listen(8080,function(req,res){
    console.log("Server sedang berjalan...")
})

// module.exports=auth;