$(document).ready(function() {
    $("#projectBriefForm").submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate form fields
        var isValid = true;

        // Validate Name field
        var name = $("#name").val().trim();
        if (name === "") {
            $("#nameError").text("Please enter your name");
            isValid = false;
        } else {
            $("#nameError").text("");
        }

        // Validate Email field
        var email = $("#email").val().trim();
        if (email === "") {
            $("#emailError").text("Please enter your email address");
            isValid = false;
        } else {
            $("#emailError").text("");
        }

        // Validate Service Chosen field
        var serviceChosen = $("#serviceChosen").val();
        if (serviceChosen === null) {
            $("#serviceError").text("Please select a service");
            isValid = false;
        } else {
            $("#serviceError").text("");
        }

        // Validate Project Name field
        var projectName = $("#projectName").val().trim();
        if (projectName === "") {
            $("#projectNameError").text("Please enter a project name");
            isValid = false;
        } else {
            $("#projectNameError").text("");
        }

        // Validate Project Description field
        var projectDescription = $("#projectDescription").val().trim();
        if (projectDescription === "") {
            $("#projectDescriptionError").text("Please enter a project description");
            isValid = false;
        } else {
            $("#projectDescriptionError").text("");
        }

        // Validate Budget field
        var budget = $("#budget").val().trim();
        if (budget === "") {
            $("#budgetError").text("Please enter your budget");
            isValid = false;
        } else {
            $("#budgetError").text("");
        }

        // Validate Deadline field
        var deadline = $("#deadline").val();
        if (deadline === "") {
            $("#deadlineError").text("Please select a deadline");
            isValid = false;
        } else {
            $("#deadlineError").text("");
        }

        // Check if the checkbox is checked
        if (!$('#checkbox-1').is(':checked')) {
            // Display the error message
            $('#termsError').text('You must agree to the terms and conditions to proceed.');
            isValid = false;
        } else {
            $('#termsError').text(""); // Clear the error message if checkbox is checked
        }

        // Check if the form is valid before submitting
        if (isValid) {
            // Gather form data
            var formData = {
                name: name,
                email: email,
                role: $("#role").val(),
                serviceChosen: serviceChosen,
                projectName: projectName,
                projectDescription: projectDescription,
                budget: budget,
                deadline: deadline
            };

            // Store form data in sessionStorage to access on the success page
            sessionStorage.setItem('formData', JSON.stringify(formData));

            // Submit the form
            this.submit();
        }
    });
});
