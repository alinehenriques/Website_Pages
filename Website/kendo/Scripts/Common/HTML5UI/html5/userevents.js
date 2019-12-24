(function(b,a){a("kendo.userevents",["kendo.core"],b);
}(function(){var a={id:"userevents",name:"User Events",category:"framework",depends:["core"],hidden:true};
(function(b,F){var q=window.kendo,z=q.support,d=q.Class,t=q.Observable,s=b.now,i=b.extend,u=z.mobileOS,p=u&&u.android,e=800,f=z.browser.msie?5:0,v="press",o="hold",x="select",y="start",r="move",h="end",c="cancel",A="tap",w="release",l="gesturestart",j="gesturechange",k="gestureend",m="gesturetap";
var B={api:0,touch:0,mouse:9,pointer:9};
var g=!z.touch||z.mouseAndTouchPresent;
function E(K,L){var M=K.x.location,O=K.y.location,N=L.x.location,P=L.y.location,I=M-N,J=O-P;
return{center:{x:(M+N)/2,y:(O+P)/2},distance:Math.sqrt(I*I+J*J)};
}function n(K){var P=[],N=K.originalEvent,J=K.currentTarget,L=0,M,I,O;
if(K.api){P.push({id:2,event:K,target:K.target,currentTarget:K.target,location:K,type:"api"});
}else{if(K.type.match(/touch/)){I=N?N.changedTouches:[];
for(M=I.length;
L<M;
L++){O=I[L];
P.push({location:O,event:K,target:O.target,currentTarget:J,id:O.identifier,type:"touch"});
}}else{if(z.pointers||z.msPointers){P.push({location:N,event:K,target:K.target,currentTarget:J,id:N.pointerId,type:"pointer"});
}else{P.push({id:1,event:K,target:K.target,currentTarget:J,location:K,type:"mouse"});
}}}return P;
}var D=d.extend({init:function(I,J){var K=this;
K.axis=I;
K._updateLocationData(J);
K.startLocation=K.location;
K.velocity=K.delta=0;
K.timeStamp=s();
},move:function(I){var K=this,J=I["page"+K.axis],M=s(),L=M-K.timeStamp||1;
if(!J&&p){return;
}K.delta=J-K.location;
K._updateLocationData(I);
K.initialDelta=J-K.startLocation;
K.velocity=K.delta/L;
K.timeStamp=M;
},_updateLocationData:function(J){var K=this,I=K.axis;
K.location=J["page"+I];
K.client=J["client"+I];
K.screen=J["screen"+I];
}});
var C=d.extend({init:function(K,I,J){i(this,{x:new D("X",J.location),y:new D("Y",J.location),type:J.type,useClickAsTap:K.useClickAsTap,threshold:K.threshold||B[J.type],userEvents:K,target:I,currentTarget:J.currentTarget,initialTouch:J.target,id:J.id,pressEvent:J,_moved:false,_finished:false});
},press:function(){this._holdTimeout=setTimeout(b.proxy(this,"_hold"),this.userEvents.minHold);
this._trigger(v,this.pressEvent);
},_hold:function(){this._trigger(o,this.pressEvent);
},move:function(J){var I=this;
if(I._finished){return;
}I.x.move(J.location);
I.y.move(J.location);
if(!I._moved){if(I._withinIgnoreThreshold()){return;
}if(!G.current||G.current===I.userEvents){I._start(J);
}else{return I.dispose();
}}if(!I._finished){I._trigger(r,J);
}},end:function(I){this.endTime=s();
if(this._finished){return;
}this._finished=true;
this._trigger(w,I);
if(this._moved){this._trigger(h,I);
}else{if(!this.useClickAsTap){this._trigger(A,I);
}}clearTimeout(this._holdTimeout);
this.dispose();
},dispose:function(){var J=this.userEvents,I=J.touches;
this._finished=true;
this.pressEvent=null;
clearTimeout(this._holdTimeout);
I.splice(b.inArray(this,I),1);
},skip:function(){this.dispose();
},cancel:function(){this.dispose();
},isMoved:function(){return this._moved;
},_start:function(I){clearTimeout(this._holdTimeout);
this.startTime=s();
this._moved=true;
this._trigger(y,I);
},_trigger:function(K,M){var L=this,J=M.event,I={touch:L,x:L.x,y:L.y,target:L.target,event:J};
if(L.userEvents.notify(K,I)){J.preventDefault();
}},_withinIgnoreThreshold:function(){var I=this.x.initialDelta,J=this.y.initialDelta;
return Math.sqrt(I*I+J*J)<=this.threshold;
}});
function H(I){var J=q.eventMap.up.split(" "),K=0,L=J.length;
for(;
K<L;
K++){I(J[K]);
}}var G=t.extend({init:function(I,L){var O=this,J,K=q.guid();
L=L||{};
J=O.filter=L.filter;
O.threshold=L.threshold||f;
O.minHold=L.minHold||e;
O.touches=[];
O._maxTouches=L.multiTouch?2:1;
O.allowSelection=L.allowSelection;
O.captureUpIfMoved=L.captureUpIfMoved;
O.useClickAsTap=!L.fastTap&&!z.delayedClick();
O.eventNS=K;
I=b(I).handler(O);
t.fn.init.call(O);
i(O,{element:I,surface:L.global&&g?b(I[0].ownerDocument.documentElement):b(L.surface||I),stopPropagation:L.stopPropagation,pressed:false});
O.surface.handler(O).on(q.applyEventMap("move",K),"_move").on(q.applyEventMap("up cancel",K),"_end");
I.on(q.applyEventMap("down",K),J,"_start");
if(O.useClickAsTap){I.on(q.applyEventMap("click",K),J,"_click");
}if(z.pointers||z.msPointers){if(z.browser.version<11){I.css("-ms-touch-action","pinch-zoom double-tap-zoom");
}else{I.css("touch-action",L.touchAction||"none");
}}if(L.preventDragEvent){I.on(q.applyEventMap("dragstart",K),q.preventDefault);
}I.on(q.applyEventMap("mousedown",K),J,{root:I},"_select");
if(O.captureUpIfMoved&&z.eventCapture){var N=O.surface[0],M=b.proxy(O.preventIfMoving,O);
H(function(P){N.addEventListener(P,M,true);
});
}O.bind([v,o,A,y,r,h,w,c,l,j,k,m,x],L);
},preventIfMoving:function(I){if(this._isMoved()){I.preventDefault();
}},destroy:function(){var J=this;
if(J._destroyed){return;
}J._destroyed=true;
if(J.captureUpIfMoved&&z.eventCapture){var I=J.surface[0];
H(function(K){I.removeEventListener(K,J.preventIfMoving);
});
}J.element.kendoDestroy(J.eventNS);
J.surface.kendoDestroy(J.eventNS);
J.element.removeData("handler");
J.surface.removeData("handler");
J._disposeAll();
J.unbind();
delete J.surface;
delete J.element;
delete J.currentTarget;
},capture:function(){G.current=this;
},cancel:function(){this._disposeAll();
this.trigger(c);
},notify:function(J,I){var K=this,L=K.touches;
if(this._isMultiTouch()){switch(J){case r:J=j;
break;
case h:J=k;
break;
case A:J=m;
break;
}i(I,{touches:L},E(L[0],L[1]));
}return this.trigger(J,i(I,{type:J}));
},press:function(J,K,I){this._apiCall("_start",J,K,I);
},move:function(I,J){this._apiCall("_move",I,J);
},end:function(I,J){this._apiCall("_end",I,J);
},_isMultiTouch:function(){return this.touches.length>1;
},_maxTouchesReached:function(){return this.touches.length>=this._maxTouches;
},_disposeAll:function(){var I=this.touches;
while(I.length>0){I.pop().dispose();
}},_isMoved:function(){return b.grep(this.touches,function(I){return I.isMoved();
}).length;
},_select:function(I){if(!this.allowSelection||this.trigger(x,{event:I})){I.preventDefault();
}},_start:function(I){var N=this,K=0,J=N.filter,M,P=n(I),L=P.length,O,Q=I.which;
if(Q&&Q>1||N._maxTouchesReached()){return;
}G.current=null;
N.currentTarget=I.currentTarget;
if(N.stopPropagation){I.stopPropagation();
}for(;
K<L;
K++){if(N._maxTouchesReached()){break;
}O=P[K];
if(J){M=b(O.currentTarget);
}else{M=N.element;
}if(!M.length){continue;
}O=new C(N,M,O);
N.touches.push(O);
O.press();
if(N._isMultiTouch()){N.notify("gesturestart",{});
}}},_move:function(I){this._eachTouch("move",I);
},_end:function(I){this._eachTouch("end",I);
},_click:function(J){var I={touch:{initialTouch:J.target,target:b(J.currentTarget),endTime:s(),x:{location:J.pageX,client:J.clientX},y:{location:J.pageY,client:J.clientY}},x:J.pageX,y:J.pageY,target:b(J.currentTarget),event:J,type:"tap"};
if(this.trigger("tap",I)){J.preventDefault();
}},_eachTouch:function(N,K){var O=this,J={},Q=n(K),I=O.touches,L,P,R,M;
for(L=0;
L<I.length;
L++){P=I[L];
J[P.id]=P;
}for(L=0;
L<Q.length;
L++){R=Q[L];
M=J[R.id];
if(M){M[N](R);
}}},_apiCall:function(J,K,L,I){this[J]({api:true,pageX:K,pageY:L,clientX:K,clientY:L,target:b(I||this.element)[0],stopPropagation:b.noop,preventDefault:b.noop});
}});
G.defaultThreshold=function(I){f=I;
};
G.minHold=function(I){e=I;
};
q.getTouches=n;
q.touchDelta=E;
q.UserEvents=G;
}(window.kendo.jQuery));
return window.kendo;
},typeof define=="function"&&define.amd?define:function(a,b,c){(c||b)();
}));