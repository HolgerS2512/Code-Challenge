const stopwatch = {
        undefined: undefined,
        null: null,
        snapShot: 0,
        watchTimer: true,
        currentdate: new Date(),
    initialize: function() {
        if (typeof $(document).ready() != stopwatch.undefined || typeof $(document).ready() != stopwatch.null) {
            $(document).ready(() => {
                $("#games-btn").click(() => {
                    app.currentProjekt();
                    setTimeout(() => {
                        app.changeView("useful", null, app.usefulJs, "index");
                        app.mainPage = true;
                    }, 1510);
                    setTimeout(() => {
                        app.newProject();
                    }, 1860);
                });
                $("#reset-time").click(() => {
                    $("#reset-time").addClass("watchMove");
                    setTimeout(() => {
                        $("#reset-time").removeClass("watchMove");
                    }, 150);
                    if (stopwatch.watchTimer === true) {
                        stopwatch.watchTimer = true;
                    } else {
                        stopwatch.watchTimer = false;
                    };
                    stopwatch.snapShot = 0;
                    this.updateTimer();
                });
                $("#start-time").click(() => {
                    $("#start-time").addClass("watchMove");
                    setTimeout(() => {
                        $("#start-time").removeClass("watchMove");
                    }, 150);
                    stopwatch.watchTimer = false;
                });
                $("#stop-time").click(() => {
                    $("#stop-time").addClass("watchMove");
                    setTimeout(() => {
                        $("#stop-time").removeClass("watchMove");
                    }, 150);
                    stopwatch.watchTimer = true;
                });
                this.registerInterval();
                this.updateClock();
            });
        };
    },

    registerInterval: function() {
        setInterval(this.objWidth.bind(this), 100);
    },

    objWidth: function() {
        let width = document.querySelector(".stop-window").clientWidth;
        $(".stop-window").css("height", width);
        $("#reset-text").css("font-size", (width * .032));
        $("#start-text").css("font-size", (width * .032));
        $("#stop-text").css("font-size", (width * .032));
        $("#sheet-cc").css("font-size", (width * .09));
        $("#sheet-sw").css("font-size", (width * .0345));
        $("#sheet-wr").css("font-size", (width * .0285));
        let timeWidth = document.getElementById("time").clientWidth;
        $("#time").css("font-size", timeWidth * 0.21);
        $("#millis").css("font-size", timeWidth * 0.1);
    },

    updateClock: function() {
        if (stopwatch.watchTimer === false) {
            stopwatch.snapShot += new Date() - stopwatch.currentdate;
            this.updateTimer();
        }
        stopwatch.currentdate = new Date();
        setTimeout(this.updateClock.bind(this), 100);
    },

    updateTimer: function() {
        let ms = stopwatch.snapShot % 1000;
        let sec = Math.floor(stopwatch.snapShot / 1000) % 60;
        let min = Math.floor(stopwatch.snapShot / 60000) % 60;
        let h = Math.floor(stopwatch.snapShot / 3600000);
        ms = (ms + "00").slice(0, 2);

        Number.prototype.pad = function (size) {
          let s = String(this);
          while (s.length < (size || 2)) {
            s = "0" + s;
          }
          return s;
        };
        $("#hour").text(h);
        $("#minutes").text((min).pad(2));
        $("#seconds").text((sec).pad(2));
        $("#millis").text(ms);
    }
};