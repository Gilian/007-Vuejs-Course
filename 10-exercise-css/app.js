new Vue({
  el: '#exercise',
  data: { 
    effectClasses: {
      highlight: false,
      shrink: true
    },
    // Register this class to use without '' in the HTML-DOM
    fullWidth: 'full-width',
    userStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'grey'
    },
    userClass: '',
    isVisible: true,
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      // Get access to instance
      let vm = this;
      setInterval(function() {
        // Switch classes
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
      let vm = this;
      let width = 0;

      setInterval(function() {
        width += 10;
        vm.progressBar.width = width + 'px';
      },500);
    }
  }
});
