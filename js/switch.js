$(document).ready(function() {
  console.log("Document ready function called.");
  
  // Show signup form by default
  $("#signupForm").show();
  $("#loginForm").hide();

  // Switch to signup form
  $("#showSignup").click(function() {
    console.log("Show signup form button clicked.");
    $("#signupForm").show();
    $("#loginForm").hide();
  });

  // Switch to login form
  $("#showLogin").click(function() {
    console.log("Show login form button clicked.");
    $("#signupForm").hide();
    $("#loginForm").show();
  });
});