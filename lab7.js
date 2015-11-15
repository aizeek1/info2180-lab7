window.onload = function(){
    data();
};
           function data () {
                    $('lookup').observe('click', function(){ 
                    new Ajax.Request("request.php",
                       {
                          method: "get",
                       }
                    }
           }
          