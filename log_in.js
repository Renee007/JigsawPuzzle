onload = function() {
	var user_Name = "user_Name";
	var input_Psw1 = "input_Psw1";
	var input_Psw = "input_Psw";
	var Global_RandomNum;

	document.getElementById(input_Psw).onfocus = function() {
		document.getElementById(input_Psw1).style.display = "inline";
		document.getElementById(input_Psw).style.display = "none";
	}
	document.getElementById(input_Psw1).onblur = function() {
		var psw1 = document.getElementById(input_Psw1);
		var psw = document.getElementById(input_Psw);
		if (psw1.value == "")
			psw1.style.display = "none";
		psw.style.display = "inline";
	}
	document.getElementById("submit").onclick = function() {
		var uN = document.getElementById(user_Name);
		var iP = document.getElementById(input_Psw1);
		var iV = document.getElementById("input_Verify");
		if (iV.value != Global_RandomNum)
			document.getElementById("notice").innerHTML = "验证码错误！"
		else if (uN.value != "aaa" || iP.value != "123")
			document.getElementById("notice").innerHTML = "用户名或密码错误！"
		else window.location.href = "main.html";
	}
	document.getElementById("get_Num").onclick = function() {
		Global_RandomNum = getRandom();
		document.getElementById("display_Num").innerHTML = Global_RandomNum;
	}
}

function getRandom()
{
	var n = Math.random();
	var num = Math.round(n + n * 10 + n * 100 + n * 1000);
	return num;
}