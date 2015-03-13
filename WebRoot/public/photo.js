var imgheight;
window.screen.width>800 ? imgheight=100:imgheight=120;
var rlzytop=233;
var rlzyleft=140;

function loadImage()
{
	if (navigator.appName == "Netscape")
	{
		document.getElementById("imgarea").pageY=pageYOffset+window.innerHeight-imgheight-rlzytop;
		document.getElementById("imgarea").pageX=+window.innerWidth-107;
		moveImage();
	}else{
		document.getElementById("imgarea").style.top=document.body.scrollTop+document.body.offsetHeight-imgheight-rlzytop;
		document.getElementById("imgarea").style.left=document.body.offsetWidth-107;
		moveImage();
	}
}

function moveImage()
{
 	if(navigator.appName == "Netscape")
 	{
 		document.getElementById("imgarea").top=pageYOffset+window.innerHeight-imgheight-rlzytop;
 		document.getElementById("imgarea").left=pageXOffset+window.innerWidth-rlzyleft;
 		setTimeout("moveImage();",50);
 	}else{
 		document.getElementById("imgarea").style.top=document.body.scrollTop+document.body.offsetHeight-imgheight-rlzytop;
 		document.getElementById("imgarea").style.left=document.body.scrollLeft+document.body.offsetWidth-rlzyleft;
 		setTimeout("moveImage();",50);
 	}
}

if (navigator.appName == "Netscape")
{
	document.write("<layer id='imgarea' name='imgarea' top=50 width=80 height=80><img border='0' id='empPhoto' name='empPhoto' src='' width='80' height='80'></layer>");
	loadImage();
}else{
	document.write("<div id='imgarea' name='imgarea' style='position: absolute;width:80;top:50;left:5;visibility: visible;z-index: 1'><img border='0' id='empPhoto' name='empPhoto' src='' onerror=\"this.style.display='none';\" width='96' height='128'></div>");
	loadImage();
}