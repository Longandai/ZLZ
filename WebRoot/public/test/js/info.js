var msg=new Array();

msg[1]="操作成功完成！";
msg[3]="操作中出现错误，请重试一次。\n如有问题，请与管理员联系。";

/*根据当前的操作结果，作出相应的提示信息*/
function showMessage(actionResult){
	if (actionResult==null || actionResult==0)//未进行任何操作
		return;
	if (actionResult==1)
        {
	  		alert(msg[actionResult]);
            parent.frames("UserListFrame").location.reload();
        }
	else
          alert(msg[actionResult]);
}