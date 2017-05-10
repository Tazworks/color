!function(){"use strict";var r="undefined"==typeof global?self:global;if("function"!=typeof r.require){var t={},n={},e={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,a=function(r,t){for(var n,e=[],o=(i.test(t)?r+"/"+t:t).split("/"),a=0,l=o.length;a<l;a++)n=o[a],".."===n?e.pop():"."!==n&&""!==n&&e.push(n);return e.join("/")},l=function(r){return r.split("/").slice(0,-1).join("/")},h=function(t){return function(n){var e=a(l(t),n);return r.require(e,t)}},s=function(r,t){var e=g&&g.createHot(r),o={id:r,exports:{},hot:e};return n[r]=o,t(o.exports,h(r),o),o.exports},c=function(r){return e[r]?c(e[r]):r},u=function(r,t){return c(a(l(r),t))},f=function(r,e){null==e&&(e="/");var i=c(r);if(o.call(n,i))return n[i].exports;if(o.call(t,i))return s(i,t[i]);throw new Error("Cannot find module '"+r+"' from '"+e+"'")};f.alias=function(r,t){e[t]=r};var p=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,b=function(r){if(p.test(r)){var t=r.replace(p,"");o.call(e,t)&&e[t].replace(p,"")!==t+"/index"||(e[t]=r)}if(v.test(r)){var n=r.replace(v,"");o.call(e,n)||(e[n]=r)}};f.register=f.define=function(r,e){if(r&&"object"==typeof r)for(var i in r)o.call(r,i)&&f.register(i,r[i]);else t[r]=e,delete n[r],b(r)},f.list=function(){var r=[];for(var n in t)o.call(t,n)&&r.push(n);return r};var g=r._hmr&&new r._hmr(u,f,t,n);f._cache=n,f.hmr=g&&g.wrap,f.brunch=!0,r.require=f}}(),function(){"undefined"==typeof window||window;require.register("index.js",function(r,t,n){"use strict";function e(r,t){if(!(this instanceof e))return new e(r,t);if(t&&t in p&&(t=null),t&&!(t in u))throw new Error("Unknown model: "+t);var n,o;if(r)if(r instanceof e)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var i=c.get(r);if(null===i)throw new Error("Unable to parse color from string: "+r);this.model=i.model,o=u[this.model].channels,this.color=i.value.slice(0,o),this.valpha="number"==typeof i.value[o]?i.value[o]:1}else if(r.length){this.model=t||"rgb",o=u[this.model].channels;var a=f.call(r,0,o);this.color=s(a,o),this.valpha="number"==typeof r[o]?r[o]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var l=Object.keys(r);"alpha"in r&&(l.splice(l.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var h=l.sort().join("");if(!(h in v))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=v[h];var g=u[this.model].labels,m=[];for(n=0;n<g.length;n++)m.push(r[g[n]]);this.color=s(m)}else this.model="rgb",this.color=[0,0,0],this.valpha=1;if(b[this.model])for(o=u[this.model].channels,n=0;n<o;n++){var d=b[this.model][n];d&&(this.color[n]=d(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function o(r,t){return Number(r.toFixed(t))}function i(r){return function(t){return o(t,r)}}function a(r,t,n){return r=Array.isArray(r)?r:[r],r.forEach(function(r){(b[r]||(b[r]=[]))[t]=n}),r=r[0],function(e){var o;return arguments.length?(n&&(e=n(e)),o=this[r](),o.color[t]=e,o):(o=this[r]().color[t],n&&(o=n(o)),o)}}function l(r){return function(t){return Math.max(0,Math.min(r,t))}}function h(r){return Array.isArray(r)?r:[r]}function s(r,t){for(var n=0;n<t;n++)"number"!=typeof r[n]&&(r[n]=0);return r}var c=t("color-string"),u=t("color-convert"),f=[].slice,p=["keyword","gray","hex"],v={};Object.keys(u).forEach(function(r){v[f.call(u[r].labels).sort().join("")]=r});var b={};e.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var t=this.model in c.to?this:this.rgb();t=t.round("number"==typeof r?r:1);var n=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to[t.model](n)},percentString:function(r){var t=this.rgb().round("number"==typeof r?r:1),n=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},t=u[this.model].channels,n=u[this.model].labels,e=0;e<t;e++)r[n[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new e(this.color.map(i(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new e(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:a("rgb",0,l(255)),green:a("rgb",1,l(255)),blue:a("rgb",2,l(255)),hue:a(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:a("hsl",1,l(100)),lightness:a("hsl",2,l(100)),saturationv:a("hsv",1,l(100)),value:a("hsv",2,l(100)),chroma:a("hcg",1,l(100)),gray:a("hcg",2,l(100)),white:a("hwb",1,l(100)),wblack:a("hwb",2,l(100)),cyan:a("cmyk",0,l(100)),magenta:a("cmyk",1,l(100)),yellow:a("cmyk",2,l(100)),black:a("cmyk",3,l(100)),x:a("xyz",0,l(100)),y:a("xyz",1,l(100)),z:a("xyz",2,l(100)),l:a("lab",0,l(100)),a:a("lab",1),b:a("lab",2),keyword:function(r){return arguments.length?new e(r):u[this.model].keyword(this.color)},hex:function(r){return arguments.length?new e(r):c.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,t=[],n=0;n<r.length;n++){var e=r[n]/255;t[n]=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),n=r.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level:function(r){var t=this.contrast(r);return t>=7.1?"AAA":t>=4.5?"AA":""},dark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var r=this.rgb(),t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten:function(r){var t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken:function(r){var t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate:function(r){var t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate:function(r){var t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten:function(r){var t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken:function(r){var t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale:function(){var r=this.rgb().color,t=.3*r[0]+.59*r[1]+.11*r[2];return e.rgb(t,t,t)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var t=this.hsl(),n=t.color[0];return n=(n+r)%360,n=n<0?360+n:n,t.color[0]=n,t},mix:function(r,t){var n=this.rgb(),o=r.rgb(),i=void 0===t?.5:t,a=2*i-1,l=n.alpha()-o.alpha(),h=((a*l==-1?a:(a+l)/(1+a*l))+1)/2,s=1-h;return e.rgb(h*n.red()+s*o.red(),h*n.green()+s*o.green(),h*n.blue()+s*o.blue(),n.alpha()*i+o.alpha()*(1-i))}},Object.keys(u).forEach(function(r){if(-1===p.indexOf(r)){var t=u[r].channels;e.prototype[r]=function(){if(this.model===r)return new e(this);if(arguments.length)return new e(arguments,r);var n="number"==typeof arguments[t]?t:this.valpha;return new e(h(u[this.model][r].raw(this.color)).concat(n),r)},e[r]=function(n){return"number"==typeof n&&(n=s(f.call(arguments),t)),new e(n,r)}}}),n.exports=e}),require.alias("assert/assert.js","assert"),require.alias("process/browser.js","process"),require.alias("util/util.js","sys"),require("process"),require.register("___globals___",function(r,t,n){})}(),require("___globals___");