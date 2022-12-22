var date = new Date("Jul 10, 2022 00:00:00").getTime();
var fun = setInterval(function(){
    var now = new Date().getTime();
    var distance = date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(fun);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

},1000);

var dat = new Date("Jul 11, 2022 00:00:00").getTime();
var fu = setInterval(function(){
    var no = new Date().getTime();
    var distance = dat - no;

    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    if(distance < 0){
        clearInterval(fu);
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";
    }

},1000);


var d = new Date("Jul 12, 2022 00:00:00").getTime();
var f = setInterval(function(){
    var n = new Date().getTime();
    var distance = d - n;

    var da = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hou = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("da").innerHTML = da;
    document.getElementById("hou").innerHTML = hou;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    if(distance < 0){
        clearInterval(f);
        document.getElementById("da").innerHTML = "00";
        document.getElementById("hou").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }

},1000);
