(self.webpackChunkairkit_ui=self.webpackChunkairkit_ui||[]).push([[433],{60145:function(c,i,t){c.exports=t(0)},0:function(c,i,t){"use strict";t.d(i,{ArrowTextSlider:function(){return S},Carousel:function(){return O},Divider:function(){return I},Foo:function(){return g},Progress:function(){return L},Switch:function(){return W}});var e=t(5574),a=t.n(e),r=t(67294),n=t(85893),u=function(s){var o=s.texts,f=(0,r.useState)(0),_=a()(f,2),h=_[0],d=_[1],D=function(){d(function(l){return l===0?o.length-1:l-1})},v=function(){d(function(l){return l===o.length-1?0:l+1})};return(0,n.jsxs)("div",{className:"airkit-arrow-text-slider-container",children:[(0,n.jsx)("div",{className:"airkit-arrow-text-slider-arrow-button",onClick:D,children:"\u2190"}),(0,n.jsx)("div",{className:"airkit-arrow-text-slider-text",children:o[h]}),(0,n.jsx)("div",{className:"airkit-arrow-text-slider-arrow-button",onClick:v,children:"\u2192"})]})},A=u,S=A,M=function(s){var o=s.children,f=s.style,_=(0,r.useState)(0),h=a()(_,2),d=h[0],D=h[1],v=r.Children.count(o),x=function(){D(function(E){return E===0?v-1:E-1})},l=function(){D(function(E){return(E+1)%v})},B={"--current-index":d.toString()};return(0,n.jsxs)("div",{className:"carousel",style:f,children:[(0,n.jsx)("button",{type:"button",className:"prev-button",onClick:x,children:"Prev"}),(0,n.jsx)("div",{className:"carousel-item",style:B,children:o}),(0,n.jsx)("button",{type:"button",className:"next-button",onClick:l,children:"Next"}),(0,n.jsx)("div",{className:"carousel-dots",children:Array(v).fill(1).map(function(m,E){return(0,n.jsx)("span",{className:"dot ".concat(E===d?"active":""),onClick:function(){D(E)}},E)})})]})},P=M,O=P,p=function(s){var o=s.direction,f=o===void 0?"horizontal":o,_=s.borderStyle,h=_===void 0?"solid":_,d=s.contentPosition,D=d===void 0?"center":d,v=s.children,x={"--airkit-border-style":h},l={"--airkit-border-style":h};return(0,n.jsx)("div",{className:"airkit-divider-".concat(f),role:"separator",style:x,children:v&&f==="horizontal"&&(0,n.jsx)("div",{className:"airkit-divider-text is-".concat(D),style:l,children:v})})},C=p,I=C,T=function(s){return(0,n.jsx)("h4",{children:s.title})},F=T,g=F,y=function(s){return(0,n.jsx)("div",{className:"airkit-ui-progress-bar",children:(0,n.jsx)("div",{className:"airkit-ui-progress",style:{width:"".concat(s.width)+"px"}})})},K=y,L=K,R=function(s){var o=s.onColor,f=o===void 0?"#409eff":o,_=s.offColor,h=_===void 0?"#dcdfe6":_,d=s.action,D=d===void 0?!0:d,v=(0,r.useState)(D),x=a()(v,2),l=x[0],B=x[1],m={"--switch-off":h,"--switch-on":f},E=function(){B(function(b){return!b})};return(0,n.jsx)("div",{className:"airkit-switch-container is-".concat(l?"on":"off"),style:m,onClick:E,children:(0,n.jsx)("div",{className:"airkit-switch-button is-".concat(l?"action":"not-action")})})},U=R,W=U},88901:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsx)(e.ArrowTextSlider,{texts:["hello","world","!"]})};i.default=n},93745:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsxs)(e.Carousel,{children:[(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 1"}),(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 2"}),(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 3"}),(0,r.jsx)("img",{src:"https://telegra.ph/file/ba9d8e80a0275d0738bc3.jpg",alt:"Image 4"}),(0,r.jsx)("img",{src:"https://missuo.ru/file/5df40ffdcb716609228b5.jpg",alt:"Image 5"})]})};i.default=n},37017:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4"}),(0,r.jsx)(e.Divider,{}),(0,r.jsx)("span",{children:"\u957F\u6CB3\u843D\u65E5\u5706"})]})};i.default=n},67386:function(c,i,t){"use strict";t.r(i);var e=t(5574),a=t.n(e),r=t(60145),n=t(67294),u=t(85893),A=function(){var M=(0,n.useState)("center"),P=a()(M,2),O=P[0],p=P[1],C=function(T){var F=T.currentTarget.textContent;p(F)};return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",onClick:C,children:"left"}),(0,u.jsx)("button",{type:"button",onClick:C,children:"center"}),(0,u.jsx)("button",{type:"button",onClick:C,children:"right"})]}),(0,u.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4"}),(0,u.jsx)(r.Divider,{contentPosition:O,children:"\u4F7F\u81F3\u585E\u4E0A"}),(0,u.jsx)("span",{children:"\u957F\u6CB3\u843D\u65E5\u5706"})]})};i.default=A},80487:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(e.Divider,{borderStyle:"dashed"}),(0,r.jsx)("span",{children:"\u5355\u8F66\u6B32\u95EE\u8FB9\uFF0C\u5C5E\u56FD\u8FC7\u5C45\u5EF6\u3002"}),(0,r.jsx)(e.Divider,{borderStyle:"dotted"}),(0,r.jsx)("span",{children:"\u5F81\u84EC\u51FA\u6C49\u585E\uFF0C\u5F52\u96C1\u5165\u5434\u5929\u3002"}),(0,r.jsx)(e.Divider,{borderStyle:"double"}),(0,r.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4\uFF0C\u957F\u6CB3\u843D\u65E5\u5706\u3002"}),(0,r.jsx)(e.Divider,{borderStyle:"groove"}),(0,r.jsx)("span",{children:"\u8427\u5173\u9022\u5019\u9A91\uFF0C\u90FD\u62A4\u5728\u71D5\u7136\u3002"}),(0,r.jsx)(e.Divider,{borderStyle:"ridge"})]})};i.default=n},63299:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"\u5927\u6F20\u5B64\u70DF\u76F4"}),(0,r.jsx)(e.Divider,{direction:"vertical"}),(0,r.jsx)("span",{children:"\u957F\u6CB3\u843D\u65E5\u5706"})]})};i.default=n},68259:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsx)(e.Foo,{title:"DEMO"})};i.default=n},47208:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsx)(e.Progress,{width:70})};i.default=n},37457:function(c,i,t){"use strict";t.r(i);var e=t(60145),a=t(67294),r=t(85893),n=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(e.Switch,{})})};i.default=n}}]);