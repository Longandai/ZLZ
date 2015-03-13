package com.user.service;

public interface ModelInfoManager {

	public String getTreeNodes(String id) throws Exception;
	public String addNode(String nodeId,String modelName) throws Exception;
	public String selectNodeName(String nodeId) throws Exception;
	public String updateNode(String nodeId,String modelName) throws Exception;
	public String deleteNode(String nodeId,String parentId) throws Exception;
}
