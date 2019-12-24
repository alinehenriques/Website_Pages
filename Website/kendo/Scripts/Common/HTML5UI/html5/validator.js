(function(b,a){a("kendo.validator",["kendo.core"],b);
}(function(){var a={id:"validator",name:"Validator",category:"web",description:"The Validator offers an easy way to do a client-side form validation.",depends:["core"]};
(function(b,z){var n=window.kendo,F=n.ui.Widget,r=".kendoValidator",l="k-invalid-msg",m=new RegExp(l,"i"),k="k-invalid",E="k-valid",g=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,A=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,j=":input:not(:button,[type=submit],[type=reset],[disabled],[readonly])",e=":checkbox:not([disabled],[readonly])",s="[type=number],[type=range]",c="blur",p="name",h="form",q="novalidate",B="validate",d="change",C="validateInput",w=b.proxy,v=function(H,G){if(typeof G==="string"){G=new RegExp("^(?:"+G+")$");
}return G.test(H);
},o=function(G,I,H){var J=G.val();
if(G.filter(I).length&&J!==""){return v(J,H);
}return true;
},i=function(G,H){if(G.length){return G[0].attributes[H]!=null;
}return false;
};
if(!n.ui.validator){n.ui.validator={rules:{},messages:{}};
}function x(G){var I=n.ui.validator.ruleResolvers||{},J={},H;
for(H in I){b.extend(true,J,I[H].resolve(G));
}return J;
}function f(G){return G.replace(/&amp/g,"&amp;").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">");
}function t(G){G=(G+"").split(".");
if(G.length>1){return G[1].length;
}return 0;
}function u(G){if(b.parseHTML){return b(b.parseHTML(G));
}return b(G);
}function y(J,K){var H=b(),I,G;
for(var L=0,M=J.length;
L<M;
L++){I=J[L];
if(m.test(I.className)){G=I.getAttribute(n.attr("for"));
if(G===K){H=H.add(I);
}}}return H;
}var D=F.extend({init:function(G,H){var J=this,I=x(G),K="["+n.attr("validate")+"!=false]";
H=H||{};
H.rules=b.extend({},n.ui.validator.rules,I.rules,H.rules);
H.messages=b.extend({},n.ui.validator.messages,I.messages,H.messages);
F.fn.init.call(J,G,H);
J._errorTemplate=n.template(J.options.errorTemplate);
if(J.element.is(h)){J.element.attr(q,q);
}J._inputSelector=j+K;
J._checkboxSelector=e+K;
J._errors={};
J._attachEvents();
J._isValidated=false;
},events:[B,d,C],options:{name:"Validator",errorTemplate:'<span class="k-widget k-tooltip k-tooltip-validation"><span class="k-icon k-i-warning"> </span> #=message#</span>',messages:{required:"{0} is required",pattern:"{0} is not valid",min:"{0} should be greater than or equal to {1}",max:"{0} should be smaller than or equal to {1}",step:"{0} is not valid",email:"{0} is not valid email",url:"{0} is not valid URL",date:"{0} is not valid date",dateCompare:"End date should be greater than or equal to the start date"},rules:{required:function(H){var G=H.filter("[type=checkbox]").length&&!H.is(":checked"),I=H.val();
return !(i(H,"required")&&(!I||I===""||I.length===0||G));
},pattern:function(G){if(G.filter("[type=text],[type=email],[type=url],[type=tel],[type=search],[type=password]").filter("[pattern]").length&&G.val()!==""){return v(G.val(),G.attr("pattern"));
}return true;
},min:function(G){if(G.filter(s+",["+n.attr("type")+"=number]").filter("[min]").length&&G.val()!==""){var H=parseFloat(G.attr("min"))||0,I=n.parseFloat(G.val());
return H<=I;
}return true;
},max:function(G){if(G.filter(s+",["+n.attr("type")+"=number]").filter("[max]").length&&G.val()!==""){var H=parseFloat(G.attr("max"))||0,I=n.parseFloat(G.val());
return H>=I;
}return true;
},step:function(H){if(H.filter(s+",["+n.attr("type")+"=number]").filter("[step]").length&&H.val()!==""){var I=parseFloat(H.attr("min"))||0,K=parseFloat(H.attr("step"))||1,L=parseFloat(H.val()),G=t(K),J;
if(G){J=Math.pow(10,G);
return Math.floor((L-I)*J)%(K*J)/Math.pow(100,G)===0;
}return(L-I)%K===0;
}return true;
},email:function(G){return o(G,"[type=email],["+n.attr("type")+"=email]",g);
},url:function(G){return o(G,"[type=url],["+n.attr("type")+"=url]",A);
},date:function(G){if(G.filter("[type^=date],["+n.attr("type")+"=date]").length&&G.val()!==""){return n.parseDate(G.val(),G.attr(n.attr("format")))!==null;
}return true;
}},validateOnBlur:true},destroy:function(){F.fn.destroy.call(this);
this.element.off(r);
},value:function(){if(!this._isValidated){return false;
}return this.errors().length===0;
},_submit:function(G){if(!this.validate()){G.stopPropagation();
G.stopImmediatePropagation();
G.preventDefault();
return false;
}return true;
},_checkElement:function(G){var H=this.value();
this.validateInput(G);
if(this.value()!==H){this.trigger(d);
}},_attachEvents:function(){var G=this;
if(G.element.is(h)){G.element.on("submit"+r,w(G._submit,G));
}if(G.options.validateOnBlur){if(!G.element.is(j)){G.element.on(c+r,G._inputSelector,function(){G._checkElement(b(this));
});
G.element.on("click"+r,G._checkboxSelector,function(){G._checkElement(b(this));
});
}else{G.element.on(c+r,function(){G._checkElement(G.element);
});
if(G.element.is(e)){G.element.on("click"+r,function(){G._checkElement(G.element);
});
}}}},validate:function(){var H;
var G;
var L=false;
var K;
var J=this.value();
this._errors={};
if(!this.element.is(j)){var I=false;
H=this.element.find(this._inputSelector);
for(G=0,K=H.length;
G<K;
G++){if(!this.validateInput(H.eq(G))){I=true;
}}L=!I;
}else{L=this.validateInput(this.element);
}this.trigger(B,{valid:L});
if(J!==L){this.trigger(d);
}return L;
},validateInput:function(I){I=b(I);
this._isValidated=true;
var P=this,O=P._errorTemplate,N=P._checkValidity(I),Q=N.valid,G="."+l,H=I.attr(p)||"",J=P._findMessageContainer(H).add(I.next(G).filter(function(){var S=b(this);
if(S.filter("["+n.attr("for")+"]").length){return S.attr(n.attr("for"))===H;
}return true;
})).hide(),M,R=!I.attr("aria-invalid");
I.removeAttr("aria-invalid");
if(!Q){M=P._extractMessage(I,N.key);
P._errors[H]=M;
var L=u(O({message:f(M)}));
var K=J.attr("id");
P._decorateMessageContainer(L,H);
if(K){L.attr("id",K);
}if(!J.replaceWith(L).length){L.insertAfter(I);
}L.show();
I.attr("aria-invalid",true);
}else{delete P._errors[H];
}if(R!==Q){this.trigger(C,{valid:Q,input:I});
}I.toggleClass(k,!Q);
I.toggleClass(E,Q);
return Q;
},hideMessages:function(){var I=this,G="."+l,H=I.element;
if(!H.is(j)){H.find(G).hide();
}else{H.next(G).hide();
}},_findMessageContainer:function(H){var K=n.ui.validator.messageLocators,L,G=b();
for(var I=0,J=this.element.length;
I<J;
I++){G=G.add(y(this.element[I].getElementsByTagName("*"),H));
}for(L in K){G=G.add(K[L].locate(this.element,H));
}return G;
},_decorateMessageContainer:function(G,H){var I=n.ui.validator.messageLocators,J;
G.addClass(l).attr(n.attr("for"),H||"");
for(J in I){I[J].decorate(G,H);
}G.attr("role","alert");
},_extractMessage:function(I,J){var K=this,G=K.options.messages[J],H=I.attr(p);
G=n.isFunction(G)?G(I):G;
return n.format(I.attr(n.attr(J+"-msg"))||I.attr("validationMessage")||I.attr("title")||G||"",H,I.attr(J)||I.attr(n.attr(J)));
},_checkValidity:function(G){var I=this.options.rules,H;
for(H in I){if(!I[H].call(this,G)){return{valid:false,key:H};
}}return{valid:true};
},errors:function(){var I=[],H=this._errors,G;
for(G in H){I.push(H[G]);
}return I;
}});
n.ui.plugin(D);
}(window.kendo.jQuery));
return window.kendo;
},typeof define=="function"&&define.amd?define:function(a,b,c){(c||b)();
}));