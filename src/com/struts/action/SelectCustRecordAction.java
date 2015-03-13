/*
 * Generated by MyEclipse Struts
 * Template path: templates/java/JavaClass.vtl
 */
package com.struts.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.struts.form.SelectCustForm;
import com.struts.form.SelectCustRecordForm;
import com.struts.form.UserFormForm;
import com.user.model.CustObject;
import com.user.model.CustRecordObject;
import com.user.model.User;
import com.user.service.CustManager;
import com.user.service.CustRecordManager;
import com.user.service.UserManager;
import com.user.service.imp.UserManagerImpl;

/** 
 * MyEclipse Struts
 * Creation date: 08-17-2013
 * 
 * XDoclet definition:
 * @struts.action path="/userForm" name="userFormForm" input="/User/userForm.jsp" scope="request" validate="true"
 */
public class SelectCustRecordAction extends DispatchAction {
	/*
	 * Generated Methods
	 */
	protected static ApplicationContext ctx = null;

	/**
	 * @param name
	 * @return java.lang.Object
	 */
	protected Object getBean(String name) {
		if (ctx == null) {
			ctx = WebApplicationContextUtils
					.getRequiredWebApplicationContext(servlet
							.getServletContext());
		}
		return ctx.getBean(name);
	}
	/** 
	 * Method execute
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 */
	public ActionForward selectCust(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) {
		
		try {
			CustRecordManager custManager = (CustRecordManager) this
			.getBean("custRecordManager");
			
			SelectCustRecordForm selectCustRecordForm = (SelectCustRecordForm) form;// TODO Auto-generated method stub
		    String cf = (String)request.getParameter("cf");
		    if("2".equals(cf)){
		    	selectCustRecordForm.reset();
		    }
			List<CustRecordObject> list = null;
			list=custManager.selectCustRecord(selectCustRecordForm);
			
			
			request.setAttribute("list", list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return mapping.findForward("error");
		}
		
		return mapping.findForward("success");	
	}
	
	public ActionForward viewCust(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) {
		
//		try {
//			CustManager custManager = (CustManager) this
//			.getBean("custManager");
//			
//			SelectCustForm selectCustForm = (SelectCustForm) form;// TODO Auto-generated method stub
//		    
//			List<CustObject> list = null;
//			list=custManager.selectCust(selectCustForm);
//			
//			
//			request.setAttribute("list", list);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			return mapping.findForward("error");
//		}
//		
		return mapping.findForward("viewCust");	
	}
	
	public ActionForward saveCust(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) {
		
		try {
			CustManager custManager = (CustManager) this
			.getBean("custManager");
			
			SelectCustForm selectCustForm = (SelectCustForm) form;// TODO Auto-generated method stub
		    
			String custid=selectCustForm.getCustid();
			int i=0;
			String flag="";
			if(!"".equals(custid)&&custid!=null){
				i= custManager.editCust(selectCustForm);
				flag="2";
			}else{
				i= custManager.saveCust(selectCustForm);
				flag="1";
			}
			if(i==1){
				request.setAttribute("flag", flag);
			}else{
				return mapping.findForward("error");
			}
			
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return mapping.findForward("error");
		}
		
		return mapping.findForward("viewCust");	
	}
	
	public ActionForward editCust(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) {
		
		try {
			CustManager custManager = (CustManager) this
			.getBean("custManager");
			String custid = request.getParameter("custid");
			SelectCustForm selectCustForm = (SelectCustForm) form;// TODO Auto-generated method stub
		    
			
			CustObject custObject = custManager.selectCustByID(custid);
			
			if(custObject!=null){
				selectCustForm.setCustid(custObject.getCustid());
				selectCustForm.setCustname(custObject.getCustname());
				selectCustForm.setPhonenumber1(custObject.getPhonenumber1());
				selectCustForm.setPhonenumber2(custObject.getPhonenumber2());
				selectCustForm.setAddress(custObject.getAddress());
				selectCustForm.setSex(custObject.getSex());
				selectCustForm.setInterval(custObject.getInterval());
				selectCustForm.setRemark(custObject.getRemark());
			}else{
				return mapping.findForward("error");
			}
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return mapping.findForward("error");
		}
		
		return mapping.findForward("viewCust");	
	}
	
	public ActionForward deleteCust(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response) {
		
		try {
			CustManager custManager = (CustManager) this
			.getBean("custManager");
			String custid = request.getParameter("custid");
			
			int i = custManager.deleteCust(custid);
			
			if(i==1){
				SelectCustForm selectCustForm = (SelectCustForm) form;// TODO Auto-generated method stub
			    selectCustForm.reset();
				List<CustObject> list = null;
				list=custManager.selectCust(selectCustForm);
				
				
				request.setAttribute("list", list);
			}else{
				return mapping.findForward("error");
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return mapping.findForward("error");
		}
		
		return mapping.findForward("success");	
	}
}