// document.addEventListener("DOMContentLoaded", function() {

//     let userName = prompt("Silahkan masukkan nama Anda:");

//     if (userName) {
//         document.getElementById("greeting").textContent = `Hello ${userName}, welcome to our website`;
//     }
// });

function get_name(){
    let user_name = prompt("Enter your name: ")
    document.getElementById("user_name").innerHTML = user_name;
}

get_name();

const slider = document.getElementById('projects_track');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

const scrollAmount = 200;

scrollLeftButton.addEventListener('click', () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' 
    });
});

scrollRightButton.addEventListener('click', () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});


// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowLeft') {
//         slider.scrollBy({
//             left: -scrollAmount,
//             behavior: 'smooth'
//         });
//     } else if (event.key === 'ArrowRight') {
//         slider.scrollBy({
//             left: scrollAmount,
//             behavior: 'smooth'
//         });
//     }
// });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = x.length;
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

setInterval ( () => {
    plusDivs(1);
}, 4000);

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const currentTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    const nama_lengkap = document.getElementById('nama_lengkap').value;
    const tanggal_lahir = document.getElementById('tanggal_lahir').value;
    const jenis_kelamin = document.getElementById('jenis_kelamin').value;
    const message = document.getElementById('message').value;

    if (nama_lengkap == "" || tanggal_lahir == "" || jenis_kelamin == "" || message == ""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    document.getElementById('date').innerHTML = `<strong>Current Date</strong> : ${currentTime}`
    document.getElementById('result_name').innerHTML = `<strong>Nama</strong> : ${nama_lengkap}`
    document.getElementById('result_date').innerHTML = `<strong>Tanggal lahir</strong> : ${tanggal_lahir}`
    document.getElementById('result_gender').innerHTML = `<strong>Jenis kelamin</strong> : ${jenis_kelamin}`
    document.getElementById('result_message').innerHTML = `<strong>Pesan</strong> : ${message}`

});

// document.getElementById('submit').addEventListener('click', function(){
//     validate_form();
// });

// function sender_info(nama_lengkap, tanggal_lahir, jenis_kelamin, message) {

//     document.getElementById("result_name").innerHTML = nama_lengkap;
//     document.getElementById("result_date").innerHTML = tanggal_lahir;
//     document.getElementById("result_gender").innerHTML = jenis_kelamin;
//     document.getElementById("result_message").innerHTML = message;

// };

// function validate_form(){
//     const nama_lengkap = document.forms["contact_form"]["nama_lengkap"].value;
//     const tanggal_lahir = document.forms["contact_form"]["tanggal_lahir"].value;
//     const jenis_kelamin = document.forms["contact_form"]["jenis_kelamin"].value;
//     const message = document.forms["contact_form"]["message"].value;
    
//     if (nama_lengkap == "" || tanggal_lahir == "" || jenis_kelamin == "" || message == ""){
//         alert("Tidak boleh ada yang kosong");
//         return false;
//     }

//     sender_info(nama_lengkap, tanggal_lahir, jenis_kelamin, message);

//     return false;
// };