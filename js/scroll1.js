$(function(){

	$('#a1').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#beg').offset().top }, 600);
	  e.preventDefault();
	});
	
	});




	$(function(){

		$('#a2').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('#s_frame').offset().top +20	 }, 600);
		  e.preventDefault();
		});
		
		});



		$(function(){

			$('#a3').on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $('#t_frame').offset().top }, 600);
			  e.preventDefault();
			});
			
			});


			
	$(function(){

		$('#a4').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('#fo_frame').offset().top }, 600);
		  e.preventDefault();
		});
		
		});
