/*
*�ر�ҳ��ʱȷ���Ƿ��ҳ����й�������
*������й�������ʾ�û����б��档
*���ߣ�Ф��
*���ʱ�䣺2002-11-25
*/
/*������ϵ���������controlValue.js*/
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
		event.returnValue="����ǰ�������޸Ļ�û���棡\n����˳��������Ĳ�������ʧ��";
	}
}

/*
*�жϵ�ǰҳ�������Ƿ��޸Ĺ�
*����޸ģ�����true�����򷵻�false
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