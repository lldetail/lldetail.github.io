var hides = true;
var id = false;
function toggle(b,t){
	var elem = document.getElementById("left_bar"); 
	var elem2 = document.getElementById("main_area"); 
	var pos = 0;
	if (b == undefined){
		hides = !hides;
	} else {
		hides = b;
	};
	if (id){
		clearInterval(id);
	};
	if (hides){
		id = setInterval(h, 10);
	} else {
		id = setInterval(s, 10);
	};
	function h() {
		if (pos == 20) {
			clearInterval(id);
			id = false;
		} else {
			pos++; 
			elem.style.left = (-pos*10) + 'px'; 
		}
	}
	function s() {
		if (pos == 20) {
			clearInterval(id);
			id = false;
		} else {
			pos++; 
			elem.style.left = (pos*10-200) + 'px'; 
		}
	}
};