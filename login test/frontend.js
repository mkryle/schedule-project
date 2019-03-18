new Vue({
    created() {},
    data: {
        name: null,
        password: null,
    },
    methods: {
        submitLogin() {
            fetch('http://localhost:3000/', {
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