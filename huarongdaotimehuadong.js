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
	document.getElementById("change").onclick = judge_Posibility;


	//判断图片是否可以移动并移动
	function judge_Position(num) {
		var _num = num.getBoundingClientRect();
		var _blank = pic0.getBoundingClientRect();
		if ((_num.left == _blank.left && Math.abs(_num.top - _blank.top) == 154) ||
			(_num.top == _blank.top && Math.abs(_num.left - _blank.left) == 154))
			 
			var sh;
			sh=setInterval(change_position,1,num);
			setTimeout(clearInterval(sh),1000);
			setInterval(change_position,1,num);
	}
	//移动点击的图片与空白图片的位置
	function change_position(num) {
		var nump = document.getElementById(num.id);
		var pic0 = document.getElementById("pic0");
		var left = "";
		var top="";
		left= parseFloat(nump.style.left);
		top=parseFloat(nump.style.top);
		nump.style.left=(parseFloat(nump.style.left)+(parseFloat(pic0.style.left)-parseFloat(nump.style.left))/1000)+"px";
		pic0.style.left = (parseFloat(pic0.style.left)+(left-parseFloat(pic0.style.left))/1000)+"px";
		nump.style.top=(parseFloat(nump.style.top)+ (parseFloat(pic0.style.top)-parseFloat(nump.style.top))/1000)+"px";
		pic0.style.top =(parseFloat(pic0.style.top) + (top-parseFloat(pic0.style.top ))/1000)+"px";
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
	
}