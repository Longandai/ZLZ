var msg=new Array();

msg[1]="�����ɹ���ɣ�";
msg[3]="�����г��ִ���������һ�Ρ�\n�������⣬�������Ա��ϵ��";

/*���ݵ�ǰ�Ĳ��������������Ӧ����ʾ��Ϣ*/
function showMessage(actionResult){
	if (actionResult==null || actionResult==0)//δ�����κβ���
		return;
	if (actionResult==1)
        {
	  		alert(msg[actionResult]);
            parent.frames("UserListFrame").location.reload();
        }
	else
          alert(msg[actionResult]);
}