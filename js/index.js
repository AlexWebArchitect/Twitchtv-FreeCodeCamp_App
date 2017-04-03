function  apicall() {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function (fccdata) {
        var fccstatus = fccdata.stream;
        if (fccstatus == null) $("#fccstatus").html("offline");
        else $("#fccstatus").html("online");
        console.log(fccdata);
    });
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function (esldata) {
        var eslstatus = esldata.stream;
        if (eslstatus == null) $("#eslstatus").html("offline");
        else $("#eslstatus").html("online");
        console.log(esldata);
    });
}
apicall();