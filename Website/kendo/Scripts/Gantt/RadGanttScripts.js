(function(a,z){var b=Telerik.Web.UI;
var t=window.kendo;
var y=t.ui;
var o=y.Gantt;
var p=y.GanttList;
var n=a.extend;
var j="radCalendar";
var k="radDatePicker";
var l="radDateTimePicker";
var v="radNumericTextbox";
var w="radTextbox";
var q={wrapper:"RadGantt",rowHeight:"rgtRowheight",listWrapper:"rgtTreelistWrapper",list:"rgtTreelistWrapper",timelineWrapper:"rgtTimelineWrapper",timeline:"rgtTimelineWrapper",splitBarWrapper:"rgtSplitbar",splitBar:"rgtSplitbar",splitBarHover:"rgtSplitbarHover",popupWrapper:"radPopup",popupList:"radList",resizeHandle:"radResizeHandle",icon:"radIcon",item:"radItem",line:"radLine",buttonDelete:"k-gantt-delete",buttonCancel:"k-gantt-cancel",buttonSave:"k-gantt-update",buttonToggle:"k-gantt-toggle",primary:"radPrimary",hovered:"radStateHovered",selected:"radStateSelected",focused:"radStateFocused",gridHeader:"radGridHeader",gridHeaderWrap:"radGridHeaderWrap",gridContent:"radGridContent",popup:{form:"radPopupEditForm",editForm:"rgtEditForm",formContainer:"radEditFormContainer",resourcesFormContainer:"radResourceFormContainer",message:"radPopupMessage",buttonsContainer:"rgtButtonsContainer",button:"radButton",editField:"radFormField",editLabel:"radFormLabel",resourcesField:"k-gantt-resources"},toolbar:{headerWrapper:"rgtToolbar rgtHeader",footerWrapper:"rgtToolbar rgtFooter",toolbar:"radToolbar",expanded:"rgtExpanded",views:"rgtViews",viewsWrapper:"radToolbar rgtViews",actions:"rgtActions",button:"radButton",buttonToggle:"radButton radButtonIcon k-gantt-toggle",iconPlus:"radIcon radIconPlus",iconPdf:"radIcon radIconPdf",iconToggle:"radIcon k-i-gantt-toggle",viewButtonDefault:"radStateDefault",viewButton:"rgtViewButton",currentView:"rgtCurrentView",link:"radButton",pdfButton:"rgtPdfButton",appendButton:"rgtCreateButton"}};
n(true,y.Gantt,{styles:q});
var u={wrapper:"radGrid rgtTreelist",header:"radHeader",alt:"radAlt",editCell:"k-edit-cell",group:"rgtTreelistGroup",gridHeader:"radGridHeader",gridHeaderWrap:"radGridHeaderWrap",gridContent:"rgtTreelistContent",gridContentWrap:"rgtTreelistContent radGridContent",selected:"radStateSelected",icon:"radIcon",iconCollapse:"radIconCollapse",iconExpand:"radIconExpand",iconHidden:"radIconNone",iconPlaceHolder:"radIcon radIconNone",input:"k-input",link:"k-link",resizeHandle:"k-resize-handle",resizeHandleInner:"k-resize-handle-inner",dropPositions:"radIconInsertTop radIconInsertBottom radIconAdd radIconInsertMiddle",dropTop:"radIconInsertTop",dropBottom:"radIconInsertBottom",dropAdd:"radIconAdd",dropMiddle:"radIconInsertMiddle",dropDenied:"radIconDenied",dragStatus:"radDragStatus",dragClue:"radDragClue",dragClueText:"radDragClueText"};
n(true,y.GanttList,{styles:u});
var A={alt:"radAlt",reset:"k-reset",nonWorking:"radNonwork",header:"radHeader",gridHeader:"radGridHeader",gridHeaderWrap:"radGridHeaderWrap",gridContent:"rgtTimelineContent",tasksWrapper:"rgtTables",rowsTable:"radFauxRows",columnsTable:"radFauxColumns",tasksTable:"rgtTasks",dependenciesWrapper:"rgtDependencies",resource:"rgtResource",resourceAlt:"rgtResource radAlt",task:"rgtTask",taskSingle:"rgtTaskSingle",taskMilestone:"rgtTaskMilestone",taskSummary:"rgtTaskSummary",taskWrap:"rgtTaskWrap",taskMilestoneWrap:"rgtMilestoneWrap",resourcesWrap:"rgtResourceWrap",taskDot:"rgtTaskDot",taskDotStart:"rgtTaskStart",taskDotEnd:"rgtTaskEnd",taskDragHandle:"rgtDragHandle",taskContent:"rgtTaskContent",taskTemplate:"rgtTaskTemplate",taskActions:"rgtTaskActions",taskDelete:"rgtTaskDelete",taskComplete:"rgtTaskComplete",taskDetails:"rgtTaskDetails",taskDetailsPercent:"rgtTaskPct",link:"radButton",icon:"radIcon",iconDelete:"radIconDelete",taskResizeHandle:"radResizeHandle",taskResizeHandleWest:"radResizeW",taskResizeHandleEast:"radResizeE",taskSummaryProgress:"rgtProgress",taskSummaryComplete:"rgtComplete",line:"radLine",lineHorizontal:"radLineH",lineVertical:"radLineV",arrowWest:"radArrowW",arrowEast:"radArrowE",dragHint:"radDragHint",dependencyHint:"rgtDependencyHint",tooltipWrapper:"radTooltip",tooltipContent:"radTooltipContent",tooltipCallout:"radCallout radCalloutS",callout:"radCallout",marquee:"radMarquee",marqueeColor:"radMarqueeColor"};
n(true,y.GanttView,{styles:A});
var x={wrapper:"radGrid rgtTimeline",gridHeader:"radGridHeader",gridHeaderWrap:"radGridHeaderWrap",gridContent:"rgtTimelineContent",gridContentWrap:"rgtTimelineContent radGridContent",tasksWrapper:"rgtTables",dependenciesWrapper:"rgtDependencies",task:"rgtTask",line:"radLine",taskResizeHandle:"radResizeHandle",taskResizeHandleWest:"radResizeW",taskDragHandle:"rgtDragHandle",taskDelete:"rgtTaskDelete",taskComplete:"rgtTaskComplete",taskWrapActive:"rgtTaskWrapActive",taskWrap:"rgtTaskWrap",taskDot:"rgtTaskDot",taskDotStart:"rgtTaskStart",taskDotEnd:"rgtTaskEnd",hovered:"radStateHovered",selected:"radStateSelected",origin:"radOrigin"};
n(true,y.GanttTimeline,{styles:x});
function i(F){var E=o.styles;
var B=function(){var G=F.dateView;
G.div.addClass(E.popupWrapper);
G.calendar.wrapper.addClass(j);
};
var D=function(){F.timeView.list.addClass(E.popupWrapper);
};
var C=function(G){F.wrapper.addClass(G);
};
if(F){if(F instanceof y.DatePicker){C(k);
F.bind("open",function(){B();
},true);
}else{if(F instanceof y.DateTimePicker){C(l);
F.bind("open",function(G){if(G.view==="time"){D();
}else{B();
}});
}else{if(F instanceof y.NumericTextBox){C(v);
}}}}}function r(){return b.MaterialRippleManager.getInstance();
}function s(D,B){var C=r();
if(C){var E=C._rippleDelegatedZones;
if(E.indexOf(D.element.get(0))!==-1&&E.indexOf(B)===-1){C.initializeRippleZone({element:B,rippleConfigurations:[{containerSelector:".radButton, .radItem, .k-button, .k-dropdown-wrap, .k-filterable, .k-item"},{containerSelector:".k-grid-filter",rippleType:b.MaterialRippleType.Icon,maxRippleSize:60,cancelBubble:true}]});
}}}function m(B){var C=r();
if(C){C.disposeRippleZone(B);
}}var f=o.fn.editTask;
o.fn.editTask=function(C){f.call(this,C);
var B=this._editor.container;
s(this,B.parent().get(0));
B.parent().addClass("radSkin_"+this.options.skin);
var D=B.find("input[data-role]");
D.each(function(F,E){var G=t.widgetInstance($telerik.$(E));
if(G){i(G);
}});
B.find("input[name='title']").addClass(w);
};
var g=o.fn._onDialogClose;
o.fn._onDialogClose=function(B){m(B.window.parent().get(0));
g.call(this,B);
};
var h=o.fn.showDialog;
o.fn.showDialog=function(C){h.call(this,C);
var B=this._editor.popup.element;
s(this,B.parent().get(0));
this._editor.popup.bind("close",function(D){m(D.sender.element.parent().get(0));
});
B.parent().addClass("radSkin_"+this.options.skin);
};
var d=o.fn._dropDowns;
o.fn._dropDowns=function(){var C=this;
var B=function(D){s(C,this.element.get(0));
};
d.call(this);
if(this.footerDropDown){this.footerDropDown.popup.bind("open",B);
}if(this.headerDropDown){this.headerDropDown.popup.bind("open",B);
}};
var e=p.fn._editCell;
p.fn._editCell=function(B){e.call(this,B);
if(!this.editable){return;
}var C=t.widgetInstance(B.cell.find("input[data-role]"));
if(C){i(C);
}else{B.cell.children("input").addClass(w);
}};
var c=o.fn._createResourceEditor;
o.fn._createResourceEditor=function(B,C){var D=this;
c.call(this,B,C);
var E=this._resourceEditor.window.wrapper;
this._resourceEditor.window.bind("close",function(F){m(F.sender.element.parent().get(0));
});
s(D,E[0]);
E.addClass("radSkin_"+this.options.skin);
this._resourceEditor.grid.bind("filterMenuInit",function(I){var F=I.container;
var J=F.data("kendoPopup");
var H=F.find("[data-role=dropdownlist]");
F.addClass("radSkin_"+D.options.skin);
J.bind("open",function(L){s(D,L.sender.element.get(0));
});
J.bind("close",function(L){m(L.sender.element.get(0));
});
for(var K=0;
K<H.length;
K++){var G=a(H[K]).data("kendoDropDownList");
G.bind("open",function(L){s(D,L.sender.list.get(0));
});
G.bind("close",function(L){m(L.sender.list.get(0));
});
}});
};
})(window.kendo.jQuery);
(function(a,k){$telerik.findGantt=$find;
$telerik.toGantt=function(n){return n;
};
Type.registerNamespace("Telerik.Web.UI");
Type.registerNamespace("Telerik.Web.UI.Gantt");
var c=Telerik.Web.UI;
var b=Sys.Serialization.JavaScriptSerializer;
var e="__EVENTVALIDATION";
var l="__VIEWSTATE";
var i=function(n){return n.d||n;
};
var h=window.kendo;
var f=h.ui.Gantt;
var g=h.ui.GanttList;
a.registerEnum(c,"GanttViewType",{Day:0,Week:1,Month:2,Year:3});
var d=c.Gantt={commands:{create:{task:"InsertTask",dependency:"InsertDependency",assignment:"InsertAssignment"},destroy:{task:"DeleteTask",dependency:"DeleteDependency",assignment:"DeleteAssignment"},update:{task:"UpdateTask",dependency:"UpdateDependency",assignment:"UpdateAssignment"}},transportProxy:function(p){this._data=p.data;
this._id=p.id;
this._type=p.type;
this._commandsCache=p.commandsCache;
var q=this;
var n=c.Gantt.commands;
var o=function(y){var t=y.cmd;
var x=t.indexOf("Task")>-1;
if(y.args.length){var r=y.args[0];
var u=r.data.models||r.data;
if(x){var v=function(A){var z=new Date(A);
z.setMinutes(z.getMinutes()-z.getTimezoneOffset());
return z;
};
for(var w=0;
w<u.length;
w++){u[w].Start=v(u[w].Start);
u[w].End=v(u[w].End);
}}if(!(u instanceof Array)){u=[a.extend({},u)];
}if(q._postBack){q._commandsCache[t]=u;
}else{var s=c.Gantt.callbackCommand({cmd:t,data:u,type:q._type});
c.Gantt.request({id:q._id,cmd:s},function(){if(x){var z=arguments[0];
for(var A=0;
A<z.length;
A++){z[A].Start=new Date(z[A].Start);
z[A].End=new Date(z[A].End);
}}r.success.apply(this,arguments);
},r.fail);
}}};
this.set_postback=function(r){q._postBack=r;
};
this.read=function(){var r=q._data;
if(r&&q._type==="task"){for(var s=0;
s<r.length;
s++){r[s].Start=new Date(r[s].Start);
r[s].End=new Date(r[s].End);
}}arguments[0].success(q._data);
};
this.create=function(){o({args:arguments,cmd:n.create[q._type]});
};
this.update=function(){o({args:arguments,cmd:n.update[q._type]});
};
this.destroy=function(){o({args:arguments,cmd:n.destroy[q._type]});
};
},transport:function(p){var q=p.path.lastIndexOf("/")===p.path.length-1?p.path:p.path+"/";
var s=p.type;
var o=p.methods;
var r={parameterMap:function(u,t){if(t!=="read"){return b.serialize({models:(u.models||[u])});
}}};
for(var n in o){r[n]={url:q+o[n],type:s,dataType:"json",contentType:"application/json"};
}return r;
},request:function(o,p,n){a.ajax(c.Gantt.transportCallbackParams(o)).done(p).fail(n);
},callbackCommand:function(o){var p={commandName:o.cmd};
var n={task:"tasks",dependency:"dependencies",assignment:"assignments"};
p[n[o.type]]=o.data;
return p;
},transportCallbackParams:function(p){var n=$get(e);
var o=n?n.value:"";
var q=$get(l);
var r=q?q.value:"";
return{url:window.location,data:{__EVENTTARGET:"",__EVENTARGUMENT:"",__VIEWSTATE:r,__CALLBACKID:p.id,__CALLBACKPARAM:b.serialize(p.cmd),__EVENTVALIDATION:o},type:"POST",dataType:"JSON",converters:{"text json":c.Gantt.callbackConverter}};
},callbackConverter:function(o){var n=o.split("|")[1];
return a.parseJSON(n);
},createDependency:function(o,p,q){var n=new c.GanttDependency();
n._loadFromDictionary({predecessorId:o,successorId:p,type:q});
return n;
},createAssignment:function(p,o,q){var n=new c.GanttAssignment();
n._loadFromDictionary({TaskID:p,ResourceID:o,Units:q});
return n;
}};
var m=function(n){for(var o in n){this["set_"+o](n[o]);
}};
a.registerControlProperties(m,{path:"",useHttpGet:false,method:"GetTasks",deleteTasksMethod:"DeleteTasks",insertTasksMethod:"InsertTasks",updateTasksMethod:"UpdateTasks",getDependenciesMethod:"GetDependencies",deleteDependenciesMethod:"DeleteDependencies",insertDependenciesMethod:"InsertDependencies",getResourcesMethod:"GetResources",getAssignmentsMethod:"GetAssignments",insertAssignmentsMethod:"InsertAssignments",updateAssignmentsMethod:"UpdateAssignments",deleteAssignmentsMethod:"DeleteAssignments"});
c.RadGantt=function(n){c.RadGantt.initializeBase(this,[n]);
this._widget=null;
this._webServiceSettings=null;
this._postBackReference=null;
this._skin="Default";
this._uniqueId=null;
this._postBackOnNavigate=false;
this._postBackOnTaskInsert=false;
this._postBackOnTaskUpdate=false;
this._postBackOnTaskDelete=false;
this._postBackOnDependencyInsert=false;
this._postBackOnDependencyDelete=false;
this._postBackOnAssignmentInsert=false;
this._postBackOnAssignmentUpdate=false;
this._postBackOnAssignmentDelete=false;
this._commandsCache={};
this._navigationSettings={};
this._scrollTop=0;
this._scrollLeft=0;
};
c.RadGantt.prototype={initialize:function(){c.RadGantt.callBaseMethod(this,"initialize");
this._extendStyles();
this.initializePdfSettings();
this.initializeWidget();
this.initializeCustomFields();
this._initializePostback();
this._initializeKeyboardNavigation();
this._initializeScroll();
},initializePdfSettings:function(){var o=this.get_pdfSettings();
if(o){if(o.date){var n=parseInt(o.date.match(/\d+/)[0],10);
o.date=new Date(n);
}if(o.margin){o.margin=a.parseJSON(o.margin);
}if(o.fonts){o.fonts=a.parseJSON(o.fonts);
h.pdf.defineFont(o.fonts);
}}},initializeWidget:function(){var n=this;
this._widget=a(this.get_element()).kendoGantt(this.widget()).data("kendoGantt");
this._widget.timeline.bind("navigate",function(o){n.updateClientState();
});
},initializeCustomFields:function(){var n=this.get_customTaskFields();
var o;
var r=c.GanttTask;
for(var p=0,q=n.length;
p<q;
p++){o=n[p].clientPropertyName;
r.prototype["get_"+o]=function(){return this._data[o];
};
r.prototype["set_"+o]=function(t){var s={};
s[o]=t;
this._data[o]=t;
this._update(s);
};
}},_initializeScroll:function(){var o=this;
var n=a(this.get_element()).find(".rgtTimelineContent");
n.on("scroll",function(p){o._scrollTop=a(this).scrollTop();
o._scrollLeft=h.scrollLeft(this);
o.updateClientState();
}).scrollTop(this.get_scrollTop());
if(!o.get_selectedDate()&&!this._widget.view().options.date){h.scrollLeft(n,this.get_scrollLeft());
}},dispose:function(){this.disposeWidget();
this._disposeScroll();
this._disposeKeyboardNavigation();
c.RadGantt.callBaseMethod(this,"dispose");
},disposeWidget:function(){this._widget.destroy();
},_disposeScroll:function(){a(".rgtTimelineContent").off("scroll");
},proxy:function(o,n){var q=this.get_webServiceSettings();
var p;
if(q){p={task:{read:q.get_method(),update:q.get_updateTasksMethod(),destroy:q.get_deleteTasksMethod(),create:q.get_insertTasksMethod()},dependency:{read:q.get_getDependenciesMethod(),destroy:q.get_deleteDependenciesMethod(),create:q.get_insertDependenciesMethod()},assignment:{read:q.get_getAssignmentsMethod(),update:q.get_updateAssignmentsMethod(),destroy:q.get_deleteAssignmentsMethod(),create:q.get_insertAssignmentsMethod()}};
return d.transport({path:q.get_path(),type:q.get_useHttpGet()?"GET":"POST",methods:p[o]});
}else{return new c.Gantt.transportProxy({data:this[n](),id:this._uniqueId,type:o,commandsCache:this._commandsCache});
}},widget:function(){var p=this;
var n=!this.get_readOnly();
if(n){n=this._getEditableOpitons();
}var o={dataSource:this.tasksDataSource(),date:this.get_selectedDate(),dependencies:this.dependenciesDataSource(),autoBind:true,selectable:!this.get_readOnly(),editable:n,toolbar:this.toolbar(),currentTimeMarker:this.currentTimeMarker(),messages:this.get_localization(),showWorkHours:!this.get_showFullTime(),showWorkDays:!this.get_showFullWeek(),workWeekStart:this.get_workWeekStart(),workWeekEnd:this.get_workWeekEnd(),tooltip:{visible:this.get_showTooltip()},hourSpan:this.get_hourSpan(),snap:this.get_snapToGrid(),height:this.get_height(),width:this.get_width(),listWidth:this.get_listWidth(),rowHeight:this.get_rowHeight(),views:this.views(),columns:this.columns(),resizable:this.get_allowColumnResize(),navigatable:this._getNavigatable(),skin:this._skin,range:{start:this.get_rangeStart(),end:this.get_rangeEnd()},pdf:this.get_pdfSettings(),taskTemplate:this.get_clientTemplate(),moveStart:function(q){if(a.raiseCancellableControlEvent(p,"taskMoveStart",{task:q.task})){q.preventDefault();
}},move:function(r){var q={task:r.task,start:r.start};
if(a.raiseCancellableControlEvent(p,"taskMoving",q)){r.preventDefault();
}},moveEnd:function(r){var q={task:r.task,start:r.start};
if(a.raiseCancellableControlEvent(p,"taskMoveEnd",q)){r.preventDefault();
}},resizeStart:function(q){if(a.raiseCancellableControlEvent(p,"taskResizeStart",{task:q.task})){q.preventDefault();
}},resize:function(r){var q={task:r.task,start:r.start,end:r.end};
if(a.raiseCancellableControlEvent(p,"taskResizing",q)){r.preventDefault();
}},resizeEnd:function(r){var q={task:r.task,start:r.start,end:r.end};
if(a.raiseCancellableControlEvent(p,"taskResizeEnd",q)){r.preventDefault();
}},columnResize:function(r){var q={column:r.column,newWidth:r.newWidth,oldWidth:r.oldWidth};
a.raiseControlEvent(p,"columnResized",q);
},navigate:function(q){p._raiseNavigationCommand(q);
},pdfExport:function(q){if(a.raiseCancellableControlEvent(p,"pdfExporting",{})){q.preventDefault();
}},dataBound:function(q){if(!p._widget){p._widget=q.sender;
}a.raiseControlEvent(p,"dataBound",{});
}};
if(this.get_enableResources()){a.extend(true,o,{resources:this.resources(),assignments:this.assignments()});
}return o;
},repaint:function(){var n=this._widget;
if(n){n.resize();
n.refresh();
}},currentTimeMarker:function(){var n=this.get_showCurrentTimeMarker();
if(n){n={updateInterval:this.get_currentTimeMarkerInterval()};
}return n;
},toolbar:function(){var n=[];
if(!this.get_readOnly()&&this.get_allowTaskInsert()!==false){n.push("append");
}if(this.get_enablePdfExport()){n.push("pdf");
}return n;
},views:function(){var n={day:{selected:true,slotSize:100,timeHeaderTemplate:"#=kendo.toString(start, 't')#",dayHeaderTemplate:"#=kendo.toString(start, 'ddd M/dd')#"},week:{selected:false,slotSize:100,dayHeaderTemplate:"#=kendo.toString(start, 'ddd M/dd')#",weekHeaderTemplate:"#=kendo.toString(start, 'ddd M/dd')# - #=kendo.toString(kendo.date.addDays(end, -1), 'ddd M/dd')#"},month:{selected:false,slotSize:150,weekHeaderTemplate:"#=kendo.toString(start, 'ddd M/dd')# - #=kendo.toString(kendo.date.addDays(end, -1), 'ddd M/dd')#",monthHeaderTemplate:"#=kendo.toString(start, 'MMMM, yyyy')#"},year:{selected:false,slotSize:100,monthHeaderTemplate:"#=kendo.toString(start, 'MMM')#",yearHeaderTemplate:"#=kendo.toString(start, 'yyyy')#"}};
var o=a.map(this.get_viewsData(),function(p){if(p.range&&p.range.start){p.range.start=new Date(p.range.start);
}if(p.range&&p.range.end){p.range.end=new Date(p.range.end);
}if(p.date){p.date=new Date(p.date);
}return a.extend(true,{},n[p.type],p);
});
return o;
},columns:function(){var n=[{field:"id",title:"ID",sortable:false,editable:false},{field:"title",title:"Title",sortable:true,editable:true},{field:"start",title:"Start Time",sortable:true,editable:true,format:"{0:MM/dd/yyyy HH:mm}"},{field:"end",title:"End Time",sortable:true,editable:true,format:"{0:MM/dd/yyyy HH:mm}"},{field:"percentComplete",title:"Percent Complete",sortable:true,editable:true,format:"{0:p}"}];
var p={title:"",sortable:true,editable:true,format:""};
var o=this.get_columnsData();
var q=function(t){for(var u=0;
u<n.length;
u++){var s=n[u];
if(s.field===t.field){return a.extend({},s,t);
}}return a.extend({},p,t);
};
for(var r=0;
r<o.length;
r++){o[r]=q(o[r]);
}return o.length?o:n;
},tasksDataSource:function(){var n=this.get_customTaskFields();
var t=["default","string","number","date","boolean"];
var o;
var p;
var s={transport:this.proxy("task","get_tasksData"),schema:{model:{id:"id",fields:{id:{from:"ID"},orderId:{from:"OrderID",type:"number"},parentId:{from:"ParentID",defaultValue:null},title:{from:"Title",defaultValue:"",type:"string"},start:{from:"Start",type:"date"},end:{from:"End",type:"date"},percentComplete:{from:"PercentComplete",type:"number"},summary:{from:"Summary",type:"bool"},expanded:{from:"Expanded",type:"bool"}}},parse:i},batch:true};
for(var q=0,r=n.length;
q<r;
q++){o=n[q];
p={from:o.propertyName,type:t[o.type]};
if(o.defaultValue!==k){p.defaultValue=o.defaultValue;
}s.schema.model.fields[o.clientPropertyName]=p;
}if(this.get_webServiceSettings()){s.requestStart=this._getRequestEventHandler("Tasks");
}return s;
},dependenciesDataSource:function(){var n={transport:this.proxy("dependency","get_dependenciesData"),schema:{model:{id:"id",fields:{id:{from:"ID"},predecessorId:{from:"PredecessorID"},successorId:{from:"SuccessorID"},type:{from:"Type",type:"number"}}},parse:i},batch:true};
if(this.get_webServiceSettings()){n.requestStart=this._getRequestEventHandler("Dependencies");
}return n;
},resources:function(){var n={dataColorField:"Color",dataTextField:"Text",dataFormatField:"Format",dataSource:this.resourcesDataSource()};
return n;
},resourcesDataSource:function(){var o=this.get_resourcesData();
var p=this.get_webServiceSettings();
var n={schema:{model:{id:"id",fields:{id:{from:"ID"}}},parse:i}};
if(o.length>0){n.data=o;
}else{if(p){n.transport=d.transport({path:p.get_path(),type:p.get_useHttpGet()?"GET":"POST",methods:{read:p.get_getResourcesMethod()}});
n.requestStart=this._getRequestEventHandler("Resources");
}}return n;
},assignments:function(){var n={dataTaskIdField:"TaskID",dataResourceIdField:"ResourceID",dataValueField:"Units",dataSource:this.assignmentsDataSource()};
return n;
},assignmentsDataSource:function(){var n={transport:this.proxy("assignment","get_assignmentsData"),schema:{model:{id:"id",fields:{id:{from:"ID"},TaskID:{from:"TaskID"},ResourceID:{from:"ResourceID"},Units:{from:"Units"}}},parse:i},batch:true};
if(this.get_webServiceSettings()){n.requestStart=this._getRequestEventHandler("Assignments");
}return n;
},get_tasks:function(){var n=this._widget.dataSource.taskChildren();
var r=new c.GanttTaskCollection(this);
var q;
for(var o=0,p=n.length;
o<p;
o++){q=new c.GanttTask();
q._loadFromDictionary(n[o]);
r._add(q);
}return r;
},get_allTasks:function(){var n=this._widget.dataSource.taskAllChildren();
var r=[];
var q;
for(var o=0,p=n.length;
o<p;
o++){q=new c.GanttTask();
q._loadFromDictionary(n[o]);
q._owner=this;
r.push(q);
}return r;
},get_webServiceSettings:function(){return this._webServiceSettings;
},set_webServiceSettings:function(o){var n=b.deserialize(o);
this._webServiceSettings=new m(n);
},get_dependencies:function(){var n=this._widget.dependencies.view();
var o=new c.GanttDependencyCollection(this);
var p;
for(var q=0,r=n.length;
q<r;
q++){p=new c.GanttDependency();
p._loadFromDictionary(n[q]);
o._add(p);
}return o;
},get_resources:function(){var n=this._widget.resources.dataSource.view();
var r=new c.GanttResourceCollection(this);
var q;
for(var o=0,p=n.length;
o<p;
o++){q=new c.GanttResource();
q._loadFromDictionary(n[o]);
r._add(q);
}return r;
},get_assignments:function(){var p=this._widget.assignments.dataSource.view();
var o=new c.GanttAssignmentCollection(this);
var n;
for(var q=0,r=p.length;
q<r;
q++){n=new c.GanttAssignment();
n._loadFromDictionary(p[q]);
o._add(n);
}return o;
},get_postBackReference:function(){return this._postBackReference;
},get_selectedView:function(){var n=this._widget.timeline._selectedViewName;
switch(n){case"day":return c.GanttViewType.Day;
case"week":return c.GanttViewType.Week;
case"month":return c.GanttViewType.Month;
case"year":return c.GanttViewType.Year;
}},set_selectedView:function(n){var o=["day","week","month","year"];
this._widget.view(o[n]);
},get_scrollTop:function(){return this._scrollTop;
},set_scrollTop:function(n){this._scrollTop=n;
a(this.get_element()).find(".rgtTimelineContent").scrollTop(n);
},get_scrollLeft:function(){return this._scrollLeft;
},set_scrollLeft:function(o){var n=a(this.get_element()).find(".rgtTimelineContent");
this._scrollLeft=o;
if(n.length){h.scrollLeft(n,o);
}},exportToPdf:function(){if(this.get_enablePdfExport()){this._widget.saveAsPDF();
}},saveClientState:function(){return'{"scrollTop":'+Math.round(this.get_scrollTop())+', "scrollLeft":'+Math.round(this.get_scrollLeft())+', "selectedView":'+this.get_selectedView()+"}";
},postback:function(n){var o=this.get_postBackReference().replace("arguments",Sys.Serialization.JavaScriptSerializer.serialize(n).replace(/\\/g,"\\\\"));
eval(o);
},get_rippleZonesConfiguration:function(){return[{element:this.get_element(),rippleConfigurations:[{containerSelector:".radButton",disabledClass:"rgtTaskDelete"}]}];
},_extractTaskFromDomElement:function(p){var r;
var o;
var n;
var q=null;
r=a(p).closest(".rgtTask");
if(r.length>0){o=this._widget.dataSource;
n=o.getByUid(r.attr("data-uid"));
if(n){q=new c.GanttTask();
q._loadFromDictionary(n);
}}return q;
},_getRequestEventHandler:function(o){var n=this;
return function(q){var p={type:q.type+o,context:{}};
if(a.raiseCancellableControlEvent(n,"requestStart",p)){q.preventDefault();
return;
}q.sender.transport.parameterMap=function(s,r){var t={context:p.context};
if(r!=="read"){t.models=(s.models||[s]);
}return b.serialize(t);
};
};
},_raiseNavigationCommand:function(p){var n={view:p.view};
var o={day:"SwitchToDayView",week:"SwitchToWeekView",month:"SwitchToMonthView",year:"SwitchToYearView"};
if(a.raiseCancellableControlEvent(this,"navigationCommand",n)){p.preventDefault();
}else{if(this._postBackOnNavigate){p.preventDefault();
this.postback({commandName:o[n.view]});
}}},_insertTask:function(n,p){var r=this._widget;
var q=p._data;
var o=r.dataSource._createNewModel(q);
r._createTask(o,n);
},_updateTask:function(o,p){var n=this._getKendoTask(o);
this._widget._updateTask(n,p);
},_removeTask:function(o){var n=this._getKendoTask(o);
this._widget.removeTask(n);
},_addDependency:function(n){var q=this._widget;
var o=n._getInfo();
var p=q.dependencies._createNewModel(o);
q._createDependency(p);
},_removeDependency:function(n){var o=this._getKendoDependency(n);
this._widget.removeDependency(o);
},_updateAssignment:function(n){var o=this._getKendoAssignment(n);
this._widget._updateAssignment(o,n.get_units());
},_addAssignment:function(n){var r=this._widget;
var p=n._getInfo();
var o=r.assignments.dataSource;
var q=o._createNewModel(p);
o.add(q);
},_removeAssignment:function(n){var o=this._getKendoAssignment(n);
this._widget._removeAssignment(o);
},_getKendoTask:function(n){return this._widget.dataSource.getByUid(n._uid);
},_getKendoDependency:function(n){return this._widget.dependencies.getByUid(n._uid);
},_getKendoAssignment:function(n){return this._widget.assignments.dataSource.getByUid(n._uid);
},_extendStyles:function(){var n=" radSkin_"+this._skin;
if($telerik.isRightToLeft(this.get_element())){f.styles.wrapper+=" RadGantt_rtl RadGantt_"+this._skin+"_rtl k-rtl";
}f.styles.popupWrapper+=n;
g.styles.dragClue+=n;
},_initializePostback:function(){var q=this;
var p=[this._postBackOnTaskInsert,this._postBackOnTaskUpdate,this._postBackOnTaskDelete,this._postBackOnDependencyInsert,this._postBackOnDependencyDelete,this._postBackOnAssignmentInsert,this._postBackOnAssignmentUpdate,this._postBackOnAssignmentDelete];
var o=["_createTask","_updateTask","_removeTask","_createDependency","_removeDependency","_updateAssignments","_updateAssignments","_updateAssignments"];
var n=a(o).filter(function(s){return p[s];
});
var r=a.grep(n,function(t,s){return a.inArray(t,n)===s;
});
a(r).each(function(t,s){var v=q._widget;
var u=v[s];
q._widget[s]=function(){v.dataSource.transport.set_postback(true);
if(v.dependencies.transport.set_postback){v.dependencies.transport.set_postback(true);
}if(v.assignments.dataSource.transport.set_postback){v.assignments.dataSource.transport.set_postback(true);
}u.apply(this,arguments);
q._commandsCache.commandName="Postback";
q.postback(q._commandsCache);
};
});
},_getNavigatable:function(){return this._navigationSettings.focusKey!==k;
},_initializeKeyboardNavigation:function(){var q=this._widget;
var p=this._navigationSettings;
var n=p.commandKey;
if(this._getNavigatable()){var o=this._keyboardNavigationHandler=function(t){var r=t.altKey===((1&n)>0);
var s=t.ctrlKey===((2&n)>0);
var u=t.shiftKey===((4&n)>0);
if(r&&s&&u&&t.keyCode===p.focusKey){q.list.content.find("table").focus();
}};
a(document.body).on("keydown",o);
}},_disposeKeyboardNavigation:function(){if(this._getNavigatable()){a(document.body).off("keydown",this._keyboardNavigationHandler);
}},_getEditableOpitons:function(){var s=this.get_allowTaskInsert();
var w=this.get_allowTaskUpdate();
var r=this.get_allowTaskDelete();
var t=this.get_allowTaskMove();
var v=this.get_allowTaskResize();
var u=this.get_allowTaskReorder();
var n=this.get_allowPercentCompleteDrag();
var p=this.get_allowDependencyInsert();
var q=this.get_allowDependencyDelete();
var o=this.get_displayDeleteConfirmation();
if(s&&w&&r&&t&&v&&u&&n&&p&&q&&o){return true;
}return{create:s,update:w,destroy:r,move:t,resize:v,reorder:u,dragPercentComplete:n,dependencyCreate:p,dependencyDestroy:q,confirmation:o};
},_getWidgetOptions:function(o,r){var q={snapToGrid:"snap",clientTemplate:"taskTemplate",allowColumnResize:"resizable",showFullTime:"showWorkHours",showFullWeek:"showWorkDays"};
var p={};
switch(o){case"showCurrentTimeMarker":case"currentTimeMarkerInterval":p.currentTimeMarker=this.currentTimeMarker();
break;
case"displayDeleteConfirmation":case"readOnly":var n=!this.get_readOnly();
p.selectable=!this.get_readOnly();
if(n){n=this._getEditableOpitons();
}p.editable=n;
p.toolbar=this.toolbar();
break;
case"allowTaskInsert":case"allowTaskUpdate":case"allowTaskDelete":case"allowTaskMove":case"allowTaskReorder":case"allowTaskResize":case"allowPercentCompleteDrag":case"allowDependencyInsert":case"allowDependencyDelete":if(!this.get_readOnly()){p.editable=this._getEditableOpitons();
p.toolbar=this.toolbar();
}break;
case"showTooltip":p.tooltip={visible:r};
break;
case"showFullTime":case"showFullWeek":p[q[o]||o]=!r;
break;
default:p[q[o]||o]=r;
}return p;
}};
function j(n,o){a.each(o,function(q,p){n.prototype["get_"+q]=function(){var r=this["_"+q];
return typeof r=="undefined"?p:r;
};
n.prototype["set_"+q]=function(t){this["_"+q]=t;
if(this._widget){switch(q){case"selectedDate":this._widget.date(t);
break;
case"rangeStart":case"rangeEnd":var s={start:this.get_rangeStart(),end:this.get_rangeEnd()};
this._widget.range(s);
break;
default:var r=this._getWidgetOptions(q,t);
this._widget.setOptions(r);
this.set_scrollTop(this.get_scrollTop());
this.set_scrollLeft(this.get_scrollLeft());
}}};
});
}j(c.RadGantt,{allowColumnResize:false,clientTemplate:null,currentTimeMarkerInterval:10000,displayDeleteConfirmation:true,height:700,hourSpan:1,listWidth:"30%",readOnly:false,rowHeight:null,snapToGrid:true,showCurrentTimeMarker:true,showFullTime:false,showFullWeek:true,showTooltip:true,width:"100%",rangeStart:null,rangeEnd:null,selectedDate:null,allowTaskInsert:true,allowTaskUpdate:true,allowTaskDelete:true,allowTaskMove:true,allowTaskReorder:true,allowTaskResize:true,allowPercentCompleteDrag:true,allowDependencyInsert:true,allowDependencyDelete:true,workWeekStart:c.DayOfWeek.Monday,workWeekEnd:c.DayOfWeek.Friday});
a.registerControlProperties(c.RadGantt,{tasksData:[],dependenciesData:[],resourcesData:[],assignmentsData:[],viewsData:[],columnsData:[],customTaskFields:[],localization:{},pdfSettings:{},enableResources:false,enablePdfExport:false});
a.registerControlEvents(c.RadGantt,["navigationCommand","taskMoveStart","taskMoving","taskMoveEnd","taskResizeStart","taskResizing","taskResizeEnd","columnResized","pdfExporting","requestStart","dataBound"]);
c.RadGantt.registerClass("Telerik.Web.UI.RadGantt",c.RadWebControl);
})($telerik.$);
(function(a,b,c){b.GanttTask=function(){this._data={parentId:null,title:"",percentComplete:0,summary:false,expanded:true};
this._owner=null;
};
b.GanttTask.prototype={_loadFromDictionary:function(d){this._data=a.extend({},d);
if(d.uid!==c){this._uid=d.uid;
}},get_id:function(){return this._data.id;
},get_parentId:function(){return this._data.parentId;
},get_orderId:function(){return this._data.orderId;
},get_start:function(){return this._data.start;
},get_end:function(){return this._data.end;
},get_title:function(){return this._data.title;
},get_percentComplete:function(){return this._data.percentComplete;
},get_summary:function(){return this._data.summary;
},get_expanded:function(){return this._data.expanded;
},get_tasks:function(){var k=new b.GanttTaskCollection(this);
var f;
var e;
var d;
var j;
if(this._owner){f=this._owner._widget.dataSource;
e=f.getByUid(this._uid);
if(e){d=f.taskChildren(e);
for(var g=0,h=d.length;
g<h;
g++){j=new b.GanttTask();
j._loadFromDictionary(d[g]);
k._add(j);
}}}return k;
},get_dependencies:function(){var e=new b.GanttDependencyCollection(this);
var d;
if(this._owner){d=this._owner._widget.dependencies.dependencies(this.get_id());
e=this._createDependencyCollection(d);
}return e;
},get_predecessors:function(){var e=new b.GanttDependencyCollection(this);
var d;
if(this._owner){d=this._owner._widget.dependencies.predecessors(this.get_id());
e=this._createDependencyCollection(d);
}return e;
},get_successors:function(){var e=new b.GanttDependencyCollection(this);
var d;
if(this._owner){d=this._owner._widget.dependencies.successors(this.get_id());
e=this._createDependencyCollection(d);
}return e;
},get_element:function(){var e=this._owner;
var d=null;
if(e){d=a(e.get_element()).find(".rgtTimelineContent").find(".rgtTask[data-uid='"+this._uid+"']")[0];
}return d;
},set_start:function(d){this._data.start=d;
this._update({start:d});
},set_end:function(d){this._data.end=d;
this._update({end:d});
},set_title:function(d){this._data.title=d;
this._update({title:d});
},set_percentComplete:function(d){this._data.percentComplete=d;
this._update({percentComplete:d});
},set_expanded:function(d){this._data.expanded=d;
this._update({expanded:d});
},_update:function(d){if(this._owner){this._owner._updateTask(this,d);
}},_createDependencyCollection:function(d){var f;
var e=new b.GanttDependencyCollection(this);
for(var g=0,h=d.length;
g<h;
g++){f=new b.GanttDependency();
f._loadFromDictionary(d[g]);
e._add(f);
}return e;
}};
b.GanttTask.registerClass("Telerik.Web.UI.GanttTask");
})($telerik.$,Telerik.Web.UI);
(function(a,b){b.GanttTaskCollection=function(c){if(c instanceof b.GanttTask){this._owner=c._owner;
}else{this._owner=c;
}this._parent=c;
this._array=[];
};
b.GanttTaskCollection.prototype={_add:function(c){this._array.push(c);
c._owner=this._owner;
},_insert:function(c,d){Array.insert(this._array,c,d);
d._owner=this._owner;
},_remove:function(c){this._array.pop(c);
c._owner=null;
},add:function(d){var c=this._array.length;
this.insert(c,d);
},insert:function(c,d){this._insert(c,d);
if(this._owner===this._parent){d._parentId=null;
}else{d._parentId=this._parent.get_id();
}this._owner._insertTask(c,d);
},remove:function(c){if(this.indexOf(c)>-1){this._remove(c);
this._owner._removeTask(c);
}},get_count:function(){return this._array.length;
},getTask:function(c){return this._array[c];
},indexOf:function(f){var c=this._array;
for(var d=0,e=c.length;
d<e;
d++){if(c[d]._uid===f._uid){return d;
}}return -1;
},toArray:function(){return this._array.slice(0);
}};
b.GanttTaskCollection.registerClass("Telerik.Web.UI.GanttTaskCollection");
})($telerik.$,Telerik.Web.UI);
(function(a,b,c){a.registerEnum(b,"GanttDependencyType",{FinishFinish:0,FinishStart:1,StartFinish:2,StartStart:3});
b.GanttDependency=function(){this._type=b.GanttDependencyType.FinishFinish;
this._owner=null;
};
b.GanttDependency.prototype={_loadFromDictionary:function(d){if(d.id!==c){this._id=d.id;
}if(d.predecessorId!==c){this._predecessorId=d.predecessorId;
}if(d.successorId!==c){this._successorId=d.successorId;
}if(d.type!==c){this._type=d.type;
}if(d.uid!==c){this._uid=d.uid;
}},get_id:function(){return this._id;
},get_predecessorId:function(){return this._predecessorId;
},get_successorId:function(){return this._successorId;
},get_type:function(){return this._type;
},_getInfo:function(){var d={predecessorId:this._predecessorId,successorId:this._successorId,type:this._type};
return d;
}};
b.GanttDependency.registerClass("Telerik.Web.UI.GanttDependency");
})($telerik.$,Telerik.Web.UI);
(function(a,b){b.GanttDependencyCollection=function(c){this._parent=c;
this._array=[];
};
b.GanttDependencyCollection.prototype={_add:function(c){this._array.push(c);
c._owner=this._parent;
},_remove:function(c){this._array.pop(c);
c._owner=null;
},add:function(c){this._add(c);
this._parent._addDependency(c);
},remove:function(c){if(this.indexOf(c)>-1){this._remove(c);
this._parent._removeDependency(c);
}},get_count:function(){return this._array.length;
},getDependency:function(c){return this._array[c];
},indexOf:function(d){var c=this._array;
for(var e=0,f=c.length;
e<f;
e++){if(c[e]._uid===d._uid){return e;
}}return -1;
},toArray:function(){return this._array.slice(0);
}};
b.GanttDependencyCollection.registerClass("Telerik.Web.UI.GanttDependencyCollection");
})($telerik.$,Telerik.Web.UI);
(function(a,b,c){b.GanttResource=function(){this._owner=null;
};
b.GanttResource.prototype={_loadFromDictionary:function(d){if(d.id!==c){this._id=d.id;
}if(d.Text!==c){this._text=d.Text;
}if(d.Color!==c){this._color=d.Color;
}if(d.Format!==c){this._format=d.Format;
}if(d.uid!==c){this._uid=d.uid;
}},get_id:function(){return this._id;
},get_text:function(){return this._text;
},get_color:function(){return this._color;
},get_format:function(){return this._format;
}};
b.GanttResource.registerClass("Telerik.Web.UI.GanttResource");
})($telerik.$,Telerik.Web.UI);
(function(a,b){b.GanttResourceCollection=function(c){this._parent=c;
this._array=[];
};
b.GanttResourceCollection.prototype={_add:function(c){this._array.push(c);
c._owner=this._parent;
},get_count:function(){return this._array.length;
},getResource:function(c){return this._array[c];
},indexOf:function(f){var c=this._array;
for(var d=0,e=c.length;
d<e;
d++){if(c[d]._uid===f._uid){return d;
}}return -1;
},toArray:function(){return this._array.slice(0);
}};
})($telerik.$,Telerik.Web.UI);
(function(a,b,c){b.GanttAssignment=function(){this._owner=null;
};
b.GanttAssignment.prototype={_loadFromDictionary:function(d){if(d.id!==c){this._id=d.id;
}if(d.TaskID!==c){this._taskId=d.TaskID;
}if(d.ResourceID!==c){this._resourceId=d.ResourceID;
}if(d.Units!==c){this._units=d.Units;
}if(d.uid!==c){this._uid=d.uid;
}},get_id:function(){return this._id;
},get_taskId:function(){return this._taskId;
},get_resourceId:function(){return this._resourceId;
},get_units:function(){return this._units;
},set_units:function(d){this._units=d;
this._update();
},_getInfo:function(){var d={TaskID:this._taskId,ResourceID:this._resourceId,Units:this._units};
return d;
},_update:function(){if(this._owner){this._owner._updateAssignment(this);
}}};
b.GanttAssignment.registerClass("Telerik.Web.UI.GanttAssignment");
})($telerik.$,Telerik.Web.UI);
(function(a,b){b.GanttAssignmentCollection=function(c){this._parent=c;
this._array=[];
};
b.GanttAssignmentCollection.prototype={_add:function(c){this._array.push(c);
c._owner=this._parent;
},_remove:function(c){this._array.pop(c);
c._owner=null;
},add:function(c){this._add(c);
this._parent._addAssignment(c);
},remove:function(c){if(this.indexOf(c)>-1){this._remove(c);
this._parent._removeAssignment(c);
}},get_count:function(){return this._array.length;
},getAssignment:function(c){return this._array[c];
},indexOf:function(d){var c=this._array;
for(var e=0,f=c.length;
e<f;
e++){if(c[e]._uid===d._uid){return e;
}}return -1;
},toArray:function(){return this._array.slice(0);
}};
b.GanttAssignmentCollection.registerClass("Telerik.Web.UI.GanttAssignmentCollection");
})($telerik.$,Telerik.Web.UI);
