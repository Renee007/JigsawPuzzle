//定义图片位置
var pic_Style = [
	[308, 308],
	[0, 0],
	[154, 0],
	[308, 0],
	[0, 154],
	[154, 154],
	[308, 154],
	[0, 308],
	[154, 308]
]

onload = function() {


	for (var j = 0; j < pic_Style.length; j++) {
		var k = 0;
		document.getElementById("pic" + j).style.left = pic_Style[j][k];
		document.getElementById("pic" + j).style.top = pic_Style[j][k + 1];
	}

	//点击图片跳到judge_Position
	for (var i = 1; i < 9; i++) {
		document.getElementById("pic" + i).onclick = function(e) {
			judge_Position(e.currentTarget);
		}
	}
	
	document.getElementById("judge").onclick = judge_FinalPosition;
	document.getElementById("change").mousedown = judge_Posibility;


	//判断图片是否可以移动并移动
	function judge_Position(num) {
		var _num = num.getBoundingClientRect();
		var _blank = pic0.getBoundingClientRect();
		if ((_num.left == _blank.left && Math.abs(_num.top - _blank.top) == 154) ||
			(_num.top == _blank.top && Math.abs(_num.left - _blank.left) == 154)) {
			const nump = document.getElementById(num.id);
			const pic0 = document.getElementById("pic0");
			var NUMPTop = parseFloat(document.getElementById(num.id).style.top);
			var PIC0Top = parseFloat(document.getElementById("pic0").style.top);
			var NUMPLEFT = parseFloat(document.getElementById(num.id).style.left);
			var PIC0LEFT = parseFloat(document.getElementById("pic0").style.left);
			if (nump.style.left == pic0.style.left) {
				var sh = setInterval(changeTop, 15, num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT);
				setTimeout(clearInterval, 1000, sh);
			} else if (nump.style.top == pic0.style.top) {
				var sh;
				sh = setInterval(changeLeft, 15, num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT);
				setTimeout(clearInterval, 1000, sh);
			}

		}
	}

	// function toRigntPosition(num) {
	// 	var _num = num.getBoundingClientRect();
	// 	var _blank = pic0.getBoundingClientRect();
	// 	if ((_num.left == _blank.left && Math.abs(_num.top - _blank.top) == 154) ||
	// 		(_num.top == _blank.top && Math.abs(_num.left - _blank.left) == 154)) {
	// 		var NUMPTop = parseFloat(document.getElementById(num.id).style.top);
	// 		var PIC0Top = parseFloat(document.getElementById("pic0").style.top);
	// 		var NUMPLEFT = parseFloat(document.getElementById(num.id).style.left);
	// 		var PIC0LEFT = parseFloat(document.getElementById("pic0").style.left);
	// 		var position = new Array(NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT);
	// 		for (var i = 0; i < position.length; i++) {
	// 			if (position[i] < 100) position[i] = 0+"px";
	// 			else if (position[i] < 200) position[i] = 154+"px";
	// 			else position[i] = 308+"px";
	// 		}
	// 		// document.getElementById(num.id).style.top = NUMPTop + "px";
	// 		// document.getElementById("pic0").style.top = PIC0Top + "px";
	// 		// document.getElementById(num.id).style.left = NUMPLEFT + "px";
	// 		// document.getElementById("pic0").style.left = PIC0LEFT + "px";

	// 	}
	// }


	//移动点击的图片与空白图片的位置


	function changeTop(num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT) {
		var nump = document.getElementById(num.id);
		var pic0 = document.getElementById("pic0");
		var abs=Math.abs(parseFloat(document.getElementById(num.id).style.top)-
			parseFloat(document.getElementById(pic0.id).style.top));
		const DISTANCE = 154 / 50;
		if (NUMPTop > PIC0Top&&abs<154||(parseFloat(nump.style.top) -parseFloat(pic0.style.top)==154)) {
			nump.style.top = (parseFloat(nump.style.top) - DISTANCE) + "px";
			pic0.style.top = (parseFloat(pic0.style.top) + DISTANCE) + "px";
		} else if(NUMPTop < PIC0Top&&abs<154||(parseFloat(pic0.style.top) - parseFloat(nump.style.top)==154)) {
			nump.style.top = (parseFloat(nump.style.top) + DISTANCE) + "px";
			pic0.style.top = (parseFloat(pic0.style.top) - DISTANCE) + "px";
		}

	}

	function changeLeft(num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT) {
		var nump = document.getElementById(num.id);
		var pic0 = document.getElementById("pic0");
		const DISTANCE = 154 / 50;
		var abs=Math.abs(parseFloat(document.getElementById(num.id).style.left)-
			parseFloat(document.getElementById(pic0.id).style.left));
		if (NUMPLEFT > PIC0LEFT&&abs<154||(parseFloat(nump.style.left) -parseFloat(pic0.style.left)==154)) {
			nump.style.left = (parseFloat(nump.style.left) - DISTANCE) + "px";
			pic0.style.left = (parseFloat(pic0.style.left) + DISTANCE) + "px";
		} else if(NUMPLEFT < PIC0LEFT&&abs<154||(parseFloat(pic0.style.left) - parseFloat(nump.style.left)==154)) {
			nump.style.left = (parseFloat(nump.style.left) + DISTANCE) + "px";
			pic0.style.left = (parseFloat(pic0.style.left) - DISTANCE) + "px";
		}
	}
}


//判断图片是否回到原位
function judge_FinalPosition() {

	for (var j = 0; j < pic_Style.length; j++) {
		var k = 0;
		if (
			document.getElementById("pic" + j).style.left != pic_Style[j][k] + "px" ||
			document.getElementById("pic" + j).style.top != pic_Style[j][k + 1] + "px"
		) {
			alert("please check!");
			return false;
			//break;
		}
	}
	alert("success!");

}


//
/*var ocssRules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
var style1 = ocssRules[0];
var style2 = ocssRules[1];
window.alert(style1.style.left);
window.alert(style2.style.left);*/



//判断乱序后的图片时候能拼回原图
function judge_Posibility() {
	var pic_Id = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);

	while (totalNum % 2 != 0 && totalNum != 0) {
		pic_Id.sort(function(a, b) {
			return Math.random() - .5
		});
		var totalNum = 0;
		var number1 = pic_Id;
		var number2 = pic_Id;
		for (var i = 0; i < number1.length; i++) {
			for (var j = 0; j < number2.length; j++) {
				if ((number1[i] - number2[j]) * (i - j) < 0)

					totalNum = totalNum + 1;
			}
		}
	}
	var i = 0;
	var j = 0;
	var k = 0;
	while (i < pic_Id.length) {
		var x = document.getElementById("pic" + pic_Id[i])
		x.style.left = pic_Style[j][k];
		x.style.top = pic_Style[j][k + 1];
		i++;
		j++;
	}
}
//移动效果