!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);var o;n(2);function i(e,t){if(e.textContent){var n=document.createElement("div");n.className="item "+e.localName;var o=document.createElement("span");o.setAttribute("onclick","clickToNavigation("+t+")"),o.textContent=e.textContent,n.appendChild(o),n.innerHTML+="</span>",document.getElementById("navigator-items").appendChild(n)}}if(window.copyToClipboard=function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)},window.updateCounter=function(e){var t="Осталось "+(e.maxLength-e.value.length)+" символов";document.getElementById(e.id+"-lbl").innerHTML=t},window.onSubmit=function(e){window.onbeforeunload=null;var t=document.getElementById("submit");t.disabled=!0,t.innerHTML=e},document.addEventListener("keyup",(function(e){if(e.ctrlKey&&13===e.keyCode){var t=document.getElementById("admin");"none"===t.style.display?t.style.display="block":t.style.display="none"}})),(o=new XMLHttpRequest).open("POST","/account/trackActivity",!0),o.send(),document.getElementById("blog-details")){var d=document.querySelector(".blog-item").querySelectorAll("h1, h2, h3, h4, h5, h6");for(let e=0;e<d.length;e++)i(d[e],e)}window.clickToNavigation=function(e){d[e].scrollIntoView()},window.addToFavorites=function(e){var t=new XMLHttpRequest;t.open("GET","/Blog/AddToFavorites?blogId="+e,!0),t.send(),t.onload=function(){204===t.status&&(document.getElementById("isFavorite").style.display="inline",document.getElementById("isNotFavorite").style.display="none")}},window.removeFromFavorites=function(e){var t=new XMLHttpRequest;t.open("GET","/Blog/RemoveFromFavorites?blogId="+e,!0),t.onload=function(){204===t.status&&(document.getElementById("isFavorite").style.display="none",document.getElementById("isNotFavorite").style.display="inline")},t.send()},window.showMenu=function(){document.getElementById("top-menu").style.display="inline-block",document.getElementById("burger-btn").classList.add("hide"),document.getElementById("close-btn").classList.remove("hide")},window.hideMenu=function(){document.getElementById("top-menu").style.display="none",document.getElementById("burger-btn").classList.remove("hide"),document.getElementById("close-btn").classList.add("hide")}},function(e,t,n){}]);