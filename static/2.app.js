(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{930:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var n={};function o(e){var t=null;return function(){return null==t&&(t=e()),t}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(n),r.d(n,"FILE",(function(){return v})),r.d(n,"URL",(function(){return p})),r.d(n,"TEXT",(function(){return y}));var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entered=[],this.isNodeInDocument=t}var t,r,n;return t=e,(r=[{key:"enter",value:function(e){var t=this,r=this.entered.length;return this.entered=function(e,t){var r=new Set,n=function(e){return r.add(e)};e.forEach(n),t.forEach(n);var o=[];return r.forEach((function(e){return o.push(e)})),o}(this.entered.filter((function(r){return t.isNodeInDocument(r)&&(!r.contains||r.contains(e))})),[e]),0===r&&this.entered.length>0}},{key:"leave",value:function(e){var t,r,n=this.entered.length;return this.entered=(t=this.entered.filter(this.isNodeInDocument),r=e,t.filter((function(e){return e!==r}))),n>0&&0===this.entered.length}},{key:"reset",value:function(){this.entered=[]}}])&&i(t.prototype,r),n&&i(t,n),e}(),u=o((function(){return/firefox/i.test(navigator.userAgent)})),s=o((function(){return Boolean(window.safari)}));function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=t.length,o=[],i=0;i<n;i++)o.push(i);o.sort((function(e,r){return t[e]<t[r]?-1:1}));for(var a,u,s=[],c=[],d=[],l=0;l<n-1;l++)a=t[l+1]-t[l],u=r[l+1]-r[l],c.push(a),s.push(u),d.push(u/a);for(var f=[d[0]],g=0;g<c.length-1;g++){var h=d[g],v=d[g+1];if(h*v<=0)f.push(0);else{a=c[g];var p=c[g+1],y=a+p;f.push(3*y/((y+p)/h+(y+a)/v))}}f.push(d[d.length-1]);for(var m,b=[],D=[],T=0;T<f.length-1;T++){m=d[T];var O=f[T],w=1/c[T],I=O+f[T+1]-m-m;b.push((m-O-I)*w),D.push(I*w*w)}this.xs=t,this.ys=r,this.c1s=f,this.c2s=b,this.c3s=D}var t,r,n;return t=e,(r=[{key:"interpolate",value:function(e){var t=this.xs,r=this.ys,n=this.c1s,o=this.c2s,i=this.c3s,a=t.length-1;if(e===t[a])return r[a];for(var u,s=0,c=i.length-1;s<=c;){var d=t[u=Math.floor(.5*(s+c))];if(d<e)s=u+1;else{if(!(d>e))return r[u];c=u-1}}var l=e-t[a=Math.max(0,c)],f=l*l;return r[a]+n[a]*l+o[a]*f+i[a]*l*f}}])&&c(t.prototype,r),n&&c(t,n),e}();function l(e){var t=1===e.nodeType?e:e.parentElement;if(!t)return null;var r=t.getBoundingClientRect(),n=r.top;return{x:r.left,y:n}}function f(e){return{x:e.clientX,y:e.clientY}}function g(e,t,r,n,o){var i,a,c,f="IMG"===(i=t).nodeName&&(u()||!(null===(a=document.documentElement)||void 0===a?void 0:a.contains(i))),g=l(f?e:t),h={x:r.x-g.x,y:r.y-g.y},v=e.offsetWidth,p=e.offsetHeight,y=n.anchorX,m=n.anchorY,b=function(e,t,r,n){var o=e?t.width:r,i=e?t.height:n;return s()&&e&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}(f,t,v,p),D=b.dragPreviewWidth,T=b.dragPreviewHeight,O=o.offsetX,w=o.offsetY,I=0===w||w;return{x:0===O||O?O:new d([0,.5,1],[h.x,h.x/v*D,h.x+D-v]).interpolate(y),y:I?w:(c=new d([0,.5,1],[h.y,h.y/p*T,h.y+T-p]).interpolate(m),s()&&f&&(c+=(window.devicePixelRatio-1)*T),c)}}var h,v="__NATIVE_FILE__",p="__NATIVE_URL__",y="__NATIVE_TEXT__";function m(e,t,r){var n=t.reduce((function(t,r){return t||e.getData(r)}),"");return null!=n?n:r}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=(b(h={},v,{exposeProperties:{files:function(e){return Array.prototype.slice.call(e.files)},items:function(e){return e.items}},matchesTypes:["Files"]}),b(h,p,{exposeProperties:{urls:function(e,t){return m(e,t,"").split("\n")}},matchesTypes:["Url","text/uri-list"]}),b(h,y,{exposeProperties:{text:function(e,t){return m(e,t,"")}},matchesTypes:["Text","text/plain"]}),h);function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.item={},this.initializeExposedProperties()}var t,r,n;return t=e,(r=[{key:"initializeExposedProperties",value:function(){var e=this;Object.keys(this.config.exposeProperties).forEach((function(t){Object.defineProperty(e.item,t,{configurable:!0,enumerable:!0,get:function(){return console.warn("Browser doesn't allow reading \"".concat(t,'" until the drop event.')),null}})}))}},{key:"loadDataTransfer",value:function(e){var t=this;if(e){var r={};Object.keys(this.config.exposeProperties).forEach((function(n){r[n]={value:t.config.exposeProperties[n](e,t.config.matchesTypes),configurable:!0,enumerable:!0}})),Object.defineProperties(this.item,r)}}},{key:"canDrag",value:function(){return!0}},{key:"beginDrag",value:function(){return this.item}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}])&&T(t.prototype,r),n&&T(t,n),e}();function w(e){if(!e)return null;var t=Array.prototype.slice.call(e.types||[]);return Object.keys(D).filter((function(e){return D[e].matchesTypes.some((function(e){return t.indexOf(e)>-1}))}))[0]||null}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.globalContext=t}var t,r,n;return t=e,(r=[{key:"window",get:function(){return this.globalContext?this.globalContext:"undefined"!=typeof window?window:void 0}},{key:"document",get:function(){if(this.window)return this.window.document}}])&&I(t.prototype,r),n&&I(t,n),e}();function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var j=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.getSourceClientOffset=function(e){var t=n.sourceNodes.get(e);return t&&l(t)||null},this.endDragNativeItem=function(){n.isDraggingNativeItem()&&(n.actions.endDrag(),n.currentNativeHandle&&n.registry.removeSource(n.currentNativeHandle),n.currentNativeHandle=null,n.currentNativeSource=null)},this.isNodeInDocument=function(e){return Boolean(e&&n.document&&n.document.body&&document.body.contains(e))},this.endDragIfSourceWasRemovedFromDOM=function(){var e=n.currentDragSourceNode;n.isNodeInDocument(e)||n.clearCurrentDragSourceNode()&&n.actions.endDrag()},this.handleTopDragStartCapture=function(){n.clearCurrentDragSourceNode(),n.dragStartSourceIds=[]},this.handleTopDragStart=function(e){if(!e.defaultPrevented){var t=n.dragStartSourceIds;n.dragStartSourceIds=null;var r=f(e);n.monitor.isDragging()&&n.actions.endDrag(),n.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:n.getSourceClientOffset,clientOffset:r});var o=e.dataTransfer,i=w(o);if(n.monitor.isDragging()){if(o&&"function"==typeof o.setDragImage){var a=n.monitor.getSourceId(),u=n.sourceNodes.get(a),s=n.sourcePreviewNodes.get(a)||u;if(s){var c=n.getCurrentSourcePreviewNodeOptions(),d=g(u,s,r,{anchorX:c.anchorX,anchorY:c.anchorY},{offsetX:c.offsetX,offsetY:c.offsetY});o.setDragImage(s,d.x,d.y)}}try{null==o||o.setData("application/json",{})}catch(e){}n.setCurrentDragSourceNode(e.target),n.getCurrentSourcePreviewNodeOptions().captureDraggingState?n.actions.publishDragSource():setTimeout((function(){return n.actions.publishDragSource()}),0)}else if(i)n.beginDragNativeItem(i);else{if(o&&!o.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}}},this.handleTopDragEndCapture=function(){n.clearCurrentDragSourceNode()&&n.actions.endDrag()},this.handleTopDragEnterCapture=function(e){if(n.dragEnterTargetIds=[],n.enterLeaveCounter.enter(e.target)&&!n.monitor.isDragging()){var t=e.dataTransfer,r=w(t);r&&n.beginDragNativeItem(r,t)}},this.handleTopDragEnter=function(e){var t=n.dragEnterTargetIds;(n.dragEnterTargetIds=[],n.monitor.isDragging())&&(n.altKeyPressed=e.altKey,u()||n.actions.hover(t,{clientOffset:f(e)}),t.some((function(e){return n.monitor.canDropOnTarget(e)}))&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=n.getCurrentDropEffect())))},this.handleTopDragOverCapture=function(){n.dragOverTargetIds=[]},this.handleTopDragOver=function(e){var t=n.dragOverTargetIds;if(n.dragOverTargetIds=[],!n.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));n.altKeyPressed=e.altKey,n.actions.hover(t||[],{clientOffset:f(e)}),(t||[]).some((function(e){return n.monitor.canDropOnTarget(e)}))?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=n.getCurrentDropEffect())):n.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=function(e){n.isDraggingNativeItem()&&e.preventDefault(),n.enterLeaveCounter.leave(e.target)&&n.isDraggingNativeItem()&&n.endDragNativeItem()},this.handleTopDropCapture=function(e){var t;(n.dropTargetIds=[],e.preventDefault(),n.isDraggingNativeItem())&&(null===(t=n.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer));n.enterLeaveCounter.reset()},this.handleTopDrop=function(e){var t=n.dropTargetIds;n.dropTargetIds=[],n.actions.hover(t,{clientOffset:f(e)}),n.actions.drop({dropEffect:n.getCurrentDropEffect()}),n.isDraggingNativeItem()?n.endDragNativeItem():n.endDragIfSourceWasRemovedFromDOM()},this.handleSelectStart=function(e){var t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new E(r),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new a(this.isNodeInDocument)}var t,r,o;return t=e,(r=[{key:"profile",value:function(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}},{key:"setup",value:function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}}},{key:"teardown",value:function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))}},{key:"connectDragPreview",value:function(e,t,r){var n=this;return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,t),function(){n.sourcePreviewNodes.delete(e),n.sourcePreviewNodeOptions.delete(e)}}},{key:"connectDragSource",value:function(e,t,r){var n=this;this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,r);var o=function(t){return n.handleDragStart(t,e)},i=function(e){return n.handleSelectStart(e)};return t.setAttribute("draggable","true"),t.addEventListener("dragstart",o),t.addEventListener("selectstart",i),function(){n.sourceNodes.delete(e),n.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",o),t.removeEventListener("selectstart",i),t.setAttribute("draggable","false")}}},{key:"connectDropTarget",value:function(e,t){var r=this,n=function(t){return r.handleDragEnter(t,e)},o=function(t){return r.handleDragOver(t,e)},i=function(t){return r.handleDrop(t,e)};return t.addEventListener("dragenter",n),t.addEventListener("dragover",o),t.addEventListener("drop",i),function(){t.removeEventListener("dragenter",n),t.removeEventListener("dragover",o),t.removeEventListener("drop",i)}}},{key:"addEventListeners",value:function(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}},{key:"removeEventListeners",value:function(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}},{key:"getCurrentSourceNodeOptions",value:function(){var e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return N({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}},{key:"getCurrentDropEffect",value:function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}},{key:"getCurrentSourcePreviewNodeOptions",value:function(){var e=this.monitor.getSourceId();return N({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}},{key:"isDraggingNativeItem",value:function(){var e=this.monitor.getItemType();return Object.keys(n).some((function(t){return n[t]===e}))}},{key:"beginDragNativeItem",value:function(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){var r=new O(D[e]);return r.loadDataTransfer(t),r}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}},{key:"setCurrentDragSourceNode",value:function(e){var t=this;this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.mouseMoveTimeoutTimer=setTimeout((function(){return t.window&&t.window.addEventListener("mousemove",t.endDragIfSourceWasRemovedFromDOM,!0)}),1e3)}},{key:"clearCurrentDragSourceNode",value:function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.window&&(this.window.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)),this.mouseMoveTimeoutTimer=null,!0)}},{key:"handleDragStart",value:function(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}},{key:"handleDragEnter",value:function(e,t){this.dragEnterTargetIds.unshift(t)}},{key:"handleDragOver",value:function(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}},{key:"handleDrop",value:function(e,t){this.dropTargetIds.unshift(t)}},{key:"window",get:function(){return this.options.window}},{key:"document",get:function(){return this.options.document}}])&&k(t.prototype,r),o&&k(t,o),e}(),P=function(e,t){return new j(e,t)}},935:function(e,t,r){var n,o,i;o=[r(81)],void 0===(i="function"==typeof(n=function(e){e.register("locale","fr",{delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){return 1===e?"er":"e"},currency:{symbol:"€"}})})?n.apply(t,o):n)||(e.exports=i)},942:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c}));var n=r(0),o=r(463);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=0,c=Object(n.memo)((function(e){var t=e.children,r=i(function(e){if("manager"in e){return[{dragDropManager:e.manager},!1]}var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(),r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=t;i[d]||(i[d]=Object(o.b)(e,t,r,n));return i[d]}(e.backend,e.context,e.options,e.debugMode),r=!e.context;return[t,r]}(u(e,["children"])),2),a=r[0],c=r[1];return n.useEffect((function(){return c&&s++,function(){c&&(0===--s&&(l()[d]=null))}}),[]),n.createElement(o.a.Provider,{value:a},t)}));c.displayName="DndProvider";var d=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");function l(){return void 0!==e?e:window}}).call(this,r(82))},944:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var n=r(0),o=r(13),i=r(462),a=r(72),u=r(461),s=r(116),c=r(117),d=r(464),l=r(218);function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hooks=Object(d.a)({dropTarget:function(e,t){r.clearDropTarget(),r.dropTargetOptions=t,Object(l.a)(e)?r.dropTargetRef=e:r.dropTargetNode=e,r.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}var t,r,n;return t=e,(r=[{key:"reconnect",value:function(){var e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();var t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}},{key:"receiveHandlerId",value:function(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!Object(c.a)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}},{key:"connectTarget",get:function(){return this.dropTarget}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(e){this.dropTargetOptionsInternal=e}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}}])&&f(t.prototype,r),n&&f(t,n),e}();function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=!1,p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.targetId=null,this.internalMonitor=t.getMonitor()}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;Object(o.a)(!v,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return v=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{v=!1}}},{key:"isOver",value:function(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}])&&h(t.prototype,r),n&&h(t,n),e}();function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e){var t=Object(n.useRef)(e);t.current=e,Object(o.a)(null!=e.accept,"accept must be defined");var r,c=b((r=Object(s.a)(),[Object(n.useMemo)((function(){return new p(r)}),[r]),Object(n.useMemo)((function(){return new g(r.getBackend())}),[r])]),2),d=c[0],l=c[1];!function(e,t,r){var o=Object(s.a)(),i=Object(n.useMemo)((function(){return{canDrop:function(){var r=e.current.canDrop;return!r||r(t.getItem(),t)},hover:function(){var r=e.current.hover;r&&r(t.getItem(),t)},drop:function(){var r=e.current.drop;if(r)return r(t.getItem(),t)}}}),[t]);Object(a.a)((function(){var n=y(Object(u.b)(e.current.accept,i,o),2),a=n[0],s=n[1];return t.receiveHandlerId(a),r.receiveHandlerId(a),s}),[t,r])}(t,d,l);var f=Object(i.a)(d,t.current.collect||function(){return{}},(function(){return l.reconnect()})),h=Object(n.useMemo)((function(){return l.hooks.dropTarget()}),[l]);return Object(a.a)((function(){l.dropTargetOptions=e.options||null,l.reconnect()}),[e.options]),[f,h]}}}]);