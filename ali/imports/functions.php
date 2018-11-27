<?php
function sliderComponent(){
$slides = (object)json_decode(file_get_contents('http://'.$_SERVER['SERVER_NAME'].'./ali-our-great-designer/imports/data.json'), true);
foreach ($slides as $key => $slide) {
    if (isset($slide['cbTitle']) && $slide['cbTitle'] != null) {
        echo '<article id="cb'.$key.'" class="content-block">';
            echo '<div class="wrapper">';
                echo '<header class="slideInUp">';
                    echo '<h1>'.$slide['cbTitle'].'</h1>';
                echo '</header>';
                echo '<section>';
                        echo '<p class="slideInUp slideInUp2">'.$slide['cbContent'].'</p>';
                echo '</section>';
                echo '</div>';
        echo '</article>';
    }
    echo '<article id="slide'.$key.'" class="slide fs">';
    echo '<div class="bcg"></div>';
            echo '<div id="wp'.$key.'" class="wrapper wp-active">';
                //($key == 1) ? print('<h2 style="margin-top: 0px;">') : print('<h2>');
                //($key != 1) ? print($key-1).'<span class="size">/35</span>': '';
                echo '<h2>'.$slide['no'].'</h2>';
                echo '<div>';
                    echo '<header>';
                        echo '<h1>'.$slide['slideTitle'].'</h1>';
                    echo '</header>';
                    echo '<section>';
                        echo '<p>'.$slide['slideContent'].'</p>';
                        echo '<p class="controls"><i class="fa fa-volume-up fa-2x sound"></i></p>';
                    echo '</section>';
                echo '</div>';
            echo '</div>';
    echo '</article>';
}
}
?>