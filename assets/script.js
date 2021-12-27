function dateTime() {
    var myDate = new Date();
    var year = myDate.getYear();
    if (year < 1000) {
        year += 1900
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();
    var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",);

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 12;
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var myDate = document.getElementById("currentDay");
    myDate.textContent = "" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s;
    myDate.innerText = "" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s;

    setTimeout("dateTime()", 1000);
}

function getInput() {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
}

var newTime = new Date();
var hour = newTime.getHours();

var currentHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < currentHour.length; i++) {
    if (hour < currentHour[i]) {
        $("#" + currentHour[i])
            .removeClass("present")
            .addClass("future");
    } else if (hour > currentHour[i]) {
        $("#" + currentHour[i])
            .removeClass("present")
            .addClass("past");
    } else {
        $("#" + currentHour[i])
            .addClass("present");
    }
}

// $(".saveBtn").on("click", function () {
    // var textBox = $(this).parent().siblings("textarea");
    // var textContent = textBox.val();
    // var time = textBox.attr("id");
    // localStorage.setItem(time, textContent);
// });

$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var textContent = $(this).siblings(".description").val();
    localStorage.setItem(time, textContent);
});

getInput();
dateTime();

