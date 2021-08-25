let isim = prompt("Lütfen isminizi girin: ");
document.querySelector("#isim").innerHTML = isim;

function zamanGoster() {
    let tarih = new Date()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()
    let gun = tarih.getDay()

    if(gun==1) gun="Pazartesi";
    else if(gun==2) gun="Salı";
    else if(gun==3) gun="Çarşamba";
    else if(gun==4) gun="Perşembe";
    else if(gun==5) gun="Cuma";
    else if(gun==6) gun="Cumartesi";
    else if(gun==0) gun="Pazar";
    else alert("Hatalı tarih");

    saat = saat > 10 ? saat : "0" + saat;
    dakika = dakika > 10 ? dakika : "0" + dakika;
    saniye = saniye > 10 ? saniye : "0" + saniye;

    let saatFormat = saat + ":" + dakika + ":" + saniye + " "+ gun;
    document.querySelector("#saat").innerHTML = saatFormat;
    document.querySelector("#saat").textContent = saatFormat;
    setTimeout(zamanGoster,1000);
}

zamanGoster();
