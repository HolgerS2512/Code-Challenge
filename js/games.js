const games = {
    undefined: undefined,
    null: null,
    initialize: function() {
        document.getElementById("toggle-btn").addEventListener("touchstart", this.toggleCollapse.bind(this), false);
        
        if (typeof $(document).ready() != games.undefined && typeof $(document).ready() != games.null) {
            $(document).ready(() => {
                $("#quiz-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("quiz", null, app.quizJs, "quiz");
                        app.changeView("games", null, app.gamesJs, "index");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#snake-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("snake", null, app.snakeJs, "snake");
                        app.changeView("games", null, app.gamesJs, "index");
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#tictactoe-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        //app.changeView("tictactoe", null, app.tictactoeJs, "tictactoe");
                        app.changeView("games", null, app.gamesJs, "index");
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