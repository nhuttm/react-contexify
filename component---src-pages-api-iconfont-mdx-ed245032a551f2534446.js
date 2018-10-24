(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return p});var r=n(171),a=n.n(r),o=n(0),i=n.n(o),c=n(168),l=n(167),u=n(185),s=n(186);t.default=function(e){var t=e.components,n=a()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"IconFont"),i.a.createElement(u.a,{of:s.b}),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},'import { IconFont, Menu, Item } from \'react-contexify\';\n\n//example with Font Awesome \n<Menu id="foo">\n  <Item>\n      <IconFont className="fa fa-trash"/>Delete\n  </Item>\n</Menu>\n\n//example with material icons\n<Menu id="foo">\n  <Item>\n      <IconFont className="material-icons">remove_circle</IconFont>Delete\n  <Item>\n</Menu>  \n')))};var p={}},163:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});n(179),n(76),n(51),n(180),n(50);var r=n(175),a=n(161),o={giant:1170,desktop:992,tablet:768,phone:376},i=Object.keys(o).reduce(function(e,t){var n=o[t]/16;return e[t]=function(){return Object(a.b)(["@media (min-width:","em){",";}"],n,a.b.apply(void 0,arguments))},e},{}),c={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(r.h)),animations:["none"].concat(Object.values(r.f))}},165:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(162),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(166),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var p=n(34);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),f=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,n){var r;e.exports=(r=n(170))&&r.default||r},167:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(164),i=n.n(o),c=n(0),l=n.n(c),u=n(176),s=n(161),p=n(178),d=n.n(p),f=n(163),m=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"},{label:"Migrate from v3"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];n(26),n(181),n(49);function b(){var e=i()(["\n      display: none;\n  "]);return b=function(){return e},e}var h=s.c.div.withConfig({displayName:"Fab__Container",componentId:"sc-1me259o-0"})(["width:60px;height:60px;background:#9b4ccb;border-radius:100%;position:fixed;bottom:10px;right:15px;z-index:5;",";"],f.a.tablet(b())),g=s.c.button.withConfig({displayName:"Fab__Button",componentId:"sc-1me259o-1"})(["padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:4px 0 0 0;overflow:visible;&:focus-within{background-color:none;}&:hover{opacity:0.7;}"]),v=s.c.div.withConfig({displayName:"Fab__OutterButton",componentId:"sc-1me259o-2"})(["width:30px;height:24px;display:inline-block;position:relative;"]),y=Object(s.b)(["width:30px;height:4px;background-color:#e1e1e1;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease;"]),x=s.c.div.withConfig({displayName:"Fab__InnerButton",componentId:"sc-1me259o-3"})(["display:block;top:50%;margin-top:-2px;transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);"," "," &::before,&::after{",' content:"";display:block;}&::before{top:-10px;transition:top 0.1s 0.25s ease-in,opacity 0.1s ease-in;',";}&::after{bottom:-10px;transition:bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);",";}"],function(e){return e.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},y,y,function(e){return e.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(e){return e.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),w=function(e){var t=e.toggled,n=e.onToggle;return l.a.createElement(h,null,l.a.createElement(g,{onClick:n},l.a.createElement(v,null,l.a.createElement(x,{toggled:t}))))},E=n(165),k=Object(s.c)(E.Link).attrs({activeClassName:"nav-item-active"}).withConfig({displayName:"NavLink__StyledLink",componentId:"g709m1-0"})(["display:inline-block;color:#fff;transition:transform 0.3s;&.","{color:#bd50ff;}&:hover{color:#bd50ff;transform:scale(1.155);}"],"nav-item-active"),O=function(e){var t=e.to,n=e.children;return l.a.createElement(k,{to:t},n)},_=s.c.div.withConfig({displayName:"Logo",componentId:"sc-1k1pl5n-0"})(["padding:15px 0;margin:0;display:block;position:relative;z-index:4;"]),C=Object(s.c)(E.Link).withConfig({displayName:"Logo__A",componentId:"sc-1k1pl5n-1"})(["cursor:pointer;text-transform:uppercase;padding:5px 0;display:inline-block;font-size:18px;color:#fff;white-space:nowrap;font-weight:400;line-height:30px;overflow:hidden;text-align:center;display:block;&:hover{color:#fff;}&::after{content:'';position:absolute;bottom:0;right:15px;height:1px;width:calc(100% - 30px);background-color:hsla(0,0%,71%,0.3);}"]),j=function(e){var t=e.children;return l.a.createElement(_,null,l.a.createElement(C,{to:"/",activeStyle:{color:"#fff"}},t))};function P(){var e=i()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return P=function(){return e},e}var I=s.c.aside.withConfig({displayName:"Sidenav__Nav",componentId:"sc-1psbioe-0"})(["width:100%;opacity:",";pointer-events:",";position:fixed;top:0;left:0;height:100%;background:#212120;box-shadow:0 16px 38px -12px rgba(0,0,0,0.56),0 4px 25px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2);transition:opacity 0.4s;z-index:4;",";"],function(e){return e.isOpen?1:0},function(e){return e.isOpen?"initial":"none"},f.a.tablet(P(),function(e){return e.sidenavWidth})),q=s.c.div.withConfig({displayName:"Sidenav__Wrapper",componentId:"sc-1psbioe-1"})(["position:relative;height:calc(100vh - 50px);overflow:auto;width:100%;z-index:4;padding:12px;font-size:1em;& ul{margin-left:12px;list-style:none;}& p{margin:0;color:#fff;font-weight:bold;}"]),M=function(e){var t=e.isSidebarOpen,n=e.toggleSidebar,r=e.navMenu,a=e.sidenavWidth;return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{isOpen:t,sidenavWidth:a},l.a.createElement(j,null,"React-Contexify"),l.a.createElement(q,null,r.map(function(e){var t=e.prefix||"";return l.a.createElement(c.Fragment,{key:e.title},l.a.createElement("p",null,e.title),l.a.createElement("ul",null,e.menu.map(function(e){var n=e.link||e.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return l.a.createElement("li",{key:n},l.a.createElement(O,{to:t+n},e.label))})))}))),l.a.createElement(w,{onToggle:n,toggled:t}))};n(182),n(183),n(184);function N(){var e=i()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return N=function(){return e},e}function S(){var e=i()(["\nh1{\n  color: #b561b7;\n  font-weight: bold;\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return S=function(){return e},e}var T=Object(s.a)(S()),R=s.c.main.withConfig({displayName:"Layout__Main",componentId:"sc-138vppf-0"})(["",";"],function(e){return e.isSidebarOpen&&Object(s.b)(["",";"],f.a.tablet(N(),function(e){return e.sidenavWidth},function(e){return e.sidenavWidth}))}),D=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isSidebarOpen:!0},t.toggleSidebar=function(){t.setState({isSidebarOpen:!t.state.isSidebarOpen})},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){d.a.highlightAll()},n.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{isSidebarOpen:this.state.isSidebarOpen,sidenavWidth:"260px"},this.props.children),l.a.createElement(M,{sidenavWidth:"260px",navMenu:m,isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}),l.a.createElement(T,null),l.a.createElement(u.ToastContainer,null))},t}(c.Component);t.a=D},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(173);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(169);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(0)),o=c(n(53)),i=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),u=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(s,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var p=function(e){var t=e.components,n=e.children;return a.default.createElement(u,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},170:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),c=n(4),l=n.n(c),u=n(52),s=n(2),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=p},172:function(e,t,n){"use strict";var r=n(161);t.a=r.c.span.attrs({role:"img","aria-label":"action"}).withConfig({displayName:"Emoji",componentId:"sc-1poq02a-0"})(["margin-right:8px;"])},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=u(o),c=u(n(174)),l=n(169);function u(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,u=e.components,p=void 0===u?{}:u,d=e.Layout,f=e.layoutProps,m=p[n+"."+t]||p[t]||s[t]||t;return d?((0,c.default)(this,d),i.default.createElement(d,r({components:p},f),i.default.createElement(m,o,l))):i.default.createElement(m,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(p)},174:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,n,p){if("string"!=typeof n){if(s){var d=u(n);d&&d!==s&&e(t,d,p)}var f=i(n);c&&(f=f.concat(c(n)));for(var m=0;m<f.length;++m){var b=f[m];if(!(r[b]||a[b]||p&&p[b])){var h=l(n,b);try{o(t,b,h)}catch(e){}}}return t}return t}},177:function(e,t,n){var r=n(27).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(17)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},185:function(e,t,n){"use strict";n(177),n(49);var r=n(0),a=n.n(r),o=n(161),i=n(172),c=o.c.table.withConfig({displayName:"PropTable__Table",componentId:"sc-1gmkcgj-0"})(["border-collapse:collapse;width:100%;& td,& th{border:1px solid #ddd;padding:8px;}& td:first-child,th:first-child{padding-left:8px;}& tr:nth-child(even){background-color:#f2f2f2;}& th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#b561b7;color:white;}"]),l=o.c.td.withConfig({displayName:"PropTable__TdCenter",componentId:"sc-1gmkcgj-1"})(["text-align:center;"]),u=Object(o.c)(i.a).withConfig({displayName:"PropTable__Required",componentId:"sc-1gmkcgj-2"})(["font-size:",";color:transparent;text-shadow:0 0 0 ",";"],function(e){return e.fontSize},function(e){return e.color});t.a=function(e){var t=e.of;return a.a.createElement(c,null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Description")),t.map(function(e){return a.a.createElement("tr",{key:e.name},a.a.createElement("td",null,e.name),a.a.createElement(l,null,e.required?a.a.createElement(u,{color:"green"},"✔️"):a.a.createElement(u,{color:"red",fontSize:"12px"},"❌")),a.a.createElement("td",null,e.default||""),a.a.createElement("td",null,e.type),a.a.createElement("td",null,e.description))})))}},186:function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return p}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return f}),n.d(t,"a",function(){return m});var r=n(10),a=n.n(r),o={name:"id",required:!0,type:"string | number",description:"Unique id to identify the menu. Use to Trigger the corresponding menu"},i={name:"children",required:!0,type:"ReactNode",description:"Any valid node which can be rendered"},c=[{name:"className",required:!1,type:"string",description:"Append given css classes"},{name:"style",required:!1,type:"object",description:"Append given inline style"}],l={name:"disabled",required:!1,default:" false",type:"boolean | (params: { event, props }) => boolean",description:"Disable or not the `Item`. If a function is used, a boolean must be returned"},u=[a()({},o),a()({},i),{name:"theme",required:!1,type:"string",description:"Theme is appended to `react-contexify__theme--${given theme}`. Built-in theme are `light` and `dark`"},{name:"animation",required:!1,type:"string",description:"Animation is appended to `.react-contexify__will-enter--${given animation}`. Built-in animations are fade, flip, pop, zoom"}].concat(c),s=[a()({},i,{required:!1})].concat(c),p=[a()({},i),{name:"data",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"},a()({},l),{name:"onClick",required:!1,type:"(params: { event, props }) => void",description:"Callback when the current `Item` is clicked. The callback give you access to the current event and also the data passed to the `Item`.`({ event, props }) => ...`"}].concat(c),d=[{name:"label",required:!0,type:"ReactNode",description:"Any valid node which can be rendered"},a()({},i),{name:"arrow",required:!1,default:"▶",type:"ReactNode",description:"Render a custom arrow"},a()({},l)].concat(c),f=[a()({},o),a()({},i),{name:"component",required:!1,default:"div",type:"ReactNode | (args?: any) => ReactNode",description:"Any valid node that can be rendered or a render props"},{name:"render",required:!1,type:"(args?: any) => ReactNode",description:"Render props"},{name:"event",required:!1,default:"onContextMenu",type:"ReactEvent",description:"Any react event"},{name:"storeRef",required:!1,default:!0,type:"boolean",description:"Store children ref"},{name:"data",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"}],m=[a()({},o),{name:"event",required:!0,type:"HTMLEvent",description:"The event used to display the menu"},{name:"props",required:!1,type:"object",description:"Passed to the `Item` onClick callback. Accessible via `props`"}]}}]);
//# sourceMappingURL=component---src-pages-api-iconfont-mdx-ed245032a551f2534446.js.map