(function(){

    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame(){
        if (loading == null || typeof (loading) == 'undefined') {
            alert('Por favor deshabilita el bloqueador de ventanas emergentes.');
        }
        if (loading == 20) {
            clearInterval(id);
            //window.open("../welcome.html"); 
            //window.close("../index.html");
            window.location = 'welcome.html';  
        }
        else{
            loading = loading + 1;
            if(loading == 90){
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }

})();