(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{77:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(4),l=n.n(i);t.a=function(e){return o.a.forwardRef(function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:l()(t.className,e)}))})}},78:function(e,t,n){"use strict";var a,r=n(1),o=n(2),i=n(3),l=n(4),c=n.n(l),u=n(0),s=n.n(u),p=n(14),f=n.n(p),b=n(24),m=n.n(b),d=n(25),y=((a={})[p.ENTERING]="show",a[p.ENTERED]="show",a),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){Object(d.a)(e),t.props.onEnter&&t.props.onEnter(e)},t}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,a=Object(o.a)(e,["className","children"]);return s.a.createElement(f.a,Object(r.a)({addEndListener:m.a},a,{onEnter:this.handleEnter}),function(e,a){return s.a.cloneElement(n,Object(r.a)({},a,{className:c()("fade",t,n.props.className,y[e])}))})},t}(s.a.Component);v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},t.a=v},80:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),i=n.n(o),l=n(0),c=n.n(l),u=n(5),s=["xl","lg","md","sm","xs"],p=c.a.forwardRef(function(e,t){var n=e.bsPrefix,o=e.className,l=e.as,p=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(u.b)(n,"col"),b=[],m=[];return s.forEach(function(e){var t,n,a,r=p[e];if(delete p[e],null!=r&&"object"==typeof r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+f+i:""+f+i+"-"+t),null!=a&&m.push("order"+i+"-"+a),null!=n&&m.push("offset"+i+"-"+n)}),b.length||b.push(f),c.a.createElement(l,Object(a.a)({},p,{ref:t,className:i.a.apply(void 0,[o].concat(b,m))}))});p.displayName="Col",p.defaultProps={as:"div"},t.a=p},85:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),i=n(4),l=n.n(i),c=n(0),u=n.n(c),s=n(5),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.noGutters,o=e.as,i=e.className,c=Object(r.a)(e,["bsPrefix","noGutters","as","className"]);return u.a.createElement(o,Object(a.a)({},c,{className:l()(i,t,n&&"no-gutters")}))},t}(u.a.Component);p.defaultProps={as:"div",noGutters:!1},t.a=Object(s.a)(p,"row")},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),i=n(3),l=n(33),c=n.n(l),u=n(26),s=n(8),p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getControlledId=function(e){return t.getKey(e,"tabpane")},t.getControllerId=function(e){return t.getKey(e,"tab")},t.state={tabContext:{onSelect:t.props.onSelect,activeKey:t.props.activeKey,transition:t.props.transition,mountOnEnter:t.props.mountOnEnter,unmountOnExit:t.props.unmountOnExit,getControlledId:t.getControlledId,getControllerId:t.getControllerId}},t}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.activeKey,a=e.mountOnEnter,r=e.unmountOnExit,i=e.transition;return{tabContext:Object(o.a)({},t.tabContext,{activeKey:n,mountOnEnter:a,unmountOnExit:r,transition:i})}};var n=t.prototype;return n.getKey=function(e,t){var n=this.props,a=n.generateChildId,r=n.id;return a?a(e,t):r?r+"-"+t+"-"+e:null},n.render=function(){var e=this.props,t=e.children,n=e.onSelect;return r.a.createElement(u.a.Provider,{value:this.state.tabContext},r.a.createElement(s.a.Provider,{value:n},t))},t}(r.a.Component),f=c()(p,{activeKey:"onSelect"}),b=n(85),m=n(80),d=n(76),y=n(2),v=n(4),E=n.n(v),O=n(5),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.as,a=e.className,i=Object(y.a)(e,["bsPrefix","as","className"]);return r.a.createElement(n,Object(o.a)({},i,{className:E()(a,t)}))},t}(r.a.Component);h.defaultProps={as:"div"};var C=Object(O.a)(h,"tab-content"),x=n(78);var j=r.a.forwardRef(function(e,t){var n=function(e){var t=Object(a.useContext)(u.a);if(!t)return e;var n=t.activeKey,r=t.getControlledId,i=t.getControllerId,l=Object(y.a)(t,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==l.transition,p=Object(s.b)(e.eventKey);return Object(o.a)({},e,{active:null==e.active&&null!=p?Object(s.b)(n)===p:e.active,id:r(e.eventKey),"aria-labelledby":i(e.eventKey),transition:c&&(e.transition||l.transition||x.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),i=n.bsPrefix,l=n.className,c=n.active,p=n.onEnter,f=n.onEntering,b=n.onEntered,m=n.onExit,d=n.onExiting,v=n.onExited,h=n.mountOnEnter,C=n.unmountOnExit,j=n.transition,g=n.as,P=void 0===g?"div":g,w=(n.eventKey,Object(y.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),N=Object(O.b)(i,"tab-pane");if(!c&&C)return null;var S=r.a.createElement(P,Object(o.a)({},w,{ref:t,role:"tabpanel","aria-hidden":!c,className:E()(l,N,{active:c})}));return j&&(S=r.a.createElement(j,{in:c,onEnter:p,onEntering:f,onEntered:b,onExit:m,onExiting:d,onExited:v,mountOnEnter:h,unmountOnExit:h},S)),r.a.createElement(u.a.Provider,{value:null},r.a.createElement(s.a.Provider,{value:null},S))});j.displayName="TabPane";var g,P=j;function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N={animationEnabled:!0,theme:"light2",title:{text:"Costs"},data:[(g={type:"pie",indexLabel:"{label}: {y} (#percent)%",startAngle:45,showInLegend:"true",legendText:"{label}",indexLabelFontSize:16},w(g,"indexLabel","{label} ${y} (#percent)%"),w(g,"dataPoints",[{y:0,label:"Personnel"},{y:0,label:"Equipment"},{y:0,label:"Ammunition"},{y:0,label:"Facilities"}]),g)],colorSet:"customColorSet"},S=n(90);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,k(t).call(this,e))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(S.a.Title,null,"$",this.props.totalCost)))}}])&&I(n.prototype,o),i&&I(n,i),t}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return H});var B=r.a.lazy(function(){return n.e(5).then(n.bind(null,86))}),$=r.a.lazy(function(){return n.e(4).then(n.bind(null,91))}),D=r.a.lazy(function(){return n.e(2).then(n.bind(null,87))}),H=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=A(t).call(this,e),(n=!r||"object"!==T(r)&&"function"!=typeof r?z(a):r).updatePersonnelCost=function(e){n.updateCost(e.toFixed(2),n.state.equipmentCost,n.state.ammunitionCost,n.state.facilitiesCost)},n.updateEquipmentCost=function(e){n.updateCost(n.state.personnelCost,e.toFixed(2),n.state.ammunitionCost,n.state.facilitiesCost)},n.state={personnelCost:0,equipmentCost:0,ammunitionCost:0,facilitiesCost:0,totalCost:0,options:N},n.updatePersonnelCost=n.updatePersonnelCost.bind(z(n)),n.updateEquipmentCost=n.updateEquipmentCost.bind(z(n)),n.updateCost=n.updateCost.bind(z(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateCost",value:function(e,t,n,a){var r,o={animationEnabled:!0,theme:"light2",title:{text:"Costs"},data:[(r={type:"pie",indexLabel:"{label}: {y} (#percent)%",startAngle:45,showInLegend:"true",legendText:"{label}",indexLabelFontSize:16},F(r,"indexLabel","{label} ${y} (#percent)%"),F(r,"dataPoints",[{y:e,label:"Personnel"},{y:t,label:"Equipment"},{y:n,label:"Ammunition"},{y:a,label:"Facilities"}]),r)],colorSet:"customColorSet"},i=e+t+n+a;i=parseFloat(i).toFixed(2),this.setState({personnelCost:e,equipmentCost:t,ammunitionCost:n,facilitiesCost:a,totalCost:i,options:o})}},{key:"render",value:function(){var e=this.state.totalCost;return r.a.createElement("section",null,r.a.createElement(q,{totalCost:e}),r.a.createElement(f,{id:"left-tabs-example",defaultActiveKey:"overview"},r.a.createElement(b.a,null,r.a.createElement(m.a,{sm:2},r.a.createElement(d.a,{variant:"pills",className:"flex-column"},r.a.createElement(d.a.Link,{eventKey:"overview"},"Overview"),r.a.createElement(d.a.Link,{eventKey:"personnel"},"Personnel"),r.a.createElement(d.a.Link,{eventKey:"equipment"},"Equipment"),r.a.createElement(d.a.Link,{disabled:!0},"More..."))),r.a.createElement(m.a,{sm:10},r.a.createElement(C,null,r.a.createElement(P,{eventKey:"overview"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement($,{options:this.state.options}))),r.a.createElement(P,{eventKey:"personnel"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(D,{updateCost:this.updatePersonnelCost}))),r.a.createElement(P,{eventKey:"equipment"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(B,{updateCost:this.updateEquipmentCost}))))))))}}])&&R(n.prototype,o),i&&R(n,i),t}()},90:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(4),i=n.n(o),l=n(0),c=n.n(l),u=n(5),s=n(23),p=n(77),f=n(39),b=c.a.forwardRef(function(e,t){var n=e.bsPrefix,o=e.className,l=e.variant,s=e.as,p=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(u.b)(n,"card-img");return c.a.createElement(s,Object(a.a)({ref:t,className:i()(l?f+"-"+l:f,o)},p))});b.displayName="CardImg",b.defaultProps={as:"img",variant:null};var m=b,d=Object(p.a)("h5"),y=Object(p.a)("h6"),v=Object(s.a)("card-body"),E=c.a.forwardRef(function(e,t){var n=e.bsPrefix,o=e.className,s=e.bg,p=e.text,b=e.border,m=e.body,d=e.children,y=e.as,E=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(u.b)(n,"card"),h=Object(l.useMemo)(function(){return{cardHeaderBsPrefix:O+"-header"}},[O]);return c.a.createElement(f.a.Provider,{value:h},c.a.createElement(y,Object(a.a)({ref:t},E,{className:i()(o,O,s&&"bg-"+s,p&&"text-"+p,b&&"border-"+b)}),m?c.a.createElement(v,null,d):d))});E.displayName="Card",E.defaultProps={as:"div",body:!1},E.Img=m,E.Title=Object(s.a)("card-title",{Component:d}),E.Subtitle=Object(s.a)("card-subtitle",{Component:y}),E.Body=v,E.Link=Object(s.a)("card-link",{Component:"a"}),E.Text=Object(s.a)("card-text",{Component:"p"}),E.Header=Object(s.a)("card-header"),E.Footer=Object(s.a)("card-footer"),E.ImgOverlay=Object(s.a)("card-img-overlay");t.a=E}}]);