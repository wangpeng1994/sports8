window.onload = function() {
	var speed = 10; //数字越大速度越慢
	var tab = document.getElementById("photo");
	var tab1 = document.getElementById("demo1");
	var tab2 = document.getElementById("demo2");
	tab2.innerHTML = tab1.innerHTML;

	function Marquee() {
		if (tab2.offsetWidth - tab.scrollLeft <= 0) //offsetWidth是对象的可见宽度
			tab.scrollLeft -= tab1.offsetWidth  //scrollWidth是对象的实际内容宽度，不包括边线宽度
		else {
			tab.scrollLeft++;
		}
	}
	var MyMar = setInterval(Marquee, speed);
	tab.onmouseover = function() {   //鼠标移入暂停
		clearInterval(MyMar)
	};
	tab.onmouseout = function() {	//鼠标移出继续
		MyMar = setInterval(Marquee, speed)
	};
}