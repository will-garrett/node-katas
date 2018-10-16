function timeConversion(s) {
    var time = s.split(":");
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var seconds = Number(time[2].substr(0,2));
    var AMPM = time[2].substr(2,2);
    if(AMPM == "PM" && hours<12) hours = hours+12;
    if(AMPM == "AM" && hours==12) hours = hours-12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if(hours<10) sHours = "0" + sHours;
    if(minutes<10) sMinutes = "0" + sMinutes;
    return sHours + ":" + sMinutes + ":" + seconds;
}
module.exports = timeConversion;