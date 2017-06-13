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

// closes the panel on click outside
$(document).mouseup(function (e) {
  var container = $('#contact-panel');
  if (!container.is(e.target) // if the target of the click isn't the container...
  && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.removeClass('is-active');
    }
});


