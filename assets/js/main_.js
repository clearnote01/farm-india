$(function(){

        $("#typed").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 500,
                loop: false,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function(){ foo(); },
                resetCallback: function() { newTyped(); }
            });

            $(".reset").click(function(){
                $("#typed").typed('reset');
        });

        setInterval(function(){        
            $("#typed").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 500,
                loop: false,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function(){ foo(); },
                resetCallback: function() { newTyped(); }
            });

            $(".reset").click(function(){
                $("#typed").typed('reset');
            });
        }, 17000);

        var bg = [ "./images/banner01.jpg", "./images/banner02.jpg", "./images/banner.jpg" ];
        var i = 0;
        $("#parabg").css("background-image",'url("images/overlay.png"), url("' + bg[bg.length-1] + '")');
        setInterval(function() {
            $("#parabg").css("background-image",'url("images/overlay.png"), url("' + bg[i] + '")');
            $("#parabg").css("background-position","top left,center center");
            i++;
            i = i % bg.length;
        },6000);

        function newTyped(){ /* A new typed object */ }

        function foo(){ console.log("Callback"); }

        $(window).scroll(function() { // check if scroll event happened
            if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
                $("#header").addClass($(".sticky")); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            } else {
                $("#header").removeClass($(".sticky"));
            //if not, change it back to transparent
            }
        });

        $('a[href*=#]').click(function(event){
            $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        event.preventDefault();
});

    });


