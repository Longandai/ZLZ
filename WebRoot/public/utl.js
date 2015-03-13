/*************************************************************************
Rem               PROGRAM (P) Vst Software Corporation
Rem  Program:     utl.js
Rem  System:      ������Դ������Ϣϵͳ
Rem  Descripton:  ����������JAVASCRIPT
Rem
Rem
Rem  Modification History:
Rem  ----------------------------------------------------------------------
Rem     Date                By                Remarks/Reason
Rem  ----------------------------------------------------------------------
Rem    2003.10.29         BaiHaifei                 Created
Rem
Rem  Global Variables:
Rem    <variable>
Rem  <description>
Rem  Usage:
Rem  utl.js
Rem
Rem
Rem  Count: 1
Rem  *********************************************************************/


/**************************************************************************

1   	��String �������trim����         	trim()                               	��ڲ���
2  	�ж�EMAIL�ĸ�ʽ                   	IsEmail(str)                         	��ڲ���Ϊstr
3   �ж���������ڵĸ�ʽ              	check_date(intime,format)            	��ڲ���Ϊ���ں����ڸ�ʽ ��: 2001.1.1 �� 2002-02-02 ��check_date("2002-02","y")
	return: ������Ϣ�ı���������""����intime�Ϸ�

4  	�ж��·ݵ������Ŀ�Ƿ���ȷ
5  	�ж��·ݵ���Ŀ�Ƿ���ȷ
6  	�ж����ڵ���Ŀ�Ƿ���ȷ
7	�ж�����ȫ��������			check_number(num)			��������:String
8	�ж�����Ϊlen1��len2���ȵ����ִ�	check_number_length(num,len1,len2)	��������:String,int,int
9	�жϳ���С��len1�����ִ�   		check_number_maxlength(num,len1)	��������:String,int
10	�ж����븡������ 			check_number_point(num,x,y)		����:numΪString,xΪС����ǰλ��,yΪС�����λ��
11	�ж������Ŀ�Ƿ���ȷ     		check_year (year)			��������:int
12	�ж�������ַ����Ƿ�Ϊ�� 		check_item_null(num)			��������:String
13.�ж����봮ȫ������ĸ				check_c(str)
14. ������֤��			_checkSfzh(sfzh)  �Դ���ӡ���������֤Ϊ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
15. ����������		_checkSqbbh(sqbbh) ���������Ϊ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
16. ����϶����			_checkRdbh(rdbh)		���϶������ĿΪ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
17. ��鹤��֤�� 			_checkGszh(gszh)	������֤��Ϊ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
18. �Ƚ���ʼ���ڵĺϷ��ԣ�start<=end ? 		checkStartEndDate(startRQ, endRQ)
	���أ��������������""�ģ�����0�������һ�����ڸ�ʽ���Ϸ�������-1��
	����ڶ������ڸ�ʽ���Ϸ�������-2�������һ�����ڴ��ڵڶ������ڣ�����-3��
	�����һ������С�ڻ��ߵ��ڵڶ������ڣ�����1��
19. �õ���ǰ���� ��ʽ��yyyy.mm.dd
20. ������������������:endRQ - startRQ�� ���������ʽ��yyyy.mm.dd �� yyyy.m.d
**************************************************************************/

/**************************
1  ��String �������trim����
   �ص���β�Ŀո�
***************************/
/*String.prototype.trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}*/
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

/**************************
2   �ж�����������Ƿ����email�Ĺ淶
***************************/
function IsEmail(str)
{
  var email = str;
  var flag = 0 ;
  for (i=0;i<email.length;i++){
    n = email.substr(i,1);
    if (n == "@"){
      if (i==0){
        return false;
      }else{
        if (flag==0){
          flag++;
        }
      }
    }else{
      if (n=="."){
        if (flag>0){
          flag++;
        }
      }
    }
  }
  if (flag>1){
    return false;
  }else{
    return true;
  }
}

/**************************
3   �ж���������ڵĸ�ʽ
***************************/
function check_date(intime,format)
{
		var ret ="";
        var date = intime;
        var str = "";
        var year = "";
        var month = "";
        var day = "";
        var msg = "";
        var pattern;
        //�ж�����ֵ�Ƿ�Ϊ��
        if ((format.toUpperCase() != "Y")&&(format.toUpperCase() !="M")&&(format.toUpperCase() != "D"))
        {
          msg = "�����������";
        }
        if (format.toUpperCase() =="D")
        {
          pattern = /[1-2][0-9][0-9][0-9][^0-9][0-1]{0,1}[0-9][^0-9][0-3]{0,1}[0-9]/;
        }
        else if (format.toUpperCase() == "M")
        {
          pattern =/[1-2][0-9][0-9][0-9][^0-9][0-1]{0,1}[0-9]/;
        }
        else if (format.toUpperCase() == "Y")
        {
          pattern =/[1-2][0-9][0-9][0-9]/;
        }
        if (pattern.test(date)){
                str = date;
                year = parseInt(str,10);
                if (isNaN(str.charAt(4)))
                {
                        str = str.substr(5);
                }
                month = parseInt(str,10);
                if (isNaN(str.charAt(2)))
                {
                        str = str.substr(3);
                }
                else
                {
                        str = str.substr(2);
                }
                day = parseInt(str,10);

        }
        else{
                msg = "���ڸ�ʽ���ԣ�";
        }
		if(check_number(year) == '1')
	        msg = "���ڸ�ʽ���ԣ�";
		if(check_number(month) == '1')
	        msg = "���ڸ�ʽ���ԣ�";
		if(check_number(day) == '1')
	        msg = "���ڸ�ʽ���ԣ�";

        if (format.toUpperCase() =="D")
        {
			ret = check_year(year);
          	if (ret!=""){msg = ret ;}
          	ret = check_month(month);
          	if (ret!=""){msg = ret ;}
            ret = check_day(year,month,day);
          	if (ret!=""){msg = ret ;}
        }
        else if (format.toUpperCase() == "M")
        {
			ret = check_year(year);
          	if (ret!=""){msg = ret ;}
          	ret = check_month(month);
          	if (ret!=""){msg = ret ;}
        }
        else if (format.toUpperCase() == "Y")
        {
			ret = check_year(year);
          	if (ret!=""){msg = ret ;}
        }

		//���ӣ������ԡ�.���ָ
		var strs = intime.split(".");
		if(check_number(strs[0]) == '1')
	        msg = "���ڸ�ʽ���ԣ�";
		if(check_number(strs[1]) == '1')
	        msg = "���ڸ�ʽ���ԣ�";
		if(check_number(strs[2]) == '1')
	        msg = "���ڸ�ʽ���ԣ�";
	    //���msgΪ��˵����ʽ��ȷ������˵����ʽ����
	    //if(msg != "")
        //{
        	//alert(msg);
        	//return(false);
        //}else
        	//return(true);
        return(msg);
        	
}

/**************************
4  �ж��·ݵ������Ŀ�Ƿ���ȷ
***************************/
function check_year(inyear)
{
  if (isNaN(inyear)){
    return ("��ݱ���Ϊ���֣�");
  }else{
    if ((inyear<1900)||(inyear>3000)){
      return("������ݳ�����Ч��Χ��");
    }
  }
  return "" ;
}

/**************************
5  �ж��·ݵ���Ŀ�Ƿ���ȷ
***************************/
function check_month(inmonth)
{
  if (isNaN(inmonth)){
    return("�·ݱ���Ϊ���֣�");
  }
  else
        {
                if ((inmonth > 12)||(inmonth<1))
                {
                        return("�����·ݳ�����Ч��Χ��");
                }
        }
        return "" ;
}

/**************************
6  �ж����ڵ���Ŀ�Ƿ���ȷ
***************************/
function check_day( inyear, inmonth, inday )
{
        if (isNaN(inday)){
                return("���ڱ���Ϊ���֣�");
        }
        else
        {
                if ((inday < 1) || (inday > 31))
                {
                        return("ÿ�����ֻ��31�죡");
                }
                else if (( inmonth==4) || (inmonth==6) || (inmonth==9) || (inmonth==11) )
                {
                        if (inday > 30)
                        {
                                return("С��ֻ��30�죡");
                        }
                }
                else if( inmonth==2 )
                {
                        if ((( inyear % 100 ) != 0 && (inyear % 4) == 0) || (( inyear % 100 ) == 0 && ( inyear % 400) == 0 ))
                        {
                                if ( inday > 29 )
                                {
                                        return("����2��ֻ��29�죡");
                                }
                        }
                        else
                        {
                                if ( inday > 28 )
                                {
                                        return("ƽ��2��ֻ��28�죡");
                                }
                        }
                }
        }
        return "";
}


/**************************
7.�ж����봮ȫ��������
***************************/

function check_number(num)
{
	for(i=0;i<num.length;i++)
	{
		var a=num.substr(i,1);
		if (a<'0' || a>'9')
		return('1');
	}
	return('0');
}

/********************************
8.�ж�����Ϊlen1��len2���ȵ����ִ�
*********************************/
function check_number_length(num,len1,len2)
{
	if(num.length==len1||num.length==len2)
		return(check_number(num));
	else return('2');
}
/**************************
9.�жϳ���С��len1�����ִ�
***************************/
function check_number_maxlength(num,len1)
{
	if(num.substring(0,1) == "-")
		num = num.substring(1,num.length);
	if(num.length<=len1)
		return(check_number(num));
	else return('2');
}


/**********************
10.�ж����븡������
***********************/
function check_number_point(num,x,y)
{
	var num1="";
	var num2="";
	var flag=0;
	var m=0+x;
	var n=0+y;
	var chk1,chk2;
	flag=num.indexOf('.',0);
	if(flag==-1) flag=num.length;
	num1=num.substring(0,flag);
	chk1=check_number_maxlength(num1,m);
	if(flag<num.length)
	{
	num2=num.substring(++flag,num.length);
	chk2=check_number_maxlength(num2,n);
	if(chk2!='0')
	return(chk2);
	}
	if(chk1!='0')
	return(chk1);
	return('0');
}
/**************************
11.�ж�������ַ����Ƿ�Ϊ��
***************************/

function check_item_null(num)
{
	if (num=="null" || num.length==0)
	  return(true);
	  	else
	  return(false);
}

function getCurrentDate()
{
    var currDate,strDate;
    var year,month,day;
    currDate = new Date();
    year = currDate.getYear();
    month = currDate.getMonth()+1;
    day = currDate.getDate();
    if(month<10)
        month="0"+month;
    if(day<10)
      day="0"+day;
    strDate = year+"."+month+"."+day;
    return strDate;
}

/**************************
13.�ж����봮ȫ������ĸ
***************************/

function check_c(str)
{
	for(i=0;i<str.length;i++)
	{
		var a=str.substr(i,1);
		if (a<'A' || (a>'Z' && a<'a') || a>'z')
		return('1');
	}
	return('0');
}

/**********************************************************
14. �����֤Ϊ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
**********************************************************/
function _checkSfzh(sfzh)
{
	return __checkSfzh(sfzh, 1);
/*	var val = sfzh;
	var ret ="";
	if(val.length == 0)
		return 0;
	if(check_number(val) == '1')
	{
		alert("������ݺ���ֻ�������֣�");
		return -3;
	}
	if(val.length!=15 && val.length!=18 )
	{
		alert("������ݺ���ӦΪ15λ��18λ��");
		return -1;
	}
	else if(val.length == 15 )
    {
		var birthday = "19" + val.substring(6,8) + "." + val.substring(8,10) + "." +val.substring(10,12);
		var sex = parseInt(val.substring(14,15));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			alert("������ݺ���7-12λӦ�����ڸ�ʽ��");
			return -2;//���ڸ�ʽ����
        }
    }
    else if(val.length == 18 )
    {
		var birthday = val.substring(6,10) + "." + val.substring(10,12) + "." +val.substring(12,14);
		var sex = parseInt(val.substring(16,17));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			alert("������ݺ���7-14λӦ�����ڸ�ʽ��");
			return -2;//���ڸ�ʽ����
        }
    }
	return 1;
*/
}

/*******************************************************
15. ���������Ϊ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
********************************************************/


/********************************************************
16. ���϶������ĿΪ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
*********************************************************/


/**************************************************
17. ������֤��Ϊ�գ�����0�������Ĳ��Ϸ�������ظ�ֵ������Ϸ�����1��
*****************************************************/


/************************************************************************
18. �Ƚ���ʼ���ڵĺϷ��ԣ�start<=end ? Ҫ�����ڸ�ʽ��yyyy.mm.dd or yyyy.m.d
//���أ��������������""�ģ�����0�������һ�����ڸ�ʽ���Ϸ�������-1��
//����ڶ������ڸ�ʽ���Ϸ�������-2�������һ�����ڴ��ڵڶ������ڣ�����-3��
//�����һ������С�ڻ��ߵ��ڵڶ������ڣ�����1��
************************************************************************/

function checkStartEndDate(startRQ, endRQ)
{
	if(startRQ.length <=0 && endRQ.length <= 0)
		return 0; //both length are 0;
    	if( startRQ.length > 0)
    	{//��һ������
        	var msg = "";
		msg = check_date(startRQ,"D");
		if(trim(msg) != "")
		{
			//return(msg);
			return -1;//startRQ �д�
		}
		if(endRQ.length>0)
		{//�ڶ�������
			msg = check_date(endRQ,"D");
			if(trim(msg)!="")
			{
				//alert(msg);
				return -2;//endRQ �д�
			}
			//���������գ��Ҷ��Ϸ���
			var strs1 = startRQ.split(".");
			var strs2 = endRQ.split(".");
			if(parseInt(strs1[0], 10) < parseInt(strs2[0], 10))
				return 1;
			else if(parseInt(strs1[0], 10) == parseInt(strs2[0], 10))
			{	if(parseInt(strs1[1], 10) < parseInt(strs2[1], 10))
					return 1;
				else if(parseInt(strs1[1], 10) == parseInt(strs2[1], 10))
				{
					if(parseInt(strs1[2], 10) <= parseInt(strs2[2], 10))
						return 1;
					else
						return -3;//alert("��ѯ��ʼ���ڲ��ô��ڽ�������!");
				}else
					return -3;
			}else //
				return -3;
		}else
			return 0;//�ڶ���Ϊ�գ�
	}else //��һ��Ϊ��,�ڶ�������
	{
		msg = check_date(endRQ,"D");
		if(trim(msg)!="")
		{
			//alert(msg);
			return -2;//endRQ �д�
		}
	}

	return 1;//�������գ��Ҷ��Ϸ�����startRQ<=endRQ
}

/*****************************************************************************
19. �õ���ǰ���� ��ʽ��yyyy.mm.dd
*****************************************************************************/
function getCurDate()
{
	var today = new Date();
	var year = "";
	var month = "";
	var day = "";
	year = today.getYear() + "";
	month = (today.getMonth()+1) + "";
	day = today.getDate() + "";
	if(month.length<2)
		month = "0" + month;
	if(day.length<2)
		day = "0" + day;

	return year + "." + month + "." + day;
}

/*****************************************************************************
19. �õ���ǰ���� ��ʽ��yyyy��mm��dd������day
*****************************************************************************/
function getChsCurDate()
{
	var weekday = new Array(7);
	weekday[0] = "��";
	weekday[1] = "һ";
	weekday[2] = "��";
	weekday[3] = "��";
	weekday[4] = "��";
	weekday[5] = "��";
	weekday[6] = "��";
	var today = new Date();
	var year = "";
	var month = "";
	var day = "";
	var week = "";
	year = today.getYear() + "";
	month = (today.getMonth()+1) + "";
	day = today.getDate() + "";
	week = today.getDay();
	//if(month.length<2)
		//month = "0" + month;
	//if(day.length<2)
		//day = "0" + day;

	return year + "��" + month + "��" + day + "��" + " ����" + weekday[week];
}

/*****************************************************************************
20. ������������������:endRQ - startRQ�� ���������ʽ��yyyy.mm.dd �� yyyy.m.d
*****************************************************************************/
function diffDate(startRQ, endRQ)
{
	if(startRQ.length <=0)
		return ; //��ʼ����Ϊ��;
	if(endRQ.length <=0)
		return ; //��������Ϊ��;

	var	msg = check_date(startRQ,"D");
	if(trim(msg) != "")
	{
		//return(msg);
		return ;//startRQ �д�
	}
	msg = check_date(endRQ,"D");
	if(trim(msg)!="")
	{
		//alert(msg);
		return ;//endRQ �д�
	}

	var strs1 = startRQ.split(".");
	var strs2 = endRQ.split(".");

	var date1 = new Date(strs1[0], strs1[1], strs1[2]);
	var date2 = new Date(strs2[0], strs2[1], strs2[2]);
	var diffDay = (date2.getTime() + 0 - date1.getTime())/1000/60/60/24;	//days

	return diffDay;
}
/*****************************************************************************
21. �����֤��ͳһΪ18λ���������Ϊ���֤���ַ�����
    ���أ����sfzh������Ϊ�Ϸ���15λ����18λ���֤�ţ�����ͳһ��18λ�����֤�ţ�
		  ���򷵻�"";�������洰�ڡ�
*****************************************************************************/
function sfzh15to18(sfzh)
{
	if(__checkSfzh(sfzh, 0) <= 0)
		return "";
	if(sfzh.length == 18)
		return sfzh;

	//sfzh���ǺϷ���15λ�����濪ʼת��
	var i, num = 0;
	var clast = -1;
	var rs = "";
	rs = sfzh.substr(0, 6);
	rs += "19";
	rs += sfzh.substr(6, 9);

	for(i=18; i>=2; i--)
	{
		num += ((1<<(i-1))%11)*(parseInt(rs.substr(18-i, 1))-parseInt('0'));
	}
	num %= 11;
	switch(num)
	{
		case 0:
			clast = 1;
			break;
		case 1:
			clast = 0;
			break;
		case 2:
			clast = paserInt('X');
			break;
		default:
			clast = 12 - num;
			break;
	}
	rs = rs.substr(0, 17);
	rs += (clast + parseInt('0'));
	return rs;
}

//showMessage:1,show message; 0:don't show message
function _checkSfzh(sfzh, showMessage)
{
	var val = sfzh;
	var ret ="";
	if(val.length == 0)
		return 0;
/*
	if(check_number(val) == '1')
	{
		if(showMessage == 1)
			alert("������ݺ���ֻ�������֣�");
		return -3;
	}
*/
	if(val.length!=15 && val.length!=18 )
	{
		if(showMessage == 1)
			alert("������ݺ���ӦΪ15λ��18λ��");
		return -1;
	}

	if(val.length == 15 )
    {
		if(check_number(val) == '1')
		{
			if(showMessage == 1)
				alert("15λ������ݺ���ֻ�������֣�");
			return -3;
		}
		var birthday = "19" + val.substring(6,8) + "." + val.substring(8,10) + "." +val.substring(10,12);
		var sex = parseInt(val.substring(14,15));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			if(showMessage == 1)
				alert("������ݺ���7-12λӦ�����ڸ�ʽ��");
			return -2;//���ڸ�ʽ����
        }
    }
    else if(val.length == 18 )
    {
		if(check_number(val.substr(0,17)) == '1')
		{
			if(showMessage == 1)
				alert("18λ������ݺ���ǰ17λֻ�������֣�");
			return -4;
		}
		if( ((val.substr(17,1)).toUpperCase() != 'X') && (check_number(val.substr(17,1)) == '1'))
		{
			if(showMessage == 1)
				alert("18λ������ݺ���ĩλֻ����'X'�������֣�");
			return -4;
		}

		var birthday = val.substring(6,10) + "." + val.substring(10,12) + "." +val.substring(12,14);
		var sex = parseInt(val.substring(16,17));
		ret = check_date(birthday,"D");
		if(ret != "")
		{
			if(showMessage == 1)
				alert("������ݺ���7-14λӦ�����ڸ�ʽ��");
			return -2;//���ڸ�ʽ����
        }
    }
	return 1;
}

/**
  ����ת������
  2002.08.04��2002��8��4��
*/
function chsDate(str)
{
	var chsStr = "";
	if(str != "" && str != null)
    {
    	if(str.length>0)
        {
            var vals = str.split(".");
            if(vals.length == 3)
			{
				chsStr = vals[0]+"��"+ parseInt(vals[1],10)+"��"+parseInt(vals[2],10)+"��";
				return chsStr;
			}
            else return str;
        }
        else return "";
	}
	else return "";
}
/**
 * ����ת������
 * 2002.12.08
 *  ��OO����ʮ���°���
 */
function chsDate2(str)
{
	var a = new Array(11);
	a[0]="O";
    a[1]="һ";
    a[2]="��";
	a[3]="��";
	a[4]="��";
	a[5]="��";
	a[6]="��";
	a[7]="��";
    a[8]="��";
	a[9]="��";
	a[10]="ʮ";

	var chsStr = "";
	var tmp,y,m,d,t;
    var i = 0;
	if(str != "" && str != null)
    {

        var vals = str.split(".");
        if(vals.length == 3)
        {
            for(i=0;i<vals[0].length;i++)
            {
            	tmp = vals[0].charAt(i);
				chsStr += a[parseInt(tmp)];
            }
			chsStr += "��";

			m = parseInt(vals[1],10);
			if(m<=10)
			{
				chsStr += a[m];
			}else
			{
				t = m-10;
				chsStr += a[10]+a[t];
			}
			chsStr += "��";

			m = parseInt(vals[2],10);
            if(m<=10)
			{
				chsStr += a[m];
			}else if(m>10 && m<20 )
			{
				t = m-10;
				chsStr += a[10]+a[t];
			}else if(m==20 || m==30)
			{
				tmp = vals[2].charAt(0);
				chsStr += a[parseInt(tmp)]+a[10];
			}else
			{
				tmp = vals[2].charAt(0);
				chsStr += a[parseInt(tmp)]+a[10];
				tmp = vals[2].charAt(1);
				chsStr += a[parseInt(tmp)];
			}
			chsStr += "��";
			return chsStr;
        }
        else return str;
}
	else return "";
}

/**
* ��鸡�����ĺϷ���.
* ֻ�������ǺϷ���:
* 43.9078, 654, 0.324, .8
*/
function _checkFloat(val)
{
	var msg = "";
	if(arguments.length<1)
   		return msg;
	if(val.length<1)
   	{
      	return msg;
   	}

	var ret = 0;
	var vals= val.split(".");

	if(vals.length == 2)
		if(vals[0].length==0 && check_number(vals[1]) == '0')
		{
			ret=1;//".98"
		}

	if(vals.length<1 || vals.length>2)
	{
		msg = "��.������һ��";
		ret = -1;//
	}
	else if(check_number(vals[0].substr(1, vals[0].length-1)) == '1')
	{
		msg = "�������ֲ�������";
		ret = -2;
	}
	else if((vals[0].substr(0,1) == '-') || (vals[0].substr(0,1) == '+'))
	{
		if(vals[0].substr(0,1) == '-')
		{
			msg = "����Ϊ����";
			ret = -1;//
		}
	}
	else if(check_number(vals[0].substr(0,1)) == '1')
	{
			msg = "�������ֲ�������";
			ret = -2;//�������ֲ�������
    }
	else if(vals.length == 2)
	{
		if(check_number(vals[1]) == '1')
		{
			msg = "С�����ֲ�������";
			ret = -3;//С�����ֲ�������
		}
	}
	return msg;
}

//��������chkNumEng
//���ܽ��ܣ�����Ƿ��з����ֻ���ĸ,��Ҫ�����жϸ��ֱ�ţ�����Ա��š����ű�ŵ�
//����˵����Ҫ�����ַ���
//����ֵ��false������ true��ȫ��Ϊ���ֻ���ĸ 
function chkNumEng(str)
{
  var strSource ="_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ch;
  var i;
  var temp;

  for (i=0;i<=(str.length-1);i++)
  {
  
    ch = str.charAt(i);
    temp = strSource.indexOf(ch);
    if (temp==-1)
    {
     return(false);
    }
  }
  return(true);
}

//Ϊ��ֹ���ת����%->%25������bForce������isConverted��������bForce�������ж�һ��
//��������0-9Ϊ�����ַ�
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

//�ж��Ƿ�Ϊ�绰����
function isTel(telstr)
{
   	var reg=/[^0-9-]/g;
   	if (telstr!="")
   	{
   		if (reg.test(telstr))
   		{
   			return(false);
   		}else
  		{
   			return(true);
   		}
   	}
}

//�ж��Ƿ�Ϊemail��ʼ
function isEmail(emailstr)
{
	if ((emailstr.indexOf('@', 0) == -1) || emailstr.indexOf('.') == -1) 
    {
    	return false;
    } else
   	{
        return true;
    }
}

//���������жϿ�ʼ
function ischinese(str)
{
	var reg=/[^A-Za-z0-9_]/g;
    if (reg.test(str))
    {
    	return (true);
    } else 
    {
		return(false);
	}
}