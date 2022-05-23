// Nice scroll border
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('navbar').style.background = '#080a10';
		document.getElementById('mobNav').style.background = '#080a10';
		$('#languageTip').addClass('fadeOut');
	} else {
		if (!open) {
			document.getElementById('navbar').style.background = 'none';
			document.getElementById('mobNav').style.background = 'none';
		}
	}
}

// Mobile navigation
let open;
$('#toggleMobNav, .mobLink').click(function name() {
	if (open) {
		$('.mobLink').toggleClass('hide');
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
		} else {
			document.getElementById('mobNav').style.background = 'none';
		}
		open = false;
	} else {
		$('.mobLink').toggleClass('hide');
		document.getElementById('mobNav').style.background = '#080a10';
		open = true;
	}
});

$(window).resize(function () {
	if ($(window).width() > 1000) {
		$('#mobLinks').addClass('hide');
	} else {
		$('#mobLinks').removeClass('hide');
	}
});
