// profile logic
let userLoggedIn = localStorage.getItem("loggedIn");
let username = localStorage.getItem("username");
let useremail = localStorage.getItem("useremail");


let profileContainer = document.querySelector(".profile-container");
if (!userLoggedIn) {
  profileContainer.innerHTML =
    '<h1 class="profile-error-msg">Please Login to create your profile</h1>';
} else {
  profileContainer.innerHTML = `
<div class="profile-card">
<div class="circle">
   ${generateUpperCase(username)}
</div>
<div class="fullname">Name : <span id="username">${username.toUpperCase()}</span></div>
<div class="email-address">
   Email : <span id="useremail">${useremail}</span>
</div>
<div class="logout-btn">
   Logout
</div>
</div>
`;
}
document.querySelector(".logout-btn").addEventListener("click", () => {

  localStorage.removeItem("loggedIn");
  window.location.href = "../index.html";
});
// generate uppercase of first letter
function generateUpperCase(str) {

  let spliteted = str.trim().split(" ");
  return spliteted.map((word) => word[0].toUpperCase()).join("");
}
