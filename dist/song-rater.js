var songDrater=(()=>{var a=Object.create,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,f=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,t=(t,e)=>function(){return e||(0,t[l(t)[0]])((e={exports:{}}).exports,e),e.exports},e=(t,e,n)=>{n=null!=t?a(f(t)):{};var r=!e&&t&&t.__esModule?n:s(n,"default",{value:t,enumerable:!0}),i=t,o=void 0,c=void 0;if(i&&"object"==typeof i||"function"==typeof i)for(let t of l(i))p.call(r,t)||t===o||s(r,t,{get:()=>i[t],enumerable:!(c=u(i,t))||c.enumerable});return r},n=t({"node_modules/umbrellajs/umbrella.min.js"(t,e){function a(t,e){return this instanceof a?t instanceof a?t:((t="string"==typeof t?this.select(t,e):t)&&t.nodeName&&(t=[t]),void(this.nodes=this.slice(t))):new a(t,e)}(a.prototype={get length(){return this.nodes.length}}).nodes=[],a.prototype.addClass=function(){return this.eacharg(arguments,function(t,e){t.classList.add(e)})},a.prototype.adjacent=function(i,t,o){return"number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(n,r){var e=document.createDocumentFragment();a(t||{}).map(function(t,e){return"string"==typeof(e="function"==typeof i?i.call(this,t,e,n,r):i)?this.generate(e):a(e)}).each(function(t){this.isInPage(t)?e.appendChild(a(t).clone().first()):e.appendChild(t)}),o.call(this,n,e)})},a.prototype.after=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t.nextSibling)})},a.prototype.append=function(t,e){return this.adjacent(t,e,function(t,e){t.appendChild(e)})},a.prototype.args=function(t,e,n){return(t="string"!=typeof(t="function"==typeof t?t(e,n):t)?this.slice(t).map(this.str(e,n)):t).toString().split(/[\s,]+/).filter(function(t){return t.length})},a.prototype.array=function(i){var o=this;return this.nodes.reduce(function(t,e,n){var r;return i?(r="string"==typeof(r=i.call(o,e,n)||!1)?a(r):r)instanceof a&&(r=r.nodes):r=e.innerHTML,t.concat(!1!==r?r:[])},[])},a.prototype.attr=function(t,e,r){return r=r?"data-":"",this.pairs(t,e,function(t,e){return t.getAttribute(r+e)},function(t,e,n){n?t.setAttribute(r+e,n):t.removeAttribute(r+e)})},a.prototype.before=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t)})},a.prototype.children=function(t){return this.map(function(t){return this.slice(t.children)}).filter(t)},a.prototype.clone=function(){return this.map(function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each(function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e])}),n})},a.prototype.getAll=function(t){return a([t].concat(a("*",t).nodes))},(a.prototype.mirror={}).events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach(function(t){a(e).on(n,t.callback)})},a.prototype.mirror.select=function(t,e){a(t).is("select")&&(e.value=t.value)},a.prototype.mirror.textarea=function(t,e){a(t).is("textarea")&&(e.value=t.value)},a.prototype.closest=function(e){return this.map(function(t){do{if(a(t).is(e))return t}while((t=t.parentNode)&&t!==document)})},a.prototype.data=function(t,e){return this.attr(t,e,!0)},a.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},a.prototype.eacharg=function(n,r){return this.each(function(e,t){this.args(n,e,t).forEach(function(t){r.call(this,e,t)},this)})},a.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)})},a.prototype.filter=function(e){return a(this.nodes.filter(e instanceof a?function(t){return-1!==e.nodes.indexOf(t)}:"function"==typeof e?e:function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")}))},a.prototype.find=function(e){return this.map(function(t){return a(e||"*",t)})},a.prototype.first=function(){return this.nodes[0]||!1},a.prototype.generate=function(t){return/^\s*<tr[> ]/.test(t)?a(document.createElement("table")).html(t).children().children().nodes:/^\s*<t(h|d)[> ]/.test(t)?a(document.createElement("table")).html(t).children().children().children().nodes:/^\s*</.test(t)?a(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},a.prototype.handle=function(){var t=this.slice(arguments).map(function(e){return"function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments)}:e},this);return this.on.apply(this,t)},a.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},a.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e})},a.prototype.is=function(t){return 0<this.filter(t).length},a.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},a.prototype.last=function(){return this.nodes[this.length-1]||!1},a.prototype.map=function(t){return t?a(this.array(t)).unique():this},a.prototype.not=function(e){return this.filter(function(t){return!a(t).is(e||!0)})},a.prototype.off=function(t,e,n){var r=null==e&&null==n,i=null,o=e;return"string"==typeof e&&(i=e,o=n),this.eacharg(t,function(e,n){a(e._e?e._e[n]:[]).each(function(t){(r||t.orig_callback===o&&t.selector===i)&&e.removeEventListener(n,t.callback)})})},a.prototype.on=function(t,e,i){function o(t,e){try{Object.defineProperty(t,"currentTarget",{value:e,configurable:!0})}catch(t){}}var c=null,n=e;function r(t){return e.apply(this,[t].concat(t.detail||[]))}return"string"==typeof e&&(c=e,n=i,e=function(n){var r=arguments;a(n.currentTarget).find(c).each(function(t){var e;t.contains(n.target)&&(e=n.currentTarget,o(n,t),i.apply(t,r),o(n,e))})}),this.eacharg(t,function(t,e){t.addEventListener(e,r),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push({callback:r,orig_callback:n,selector:c})})},a.prototype.pairs=function(r,t,e,i){var n;return void 0!==t&&(n=r,(r={})[n]=t),"object"==typeof r?this.each(function(t,e){for(var n in r)"function"==typeof r[n]?i(t,n,r[n](t,e)):i(t,n,r[n])}):this.length?e(this.first(),r):""},a.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},a.prototype.parent=function(t){return this.map(function(t){return t.parentNode}).filter(t)},a.prototype.prepend=function(t,e){return this.adjacent(t,e,function(t,e){t.insertBefore(e,t.firstChild)})},a.prototype.remove=function(){return this.each(function(t){t.parentNode&&t.parentNode.removeChild(t)})},a.prototype.removeClass=function(){return this.eacharg(arguments,function(t,e){t.classList.remove(e)})},a.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t)}),a(n)},a.prototype.scroll=function(){return this.first().scrollIntoView({behavior:"smooth"}),this},a.prototype.select=function(t,e){return t=t.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(t)?a().generate(t):(e||document).querySelectorAll(t)},a.prototype.serialize=function(){var r=this;return this.slice(this.first().elements).reduce(function(e,n){return!n.name||n.disabled||"file"===n.type||/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(a(n.options).each(function(t){t.selected&&(e+="&"+r.uri(n.name)+"="+r.uri(t.value))}),e):e+"&"+r.uri(n.name)+"="+r.uri(n.value)},"").slice(1)},a.prototype.siblings=function(t){return this.parent().children(t).not(this)},a.prototype.size=function(){return this.first().getBoundingClientRect()},a.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},a.prototype.str=function(e,n){return function(t){return"function"==typeof t?t.call(this,e,n):t.toString()}},a.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e})},a.prototype.toggleClass=function(t,e){return!!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,function(t,e){t.classList.toggle(e)})},a.prototype.trigger=function(t){var i=this.slice(arguments).slice(1);return this.eacharg(t,function(t,e){var n,r={bubbles:!0,cancelable:!0,detail:i};try{n=new window.CustomEvent(e,r)}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i)}t.dispatchEvent(n)})},a.prototype.unique=function(){return a(this.nodes.reduce(function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t},[]))},a.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},a.prototype.wrap=function(t){return this.map(function(e){return a(t).each(function(t){!function(t){for(;t.firstElementChild;)t=t.firstElementChild;return a(t)}(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)})})},"object"==typeof e&&e.exports&&(e.exports=a,e.exports.u=a)}}),t=t({"node_modules/arrive/src/arrive.js"(){!function(u,t,l){"use strict";var r,f,n,e,c,i,a;if(u.MutationObserver&&"undefined"!=typeof HTMLElement)r=0,n=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,f={matchesSelector:function(t,e){return t instanceof HTMLElement&&n.call(t,e)},addMethod:function(t,e,n){var r=t[e];t[e]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0}},callCallbacks:function(t,e){e&&e.options.onceOnly&&1==e.firedElems.length&&(t=[t[0]]);for(var n,r=0;n=t[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);e&&e.options.onceOnly&&1==e.firedElems.length&&e.me.unbindEventWithSelectorAndCallback.call(e.target,e.selector,e.callback)},checkChildNodesRecursively:function(t,e,n,r){for(var i,o=0;i=t[o];o++)n(i,e,r)&&r.push({callback:e.callback,elem:i}),0<i.childNodes.length&&f.checkChildNodesRecursively(i.childNodes,e,n,r)},mergeArrays:function(t,e){var n,r={};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r},toElementsArray:function(t){return t=void 0===t||"number"==typeof t.length&&t!==u?t:[t]}},o.prototype.addEvent=function(t,e,n,r){t={target:t,selector:e,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(t),this._eventsBucket.push(t),t},o.prototype.removeEvent=function(t){for(var e,n=this._eventsBucket.length-1;e=this._eventsBucket[n];n--)t(e)&&(this._beforeRemoving&&this._beforeRemoving(e),(e=this._eventsBucket.splice(n,1))&&e.length&&(e[0].callback=null))},o.prototype.beforeAdding=function(t){this._beforeAdding=t},o.prototype.beforeRemoving=function(t){this._beforeRemoving=t},e=o,c=function(i,o){var c=new e,a=this,s={fireOnAttributesModification:!1};return c.beforeAdding(function(e){var t,n=e.target,r=(n!==u.document&&n!==u||(n=document.getElementsByTagName("html")[0]),t=new MutationObserver(function(t){o.call(this,t,e)}),i(e.options));t.observe(n,r),e.observer=t,e.me=a}),c.beforeRemoving(function(t){t.observer.disconnect()}),this.bindEvent=function(t,e,n){e=f.mergeArrays(s,e);for(var r=f.toElementsArray(this),i=0;i<r.length;i++)c.addEvent(r[i],t,e,n)},this.unbindEvent=function(){var n=f.toElementsArray(this);c.removeEvent(function(t){for(var e=0;e<n.length;e++)if(this===l||t.target===n[e])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(n){var r=f.toElementsArray(this),i=n,t="function"==typeof n?function(t){for(var e=0;e<r.length;e++)if((this===l||t.target===r[e])&&t.callback===i)return!0;return!1}:function(t){for(var e=0;e<r.length;e++)if((this===l||t.target===r[e])&&t.selector===n)return!0;return!1};c.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(n,r){var i=f.toElementsArray(this);c.removeEvent(function(t){for(var e=0;e<i.length;e++)if((this===l||t.target===i[e])&&t.selector===n&&t.callback===r)return!0;return!1})},this},i=new function(){var s={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};function o(t,e,n){return!(!f.matchesSelector(t,e.selector)||(t._id===l&&(t._id=r++),-1!=e.firedElems.indexOf(t._id)))&&(e.firedElems.push(t._id),!0)}var u=(i=new c(function(t){var e={attributes:!1,childList:!0,subtree:!0};return t.fireOnAttributesModification&&(e.attributes=!0),e},function(t,i){t.forEach(function(t){var e=t.addedNodes,n=t.target,r=[];null!==e&&0<e.length?f.checkChildNodesRecursively(e,i,o,r):"attributes"===t.type&&o(n,i)&&r.push({callback:i.callback,elem:n}),f.callCallbacks(r,i)})})).bindEvent;return i.bindEvent=function(t,e,n){e=void 0===n?(n=e,s):f.mergeArrays(s,e);var r=f.toElementsArray(this);if(e.existing){for(var i=[],o=0;o<r.length;o++)for(var c=r[o].querySelectorAll(t),a=0;a<c.length;a++)i.push({callback:n,elem:c[a]});if(e.onceOnly&&i.length)return n.call(i[0].elem,i[0].elem);setTimeout(f.callCallbacks,1,i)}u.call(this,t,e,n)},i},a=new function(){var r={};function i(t,e){return f.matchesSelector(t,e.selector)}var o=(a=new c(function(){return{childList:!0,subtree:!0}},function(t,n){t.forEach(function(t){var t=t.removedNodes,e=[];null!==t&&0<t.length&&f.checkChildNodesRecursively(t,n,i,e),f.callCallbacks(e,n)})})).bindEvent;return a.bindEvent=function(t,e,n){e=void 0===n?(n=e,r):f.mergeArrays(r,e),o.call(this,t,e,n)},a},t&&p(t.fn),p(HTMLElement.prototype),p(NodeList.prototype),p(HTMLCollection.prototype),p(HTMLDocument.prototype),p(Window.prototype),t={},s(i,t,"unbindAllArrive"),s(a,t,"unbindAllLeave");function o(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null}function s(t,e,n){f.addMethod(e,n,t.unbindEvent),f.addMethod(e,n,t.unbindEventWithSelectorOrCallback),f.addMethod(e,n,t.unbindEventWithSelectorAndCallback)}function p(t){t.arrive=i.bindEvent,s(i,t,"unbindArrive"),t.leave=a.bindEvent,s(a,t,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0)}}),c=e(n()),r=e(n()),i=(t(),class{constructor(t){this.uPMain=t,this.starMax=0,this.uSpansStars=[],this.currentRating=0,this.currentSongUri=null!=(t=Spicetify.Queue.track.uri)?t:null,Spicetify.Player.addEventListener("songchange",t=>{null!=(t=null==t?void 0:t.data.track)&&t.uri;Spicetify.PopupModal.display({title:"Song Changed",content:JSON.stringify(Spicetify.Queue.track)})})}addStar(){const e=++this.starMax;let t=(0,r.default)(`<span class='star-${e}'>☆</span>`),n=this;t.on("click",t=>{n.setRating(e)}),this.uPMain.append(t),this.uSpansStars.push(t)}addStars(e){for(let t=0;t<e;t++)this.addStar()}setRating(e){null!=this.currentSongUri&&i.setSongRating(this.currentSongUri,e),this.currentRating=e;for(let t=0;t<this.starMax;t++)t<e?this.uSpansStars[t].text(i.fullStar):this.uSpansStars[t].text(i.emptyStar)}static getSongRating(t){return Number(Spicetify.LocalStorage.get("song-rater_"+t))}static setSongRating(t,e){Spicetify.LocalStorage.set("song-rater_"+t,e.toString())}static getCurrentSong(){var t;return null!=(t=Spicetify.Queue.track)?t:void 0}}),h=i;h.emptyStar="☆",h.fullStar="★",t();var o=async function(){for(;null==Spicetify||!Spicetify.PopupModal;)await new Promise(t=>setTimeout(t,100));let o=".main-trackInfo-container";document.arrive(o,{existing:!0,onceOnly:!0},t=>{let e=(0,c.default)(o),n=(0,c.default)(".main-trackInfo-container > *:first-child").clone();n.attr("class","");var r=(0,c.default)("span",n.first()).replace("<p></p>");let i=new h(r);i.addStars(5),e.append(n)})};(async()=>{await o()})()})();