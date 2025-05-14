
function obliczRate() {
    var checkbox1 = document.getElementById("pole1")
    var checkbox2 = document.getElementById("pole2")
    var raty = document.getElementById("raty").value
    var miasto = document.getElementById("lista").value

    var submit = document.getElementById("submit")

    var wynik = document.getElementById("wynik")

    var kurs1 = 5000;
    var kurs2 = 3000;

    var total = 0;

    var naRate = 0;

    if ((checkbox1.checked == true)||(checkbox2.checked == true)) {
        if (raty != "") {
            if (checkbox1.checked == true) {
                total += kurs1;
            }
             if (checkbox2.checked == true) {
                total += kurs2;
            }

            naRate = Math.round(total/raty);

            wynik.innerHTML = "Kurs odbędzie się w "+miasto+". Koszt całkowity: "+total+" zł. Płacisz "+raty+" rat po "+naRate+" zł";
        } else {
        wynik.innerHTML = "Wypisz ilość rat";
        }
    } else {
        wynik.innerHTML = "Zaznacz min. 1 kurs";
    }

}