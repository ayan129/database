function savedata() {
    var name = document.getElementById('name')
    var password = document.getElementById('password')
    var contactno = document.getElementById('contactno')
    var Student = {
        name: name.value,
        password: password.value,
        contactno : contactno.value
    }
    name.value = "" 
  password.value = ""
  contactno.value = ""

   
  firebase.database().ref('Student').set(Student)

  

}

