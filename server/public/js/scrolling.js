$(document).ready(function(){
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where animation begins
    var animation_end_pos = 1300; //where animation stops
    var beginning_color = new $.Color( '#324149' );//beginning color
    var ending_color = new $.Color( 'rgb(0,197,209)' ); ;//end color
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
            //calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            $('body').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('body').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('body').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});
