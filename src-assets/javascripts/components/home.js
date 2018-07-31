$(document).ready(function(){
    $('#subs_btn').click(function(){
      debugger;
      var clickBtnValue = $(this).val();
      var ajaxurl = 'subs.php',
      data =  {'action': 'subs', 'email': $("#txtsubsemail").val()};
      $.post(ajaxurl, data, function (response) {
          // Response div goes here.
          $("#txtsubsemail").val('');
          $("#txtsubsemail").attr("placeholder", "Subscribed Successfully");
          //alert("action performed successfully");
      });
    });
  });


function makeTimer() {

    var endTime = new Date("14 Aug 2018 9:56:00 GMT+01:00");			
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hrs</span>");
    $("#minutes").html(minutes + "<span>Mins</span>");
    $("#seconds").html(seconds + "<span>Secs</span>");		

}

setInterval(function() { makeTimer(); }, 1000);


// Glitch js Code
// Glitch Timeline Function
var $text = document.querySelector('.btn-glitch-active'),
    $filter = document.querySelector('.svg-sprite'),
    $turb = $filter.querySelector('#filter feTurbulence'),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function() {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        }
    });

    timeline
        .to(turbValX, 0.1, { val: 0.5 })
        .to(turbVal, 0.1, { val: 0.02 });
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });

    // console.log("duration is: " + timeline.duration());

    return {
        start: function() {
            timeline.play(0);
        },
        stop: function() {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();

$('.btn-glitch')
    .on('mouseenter', function () {
          $(this).addClass('btn-glitch-active');
          btnGlitch.start();
    })
    .on('mouseleave', function () {
        var $this = $(this);
        if ( $this.hasClass('btn-glitch-active') ) {
            $this.removeClass('btn-glitch-active');
            btnGlitch.stop();
        }
    });