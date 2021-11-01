$(document).ready(function(){ 
    $(".pass").blur(function(){
        let val = $(".pass").val()
        if(val.length >= 1){
            $("#info").hide()
        }
        else{
            $("#info").show()
        }
        if( val.length >= 6){
            $("#error").hide()
        }
        else{
            $("#error").show()
        }
    });
    $(".pass2").blur(function(){
        let val = $(".pass2").val()
        if(val.length >= 6){
            $("#error2").hide()
        }
        else{
            $("#error2").show()
        }
    })
});
