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
*用户信息功能按钮功能实现
*作者：肖建
*完成时间：2003-03-9
*/

/*删除信息*/
function deleteInfo()
{
	if (confirm("删除操作不能恢复。\n您确定要删除吗？"))
	{
		parent.frames("infoFrame").isSubmitting=true;
		parent.frames("infoFrame").document.getElementById("action").value="delete";
		parent.frames("infoFrame").document.forms(0).submit();
	}
}

/*保存信息*/
function saveInfo()
{

	if (validateInfo())
	{
		parent.frames("infoFrame").isSubmitting=true;
		parent.frames("infoFrame").document.forms(0).submit();
	}
}

/*新建信息*/
function addInfo()
{
	var frm=parent.frames("infoFrame");
	clearInfo();
	frm.document.getElementById("action").value="create";
}

/*关闭当前窗口*/
function closeWin()
{
	top.close();
}

/*清除当前信息*/
function clearInfo(){
	var theForms=parent.frames("infoFrame").document.forms(0);
	for (var i=0;i<theForms.elements.length; i++)
	{
		control = theForms.elements[i];
        //如果元素被不能清除
		//if (control.id=="userID")
		//	continue;
		control.value="";;
	}
}
//打开角色对话框
function openRole()
{
  var url,style,userID;
  style="dialogWidth:22;dialogHeight:20;status:no;help:no";
  userID="";
  userID=parent.frames("infoFrame").document.getElementById("userID").value;
  if(check_item_null(userID))
  {
    alert("请选择用户");
    return false;
  }
  url="rolesList/index.jsp?userID="+userID;
  window.showModalDialog(url,null,style);
  parent.frames("RoleListFrame").window.location.reload(true);
}
/*验证当前数据的有效性*/
function validateInfo()
{
    if(check_item_null(getVal("userID")))
    {
		alert("用户代码不能为空。");
		return false;//数据无效
	}
	if(check_item_null(getVal("password")))
   {
		alert("用户密码不能为空");
		return false;
	}

	if(check_item_null(getVal("userName")))
   {
		alert("用户名字不能为空，请检查。");
		return false;
	}
	return true;//所有需要验证的数据均有效
}