$(document).foundation()


$('[data-toggle-waifu]').click(function (ev) {
	const panel = $(this).data('toggleWaifu')
	$('#tabs-lineup').foundation('selectTab', panel)
})

const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')
$offCanvas.find('li').click(function (ev) {
	$offCanvas.foundation('close')
	setTimeout(function () {
		$sticky.css('left', '0px')
	}, 300)
})
// var menu = new Foundation.DropdownMenu($('#main-menu'));

