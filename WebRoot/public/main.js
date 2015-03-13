/****************************************
 打印title页
 参数1：titleStr：标题串
 参数2：imgUrl：  标题Icon图象URL字串
 参数3：count：	  本页相对root的目录层数
****************************************/
/*
function printTitle()
{
	var imgUrl, titleStr, lay, count;
	if (arguments.length<3)
		count = 1;
	else
		count = arguments[2];

	if (arguments.length<2)
		imgUrl = "";
	else
		imgUrl = arguments[1];
	
	if (arguments.length<1)
		alert("NO title!");
	else
		titleStr = arguments[0];

	lay = "";
	for(var i=0; i<count; i++)
		lay +=  "../";
	
	document.write('<html>');
	document.write('<head>');
	document.write('<meta http-equiv="Content-Type" content="text/html; charset=gb2312">');
	document.write('<link rel="stylesheet" href="');
	document.write(lay);
	alert(lay);
	document.write('public/title.css" type="text/css">');
	document.write('</head>');
	document.write('<body class="title_body">');
	document.write('<tr><td class="title_icon" rowspan="2"><img src="');
	document.write(imgUrl);
	document.write('"></td>');
	document.write('<td class="title_text">');
	document.write(titleStr);
	document.write('</td></tr>');
	document.write('<tr><td class="title_bar">&nbsp;</td></tr></table></body></html>');
}
*/

function printTableHead()
{
	var lay, count;
	if (arguments.length!=1)
		count = 1;
	else
		count = arguments[0];
	
	lay = "";
	for(var i=0; i<count; i++)
		lay +=  "../";
	
	document.write('<table class="table_main" cellspacing="0" cellpadding="0" >');
	document.write('<tr><td width="88%"><img src="');
	document.write(lay);
	document.write('images/209.jpg" width="28" height="5"></td>');
	document.write('<td width="12%" align="right"><img src="');
	document.write(lay);
	document.write('images/209-1.jpg" width="26" height="5"></td></tr></table>');
}

function printTableFoot()
{
	var lay, count;
	if (arguments.length!=1)
		count = 1;
	else
		count = arguments[0];
	
	lay = "";
	for(var i=0; i<count; i++)
		lay +=  "../";
	
	document.write('<table class="table_main" cellspacing="0" cellpadding="0" >');
	document.write('<tr><td width="88%"><img src="');
	document.write(lay);
	document.write('images/209-2.jpg" width="28" height="5"></td>');
	document.write('<td width="12%" align="right"><img src="');
	document.write(lay);
	document.write('images/209-3.jpg" width="26" height="5"></td></tr></table>');
}

function dropIt()
{
    var iHotKey=40;
    var oInput,oImg;
    oInput=event.srcElement;
    if (event.keyCode==iHotKey || event.which==iHotKey)
    {
        if (oInput!=null)
        {
            oImg=document.getElementById("img"+oInput.name);
            if(oImg!=null)
            {
                oImg.onclick();
            }
        }
    }
}

document.getElementById=convertIDtoNames;
function convertIDtoNames(DateType)
{
	return document.getElementsByName(DateType)[0];
}