    Vue.component('list', {
        data() {
            return {

            }
        },



    })
    new Vue({
        created() {

        },
        data: {
            date: null,
            startTime: null,
            endTime: null,
            topName: null,
            subName: null,
            altSubName: null,
            eventName: null,
            createdBy: null,
            privateLink: null,

        },
        methods: {
            addToSchedule() {

                fetch('http://localhost:3000/', {

                    body: '{  "date": "' + this.date + '", "startTime": "' + this.startTime + '", "endTime": "' + this.endTime + '", "topName": "' + this.topName + '", "subName": "' + this.subName + '", "altSubName": "' + this.altSubName + '", "eventName": "' + this.eventName + '", "createdBy": "' + this.createdBy + '", "privateLink": "' + this.privateLink + '" }',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                }).then(function (response) {
                    return response.json()
                })
            }
        },


        el: '#app'
    })