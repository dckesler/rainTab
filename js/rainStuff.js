$(document).ready(function(){
    var canvas = document.getElementById("night");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight - 75;
    var rains = canvas.width * canvas.height;
    window.onresize = function(){
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight - 75;
        rains = canvas.width * canvas.height;
        console.log(rains);
    };
    var context = canvas.getContext('2d');
    var RainDrop = function(width){
        this.x = Math.floor(Math.random() * width);
        this.y = 0;
        this.size = Math.round((Math.random() * 25) + 5);
        this.drop = (Math.floor((Math.random() * 2) + 12));
        this.drop += this.drop * this.size/14;
        this.d = (Math.floor(Math.random() * 2) -1);
        this.delay = Math.floor(Math.random() * 6000);
    };
    var rainDropGroups = [];
    function makeRainGroup (){
        var group = [];
        for(var i = 0; i < rains/2800; i++){
            group.push(new RainDrop(canvas.width))
        }
        rainDropGroups.push(group);
    }
    makeRainGroup();
    function go(){
        rainDropGroups.forEach(function(elem, index, array){
            elem.forEach(function(element){
                setTimeout(function(){
                    rain(element);
                }, element.delay)
            });
        });

        function rain(element) {
            setInterval(function(){
                var oldElement = {
                    x: element.x,
                    y: element.y
                };
                element.x -= element.d;
                element.y += element.drop;
                if( element.x < 0 || element.x > canvas.width || element.y > canvas.height){
                    element.x = Math.floor(Math.random() * canvas.width);
                    element.y = 0;
                }
                drawRain(element, oldElement);
            }, 30);

        }
        function drawRain(raindrop, oldElement){
            context.fillStyle = "HSL(33, 38%, 7%)";
            context.fillRect(oldElement.x - 1, oldElement.y - 1, 4, raindrop.size + 2);
            var grd = context.createRadialGradient(250, 550, 140, 250, 600, 650);
            grd.addColorStop(0, 'HSL(33, 38%, 24%)');
            grd.addColorStop(0.1, 'HSL(33, 38%, 20%)');
            grd.addColorStop(0.2, 'HSL(33, 38%, 16%)');
            grd.addColorStop(1, 'HSL(33, 38%, 15%)');
            context.fillStyle = grd;
            context.fillRect(raindrop.x, raindrop.y, 2, raindrop.size);
        }
    }
    function lampFlicker(){
        $(".light").fadeTo(100, .01, function(){
            $(".light").fadeTo(100, .03)
        });
        $(".glass").fadeTo(100, .5, function(){
            $(".glass").fadeTo(100,.8, function(){
                setTimeout(lampFlicker, (Math.random() * 5000 + 2000))
            })
        });
    }
    go();
    lampFlicker();
    function fadeIn(){
        $("#clock").fadeTo(6000,.3)
    }
    fadeIn();
});