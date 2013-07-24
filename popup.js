
var hello = 'world';

var AwesomePlugin = {
 
  helloWorld: function(){
    alert(hello)
  }

};

//the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {

  AwesomePlugin.helloWorld();

});
