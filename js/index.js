function main() {
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (var i = 0; i < channels.length - 1; i++) {
       var call = 'https://wind-bow.gomix.me/twitch-api/streams/' + channels[i] + '?callback=?';
        (function (i) {
           $.getJSON(call, function (data) {
               var name = "#name" + i;
               var link = "<a target='_blank' href=" + 'https://www.twitch.tv/' + channels[i] + ">" + channels[i] + "</a>";
               $(name).html(link);
               var status = data.stream;
               var datai = "#data" + i;
               if (status == null) {
                   var offline = "<p>offline</p>";
                   $(datai).html(offline);
               }
               else {
                   var description = '<p>' + data.stream.game + " " + data.stream.channel.status + '</p>';
                   $(datai).html(description);
               }
           });
       })(i);
    }
}
main();