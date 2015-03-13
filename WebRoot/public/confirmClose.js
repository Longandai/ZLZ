/*
*关闭页面时确认是否对页面进行过操作，
*如果进行过，则提示用户进行保存。
*作者：肖建
*完成时间：2002-11-25
*/
/*依赖关系，必须包含controlValue.js*/
var isSubmitting = false;
function isClosing()
{
	if (isSubmitting)
	{
		var theForms=document.getElementsByTagName("FORM");
		if (theForms==null || theForms.length==0)
			return false;
		theForms=theForms[0];
		for (var i=0;i<theForms.elements.length; i++)
		{
			control = theForms.elements[i];
			control.readonly=1;
		}
		return false;
	}

	if (dataIsModified())
	{
	//	alert( document.parentWindow.parent.parentWindow.id);
		event.returnValue="您当前所作的修改还没保存！\n如果退出，所作的操作将丢失。";
	}
}

/*
*判断当前页面内容是否修改过
*如果修改，返回true，否则返回false
*/
function dataIsModified()
{

	var control;
	var oForms=document.getElementsByTagName("FORM");
	if (oForms==null || oForms.length==0)
		return false;
	var oForm=oForms[0];

	for (var i=0;i<oForm.elements.length; i++)
	{
		control = oForm.elements[i];
		if (control.type!="hidden" && control.type!="button" && control.type!="submit" && control.type!="reset")
		{
			if (getControlDefaultValue(control)!=getControlValue(control))
				return true;
		}
	}
	return false;
}
window.onbeforeunload=function(){isClosing()};