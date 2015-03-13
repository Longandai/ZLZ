
function attachTable()
{
	if (arguments.length<1)
		return;

	var table=arguments[0];
	document.getElementById(table).attachEvent ('onmouseover', Hilite);
	document.getElementById(table).attachEvent ('onmouseout', Restore);
	document.getElementById(table).attachEvent ('onclick', selectIt);
//	document.getElementById(table).attachEvent ('ondblclick', dblEvent);
}

var preObj=null;

/**
onmouseover�¼�����
**/
function Hilite()
{   
   if ( (event.srcElement.tagName == "TD" ||event.srcElement.tagName == "td") && event.srcElement.className!="title")
   {
	 if (event.srcElement.parentElement.noAction)
	 	return false;
	 if (preObj==null || event.srcElement.parentElement.rowIndex!=preObj.rowIndex)
     	event.srcElement.parentElement.className="onit";
	}
}
/**
onmouseout�¼�����
**/
function Restore()
{
   if ( (event.srcElement.tagName == "TD" ||event.srcElement.tagName == "td") && event.srcElement.className!="title")
   	if (preObj==null || event.srcElement.parentElement.rowIndex!=preObj.rowIndex)
     event.srcElement.parentElement.className="normal";
}
/**
ѡ��������c����
**/
function selectIt()
{
   if ( (event.srcElement.tagName == "TD" ||event.srcElement.tagName == "td") && event.srcElement.className!="title")
   {
	 if (event.srcElement.parentElement.noAction)
	 	return false;
	 if (preObj!=null)
	 	preObj.className="normal";
	 preObj=event.srcElement.parentElement;
     	preObj.className="selected";
//   	dblEvent();
	click();
   }
}
