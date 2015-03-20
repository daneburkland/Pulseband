/*Prepare the strengthen indicators*/
var checkmarkPath = document.querySelector('#checkmark');
var checkmarkLength = checkmarkPath.getTotalLength();
var stepProgressPath = document.querySelector('#step-progress');
var stepProgressLength = stepProgressPath.getTotalLength();
var sleepProgressPath = document.querySelector('#sleep-progress');
var sleepProgressLength = sleepProgressPath.getTotalLength();

document.getElementById('checkmark').style.strokeDasharray = checkmarkLength;
document.getElementById('checkmark').style.strokeDashoffset = checkmarkLength;
document.getElementById('step-progress').style.strokeDasharray = stepProgressLength;
document.getElementById('step-progress').style.strokeDashoffset = -stepProgressLength;
document.getElementById('sleep-progress').style.strokeDasharray = sleepProgressLength;
document.getElementById('sleep-progress').style.strokeDashoffset = -sleepProgressLength;

$(document).ready(function(){
  $(".main").onepage_scroll({
     sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 900,             // AnimationTime let you define how long each section takes to animate
     pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
     beforeMove: function(index) {
      $(".onepage-pagination a.active").parent().addClass('active-underline');
      $(".onepage-pagination a:not(.active)").parent().removeClass('active-underline');
      if(index==1) {
        $(".onepage-pagination").addClass("hidden")
        $("#pulseband-top").addClass('pulseband-jumbotron-fade')
      }
      if(index==2) {
        $(".onepage-pagination").removeClass("hidden")
        $(".onepage-pagination").addClass('nav-fill-white')
        $("#pulseband-top").addClass('pulseband-feature')
        $("#pulseband-top").removeClass('pulseband-jumbotron-fade')
        $("#pulseband-top").removeClass('pulseband-strengthen')
      }
      if(index==3) {
        $("#pulseband-top").addClass('pulseband-strengthen')
        $("#pulseband-top").removeClass('pulseband-jumbotron-fade')
      }
      if(index==4) {
        $("#pulseband-top").removeClass('pulseband-strengthen')
        $("#pulseband-top").addClass('pulseband-jumbotron-fade')
      }
      if(index==5) {
        $("#pulseband-top").addClass('pulseband-jumbotron-fade')
      }

     },  // This option accepts a callback function. The function will be called before the page moves.
     afterMove: function(index) {

      $(".onepage-pagination a.active").parent().addClass('active-underline');
      $(".onepage-pagination a:not(.active)").parent().removeClass('active-underline');
      if(index==1) {
        $("#line-drawing-jumbotron").css('opacity', '1')
      }
      if(index==2) {
        $("#line-drawing-jumbotron").css('opacity', '1')
        $(".indicators").animate({
          "top": "42%",
          "left": "50%",
          "width": "15%",
          "height": "50%"
        })
      };
      if(index==3) {
        $("#fact-one").addClass('animated fadeInRight')
        $("#fact-two").addClass('animated fadeInRight')
        $("#step-progress").attr('class', 'step-progress step-progress-draw' )
        $("#sleep-progress").attr('class', 'sleep-progress sleep-progress-draw' )
        $("#checkmark").attr('class', 'checkmark checkmark-draw' )
      };
      if(index==4) {
        $("#off").addClass('animated fadeInRightShort')
        $("#on").addClass('animated fadeIn')
      }

     },   // This option accepts a callback function. The function will be called after the page moves.
     loop: false,
     disableMouseMove: false,
     keyboard: true,                  // You can activate the keyboard controls
     responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                      // the browser's width is less than 600, the fallback will kick in.
     direction: "vertical"              
  });
  
  $(".onepage-pagination").addClass('hidden')
  $(".onepage-pagination li:nth-child(1) a").append("<p>Pulseband<br><span>by General Electric</span></p>");
  $(".onepage-pagination li:nth-child(2) a").append("<p>Highlights</p>");
  $(".onepage-pagination li:nth-child(3) a").append("<p>Features</p>");
  $(".onepage-pagination li:nth-child(4) a").append("<p>App</p>");
  $(".onepage-pagination li:nth-child(5) a").append("<p>Specs</p>");
  $(".onepage-pagination").append("<li><a><p>Buy Now $299</p></a></li>")
  $("a.active").parent().toggleClass('active-underline');

});


/***************** Flickity ******************/

  $('#showcaseSlider').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    autoPlay: 5000,
    imagesLoaded: true
  });

