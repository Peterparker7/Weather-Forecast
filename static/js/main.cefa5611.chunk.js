(this["webpackJsonpweather-forecaster"]=this["webpackJsonpweather-forecaster"]||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){},22:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a,i,r,c,s=t(3),o=t.n(s),d=t(11),l=t.n(d),h=(t(20),t(5)),x=t(2),p=(t(21),t(22),t(1)),b=t(4),j=t.n(b),u=t(6),m=function(){var n=Object(u.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://www.metaweather.com/api/location/search/?query=")+e).then((function(n){return n.json()}));case 2:return t=n.sent,console.log(t),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=Object(u.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://www.metaweather.com/api/location/")+e).then((function(n){return n.json()}));case 2:return t=n.sent,console.log(t),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=t.p+"static/media/search.b1f781b9.svg",O=t(0),w=p.a.div(a||(a=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  margin: 20px 0;\n"]))),v=p.a.input(i||(i=Object(x.a)(["\n  width: 100%;\n  padding: 5px;\n  padding-left: 10px;\n  background: rgba(227, 227, 227, 0.6);\n  border: none;\n  border-radius: 4px;\n  margin-right: 10px;\n  height: 40px;\n  &:focus {\n    outline: none;\n  }\n"]))),y=p.a.button(r||(r=Object(x.a)(["\n  width: 40px;\n  height: 40px;\n  background-color: #e3e3e3;\n  border: none;\n  border-radius: 4px;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    background-color: #f3f3f3;\n    transform: translateY(-2px);\n  }\n"]))),k=p.a.img(c||(c=Object(x.a)(["\n  width: 20px;\n  height: 20px;\n"])));function z(n){var e=n.setWoeid,t=n.setWeatherData,a=n.setWeatherPanel,i=n.setCity,r=n.setIsSearching,c=Object(s.useState)(),o=Object(h.a)(c,2),d=o[0],l=o[1];function x(n){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(j.a.mark((function n(i){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m(i);case 2:if(0!==(r=n.sent).length){n.next=10;break}return e(0),t([]),a([]),n.abrupt("return");case 10:return e(r[0].woeid),n.abrupt("return",r);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(e);case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var S=function(){var n=Object(u.a)(j.a.mark((function n(){var e,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.next=3,x(d);case 3:if(!(e=n.sent)){n.next=11;break}return n.next=7,b(e[0].woeid);case 7:c=n.sent,t(c),a(c.consolidated_weather[0]),i(c.title);case 11:r(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.jsxs)(w,{children:[Object(O.jsx)(v,{onChange:function(n){!function(n){l(n)}(n.target.value)},placeholder:"Enter City"}),Object(O.jsx)(y,{onClick:function(){S()},children:Object(O.jsx)(k,{src:g})})]})}var S,C,_,P,W,F,I,N,T,E,B,D,A,L,M,J,R,q,G,H,Y,K,Q,U,V,X=t.p+"static/media/droplet-fill.b192ea97.svg",Z=t.p+"static/media/thermometer-half.636afbc7.svg",$=Object(p.b)(S||(S=Object(x.a)(["\n0%{\n    stroke-dasharray:  0 100;\n\n}\n100%{\n    stroke-dasharray:  humidity 100;\n}\n  "]))),nn=p.a.div(C||(C=Object(x.a)(["\n  background: rgba(227, 227, 227, 0.3);\n  display: flex;\n  border-radius: 8px;\n  padding: 30px;\n  height: 300px;\n"]))),en=p.a.div(_||(_=Object(x.a)(["\n  width: 50%;\n  text-align: left;\n"]))),tn=p.a.div(P||(P=Object(x.a)(["\n  font-size: 48px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 5px;\n  @media (max-width: 500px) {\n    font-size: 32px;\n  }\n"]))),an=p.a.div(W||(W=Object(x.a)(["\n  display: flex;\n  padding: 20px;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  @media (max-width: 767px) {\n    width: 90%;\n    padding: 20px 0px;\n    /* flex-direction: column-reverse; */\n  }\n"]))),rn=p.a.div(F||(F=Object(x.a)([""]))),cn=p.a.div(I||(I=Object(x.a)(["\n  font-size: 24px;\n  font-weight: 300;\n  color: white;\n  @media (max-width: 500px) {\n    font-size: 20px;\n  }\n"]))),sn=p.a.div(N||(N=Object(x.a)(["\n  width: 120px;\n  text-align: center;\n  font-size: 48px;\n  font-weight: 700;\n  color: white;\n  @media (max-width: 767px) {\n    width: 80px;\n    font-size: 32px;\n    font-weight: 700;\n  }\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]))),on=p.a.div(T||(T=Object(x.a)(["\n  display: none;\n  @media (max-width: 500px) {\n    display: block;\n    font-size: 32px;\n    font-weight: 700;\n    margin-bottom: 5px;\n  }\n"]))),dn=p.a.div(E||(E=Object(x.a)(["\n  font-size: 24px;\n  font-weight: 300;\n  color: white;\n  @media (max-width: 500px) {\n    font-size: 20px;\n  }\n"]))),ln=p.a.div(B||(B=Object(x.a)([""]))),hn=p.a.div(D||(D=Object(x.a)(["\n  width: 100px;\n  height: 100px;\n  margin-right: 20px;\n  @media (max-width: 650px) {\n    width: 80px;\n  }\n"]))),xn=p.a.img(A||(A=Object(x.a)(["\n  width: 100%;\n"]))),pn=p.a.div(L||(L=Object(x.a)(["\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),bn=p.a.div(M||(M=Object(x.a)(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 650px) {\n    flex-direction: column;\n  }\n"]))),jn=p.a.div(J||(J=Object(x.a)(["\n  padding-bottom: 70px;\n  @media (max-width: 650px) {\n    padding-bottom: 0px;\n  }\n"]))),un=p.a.div(R||(R=Object(x.a)(["\n  position: relative;\n  width: 150px;\n  height: 150px;\n  @media (max-width: 650px) {\n    top: -60px;\n  }\n"]))),mn=p.a.div(q||(q=Object(x.a)([""]))),fn=p.a.svg(G||(G=Object(x.a)(["\n  width: 120px;\n  height: 120px;\n  transform: rotate(-90deg);\n  border-radius: 50%;\n\n  circle.circle1 {\n    fill: rgba(227, 227, 227, 0.2);\n    stroke: #6495ed;\n    stroke-width: 32;\n\n    /*\n   * \u7b2c\u4e00\u500b\u6578\u5b57\uff1a\u865b\u7dda\u9577\u5ea6\uff1b\n   * \u7b2c\u4e8c\u500b\u6578\u5b57\uff1a\u865b\u7dda\u5f7c\u6b64\u9593\u7684\u9593\u8ddd\n   */\n    /* stroke-dasharray: 71 100; */\n    stroke-dasharray: ",";\n    animation: "," 2s linear 1;\n  }\n  @media (max-width: 650px) {\n    width: 80px;\n    height: 80px;\n  }\n"])),(function(n){return"".concat(n.humidity," 100")}),$),gn=p.a.svg(H||(H=Object(x.a)(["\n  position: relative;\n  border-bottom: 1px solid #000;\n  @media (max-width: 650px) {\n    top: -0px;\n  }\n"]))),On=p.a.rect(Y||(Y=Object(x.a)(["\n  height: ",";\n  fill: lightsalmon;\n"])),(function(n){return"".concat(2*n.maxTemp,"px")})),wn=p.a.rect(K||(K=Object(x.a)(["\n  height: ",";\n  fill: #80c7ff;\n"])),(function(n){return"".concat(2*n.minTemp,"px")})),vn=p.a.div(Q||(Q=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  @media (max-width: 650px) {\n    margin-top: 5px;\n  }\n"]))),yn=p.a.div(U||(U=Object(x.a)(["\n  width: 24px;\n  height: 24px;\n  margin: 0 10px;\n  img {\n    width: 100%;\n  }\n  @media (max-width: 650px) {\n    width: 20px;\n    height: 20px;\n  }\n"])));function kn(n){var e=n.weatherPanel,t=n.city;n.setIsSearching;if(!t||!e||0===e.length)return null;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:function(){var n=e.weather_state_abbr,a=e.max_temp.toFixed(0),i=e.min_temp.toFixed(0),r=e.the_temp.toFixed(0),c=e.humidity,s=e.applicable_date.replaceAll("-","/");return Object(O.jsxs)(nn,{children:[Object(O.jsxs)(en,{children:[Object(O.jsx)(tn,{children:t}),Object(O.jsxs)(on,{children:[r," \xb0C"]}),Object(O.jsx)(cn,{children:s}),Object(O.jsx)(dn,{children:e.weather_state_name}),Object(O.jsxs)(an,{children:[Object(O.jsx)(ln,{children:Object(O.jsx)(hn,{children:Object(O.jsx)(xn,{src:"https://www.metaweather.com/static/img/weather/png/".concat(n,".png"),alt:"icon"})})}),Object(O.jsx)(rn,{children:Object(O.jsxs)(sn,{children:[r," \xb0C"]})})]})]}),Object(O.jsxs)(bn,{children:[Object(O.jsx)(jn,{children:Object(O.jsxs)(un,{children:[Object(O.jsxs)(gn,{viewBox:"0 0 95 100",children:[Object(O.jsx)(On,{className:"max",x:"25",y:"".concat(100-2*a),width:"20",maxTemp:a}),Object(O.jsx)("text",{className:"value-label",x:"29",y:111-2*a,fill:"#fff",fontSize:"10",fontWeight:"bold",children:a}),Object(O.jsx)(wn,{className:"min",x:"45",y:100-2*i,width:"20",minTemp:i}),Object(O.jsx)("text",{className:"value-label",x:"49",y:111-2*i,fill:"#fff",fontSize:"10",fontWeight:"bold",children:i})]}),Object(O.jsxs)(vn,{style:{marginTop:"7px"},children:[Object(O.jsx)(yn,{children:Object(O.jsx)("img",{src:Z,alt:""})}),Object(O.jsxs)(pn,{children:[a," \xb0C / ",i," \xb0C"]})]})]})}),Object(O.jsxs)(mn,{children:[Object(O.jsx)(fn,{viewBox:"0 0 32 32",humidity:c,children:Object(O.jsx)("circle",{className:"circle1",r:"16",cx:"16",cy:"16"})}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(yn,{children:Object(O.jsx)("img",{src:X,alt:""})}),Object(O.jsxs)(pn,{children:[c,"%"]})]})]})]})]})}()})})}var zn=["title","titleId"];function Sn(){return(Sn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function Cn(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function _n(n,e){var t=n.title,a=n.titleId,i=Cn(n,zn);return s.createElement("svg",Sn({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"white",className:"bi bi-droplet-fill",viewBox:"0 0 16 16",ref:e,"aria-labelledby":a},i),t?s.createElement("title",{id:a},t):null,V||(V=s.createElement("path",{fillRule:"evenodd",d:"M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"})))}var Pn,Wn,Fn,In,Nn,Tn,En,Bn,Dn,An,Ln,Mn=s.forwardRef(_n),Jn=(t.p,Object(p.a)(Mn)(Pn||(Pn=Object(x.a)([""])))),Rn=p.a.div(Wn||(Wn=Object(x.a)(["\n  width: 150px;\n  height: 150px;\n  margin-top: 20px;\n\n  background: rgba(227, 227, 227, 0.3);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  transition: 0.2s;\n  color: white;\n\n  @media (max-width: 1200px) {\n    width: 100%;\n    height: 70px;\n    margin-top: 10px;\n    padding: 10px 30px;\n  }\n  &:hover {\n    background-color: rgba(227, 227, 227, 0.9);\n    transform: scale(1.03);\n    color: black;\n    "," {\n      fill: black;\n    }\n  }\n"])),Jn),qn=p.a.div(Fn||(Fn=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 1200px) {\n    justify-content: space-between;\n  }\n"]))),Gn=p.a.div(In||(In=Object(x.a)(["\n  text-align: left;\n  @media (max-width: 1200px) {\n    display: flex;\n    width: 50%;\n  }\n  @media (max-width: 500px) {\n    width: 70%;\n  }\n"]))),Hn=p.a.div(Nn||(Nn=Object(x.a)(["\n  font-size: 24px;\n  font-weight: lighter;\n  @media (max-width: 1200px) {\n  }\n"]))),Yn=p.a.div(Tn||(Tn=Object(x.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  @media (max-width: 1200px) {\n    width: 50%;\n    margin: 0 auto;\n    text-align: center;\n  }\n"]))),Kn=p.a.div(En||(En=Object(x.a)(["\n  width: 50px;\n  height: 50px;\n  @media (max-width: 1200px) {\n    margin-right: 20px;\n  }\n"]))),Qn=p.a.img(Bn||(Bn=Object(x.a)(["\n  width: 100%;\n"]))),Un=p.a.div(Dn||(Dn=Object(x.a)(["\n  display: none;\n  @media (max-width: 1200px) {\n    display: flex;\n    align-items: center;\n  }\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]))),Vn=p.a.div(An||(An=Object(x.a)(["\n  width: 24px;\n  height: 24px;\n  margin: 0 10px;\n  line-height: 24px;\n  img {\n    width: 100%;\n  }\n"]))),Xn=p.a.div(Ln||(Ln=Object(x.a)(["\n  font-size: 16px;\n  font-weight: bold;\n"])));function Zn(n){var e=n.item,t=n.setWeatherPanel,a=e.weather_state_abbr,i=e.the_temp.toFixed(0),r=e.applicable_date.replaceAll("-","/").slice(5,10),c=e.humidity;return Object(O.jsx)(Rn,{onClick:function(){t(e)},children:Object(O.jsxs)(qn,{children:[Object(O.jsxs)(Gn,{children:[Object(O.jsx)(Hn,{children:r}),Object(O.jsxs)(Yn,{children:[i," \xb0C"]})]}),Object(O.jsxs)(Un,{children:[Object(O.jsx)(Vn,{children:Object(O.jsx)(Jn,{})}),Object(O.jsxs)(Xn,{children:["Humidity\uff1a",c,"%"]})]}),Object(O.jsx)(Kn,{children:Object(O.jsx)(Qn,{src:"https://www.metaweather.com/static/img/weather/png/".concat(a,".png"),alt:"icon"})})]})})}var $n,ne,ee,te,ae,ie,re,ce,se=t.p+"static/media/weather.e5d08f7a.jpg",oe=t(15),de=t.n(oe),le=p.a.div($n||($n=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 1200px) {\n    flex-direction: column;\n  }\n"]))),he=p.a.div(ne||(ne=Object(x.a)(["\n  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),\n    url(",");\n  background-size: cover;\n  background-position: 50% 50%;\n  padding: 50px 20px;\n  position: relative;\n  min-height: calc(100vh);\n  color: white;\n"])),se),xe=p.a.div(ee||(ee=Object(x.a)(["\n  max-width: 1024px;\n  width: 90%;\n  margin: 0 auto;\n"]))),pe=p.a.div(te||(te=Object(x.a)(["\n  font-size: 36px;\n  font-weight: bold;\n  color: white;\n  text-align: left;\n"]))),be=p.a.p(ae||(ae=Object(x.a)(["\n  text-align: left;\n  color: white;\n  margin: 0;\n"]))),je=p.a.div(ie||(ie=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(227, 227, 227, 0.5);\n  z-index: 3;\n"]))),ue=Object(p.a)(de.a)(re||(re=Object(x.a)(["\n  position: absolute;\n\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),me=p.a.div(ce||(ce=Object(x.a)(["\n  text-align: left;\n"])));var fe=function(){var n=Object(s.useState)(),e=Object(h.a)(n,2),t=e[0],a=e[1],i=Object(s.useState)([]),r=Object(h.a)(i,2),c=r[0],o=r[1],d=Object(s.useState)([]),l=Object(h.a)(d,2),x=l[0],p=l[1],b=Object(s.useState)(""),j=Object(h.a)(b,2),u=j[0],m=j[1],f=Object(s.useState)(!1),g=Object(h.a)(f,2),w=g[0],v=g[1];return console.log(c),console.log(x),c?(console.log(w),Object(O.jsxs)("div",{className:"App",children:[w?Object(O.jsx)(je,{children:Object(O.jsx)(ue,{type:"spin"})}):"",Object(O.jsx)(he,{children:Object(O.jsxs)(xe,{children:[Object(O.jsx)(pe,{children:"Weather Forecaster"}),Object(O.jsx)(be,{children:" Get the weather forecast for city worldwide."}),Object(O.jsx)(z,{setWoeid:a,setWeatherData:o,setWeatherPanel:p,setCity:m,setIsSearching:v}),0===t?Object(O.jsxs)(me,{children:[Object(O.jsx)("h1",{children:"Oops, city not found"}),Object(O.jsx)("h3",{children:"please make sure the city spelling is correct and try again."})]}):Object(O.jsx)(kn,{setIsSearching:v,weatherData:c.consolidated_weather,weatherPanel:x,city:u}),Object(O.jsx)(le,{children:0!==c.length&&c.consolidated_weather.map((function(n,e){return Object(O.jsx)(Zn,{item:n,index:e,setWeatherPanel:p})}))})]})})]})):"isLoading"},ge=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};l.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(fe,{})}),document.getElementById("root")),ge()}},[[29,1,2]]]);
//# sourceMappingURL=main.cefa5611.chunk.js.map