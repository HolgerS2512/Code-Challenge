const app = {
    mainPage: false,
    scaleValue: null,
    initialize: function () {
        //document.getElementById("gimmicks-btn").addEventListener("readystatechange", this.onGimmicks.bind(this), false);
        //document.getElementById("useful-btn").addEventListener("readystatechange", this.onUseful.bind(this), false);
        //document.getElementById("games-btn").addEventListener("click", this.onGames.bind(this), false);
        this.newProject.bind(this);
        this.currentProjekt.bind(this);
        this.onGimmicks.bind(this);
        this.onUseful.bind(this);
        this.onGames.bind(this);
        window.addEventListener("load", this.onDeviceReady.bind(this), false);
    },

    scratchJs: function() {
        scratch.initialize();
    },

    pokedexJs: function() {
        pokedex.initialize();
    },

    hairviewJs: function() {
        hairview.initialize();
    },

    cookbookJs: function() {
        cookbook.initialize();
    },

    todoJs: function() {
        todo.initialize();
    },

    shippingJs: function() {
        shipping.initialize();
    },

    vocabularyJs: function() {
        vocabulary.initialize();
    },

    stopwatchJs: function() {
        stopwatch.initialize();
    },

    quizJs: function() {
        quiz.initialize();
    },

    snakeJs: function() {
        snake.initialize();
    },

    tictactoeJs: function() {
        tictactoe.initialize();
    },

    gamesJs: function() {
        games.initialize();
    },

    usefulJs: function() {
        useful.initialize();
    },

    gimmicksJs: function() {
        gimmicks.initialize();
    },

    onDeviceReady: function () {
        if ($('#app').hasClass('games')) {
            this.changeView("games", null, this.gamesJs, "index");
        } else if ($('#app').hasClass('useful')) {
            this.changeView("useful", null, this.usefulJs, "index");
        } else {
            this.changeView("gimmicks", null, this.gimmicksJs, "index");
        }
    },

    changeView: function (view, n, js, css) {
        if (css != undefined && css != null) {
            let viewCssFilePath = "../css/" + css + ".css";
            $("#style").attr("data-stylesheet", viewCssFilePath);
            let e = $("#style").attr("data-stylesheet");
            $("#style").attr("href", e);
        };
        let viewFilePath = "../html/" + view + ".html";
        $("#app").load(viewFilePath, n, js);
    },

    onGames: function () {
        this.changeView("games", null, this.gamesJs, "index");
    },

    onUseful: function () {
        this.changeView("useful", null, this.usefulJs, "index");
    },

    onGimmicks: function () {
        this.changeView("gimmicks", null, this.gimmicksJs, "index");
    },

    currentProjekt: function() {
        $("body").css("overflow", "hidden");
        $("#app").css("max-height", "75vh");
        $(() => {
            $({ scaleValue: 1 }).animate({ scaleValue: .75 }, {
                step: function () {
                    $('#app').css({
                        'transform': 'scale(' + this.scaleValue + ')'
                    });
                }
            }, 750);
        });
        setTimeout(() => {
            $("#static-app").animate({ left: "-105%" }, 500);
        }, 750);
    },
    
    newProject: function() {
        $("#static-app").animate({ left: 0 }, 500);
        setTimeout(() => {
            $(() => {
                $({ scaleValue: .75 }).animate({ scaleValue: 1 }, {
                    step: function () {
                        $('#app').css({
                            'transform': 'scale(' + this.scaleValue + ')'
                        });
                    }
                }, 750);
            });
            app.scaleValue = this.scaleValue;
        }, 500);
        setTimeout(() => {
            if (app.scaleValue != 1) {
                $("#app").css("transform", "scale(1)");
            };
            $("#app").css("max-height", "100vh");
            if (!app.mainPage === false) {
                window.location.reload();
            };
        }, 1500);
    }
};

app.initialize();


