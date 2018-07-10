function setDate(){
	var eleDay = document.getElementById("day");
	var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var day = new Date();
	eleDay.innerHTML="It's "+weekdays[day.getDay()]+(day.getDay()==5?"!!":"")+(day.getDay()==1?"...":"");
	day.getDay()==5?eleDay.classList.add("friday"):"";
}
function startClock(){
	var date = new Date();
	var ampm = date.getHours()<12?"AM":"PM";
	var h = ampm=="AM"?date.getHours():date.getHours()-12==0?12:date.getHours()-12;
    var m = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
    var s = date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
    document.getElementById('clock').innerHTML = h+":"+m+":"+s+" "+ampm;
    var t = setTimeout(startClock, 500);
}
setDate();
startClock();