$(document).ready(function(){
    getLightSwitchStatus();
});

function getLightSwitchStatus(){
    var url = "https://sheetdb.io/api/v1/5b9608d9b1cc9/search?";
    var data = $.getJSON(url,{
        light_name:"main"
    })
    .done(
        function(msg){
            console.log(msg);
            $("H10").text("電燈狀態："+msg[0].light_switch);
            if(msg[0].light_switch=="開"){
                $('#b1').attr("src","smarthomeweb/images/pic_bulbon.gif");
                $('#toggle-trigger').prop('checked', true).change()
            }else{
                $('#b1').attr("src","smarthomeweb/images/pic_bulboff.gif");
                $('#toggle-trigger').prop('checked', false).change()
            }
        }
    )
    .fail(
        function(msg){
            console.log("fail");
        }
    )
    .always(
        function(msg){
            console.log("completel");
        }
    );
}
