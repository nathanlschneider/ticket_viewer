 
/**
 * easyXDM
 * http://easyxdm.net/
 * Copyright(c) 2009-2011, Ã˜yvind Sean Kinsey, oyvind@kinsey.no.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(N,d,p,K,k,H){var b=this;var n=Math.floor(Math.random()*10000);var q=Function.prototype;var Q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;var R=/[\-\w]+\/\.\.\//;var F=/([^:])\/\//g;var I="";var o={};var M=N.easyXDM;var U="easyXDM_";var E;var y=false;var i;var h;function C(X,Z){var Y=typeof X[Z];return Y=="function"||(!!(Y=="object"&&X[Z]))||Y=="unknown"}function u(X,Y){return !!(typeof(X[Y])=="object"&&X[Y])}function r(X){return Object.prototype.toString.call(X)==="[object Array]"}function c(){var Z="Shockwave Flash",ad="application/x-shockwave-flash";if(!t(navigator.plugins)&&typeof navigator.plugins[Z]=="object"){var ab=navigator.plugins[Z].description;if(ab&&!t(navigator.mimeTypes)&&navigator.mimeTypes[ad]&&navigator.mimeTypes[ad].enabledPlugin){i=ab.match(/\d+/g)}}if(!i){var Y;try{Y=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");i=Array.prototype.slice.call(Y.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);Y=null}catch(ac){}}if(!i){return false}var X=parseInt(i[0],10),aa=parseInt(i[1],10);h=X>9&&aa>0;return true}var v,x;if(C(N,"addEventListener")){v=function(Z,X,Y){Z.addEventListener(X,Y,false)};x=function(Z,X,Y){Z.removeEventListener(X,Y,false)}}else{if(C(N,"attachEvent")){v=function(X,Z,Y){X.attachEvent("on"+Z,Y)};x=function(X,Z,Y){X.detachEvent("on"+Z,Y)}}else{throw new Error("Browser not supported")}}var W=false,J=[],L;if("readyState" in d){L=d.readyState;W=L=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(L=="loaded"||L=="interactive"))}else{W=!!d.body}function s(){if(W){return}W=true;for(var X=0;X<J.length;X++){J[X]()}J.length=0}if(!W){if(C(N,"addEventListener")){v(d,"DOMContentLoaded",s)}else{v(d,"readystatechange",function(){if(d.readyState=="complete"){s()}});if(d.documentElement.doScroll&&N===top){var g=function(){if(W){return}try{d.documentElement.doScroll("left")}catch(X){K(g,1);return}s()};g()}}v(N,"load",s)}function G(Y,X){if(W){Y.call(X);return}J.push(function(){Y.call(X)})}function m(){var Z=parent;if(I!==""){for(var X=0,Y=I.split(".");X<Y.length;X++){Z=Z[Y[X]]}}return Z.easyXDM}function e(X){N.easyXDM=M;I=X;if(I){U="easyXDM_"+I.replace(".","_")+"_"}return o}function z(X){return X.match(Q)[3]}function f(X){return X.match(Q)[4]||""}function j(Z){var X=Z.toLowerCase().match(Q);var aa=X[2],ab=X[3],Y=X[4]||"";if((aa=="http:"&&Y==":80")||(aa=="https:"&&Y==":443")){Y=""}return aa+"//"+ab+Y}function B(X){X=X.replace(F,"$1/");if(!X.match(/^(http||https):\/\//)){var Y=(X.substring(0,1)==="/")?"":p.pathname;if(Y.substring(Y.length-1)!=="/"){Y=Y.substring(0,Y.lastIndexOf("/")+1)}X=p.protocol+"//"+p.host+Y+X}while(R.test(X)){X=X.replace(R,"")}return X}function P(X,aa){var ac="",Z=X.indexOf("#");if(Z!==-1){ac=X.substring(Z);X=X.substring(0,Z)}var ab=[];for(var Y in aa){if(aa.hasOwnProperty(Y)){ab.push(Y+"="+H(aa[Y]))}}return X+(y?"#":(X.indexOf("?")==-1?"?":"&"))+ab.join("&")+ac}var S=(function(X){X=X.substring(1).split("&");var Z={},aa,Y=X.length;while(Y--){aa=X[Y].split("=");Z[aa[0]]=k(aa[1])}return Z}(/xdm_e=/.test(p.search)?p.search:p.hash));function t(X){return typeof X==="undefined"}var O=function(){var Y={};var Z={a:[1,2,3]},X='{"a":[1,2,3]}';if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(Z).replace((/\s/g),"")===X){return JSON}if(Object.toJSON){if(Object.toJSON(Z).replace((/\s/g),"")===X){Y.stringify=Object.toJSON}}if(typeof String.prototype.evalJSON==="function"){Z=X.evalJSON();if(Z.a&&Z.a.length===3&&Z.a[2]===3){Y.parse=function(aa){return aa.evalJSON()}}}if(Y.stringify&&Y.parse){O=function(){return Y};return Y}return null};function T(X,Y,Z){var ab;for(var aa in Y){if(Y.hasOwnProperty(aa)){if(aa in X){ab=Y[aa];if(typeof ab==="object"){T(X[aa],ab,Z)}else{if(!Z){X[aa]=Y[aa]}}}else{X[aa]=Y[aa]}}}return X}function a(){var Y=d.body.appendChild(d.createElement("form")),X=Y.appendChild(d.createElement("input"));X.name=U+"TEST"+n;E=X!==Y.elements[X.name];d.body.removeChild(Y)}function A(Y){if(t(E)){a()}var ac;if(E){ac=d.createElement('<iframe name="'+Y.props.name+'"/>')}else{ac=d.createElement("IFRAME");ac.name=Y.props.name}ac.id=ac.name=Y.props.name;delete Y.props.name;if(typeof Y.container=="string"){Y.container=d.getElementById(Y.container)}if(!Y.container){T(ac.style,{position:"absolute",top:"-2000px",left:"0px"});Y.container=d.body}var ab=Y.props.src;Y.props.src="javascript:false";T(ac,Y.props);ac.border=ac.frameBorder=0;ac.allowTransparency=true;Y.container.appendChild(ac);if(Y.onLoad){v(ac,"load",Y.onLoad)}if(Y.usePost){var aa=Y.container.appendChild(d.createElement("form")),X;aa.target=ac.name;aa.action=ab;aa.method="POST";if(typeof(Y.usePost)==="object"){for(var Z in Y.usePost){if(Y.usePost.hasOwnProperty(Z)){if(E){X=d.createElement('<input name="'+Z+'"/>')}else{X=d.createElement("INPUT");X.name=Z}X.value=Y.usePost[Z];aa.appendChild(X)}}}aa.submit();aa.parentNode.removeChild(aa)}else{ac.src=ab}Y.props.src=ab;return ac}function V(aa,Z){if(typeof aa=="string"){aa=[aa]}var Y,X=aa.length;while(X--){Y=aa[X];Y=new RegExp(Y.substr(0,1)=="^"?Y:("^"+Y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));if(Y.test(Z)){return true}}return false}function l(Z){var ae=Z.protocol,Y;Z.isHost=Z.isHost||t(S.xdm_p);y=Z.hash||false;if(!Z.props){Z.props={}}if(!Z.isHost){Z.channel=S.xdm_c.replace(/["'<>\\]/g,"");Z.secret=S.xdm_s;Z.remote=S.xdm_e.replace(/["'<>\\]/g,"");ae=S.xdm_p;if(Z.acl&&!V(Z.acl,Z.remote)){throw new Error("Access denied for "+Z.remote)}}else{Z.remote=B(Z.remote);Z.channel=Z.channel||"default"+n++;Z.secret=Math.random().toString(16).substring(2);if(t(ae)){if(j(p.href)==j(Z.remote)){ae="4"}else{if(C(N,"postMessage")||C(d,"postMessage")){ae="1"}else{if(Z.swf&&C(N,"ActiveXObject")&&c()){ae="6"}else{if(navigator.product==="Gecko"&&"frameElement" in N&&navigator.userAgent.indexOf("WebKit")==-1){ae="5"}else{if(Z.remoteHelper){ae="2"}else{ae="0"}}}}}}}Z.protocol=ae;switch(ae){case"0":T(Z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);if(Z.isHost){if(!Z.local){var ac=p.protocol+"//"+p.host,X=d.body.getElementsByTagName("img"),ad;var aa=X.length;while(aa--){ad=X[aa];if(ad.src.substring(0,ac.length)===ac){Z.local=ad.src;break}}if(!Z.local){Z.local=N}}var ab={xdm_c:Z.channel,xdm_p:0};if(Z.local===N){Z.usePolling=true;Z.useParent=true;Z.local=p.protocol+"//"+p.host+p.pathname+p.search;ab.xdm_e=Z.local;ab.xdm_pa=1}else{ab.xdm_e=B(Z.local)}if(Z.container){Z.useResize=false;ab.xdm_po=1}Z.remote=P(Z.remote,ab)}else{T(Z,{channel:S.xdm_c,remote:S.xdm_e,useParent:!t(S.xdm_pa),usePolling:!t(S.xdm_po),useResize:Z.useParent?false:Z.useResize})}Y=[new o.stack.HashTransport(Z),new o.stack.ReliableBehavior({}),new o.stack.QueueBehavior({encode:true,maxLength:4000-Z.remote.length}),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"1":Y=[new o.stack.PostMessageTransport(Z)];break;case"2":Z.remoteHelper=B(Z.remoteHelper);Y=[new o.stack.NameTransport(Z),new o.stack.QueueBehavior(),new o.stack.VerifyBehavior({initiate:Z.isHost})];break;case"3":Y=[new o.stack.NixTransport(Z)];break;case"4":Y=[new o.stack.SameOriginTransport(Z)];break;case"5":Y=[new o.stack.FrameElementTransport(Z)];break;case"6":if(!i){c()}Y=[new o.stack.FlashTransport(Z)];break}Y.push(new o.stack.QueueBehavior({lazy:Z.lazy,remove:true}));return Y}function D(aa){var ab,Z={incoming:function(ad,ac){this.up.incoming(ad,ac)},outgoing:function(ac,ad){this.down.outgoing(ac,ad)},callback:function(ac){this.up.callback(ac)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(var Y=0,X=aa.length;Y<X;Y++){ab=aa[Y];T(ab,Z,true);if(Y!==0){ab.down=aa[Y-1]}if(Y!==X-1){ab.up=aa[Y+1]}}return ab}function w(X){X.up.down=X.down;X.down.up=X.up;X.up=X.down=null}T(o,{version:"2.4.17.1",query:S,stack:{},apply:T,getJSONObject:O,whenReady:G,noConflict:e});o.DomHelper={on:v,un:x,requiresJSON:function(X){if(!u(N,"JSON")){d.write('<script type="text/javascript" src="'+X+'"><\/script>')}}};(function(){var X={};o.Fn={set:function(Y,Z){X[Y]=Z},get:function(Z,Y){var aa=X[Z];if(Y){delete X[Z]}return aa}}}());o.Socket=function(Y){var X=D(l(Y).concat([{incoming:function(ab,aa){Y.onMessage(ab,aa)},callback:function(aa){if(Y.onReady){Y.onReady(aa)}}}])),Z=j(Y.remote);this.origin=j(Y.remote);this.destroy=function(){X.destroy()};this.postMessage=function(aa){X.outgoing(aa,Z)};X.init()};o.Rpc=function(Z,Y){if(Y.local){for(var ab in Y.local){if(Y.local.hasOwnProperty(ab)){var aa=Y.local[ab];if(typeof aa==="function"){Y.local[ab]={method:aa}}}}}var X=D(l(Z).concat([new o.stack.RpcBehavior(this,Y),{callback:function(ac){if(Z.onReady){Z.onReady(ac)}}}]));this.origin=j(Z.remote);this.destroy=function(){X.destroy()};X.init()};o.stack.SameOriginTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa(ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:Y.channel,xdm_p:4}),name:U+Y.channel+"_provider"});ab=A(Y);o.Fn.set(Y.channel,function(ac){aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}})}else{aa=m().Fn.get(Y.channel,true)(function(ac){Z.up.incoming(ac,X)});K(function(){Z.up.callback(true)},0)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.FlashTransport=function(aa){var ac,X,ab,ad,Y,ae;function af(ah,ag){K(function(){ac.up.incoming(ah,ad)},0)}function Z(ah){var ag=aa.swf+"?host="+aa.isHost;var aj="easyXDM_swf_"+Math.floor(Math.random()*10000);o.Fn.set("flash_loaded"+ah.replace(/[\-.]/g,"_"),function(){o.stack.FlashTransport[ah].swf=Y=ae.firstChild;var ak=o.stack.FlashTransport[ah].queue;for(var al=0;al<ak.length;al++){ak[al]()}ak.length=0});if(aa.swfContainer){ae=(typeof aa.swfContainer=="string")?d.getElementById(aa.swfContainer):aa.swfContainer}else{ae=d.createElement("div");T(ae.style,h&&aa.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});d.body.appendChild(ae)}var ai="callback=flash_loaded"+ah.replace(/[\-.]/g,"_")+"&proto="+b.location.protocol+"&domain="+z(b.location.href)+"&port="+f(b.location.href)+"&ns="+I;ae.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+aj+"' data='"+ag+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+ag+"'></param><param name='flashvars' value='"+ai+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+ai+"' allowScriptAccess='always' wmode='transparent' src='"+ag+"' height='1' width='1'></embed></object>"}return(ac={outgoing:function(ah,ai,ag){Y.postMessage(aa.channel,ah.toString());if(ag){ag()}},destroy:function(){try{Y.destroyChannel(aa.channel)}catch(ag){}Y=null;if(X){X.parentNode.removeChild(X);X=null}},onDOMReady:function(){ad=aa.remote;o.Fn.set("flash_"+aa.channel+"_init",function(){K(function(){ac.up.callback(true)})});o.Fn.set("flash_"+aa.channel+"_onMessage",af);aa.swf=B(aa.swf);var ah=z(aa.swf);var ag=function(){o.stack.FlashTransport[ah].init=true;Y=o.stack.FlashTransport[ah].swf;Y.createChannel(aa.channel,aa.secret,j(aa.remote),aa.isHost);if(aa.isHost){if(h&&aa.swfNoThrottle){T(aa.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})}T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:6,xdm_s:aa.secret}),name:U+aa.channel+"_provider"});X=A(aa)}};if(o.stack.FlashTransport[ah]&&o.stack.FlashTransport[ah].init){ag()}else{if(!o.stack.FlashTransport[ah]){o.stack.FlashTransport[ah]={queue:[ag]};Z(ah)}else{o.stack.FlashTransport[ah].queue.push(ag)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.PostMessageTransport=function(aa){var ac,ad,Y,Z;function X(ae){if(ae.origin){return j(ae.origin)}if(ae.uri){return j(ae.uri)}if(ae.domain){return p.protocol+"//"+ae.domain}throw"Unable to retrieve the origin of the event"}function ab(af){var ae=X(af);if(ae==Z&&af.data.substring(0,aa.channel.length+1)==aa.channel+" "){ac.up.incoming(af.data.substring(aa.channel.length+1),ae)}}return(ac={outgoing:function(af,ag,ae){Y.postMessage(aa.channel+" "+af,ag||Z);if(ae){ae()}},destroy:function(){x(N,"message",ab);if(ad){Y=null;ad.parentNode.removeChild(ad);ad=null}},onDOMReady:function(){Z=j(aa.remote);if(aa.isHost){var ae=function(af){if(af.data==aa.channel+"-ready"){Y=("postMessage" in ad.contentWindow)?ad.contentWindow:ad.contentWindow.document;x(N,"message",ae);v(N,"message",ab);K(function(){ac.up.callback(true)},0)}};v(N,"message",ae);T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:1}),name:U+aa.channel+"_provider"});ad=A(aa)}else{v(N,"message",ab);Y=("postMessage" in N.parent)?N.parent:N.parent.document;Y.postMessage(aa.channel+"-ready",Z);K(function(){ac.up.callback(true)},0)}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.FrameElementTransport=function(Y){var Z,ab,aa,X;return(Z={outgoing:function(ad,ae,ac){aa.call(this,ad);if(ac){ac()}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);ab=null}},onDOMReady:function(){X=j(Y.remote);if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:j(p.href),xdm_c:Y.channel,xdm_p:5}),name:U+Y.channel+"_provider"});ab=A(Y);ab.fn=function(ac){delete ab.fn;aa=ac;K(function(){Z.up.callback(true)},0);return function(ad){Z.up.incoming(ad,X)}}}else{if(d.referrer&&j(d.referrer)!=S.xdm_e){N.top.location=S.xdm_e}aa=N.frameElement.fn(function(ac){Z.up.incoming(ac,X)});Z.up.callback(true)}},init:function(){G(Z.onDOMReady,Z)}})};o.stack.NameTransport=function(ab){var ac;var ae,ai,aa,ag,ah,Y,X;function af(al){var ak=ab.remoteHelper+(ae?"#_3":"#_2")+ab.channel;ai.contentWindow.sendMessage(al,ak)}function ad(){if(ae){if(++ag===2||!ae){ac.up.callback(true)}}else{af("ready");ac.up.callback(true)}}function aj(ak){ac.up.incoming(ak,Y)}function Z(){if(ah){K(function(){ah(true)},0)}}return(ac={outgoing:function(al,am,ak){ah=ak;af(al)},destroy:function(){ai.parentNode.removeChild(ai);ai=null;if(ae){aa.parentNode.removeChild(aa);aa=null}},onDOMReady:function(){ae=ab.isHost;ag=0;Y=j(ab.remote);ab.local=B(ab.local);if(ae){o.Fn.set(ab.channel,function(al){if(ae&&al==="ready"){o.Fn.set(ab.channel,aj);ad()}});X=P(ab.remote,{xdm_e:ab.local,xdm_c:ab.channel,xdm_p:2});T(ab.props,{src:X+"#"+ab.channel,name:U+ab.channel+"_provider"});aa=A(ab)}else{ab.remoteHelper=ab.remote;o.Fn.set(ab.channel,aj)}var ak=function(){var al=ai||this;x(al,"load",ak);o.Fn.set(ab.channel+"_load",Z);(function am(){if(typeof al.contentWindow.sendMessage=="function"){ad()}else{K(am,50)}}())};ai=A({props:{src:ab.local+"#_4"+ab.channel},onLoad:ak})},init:function(){G(ac.onDOMReady,ac)}})};o.stack.HashTransport=function(Z){var ac;var ah=this,af,aa,X,ad,am,ab,al;var ag,Y;function ak(ao){if(!al){return}var an=Z.remote+"#"+(am++)+"_"+ao;((af||!ag)?al.contentWindow:al).location=an}function ae(an){ad=an;ac.up.incoming(ad.substring(ad.indexOf("_")+1),Y)}function aj(){if(!ab){return}var an=ab.location.href,ap="",ao=an.indexOf("#");if(ao!=-1){ap=an.substring(ao)}if(ap&&ap!=ad){ae(ap)}}function ai(){aa=setInterval(aj,X)}return(ac={outgoing:function(an,ao){ak(an)},destroy:function(){N.clearInterval(aa);if(af||!ag){al.parentNode.removeChild(al)}al=null},onDOMReady:function(){af=Z.isHost;X=Z.interval;ad="#"+Z.channel;am=0;ag=Z.useParent;Y=j(Z.remote);if(af){T(Z.props,{src:Z.remote,name:U+Z.channel+"_provider"});if(ag){Z.onLoad=function(){ab=N;ai();ac.up.callback(true)}}else{var ap=0,an=Z.delay/50;(function ao(){if(++ap>an){throw new Error("Unable to reference listenerwindow")}try{ab=al.contentWindow.frames[U+Z.channel+"_consumer"]}catch(aq){}if(ab){ai();ac.up.callback(true)}else{K(ao,50)}}())}al=A(Z)}else{ab=N;ai();if(ag){al=parent;ac.up.callback(true)}else{T(Z,{props:{src:Z.remote+"#"+Z.channel+new Date(),name:U+Z.channel+"_consumer"},onLoad:function(){ac.up.callback(true)}});al=A(Z)}}},init:function(){G(ac.onDOMReady,ac)}})};o.stack.ReliableBehavior=function(Y){var aa,ac;var ab=0,X=0,Z="";return(aa={incoming:function(af,ad){var ae=af.indexOf("_"),ag=af.substring(0,ae).split(",");af=af.substring(ae+1);if(ag[0]==ab){Z="";if(ac){ac(true);ac=null}}if(af.length>0){aa.down.outgoing(ag[1]+","+ab+"_"+Z,ad);if(X!=ag[1]){X=ag[1];aa.up.incoming(af,ad)}}},outgoing:function(af,ad,ae){Z=af;ac=ae;aa.down.outgoing(X+","+(++ab)+"_"+af,ad)}})};o.stack.QueueBehavior=function(Z){var ac,ad=[],ag=true,aa="",af,X=0,Y=false,ab=false;function ae(){if(Z.remove&&ad.length===0){w(ac);return}if(ag||ad.length===0||af){return}ag=true;var ah=ad.shift();ac.down.outgoing(ah.data,ah.origin,function(ai){ag=false;if(ah.callback){K(function(){ah.callback(ai)},0)}ae()})}return(ac={init:function(){if(t(Z)){Z={}}if(Z.maxLength){X=Z.maxLength;ab=true}if(Z.lazy){Y=true}else{ac.down.init()}},callback:function(ai){ag=false;var ah=ac.up;ae();ah.callback(ai)},incoming:function(ak,ai){if(ab){var aj=ak.indexOf("_"),ah=parseInt(ak.substring(0,aj),10);aa+=ak.substring(aj+1);if(ah===0){if(Z.encode){aa=k(aa)}ac.up.incoming(aa,ai);aa=""}}else{ac.up.incoming(ak,ai)}},outgoing:function(al,ai,ak){if(Z.encode){al=H(al)}var ah=[],aj;if(ab){while(al.length!==0){aj=al.substring(0,X);al=al.substring(aj.length);ah.push(aj)}while((aj=ah.shift())){ad.push({data:ah.length+"_"+aj,origin:ai,callback:ah.length===0?ak:null})}}else{ad.push({data:al,origin:ai,callback:ak})}if(Y){ac.down.init()}else{ae()}},destroy:function(){af=true;ac.down.destroy()}})};o.stack.VerifyBehavior=function(ab){var ac,aa,Y,Z=false;function X(){aa=Math.random().toString(16).substring(2);ac.down.outgoing(aa)}return(ac={incoming:function(af,ad){var ae=af.indexOf("_");if(ae===-1){if(af===aa){ac.up.callback(true)}else{if(!Y){Y=af;if(!ab.initiate){X()}ac.down.outgoing(af)}}}else{if(af.substring(0,ae)===Y){ac.up.incoming(af.substring(ae+1),ad)}}},outgoing:function(af,ad,ae){ac.down.outgoing(aa+"_"+af,ad,ae)},callback:function(ad){if(ab.initiate){X()}}})};o.stack.RpcBehavior=function(ad,Y){var aa,af=Y.serializer||O();var ae=0,ac={};function X(ag){ag.jsonrpc="2.0";aa.down.outgoing(af.stringify(ag))}function ab(ag,ai){var ah=Array.prototype.slice;return function(){var aj=arguments.length,al,ak={method:ai};if(aj>0&&typeof arguments[aj-1]==="function"){if(aj>1&&typeof arguments[aj-2]==="function"){al={success:arguments[aj-2],error:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-2)}else{al={success:arguments[aj-1]};ak.params=ah.call(arguments,0,aj-1)}ac[""+(++ae)]=al;ak.id=ae}else{ak.params=ah.call(arguments,0)}if(ag.namedParams&&ak.params.length===1){ak.params=ak.params[0]}X(ak)}}function Z(an,am,ai,al){if(!ai){if(am){X({id:am,error:{code:-32601,message:"Procedure not found."}})}return}var ak,ah;if(am){ak=function(ao){ak=q;X({id:am,result:ao})};ah=function(ao,ap){ah=q;var aq={id:am,error:{code:-32099,message:ao}};if(ap){aq.error.data=ap}X(aq)}}else{ak=ah=q}if(!r(al)){al=[al]}try{var ag=ai.method.apply(ai.scope,al.concat([ak,ah]));if(!t(ag)){ak(ag)}}catch(aj){ah(aj.message)}}return(aa={incoming:function(ah,ag){var ai=af.parse(ah);if(ai.method){if(Y.handle){Y.handle(ai,X)}else{Z(ai.method,ai.id,Y.local[ai.method],ai.params)}}else{var aj=ac[ai.id];if(ai.error){if(aj.error){aj.error(ai.error)}}else{if(aj.success){aj.success(ai.result)}}delete ac[ai.id]}},init:function(){if(Y.remote){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)){ad[ag]=ab(Y.remote[ag],ag)}}}aa.down.init()},destroy:function(){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)&&ad.hasOwnProperty(ag)){delete ad[ag]}}aa.down.destroy()}})};b.easyXDM=o})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);var HEATAPI = HEATAPI || {};

HEATAPI.AJAX = (function () {

    var maximumWaitingTime = 60000; //60 sec

    var xhr;

    function createXhr() {
        if (!xhr) {
            if (typeof XMLHttpRequest != "undefined") {
                xhr = new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (e) {
                            //skip
                        }
                    }
                }
                xhr = new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available");
            }
        }
        return xhr;
    }

    function joinParams(params) {
        var pairs = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
            }
        }
        return pairs.join("&");
    }

    function request(params) {
        var method = params.type,
            url = params.url,
            data = joinParams(params.data),
            headers = params.headers || [],
            body = params.body, //is not supported now
            callback = params.callback,
            timeout = params.timeout;

        if (/get/i.test(method)) {
            if (data) url = url + '?' + data;
        }
        headers['X-Requested-With'] = 'XMLHttpRequest';
        xhr = createXhr();
        xhr.open(method.toUpperCase(), url, true);

        var requestTimer = setTimeout(function () {
            xhr.abort();
            if (typeof callback === "function") {
                callback(
                    {
                        success: false,
                        status: 408,
                        data: null,
                        rawData: null,
                        url: url,
                        message: "Connection error. Timeout"
                    });
            }
        }, timeout * 1000 || maximumWaitingTime);

        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }

            clearTimeout(requestTimer);
            var success = (xhr.status === 200);
            var contentType = xhr.getResponseHeader("Content-Type");
            var isJsonData = (/^application\/json/i).test(contentType);

            var response =
                {
                    success: success,
                    status: xhr.status,
                    url: url,
                    data: isJsonData ? JSON.parse(xhr.responseText) : null,
                    rawData: isJsonData ? null : xhr.responseText
                };

            if (!success) {
                response.message = (response.data && response.data.message) ? response.data.message : ("Connection error." + xhr.statusText);
            }

            if (typeof callback === "function") {
                callback(response);
            }
        };

        for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
                xhr.setRequestHeader(header, headers[header]);
            }
        }

        if (/get/i.test(method)) {
            xhr.send(null);
        } else {
            //TODO: Check if content-type is already existed
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-length", data.length);
            xhr.setRequestHeader("Connection", "close");
            xhr.send(data);
        }
    }

    function get(url, data, headers, fn, timeout) {
        request({
            type: 'get',
            url: url,
            data: data,
            headers: headers,
            callback: fn,
            timeout: timeout
        });
    }

    function post(url, data, headers, body, fn, timeout) {
        request({
            type: 'post',
            url: url,
            data: data,
            headers: headers,
            body: body,
            callback: fn,
            timeout: timeout
        });
    }

    return {
        //only get and post are supported now
        get: get,
        post: post
    };
})();if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNop = function() {
            },
            fBound = function() {
                return fToBind.apply(this instanceof fNop && oThis
                    ? this
                    : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNop.prototype = this.prototype;
        fBound.prototype = new fNop();

        return fBound;
    };
}

var HEATAPIUtils = {
    param: function (value) {
        var array = [];

        if (value && typeof value === "object") {
            for (var k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    array.push(k + "=" + value[k]);
                }
            }
        }
        return array.join("&");
    },

    getRandomString: function (stringLength) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        stringLength = stringLength || 8;

        var randomstring = '';
        for (var i = 0; i < stringLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    },
    
    hasClass: function(el, name) {
        return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
    },
        
    addClass: function(el, name){
        if (!this.hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }
    },

    removeClass: function(el, name)
    {
        if (this.hasClass(el, name)) {
            el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
        }
    },
        
    getJSONP: function (url, callback) {
        
        //create a unique callback name just for this request
        var cbnum = 'cb' + HEATAPIUtils.getJSONP.counter++;
        var cbname = 'HEATAPIUtils.getJSONP.' + cbnum;
        
        //add the callback name to the url query string
        if (url.indexOf('?') === -1) {
            url += '?jsonp=' + cbname;
        } else {
            url += '&jsonp=' + cbname;
        }

        //create the script element that will send this request
        var script = document.createElement('script');
        
        //define the callback function that will be invoked by the script

        HEATAPIUtils.getJSONP[cbnum] = function (response) {
            try {
                callback(response);
            } finally {
                delete HEATAPIUtils.getJSONP[cbnum];                 //delete the function
                script.parentNode.removeChild(script);  //remove script
            } 
        };
        
        //trigger http request
        script.src = url;
        document.body.appendChild(script);
    }
};
HEATAPIUtils.getJSONP.counter = 0;
HEATAPI.OAuth20Token = (function () {

    "use strict";

    var oAuth20Token = function(args) {

        if (!(this instanceof HEATAPI.OAuth20Token)) {
            return new HEATAPI.OAuth20Token();
        }

        args = args || { };

        this.access_token = args.access_token;
        this.error = args.error;
        this.expires_in = args.expires_in;
        this.state = args.state;

        return this;
    };

    return oAuth20Token;
})(this);
HEATAPI.CommunicationChannel = (function () {

    "use strict";

    var communicationChannel = function() {
        return this;
    };

    var prototype = communicationChannel.prototype;

    prototype.makeRESTCall = function(requestConfig, callback) {
        socketCall(requestConfig, callback);
    };

    function socketCall(requestConfig, callback) {
        requestConfig.path = 'https://portal.mhgi.net:443/HEAT/Modules/HEATAPI/' + requestConfig.path;

        requestConfig.headers = requestConfig.headers || { };
        var authToken = HEATAPI.Auth.getBearerToken();
        if (authToken) {
            requestConfig.headers["Authorization"] = authToken;
        } else {
            callback({
                success: false,
                status: 403,
                data: null,
                rawData: null,
                url: requestConfig.path,
                message: "Bearer token is empty"
            });
            return;
        }

        var socket = new easyXDM.Socket({
            remote: 'https://portal.mhgi.net:443/HEAT/Modules/HEATAPI/HEATAPIClient/Socket',
            onReady: function() {
                socket.postMessage(JSON.stringify(requestConfig));
            },
            onMessage: function(message) {
                if (typeof callback === "function") {
                    //message comes as json string, so convert it back to json
                    callback(JSON.parse(message));
                }
                socket.destroy();
            }
        });
    }

    return new communicationChannel();
})();HEATAPI.Client = (function () {

    "use strict";
        
    var client = function() {
        return this;
    };

    var prototype = client.prototype;

    //outdated: used only for back compatibility
    prototype.request = function(args) {
        return this.makeApiCall(args);
    };

    prototype.makeApiCall = function (args) {
        args = args || {};

        if (!args.path) {
            throw new Error("Path is not defined!");
        }
        var httpRequest = new HEATAPI.Client.HttpRequest(args);

        return (typeof args.success === "function") ?
            httpRequest.execute(args.success, args.error, args.scope, args.passByArgs) : httpRequest;
    };
        
    return new client();
})(this);

HEATAPI.Auth = (function (global) {

    "use strict";
        
    var oauth20Token;
    var tokenExpireTimer;
    //Path to IdentityModule
    var identityProviderUrl = 'https://portal.mhgi.net:443/HEAT/Modules/IdentityProvider';
    var tokenProviderUrl = identityProviderUrl + '/Authorize';
    var checkProviderUrl = tokenProviderUrl + '/CheckAuth';

    var defaultOauthConfig =
        {
            immediate: true, //don't show consent window
            client_id: "ticketviewer",
            secret_key: "34BN8LosBQEq57umylA8rFESUZG9acYiBenbNTomdcw=",
            response_type: "token"                
        };

    var auth = function() {
        return this;
    };

    var prototype = auth.prototype;

    function openAuthWindow(state, callback) {
        defaultOauthConfig.state = state;
            
        var url = checkProviderUrl + "?" + HEATAPIUtils.param(defaultOauthConfig);

        //call calback from mainWindow
        HEATAPI.oAuthCallback = function (params) {
            callback(params);
        };
            
        HEATAPI.processAuthCallback = function (location) {
            var params = {}, queryString = location.hash.substring(1), regex = /([^&=]+)=([^&]*)/g, m;
            while (m = regex.exec(queryString)) {
                params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            }                    
            callback(params);
        };

        checkAuthStatus(defaultOauthConfig, url, state);
    }

    function popupCenter(url, title, w, h) {
        // Fixes dual-screen position                       Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
            
        var left = ((screen.width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((screen.height / 2) - (h / 2)) + dualScreenTop;
            
        //var newWindow = window.open(url, "authFrame", 'scrollbars=yes, resizable=0, location=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        
        var newWindow = window.open(url, "authFrame");//, 'scrollbars=yes, resizable=0, location=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // refresh the window after authentication finished
        if (newWindow) {
            var intervalID = window.setInterval(function() {
                if (newWindow && newWindow.closed) {
                    window.clearInterval(intervalID);
                    //location.reload();
                }
            }, 500);            
            newWindow.focus();
        } else {
            alert("Popup was blocked! Please, enable popups for this page and try again.");
        }
    }
        
    function createTokenProviderAuthWindow(url) {
        var body = document.getElementsByTagName("body")[0];
        HEATAPIUtils.removeClass(body, 'loading');            
        popupCenter(url, "Authorization", 430, 350);
    }

    function checkAuthStatus(oAuthConfig, url) {
        HEATAPIUtils.getJSONP(url, function(data) {
            if (data && !data.success) {
                createTokenProviderAuthWindow(tokenProviderUrl + "?" + HEATAPIUtils.param(oAuthConfig));
            } else {
                HEATAPI.oAuthCallback(data);
            }
        });
    }

    function startExpireTokenTimer(intervalInSeconds) {
        stopExpireTokenTimer();
            
        tokenExpireTimer = setTimeout(function () {
            oauth20Token = null;
        }, intervalInSeconds);
    }
        
    function stopExpireTokenTimer() {
        if (tokenExpireTimer) {
            clearTimeout(tokenExpireTimer);
        }
    }

    var authorizationCallbacks = [];

    prototype.signIn = function(callback) {
        authorizationCallbacks.push(callback);
        if (authorizationCallbacks.length > 1) return; //call only for the first one
                
        var state = HEATAPIUtils.getRandomString(15);

        var response = function(data) {
            //check for response here
            if (data.error || !data.access_token) {
                createTokenProviderAuthWindow(tokenProviderUrl + '/Error?errorMessage=' + encodeURIComponent(data.error));
            } else {
                if (data.state !== state) {
                    createTokenProviderAuthWindow(tokenProviderUrl + '/Error?errorMessage=' + encodeURIComponent("Antiforgery validation failed"));
                } else {
                    oauth20Token = new HEATAPI.OAuth20Token(data);

                    startExpireTokenTimer(oauth20Token.expires_in * 1000);

                    for (var i = 0, length = authorizationCallbacks.length; i < length; i++) {
                        var callback = authorizationCallbacks[i];
                        if (typeof callback === "function") {
                            callback(data);
                        }
                    }
                    authorizationCallbacks.length = 0;
                }
            }
        };

        openAuthWindow(state, response.bind(this));
    };

    prototype.clearToken = function () {
        oauth20Token = null;
    };
        
    prototype.getBearerToken = function() {
        return oauth20Token ? ("Bearer " + oauth20Token.access_token) : '';
    };
        
    prototype.signOut = function(callBack, scope) {
        if (typeof callBack === "function") {
            scope = scope || this;
            HEATAPIUtils.getJSONP(identityProviderUrl + '/Account/SignOut', function (response) {
                callBack.call(scope, response);
            });
        }
    };

    prototype.getSignInfo = function (callBack, scope) {
        if (typeof callBack === "function") {
            scope = scope || this;
            HEATAPIUtils.getJSONP(identityProviderUrl + '/Account/UserInfo', function (response) {
                callBack.call(scope, response);
            });
        }
    };

    prototype.isSigned = function(callBack, scope) {
        this.getSignInfo(function (response) {
            callBack.call(scope, response.authenticated);
        }, scope);
    };

    return new auth();
})(this);
HEATAPI.Client.HttpRequest = (function() {

    "use strict";

    var httpRequest = function(args) {

        if (!(this instanceof HEATAPI.Client.HttpRequest)) {
            return new HEATAPI.Client.HttpRequest();
        }

        args = args || { };

        if (!args.path) {
            throw new Error("Path is not defined");
        }
        this.path = args.path; //The URL to handle the request

        this.method = args.method || "GET"; //The HTTP request method to use. Default is 'GET'
        this.params = args.params || { }; //URL params in key-value pair form
        this.headers = args.headers || { }; // Additional HTTP request headers.
        this.body = args.body || ""; //The HTTP request body (applies to PUT or POST)
        //TODO: Check for existing accept header
        this.headers["Accept"] = "application/json";
        return this;
    };

    var defaultErrorProcessing = function (data) {

        api.logOut();
        
        // if (data) {
        //     if (data.rawData) {
        //         var errorWindow = window.open('about:blank', '_blank', 'width=400, height=400');
        //         errorWindow.document.write(data.rawData);
        //     } else {
        //         var errorMessage = data.message ? data.message : JSON.stringify(data);
        //         alert(data.url + ' returned error: \n' + errorMessage);
        //     }
        // }
    };

    var prototype = httpRequest.prototype;

    prototype.execute = function (callback, errorCallback, scope) {
        var self = this;
        scope = scope || this;
        HEATAPI.CommunicationChannel.makeRESTCall(
            {
                path: this.path,
                method: this.method,
                params: this.params,
                headers: this.headers,
                body: this.body
            }, function (data) {
                if (data && data.success) {
                    if (typeof callback === "function") {
                        callback.call(scope, data);
                    }
                } else {
                    //special processing for 403 code as this means that token was not found or user is not authorized
                    if (data && data.status === 403) {
                        HEATAPI.Auth.clearToken();
                        HEATAPI.Auth.signIn(function () { self.execute(callback, errorCallback, scope); });
                    }
                    else {
                        if (typeof errorCallback === "function") {
                            errorCallback.call(scope, data);
                        } else {
                            defaultErrorProcessing.call(self, data, callback, errorCallback);
                        }
                    }
                }
            });
    };

    return httpRequest;
})(this);
HEATAPI.Searchv10 = (function () {

                'use strict';

                var proxy = function() {
                    return this;
                };
                var prototype = proxy.prototype;
                prototype.Version = function(revision) {return HEATAPI['Search' + revision.replace(/\./g,'')]};

                prototype.GetSavedSearches = function(boName,maxCount,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'Search/v.1.0/GetSavedSearches',
                        params: {boName: boName,maxCount: maxCount},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.SearchBusinessObject = function(boName,savedSearchRecId,fields,sortBy,sortDirection,maxCount,func_ok, func_failed, scope) {
    
    // var timeKey = sessionStorage.getItem('key');

    // if (Date.now() > timeKey) {
    //     return;
    // } else {
    //     console.log('timeKey', timeKey);
    //     console.log('Now', Date.now());
    //     sessionStorage.setItem('key', Date.now());
    //     console.log('set');
    // }

                    HEATAPI.Client.makeApiCall({
                        path: 'Search/v.1.0/SearchBusinessObject',
                        params: {boName: boName,savedSearchRecId: savedSearchRecId,fields: fields,sortBy: sortBy,sortDirection: sortDirection,maxCount: maxCount},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};

                return new proxy();
            })(this);

HEATAPI.Search = HEATAPI.Searchv10;
HEATAPI.Knowledgev10 = (function () {

                'use strict';

                var proxy = function() {
                    return this;
                };
                var prototype = proxy.prototype;
                prototype.Version = function(revision) {return HEATAPI['Knowledge' + revision.replace(/\./g,'')]};

                prototype.GetKnowledgeArticles = function(maxRecords,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'Knowledge/v.1.0/GetKnowledgeArticles',
                        params: {maxRecords: maxRecords},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};

                return new proxy();
            })(this);

HEATAPI.Knowledge = HEATAPI.Knowledgev10;
HEATAPI.MyItemsv10 = (function () {

                'use strict';

                var proxy = function() {
                    return this;
                };
                var prototype = proxy.prototype;
                prototype.Version = function(revision) {return HEATAPI['MyItems' + revision.replace(/\./g,'')]};

                prototype.GetMyItemsList = function(maxRecords,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'MyItems/v.1.0/GetMyItemsList',
                        params: {maxRecords: maxRecords},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};

                return new proxy();
            })(this);

HEATAPI.MyItems = HEATAPI.MyItemsv10;
HEATAPI.NavigationCommandv10 = (function () {

                'use strict';

                var proxy = function() {
                    return this;
                };
                var prototype = proxy.prototype;
                prototype.Version = function(revision) {return HEATAPI['NavigationCommand' + revision.replace(/\./g,'')]};

                prototype.CreateNewIncident = function(quickActionRecId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/CreateNewIncident',
                        params: {quickActionRecId: quickActionRecId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.CreateNewServiceRequest = function(offeringRecId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/CreateNewServiceRequest',
                        params: {offeringRecId: offeringRecId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToAnObject = function(boName,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToAnObject',
                        params: {boName: boName,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToKnowledge = function(frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToKnowledge',
                        params: {frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToKnowledgeAndOpenArticle = function(knowledgeItemRecId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToKnowledgeAndOpenArticle',
                        params: {knowledgeItemRecId: knowledgeItemRecId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToKnowledgeWithSearch = function(searchString,savedSearchId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToKnowledgeWithSearch',
                        params: {searchString: searchString,savedSearchId: savedSearchId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToMyItem = function(frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToMyItem',
                        params: {frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToMyItemAndOpenARecord = function(myItemRecId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToMyItemAndOpenARecord',
                        params: {myItemRecId: myItemRecId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToObjectAndCreateARecord = function(boName,templateRecId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToObjectAndCreateARecord',
                        params: {boName: boName,templateRecId: templateRecId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToObjectAndOpenARecord = function(boName,itemRecId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToObjectAndOpenARecord',
                        params: {boName: boName,itemRecId: itemRecId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToSearchPage = function(frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToSearchPage',
                        params: {frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToSearchPageAndPerformSearch = function(searchString,savedSearchId,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToSearchPageAndPerformSearch',
                        params: {searchString: searchString,savedSearchId: savedSearchId,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.NavigateToServiceCatalog = function(categoryId,searchString,frameless,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'NavigationCommand/v.1.0/NavigateToServiceCatalog',
                        params: {categoryId: categoryId,searchString: searchString,frameless: frameless},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};

                return new proxy();
            })(this);

HEATAPI.NavigationCommand = HEATAPI.NavigationCommandv10;
HEATAPI.ServiceCatalogv10 = (function () {

                'use strict';

                var proxy = function() {
                    return this;
                };
                var prototype = proxy.prototype;
                prototype.Version = function(revision) {return HEATAPI['ServiceCatalog' + revision.replace(/\./g,'')]};

                prototype.GetCategories = function(func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'ServiceCatalog/v.1.0/GetCategories',
                        params: {},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.GetTopServiceOfferings = function(maxCount,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'ServiceCatalog/v.1.0/GetTopServiceOfferings',
                        params: {maxCount: maxCount},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.SearchOfferings = function(searchString,maxCount,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'ServiceCatalog/v.1.0/SearchOfferings',
                        params: {searchString: searchString,maxCount: maxCount},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};
prototype.SearchOfferingsByCategory = function(categoryid,searchString,maxCount,func_ok, func_failed, scope) {
                    HEATAPI.Client.makeApiCall({
                        path: 'ServiceCatalog/v.1.0/SearchOfferingsByCategory',
                        params: {categoryid: categoryid,searchString: searchString,maxCount: maxCount},
                        success: func_ok,  // create grid and other stuff
                        error: func_failed, // proccess error
                        scope: scope    
                    })};

                return new proxy();
            })(this);

HEATAPI.ServiceCatalog = HEATAPI.ServiceCatalogv10;
