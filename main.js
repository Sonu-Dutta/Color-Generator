$(document).ready(function(){
    $(".generate-btn").click(function(){
        var rdCol="";
        var ch="0123456789abcdef";
        for(i=0;i<6;i++){
            rdCol=rdCol+ch[Math.floor(Math.random()*16)];
        }
        $('#inputField').val("#" +rdCol);
        $('#inputField').css("color","#" +rdCol);
        $('#inputField').css("border-color","#" +rdCol);
        $('.color-preview,.copy-btn').css("background-color","#" +rdCol);
    });

    function add(){
        $(".alert-msg").addClass("slide-effect")
    }

    function remove(){
        $(".alert-msg").removeClass("slide-effect")
    }

    $(".copy-btn").click(function (){
        $("#inputField").select();
        document.execCommand("copy");

        add();
        setTimeout(remove,2000);

        $(".code").text($("#inputField").val());
    })

})