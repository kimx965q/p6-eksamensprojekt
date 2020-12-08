// variablerne indeholder: måneder, år, hvad 
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startYear = 2010;
var endYear = 2021;
var month = 0;
var year = 0;
var selectedDays = new Array();
var mousedown = false;
var mousemove = false;

// funktion: måneder
function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

// funktion: år
function loadCalendarYears() {
    document.getElementById("years").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        })();

        document.getElementById("years").appendChild(doc);
    }
}

// funktion: dage
function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay(); // start kalenderdag

    // opret kalenderdagen
    for (var i = 0; i <= dayofweek; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    // gengive resten af ​​dagene
    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + tmp;
        d.className = "day";
        d.innerHTML = tmp;
        d.dataset.day = tmp;

        // klik af event start
        d.addEventListener('click', function () {
            this.classList.toggle('selected');

            if (!selectedDays.includes(this.dataset.day))
                selectedDays.push(this.dataset.day);

            else
                selectedDays.splice(selectedDays.indexOf(this.dataset.day), 1);

            function dosomething() {
                alert("Juleaften på Stoppestedet");
            }
            dosomething();
        });

        // event slut
        d.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (mousedown) {
                this.classList.add('selected');

                if (!selectedDays.includes(this.dataset.day))
                    selectedDays.push(this.dataset.day);
            }
        });

        d.addEventListener('mousedown', function (e) {
            e.preventDefault();
            mousedown = true;
        });

        d.addEventListener('mouseup', function (e) {
            e.preventDefault();
            mousedown = false;
        });

        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year) {
    var d = new Date(year, month + 1, 0);
    return d.getDate();
}

window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById("curMonth").innerHTML = months[month];
    document.getElementById("curYear").innerHTML = year;
    loadCalendarMonths();
    loadCalendarYears();
    loadCalendarDays();
});

// Credit til Walter Guevara