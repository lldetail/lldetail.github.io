var mode = 1;
function smode(m) {
	mode = m;
	if (m == 1){
		var checkboxes = document.getElementsByName("show");
		for (var i = 0; i < checkboxes.length; i++){
			checkboxes[i].disabled = false;
		}
		document.getElementById("custom").disabled = true;
	} else if (m == 2){
		var checkboxes = document.getElementsByName("show");
		for (var i = 0; i < checkboxes.length; i++){
			checkboxes[i].disabled = true;
		}
		document.getElementById("custom").disabled = false;
	}
}

var ready = 1;
var data = [];
var selector = [];
var query = "100,1000";			

var HttpClient = function() {
	this.get = function(url, callback, errorcallback) {
		var HttpRequest = new XMLHttpRequest();
		HttpRequest.onreadystatechange = function() {
			if (HttpRequest.readyState == 4 & HttpRequest.status == 200) {
				callback(HttpRequest.response);
			}
		}
		HttpRequest.onerror = function() {
			errorcallback();
		}
		HttpRequest.open("GET",url,true);
		HttpRequest.send(null);
	}
}	
var client = new HttpClient();
			
//protect source code by matsurihi.me
var _0x1eb4=['Zmxvb3I=','Z2V0VGltZQ==','ZWRIOEEzNjhPQm9PMXN5VkNic0lqSmZmblMrUXNsazI0Tml0dWVlMWFhQkN2OXpMUmRJWTBqVzQ3RjB5MVNoRXJMRzk1NnZjZWY3YnRvMXgzTnRKYUhjS2RERndaN0FvQUExRXB3ZGdnTDZaQkJVZG5tblJCTzRESll2cGJ1R1NUR1JVK1VzSmtPQTdZMlJ2UEE2Z2RxSnFOZFdsQi9ITTFXMEZROUlBd1ZxVWFYOGprd1M3T3VOdVQ3WGtBNHVzZW1jZUQzMEsyaFlOWUM2WkNnM3FnSzhIWCt1b2FwdnkyQUJ2ZmQ5dHEyUkJDVDdIUm1UNjNqWU9EbEV4WThwSW1yTDNFWjNmTXdqdHRjZUg2dGdEbm5TOGxqMXowVklrQTd1bXF3VFdZcktoM05mWnByRVR3TmJiNTAvUnRpTldUOUsyOVVpL2N1dzQxWVpqUDdoQ2VnOE52Wk1JWUhtS2VBcU5CWDluU1J6aEE5eS81bTRZcHBZRTdDbVJhU2d3TkdPZFd6TU9XVUpEWkszTlJBbHAxTnB0L0hmZEFEaHVyV3JNNGFvSENQZ0IxaldoQnJ2eHVIYlJCVGR4dk1FdTc5aFVqZWkxa0pTWTMyUWJuN0tnQWpxNEZXazkxZEZ3VGI4bC8wclM0ZWJVdG5SRjA5dXdYS094Uk5PazNJREs0clUrcytYWStxcVZzZzRsa3QvS1BBeTdYNThMMXB1R2U3eHZDWHpScXhEWjJ4NTczcmJhWXE3Y0x1MnBzZXIwTjlWL1Z6QzR1MDVBMGsvQlI3K0wyT3h1dG9IckEzS1ltMm1HRjV3RVFnNENZTmV0QlEwVHRIVm41enR5Q2lNaTF3Q1dTZEJ0VWxDZ0I2YmZwMnBpeGprTzkyVStZek44VGduSDgwbGtBK3BrWnV4bll3c29maE5oM1BFVURCam9pbWlOUzQwRlNWTDliNzNkK2dKNXhGOEl6SzlZWlFpMktBLzhPUzlpT0NDeEJxMkR0bXRwbXNZQm5SWEJiRmtNYXIxa1ZXM1FvRXdkdWxUREd0ZVEyb1N6QlhtRDNzRmc4N1ExNy9UWjhmWlIwMFNkVnI2QWhDYlVkQXNodWJBU3Y5MGxzYml3NGFqSTJoVW56N2ZSUG9uZWIwZU9zNnRlL3RsZjBmbTBtOGhuMEE1cllMM0tjaERYUHYwWHV2cmtzckJQajdYZGk1YkZ0Mzhad3RxN0FGeStMcU5iMCtxNks3a2VOU3pVMml5SEJlZDFnR2dqYlBBQzErUDNieFA2YVF1R1dXNW1Ra0FlRExiUEdXRnkxcnhyeDcyN0JnT2t5MnozSzh3Qk16SlNaYWFSVlFoaWlDVmlsZ2NpRDFJZUVycXQ5eFhYYWU1bHZaMWhZdEJaZVB5MHpOdjcyUWpDaTdQOFRZemVPRlFwMUkwL0xybEpKbDdUdmFsWnZubXd4OXJzRThDM0tBcXczZHlGdDdBWW5CeGhKY1ViRE9IY2EyWVZVMndMMFVyeWIwVHA5UUtBOElWb2RIK0NCYkJtSnc4RkRTQml3UlJRQ0RXYlYyWHhnc2tCWkNIT2JLQTR2Z1pVdDdscmtLNy9BaTdYK0cvcXpvZ0ZIa0dQYU5wWUVReFAreFpoaStKbUMzOXRZV2E3ZE1Sc0RoL0RBY29HczJzK2liUUcrcEFxWW04ekxRK3JLbDFsWDZWYUNKdTg4ZG1tNWZhMFl2eUczcFp6Z2JOU2FoL1h4OGtZdWdQUWFORDNYMis5TTBiS3Q0WXR6ZHBDTkwyd3RydTYzWEtpSkxubkFTUFVJeGhUdnRlWFZOTVRqZz09','bGVuZ3Ro','Y2hhckNvZGVBdA=='];(function(_0x28944b,_0x479b91){var _0x49754e=function(_0x262892){while(--_0x262892){_0x28944b['push'](_0x28944b['shift']());}};_0x49754e(++_0x479b91);}(_0x1eb4,0x151));var _0x874c=function(_0x3c22ff,_0x38b53b){_0x3c22ff=_0x3c22ff-0x0;var _0x5850cf=_0x1eb4[_0x3c22ff];if(_0x874c['YCsmcR']===undefined){(function(){var _0x21d259=function(){var _0x14cc9d;try{_0x14cc9d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2ae3f4){_0x14cc9d=window;}return _0x14cc9d;};var _0x1fcdd3=_0x21d259();var _0x8dec7f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1fcdd3['atob']||(_0x1fcdd3['atob']=function(_0x2ef566){var _0xe26698=String(_0x2ef566)['replace'](/=+$/,'');for(var _0x3228ed=0x0,_0x4be87e,_0x3e4e7b,_0x3e8b6a=0x0,_0x325f5f='';_0x3e4e7b=_0xe26698['charAt'](_0x3e8b6a++);~_0x3e4e7b&&(_0x4be87e=_0x3228ed%0x4?_0x4be87e*0x40+_0x3e4e7b:_0x3e4e7b,_0x3228ed++%0x4)?_0x325f5f+=String['fromCharCode'](0xff&_0x4be87e>>(-0x2*_0x3228ed&0x6)):0x0){_0x3e4e7b=_0x8dec7f['indexOf'](_0x3e4e7b);}return _0x325f5f;});}());_0x874c['OctwYg']=function(_0xe06f14){var _0x5ee5b8=atob(_0xe06f14);var _0x186d29=[];for(var _0x332eab=0x0,_0x2a7210=_0x5ee5b8['length'];_0x332eab<_0x2a7210;_0x332eab++){_0x186d29+='%'+('00'+_0x5ee5b8['charCodeAt'](_0x332eab)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x186d29);};_0x874c['EZyrIH']={};_0x874c['YCsmcR']=!![];}var _0x3901fa=_0x874c['EZyrIH'][_0x3c22ff];if(_0x3901fa===undefined){_0x5850cf=_0x874c['OctwYg'](_0x5850cf);_0x874c['EZyrIH'][_0x3c22ff]=_0x5850cf;}else{_0x5850cf=_0x3901fa;}return _0x5850cf;};var princesshash=function(_0x292225){var _0x341d01=atob(_0x874c('0x0'));var _0x538c56=-0x1;for(var _0x997179=0x0;_0x997179<_0x292225[_0x874c('0x1')];_0x997179++){var _0x1f1ff6=_0x538c56&0xff^_0x292225[_0x874c('0x2')](_0x997179);_0x1f1ff6=_0x1f1ff6>>0x2&0x29|_0x1f1ff6&0x40|_0x1f1ff6<<0x3&0x80|_0x1f1ff6<<0x1&0x16;_0x538c56=_0x538c56>>>0x8^0x79d1fc03;for(var _0x2f2857=0x0;_0x2f2857<0x4;_0x2f2857++){_0x538c56^=_0x341d01[_0x874c('0x2')](0x4*_0x1f1ff6+_0x2f2857)<<(0x3-_0x2f2857)*0x8;}}return(_0x538c56^0x79d1fc03)>>>0x0;};var princess2=function(){return Math[_0x874c('0x3')](new Date()[_0x874c('0x4')]()/0x3e8)%0x5f5e100*0xd+Math[_0x874c('0x3')](Math['random']()*0xd);};
var names = ["天海 春香", "如月 千早", "星井 美希", "萩原 雪歩", "高槻 やよい", "菊地 真", "水瀬 伊織", "四条 貴音", "秋月 律子", "三浦 あずさ", "双海 亜美", "双海 真美", "我那覇 響", "春日 未来", "最上 静香", "伊吹 翼", "田中 琴葉", "島原 エレナ", "佐竹 美奈子", "所 恵美", "徳川 まつり", "箱崎 星梨花", "野々原 茜", "望月 杏奈", "ロコ", "七尾 百合子", "高山 紗代子", "松田 亜利沙", "高坂 海美", "中谷 育", "天空橋 朋花", "エミリー", "北沢 志保", "舞浜 歩", "木下 ひなた", "矢吹 可奈", "横山 奈緒", "二階堂 千鶴", "馬場 このみ", "大神 環", "豊川 風花", "宮尾 美也", "福田 のり子", "真壁 瑞希", "篠宮 可憐", "百瀬 莉緒", "永吉 昴", "北上 麗花", "周防 桃子", "ジュリア", "白石 紬", "桜守 歌織"];
var element = [1,2,3,1,3,1,2,2,2,3,3,3,1,1,2,3,1,3,1,2,1,3,3,3,2,1,1,1,1,1,2,1,2,2,3,1,1,2,3,3,3,3,1,2,3,2,2,3,2,2,2,3];
var imgclr = ["#e22b30","#2743d2","#b4e04b","#d3dde9","#f39939","#515558","#fd99e1","#a6126a","#01a860","#9238be","#ffe43f","#ffe43f","#01adb9","#ea5b76","#6495cf","#fed552","#92cfbb","#9bce92","#58a6dc","#454341","#5abfb7","#ed90ba","#eb613f","#7e6ca8","#fff03c","#c7b83c","#7f6575","#b54461","#e9739b","#f7e78e","#bee3e3","#554171","#afa690","#e25a9b","#d1342c","#f5ad3b","#788bc5","#f19557","#f1becb","#ee762e","#7278a8","#d7a96b","#eceb70","#99b7dc","#b63b40","#f19591","#aeb49c","#6bb6b0","#efb864","#d7385f","#b6b3e2","#152169"];
var keyword = ([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(![]+[+![]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]]+[+[]]+(![]+[+![]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])()[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()+[])[!+[]+!+[]+!+[]]+(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])+[])[+[]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+(!+[]+!+[]+!+[]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]])+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()(([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[+!+[]]])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]])()())[!+[]+!+[]+!+[]+[+[]]]+(![]+[])[+!+[]]+(!![]+[])[+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]];		

if (!Array.prototype.last){
	Array.prototype.last = function(){
		return this[this.length - 1];
	};
};

function parsetime(t,b){
	var mt = t.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\+\d{2}:\d{2}/);
	if (b){
		return new Date(mt[1],mt[2]-1,mt[3],0,0,0).getTime();
	} else {
		return new Date(mt[1],mt[2]-1,mt[3],mt[4],mt[5],mt[6]).getTime();
	}
}		
function timestring(d,b,y=true,ti=true){
	var t = new Date(d);
	if (y){
		return ("0"+t.getDate()).slice(-2) + "/" + ("0"+(t.getMonth()+1)).slice(-2) + "/" + t.getFullYear() + (ti?((b?"<br>":" ") + ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2)):"");
	} else {
		return ("0"+(t.getMonth()+1)).slice(-2) + "/" + ("0"+t.getDate()).slice(-2) + (ti?((b?"<br>":" ") + ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2)):"");
	}
}		

function disable(b){
	document.getElementById("rfbtn").disabled = b;
	var checkboxes = document.getElementsByName("show");
	for (var i = 0; i < checkboxes.length; i++){
		checkboxes[i].disabled = b;
	}
	var radios = document.getElementsByName("showoption");
	for (var i = 0; i < radios.length; i++){
		radios[i].disabled = b;
	}
	document.getElementById("custom").disabled = b;
}

function finished(){
	var tablecount = document.getElementsByClassName("detail").length;
	document.getElementById("loading").innerHTML = "Creating Table ... 1/" + tablecount;
	var temp = "";
	lines = [[]];//first row: header
	for (var k = 0; k < selector.length; k++){
		lines.push([]);
	}
	var refreshtime = 30000000000000;
	var largesttime = 0;
	for (var i = 1; i <= 52; i++){
		lines[0].push("<span class='" + ["Princess","Fairy","Angel"][element[i-1]-1] + "'>" + names[i-1] + "</span>");
		for (var k = 0; k < selector.length; k++){
			var sp = data[i][k].data.last();
			var dt = parsetime(sp.summaryTime);
			if (dt < refreshtime) refreshtime = dt;
			if (dt > largesttime) largesttime = dt;
			lines[k+1].push(sp.score);
		}
	};
	largesttime = Math.ceil(largesttime/1800000)*1800000;
	var fl = true;
	while (lines[0].length > 0){
		temp += "<tr class='emp'>";
		temp += "<th>";
		if (fl){
			temp += timestring(refreshtime);
			fl = false;
		}
		temp += "</th>";
		for (var i = 0; i < 7; i++){
			temp += "<th>" + (lines[0][i]?lines[0][i]:"") + "</th>";
		}
		temp += "</tr>";
		for (var k = 0; k < selector.length; k++){
			temp += "<tr>";
			temp += "<th>" + selector[k] + "位</th>";
			for (var i = 0; i < 7; i++){
				temp += "<td>" + (lines[k+1][i]?lines[k+1][i]:"") + "</td>";
			}
			temp += "</tr>";
		}		
		for (var k = 0; k <= selector.length; k++){
			lines[k].splice(0,7);
		}
	}
	document.getElementById("table0").innerHTML = temp;
	
	document.getElementById("loading").innerHTML = "Creating Table ... 2/" + tablecount;
	var ranking = [];
	for (var k = 0; k < selector.length; k++){
		ranking.push([]);
		for (var i = 1; i <= 52; i++){
			ranking[k][i-1] = {"id":i,"score":data[i][k].data.last().score};
		}
		ranking[k].sort(function(a, b) {
			return (a.score==b.score)?(a.id-b.id):(b.score-a.score);
		})
	}
	temp = "<tr class='emp'>";
	temp += "<th>" + timestring(refreshtime) + "</th>";
	for (var k = 0; k < selector.length; k++){
		temp += "<th colspan='2'>" + selector[k] + "位</th>";
	}
	temp += "</tr>";
	for (var i = 1; i <= 52; i++){
		temp += "<tr>";
		temp += "<th>" + i + "</th>";
		for (var k = 0; k < selector.length; k++){
			temp += "<th><span class='" + ["Princess","Fairy","Angel"][element[ranking[k][i-1].id-1]-1] + "'>" + names[ranking[k][i-1].id-1] + "</span></th>";
			temp += "<td>" + ranking[k][i-1].score + "</td>";
		}
		temp += "</tr>";
	}				
	document.getElementById("table1").innerHTML = temp;
	
	for (var tableid = 2; tableid <= 5; tableid++){
		document.getElementById("loading").innerHTML = "Creating Table ... " + (tableid+1) + "/" + tablecount;
		//create buttons
		temp = "";
		for (var k = 0; k < selector.length; k++){
			temp += "<button class='display" + tableid + "' onclick='display(" + tableid + "," + k + ")'>" + selector[k] + "位</button>";
		}
		//create tables
		for (var k = 0; k < selector.length; k++){
			temp += "<table class='detail" + tableid + "'>";
			var times = [];
			var firstday = parsetime(data[1][0].data[0].summaryTime, true);
			switch (tableid){
				case 2:
					for (var ad = 0; ad <= 13; ad++){
						times.push(firstday + ad * 86400000 + (ad == 13?1800000:0));
					}
					break;
				case 3:
					for (var ad = 48; (ad >= 0) && (largesttime - ad * 1800000 >= firstday); ad--){
						if (largesttime - ad * 1800000 != firstday + 13 * 86400000){
							times.push(largesttime - ad * 1800000);
						}
					}
					break;
				case 4:
					for (var ad = 48; ad >= 0; ad--){
						times.push(firstday + 13 * 86400000 - ad * 1800000 + (ad == 0?1800000:0));
					}
					break;
				case 5:
					for (var ad = 72; ad >= 0; ad--){
						times.push(firstday + 13 * 86400000 - ad * 300000 + (ad == 0?1800000:0));
					}
					break;
			}
			//first row
			temp += "<tr>";
			temp += "<th>" + selector[k] + "位</th>";
			for (var t = 0; t < times.length; t++){
				temp += "<th>" + timestring(times[t],true) + "</th>"
			}
			temp += "</tr>";
			for (var i = 1; i <= 52; i++){
				temp += "<tr>";
				temp += "<th><span class='" + ["Princess","Fairy","Angel"][element[i-1]-1] + "'>" + names[i-1] + "</span></th>";
				var lastscore = 0;
				var lastindex = 0;
				var tempscore = 0;
				for (var t = 0; t < times.length; t++){
					if (times[t] <= firstday){
						tempscore = 0;
					} else {
						//binary search
						var sa = data[i][k].data;
						var l = lastindex;
						var r = sa.length-1;
						var f = false;
						while (!f && l <= r){
							var m = Math.floor((l + r) / 2);
							var tt = parsetime(sa[m].summaryTime);
							if (tt == times[t]) {f = true}
							else if (tt < times[t]){
								l = m + 1;
							} else {
								r = m - 1;
							};
						}
						if (f) { //Found, m is the index
							lastindex = m+1;
							tempscore = sa[m].score;
						} else { //Not found, l is upper bound, r is lower bound
							lastindex = l;
							tempscore = -1;
						}
					}
					if (tempscore == -1){
						temp += "<td>Not found!</td>";
					} else if (t == 0){
						temp += "<td>" + tempscore + "</td>";
						lastscore = tempscore;
					} else {
						temp += "<td>" + tempscore + "<br>(+" + (tempscore-lastscore) + ")</td>";
						lastscore = tempscore;
					}
				}
				temp += "</tr>";
			};
			
			temp += "</table>";
		}
		document.getElementById("table" + tableid).innerHTML = temp;	
		display(tableid,0);
	}
					
	document.getElementById("table6").innerHTML = "";	
	document.getElementById("loading").innerHTML = "Creating Table ... 6/" + tablecount;
	//create buttons
	for (var k = 0; k < selector.length; k++){
		var btn = document.createElement("button");
		btn.setAttribute("class", "display6");
		btn.setAttribute("onclick", "display(6," + k + ")");
		btn.innerHTML = selector[k] + "位";
		document.getElementById("table6").appendChild(btn);
	}
	var ow = document.body.offsetWidth;
	for (var k = 0; k < selector.length; k++){
		//calculate for y-axis
		var maxscore = 0;
		for (var i = 1; i <= 52; i++){
			var tempscore = data[i][k].data.last().score;
			if (tempscore > maxscore) maxscore = tempscore;
		}
		if ((maxscore+[])[0] == "9"){
			maxscore = +("1" + "00000000000000000000".slice(-((maxscore+[]).length)));
		} else {
			maxscore = +(((+(maxscore+[])[0]) + 1) + "00000000000000000000".slice(1-((maxscore+[]).length)));
		}
		//create svg
		var svg = document.createElement("svg");
		var xoffset = ((maxscore+[]).length + 1) * 10 + 20;
		svg.setAttribute("xoffset", xoffset);
		svg.setAttribute("class", "detail6");
		svg.setAttribute("width", "100%");
		svg.setAttribute("height", "500");
		//background
		var rect = document.createElement("rect");
		rect.setAttribute("width", "100%");
		rect.setAttribute("height", "100%");
		rect.style.fill = "white";
		svg.appendChild(rect);
							
		var textc = document.createElement("text");
		textc.setAttribute("x", "16");
		textc.setAttribute("y", "50%");
		textc.setAttribute("text-anchor", "middle");
		textc.setAttribute("alignment-baseline", "middle");
		textc.setAttribute("style", "writing-mode: tb");
		textc.innerHTML = "イベントポイント";
		svg.appendChild(textc);
		
		for (var i = 0; i <= 10; i++){
			var text = document.createElement("text");
			text.setAttribute("x", xoffset);
			text.setAttribute("y", (95 - 9*i) + "%");
			text.setAttribute("text-anchor", "end");
			text.setAttribute("alignment-baseline", "middle");
			text.innerHTML = Math.floor(maxscore*i/10);
			svg.appendChild(text);
			var ln = document.createElement("line");
			ln.setAttribute("class", "hline");
			ln.setAttribute("x1", xoffset);
			ln.setAttribute("x2", "95%");
			ln.setAttribute("y1", (95 - 9*i) + "%");
			ln.setAttribute("y2", (95 - 9*i) + "%");
			ln.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:" + (i?1:2));
			svg.appendChild(ln);
		}
		var group = document.createElement("g");
		group.setAttribute("class", "x-label");
		for (var i = 0; i <= 13; i++){
			var x = xoffset + (ow*0.95 - xoffset)*i/13;
			var text = document.createElement("text");
			text.setAttribute("x", x);
			text.setAttribute("y", "95%");
			text.setAttribute("class", (i%2)?"odd":"even");
			text.setAttribute("text-anchor", "middle");
			text.setAttribute("alignment-baseline", "text-before-edge");
			text.innerHTML = timestring(firstday + i * 86400000,true,false,false);
			group.appendChild(text);
			var ln = document.createElement("line");
			ln.setAttribute("class", "vline");
			ln.setAttribute("x1", x);
			ln.setAttribute("x2", x);
			ln.setAttribute("y1", "5%");
			ln.setAttribute("y2", "95%");
			ln.setAttribute("style", "stroke:rgb(" + (i==6?255:0) + ",0,0);stroke-width:" + (i?1:2));
			svg.appendChild(ln);
		}
		svg.appendChild(group);
		
		var group2 = document.createElement("g");
		for (var i = 1; i <= 52; i++){
			var path = document.createElement("path");
			var temppath = "M " + xoffset + " " + 500 * 0.95 + " ";
			var temppath2 = "M 0 0.95 ";
			var d = data[i][k].data;
			for (var a = 0; a < d.length; a++){
				var add = "L ";
				add += xoffset + (parsetime(d[a].summaryTime) - firstday) * (ow * 0.95 - xoffset) / (86400000 * 13) + " "; //x
				add += 500 * (0.05 + 0.9 * (1 - d[a].score / maxscore)) + " "; //y
				temppath += add;
				temppath2 += "L " + ((parsetime(d[a].summaryTime) - firstday) / (86400000 * 13)) + " " + (0.05 + 0.9 * (1 - d[a].score / maxscore)) + " ";
			}
			path.setAttribute("d", temppath);
			data[i][k].path = temppath2;
			path.setAttribute("stroke", imgclr[i-1]);
			path.setAttribute("fill", "none");
			group2.appendChild(path);
		}
		group2.setAttribute("class", "alllines");
		svg.appendChild(group2);
		
		document.getElementById("table6").appendChild(svg);
		display(6,0);
	}
	//legend
	var lg = "<div style='width:100%'>";
	for (var i = 1; i <= 52; i++){
		lg += "<span style='display: inline-block;'><span style='width:20px;height:20px;background-color:" + imgclr[i-1] + ";border: 1px solid black;display: inline-block;'></span>" + names[i-1] + "</span> ";
	}
	lg += "</div>";
	document.getElementById("table6").innerHTML += lg; //load svg also					
	
	document.getElementById("loading").innerHTML = "";
	display(0);
	disable(false);
}

window.addEventListener('resize', function(){
	var ow = document.body.offsetWidth;
	var sv = document.getElementsByTagName("svg");
	for (var s = 0; s < sv.length; s++){
		var xoffset = +sv[s].getAttribute("xoffset");
		var fk = sv[s].getElementsByClassName("x-label")[0];
		var vl = sv[s].getElementsByClassName("vline");
		var ts = fk.getElementsByTagName("text");
		for (var i = 0; i <= 13; i++){
			var x = xoffset + (ow*0.95 - xoffset)*i/13;
			ts[i].setAttribute("x", x);
			vl[i].setAttribute("x1", x);
			vl[i].setAttribute("x2", x);
		}
	}
	var sv2 = document.getElementById("table6").getElementsByTagName("svg");
	for (var s = 0; s < sv2.length; s++){
		var xoffset = +sv2[s].getAttribute("xoffset");
		var al = sv2[s].getElementsByClassName("alllines")[0].getElementsByTagName("path");
		for (var i = 1; i <= 52; i++){
			var temppath2 = data[i][s].path.split(" ");
			for (var m = 1; m < temppath2.length; m+=3){
				temppath2[m] *= (ow * 0.95 - xoffset);
				temppath2[m] += xoffset;
				temppath2[m+1] *= 500;
			}
			al[i-1].setAttribute("d", temppath2.join(" "));
		}
	}
})

function fetch(){
	document.getElementById("loading").innerHTML = "読込中 Loading ... " + ready + "/52";
	var p2 = princess2();
	var p1 = princesshash("/mltd/v1/events/92/rankings/logs/idolPoint/" + ready + "/" + query + ":prettyPrint,false:" + navigator.userAgent.replace(/ +\(.*?\)/g, '') + ":" + p2 + keyword);
	client.get("https://api.matsurihi.me/mltd/v1/events/92/rankings/logs/idolPoint/" + ready + "/" + query + "?prettyPrint=false&princessValue1=" + p1 + "&princessValue2=" + p2,function(content) {
		data[ready] = JSON.parse(content);
		ready++;
		if (ready == 53) {
			finished();
			return;
		}
		setTimeout(fetch,1);
	},function(){setTimeout(fetch,1)});
}

function refresh(){
	selector = [];
	if (mode == 1){
		var checkboxes = document.getElementsByName("show");
		for (var i = 0; i < checkboxes.length; i++){
			if (checkboxes[i].checked) selector.push([1,2,3,4,5,6,7,8,9,10,50,100,500,1000][i]);
		}
	} else if (mode == 2){
		var lines = document.getElementById("custom").value.trim().split("\n");
		var invalidnum = [];
		for (var i = 0; i < lines.length; i++){
			if (isNaN(lines[i]) || (+lines[i]) <= 0 || (+lines[i]) > 1000) {invalidnum.push(lines[i]);} else {selector.push(+lines[i])};
		}
		if (invalidnum.length > 0){
			if (!confirm("There are invalid numbers:\n" + invalidnum.join("\n") + "\n\nValid numbers:\n" + selector.join("\n") + "\n\nContinue?")) return;
		}
	} else {
		return;
	};
	if (selector.length > 10) {alert("Please choose no more than 10 options."); return;};
	query = selector.join(",");
	data = [];
	ready = 1;
	disable(true);
	fetch();
}			

function display(num,sub){
	var displays = document.getElementsByClassName("display");
	var tables = document.getElementsByClassName("detail");
	for (var i = 0; i < displays.length; i++){
		displays[i].setAttribute("class","display" + (i==num?" selected":""))
	}
	for (var i = 0; i < tables.length; i++){
		tables[i].style.display = (i==num?"":"none");
		if ((i==num) && (sub != undefined)){
			var displayss = document.getElementsByClassName("display" + i);
			var tabless = document.getElementsByClassName("detail" + i);
			for (var ii = 0; ii < displayss.length; ii++){
				displayss[ii].setAttribute("class","display" + i + (ii==sub?" selected":""))
			}
			for (var ii = 0; ii < tabless.length; ii++){
				tabless[ii].style.display = (ii==sub?"":"none");
			}
		}
	}
}
display(0);