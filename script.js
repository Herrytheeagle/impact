
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("rotated").css({'transition':'.3s ease-in'});
        $("ul.navigation").toggle("slow");
    });

    $("#contact-us").click(function (e) {
        e.preventDefault();
        $("body, html").animate({scrollTop: $("#contact-us-div").offset().top }, 1000);
    });

    $("#contact_us_form").submit(function (e) {
        e.preventDefault();
        var email = $(this).find("input#email").val(), count = 0;
        if(!validateEmail(email)){
            $("input#email").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("input#email").css({'border':'1px solid #fff'});
        }

        if($(this).find("textarea#message").val() == ""){
            $("textarea#message").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("textarea#message").css({'border':'1px solid #fff'});
        }

        if($(this).find("input#full_name").val() == ""){
            $("input#full_name").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("input#full_name").css({'border':'1px solid #fff'});
        }

        if($(this).find("input#subject").val() == ""){
            $("input#subject").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("input#subject").css({'border':'1px solid #fff'});
        }

        if(count < 1){
            $(".overlay").show();
            $.ajax({
                type:'post',
                url:'function.php',
                data:{email:$("#email").val(),name:$("#full_name").val(),message:$("#message").val(),subject:$("#subject").val()},
                success: function (msg) {
                    console.log(msg);
                    $(".overlay").hide();
                    if(msg == 'yes'){
                        alert("Your message was well received. We will get back to you shortly. Thanks");
                        $("#email").val("");
                        $("#message").val("");
                        $("#full_name").val("");
                        $("#subject").val("");
                    }else{
                        alert("Message Not sent, Please try again");
                    }
                },
                error: function () {
                    $(".overlay").hide();
                    alert("Please try again");
                }
            });
        }else{
            alert("Please Provide fields highlighted in red");
        }
    });

    $("#subscribe_form").submit(function (e) {
        e.preventDefault();
        var email = $(this).find("input#email_address").val(), count = 0;
        if(!validateEmail(email)){
            $("input#email_address").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("input#email_address").css({'border':'1px solid #fff'});
        }

        if($(this).find("input#first_name").val() == ""){
            $("input#first_name").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("input#first_name").css({'border':'1px solid #fff'});
        }

        if($(this).find("input#last_name").val() == ""){
            $("input#last_name").css({'border':'1px solid red'});
            e.preventDefault();
            count++;
        }else{
            $("input#last_name").css({'border':'1px solid #fff'});
        }

        if(count < 1){
            $(".overlay").show();
            $.ajax({
                type:'post',
                url:'function.php',
                data:{email:$("#email_address").val(),name:$("#first_name").val(),message:$("#last_name").val()},
                success: function (msg) {
                    console.log(msg);
                    $(".overlay").hide();
                    if(msg == 'yes'){
                        alert("You have successfully subscribed. Thanks");
                        $("#email_address").val("");
                        $("#first_name").val("");
                        $("#last_name").val("");
                    }else{
                        alert("Subscription not yet processed, Please try again");
                    }
                },
                error: function () {
                    $(".overlay").hide();
                    alert("Please try again");
                }
            });
        }else{
            alert("Please Provide fields highlighted in red");
        }
    });

    function validateEmail(email)
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});