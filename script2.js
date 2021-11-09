const app = {

initialize: function() {
  
  document.getElementById('submitButton').addEventListener('click', e => {
     var name = document.getElementById("fname").value;
     var lname = document.getElementById("lname").value;
     var email = document.getElementById("email").value;
     var check = document.getElementById("checkBox").checked;

     if(name == '' || lname == '' || email == '' || check == '' || check === false){
        if(name == ''){
          document.getElementById("fname").classList.add("inputEmpty");
        }
        else{
          document.getElementById("fname").classList.remove("inputEmpty");
        }
       
        if(lname == ''){
          document.getElementById("lname").classList.add("inputEmpty");
        }
        else{
          document.getElementById("fname").classList.remove("inputEmpty");
        }
       
        if(email == ''){
          document.getElementById("email").classList.add("inputEmpty");
        }
        else{
          if (validateEmail(document.getElementById("email").value)){
            document.getElementById("email").classList.remove("inputEmpty");
          }
          else{
            document.getElementById("email").classList.add("inputEmpty");
          }
        }
       
        if(check === false){
          document.getElementById("checkBox").classList.add("inputEmpty");
        }
     }
     
     else{
      if (validateEmail(document.getElementById("email").value)){
        document.getElementById("email").classList.remove("inputEmpty");
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("load").classList.add("loader");
        timeOut();
      }
      
      else{
        document.getElementById("email").classList.add("inputEmpty");
      }
     }
})

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function timeOut() {
    setTimeout(clear, 3000);
  }

  function clear(){
    console.log("hey");
    document.getElementById("load").classList.remove("loader");
    document.getElementById("load").innerHTML = `Thanks for signing up!`;
  }

}
}