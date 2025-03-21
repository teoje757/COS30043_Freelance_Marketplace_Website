new Vue({
    el: '#app',

    data: {
        email: '' 
    },

    created() {
        // Parse query parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        
        // Extract the value of the 'email' parameter from the URL query string
        this.email = urlParams.get('email');
    }
});