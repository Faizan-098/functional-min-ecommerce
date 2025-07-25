 // Variables
  let useremail=document.querySelector('#email');
  let userpassword=document.querySelector('#apss');
  let signUpBtn=document.querySelector('#submit');
  // Get Data from localStorage
  let getUserEmail=localStorage.getItem('useremail');
  let getUserPassword=localStorage.getItem('userpassword');
  // login function
  signUpBtn.addEventListener('click',(e)=>{
e.preventDefault()
    if( useremail.value==='' && userpassword.value===''){
      alert('Fill All The Field!')
    }else if(useremail.value===getUserEmail && userpassword.value===getUserPassword){
      localStorage.setItem('loggedIn',true)
            useremail.value='';
      userpassword.value='';
     alert('Login Successfully!');
     window.location.href='./profile.html';
    }else{
      alert('Invalid Email or Password!');
    }
  })