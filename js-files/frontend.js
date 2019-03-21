import Vue from 'vue';

new Vue({
    created() {},
    data: {
        name: 'admin',
        password: 'admin',
    },
    methods: {
        submitLogin() {
            fetch('/login', {
                body: '{  "name": "' + this.name + '", "password": "' + this.password + '" }',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(function (response) {
                return response.json()
            }).then(function (result) {
                console.log(result)
            })
        }
    },

    el: '#app'
})
