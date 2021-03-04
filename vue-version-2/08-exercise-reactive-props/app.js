new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                return this.value < 32 ? "Not there yet" : "finished";
            }
        },
        watch: {
            result: function() {
                // New instance reference
                var vm = this;

                setTimeout(function() {
                    vm.value = 0;
                }, 5000);
            }
        }
    });