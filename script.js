 var d = new Date();
 var t = d.getHours();


 if (t >= 7 && t <= 17){

   document.getElementById('day').style.display = "block";
 }
else {

   document.getElementById('night').style.display = "block";
}
