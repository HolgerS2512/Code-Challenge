const useful = {
    undefined: undefined,
    null: null,
    scaleValue: null,
    mainPage: false,
    initialize: function() {
        document.getElementById("toggle-btn").addEventListener("touchstart", this.toggleCollapse.bind(this), false);
        
        if (typeof $(document).ready() != useful.undefined && typeof $(document).ready() != useful.null) {
            $(document).ready(() => {
                $("#stopwatch-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        app.changeView("stopwatch", null, app.stopwatchJs, "stopwatch");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#vocabulary-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("vocabulary", null, app.vocabularyJs, "vocabulary");
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#calculator-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        app.changeView("calculator", null, app.calculatorJs, "calculator");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#shipping-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("shipping", null, app.shippingJs, "shipping");
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#todo-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("todo", null, app.todoJs, "todo");
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1510);
                    setTimeout(() => {
                    app.newProject();
                    }, 1860);
                });
                $("#cookbook-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("cookbook", null, app.cookbookJs, "cookbook");
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1510);
                    setTimeout(() => {
                    app.newProject();
                    }, 1860);
                });
            });
        };
        
        const ms = document.querySelector('.micro-slider');
        const msSlider = new MicroSlider(ms, { indicators: true, indicatorText: '' });
        const hammer = new Hammer(ms);
        const msTimer = 2000;
        let msAutoplay = setInterval(() => msSlider.next(), msTimer);
        ms.onmouseenter = function(e) {
        clearInterval(msAutoplay); 
        console.log(e.type + ' mouse detected');
        }
        ms.onmouseleave = function(e) {
        clearInterval(msAutoplay); 
        msAutoplay = setInterval(() => msSlider.next(), msTimer);
        console.log(e.type + ' mouse detected');
        }
        ms.onclick = function(e) {
        clearInterval(msAutoplay); 
        console.log(e.type + ' mouse detected');
        }
        hammer.on('tap', function(e) {
        clearInterval(msAutoplay);
        console.log(e.type + ' gesture detected');
        });
        hammer.on('swipe', function(e) {
        clearInterval(msAutoplay); 
        msAutoplay = setInterval(() => msSlider.next(), msTimer);
        console.log(e.type + ' gesture detected');
        });
        $('#copyright').text('Copyright © ' + new Date().getFullYear() + ' Holger Schatte');
    },

    toggleCollapse: function() {
        $('#toggle-btn').toggleClass('collapseCanvas');
        if ($('#toggle-btn').hasClass('collapseCanvas')) {
            $("#static-canvas").addClass("show");
            $('#static-canvas').attr('aria-expanded', true);
        } else {
            $('#static-canvas').attr('aria-expanded', false);
            setTimeout(() => {
                $("#static-canvas").removeClass("show");
            }, 360);
        };
    }
};