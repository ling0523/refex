!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Refex=t():e.Refex=t()}(self,(function(){return(()=>{"use strict";var e={632:e=>{e.exports={show:{mounted:function(e,t){t||(e.style.display="none")},updated:function(e,t){e.style.display=t?"":"none"}}}},579:(e,t,i)=>{var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=i(244),s=i(393);e.exports={proxy:function(e){if(!e||"object"!==(void 0===e?"undefined":r(e)))throw new TypeError('The argument to "proxy" must be an object');return new n(e)},useProxy:function(e){if(!(e instanceof n))throw new TypeError('The argument to "useProxy" must be an instance of State');return e.$data},h:function(e,t){if(!e)throw new TypeError("The tag name is undefined");if("string"!=typeof e)throw new TypeError("The tag name should be a string");"object"==(void 0===t?"undefined":r(t))&&t||(t={}),e=e.toLocaleLowerCase();var i=t.attrs||{},n={};Array.isArray(t.cls)?t.cls.forEach((function(e){n[e]=!0})):"object"==r(t.cls)&&t.cls?n=Object.assign({},t.cls):"string"==typeof t.cls&&t.cls?n[t.cls]=!0:n={};var s=t.directives||{},o=t.events||{},a={};for(var c in o)a[c]={handler:o[c],params:[],modifier:void 0};var f=t.text,h=t.slots||[],d=!1!==t.if;return{tag:e,attrs:i,cls:n,directives:s,events:a,text:f,slots:h,_if:d}},parse:function(e,t,i){if(!(e instanceof n))throw new TypeError('The first argument to "parse" must be an instance of State');if(!(t instanceof s))throw new TypeError('The second argument to "parse" must be an instance of VNode');if(!i)throw new TypeError("The string expression does not exist");if("string"!=typeof i)throw new TypeError("The string expression should be a string");var r=Object.assign({},e.$data);return Object.assign(r,t.getForData()),t.parseExpression(r,i)}}},244:(e,t,i)=>{var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();function s(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var o=i(393),a=i(632),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$data=this._toProxy([],t||{}),this.$watchers={},this.$vnode=null,this._vnode=null,this.$template=null,this.$directives={},this.$components={},this.onBeforeMount=function(){},this.onMounted=function(){},this.onBeforeUpdate=function(){},this.onUpdated=function(){},this._init()}return n(e,[{key:"_init",value:function(){for(var e in a)this.directive(e,a[e])}},{key:"component",value:function(e,t){if(!t)return e?this.$components[e]:this.$components;if(!e)throw new TypeError("You need to give the component a name");if(this.$components[e])throw new Error('The component named "'+e+'" is already defined');var i=[],n=null;if("function"==typeof t?n=t:"object"==(void 0===t?"undefined":r(t))&&t&&(i=t.props||[],n=t.render),"function"!=typeof n)throw new TypeError('The component named "'+e+'" need to define a handling method');this.$components[e]={props:i,render:n}}},{key:"directive",value:function(e,t){if(!t)return e?this.$directives[e]:this.$directives;if(!e)throw new TypeError("You need to give the directive a name");if(this.$directives[e])throw new Error('The directive named "'+e+'" is already defined');var i=function(){},n=function(){},s=function(){},o=function(){},a=function(){},c=function(){};"function"==typeof t?n=t:"object"==(void 0===t?"undefined":r(t))&&t&&(i=t.beforeMount||function(){},n=t.mounted||function(){},s=t.beforeUpdate||function(){},o=t.updated||function(){},a=t.beforeUnmount||function(){},c=t.unmounted||function(){}),this.$directives[e]={beforeMount:i,mounted:n,beforeUpdate:s,updated:o,beforeUnmount:a,unmounted:c}}},{key:"mount",value:function(e){if("function"==typeof this.onBeforeMount&&this.onBeforeMount.apply(this.$data),!e)throw new Error("You must specify an element to mount");if("string"==typeof e&&(e=document.body.querySelector(e)),!(e instanceof Node&&1===e.nodeType))throw new TypeError("The mount element is undefined");return this.$template=e.cloneNode(!0),this.$vnode=this._compile("vnode",e),this.$vnode.dealFor(this),this.$vnode.init(this),this.$vnode.dealComponent(this),this._vnode=this.$vnode.copy(),this._vnode.dealDirectives(this,"beforeMount"),this._vnode.render(this),e.parentNode.insertBefore(this._vnode.elm,e),e.remove(),this._vnode.dealDirectives(this,"mounted"),"function"==typeof this.onMounted&&this.onMounted.apply(this.$data),this}},{key:"_compile",value:function(e,t){var i=null;if(1==t.nodeType){var r={},n={},s={},a="",c=!0,f=!1,h=void 0;try{for(var d,l=t.attributes[Symbol.iterator]();!(c=(d=l.next()).done);c=!0){var u=d.value;if(u.nodeName.startsWith("@")){var v=u.nodeName.indexOf(":");if(v>0){var p=u.nodeName.substr(1,v-1),y=u.nodeName.substr(v+1);p&&(n[p]={modifier:y||void 0,exp:u.nodeValue})}else{var m=u.nodeName.substr(1);m&&(n[m]={modifier:void 0,exp:u.nodeValue})}}else if(u.nodeName.startsWith("#")){var g=u.nodeName.substr(1).split(".");s[g[0]]={handler:u.nodeValue,modifier:g.filter((function(e,t){return t>0}))}}else"class"==u.nodeName?a=u.nodeValue.trim():"refex-cloak"!=u.nodeName&&(r[u.nodeName]=u.nodeValue)}}catch(e){f=!0,h=e}finally{try{!c&&l.return&&l.return()}finally{if(f)throw h}}i=new o(t.nodeName.toLocaleLowerCase(),r,a,n,s,void 0,e,t.nodeType);for(var b=t.childNodes,x=b.length,w=0;w<x;w++){var E=this._compile(e+"_"+w,b[w]);E&&(E.parent=i,i.children.push(E))}}else 3!=t.nodeType&&8!=t.nodeType||(i=new o(t.nodeName.toLocaleLowerCase(),{},"",{},{},t.nodeValue,e,t.nodeType));return i}},{key:"_updateVnodes",value:function(e,t,i){this.$vnode=this._compile("vnode",this.$template),this.$vnode.dealFor(this),this.$vnode.init(this),this.$vnode.dealComponent(this),this._updateVnode(this.$vnode,this._vnode)}},{key:"_updateVnode",value:function(e,t){if(e.isSame(t)){var i=!e.equal(t);i&&t.dealDirectives(this,"beforeUpdate",!1),1==e.nodeType&&t.if?(this._updateDirectives(e,t),this._updateAttrs(e,t),this._updateClass(e,t),this._updateEvents(e,t),this._updateChildren(e,t)):3==e.nodeType&&this._updateText(e,t),i&&t.dealDirectives(this,"updated",!1)}else{var r=e.copy(),n=t.parent;r.parent=n,t.dealDirectives(this,"beforeUnmount");var s=t.getIndex();n.children.splice(s,1,r),r.dealDirectives(this,"beforeMount"),r.render(this),t.elm.parentNode.insertBefore(r.elm,t.elm),t.elm.remove(),t.dealDirectives(this,"unmounted"),r.dealDirectives(this,"mounted")}}},{key:"_updateDirectives",value:function(e,t){var i=e.compare(t,"directives",0),r=e.compare(t,"directives",1),n=Object.assign(i,r);for(var s in n)t.directives[s]=Object.assign({},n[s]);var o=e.compare(t,"directives",2);for(var a in o)delete t.directives[a]}},{key:"_updateAttrs",value:function(e,t){var i=e.compare(t,"attrs",0),n=e.compare(t,"attrs",1),s=Object.assign(i,n);for(var o in s){var a=s[o];t.attrs[o]=a,!1===a||null==a?t.elm.removeAttribute(o):(!0===a&&(a=""),"object"===(void 0===a?"undefined":r(a))&&(a=JSON.stringify(a)),a=String(a),t.elm.setAttribute(o,a))}var c=e.compare(t,"attrs",2);for(var f in c)delete t.attrs[f],t.elm.removeAttribute(f)}},{key:"_updateClass",value:function(e,t){if(JSON.stringify(e.cls)!=JSON.stringify(t.cls)){t.cls=Object.assign({},e.cls);var i=[];for(var r in t.cls)t.cls[r]&&i.push(r);i.length?t.elm.setAttribute("class",i.join(" ")):t.elm.removeAttribute("class")}}},{key:"_updateEvents",value:function(e,t){var i=this,r=e.compare(t,"events",0);for(var n in r)t.events[n]=r[n];var o=e.compare(t,"events",1),a=function(e){t.events[e]=o[e],t.elm.addEventListener(e,(function(r){t.events[e].modifier&&t.events[e].modifier.includes("self")&&r.currentTarget!=r.target||(t.events[e].modifier&&t.events[e].modifier.includes("stop")&&r.stopPropagation(),t.events[e].modifier&&t.events[e].modifier.includes("prevent")&&r.cancelable&&r.preventDefault(),"function"==typeof t.events[e].handler?t.events[e].handler.apply(i.$data,[r].concat(s(t.events[e].params))):t.executeExpression(i.$data,t.events[e].handler)(i.$data))}),{once:t.events[e].modifier&&t.events[e].modifier.includes("once"),capture:t.events[e].modifier&&t.events[e].modifier.includes("capture"),passive:t.events[e].modifier&&t.events[e].modifier.includes("passive")})};for(var c in o)a(c)}},{key:"_updateChildren",value:function(e,t){var i=this;if(e.children.length==t.children.length){var r=!0,n=!1,s=void 0;try{for(var o,a=e.children[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var c=o.value,f=!0,h=!1,d=void 0;try{for(var l,u=t.children[Symbol.iterator]();!(f=(l=u.next()).done);f=!0){var v=l.value;c.id===v.id&&this._updateVnode(c,v)}}catch(e){h=!0,d=e}finally{try{!f&&u.return&&u.return()}finally{if(h)throw d}}}}catch(e){n=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw s}}}else t.children.forEach((function(e){e.dealDirectives(i,"beforeUnmount")})),t.elm.innerHTML="",t.children.forEach((function(e){e.dealDirectives(i,"unmounted")})),t.children=[],e.children.forEach((function(e){var r=e.copy();t.children.push(r),r.dealDirectives(i,"beforeMount"),r.render(i),t.elm.appendChild(r.elm),r.dealDirectives(i,"mounted")}))}},{key:"_updateText",value:function(e,t){e.text!==t.text&&(t.text=e.text,t.elm.nodeValue=t.text)}},{key:"watch",value:function(e,t){if(!e)throw new TypeError("You must specify a property to watch");if("string"!=typeof e)throw new TypeError("The watch property expected a string");"function"!=typeof t&&(t=function(){});var i=this._parseProperty(e);if(this.$watchers[i])throw new Error('The watcher for "'+e+'" is already defined');return this.$watchers[i]=t,this}},{key:"unwatch",value:function(e){if("string"==typeof e){var t=this._parseProperty(e);this.$watchers[t]&&delete this.$watchers[t]}else this.$watchers={};return this}},{key:"_toProxy",value:function(e,t,i){var r=this,n=[].concat(s(e));if(!this._isObject(t))throw new TypeError("Cannot create proxy with a non-object as target or handler");for(var o in i&&n.push(i),t)this._isObject(t[o])&&(t[o]=this._toProxy(n,t[o],o));return new Proxy(t,{get:function(e,t){return r._getter(n,e,t)},set:function(e,t,i){return r._setter(n,e,t,i)},deleteProperty:function(e,t){return r._setter(n,e,t,void 0)}})}},{key:"_getter",value:function(e,t,i){return Reflect.get(t,i)}},{key:"_setter",value:function(e,t,i,n){var o=[].concat(s(e));o.push(i);var a=null;Array.isArray(t)?a=[].concat(s(t)):"object"==(void 0===t?"undefined":r(t))&&(a=Object.assign({},t));var c=t[i];if(Array.isArray(c)?c=[].concat(s(c)):"object"==(void 0===c?"undefined":r(c))&&c&&(c=Object.assign({},c)),Reflect.set(t,i,n),c!==n){"function"==typeof this.onBeforeUpdate&&this.onBeforeUpdate.apply(this.$data,[i,n,c,t]),this._updateVnodes(o,n,c);var f=e.join(".");a&&e.length&&this.$watchers[f]&&this.$watchers[f].apply(this,[t,a]);var h=o.join(".");this.$watchers[h]&&this.$watchers[h].apply(this,[n,c]),"function"==typeof this.onUpdated&&this.onUpdated.apply(this.$data,[i,n,c,t])}return!0}},{key:"_parseProperty",value:function(e){var t=[];return e.split(".").forEach((function(e){var i=e.match(/\[(.+?)\]/g);if(i){var r=e.replace(/\[(.+?)\]/g,"");t.push(r),i.forEach((function(e){t.push(e.substr(1,e.length-2))}))}else t.push(e)})),t.join(".")}},{key:"_isObject",value:function(e){return!("object"!=(void 0===e?"undefined":r(e))||!e)}},{key:"_getOriginalData",value:function(e){var t=null;if(Array.isArray(e)){t=[];var i=!0,r=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var a=s.value,c=this._getOriginalData(a);t.push(c)}}catch(e){r=!0,n=e}finally{try{!i&&o.return&&o.return()}finally{if(r)throw n}}}else if(this._isObject(e))for(var f in t={},e){var h=this._getOriginalData(e[f]);t[f]=h}else t=e;return t}}]),e}();e.exports=c},393:e=>{var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),r=function(){function e(t,i,r,n,s,o,a,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tag=t,this.attrs=i,this.cls=r,this.directives=n,this.events=s,this.text=o,this.id=a,this.nodeType=c,this.parent=void 0,this.children=[],this.isCloned=!1,this.elm=void 0,this.if=!0,this.forData={},this.useIf=!1,this.useElseIf=!1,this.useElse=!1}return i(e,[{key:"dealFor",value:function(e){var i=this;if(this.directives.for){var r,n=e._getOriginalData(e.$data);Object.assign(n,this.getForData());var s=this.parseFor(n,this.directives.for.exp);if(!s)throw new Error("Invalid @for expression: "+this.directives.for.exp);delete this.directives.for;var o=this.getIndex(),a=[];if(Array.isArray(s.for))for(var c=s.for.length,f=0;f<c;f++){var h=this.clone(f,s,f);h.parent=this.parent,a.push(h),h.children.forEach((function(t){t.dealFor(e)}))}else"object"==t(s.for)&&s.for&&Object.keys(s.for).forEach((function(t,r){var n=i.clone(r,s,r,t);n.parent=i.parent,a.push(n),n.children.forEach((function(t){t.dealFor(e)}))}));(r=this.parent.children).splice.apply(r,[o,1].concat(a))}else this.children.forEach((function(t){t.dealFor(e)}))}},{key:"init",value:function(e){var i=e._getOriginalData(e.$data);if(Object.assign(i,this.getForData()),1==this.nodeType){if(this.directives.if){if(this.directives["else-if"]||this.directives.else)throw new Error('"@if" and "@else-if" and "@else" cannot be used on the same node');this.if=this.parseExpression(i,this.directives.if.exp),this.useIf=!0,delete this.directives.if}if(this.directives["else-if"]){if(this.directives.else)throw new Error('"@else-if" and "@else" cannot be used on the same node');var r=this.getPrevBrotherNode();if(!r||!r.useIf)throw new Error('"@else-if" cannot be used alone');r.if?this.if=!1:this.if=this.parseExpression(i,this.directives["else-if"].exp),this.useElseIf=!0,delete this.directives["else-if"]}if(this.directives.else){var n=this.getPrevBrotherNode();if(!n||!n.useIf&&!n.useElseIf)throw new Error('"@else" cannot be used alone');if(n.useIf)n.if?this.if=!1:this.if=!0;else if(n.useElseIf){var s=n.getPrevBrotherNode();if(!s||!s.useIf)throw new Error('"@else" cannot be used alone');n.if||s.if?this.if=!1:this.if=!0}this.useElse=!0,delete this.directives.else}for(var o in this.directives){if(!e.$directives[o])throw new Error("The @"+o+" directive is undefined");this.directives[o]={exp:this.directives[o].exp,modifier:this.directives[o].modifier,value:this.parseExpression(i,this.directives[o].exp)}}var a={};for(var c in this.attrs){var f,h=null;if(f=this.parseText(i,c),this.attrs[c].match(/^\{\{(.*?)\}\}$/g)){var d=this.attrs[c].trim().length-2,l=this.attrs[c].trim().substring(2,d);h=this.parseExpression(i,l)}else h=this.parseText(i,this.attrs[c]);""===h&&(h=!0),a[f]=h}if(this.attrs=a,this.cls){var u=this.cls.match(/^\{\{(.*?)\}\}$/g),v={};if(u){var p=this.cls.trim().length-2,y=this.cls.trim().substring(2,p),m=this.parseExpression(i,y);Array.isArray(m)?m.forEach((function(e){v[e]=!0})):"object"==(void 0===m?"undefined":t(m))&&m?v=Object.assign({},m):"string"==typeof m&&m&&(v[m]=!0)}else this.parseText(i,this.cls).split(/\s+/g).forEach((function(e){v[e]=!0}));this.cls=v}else this.cls={};for(var g in this.events)this.events[g]=this.eventHandler(i,g)}else 3==this.nodeType&&(this.text=this.parseText(i,this.text));this.children.forEach((function(t){t.init(e)}))}},{key:"eventHandler",value:function(e,t){var i=this,r=null,n=[],s=this.events[t].modifier;if(!this.events[t].handler)throw new TypeError("The value of #"+t+" shoud not be undefined");var o=/(.*)+\((.*)\)/g.exec(this.events[t].handler);return o?(r=this.parseExpression(e,o[1]),o[2]&&(n=o[2].split(",").map((function(t){return i.parseExpression(e,t)})))):"function"!=typeof(r=this.parseExpression(e,this.events[t].handler))&&(r=this.events[t].handler),{handler:r,params:n,modifier:s}}},{key:"dealComponent",value:function(i){var r=this.tag.toLocaleLowerCase();if(i.$components[r]){var n={};for(var s in this.attrs)i.$components[r].props.includes(s)&&(n[s]=this.attrs[s],delete this.attrs[s]);var o=i.$components[r].render.apply(i.$data,[n]);if(!o)throw new Error('The template for component "'+r+'" is invalid');var a=null;if("string"==typeof o){var c=document.createElement("div");c.innerHTML=o.trim();var f=c.childNodes[0];if(1!=f.nodeType)throw new TypeError('The template for component "'+r+'" is invalid');(a=i._compile(this.id,f)).dealFor(i),a.init(i)}else"object"==(void 0===o?"undefined":t(o))&&((a=new e(o.tag,o.attrs,o.cls,o.directives,o.events,void 0,this.id,1)).createChildrenVnodes(o),a.if=o._if);if(a){a.dealComponent(i),a.parent=this.parent,a.events=Object.assign(a.events,this.events),a.directives=Object.assign(a.directives,this.directives),a.cls=Object.assign(a.cls,this.cls),a.attrs=Object.assign(a.attrs,this.attrs);var h=this.getIndex();this.parent.children.splice(h,1,a)}}else this.children.forEach((function(e){e.dealComponent(i)}))}},{key:"createChildrenVnodes",value:function(t){var i=this;if(void 0===t.text||null===t.text)t.slots.forEach((function(t,r){var n=new e(t.tag,t.attrs,t.cls,t.directives,t.events,void 0,i.id+"_"+r,1);i.children.push(n),n.createChildrenVnodes(t)}));else{var r=document.createTextNode(t.text),n=new e(r.nodeName,{},{},{},{},t.text,this.id+"_0",r.nodeType);this.children=[n]}}},{key:"dealDirectives",value:function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.if&&1==this.nodeType){for(var r in this.directives){var n=e.$directives[r],s=[],o=this.directives[r].exp,a=this.directives[r].modifier,c=this.directives[r].value;s="beforeMount"==t||"unmounted"==t?[c,a,o,this]:[this.elm,c,a,o,this],n[t]&&n[t].apply(e.$data,s)}i&&this.children.forEach((function(i){i.dealDirectives(e,t)}))}}},{key:"render",value:function(e){var i=this,r=null;if(this.if){if(1==this.nodeType){r=document.createElement(this.tag);var n=[];for(var s in this.cls)this.cls[s]&&n.push(s);for(var o in n.length&&r.setAttribute("class",n.join(" ")),this.attrs){var a=this.attrs[o];!1!==a&&null!=a&&(!0===a&&(a=""),"object"===(void 0===a?"undefined":t(a))&&(a=JSON.stringify(a)),a=String(a),r.setAttribute(o,a))}var c=function(t){r.addEventListener(t,(function(r){i.events[t].modifier&&i.events[t].modifier.includes("self")&&r.currentTarget!=r.target||(i.events[t].modifier&&i.events[t].modifier.includes("stop")&&r.stopPropagation(),i.events[t].modifier&&i.events[t].modifier.includes("prevent")&&r.cancelable&&r.preventDefault(),"function"==typeof i.events[t].handler?i.events[t].handler.apply(e.$data,[r].concat(function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}(i.events[t].params))):i.executeExpression(e.$data,i.events[t].handler)(e.$data))}),{once:i.events[t].modifier&&i.events[t].modifier.includes("once"),capture:i.events[t].modifier&&i.events[t].modifier.includes("capture"),passive:i.events[t].modifier&&i.events[t].modifier.includes("passive")})};for(var f in this.events)c(f);this.children.forEach((function(t){t.render(e),r.appendChild(t.elm)}))}else 3==this.nodeType?r=document.createTextNode(this.text):8==this.nodeType&&(r=document.createComment(this.text));this.elm=r}else this.elm=document.createComment("@if")}},{key:"isSame",value:function(e){return this.tag===e.tag&&this.nodeType===e.nodeType&&this.if===e.if&&this.useIf===e.useIf&&this.useElseIf===e.useElseIf&&this.useElse===e.useElse}},{key:"compare",value:function(e,t,i){var r={};if(0==i)for(var n in this[t])e[t].hasOwnProperty(n)&&JSON.stringify(e[t][n])!==JSON.stringify(this[t][n])&&(r[n]=this[t][n]);else if(1==i)for(var s in this[t])e[t].hasOwnProperty(s)||(r[s]=this[t][s]);else if(2==i)for(var o in e[t])this[t].hasOwnProperty(o)||(r[o]=e[t][o]);return r}},{key:"getForData",value:function(){var e={};return Object.assign(e,this.forData),this.parent&&Object.assign(e,this.parent.getForData()),e}},{key:"copy",value:function(){var t=this.id,i=this.tag,r=Object.assign({},this.directives),n=new e(i,Object.assign({},this.attrs),Object.assign({},this.cls),r,Object.assign({},this.events),this.text,t,this.nodeType);n.if=this.if,n.isCloned=this.isCloned,n.forData=Object.assign({},this.forData),n.useIf=this.useIf,n.useElseIf=this.useElseIf,n.useElse=this.useElse;var s=[],o=!0,a=!1,c=void 0;try{for(var f,h=this.children[Symbol.iterator]();!(o=(f=h.next()).done);o=!0){var d=f.value.copy();d.parent=n,s.push(d)}}catch(e){a=!0,c=e}finally{try{!o&&h.return&&h.return()}finally{if(a)throw c}}return n.children=s,n}},{key:"clone",value:function(t,i,r,n){var s=this.id+"_copy_"+t,o=this.tag,a=Object.assign({},this.directives),c=new e(o,Object.assign({},this.attrs),this.cls,a,Object.assign({},this.events),this.text,s,this.nodeType);c.isCloned=!0,n?(c.forData[i.item]=i.for[n],c.forData[i.index]=r,c.forData[i.key]=n):(c.forData[i.item]=i.for[r],c.forData[i.index]=r);var f=[];for(var h in this.children){var d=this.children[h].clone(h,i,r,n);d.parent=c,f.push(d)}return c.children=f,c}},{key:"equal",value:function(e){return this.id==e.id&&this.tag==e.tag&&this.nodeType==e.nodeType&&this.if==e.if&&this.isCloned==e.isCloned&&this.useIf==e.useIf&&this.useElseIf==e.useElseIf&&this.useElse==e.useElse&&(1==this.nodeType?JSON.stringify(this.attrs)==JSON.stringify(e.attrs)&&JSON.stringify(this.cls)==JSON.stringify(e.cls)&&JSON.stringify(this.directives)==JSON.stringify(e.directives)&&JSON.stringify(this.events)==JSON.stringify(e.events)&&this.children.length==e.children.length&&this.children.every((function(t,i){return t.equal(e.children[i])})):this.text==e.text)}},{key:"getPrevBrotherNode",value:function(){var e=this.getIndex();if(e<=0)return null;var t=this.parent.children[e-1];return 1!=t.nodeType&&(t=t.getPrevBrotherNode()),t}},{key:"getIndex",value:function(){var e=-1;if(this.parent)for(var t=this.parent.children.length,i=0;i<t;i++)if(this.parent.children[i]===this){e=i;break}return e}},{key:"parseFor",value:function(e,i){var r=i.match(/([^]*?)\s+(?:in|of)\s+([^]*)/);if(r){var n=this.parseExpression(e,r[2].trim()),s=r[1].trim().replace(/[\(\)]/g,"").trim().split(","),o={for:n,item:s[0].trim(),exp:r[2].trim()};return Array.isArray(n)?s.length>1?o.index=s[1].trim():o.index="index":"object"==(void 0===n?"undefined":t(n))&&n&&(s.length>1?o.key=s[1].trim():o.key="key",s.length>2?o.index=s[2].trim():o.index="index"),o}}},{key:"parseText",value:function(e,i){var r=this;return i.replace(/\{\{(.*?)\}\}/g,(function(i,n){var s=r.parseExpression(e,n.trim());return"object"===(void 0===s?"undefined":t(s))?JSON.stringify(s):String(s)}))}},{key:"parseExpression",value:function(e,t){var i="";for(var r in e)i+="let "+r+" = scope['"+r+"'];";return i+="return "+t,new Function("scope",i)(e)}},{key:"executeExpression",value:function(e,t){var i="";for(var r in e)i+="let "+r+" = scope['"+r+"'];";for(var n in i+=t+";",e)i+="scope['"+n+"'] = "+n+";";return new Function("scope",i)}}]),e}();e.exports=r}},t={};return function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}(579)})()}));