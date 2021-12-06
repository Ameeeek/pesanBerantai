const btn = document.getElementById("btn");
const input = document.getElementById("masukan");
let teks = document.getElementById("hasil");
function generate() {
    var option = document.getElementById("option");
    var hasil = input.value;
    var jenis = option.value;
    if (jenis === "1") {
        var hasilnya = `
        Hai kak!!
        Nama aku ${hasil}
        Aku kls 8 smp
        Tapi sayang kemarin aku tertabrak truk.
        Kepalaku pecah,mataku terlempar,kaki dan tanganku patah.
        Orang yang menabrakku lari entah kemana.
        Mayatku tidak ditemukan oleh polisi.
        Jadi aku ingin kakak sebarkan cerita ini ke 15 orang sahabat kakak.
        Kalau tidak pada saat jam 00:00 aku akan datang ke kamar kakak!
        Aku akan beri waktu 1 jam.
        Sudah ada korban yang aku bunuh.
        KORBAN PERTAMA:
        Dia bernama putri
        Dia tidak mengirimnya
        Dia hanya membaca lalu menghapusnya.....
        Kemudian pada malam hari pada pukul 03:00 aku masuk ke kamarnya lalu aku mencongkel matanya...
        Dan aku memotong tangannya untuk mengganti tanganku yang patah.......
        Pada pagi harinya ibunya terkejut melihat anaknya dalam keadaan meninggal.
        KORBAN KEDUA:
        Dia bernama dafa
        Dia hanya mengirim ke 5 kontaknya..kemudian pada malam hari jam 02:00 aku datang ke kamarnya dan memukul kepalanya dengan kapak. kepalanya terbelah sama seperti yang aku alami
        Pada pagi harinya polisi langsung datang kerumah aldi dan meng evakuasi mayatnya..
        KORBAN KETIGA:
        Dia bernama fira
        Awalnya dia hanya membaca cerita ini setelah selesai membaca dia langsung mengirim ke 20 kontaknya...
        Dan pada malam harinya aku ke kamarnya dan membawa sekantong berlian dan sekantong uang.....
        Pada pagi harinya ia terbangun dan terkejut dengan apa yang dilihatnya.
        Kakak sudah baca kan?..
        Jadi tolong kak kirim ke 20 kontak kakak agar sampai ke orang yang menabrakku..
        Ingat kak!................
        Karna ini bukan HOAX
        `;
    }
    else if (jenis === "2") {
        var hasilnya = `
    Ass,,mon maaf kami
    tawarkan pinjaman
    mulai 5jt sampai 500jt
    dijamin amanah,100%
    dan real dan sudah
    terdaftr OJK dan KPK
    info lengkap
    bit.ly/pinjol${hasil}
        `;
    }
    teks.innerHTML = hasilnya;
}
function copy() {
    let copyText = document.getElementById("hasil");
    copyText.select();
    copyText.setSelectionRange(0, 100000000);
    document.execCommand("copy");
    copyText.innerHTML = 'Teks telah berhasil di salin'

}
