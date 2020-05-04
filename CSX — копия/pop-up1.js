// Модальное окно

// открыть по кнопке
$('.js-button-campaign-1').click(function() { 
	
	$('.js-overlay-campaign-1').fadeIn();
	$('.js-overlay-campaign-1').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign-1').click(function() { 
	$('.js-overlay-campaign-1').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign-1');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

