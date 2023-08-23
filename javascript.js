    $(".col-lg-6 button").click(function(){
        $(".myimg").fadeOut().fadeIn();
    });
    $(".innovation>h2").hover(function(){
        $(this).css("color", "green");
    },
    function(){
        $(this).css("color" , "");
    },);