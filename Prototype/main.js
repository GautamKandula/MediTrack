
var q1 = document.getElementById("i1");
var q2 = document.getElementById("i2");
var q3 = document.getElementById("i3");
var q4 = document.getElementById("i4");
var q5 = document.getElementById("i5");
var q6 = document.getElementById("i6");
var q7 = document.getElementById("i7");
var q8 = document.getElementById("i8");
var q9 = document.getElementById("i9");
var q10 = document.getElementById("i10");
var q11 = document.getElementById("i11");

var email = "jaotisthejoofy@gmail.com"
var subject = "John Doe - Weekly Check-In"


var submitbutton = document.getElementById("submitbutton")
var submission = null;

submitbutton.addEventListener("click", function(){

  submission = "1) On a scale of 1-10, how would you rate your pain?  \n"+q1.value+"\n2) Are you experiencing any new or worsening pain?  "+q2.value+"\n3) If so, how would you describe the pain?  "+q3.value+"\n4) How tired or fatigued do you feel on a scale of 1-10?  "+q4.value+"\n5) Any changes in taste or difficulty swallowing?  "+q5.value+"\n6) How nauseous did you feel on a scale of 1-10?  "+q6.value+"\n7) Any shortness of breath or difficulty breathing?  "+q7.value+"\n8) Any redness, rash, or other skin issues?  "+q8.value+"\n9) Are you having any trouble with walking or mobility?  "+q9.value+"\n"+"\n10) Have you noticed any changes around the tumor site?  "+q10.value+"\n11) Anything else you’d like to add?  "+q11.value
  console.log(submission)
  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + submission;

});

