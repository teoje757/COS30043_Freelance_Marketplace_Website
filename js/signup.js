new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        valid: false,
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        mobile_number: '',
        userType: '',
        selectedFiles: [],
        skills: '',
        rates: '',
        company: '',
        interests: [],
        mainSkill: '',
        subSkills: [],
        userTypes: ['Freelancer', 'Client'],
        mainSkillsList: ['Graphic Design', 'Writing', 'Photography and Videography'],
        subSkillsList: { // Object containing sub-skills based on main skills
            'Graphic Design': ['Logo Design', 'Brand Style Guide', 'Website Design', 'Business Card', 'Flyer'],
            'Writing': ['Blog Post', 'Social Media Content', 'Email Newsletter'],
            'Photography and Videography': ['Portrait photography', 'Landscape photography', 'Promotional videography', 'Event videography']
        },
        showSubSkills: false, // Flag to control visibility of sub-skills selection
        nameRules: [v => !!v || 'Name is required'],
        userRules: [v => !!v || 'Username is required'],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Password must be at least 8 characters long'
        ],
        mobileRules: [
            v => !!v || 'Mobile number is required',
            v => /^60\d{8}$/.test(v) || 'Mobile number must be 10 digits and start with 60'
        ],
        skillRules: [
            v => !!v || 'Skills are required',
            v => /[^\d]/.test(v) || 'Skills cannot be numbers only'
        ],
        rateRules: [
            v => !!v || 'Rates are required',
            v => /^[0-9]+$/.test(v) || 'Rates must be a number'
        ],
        companyRules: [], // Validation rules for company field (empty, making it optional)
        interestsList: [
            'Graphic Design', 'Writing', 'Photography and Videography'
        ],
        userTypeRules: [
            v => !!v || 'User Type is required'
        ],
        mainSkillRules: [
            v => !!v || 'Please choose a main skill'
        ],
        subSkillRules: [
            v => !!v || 'Please choose at least one sub skill'
        ],
        errorMessages: []
    },
    methods: {
        // Method to handle file upload
        handleFileUpload(event) {
            const newFiles = Array.from(event.target.files);
            this.selectedFiles = [...this.selectedFiles, ...newFiles];
            this.$refs.portfolioError.textContent = `Uploaded ${newFiles.length} file(s).`;
        },
        // Method to remove a selected file
        removeFile(index) {
            this.selectedFiles.splice(index, 1);
            this.$refs.portfolioError.textContent = 'File removed.';
        },
        // Method to handle main skill change and show sub-skills accordingly
        handleMainSkillChange() {
            this.subSkills = [];
            this.showSubSkills = !!this.mainSkill;
        },
        // Method to handle form submission
        handleSubmit() {
            if (this.$refs.myForm.validate()) {
                // If form is valid, construct query parameters and redirect to success page
                const params = new URLSearchParams({
                    username: this.username,
                    email: this.email,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    mobile_number: this.mobile_number,
                    userType: this.userType
                });
                if (this.userType === 'Freelancer') {
                    // If user is a freelancer, append freelancer-specific parameters
                    params.append('mainSkill', this.mainSkill);
                    params.append('subSkills', this.subSkills.join(','));
                    params.append('rates', this.rates);
                    this.selectedFiles.forEach((file, index) => {
                        params.append(`portfolioFile${index}`, file.name);
                    });
                } else if (this.userType === 'Client') {
                    // If user is a client, append client-specific parameters
                    if (this.company) {
                        params.append('company', this.company);
                    }
                    params.append('interests', this.interests.join(','));
                }
                // Redirect to success page with query parameters
                window.location.href = `registration_success.html?${params.toString()}`;
            } else {
                // If form is invalid, display error message
                this.$refs.errorMessage.textContent = 'Please fill out the form correctly.';
            }
        }
    }
});