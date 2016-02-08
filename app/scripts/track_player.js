var track_player = (function($, Handlebars, all_data, nominees_winnrs_yr_wise) {

  var start_yr = 1959;
  var end_yr = 2016;
  var yrs = [];
  for (var i = start_yr; i <= end_yr; i++) {
    yrs.push(i)
  }
  // console.log(yrs)
  transition = {
    "year":"",
    "title":"",
    "artist":"",
    "snippet":"",
    "big_image":"http://i.imgur.com/jJpPDCA.jpg",
    "preview_url":"https://s3.amazonaws.com/mxmhacks/grammy_awards_prediction/transition.mp3"
  }
  // var track_template = Handlebars.compile($('#template-chart-track').html());

  // $('#winners_nominees_player').append(track_template(all_data['14743783']));

  // $('#winners_nominees_player').append(track_template(all_data[nominees_yr_wise[yrs[0]][0]]));
  // var audio_playr = $('#audio_player')
  // audio_playr.trigger('play')
  // audio_playr.on('ended',function(){
  //   $('#winners_nominees_player').empty()
  //   $('#winners_nominees_player').append(track_template(all_data[nominees_yr_wise[yrs[1]][0]]));
  // })

  function change_transition(){
    $('#year').html("")

    // $('#title').empty()
    $('#track-title').html("")

    // $('#snippet').empty()
    $('#snippet').html("")

    $('#audio-player')[0].setAttribute('src', transition['preview_url']);
    $('#audio-player')[0].play()

    $('#backgrnd').css("background-image", "url("+transition['big_image']+")")
  }
  function change_track(track){
    // $('#year').html()
    $('#audio-player')[0].setAttribute('src', transition['preview_url']);
    $('#audio-player')[0].play()
    console.log(track['winner'])
    if(Number(track['winner']) == 1)
    {
      $('#year').html(track['year'])
      $('#winner').show()
      //.toggle( "bounce", { times: 3 });
    }
    else{
      $('#year').html('Nominee - ' + track['year'] )
      $('#winner').hide()
    }
    $('#track-title').html(track['title'] + ' by ' + track['artist'] ).hide()
    $('#track-title').show().blast({ delimiter: "character" }).velocity("transition.slideRightIn", { stagger: 50 }).delay(750)
    $('#snippet').html('"' + track['snippet'] + '"').hide()
    $("#snippet").show().blast({ delimiter: "word" }).velocity("transition.slideLeftIn", { stagger: 150 }).delay(750)

    $("#share-link").attr("href", track['share_url'])
    // console.log($("#share-link"))
    // console.log(track['share_url'])
    setTimeout(function(){
      $('#audio-player')[0].setAttribute('src', track['preview_url']);
      $('#audio-player')[0].play()
    },1000)
  }

  function restart_animation(){
    var yr_id = 0
    var num_tr = 0
    change_track(all_data[nominees_winnrs_yr_wise[yrs[yr_id]][num_tr]])
    var player_loop = setInterval(function(){
      if (num_tr < nominees_winnrs_yr_wise[yrs[yr_id]].length -1 ){
        num_tr = num_tr + 1
        change_track(all_data[nominees_winnrs_yr_wise[yrs[yr_id]][num_tr]])
      }
      else if (num_tr == nominees_winnrs_yr_wise[yrs[yr_id]].length - 1) {
        yr_id = yr_id + 1
        if (yr_id == yrs.length) {
          yr_id = 0
        }
        num_tr = 0
        change_track(all_data[nominees_winnrs_yr_wise[yrs[yr_id]][num_tr]])
      }


    }, 10000)
}
})($, Handlebars, all_data, nominees_winnrs_yr_wise);

// module.exports = track_player;
