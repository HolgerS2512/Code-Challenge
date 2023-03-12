const gimmicks = {
    undefined: undefined,
    null: null,
    scaleValue: null,
    mainPage: false,
    initialize: function() {
        document.getElementById("toggle-btn").addEventListener("touchstart", this.toggleCollapse.bind(this), false);
        
        if (typeof $(document).ready() != gimmicks.undefined && typeof $(document).ready() != gimmicks.null) {
            $(document).ready(() => {
                $("#pokedex-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("pokedex", null, app.pokedexJs, "pokedex");
                        app.changeView("gimmicks", null, app.gimmicksJs, "index");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#hairview-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("hairview", null, app.hairviewJs, "hairview");
                        app.changeView("gimmicks", null, app.gimmicksJs, "index");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#scratch-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("scratch", null, app.scratchJs, "scratch");
                        app.changeView("gimmicks", null, app.gimmicksJs, "index");
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