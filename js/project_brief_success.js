$(document).ready(function() {
    // Retrieve form data and freelancers from sessionStorage
    var formData = JSON.parse(sessionStorage.getItem('formData'));

    // Define freelancers based on the chosen service
    var freelancers = {};
    if (formData.serviceChosen === "Logo and Brand Design") {
        freelancers = { Alyssa_Ling: "Alyssa Ling", Michael_Ling: "Michael Ling" };
    } else if (formData.serviceChosen === "Website Design") {
        freelancers = { Ethan_Lee: "Ethan Lee", Jay_Chang: "Jay Chang" };
    } else if (formData.serviceChosen === "Business Card and Flyer") {
        freelancers = { Lee_Qiu_Wen: "Lee Qiu Wen", Abby_Lim: "Abby Lim" };
    } else if (formData.serviceChosen === "Blog Post") {
        freelancers = { Margarita_Loktionova: "Margarita Loktionova", Jessica_Lawlor: "Jessica Lawlor" };
    } else if (formData.serviceChosen === "Social Media Content") {
        freelancers = { John_Smith: "John Smith", Jennie_Wong: "Jennie Wong" };
    } else if (formData.serviceChosen === "Email Newsletter") {
        freelancers = { Emily_Parker: "Emily Parker", Ryan_Mitchell: "Ryan Mitchell" };
    } else if (formData.serviceChosen === "Portrait Photography") {
        freelancers = { Lily_Bloom: "Lily Bloom" };
    } else if (formData.serviceChosen === "Landscape Photography") {
        freelancers = { Mandy_Wong: "Mandy Wong", Ruth_Mckenzie: "Ruth Mckenzie" };
    } else if (formData.serviceChosen === "Promotional Videography") {
        freelancers = { Jackie_Yeo: "Jackie Yeo" };
    } else if (formData.serviceChosen === "Event Videography") {
        freelancers = { Richard_Maison: "Richard Maison" };
    }

    // Display freelancers
    var freelancersHtml = '';
    var i = 1;
    for (var freelancer in freelancers) {
        freelancersHtml += `<li class="list-group-item">${i}. <a href="${getServiceLink(formData.serviceChosen)}">${freelancers[freelancer]}</a></li>`;
        i++;
    }
    $("#freelancersList").html(freelancersHtml);

    // Display project details in table format
    var projectDetailsHtml = `
        <div id="freelancerPortfolio">
          <h2>Project Details:</h2>
          <table class="table">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>${formData.name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>${formData.email}</td>
              </tr>
              <tr>
                <td><strong>Role:</strong></td>
                <td>${formData.role}</td>
              </tr>
              <tr>
                <td><strong>Service Chosen:</strong></td>
                <td>${formData.serviceChosen}</td>
              </tr>
              <tr>
                <td><strong>Project Name:</strong></td>
                <td>${formData.projectName}</td>
              </tr>
              <tr>
                <td><strong>Project Description:</strong></td>
                <td>${formData.projectDescription}</td>
              </tr>
              <tr>
                <td><strong>Budget:</strong></td>
                <td>$${formData.budget}</td>
              </tr>
              <tr>
                <td><strong>Deadline:</strong></td>
                <td>${formData.deadline}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    $("#projectDetails").html(projectDetailsHtml);
});

// Function to get service link based on service chosen
function getServiceLink(serviceChosen) {
    if (serviceChosen === "Logo and Brand Design" || serviceChosen === "Website Design" || serviceChosen === "Business Card and Flyer") {
        return "graphicdesign.html#design_portfolio";
    } else if (serviceChosen === "Blog Post") {
        return "writing.html#blog_post";
    } else if (serviceChosen === "Social Media Content") {
        return "writing.html#social_media_content";
    } else if (serviceChosen === "Email Newsletter") {
        return "writing.html#email_newsletter";
    } else if (serviceChosen === "Portrait Photography" || serviceChosen === "Landscape Photography") {
        return "photography_and_videography.html#portrait_landscape_photography";
    } else if (serviceChosen === "Promotional Videography" || serviceChosen === "Event Videography") {
        return "photography_and_videography.html#promotional_event_videography";
    }
}