$(document).ready(function(){
    $("#red").click(function(){
        $(this).css('color','green');
        $(".ally").hide()
        $(".allo").hide()
        $(".allr").show();
    });

    $("#orange").click(function(){

        $(this).css('color','green');
        $(".ally").hide()
        $(".allr").hide()
        $(".allo").show();
    });

    $("#yello").click(function(){
        $(this).css('color','green');
        $(".allr").hide()
        $(".allo").hide()
        $(".ally").show();
    });

    $("#all").click(function(){
        $(this).css('color','green');
        $(".ally").show()
        $(".allo").show()
        $(".allr").show();
    });
  });