function getVal(elementName)
{
  return parent.frames("infoFrame").document.all.item("infoForm").elements[elementName].value;
}

function getObj(elementName)
{
  return parent.frames("infoFrame").document.all.item("infoForm").elements[elementName];
}
/**
*
*�û���Ϣ���ܰ�ť����ʵ��
*���ߣ�Ф��
*���ʱ�䣺2003-03-9
*/

/*ɾ����Ϣ*/
function deleteInfo()
{
	if (confirm("ɾ���������ָܻ���\n��ȷ��Ҫɾ����"))
	{
		parent.frames("infoFrame").isSubmitting=true;
		parent.frames("infoFrame").document.getElementById("action").value="delete";
		parent.frames("infoFrame").document.forms(0).submit();
	}
}

/*������Ϣ*/
function saveInfo()
{

	if (validateInfo())
	{
		parent.frames("infoFrame").isSubmitting=true;
		parent.frames("infoFrame").document.forms(0).submit();
	}
}

/*�½���Ϣ*/
function addInfo()
{
	var frm=parent.frames("infoFrame");
	clearInfo();
	frm.document.getElementById("action").value="create";
}

/*�رյ�ǰ����*/
function closeWin()
{
	top.close();
}

/*�����ǰ��Ϣ*/
function clearInfo(){
	var theForms=parent.frames("infoFrame").document.forms(0);
	for (var i=0;i<theForms.elements.length; i++)
	{
		control = theForms.elements[i];
        //���Ԫ�ر��������
		//if (control.id=="userID")
		//	continue;
		control.value="";;
	}
}
//�򿪽�ɫ�Ի���
function openRole()
{
  var url,style,userID;
  style="dialogWidth:22;dialogHeight:20;status:no;help:no";
  userID="";
  userID=parent.frames("infoFrame").document.getElementById("userID").value;
  if(check_item_null(userID))
  {
    alert("��ѡ���û�");
    return false;
  }
  url="rolesList/index.jsp?userID="+userID;
  window.showModalDialog(url,null,style);
  parent.frames("RoleListFrame").window.location.reload(true);
}
/*��֤��ǰ���ݵ���Ч��*/
function validateInfo()
{
    if(check_item_null(getVal("userID")))
    {
		alert("�û����벻��Ϊ�ա�");
		return false;//������Ч
	}
	if(check_item_null(getVal("password")))
   {
		alert("�û����벻��Ϊ��");
		return false;
	}

	if(check_item_null(getVal("userName")))
   {
		alert("�û����ֲ���Ϊ�գ����顣");
		return false;
	}
	return true;//������Ҫ��֤�����ݾ���Ч
}