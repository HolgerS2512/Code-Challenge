const useful = {
    scaleValue: null,
    undefined: undefined,
    null: null,
    mainPage: false,
    initialize: function() {
        document.getElementById("toggle-btn").addEventListener("touchstart", this.toggleCollapse.bind(this), false);
        
        if (typeof $(document).ready() != useful.undefined || typeof $(document).ready() != useful.null) {
            $(document).ready(() => {
                $("#stopwatch-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("stopwatch", null, app.stopwatchJs, "stopwatch");
                        useful.mainPage = true;
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1200);
                    setTimeout(() => {
                    newProject();
                    }, 1350);
                });
                $("#vocabulary-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("vocabulary", null, app.vocabularyJs, "vocabulary");
                        useful.mainPage = true;
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1200);
                    setTimeout(() => {
                        newProject();
                    }, 1350);
                });
                $("#calculator-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("calculator", null, app.calculatorJs, "calculator");
                        useful.mainPage = true;
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1200);
                    setTimeout(() => {
                        newProject();
                    }, 1350);
                });
                $("#shipping-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("shipping", null, app.shippingJs, "shipping");
                        useful.mainPage = true;
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1200);
                    setTimeout(() => {
                        newProject();
                    }, 1350);
                });
                $("#todo-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("todo", null, app.todoJs, "todo");
                        useful.mainPage = true;
                        app.changeView("useful", null, app.usefulJs, "index");
                    }, 1200);
                    setTimeout(() => {
                    newProject();
                    }, 1350);
                });
                $("#cookbook-btn").click(() => {
                    currentProjekt();
                    setTimeout(() => {
                        //app.changeView("cookbook", null, app.cookbookJs, "cookbook");
                        useful.mainPage = true;
                        app.changeView("useful", null, app.usefulJs, "index");
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
                    }, 1350);
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
                        useful.scaleValue = this.scaleValue;
                    }, 500);
                    setTimeout(() => {
                        if (useful.scaleValue != 1) $('#app').css('transform', 'scale(1)');
                        $("body").css("overflow", "scroll");
                        if (!useful.mainPage === false) window.location.reload();
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