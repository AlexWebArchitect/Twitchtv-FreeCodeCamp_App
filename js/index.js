function  apicall() {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function (fccdata) {
        console.log(fccdata);
    });
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function (esldata) {
        console.log(esldata);
    });
}
apicall();