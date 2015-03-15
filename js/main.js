var pathObj = {
    "svgtest": {
        "strokepath": [
            {
                "path": "M85.609375,255.429302 C85.609375,245.487979 69.1269531,243.218879 69.1269531,254.751484 C69.1269531,266.28409 85.609375,265.370625 85.609375,255.429302 Z",
                "duration": 600
            },
            {
                "path": "M77.5713687,247 L77.5713687,97 L172.571369,97",
                "duration": 600
            },
            {
                "path": "M85.917423,254.789186 L171.592442,254.789186",
                "duration": 600
            },
            {
                "path": "M77.5713687,263.121066 L77.5713687,413.121066 L172.571369,413.121066",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 436,
            "height": 434
        }
    }
}; 

var pathObjTwo = {
    "svgstrengthen": {
        "strokepath": [
            {
                "path": "M24.9765625,0.1875 L24.9765625,266.636353",
                "duration": 600
            },
            {
                "path": "M29.9765625,272.128117 C29.9764142,278.735136 19.9765621,278.971109 19.9765625,272.2461 C19.9765629,265.52109 29.9767108,265.521098 29.9765625,272.128117 Z",
                "duration": 600
            },
            {
                "path": "M25.0034009,278.456022 L25.0034009,417.48185",
                "duration": 600
            },
            {
                "path": "M29.9765625,422.422467 C29.9764142,429.029486 19.9765621,429.26546 19.9765625,422.54045 C19.9765629,415.815441 29.9767108,415.815448 29.9765625,422.422467 Z",
                "duration": 600
            },
            {
                "path": "M25.0034009,427.48185 L25.0034009,592.506783",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 153,
            "height": 593
        }
    }
}; 

$(document).ready(function(){
  var $featuresvg = $('#svgtest').lazylinepainter( 
    {
      "svgData": pathObj,
      "strokeWidth": 1,
      "strokeColor": "#FAB216"
    });

   var $svgstrengthen = $('#svgstrengthen').lazylinepainter( 
    {
      "svgData": pathObjTwo,
      "strokeWidth": 1,
      "strokeColor": "#FAB216"
    }); 



  $(".main").onepage_scroll({
     sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
     pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
     beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
     afterMove: function(index) {
      console.log(index);
      if(index==2) {$featuresvg.lazylinepainter('paint')};
      if(index==3) {$svgstrengthen.lazylinepainter('paint')};
     },   // This option accepts a callback function. The function will be called after the page moves.
     loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
     keyboard: true,                  // You can activate the keyboard controls
     responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                      // the browser's width is less than 600, the fallback will kick in.
     direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
  });
});

 

