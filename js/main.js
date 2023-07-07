$(document).ready(function () {
    
    // home fade in animation //

    setTimeout(function () {
    $('.logo').addClass('fadeIn');}, 500);
   
    // Accordion //
    
    $('.accTitle').click(function() {
        $accordion_content = $(this).next('.accList');
        $('.accList').not($accordion_content).slideUp(600);
        $accordion_content.stop(true, false).slideToggle(600);
        
        setTimeout(function(){
            $('html, body').animate({scrollTop: $($accordion_content).offset().top - 240}, 600);
        }, 800);
    });
    
    // disclamer //

    $('.disclamer').click(function() {
        var $target = $($(this).data("target"));
        $target.slideToggle(500, function() {
            if ($target.is(":visible")) {
                $('html,body').animate({scrollTop: $target.offset().top}, 1000);
            }
        });
      });
    
});