$(document).ready(function () {
    
    setTimeout(function(){$('#loader').fadeOut(800)},800);
    
   
    // Accordion //
    
     $('.accTitle').click(function() {
        $accordion_line = $(this).children('span');
        $('.accTitle .line').not($accordion_line).removeClass('lineactive');
        $(this).children('span').toggleClass('lineactive');
        
        $accordion_content = $(this).next('.accList');
        $('.accList').not($accordion_content).slideUp(600);
        $accordion_content.stop(true, false).slideToggle(600);
        
         setTimeout(function(){
            $('html, body').animate({scrollTop: $($accordion_line).offset().top - 240}, 600);
        }, 700);
    });
    
    // impressum //

    $('.impressum').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).slideToggle(500);
        $(totoggle).next().hide();
        
        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000);
        }     
    });
    
});