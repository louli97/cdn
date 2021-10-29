
function topSearchHome()
{
	var query = $('#topsearch').val();

	$('#topsearch').keypress(function(x) {
		if (x.keyCode == 13) {
			query = $(this).val();
			if (query != this.defaultValue){
				document.location = siteurl + 'search/q:' + escape(query.replace(' ','+'));
			}
		}
	});
	
	// If no letters remove the div not helpful
	if (query == '') {
		var milliseconds = 0;
	} else {
		contentSearch = '<div id="contentSearch"><div id="resultSearch"></div><div id="loadingSearch"><img src="' + siteurl + 'themes/default/imgs/loading.gif"></div></div>';
		$('#search-container-home').html(contentSearch);
		
		$('#search-container-home').show();
		
		var milliseconds = 250;
	}
	
	// It took us a few milliseconds so that more letters are entered to the consultation
	setTimeout(function() {
		if(query == $('#topsearch').val()) {
			if(query == '') {
				$("#search-container-home").hide();
				$("#contentSearch").remove();
			} else {
				$.ajax({
					type: 'POST',
					url: siteurl + "ajax/searchtop/r:" + Math.round(Math.random()*1000),
					data: 'q=' + query,
					success: function(resp) {
						//alert(resp);
						$("#search-container-home").html(resp).show();
					},
					error: function(){
						alert('Error'); 
					} //end error
				}); // end ajax
			}
		}
	}, milliseconds);
}

function hideSearchTopHome() {
	$("#search-container-home").hide();
}

/*************************************************************************/

function topSearch()
{
	var query = $('#topsearch').val();

	$('#topsearch').keypress(function(x) {
		if (x.keyCode == 13) {
			query = $(this).val();
			if (query != this.defaultValue){
				document.location = siteurl + 'search/q:' + escape(query.replace(' ','+'));
			}
		}
	});
	
	// If no letters remove the div not helpful
	if (query == '') {
		var milliseconds = 0;
	} else {
		contentSearch = '<div id="contentSearch"><div id="resultSearch"></div><div id="loadingSearch"><img src="' + siteurl + 'themes/default/imgs/loading.gif"></div></div>';
		$('#search-container').html(contentSearch);
		
		$('#search-container').show();
		
		var milliseconds = 250;
	}
	
	// It took us a few milliseconds so that more letters are entered to the consultation
	setTimeout(function() {
		if(query == $('#topsearch').val()) {
			if(query == '') {
				$("#search-container").hide();
				$("#contentSearch").remove();
			} else {
				$.ajax({
					type: 'POST',
					url: siteurl + "ajax/searchtop-inside/r:" + Math.round(Math.random()*1000),
					data: 'q=' + query,
					success: function(resp) {
						//alert(resp);
						$("#search-container").html(resp).show();
					},
					error: function(){
						alert('Error'); 
					} //end error
				}); // end ajax
			}
		}
	}, milliseconds);
}

function hideSearchTop() {
	$("#search-container").hide();
}
