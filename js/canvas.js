(function () {
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        particles = [],
        properties = {
            bgColor: 'rgba(37, 41, 52, 1)',

        };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.onresize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };



}());