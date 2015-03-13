function PayloadMappingManager()
{ 
  this.taskTypeLookup = new Object();
  this.mappings = new Object();
  this.payloadAttrs = new Object();
}

PayloadMappingManager.prototype.addPayloadAttr = function(payloadAttr)
{
  this.payloadAttrs[payloadAttr.name] = payloadAttr;
} 

PayloadMappingManager.prototype.addMapping = function(mapping) 
{
/* //don't need task type filter as of now
  var idx;
  
  for(idx in mapping.usages)
  {
    var usage = mapping.usages[idx];
    var list = this.taskTypeLookup[usage.taskTypeId];
    if(list == null)
      list = new Array();
      
    list.push(mapping);
  }
*/  
  this.mappings[mapping.label.name] = mapping;
}

PayloadMappingManager.prototype.getMapping = function(labelName)
{
  return this.mappings[labelName];
}
/*
PayloadMappingManager.prototype.getTaskTypes = function()
{
  return this.taskTypeLookup;
}

PayloadMappingManager.prototype.getMappingsByTaskType = function(workflowId)
{
  return this.taskTypeLookup[workflowId];
} 
*/

function PayloadMapping(label, usages)
{
  this.label = label;
  this.usages = usages;
}

function Label(name, datatype, flexField)
{
    this.name = name;
    this.flexField = flexField;
    this.datatype = datatype;
}

function Usage(taskTypeId, payloadAttr)
{
    this.taskTypeId = taskTypeId;
    this.payloadAttr = payloadAttr;
}

function PayloadAttribute(name, datatype)
{
    this.name = name;
    this.datatype = datatype;
}
