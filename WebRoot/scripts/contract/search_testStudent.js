		$(function(){
			$('#deleteTestStudent').click(function(){
				if(confirm("确信要删除吗?")){
					$('#testStudentForm').attr("action","deleteTestStudent.action");
					$('#testStudentForm').submit();
				}
			});
		});
