/**
*通用函数
*作者：王建刚
*完成时间：2001-11-01
*
**/

//为防止多次转换（%->%25），加bForce参数和isConverted函数，若bForce不真则判断一下
//增加数字0-9为保留字符
function getUTF8Format(chsStr, bForce)
{
	//--------
	var hexToken = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
	function isReserve( code ) {
		flag = false;
		if( code > 64 && code < 91 ) flag = true;	//A-Z
		else if ( code > 96 && code < 123 ) flag = true;	//a-z
		else if ( code > 47 && code <58 ) flag = true;		//0-9
		else if ( code == 46 || code == 47 || code == 58 || code == 63 || code == 64) flag = true;	//./:?@
		return flag;
	}
	var strHexToken = hexToken.toString();
	function isConverted( str, idx ) {
		if ( bForce ) return false;
		if (str.charAt(idx)=='%') {
			if ( (strHexToken.indexOf(str.charAt(idx+1)) != -1) && (strHexToken.indexOf(str.charAt(idx+2)) != -1) )
				return true;
		}
		return false;
	}
	//----------
	var result = "";
	//if( typeof(encodeURI) == "function" ) {
	//	return encodeURI( chsStr );
	//}
	for( var i = 0; i < chsStr.length; i++ ) {
		var code = chsStr.charCodeAt( i );
		if( isReserve( code ) ) {
			result += chsStr.charAt(i);
		} else if ( isConverted(chsStr,i) ) {
			result += chsStr.substr(i, 3);
			i += 2;
		} else if ( code < 128 ) {
			result += '%' + hexToken[Math.floor( code / 16)] + hexToken[code % 16];
		} else if ( code < 2048 ) {
			var partA = Math.floor(code / 64);
			var partB = code % 64;
			result += '%' + hexToken[12 + Math.floor(partA / 16)] + hexToken[partA % 16];
			result += '%' + hexToken[8 + Math.floor(partB / 16)] + hexToken[partB % 16];
		} else {
			var partA = Math.floor(code / 4096);
			var partB = ( Math.floor(code / 64) ) % 64;
			var partC = code % 64;
			result += '%E' + hexToken[partA];
			result += '%' + hexToken[8 + Math.floor(partB / 16)] + hexToken[partB % 16];
			result += '%' + hexToken[8 + Math.floor(partC / 16)] + hexToken[partC % 16];
		}
	}
	return result;
}

//将当前的数据的前后空格取消
function trim(theData)
{
	var checkStr = theData;
	if (checkStr==null)
		return ;
	if (checkStr=="")
		return "";
	var theStrLength=0;
	while (checkStr.charAt(0)==" ")
		checkStr=checkStr.substring(1,checkStr.length);
	theStrLength=checkStr.length;
	while (checkStr.charAt(theStrLength-1)==" ")
	{
		checkStr=checkStr.substring(0,checkStr.length-1);
		theStrLength=checkStr.length
	}	
	return checkStr;
}
//判断当前数据是否为空
function isNull(theData)
{
	if (theData==null || trim(theData)=="")
		return true;
	else
		return false;
}

//实数型元素的焦点离开时需要判断输入值的格式
function checkNumber(theObjName,theData,xLen,yLen)
{
	if(isNumber(theData))
	{
		var rtnVal = check_number_point(theData,xLen,yLen);
		if(rtnVal != "0")
		{
			window.alert("数据格式错误！");
			window.document.getElementById(theObjName).focus();
		}else
			return(true);
	}
	else
	{	
		window.alert("数据格式错误！");
		window.document.getElementById(theObjName).focus();
	}
}

//判断当前数据是否为有效数字
function isNumber(theData)
{
  var checkOK = "0123456789-.";
  var checkStr = trim(theData);
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  if (checkStr=="")
  	return true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
    return false;
  if (decPoints > 1) 
    return false;
    
  return true;
}

/*
	判断当前数据是否为大于等于零的有效数字
	现在用于判断日期类型元素的值是否符合要求
 */
function isNumber2(theData)
{
  var checkOK = "0123456789.";
  var checkStr = trim(theData);
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  if (checkStr=="")
  	return true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
    return false;

  return true;
}

//整数型元素的焦点离开时需要判断输入值的格式
function checkInt(theObjName,theData,len)
{
	if(isInt(theData))
	{
		var rtnVal = check_number_point(theData,len,"0");
		if(rtnVal != "0")
		{
			window.alert("数据格式错误！");
			window.document.getElementById(theObjName).focus();
		}else
			return(true);
	}
	else
	{	
		window.alert("数据格式错误！");
		window.document.getElementById(theObjName).focus();
	}
}

//正整数型元素的焦点离开时需要判断输入值的格式
function checkInt2(theObjName,theData,len)
{
	if(isInt2(theData))
	{
		var rtnVal = check_number_point(theData,len,"0");
		if(rtnVal != "0")
		{
			window.alert("数据格式错误！");
			window.document.getElementById(theObjName).focus();
		}else
			return(true);
	}
	else
	{	
		window.alert("数据格式错误！");
		window.document.getElementById(theObjName).focus();
	}
}

/*判断当前数据是否为有效数字*/
function isInt(theData)
{
  var checkOK = "0123456789-";
  var checkStr = trim(theData);
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  if (checkStr=="")
  	return true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allValid = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
    return false;

  return true;
}

//判断当前数据是否为大于等于零的有效数字
function isInt2(theData)
{
  var checkOK = "0123456789";
  var checkStr = trim(theData);
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  if (checkStr=="")
  	return true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allValid = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
    return false;
    
  return true;
}

//检查时间格式数据，标准格式：HH:MM
function checkTime(objValue)
{
	objValue = trim(objValue);
	var allValid = true;
	if(objValue == "")
		allValid = true;
	//判断是否有:分隔符
	if(objValue.indexOf(":") == -1)
	{
		allValid = false;
		return allValid;
	}
	//将:两边的内容取出分别判断
	var leftStr = objValue.substring(0, objValue.indexOf(":"));
	var rightStr = objValue.substring(objValue.indexOf(":")+1, objValue.length);
	//判断是否包含非数字字符
	if(!isInt2(leftStr) || !isInt2(rightStr))
	{
		allValid = false;
		return allValid;
	}
	//判断小时是否在1与12之间
	if(parseInt(leftStr) >= 1 && parseInt(leftStr) <= 12)
		allValid = true;
	else
	{
		allValid = false;
		return allValid;
	}
	//判断分钟是否在0与59之间
	if(parseInt(rightStr) >= 0 && parseInt(rightStr) <= 59)
		allValid = true;
	else
	{
		allValid = false;
		return allValid;
	}
	
	return allValid;
}



//判断一个元素的值是否在最大值与最小值之间
function chkCheck(theObjName,dataType,theData,maxValue,minValue)
{
	if(theData == "") return(true);
	var errorMsg = "输入值必须在最大值与最小值之间！";
	if(dataType == "DATE")
	{
		if(maxValue != "" && minValue != "")
			{if(theData <= maxValue && theData >= minValue) return(true);}
		else
		{
			if(maxValue != "")
				{if(theData <= maxValue) return(true);}
			else if(minValue != "")
				{if(theData >= minValue) return(true);}
		}
	}else if(dataType == "FLOAT")
	{
		if(maxValue != "" && minValue != "")
			{if(parseFloat(theData) <= parseFloat(maxValue) && parseFloat(theData) >= parseFloat(minValue)) return(true);}
		else
		{
			if(maxValue != "")
				{if(parseFloat(theData) <= parseFloat(maxValue)) return(true);}
			else if(minValue != "")
				{if(parseFloat(theData) >= parseFloat(minValue)) return(true);}
		}
	}else if(dataType == "INT")
	{
		if(maxValue != "" && minValue != "")
			{if(parseInt(theData) <= parseInt(maxValue) && parseInt(theData) >= parseInt(minValue)) return(true);}
		else
		{
			if(maxValue != "")
				{if(parseInt(theData) <= parseInt(maxValue)) return(true);}
			else if(minValue != "")
				{if(parseInt(theData) >= parseInt(minValue)) return(true);}
		}
	}
	alert(errorMsg);
	window.document.getElementById(theObjName).focus();
}

//将在theData中的theOrginChar用theReplaceChar替换
function replaceChar(theData,theOrginChar,theReplaceChar)
 {
 	if (theData=="" || theData==null)
 		return theData;
 	while (theData.indexOf(theOrginChar)!=-1)
 	{
 		theData=theData.replace(theOrginChar,theReplaceChar); 
 	}
 
 	return theData; 	
 }
 
 //打开模态对话框
 function showDialog(url,width,height)
 {
	var style="help:no;status:no;dialogWidth:"+width+";dialogHeight:"+height;
	return window.showModalDialog(url,null,style);
 }
 
 //打开一般窗口
 function show(url,width,height,top,left)
 {
 	;
}

//对控件进行赋值
function setValue(strObjName,theValue,strFrameName)
{
	var oObj=getObjectByName(strObjName,strFrameName);
	if (oObj==null)
		return;
	oObj.value=theValue;
}


//对控件的可用属性进行设置
function setDisabled(strObjName,iValue,strFrameName)
{
	var oObj=getObjectByName(strObjName,strFrameName);
	if (oObj==null)
		return;
	
	oObj.disabled=iValue;
	
}

//根据控件名称获取控件
function getObjectByName(strObjName,strFrameName)
{
	 var doc=null;
	 
	 if (strFrameName==null || strFrameName=="")
	 	doc=window.document;
	 else
	 	doc=parent.frames(strFrameName).document;
	 
	 var theDataObj=doc.getElementById(DateType);
	 if (theDataObj==null)
	 	 theDataObj=doc.getElementsByName(DateType)[0];
	
	 if (theDataObj==null)
	   return null;
	 if (theDataObj.className=="ReadOnly")
	 	 return null;
	 	 
	 return theDataObj;
	 	
}

//日期元素的焦点离开时需要判断输入值的格式
function checkDate(theObjName,theDate)
{
	if(isDateStr(theDate))
		return(true);
	else
	{	
		window.alert("日期格式错误！");
		window.document.getElementById(theObjName).focus();
	}
}

//检查日期格式
function isDateStr(theDate)
{
	var checkDate = trim(theDate);
	if(checkDate == "")
		return(true);
	if(isNumber2(checkDate))
	{
		if(checkDate.indexOf(".") != -1)
		{
			var aDate = checkDate.split('.');
			if((aDate.length == 2 ))
			{
				if(aDate[0] == "" || aDate[1] == "")
					return(false);
				if(isDate(aDate[0], aDate[1], "01"))
					return(true);
				return(false);
			}	
			if(aDate.length == 3 )
			{
				if(aDate[0] == "" || aDate[1] == "" || aDate[1] == "")
					return(false);
				if(isDate(aDate[0], aDate[1], aDate[2]))
					return(true);
				return(false);
			}
		} else
		{
				if(checkDate.length != 4)
					return(false);
				if(isDate(checkDate, "01", "01"))
					return(true);
				return(false);
		}

/*
aDate = sDate.split('/');
if(aDate.length == 3 )
{
if(isDate(aDate[0], aDate[1], aDate[2])) return(true);
return(false);
}
*/
		return(false);
	} else
	{
		return(false);
	}
}

function isDate(strYear,strMonth,strDay)
{
	if (typeof(strYear)!='string' || typeof(strMonth)!='string' || typeof(strDay)!='string')
	{
	//reportError(L_errFuncParaTypeMissMatch_ErrMsg,"isDate")
		return false;
	}
	var iYear = strYear * 1;
	var iMonth = strMonth * 1;
	var iDay = strDay * 1;
	if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay))
	{
		return false;
	}
	if (iYear<1900 || iYear>9999)
		return false;
	if (iMonth<1 || iMonth>12)
		return false;
	if (iDay<1 || iDay>31)
		return false;
	var strDate = iMonth+"/"+iDay+"/"+iYear;
	var objDate = new Date(strDate);
	iYear = objDate.getFullYear();
	iMonth = objDate.getMonth()+1;
	iDay = objDate.getDate();
	if (strDate!=(iMonth+"/"+iDay+"/"+iYear))
		return false;
	return true; 
}

//该方法现在没有用到
function checkCodeValue(theObjName,theData)
{
	var codeCnItem = theObjName;
	var codeItem = theObjName.substring(0,theObjName.length-2);
	if(theData == "")
		window.document.getElementById(codeItem).value = "";
}

/*
	打开代码树有两种方式：一种是通过表名与列名打开代码树；一种是直接通过代码表名打开代码树
 */
function getCodeTree(tableName,colName,formName,itemName,itemCode,reqPath,selType)
{
	var treeStyle = "height=360,width=300,scrollbars=yes,top=50,left=650";
	//var treeStyle = "height=360,width=300,scrollbars=yes,top=50,left=650,toolbar=yes,menubar=yes,resizable";
	var treeURL = reqPath+"public/codeTree/index.jsp?tableName="+tableName+"&colName="+colName+"&formName="+formName+"&itemName="+itemName+"&itemCode="+itemCode+"&selType="+selType;
	windowRef = window.open(treeURL,"codeWin",treeStyle);
	windowRef.focus();
}

function getCodeTree2(codeTableName,formName,itemName,itemCode,reqPath,selType)
{
	var treeStyle = "height=360,width=300,scrollbars=yes,top=50,left=650";
	var treeURL = reqPath+"public/codeTree/index.jsp?codeTableName="+codeTableName+"&formName="+formName+"&itemName="+itemName+"&itemCode="+itemCode+"&selType="+selType;
	windowRef = window.open(treeURL,"codeWin",treeStyle);
	windowRef.focus();
}

//去掉textarea元素里的特殊字符
function chkTextArea(theData)
{
	var validStr = "";
	var checkStr = theData;
	//alert(checkStr);
  	for (i = 0; i < checkStr.length; i++)
  	{
  		ch = checkStr.charAt(i);
  		if(ch == "\b")
  		{
  			//alert("退格字符!");
  			ch = "";
  		} else if(ch == "\f")
  		{
  			//alert("进纸字符!");
  			ch = "";
  		} else if(ch == "\t")
  		{
  			//alert("Tab字符!");
  			//ch = "&nbsp;&nbsp;&nbsp;&nbsp;";
  		} else if(ch == "\n")
  		{
  			//alert("换行字符!");
  			//ch = "\\n";
  		} else if(ch == "\r")
  		{
  			//alert("回车字符!");
  			//ch = "\\t";
  		} else if(ch == "\'")
  		{
  			//alert("单引号字符!");
  			ch = "“";
  		} else if(ch == "\"")
  		{
  			//alert("双引号字符!");
  			ch = "“";
  		} else if(ch == "\\")
  		{
  			//alert("反斜杠字符!");
  			ch = "/";
  		} else if(ch == "%")
  		{
  			//alert("百分号字符!");
  			ch = "";
  		} else if(ch == " ")
  		{
  			//alert("空格字符!");
  			//ch = "&nbsp;";
  		} else
  		{
  			//alert("正常字符!");
  		}
  		validStr = validStr + ch;
  	}
	//var chkLen = validStr.length;
	//if(chkLen >= 450)
		//validStr = validStr.substring(0, 450);
	return validStr;
}

//设置列表字段
function setListItem(reqPath)
{
  var url,style;
  style="dialogWidth:27;dialogHeight:24;status:no;help:no";
  //style="width=440,height=350,status=no,help=no,top=200,left=200,toolbar=yes,menubar=yes,resizable";
  url=reqPath+"public/setList/index.jsp";
  //window.open(url,"listWin",style);
  var rtnVal = window.showModalDialog(url,"listWin",style);
  if(rtnVal == "true")
  {
  	parent.frames("listFrm").window.location.reload(true);
  }
}

//设置排序字段
function setOrderItem(reqPath)
{
  var url,style;
  style="dialogWidth:30;dialogHeight:24;status:no;help:no";
  //style="width=460,height=350,status=no,help=no,top=200,left=200,toolbar=yes,menubar=yes,resizable";
  url=reqPath+"public/setOrder/index.jsp";
  //window.open(url,"orderWin",style);
  var rtnVal = window.showModalDialog(url,"orderWin",style);
  if(rtnVal == "true")
  {
  	parent.frames("listFrm").window.location.reload(true);
  }
}

//组合查询
function setQueryScheme(reqPath)
{
  var url,style;
  style="dialogWidth:40;dialogHeight:28;status:no;help:no";
  //style="width=660,height=450,status=no,help=no,top=200,left=200,toolbar=yes,menubar=yes,resizable";
  url=reqPath+"public/setQuery/index.jsp";
  //window.open(url,"queryWin",style);
  var rtnVal = window.showModalDialog(url,"queryWin",style);
  //alert(rtnVal);
  if(rtnVal != "")
  {
  	parent.frames("queryFrm").document.getElementById("queryCond").value = rtnVal;
  	parent.frames("queryFrm").document.forms(0).submit();
  }
}

//放大显示textarea元素里内容
function zoomOut(thevalue, thepath)
{
  	var theURL,theStyle;
  	thevalue = chkTextArea(thevalue);
  	theStyle = "dialogWidth:39;dialogHeight:32;status:no;help:no";
  	//style = "width=550,height=450,status=no,help=no,top=200,left=200,toolbar=yes,menubar=yes,resizable";
  	theURL = thepath+"public/zoomOut.jsp?content="+getUTF8Format(thevalue);
  	//windowRef = window.open(theURL,"zoomWin",theStyle);
  	//windowRef.focus();
  	window.showModalDialog(theURL,"zoomWin",theStyle);
}