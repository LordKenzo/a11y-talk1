var options = {
	edge: 'left',
	draggable: true,
	inDuration: 500,
	outDuration: 250,
	onOpenStart: null,
	onOpenEnd: null,
	onCloseStart: null,
	onCloseEnd: null,
	preventScrolling: true
};
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');

	var instances = M.Sidenav.init(elems, options);
});
