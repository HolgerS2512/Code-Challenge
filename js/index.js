const app = {
    initialize: function () {
        //document.getElementById("gimmicks-btn").addEventListener("readystatechange", this.onGimmicks.bind(this), false);
        //document.getElementById("useful-btn").addEventListener("readystatechange", this.onUseful.bind(this), false);
        //document.getElementById("games-btn").addEventListener("readystatechange", this.onGames.bind(this), false);
        document.addEventListener("readystatechange", this.onDeviceReady.bind(this), false);
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
    }
};

app.initialize();


