import Vue from 'vue';

new Vue({
    created() {},
    data: {
        name: null,
        password: null,
    },
    methods: {
        submitLogin() {
            fetch('http://localhost:3000/login/' + this.name + '/' + this.password)
        }
    },

    addUser: function () {
        fetch('http://localhost:3000', {
                body: '{  "name": "' + this.name + '", "password": "' + this.password + '" }',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    },

    el: '#app'
})
