function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var id;
var num_lbtn = 2;
var num_sbtn = 3;
window.setTimeout(function(){
lang = getCookie('lang');
document.body.innerHTML = '<div id="top_bar" style=""><a class="white_link" href="/">' + document.title + '</a></div>' + document.body.innerHTML + '<div id="toolbox" style="width:0px;height:0px"><a class="white_link" href="/"><div class="llbtn">' + (lang=='jp'?'ホームページ':(lang=='zh'?'主頁':'Homepage')) + '</div></a><a class="white_link" href="http://twymoe.byethost7.com/llsif.com/"><div class="llbtn">llsif.com ' + (lang=='jp'?'バックアップ':(lang=='zh'?'備份':' Backup')) + '</div></a><a class="white_link" href="/LLSIF Detail Info/jp_detail.php"><div class="sllbtn">' + (lang=='jp'?'日本語版スコア':(lang=='zh'?'日版分數線':'JP Tier')) + '</div></a><a class="white_link" href="/LLSIF Detail Info/en_detail.php"><div class="sllbtn">' + (lang=='jp'?'グローバル版スコア':(lang=='zh'?'國際版分數線':'EN Tier')) +'</div></a><a class="white_link" href="/LLSIF Detail Info/zh_detail.php"><div class="sllbtn">' + (lang=='jp'?'繁体字版スコア':(lang=='zh'?'繁中版分數線':'ZH Tier')) + '</div></a></div><span id="function" onclick="showmenu();">+</span></body>'
var url = window.location.href;
var oh = getCookie("h");

if (url == 'file:///H:/lldetail.byethost5.com/htdocs/template.html' || url == 'http://lldetail.byethost5.com/' || url == 'http://lldetail.byethost5.com/index.html' || oh == ""){
	var h = (210+Math.floor((Math.random() * 170)))%360;
	document.body.style.backgroundColor = 'hsl(' + h + ', 100%, 97%)';
	setCookie("h",h,365);
} else {
	h = oh;
	document.body.style.backgroundColor = 'hsl(' + h + ', 100%, 97%)';
	setCookie("h",h,365);
};
document.getElementById("top_bar").style.backgroundColor = 'hsl(' + h + ', 100%, 70%)';
document.getElementById("function").style.backgroundColor = 'hsl(' + h + ', 100%, 70%)';
for (i=0;i<num_lbtn;i++){
	document.getElementsByClassName("llbtn")[i].style.backgroundColor = 'hsl(' + h + ', 100%, 70%)';
};
for (i=0;i<num_sbtn;i++){
	document.getElementsByClassName("sllbtn")[i].style.backgroundColor = 'hsl(' + h + ', 100%, 70%)';
};
document.head.innerHTML = "<meta name='theme-color' content='" + hslToHex(h, 100, 70) + "'>" + document.head.innerHTML;
menu = false;
},0);
function showmenu(){
	menu = !menu;
	if (menu){			
		var elem = document.getElementById("toolbox"); 
		var pos = 0;
		clearInterval(id);
		//elem.style = 'display:block;top:0px;left:0px';
		elem.style = 'display:block;width:0px;height:0px';
		timestart = (new Date().getTime());
		id = setInterval(frame, 10);
		function frame() {
			if (pos >= 1000) {
				clearInterval(id);
			} else {
				pos=(new Date().getTime())-timestart; 
				elem.style.width = Math.floor(0.134*pos) + 'px'; 
				elem.style.height = Math.floor((0.06*num_lbtn+0.03*num_sbtn)*pos) + 'px'; 
			}
		}
	} else {
		var elem = document.getElementById("toolbox"); 
		var pos = 1000;
		clearInterval(id);
		elem.style = 'display:block;';
		timestart = (new Date().getTime());
		id = setInterval(frame, 10);
		function frame() {
			if (pos <= 0) {
				clearInterval(id);
				elem.style = 'display:none;';
			} else {
				pos=1000+timestart-(new Date().getTime()); 
				elem.style.width = Math.floor(0.134*pos) + 'px'; 
				elem.style.height = Math.floor((0.06*num_lbtn+0.03*num_sbtn)*pos) + 'px'; 
			}
		}
	};
};