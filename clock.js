let userName = prompt('Adınızı Giriniz', 'Adınız')

let name = document.querySelector('#name')


name.innerHTML = `Merhaba ${userName} Hoşgeldin`;



function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    
    var session = "AM";


    if(h ==0){
        h = 12;
    }

    if(h > 12){
        h= h - 12;
        session = "PM";

    }

    h = (h <10) ? "0" + h : h;
    m = (m <10) ? "0" + m : m;
    
    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    let mesaj = "Kodluyoruz Frontend Web Development patikasının JavaScript 1. ödevi."
    document.getElementById("text").innerText = mesaj;
   
    setTimeout(showTime, 1000);
}

showTime();

console.log(mesaj)