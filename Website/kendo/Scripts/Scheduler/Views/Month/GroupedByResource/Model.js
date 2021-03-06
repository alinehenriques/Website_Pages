Type.registerNamespace("Telerik.Web.UI.Scheduler.Views.Month.GroupedByResource");
(function(b){var c=b.Views.Month,a=$telerik.$;
c.GroupedByResource.Model=function(f,d,e){c.GroupedByResource.Model.initializeBase(this,[f]);
this._groupingResource=d;
this._isVertical=e;
this._monthModels=[];
this._resources=null;
};
c.GroupedByResource.Model.prototype={initialize:function(){this._resources=this._owner.get_resources().getResourcesByType(this._groupingResource);
for(var d=0;
d<this._resources.get_count();
d++){this._monthModels[d]=new c.Model(this._owner);
}this._initializeContentTables();
},_initializeContentTables:function(){for(var d=0;
d<this._resources.get_count();
d++){this._monthModels[d]._contentTable=a("div.rsTopWrap table.rsContentTable",this._owner.get_element())[d];
}},addToBlocks:function(e){var d=this._getAppointmentModelIndex(e.appointment);
e.appointment.__modelIndex=d;
this._monthModels[d].addToBlocks(e);
},removeFromBlock:function(e){var d=e.appointment.__modelIndex;
this._monthModels[d].removeFromBlock(e);
},resetBlocks:function(){var f=this._monthModels;
for(var d=0,e=f.length;
d<e;
d++){f[d].resetBlocks();
}},getTimeSlotFromDomElement:function(d){var e=this._getRawIndexFromDomElement(d);
if(!e){return null;
}var g=this._getTimeFromDomElement(d);
var f=this._resources.getResource(e.modelIndex);
return new c.GroupedByResource.TimeSlot(e,g,f,d);
},_addTodayCellClass:function(){var f=this._monthModels;
for(var d=0,e=f.length;
d<e;
d++){f[d]._addTodayCellClass();
}},_getAllDayTimeSlotForAppointmentPart:function(d){return this._getAllDayTimeSlot(d.start,d.modelIndex);
},_getAllDayTimeSlot:function(h,e){var f=this._getTimeSlotIndices(h);
f.modelIndex=e;
var g=this._resources.getResource(e);
var d=this._getTimeSlotDomElement(f);
return new c.GroupedByResource.TimeSlot(f,h,g,d);
},getTimeSlotForAppointment:function(d){var e=this._getAppointmentModelIndex(d);
if(e==-1){return null;
}return this._getAllDayTimeSlot(d.get_start(),e);
},_getAppointmentModelIndex:function(d){var f=-1;
var e=this;
d.get_resources().forEach(function(g){var h=e._resources.getResourceByTypeAndKey(g.get_type(),g.get_key());
if(h){f=Array.indexOf(e._resources._array,h);
}});
return f;
},_getTimeSlotDomElement:function(g){var f=g.modelIndex||0;
var e=this._owner.get_element();
var h=Math.floor(g.dayIndex/this.get_weekLength());
var d=Math.floor(g.dayIndex%this.get_weekLength());
var i=a(".rsTopWrap .rsContentTable",e)[f];
return i.tBodies[0].rows[h].cells[d];
},_getTimeFromIndex:function(e){var d=this.get_visibleRangeStart();
var h=this.get_weekLength();
var i=Math.floor(e.dayIndex/h);
var g=e.dayIndex%h;
var f=(i*7)+g;
Telerik.Web.UI.RadScheduler._incrementTime(d,24*f,0);
return d;
},_getTimeFromDomElement:function(d){return this._monthModels[0]._getTimeFromDomElement(d);
},_getRawIndexFromDomElement:function(d){while(d&&(d.tagName.toUpperCase()!="TD")){d=d.parentNode;
}if(!d){return null;
}var i=d.parentNode;
var j=i.parentNode;
var k=j.parentNode;
var h=this._owner._modelTables;
var f=this._owner._getElementIndex(h,k);
var e=this._monthModels[f];
var g=null;
if(e){g=e._getRawIndexFromDomElement(d);
g.modelIndex=f;
}return g;
},_createTimeSlot:function(e,g,d){var f=this._resources.getResource(e.modelIndex);
return new c.GroupedByResource.TimeSlot(e,g,f,d);
},isVisible:function(d){var f=c.GroupedByResource.Model.callBaseMethod(this,"isVisible",[d]);
var e=this._getAppointmentModelIndex(d)!=-1;
return f&&e;
},_getRenderer:function(){if(!this._renderer){this._renderer=new b.Rendering.ResourceGroupedMonthViewRenderer(this);
}return this._renderer;
}};
c.GroupedByResource.Model.registerClass("Telerik.Web.UI.Scheduler.Views.Month.GroupedByResource.Model",c.ModelBase);
c.GroupedByResource.TimeSlot=function(e,g,f,d){this._resource=f;
c.GroupedByResource.TimeSlot.initializeBase(this,[e,g,d]);
};
c.GroupedByResource.TimeSlot.prototype={get_index:function(){var e=this.get_rawIndex();
var d=c.GroupedByResource.TimeSlot.callBaseMethod(this,"get_index");
return String.format("{0}:{1}",e.modelIndex,d);
},get_resource:function(){return this._resource;
}};
c.GroupedByResource.TimeSlot.registerClass("Telerik.Web.UI.Scheduler.Views.Month.GroupedByResource.TimeSlot",c.TimeSlot);
})(Telerik.Web.UI.Scheduler);
