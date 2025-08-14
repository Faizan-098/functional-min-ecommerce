 // Variables
  let useremail=document.querySelector('#email');
  let userpassword=document.querySelector('#apss');
  let signUpBtn=document.querySelector('#submit');
  // Get Data from localStorage
  let auth=JSON.parse(localStorage.getItem('auth'));
  // login function
  signUpBtn.addEventListener('click',(e)=>{
e.preventDefault()
    if( useremail.value==='' || userpassword.value===''){
      alert('Fill All The Field!')
    }else if(useremail.value===auth.email && userpassword.value===auth.password){
     auth.isloggedIn=true;
     localStorage.setItem('auth',JSON.stringify(auth))
            useremail.value='';
      userpassword.value='';
     alert('Login Successfully!');
     window.location.href='./profile.html';
    }else if(userpassword.value.length <8){
      alert('minimum length should be 8')
    }else{
      alert('Invalid Email or Password!');
    }
  })