var Homepage = (function () {
    function Homepage() {
    }
    Homepage.prototype.init = function () {
        this.initClock();
    };
    Homepage.prototype.initClock = function () {
        var clockEl = document.querySelector('#clock');
        var hoursEl = clockEl.querySelector('.hours');
        var minutesEl = clockEl.querySelector('.minutes');
        var secondsEl = clockEl.querySelector('.seconds');
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var hoursAngle = (hours * 30) + (minutes / 2);
        var minutesAngle = minutes * 6;
        var secondsAngle = seconds * 6;
        function transformEl(el, angle) {
            el.style.transform = 'rotateZ(' + angle + 'deg)';
        }
        transformEl(hoursEl, hoursAngle);
        transformEl(minutesEl, minutesAngle);
        transformEl(secondsEl, secondsAngle);
    };
    return Homepage;
}());
(function () {
    var homepage = new Homepage();
    homepage.init();
})();
