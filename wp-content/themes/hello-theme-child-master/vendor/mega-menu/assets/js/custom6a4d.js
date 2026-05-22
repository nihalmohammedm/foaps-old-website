jQuery(document).ready(function(){

jQuery('#sticky_item').stickySidebar({
    topSpacing: 60,
    bottomSpacing: 60
});
    
	jQuery('.dropdown-menu .dropdown-toggle').on('click', function(e) {
		if (!jQuery(this).next().hasClass('show')) {
			jQuery(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		}
		jQuery(this).next(".dropdown-menu").toggleClass('show');
		return false;
	});
	//for mega menu
	jQuery('.mega-menu-title').click(function(){
		if (!jQuery(this).next().hasClass('active')) {
			jQuery('.mega-dropdown-list').removeClass('active');
			jQuery(this).next().addClass('active');
		}
		else if (jQuery(this).next().hasClass('active')) {
			jQuery(this).next().removeClass('active');
		}
		return false;
	});


	jQuery('.search-form').submit(function( e ){ 
		    // Stop the form from submitting
		    e.preventDefault();
		    
		    // Get the search term
		    var term = jQuery('.search-field').val();							    

		    // Get post type
		    var pt = jQuery('.post_type').val();

		    // Make sure the user searched for something
		    if ( term ){
		        jQuery.get( '/', { s: term, post_type: pt }, function( data ){
		            // Place the fetched results inside the #content element
		            jQuery('#inner-content').html( jQuery(data).find('#inner-content') );
		        });
		    }
		});

});