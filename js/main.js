   jQuery( document ).ready(function( $ ) {          
            $.ajax({
				url: 'https://cdn.getawesomestudio.com/lib/spa/spa.v2.min.js',
				dataType: "script",
				cache: true,
				success: function() {
					spa.app.start({
						homeurl:'https://thecancerus.com/',          
						cdn:'https://cdn.getawesomestudio.com/lib/',
						path:'https://thecancerus.com/wisdom/'
					});
				}
            });  
        });          