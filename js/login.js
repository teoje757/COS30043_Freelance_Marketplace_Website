new Vue({
  el: '#app-login', 
  vuetify: new Vuetify(),
  data: {
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required', 
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid' 
    ],
    passwordRules: [
      v => !!v || 'Password is required', 
      v => v.length >= 8 || 'Password must be at least 8 characters long' 
    ],
    errorMessages: []
  },
  methods: {
    // Method to handle form submission
    handleSubmit() {
      if (this.$refs.myForm.validate()) { 
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        
        // Simulate a successful login and redirect user
        const params = new URLSearchParams({ email: this.email });
        window.location.href = `login_success.html?${params.toString()}`;
      } else {
        // If form is not valid, display error message
        this.$refs.errorMessage.textContent = 'Please fill out the form correctly.';
      }
    },
    // Method to handle login button click
    loginUser(event) {
      event.preventDefault(); // Prevent default form submission behavior
      console.log('Login button clicked!');

      // Check if form is valid before performing login
      if (this.$refs.myForm.validate()) { 
        // Call the handleSubmit method
        this.handleSubmit();
      } else {
        // If form is not valid, display error message
        this.$refs.loginErrorMessage.textContent = 'Please fill out the form correctly.';
      }
    }
  }
});
