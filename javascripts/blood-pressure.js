document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("result-box").style.display = "none";
  document.getElementById("ekg_svg").style.display = "none";
});

function calculateBloodPressureResult() {
  var systolic = document.getElementsByName("systolic")[0].value;
  var diastolic = document.getElementsByName("diastolic")[0].value;
  var blood_pressure_result = calculateBloodPressure(systolic, diastolic);
  
  var blood_pressure_html = bloodPressureHtml(blood_pressure_result)

  document.getElementById("result").innerHTML = "";
  document.getElementById("result-box").style.display = "block";
  document.getElementById("result-box").style.height = "17%";

  document.getElementById("ekg_svg").style.display = "block";
  setTimeout(function(){ 
    document.getElementById("ekg_svg").style.display = "none";
    document.getElementById("result-box").style.height = "10%";
    document.getElementById("result").innerHTML = blood_pressure_html;
  }, 1300);
}

function calculateBloodPressure(systolic_pressure, diastolic_pressure){
  var systolic = parseInt(systolic_pressure);
  var diastolic = parseInt(diastolic_pressure);

  if(isNaN(systolic) || isNaN(diastolic)){
    return { reading: 'Please enter valid numbers'};
  }
  else if(systolic <= 60 || diastolic <= 40){
    return { reading: 'Please enter your numbers correctly'};
  }
  else if(systolic >= 180 || diastolic >= 120){
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

function bloodPressureHtml(blood_pressure_result){
  if(blood_pressure_result.color){
    return "<div class='blood-pressure-result'>Your Blood Pressure is: " + "<div class='blood-pressure-number' style='background-color:" + blood_pressure_result.color + "'>" + blood_pressure_result.reading + "</div>" + "</div>"
  }
  else{
    return "<div class='blood-pressure-result warning'>" + blood_pressure_result.reading + "</div>";
  };
}