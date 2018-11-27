<?php require_once('./imports/functions.php'); ?>
<!doctype html>
<!-- built from Petr Tichy's sample ScrollMagic Template -->
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>35 years - Thomsonsafaris</title>

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <link href='https://fonts.googleapis.com/css?family=Roboto:100,600|Raleway:200,600' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/styles.min.css">
</head>
<body class="is-loading">


    <div id="preloader">
        <div class="txt">
            <p class="txt-perc">0%</p>
            <div class="progress"><span></span></div>
        </div>
    </div>

    <audio id="tsaudio" autoplay loop>
        <source src="audio/sound.mp3" type="audio/mpeg" />
    </audio>
    <!-- test -->
    
    <div id="intro" class="header-container fs">
        <div class="bcg"></div>
        <a href="#slide1"><span class="scroll-hint">Scroll Down</span></a>
        <div class="controls home-control"><i class="fa fa-volume-up fa-2x sound"></i></div>
    </div>

    <div id="main" class="main-container">

        <?php sliderComponent(); ?>

    </div> <!-- #main-container -->

    <div class="footer-container">
        <footer class="wrapper">
            <img src="img/ts_logo_footer.png">
            <h2>Let us turn your dreams into a reality. </br>Visit our website or call now to book your trip of a lifetime.</h2>
            <h3><a href="http://www.thomsonsafaris.com">ThomsonSafaris</a> &nbsp; | &nbsp; <a href="http://www.thomsontreks.com/">ThomsonTreks</a> </br>800.235.0289</h3>
            <div class="top-btn" ><a href="/" class="button">TOP</a></div>
            <p>2016 &copy; <a href="http://www.thomsonsafaris.com" target="_blank">thomsonsafaris</a></p>
        </footer>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://use.fontawesome.com/243896e3f5.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/TextPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.2.0/imagesloaded.pkgd.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/ScrollToPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>

    <script src="js/main.js"></script>
</body>
</html>
