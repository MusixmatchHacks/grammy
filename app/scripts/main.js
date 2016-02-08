require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require('main.css');
require('mailchimp.css');

require("font-awesome-webpack");
require("index.html")
require("disqus-thread.html")
require('expose?Handlebars!handlebars')
require('expose?nominees_winnrs_yr_wise!nominees_winnrs_yr_wise')
// require('expose?winners_yr_wise!winners_yr_wise')
require('expose?all_data!all_data')

require('expose?velocity!velocity-animate')
require('expose?velocity-ui!../../node_modules/velocity-animate/velocity.ui.js')

require('expose?blast!blast-text')
require('expose?track_player!track_player')

// require('materialize-css/bin/materialize.css')
// require('materialize-css/bin/materialize.js')
// console.log($('#template-chart-track').html())
// var transition_mp3 = require('../data/' + name + ".mp3")
// console.log(transition_mp3)
require('../images/' + name + ".png")
require('../images/' + name + ".jpg")


// console.log($('asdasdasd'))
// console.log($('#template-chart-track'))
// var track = "<div class=''> <div class='backgrnd' style='background-image: url({{big_image}});'> <div class='track'> <div class='year text-center'> {{year}} <i class='fa fa-external-link' style='color:white'></i> </div>  <div class='snippet text-center'> '<i>{{snippet}}</i>'</div>     <div class='title text-center'> {{title}}, {{artist}} </div> <div class='controls text-center'> <span>Play</span> <span>Pause</span> </div> </div> </div></div> </div>"
