//html中如何使用？ id="hermes"
"use static";!function(){function e(e,t,n){void 0===n&&(n={}),this.options={write_speed:400,write_acceleration:1,write_random:.2,write_pause:600,clear_speed:100,clear_acceleration:1,clear_random:.2,clear_pause:500};var e="string"==typeof e||e instanceof String?document.getElementById(e):e;if(!("innerHTML"in e))throw"no element";for(var i in n)this.options[i]=n[i];n=this.options,t=[].concat(t);var r=e.innerHTML,a=r.length,c=-1,o=function(){a-->0?(e.className="active",e.innerHTML=r.slice(0,a),setTimeout(o,n.clear_speed+n.clear_speed*a/r.length*n.clear_acceleration+n.clear_speed*n.clear_random*Math.random())):(r=""+t[c=(c+1)%t.length],setTimeout(s,n.clear_pause))},s=function(){a++<r.length?(e.innerHTML=r.slice(0,a),setTimeout(s,n.write_speed+n.write_speed*-a/r.length*n.write_acceleration+n.write_speed*n.write_random*Math.random())):(e.className="",setTimeout(o,n.write_pause))};
s()}new e("hermes",[
"打字机",
"效果",
"的JS",
"以上参数",
"可以设置",
"打字/删字速度"])}();
