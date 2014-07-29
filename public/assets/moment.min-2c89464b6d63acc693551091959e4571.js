(function(e){function t(e,t){return function(n){return u(e.call(this,n),t)}}function n(e,t){return function(n){return this.lang().ordinal(e.call(this,n),t)}}function s(){}function r(e){M(e),i(this,e)}function a(e){var t=_(e),n=t.year||0,s=t.month||0,r=t.week||0,a=t.day||0,i=t.hour||0,o=t.minute||0,u=t.second||0,d=t.millisecond||0;this._input=e,this._milliseconds=+d+1e3*u+6e4*o+36e5*i,this._days=+a+7*r,this._months=+s+12*n,this._data={},this._bubble()}function i(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return t.hasOwnProperty("toString")&&(e.toString=t.toString),t.hasOwnProperty("valueOf")&&(e.valueOf=t.valueOf),e}function o(e){return 0>e?Math.ceil(e):Math.floor(e)}function u(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}function d(e,t,n,s){var r,a,i=t._milliseconds,o=t._days,u=t._months;i&&e._d.setTime(+e._d+i*n),(o||u)&&(r=e.minute(),a=e.hour()),o&&e.date(e.date()+o*n),u&&e.month(e.month()+u*n),i&&!s&&tt.updateOffset(e),(o||u)&&(e.minute(r),e.hour(a))}function h(e){return"[object Array]"===Object.prototype.toString.call(e)}function f(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function c(e,t,n){var s,r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),i=0;for(s=0;r>s;s++)(n&&e[s]!==t[s]||!n&&y(e[s])!==y(t[s]))&&i++;return i+a}function l(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=Pt[e]||Ht[t]||t}return e}function _(e){var t,n,s={};for(n in e)e.hasOwnProperty(n)&&(t=l(n),t&&(s[t]=e[n]));return s}function m(t){var n,s;if(0===t.indexOf("week"))n=7,s="day";else{if(0!==t.indexOf("month"))return;n=12,s="month"}tt[t]=function(r,a){var i,o,u=tt.fn._lang[t],d=[];if("number"==typeof r&&(a=r,r=e),o=function(e){var t=tt().utc().set(s,e);return u.call(tt.fn._lang,t,r||"")},null!=a)return o(a);for(i=0;n>i;i++)d.push(o(i));return d}}function y(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function p(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function g(e){return w(e)?366:365}function w(e){return 0===e%4&&0!==e%100||0===e%400}function M(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[it]<0||e._a[it]>11?it:e._a[ot]<1||e._a[ot]>p(e._a[at],e._a[it])?ot:e._a[ut]<0||e._a[ut]>23?ut:e._a[dt]<0||e._a[dt]>59?dt:e._a[ht]<0||e._a[ht]>59?ht:e._a[ft]<0||e._a[ft]>999?ft:-1,e._pf._overflowDayOfYear&&(at>t||t>ot)&&(t=ot),e._pf.overflow=t)}function D(e){e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function Y(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function v(e){return e?e.toLowerCase().replace("_","-"):e}function k(e,t){return t.abbr=e,ct[e]||(ct[e]=new s),ct[e].set(t),ct[e]}function S(e){delete ct[e]}function b(e){var t,n,s,r,a=0,i=function(e){if(!ct[e]&&lt)try{require("./lang/"+e)}catch(t){}return ct[e]};if(!e)return tt.fn._lang;if(!h(e)){if(n=i(e))return n;e=[e]}for(;a<e.length;){for(r=v(e[a]).split("-"),t=r.length,s=v(e[a+1]),s=s?s.split("-"):null;t>0;){if(n=i(r.slice(0,t).join("-")))return n;if(s&&s.length>=t&&c(r,s,!0)>=t-1)break;t--}a++}return tt.fn._lang}function T(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function O(e){var t,n,s=e.match(pt);for(t=0,n=s.length;n>t;t++)s[t]=Zt[s[t]]?Zt[s[t]]:T(s[t]);return function(r){var a="";for(t=0;n>t;t++)a+=s[t]instanceof Function?s[t].call(r,e):s[t];return a}}function G(e,t){return e.isValid()?(t=W(t,e.lang()),xt[t]||(xt[t]=O(t)),xt[t](e)):e.lang().invalidDate()}function W(e,t){function n(e){return t.longDateFormat(e)||e}var s=5;for(gt.lastIndex=0;s>=0&&gt.test(e);)e=e.replace(gt,n),gt.lastIndex=0,s-=1;return e}function F(e,t){var n;switch(e){case"DDDD":return Dt;case"YYYY":case"GGGG":case"gggg":return Yt;case"YYYYY":case"GGGGG":case"ggggg":return vt;case"S":case"SS":case"SSS":case"DDD":return Mt;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return St;case"a":case"A":return b(t._l)._meridiemParse;case"X":return Ot;case"Z":case"ZZ":return bt;case"T":return Tt;case"SSSS":return kt;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"ww":case"W":case"WW":case"e":case"E":return wt;default:return n=new RegExp(I(x(e.replace("\\","")),"i"))}}function C(e){var t=(bt.exec(e)||[])[0],n=(t+"").match(zt)||["-",0,0],s=+(60*n[1])+y(n[2]);return"+"===n[0]?-s:s}function z(e,t,n){var s,r=n._a;switch(e){case"M":case"MM":null!=t&&(r[it]=y(t)-1);break;case"MMM":case"MMMM":s=b(n._l).monthsParse(t),null!=s?r[it]=s:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(r[ot]=y(t));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=y(t));break;case"YY":r[at]=y(t)+(y(t)>68?1900:2e3);break;case"YYYY":case"YYYYY":r[at]=y(t);break;case"a":case"A":n._isPm=b(n._l).isPM(t);break;case"H":case"HH":case"h":case"hh":r[ut]=y(t);break;case"m":case"mm":r[dt]=y(t);break;case"s":case"ss":r[ht]=y(t);break;case"S":case"SS":case"SSS":case"SSSS":r[ft]=y(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=C(t);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":e=e.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=t)}}function L(e){var t,n,s,r,a,i,o,u,d,h,f=[];if(!e._d){for(s=P(e),e._w&&null==e._a[ot]&&null==e._a[it]&&(a=function(t){return t?t.length<3?parseInt(t,10)>68?"19"+t:"20"+t:t:null==e._a[at]?tt().weekYear():e._a[at]},i=e._w,null!=i.GG||null!=i.W||null!=i.E?o=R(a(i.GG),i.W||1,i.E,4,1):(u=b(e._l),d=null!=i.d?V(i.d,u):null!=i.e?parseInt(i.e,10)+u._week.dow:0,h=parseInt(i.w,10)||1,null!=i.d&&d<u._week.dow&&h++,o=R(a(i.gg),h,d,u._week.doy,u._week.dow)),e._a[at]=o.year,e._dayOfYear=o.dayOfYear),e._dayOfYear&&(r=null==e._a[at]?s[at]:e._a[at],e._dayOfYear>g(r)&&(e._pf._overflowDayOfYear=!0),n=$(r,0,e._dayOfYear),e._a[it]=n.getUTCMonth(),e._a[ot]=n.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=f[t]=s[t];for(;7>t;t++)e._a[t]=f[t]=null==e._a[t]?2===t?1:0:e._a[t];f[ut]+=y((e._tzm||0)/60),f[dt]+=y((e._tzm||0)%60),e._d=(e._useUTC?$:N).apply(null,f)}}function U(e){var t;e._d||(t=_(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],L(e))}function P(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function H(e){e._a=[],e._pf.empty=!0;var t,n,s,r,a,i=b(e._l),o=""+e._i,u=o.length,d=0;for(s=W(e._f,i).match(pt)||[],t=0;t<s.length;t++)r=s[t],n=(F(r,e).exec(o)||[])[0],n&&(a=o.substr(0,o.indexOf(n)),a.length>0&&e._pf.unusedInput.push(a),o=o.slice(o.indexOf(n)+n.length),d+=n.length),Zt[r]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(r),z(r,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(r);e._pf.charsLeftOver=u-d,o.length>0&&e._pf.unusedInput.push(o),e._isPm&&e._a[ut]<12&&(e._a[ut]+=12),e._isPm===!1&&12===e._a[ut]&&(e._a[ut]=0),L(e),M(e)}function x(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,r){return t||n||s||r})}function I(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function A(e){var t,n,s,r,a;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(r=0;r<e._f.length;r++)a=0,t=i({},e),D(t),t._f=e._f[r],H(t),Y(t)&&(a+=t._pf.charsLeftOver,a+=10*t._pf.unusedTokens.length,t._pf.score=a,(null==s||s>a)&&(s=a,n=t));i(e,n||t)}function Z(e){var t,n=e._i,s=Gt.exec(n);if(s){for(e._pf.iso=!0,t=4;t>0;t--)if(s[t]){e._f=Ft[t-1]+(s[6]||" ");break}for(t=0;4>t;t++)if(Ct[t][1].exec(n)){e._f+=Ct[t][0];break}bt.exec(n)&&(e._f+="Z"),H(e)}else e._d=new Date(n)}function E(t){var n=t._i,s=_t.exec(n);n===e?t._d=new Date:s?t._d=new Date(+s[1]):"string"==typeof n?Z(t):h(n)?(t._a=n.slice(0),L(t)):f(n)?t._d=new Date(+n):"object"==typeof n?U(t):t._d=new Date(n)}function N(e,t,n,s,r,a,i){var o=new Date(e,t,n,s,r,a,i);return 1970>e&&o.setFullYear(e),o}function $(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function V(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function J(e,t,n,s,r){return r.relativeTime(t||1,!!n,e,s)}function j(e,t,n){var s=rt(Math.abs(e)/1e3),r=rt(s/60),a=rt(r/60),i=rt(a/24),o=rt(i/365),u=45>s&&["s",s]||1===r&&["m"]||45>r&&["mm",r]||1===a&&["h"]||22>a&&["hh",a]||1===i&&["d"]||25>=i&&["dd",i]||45>=i&&["M"]||345>i&&["MM",rt(i/30)]||1===o&&["y"]||["yy",o];return u[2]=t,u[3]=e>0,u[4]=n,J.apply({},u)}function X(e,t,n){var s,r=n-t,a=n-e.day();return a>r&&(a-=7),r-7>a&&(a+=7),s=tt(e).add("d",a),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function R(e,t,n,s,r){var a,i,o=new Date(Date.UTC(e,0)).getUTCDay();return n=null!=n?n:r,a=r-o+(o>s?7:0),i=7*(t-1)+(n-r)+a+1,{year:i>0?e:e-1,dayOfYear:i>0?i:g(e-1)+i}}function q(e){var t=e._i,n=e._f;return"undefined"==typeof e._pf&&D(e),null===t?tt.invalid({nullInput:!0}):("string"==typeof t&&(e._i=t=b().preparse(t)),tt.isMoment(t)?(e=i({},t),e._d=new Date(+t._d)):n?h(n)?A(e):H(e):E(e),new r(e))}function B(e,t){tt.fn[e]=tt.fn[e+"s"]=function(e){var n=this._isUTC?"UTC":"";return null!=e?(this._d["set"+n+t](e),tt.updateOffset(this),this):this._d["get"+n+t]()}}function K(e){tt.duration.fn[e]=function(){return this._data[e]}}function Q(e,t){tt.duration.fn["as"+e]=function(){return+this/t}}function et(e){var t=!1,n=tt;"undefined"==typeof ender&&(this.moment=e?function(){return!t&&console&&console.warn&&(t=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),n.apply(null,arguments)}:tt)}for(var tt,nt,st="2.4.0",rt=Math.round,at=0,it=1,ot=2,ut=3,dt=4,ht=5,ft=6,ct={},lt="undefined"!=typeof module&&module.exports,_t=/^\/?Date\((\-?\d+)/i,mt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,yt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,pt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,gt=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,wt=/\d\d?/,Mt=/\d{1,3}/,Dt=/\d{3}/,Yt=/\d{1,4}/,vt=/[+\-]?\d{1,6}/,kt=/\d+/,St=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,bt=/Z|[\+\-]\d\d:?\d\d/i,Tt=/T/i,Ot=/[\+\-]?\d+(\.\d{1,3})?/,Gt=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/,Wt="YYYY-MM-DDTHH:mm:ssZ",Ft=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],Ct=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],zt=/([\+\-]|\d\d)/gi,Lt="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Ut={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Pt={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ht={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},xt={},It="DDD w W M D d".split(" "),At="M D H h m s w W".split(" "),Zt={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return y(this.milliseconds()/100)},SS:function(){return u(y(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},SSSS:function(){return u(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+u(y(e/60),2)+":"+u(y(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+u(y(10*e/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}},Et=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];It.length;)nt=It.pop(),Zt[nt+"o"]=n(Zt[nt],nt);for(;At.length;)nt=At.pop(),Zt[nt+nt]=t(Zt[nt],2);for(Zt.DDDD=t(Zt.DDD,3),i(s.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,s;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=tt.utc([2e3,t]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=tt([2e3,1]).day(t),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,s){var r=this._relativeTime[n];return"function"==typeof r?r(e,t,n,s):r.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return X(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tt=function(t,n,s,r){return"boolean"==typeof s&&(r=s,s=e),q({_i:t,_f:n,_l:s,_strict:r,_isUTC:!1})},tt.utc=function(t,n,s,r){var a;return"boolean"==typeof s&&(r=s,s=e),a=q({_useUTC:!0,_isUTC:!0,_l:s,_i:t,_f:n,_strict:r}).utc()},tt.unix=function(e){return tt(1e3*e)},tt.duration=function(e,t){var n,s,r,i=tt.isDuration(e),o="number"==typeof e,u=i?e._input:o?{}:e,d=null;return o?t?u[t]=e:u.milliseconds=e:(d=mt.exec(e))?(n="-"===d[1]?-1:1,u={y:0,d:y(d[ot])*n,h:y(d[ut])*n,m:y(d[dt])*n,s:y(d[ht])*n,ms:y(d[ft])*n}):(d=yt.exec(e))&&(n="-"===d[1]?-1:1,r=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n},u={y:r(d[2]),M:r(d[3]),d:r(d[4]),h:r(d[5]),m:r(d[6]),s:r(d[7]),w:r(d[8])}),s=new a(u),i&&e.hasOwnProperty("_lang")&&(s._lang=e._lang),s},tt.version=st,tt.defaultFormat=Wt,tt.updateOffset=function(){},tt.lang=function(e,t){var n;return e?(t?k(v(e),t):null===t?(S(e),e="en"):ct[e]||b(e),n=tt.duration.fn._lang=tt.fn._lang=b(e),n._abbr):tt.fn._lang._abbr},tt.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),b(e)},tt.isMoment=function(e){return e instanceof r},tt.isDuration=function(e){return e instanceof a},nt=Et.length-1;nt>=0;--nt)m(Et[nt]);for(tt.normalizeUnits=function(e){return l(e)},tt.invalid=function(e){var t=tt.utc(0/0);return null!=e?i(t._pf,e):t._pf.userInvalidated=!0,t},tt.parseZone=function(e){return tt(e).parseZone()},i(tt.fn=r.prototype,{clone:function(){return tt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return G(tt(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return Y(this)},isDSTShifted:function(){return this._a?this.isValid()&&c(this._a,(this._isUTC?tt.utc(this._a):tt(this._a)).toArray())>0:!1},parsingFlags:function(){return i({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(e){var t=G(this,e||tt.defaultFormat);return this.lang().postformat(t)},add:function(e,t){var n;return n="string"==typeof e?tt.duration(+t,e):tt.duration(e,t),d(this,n,1),this},subtract:function(e,t){var n;return n="string"==typeof e?tt.duration(+t,e):tt.duration(e,t),d(this,n,-1),this},diff:function(e,t,n){var s,r,a=this._isUTC?tt(e).zone(this._offset||0):tt(e).local(),i=6e4*(this.zone()-a.zone());return t=l(t),"year"===t||"month"===t?(s=432e5*(this.daysInMonth()+a.daysInMonth()),r=12*(this.year()-a.year())+(this.month()-a.month()),r+=(this-tt(this).startOf("month")-(a-tt(a).startOf("month")))/s,r-=6e4*(this.zone()-tt(this).startOf("month").zone()-(a.zone()-tt(a).startOf("month").zone()))/s,"year"===t&&(r/=12)):(s=this-a,r="second"===t?s/1e3:"minute"===t?s/6e4:"hour"===t?s/36e5:"day"===t?(s-i)/864e5:"week"===t?(s-i)/6048e5:s),n?r:o(r)},from:function(e,t){return tt.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(tt(),e)},calendar:function(){var e=this.diff(tt().zone(this.zone()).startOf("day"),"days",!0),t=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(this.lang().calendar(t,this))},isLeapYear:function(){return w(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=V(e,this.lang()),this.add({d:e-t})):t},month:function(e){var t,n=this._isUTC?"UTC":"";return null!=e?"string"==typeof e&&(e=this.lang().monthsParse(e),"number"!=typeof e)?this:(t=this.date(),this.date(1),this._d["set"+n+"Month"](e),this.date(Math.min(t,this.daysInMonth())),tt.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(e){switch(e=l(e)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),this},endOf:function(e){return e=l(e),this.startOf(e).add("isoWeek"===e?"week":e,1).subtract("ms",1)},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+tt(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+tt(e).startOf(t)},isSame:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)===+tt(e).startOf(t)},min:function(e){return e=tt.apply(null,arguments),this>e?this:e},max:function(e){return e=tt.apply(null,arguments),e>this?this:e},zone:function(e){var t=this._offset||0;return null==e?this._isUTC?t:this._d.getTimezoneOffset():("string"==typeof e&&(e=C(e)),Math.abs(e)<16&&(e=60*e),this._offset=e,this._isUTC=!0,t!==e&&d(this,tt.duration(t-e,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?tt(e).zone():0,0===(this.zone()-e)%60},daysInMonth:function(){return p(this.year(),this.month())},dayOfYear:function(e){var t=rt((tt(this).startOf("day")-tt(this).startOf("year"))/864e5)+1;return null==e?t:this.add("d",e-t)},weekYear:function(e){var t=X(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==e?t:this.add("y",e-t)},isoWeekYear:function(e){var t=X(this,1,4).year;return null==e?t:this.add("y",e-t)},week:function(e){var t=this.lang().week(this);return null==e?t:this.add("d",7*(e-t))},isoWeek:function(e){var t=X(this,1,4).week;return null==e?t:this.add("d",7*(e-t))},weekday:function(e){var t=(this.day()+7-this.lang()._week.dow)%7;return null==e?t:this.add("d",e-t)},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},get:function(e){return e=l(e),this[e]()},set:function(e,t){return e=l(e),"function"==typeof this[e]&&this[e](t),this},lang:function(t){return t===e?this._lang:(this._lang=b(t),this)}}),nt=0;nt<Lt.length;nt++)B(Lt[nt].toLowerCase().replace(/s$/,""),Lt[nt]);B("year","FullYear"),tt.fn.days=tt.fn.day,tt.fn.months=tt.fn.month,tt.fn.weeks=tt.fn.week,tt.fn.isoWeeks=tt.fn.isoWeek,tt.fn.toJSON=tt.fn.toISOString,i(tt.duration.fn=a.prototype,{_bubble:function(){var e,t,n,s,r=this._milliseconds,a=this._days,i=this._months,u=this._data;u.milliseconds=r%1e3,e=o(r/1e3),u.seconds=e%60,t=o(e/60),u.minutes=t%60,n=o(t/60),u.hours=n%24,a+=o(n/24),u.days=a%30,i+=o(a/30),u.months=i%12,s=o(i/12),u.years=s},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*y(this._months/12)},humanize:function(e){var t=+this,n=j(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},add:function(e,t){var n=tt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=tt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=l(e),this[e.toLowerCase()+"s"]()},as:function(e){return e=l(e),this["as"+e.charAt(0).toUpperCase()+e.slice(1)+"s"]()},lang:tt.fn.lang,toIsoString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),s=Math.abs(this.hours()),r=Math.abs(this.minutes()),a=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(s||r||a?"T":"")+(s?s+"H":"")+(r?r+"M":"")+(a?a+"S":""):"P0D"}});for(nt in Ut)Ut.hasOwnProperty(nt)&&(Q(nt,Ut[nt]),K(nt.toLowerCase()));Q("Weeks",6048e5),tt.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},tt.lang("en",{ordinal:function(e){var t=e%10,n=1===y(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),lt?(module.exports=tt,et(!0)):"function"==typeof define&&define.amd?define("moment",function(t,n,s){return s.config().noGlobal!==!0&&et(s.config().noGlobal===e),tt}):et()}).call(this);