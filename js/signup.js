 // Variables
  let username=document.querySelector('#name');
  let useremail=document.querySelector('#email');
  let userpassword=document.querySelector('#apss');
  let signUpBtn=document.querySelector('#submit');



  // sign up function
  signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || useremail.value==='' || userpassword.value===''){
      alert('Fill All The Field!')
    }else{
      localStorage.setItem('username',username.value);
      localStorage.setItem('useremail',useremail.value);
      localStorage.setItem('userpassword',userpassword.value);
      username.value='';
      useremail.value='';
      userpassword.value='';
      window.location.href='../html/login.html';
    }
  })