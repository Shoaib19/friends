$(document).ready(function(){ 
    $(".pass").blur(function(){
        let val = $(".pass").val()
        val.length >= 1? $("#info").hide(): $("#info").show()
        val.length >= 6? $("#error").hide(): $("#error").show()
    });
    $(".pass2").blur(function(){
        let val = $(".pass2").val()
        val.length >= 6? $("#error2").hide(): $("#error2").show()
    })
});
