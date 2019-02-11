(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);n(154);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),s=n(147),l=(n(74),n(163),n(4)),u=n.n(l),c={shapes:u.a.shape({points:u.a.arrayOf(u.a.shape({x:u.a.number.isRequired,y:u.a.number.isRequired,size:u.a.number}))}).isRequired,width:u.a.number.isRequired,height:u.a.number.isRequired,cellSize:u.a.number.isRequired},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateCanvas=function(){var e=n.canvas.current.getContext("2d",{alpha:!1});e.fillStyle="#eea",e.fillRect(0,0,n.props.width,n.props.height),e.fillStyle="#333",n.props.shapes.points.forEach(function(t){e.beginPath(),e.arc(t.x+n.props.width/2,t.y+n.props.height/2,n.props.cellSize,0,2*Math.PI),e.fill()})},n.canvas=o.a.createRef(),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateCanvas()},n.componentDidUpdate=function(){this.updateCanvas()},n.render=function(){return o.a.createElement("div",null,o.a.createElement("canvas",{width:this.props.width,height:this.props.height,ref:this.canvas}))},t}(r.Component);d.propTypes=c;var p=d,h=(n(164),{width:u.a.number.isRequired,height:u.a.number.isRequired,size:u.a.number.isRequired,denom:u.a.number.isRequired,n:u.a.number.isRequired,onSizeChange:u.a.func.isRequired,onDenomChange:u.a.func.isRequired,onNChange:u.a.func.isRequired,onFillClick:u.a.func.isRequired,onClearClick:u.a.func.isRequired,onRunClick:u.a.func.isRequired,onStopClick:u.a.func.isRequired}),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleDenomChange=function(e){t.props.onDenomChange(parseFloat(e.target.value))},t.handleSizeChange=function(e){t.props.onSizeChange(e.target.value)},t.handleNChange=function(e){t.props.onNChange(e.target.value)},t}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"controlsWrapper"},o.a.createElement("label",null,"Denom",o.a.createElement("input",{type:"number",value:this.props.denom,onChange:this.handleDenomChange,step:"0.0001",min:0,max:1})),o.a.createElement("label",null,"Point size",o.a.createElement("input",{type:"number",defaultValue:this.props.size,onChange:this.handleSizeChange,min:1,max:20})),o.a.createElement("label",null,"N seeds:",o.a.createElement("input",{type:"number",defaultValue:this.props.n,onChange:this.handleNChange,min:0,max:1e3})),o.a.createElement("button",{onClick:this.props.onFillClick},"Fill"),o.a.createElement("button",{onClick:this.props.onClearClick},"Clear"),o.a.createElement("button",{onClick:this.props.onRunClick},"Run"),o.a.createElement("button",{onClick:this.props.onStopClick},"Stop"))},t}(r.Component);f.propTypes=h;var m=f,v=function(e,t){for(var n=e.length,a=0,i=0;i<e.length;i++)a-=2*Math.PI*t;var r=n*Math.cos(a),o=n*Math.sin(a);return[].concat(e,[{x:r,y:o}])},g=function(e,t){for(var n=[],a=0;a<t;a++)n=v(n,e);return n},C=function(e){function t(t){var n;return(n=e.call(this,t)||this).fill=function(e,t){void 0===e&&(e=n.state.denom),void 0===t&&(t=n.state.n),n.setState({seeds:g(e,t),denom:e,n:t})},n.handleFillClick=function(){n.fill()},n.handleDenomChange=function(e){n.fill(e)},n.handleSizeChange=function(e){n.setState({size:e})},n.handleNChange=function(e){n.fill(n.state.denom,e)},n.handleRunClick=function(){var e=0;n.interval=setInterval(function(){n.fill(e),(e+=1e-4)>=1&&n.handleStopClick()},10)},n.handleStopClick=function(){clearInterval(n.interval)},n.handleClearClick=function(){n.setState({seeds:[],denom:0})},n.check=o.a.createRef(),n.denom=o.a.createRef(),n.state={seeds:[],width:800,height:600,size:4,denom:0,n:350},n}return i()(t,e),t.prototype.render=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(m,{width:this.state.width,height:this.state.height,size:this.state.size,denom:this.state.denom,n:this.state.n,onSizeChange:this.handleSizeChange,onDenomChange:this.handleDenomChange,onNChange:this.handleNChange,onFillClick:this.handleFillClick,onClearClick:this.handleClearClick,onRunClick:this.handleRunClick,onStopClick:this.handleStopClick}),o.a.createElement(p,{width:this.state.width,height:this.state.height,cellSize:this.state.size,shapes:{points:this.state.seeds}})))},t}(o.a.Component);t.default=C},141:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=h,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=a(n(148)),r=a(n(149)),o=a(n(7)),s=a(n(51)),l=a(n(52)),u=a(n(4)),c=a(n(0)),d=n(22),p=n(142);function h(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(i.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,m=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=h(n);return c.default.createElement(d.Link,(0,r.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:f})),!0}},m))},t}(c.default.Component);m.propTypes=(0,r.default)({},f,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(m,(0,r.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(h(e),t)};t.navigate=g;var C=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(h(e))};t.push=C;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(h(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),C(e)}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(141),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(143),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=i.a.createContext({}),h=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},145:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(53),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},146:function(e,t,n){},147:function(e,t,n){"use strict";var a=n(144),i=n(0),r=n.n(i),o=n(4),s=n.n(o),l=n(142),u=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};n(146);var c=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))},data:a})};c.propTypes={children:s.a.node.isRequired};t.a=c},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}},149:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},154:function(e,t,n){var a=n(11);a(a.P,"Array",{fill:n(162)}),n(34)("fill")},162:function(e,t,n){"use strict";var a=n(24),i=n(73),r=n(14);e.exports=function(e){for(var t=a(this),n=r(t.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,u=void 0===l?n:i(l,n);u>s;)t[s++]=e;return t}},163:function(e,t,n){},164:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-e519876ac267b883d58f.js.map