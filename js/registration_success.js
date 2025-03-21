new Vue({
  el: '#userInfo',
  data: {
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    mobile_number: '',
    userType: '',
    company: '',
    interests: [],
    mainSkill: '',
    subSkills: [],
    rates: '',
    portfolioFiles: []
  },
  created() {
    // Parse query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    this.username = urlParams.get('username');
    this.email = urlParams.get('email');
    this.firstname = urlParams.get('firstname');
    this.lastname = urlParams.get('lastname');
    this.mobile_number = urlParams.get('mobile_number');
    this.userType = urlParams.get('userType');

    // Set additional data properties based on user type
    if (this.userType === 'Freelancer') {
      this.mainSkill = urlParams.get('mainSkill');
      this.subSkills = urlParams.get('subSkills').split(',');
      this.rates = urlParams.get('rates');

      // Retrieve portfolio files from URL parameters
      let index = 0;
      while (urlParams.has(`portfolioFile${index}`)) {
        this.portfolioFiles.push({ name: urlParams.get(`portfolioFile${index}`), type: this.getFileType(urlParams.get(`portfolioFile${index}`)) });
        index++;
      }
    } else if (this.userType === 'Client') {
      this.company = urlParams.get('company');
      this.interests = urlParams.get('interests').split(',');
    }
  },
  methods: {
    // Method to determine file type based on file name extension
    getFileType(fileName) {
      const extension = fileName.split('.').pop().toLowerCase();
      if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(extension)) {
        return 'image';
      } else if (['pdf'].includes(extension)) {
        return 'pdf';
      } else if (['doc', 'docx'].includes(extension)) {
        return 'docx';
      } else {
        return 'other';
      }
    },
    // Method to generate HTML for displaying user information in a table format
    generateTableHtml() {
      let html = `
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Username</th>
              <td>${this.username}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>${this.email}</td>
            </tr>
            <tr>
              <th scope="row">First Name</th>
              <td>${this.firstname}</td>
            </tr>
            <tr>
              <th scope="row">Last Name</th>
              <td>${this.lastname}</td>
            </tr>
            <tr>
              <th scope="row">Mobile Number</th>
              <td>${this.mobile_number}</td>
            </tr>
            <tr>
              <th scope="row">User Type</th>
              <td>${this.userType}</td>
            </tr>
      `;
      if (this.userType === 'Freelancer') {
        // HTML for displaying freelancer-specific information
        html += `
            <tr>
              <th scope="row">Main Skill</th>
              <td>${this.mainSkill}</td>
            </tr>
            <tr>
              <th scope="row">Sub Skills</th>
              <td>${this.subSkills.join(', ')}</td>
            </tr>
            <tr>
              <th scope="row">Rates (per hour)</th>
              <td>$${this.rates}</td>
            </tr>
            <tr>
              <th scope="row">Portfolio Samples</th>
              <td>
                <ul>
        `;
        this.portfolioFiles.forEach(file => {
          html += `<li><a href="images/${file.name}" target="_blank">${file.name}</a></li>`;
        });
        html += `
                </ul>
              </td>
            </tr>
        `;
      } else if (this.userType === 'Client') {
        // HTML for displaying client-specific information
        html += `
            <tr>
              <th scope="row">Company Name</th>
              <td>${this.company}</td>
            </tr>
            <tr>
              <th scope="row">Interests</th>
              <td>
                <ul>
        `;
        this.interests.forEach(interest => {
          html += `<li>${interest}</li>`;
        });
        html += `
                </ul>
              </td>
            </tr>
        `;
      }
      html += `
          </tbody>
        </table>
      `;
      return html;
    }
  },
  mounted() {
    document.getElementById('userInfo').innerHTML = this.generateTableHtml();
  }
});