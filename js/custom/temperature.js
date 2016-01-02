/**
 * Created by haslove on 01/01/2016.
 */

$(function(){

    // Specify the ZIP/location code and units (f or c)
    var loc = 'RSXX0091';
    var u = 'c';

    var query = "SELECT item.condition FROM weather.forecast WHERE location='" + loc + "' AND u='" + u + "'";
    var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
    var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

    window['wxCallback'] = function(data) {
        var info = data.query.results.channel.item.condition;
        $('#wxTemp').html(info.temp + '&deg;' + (u.toUpperCase()));
    };

    $.ajax({
        url: url,
        dataType: 'jsonp',
        cache: true,
        jsonpCallback: 'wxCallback'
    });

});