!function(e){function o(e,o){u++,h=u/g,TweenLite.to(f,.7,{progress:h,ease:Linear.easeNone})}function t(){h=Math.round(100*f.progress()),e(".txt-perc").text(h+"%")}function a(){var o=new TimelineMax;return o.to(e(".progress"),.3,{y:100,autoAlpha:0,ease:Back.easeIn}).to(e(".txt-perc"),.3,{y:100,autoAlpha:0,ease:Back.easeIn},.1).set(e("body"),{className:"-=is-loading"}).set(e("#intro"),{className:"+=is-loaded"}).to(e("#preloader"),.7,{yPercent:100,ease:Power4.easeInOut}).set(e("#preloader"),{className:"+=is-hidden"}).from(e("#intro .title"),1,{autoAlpha:0,ease:Power1.easeOut},"-=0.2").from(e("#intro p"),.7,{autoAlpha:0,ease:Power1.easeOut},"+=0.2").from(e(".scroll-hint"),.3,{y:-20,autoAlpha:0,ease:Power1.easeOut},"+=0.1"),o}var n=new ScrollMagic.Controller,s=document.getElementById("tsaudio"),r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;r&&e(window).width()<=420&&e(".sound").removeClass("fa-volume-off"),r&&e(".sound").removeClass("fa-volume-off"),e(".sound").click(function(){s.muted===!1?s.muted=!0:s.muted=!1,r||e(".sound").toggleClass("fa-volume-off fa-volume-up")});var l=[];for(i=1;i<=36;i++)l.push("#slide"+i);var d=[];for(i=1;i<=36;i++)d.push("#slide"+i+" header");var c=[];for(i=1;i<=36;i++)c.push("#cb"+i);var u=0,g=e(".bcg").length,h=0;e(".bcg").imagesLoaded({background:!0}).progress(function(e,t){o()});var f=new TimelineMax({paused:!0,onUpdate:t,onComplete:a});if(f.to(e(".progress span"),1,{width:100,ease:Linear.easeNone}),!Modernizr.touch){d.forEach(function(e,o){var t=o+1;new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide"+t,"is-active").addTo(n)}),c.forEach(function(o,t){var a=e(o).attr("id");new ScrollMagic.Scene({triggerElement:o,triggerHook:.75}).setClassToggle("#"+a,"is-active").on("enter",function(o){e("nav").attr("class","is-light")}).addTo(n)}),l.forEach(function(o,t){new ScrollMagic.Scene({triggerElement:o}).on("enter",function(o){e("nav").removeAttr("class")}).addTo(n)}),l.forEach(function(o,t){var a=e(o).find(".bcg");new ScrollMagic.Scene({triggerElement:o,triggerHook:1,duration:"100%"}).setTween(TweenMax.from(a,1,{y:"-40%",autoAlpha:.3,ease:Power0.easeNone})).addTo(n)});var w=new TimelineMax;w.to(e("#intro header, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},0);new ScrollMagic.Scene({triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(w).addTo(n);e.get("/imports/data-min.json",function(o){var t=o;for(var a in t)if(void 0!==t[a].pinTitle)if(t[a].pinZoom){var i=new TimelineMax;i.to(e("#slide"+a+" h1"),.2,{autoAlpha:0,ease:Power1.easeNone},1.5).to(e("#slide"+a+" section"),.2,{autoAlpha:0,ease:Power1.easeNone},1.5).set(e("#slide"+a+" h1"),{text:t[a].pinTitle}).set(e("#slide"+a+" p"),{text:t[a].pinContent}).to(e("#slide"+a+" .bcg"),.6,{scale:1.2,transformOrigin:"0% 0%",ease:Power0.easeNone}).fromTo(e("#slide"+a+" h1"),.7,{y:"+=20"},{y:0,autoAlpha:1,ease:Power1.easeOut},"+=0.4").fromTo(e("#slide"+a+" section"),.6,{y:"+=20"},{y:0,autoAlpha:1,ease:Power1.easeOut},"-=0.6").set(e("#slide"+a+" h1"),{autoAlpha:1},"+=2.5");new ScrollMagic.Scene({triggerElement:"#slide"+a,triggerHook:0,duration:"300%"}).setPin("#slide"+a).setTween(i).addTo(n)}else{var s=new TimelineMax;s.to(e("#slide"+a+" h1"),.2,{autoAlpha:0,ease:Power1.easeNone},1.5).to(e("#slide"+a+" section"),.2,{autoAlpha:0,ease:Power1.easeNone},1.5).set(e("#slide"+a+" h1"),{text:t[a].pinTitle}).set(e("#slide"+a+" p"),{text:t[a].pinContent}).fromTo(e("#slide"+a+" h1"),.7,{y:"+=20"},{y:0,autoAlpha:1,ease:Power1.easeOut},"+=0.4").fromTo(e("#slide"+a+" section"),.6,{y:"+=20"},{y:0,autoAlpha:1,ease:Power1.easeOut},"-=0.6").set(e("#slide"+a+" h1"),{autoAlpha:1},"+=2");new ScrollMagic.Scene({triggerElement:"#slide"+a,triggerHook:0,duration:"250%"}).setPin("#slide"+a).setTween(s).addTo(n)}}),n.scrollTo(function(e){TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})}),e(document).on("click","a[href^='#']",function(o){var t=e(this).attr("href");e(t).length>0&&(o.preventDefault(),n.scrollTo(t),window.history&&window.history.pushState&&history.pushState("",document.title,t))})}}(jQuery);