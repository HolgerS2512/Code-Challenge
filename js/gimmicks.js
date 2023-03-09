const gimmicks = {
    scaleValue: null,
    undefined: undefined,
    null: null,
    mainPage: false,
    initialize: function() {
        document.getElementById("toggle-btn").addEventListener("touchstart", this.toggleCollapse.bind(this), false);
        
        if (typeof $(document).ready() != gimmicks.undefined || typeof $(document).ready() != gimmicks.null) {
            $(document).ready(() => {
                $("#pokedex-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("pokedex", null, app.pokedexJs, "pokedex");
                        gimmicks.mainPage = true;
                        app.changeView("gimmicks", null, app.gimmicksJs, "index");
                    }, 1200);
                    setTimeout(() => {
                    newProject();
                    }, 1350);
                });
                $("#hairview-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("hairview", null, app.hairviewJs, "hairview");
                        gimmicks.mainPage = true;
                        app.changeView("gimmicks", null, app.gimmicksJs, "index");
                    }, 1200);
                    setTimeout(() => {
                        newProject();
                    }, 1350);
                });
                $("#scratch-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("scratch", null, app.scratchJs, "scratch");
                        gimmicks.mainPage = true;
                        app.changeView("gimmicks", null, app.gimmicksJs, "index");
                    }, 1200);
                    setTimeout(() => {
                        newProject();
                    }, 1350);
                });

                function currentProjekt() {
                    $('body').css('overflow', 'hidden');
                    $(() => {
                        $({ scaleValue: 1 }).animate({ scaleValue: .75 }, {
                            easing: 'swing',
                            step: function () {
                                $('#app').css({
                                    'transform': 'scale(' + this.scaleValue + ')'
                                });
                            }
                        });
                    });
                    setTimeout(() => {
                        $("#static-app").animate({ left: '-101%'}, 500);
                    }, 700);
                };

                function newProject() {
                    $("#static-app").animate({ left: 0 }, 500);
                    setTimeout(() => {
                        $(() => {
                            $({ scaleValue: .75 }).animate({ scaleValue: 1 }, {
                                duration: 350,
                                easing: 'swing',
                                step: function () {
                                    $('#app').css({
                                        'transform': 'scale(' + this.scaleValue + ')'
                                    });
                                }
                            });
                        });
                        gimmicks.scaleValue = this.scaleValue;
                    }, 500);
                    setTimeout(() => {
                        if (gimmicks.scaleValue != 1) $('#app').css('transform', 'scale(1)');
                        $("body").css("overflow", "scroll");
                        if (!gimmicks.mainPage === false) window.location.reload();
                    }, 1350);
                };
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