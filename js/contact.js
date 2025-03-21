$(document).ready(function () {
  // Validate the contact form using jQuery Validation Plugin
  $("#contactForm").validate({
    // Define validation rules for each input field
    rules: {
      name: {
        required: true, // Name is required
        minlength: 2 // Name must have at least 2 characters
      },
      email: {
        required: true, // Email is required
        email: true // Email must be a valid email format
      },
      role: {
        required: true // User role selection is required
      },
      subject: {
        required: true, // Subject is required
        minlength: 5 // Subject must have at least 5 characters
      },
      message: {
        required: true, // Message is required
        minlength: 10 // Message must have at least 10 characters
      }
    },
    // Custom error messages for each validation rule
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name must consist of at least 2 characters"
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      role: {
        required: "Please select your user type"
      },
      subject: {
        required: "Please enter a subject",
        minlength: "The subject must be at least 5 characters long"
      },
      message: {
        required: "Please enter your message",
        minlength: "Your message must be at least 10 characters long"
      }
    },
    // Define where to display error messages for each input field
    errorPlacement: function (error, element) {
      var id = element.attr("id") + "Error"; // Generate error message ID
      $("#" + id).html(error); // Display error message next to the input field
    },
    // Define action to be taken when form is submitted and passes validation
    submitHandler: function (form) {
      // Display success message
      alert("Your message has been well received! A response will be sent to your email soon.");

      // Clear the form fields
      form.reset();

      // Prevent default form submission for demonstration
      return false;
    }
  });
});