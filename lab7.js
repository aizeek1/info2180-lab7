window.onload = function(){
    mydata();
};
           function mydata () {
                    document.getElementById("search").addEventListener("click", function(){ 
                    new Ajax.Request("request.php?q=definition",
                       {
                          method: "get",
                          onSuccess: doSomething
                       });
                    });
           }
        
           function doSomething(data){
               alert(data.responseText);
           }
          