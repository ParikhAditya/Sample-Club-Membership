/*$('memberid').on('change',function(){
   if($(this).find('option:selected').text()=="new")
       $("#modbutton").attr('disabled',true)
   else
       $("#modbutton").attr('disabled',false)
});*/
        function submitf() {
            var fn = document.getElementById('fname');
            var ln = document.getElementById('lname');
            var gen = document.getElementById('gender');
            var dep = document.getElementById('dept');
            var addr = document.getElementById('addr');
            var mail = document.getElementById('email');
            var ph = document.getElementById('phno');
            alert(fn.value + ' ' + ln.value + ' ' + gen.value + ' ' + dep.value + ' ' + addr.value + ' ' + mail.value + ' ' + ph.value);
          }


function modopacity(){
    document.getElementById("memberid").onchange=function(){
      if(this.options[this.selectedIndex].value=='new'){  
        var opmodify = document.getElementById("modbutton");
        opmodify.style.opacity='0.4';
        opmodify.style.filter=alpha(opacity=40);
        document.getElementById("modbutton").disabled=true;
      }
      else {
        document.getElementById("modbutton").disabled=false;
      }
     }
}

function delopacity(){
    document.getElementById("memberid").onchange=function(){
      if(this.options[this.selectedIndex].value=='new'){
        var opdelete = document.getElementById('delbutton');
        opdelete.style.opacity='0.4';
        opdelete.style.filter=alpha(opacity=40);
        document.getElementById('delbutton').disabled=true;
      }
      else {
        document.getElementById('delbutton').disabled=false;
      }
     }
}*/

function modifyaction(){
  alert('you clicked modify');
}

window.onload = function ok(){
  modopacity();
  delopacity();
};