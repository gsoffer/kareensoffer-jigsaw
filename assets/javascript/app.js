// Project Images Slide Show
var slideshowIndexRB = 1;
var slideshowIndexGOT = 1;

function changeImageRB(n) {
	showImageRB(slideshowIndexRB += n);
}
function changeImageGOT(n) {
	showImageGOT(slideshowIndexGOT += n);
}

function showImageRB(n) {
	var i;
	var x = document.getElementById('rhymers-block').getElementsByClassName("slideshow-images");
	if (n > x.length) {slideshowIndexRB = 1}
	if (n < 1) {slideshowIndexRB = x.length}
	for (i = 0; i < x.length; i++) {
		$(x[i]).fadeOut(600, 'swing');
	}
	$(x[slideshowIndexRB-1]).fadeIn(400, 'swing');
	document.getElementById('ss_count_rb').innerHTML = 'Image ' + slideshowIndexRB.toString() + ' of ' + x.length.toString();
}
function showImageGOT(n) {
	var i;
	var x = document.getElementById('game-of-thrones').getElementsByClassName("slideshow-images");
	if (n > x.length) {slideshowIndexGOT = 1}
	if (n < 1) {slideshowIndexGOT = x.length}
	for (i = 0; i < x.length; i++) {
		$(x[i]).fadeOut(600, 'swing');
	}
	$(x[slideshowIndexGOT-1]).fadeIn(400, 'swing');
	document.getElementById('ss_count_got').innerHTML = 'Image ' + slideshowIndexGOT.toString() + ' of ' + x.length.toString();
}

showImageRB(slideshowIndexRB);
showImageGOT(slideshowIndexGOT);
