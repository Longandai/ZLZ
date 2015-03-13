package com.user.service.imp;

import com.user.dao.ModelInfoDao;
import com.user.service.ModelInfoManager;

public class ModelInfoManagerImpl implements ModelInfoManager{
	private ModelInfoDao modelInfoDao;
	
	
	public void setModelInfoDao(ModelInfoDao modelInfoDao) {
		this.modelInfoDao = modelInfoDao;
	}


	public String getTreeNodes(String id) throws Exception {
		return modelInfoDao.getTreeNodes(id);
	}


	public String addNode(String nodeId,String modelName) throws Exception {
		
		return modelInfoDao.addNode(nodeId, modelName);
	}


	public String selectNodeName(String nodeId) throws Exception {
		
		return modelInfoDao.selectNodeName(nodeId);
	}


	public String updateNode(String nodeId, String modelName) throws Exception {
		return modelInfoDao.updateNode(nodeId, modelName);
	}


	public String deleteNode(String nodeId, String parentId) throws Exception {
		// TODO Auto-generated method stub
		return modelInfoDao.deleteNode(nodeId, parentId);
	}
	
}
