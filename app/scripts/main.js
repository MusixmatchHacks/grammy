require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require('main.css');
require('mailchimp.css');

require("font-awesome-webpack");
require("index.html")
require("disqus-thread.html")
require('expose?Handlebars!handlebars')
require('expose?all_data!all_data')
// require('materialize-css/bin/materialize.css')
// require('materialize-css/bin/materialize.js')
require('../images/' + name + ".jpg")
// require('../images/' + name + ".png")

// console.log($('asdasdasd'))
// console.log($('#template-chart-track'))
var track = "<div class=''> <div class='backgrnd' style='background-image: url({{big_image}});'> <div class='track'> <div class='year text-center'> {{year}} <i class='fa fa-external-link' style='color:white'></i> </div>  <div class='snippet text-center'> '<i>{{snippet}}</i>'</div>     <div class='title text-center'> {{title}}, {{artist}} </div> <div class='controls text-center'> <span>Play</span> <span>Pause</span> </div> </div> </div></div> </div>"
var track_template = Handlebars.compile(track);

console.log($('#winners_nominees_player'))
$('#winners_nominees_player').append(track_template(all_data['14743783']));
