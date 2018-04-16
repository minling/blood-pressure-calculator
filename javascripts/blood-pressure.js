document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("result-box").style.display = "none";
  document.getElementById("ekg_svg").style.display = "none";
});

function calculateBloodPressureResult() {
  var systolic = document.getElementsByName("systolic")[0].value;
  var diastolic = document.getElementsByName("diastolic")[0].value;
  var blood_pressure = calculateBloodPressure(systolic, diastolic);
  
  document.getElementById("result").innerHTML = "";
  document.getElementById("result-box").style.display = "block";
  document.getElementById("result-box").style.height = "17%";

  document.getElementById("ekg_svg").style.display = "block";
  setTimeout(function(){ 
    document.getElementById("ekg_svg").style.display = "none";
    document.getElementById("result-box").style.height = "10%";
    document.getElementById("result").innerHTML = "<div class='blood-pressure-result'>Your Blood Pressure is: " + "<div class='blood-pressure-number' style='background-color:" + blood_pressure.color + "'>" + blood_pressure.reading + "</div>" + "</div>"
  }, 1300);
}

function calculateBloodPressure(systolic_pressure, diastolic_pressure){
  var systolic = parseInt(systolic_pressure);
  var diastolic = parseInt(diastolic_pressure);

  if(systolic >= 180 || diastolic >= 120){
    return {reading:'Hypertensive Crisis', color:'DarkRed'};
  }
  else if(systolic >= 140 || diastolic >= 90){
    return {reading: 'Stage 2 Hypertension', color: 'FireBrick'};
  }
  else if(systolic >= 130 || diastolic >= 80){
    return {reading: 'Stage 1 Hypertension', color:'Crimson'};
  }
  else if(systolic >= 120 && diastolic >= 60){
    return {reading: 'Elevated Blood Pressure', color: 'IndianRed'};
  }
  else if(systolic >= 90 || diastolic >= 60){
    return {reading: 'Normal Blood Pressure', color: 'LightSkyBlue'};
  }
  else{
    return {reading: 'Hypotension', color: 'Lavender'};
  }
}