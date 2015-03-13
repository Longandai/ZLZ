var fileInputNumber = 0;
function addFile()
  	{	
			var strFile = "file"+fileInputNumber;
			var filePath = document.getElementById(strFile);
			document.getElementById(strFile).style.display = "none";
			var paths = filePath.value.split("\\");
	        var name = paths[paths.length-1];
	       // alert(name);
   		var str1 =
				'<div style="background-color:#E7EBF7">'+
				'<font size="3" style="width:420px">'+name+'</font>'+
				'<a href="#"><img onclick="removeFile(this,'+strFile+')" src="img/del.gif" border="0" alt="删除附件"/></a>'+
				'</div><br>';
				var _file = document.getElementById("_file");
  		    _file.insertAdjacentHTML("beforeend",str1);

			addInput();
  	}
	
	function addInput(){
			fileInputNumber++;
			var strFile = "file"+fileInputNumber;
			 var str2 = '<input name="file" id="'+strFile+'" type="file" value="添加附件" onchange="addFile()" />';
			var _input = document.getElementById("input");
  		_input.insertAdjacentHTML("afterbegin",str2);
	
	}
	
	function removeFile(id,strFile) {
     var new_tr = id.parentNode.parentNode;
  try {
         var tmp = new_tr.parentNode;
          // 为了在ie和firefox下都能正常使用,就要用另一个方法代替,最取上一层的父结点,然后remove.
          tmp.removeChild(new_tr);
			
			removeInput(strFile);
       } catch(e) {}
	}

	function removeInput(strFile) {
      var _input = document.getElementById("input");
	 try {
    // 为了在ie和firefox下都能正常使用,就要用另一个方法代替,最取上一层的父结点,然后remove.
          input.removeChild(strFile);
       } catch(e) {}
}
	
function tofileupload(){
	window.location.open("${dynamicURL}/fileupload/toFileupload.action");
}