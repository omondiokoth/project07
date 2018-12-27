$(function(){
    let $popup = $('#popup'),
        $pimg = $popup.find('.p-image'),
        $p1 = $pimg.find('div:nth-child(1)'),
        $p2 = $pimg.find('div:nth-child(2)'),
        $p3 = $pimg.find('div:nth-child(3)'),
        $tour1 = $('.tour .tour-content li:nth-child(1) a'),
        $tour2 = $('.tour .tour-content li:nth-child(2) a'),
        $tour3 = $('.tour .tour-content li:nth-child(3) a');
    
    $tour1.on('click', function(event){
        event.preventDefault();
        $popup.css('display', 'block');
        $p1.css('dispaly', 'block');
        $p2.css('display', 'none');
        $p3.css('dispaly', 'none');
        
    });
     $tour2.on('click', function(event){
        event.preventDefault();
        $popup.css('display', 'block');
        $p2.css('dispaly', 'block');
        $p1.css('display', 'none');
        $p3.css('dispaly', 'none');
        
    });
     $tour3.on('click', function(event){
        event.preventDefault();
        $popup.css('display', 'block');
        $p3.css('dispaly', 'block');
        $p2.css('display', 'none');
        $p1.css('dispaly', 'none');
        
    });
    
    $popup.find('button').on('click', function(){
        $popup.css('display', 'none');
    });
    
});