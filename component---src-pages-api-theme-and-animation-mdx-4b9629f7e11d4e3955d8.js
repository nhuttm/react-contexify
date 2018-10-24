(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return u});var a=t(171),r=t.n(a),o=t(0),i=t.n(o),l=t(168),c=t(167);n.default=function(e){var n=e.components,t=r()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:t,components:n},i.a.createElement(l.MDXTag,{name:"h1",components:n},"Theme and Animation"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Available theme: ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dark"),", ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"light")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Available animation: ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"zoom"),", ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pop"),", ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"flip"),", ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fade")),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import { Menu, Item, theme, animation } from 'react-contexify';\n\n<Menu id=\"foo\" theme={theme.dark} animation={animation.zoom}>\n  <Item>Copy</Item>\n  <Item>Paste</Item>\n</Menu>\n")))};var u={}},163:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l});t(179),t(76),t(51),t(180),t(50);var a=t(175),r=t(161),o={giant:1170,desktop:992,tablet:768,phone:376},i=Object.keys(o).reduce(function(e,n){var t=o[n]/16;return e[n]=function(){return Object(r.b)(["@media (min-width:","em){",";}"],t,r.b.apply(void 0,arguments))},e},{}),l={events:["onContextMenu","onClick","onDoubleClick"],themes:["none"].concat(Object.values(a.h)),animations:["none"].concat(Object.values(a.f))}},165:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return f});var a=t(0),r=t.n(a),o=t(4),i=t.n(o),l=t(162),c=t.n(l);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var u=t(166),p=t.n(u);t.d(n,"PageRenderer",function(){return p.a});var s=t(34);t.d(n,"parsePath",function(){return s.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,n,t){var a;e.exports=(a=t(170))&&a.default||a},167:function(e,n,t){"use strict";var a=t(7),r=t.n(a),o=t(164),i=t.n(o),l=t(0),c=t.n(l),u=t(176),p=t(161),s=t(178),d=t.n(s),f=t(163),m=[{title:"Getting Started",menu:[{label:"Demo",link:"/"},{label:"Installation and Usage"},{label:"Migrate from v3"}]},{title:"Guides",menu:[{label:"Disable an Item"},{label:"Disable a submenu"},{label:"Change the submenu arrow"},{label:"Menu Provider"},{label:"You don't need the Menu Provider"},{label:"The onClick event handler"},{label:"Le style!"}]},{title:"API Reference",prefix:"/api/",menu:[{label:"Menu"},{label:"Item"},{label:"Submenu"},{label:"Separator"},{label:"IconFont"},{label:"MenuProvider"},{label:"ContextMenu",link:"context-menu"},{label:"Theme and Animation"}]}];t(26),t(181),t(49);function b(){var e=i()(["\n      display: none;\n  "]);return b=function(){return e},e}var g=p.c.div.withConfig({displayName:"Fab__Container",componentId:"sc-1me259o-0"})(["width:60px;height:60px;background:#9b4ccb;border-radius:100%;position:fixed;bottom:10px;right:15px;z-index:5;",";"],f.a.tablet(b())),h=p.c.button.withConfig({displayName:"Fab__Button",componentId:"sc-1me259o-1"})(["padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:4px 0 0 0;overflow:visible;&:focus-within{background-color:none;}&:hover{opacity:0.7;}"]),v=p.c.div.withConfig({displayName:"Fab__OutterButton",componentId:"sc-1me259o-2"})(["width:30px;height:24px;display:inline-block;position:relative;"]),y=Object(p.b)(["width:30px;height:4px;background-color:#e1e1e1;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease;"]),x=p.c.div.withConfig({displayName:"Fab__InnerButton",componentId:"sc-1me259o-3"})(["display:block;top:50%;margin-top:-2px;transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);"," "," &::before,&::after{",' content:"";display:block;}&::before{top:-10px;transition:top 0.1s 0.25s ease-in,opacity 0.1s ease-in;',";}&::after{bottom:-10px;transition:bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);",";}"],function(e){return e.toggled?"\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); \n  ":null},y,y,function(e){return e.toggled?"\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n  ":null},function(e){return e.toggled?"\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":null}),w=function(e){var n=e.toggled,t=e.onToggle;return c.a.createElement(g,null,c.a.createElement(h,{onClick:t},c.a.createElement(v,null,c.a.createElement(x,{toggled:n}))))},O=t(165),E=Object(p.c)(O.Link).attrs({activeClassName:"nav-item-active"}).withConfig({displayName:"NavLink__StyledLink",componentId:"g709m1-0"})(["display:inline-block;color:#fff;transition:transform 0.3s;&.","{color:#bd50ff;}&:hover{color:#bd50ff;transform:scale(1.155);}"],"nav-item-active"),C=function(e){var n=e.to,t=e.children;return c.a.createElement(E,{to:n},t)},k=p.c.div.withConfig({displayName:"Logo",componentId:"sc-1k1pl5n-0"})(["padding:15px 0;margin:0;display:block;position:relative;z-index:4;"]),_=Object(p.c)(O.Link).withConfig({displayName:"Logo__A",componentId:"sc-1k1pl5n-1"})(["cursor:pointer;text-transform:uppercase;padding:5px 0;display:inline-block;font-size:18px;color:#fff;white-space:nowrap;font-weight:400;line-height:30px;overflow:hidden;text-align:center;display:block;&:hover{color:#fff;}&::after{content:'';position:absolute;bottom:0;right:15px;height:1px;width:calc(100% - 30px);background-color:hsla(0,0%,71%,0.3);}"]),M=function(e){var n=e.children;return c.a.createElement(k,null,c.a.createElement(_,{to:"/",activeStyle:{color:"#fff"}},n))};function j(){var e=i()(["\n    opacity: 1;\n    width: ",";\n    pointer-events: initial;\n    border-right: 4px solid #bd50ff;\n  "]);return j=function(){return e},e}var P=p.c.aside.withConfig({displayName:"Sidenav__Nav",componentId:"sc-1psbioe-0"})(["width:100%;opacity:",";pointer-events:",";position:fixed;top:0;left:0;height:100%;background:#212120;box-shadow:0 16px 38px -12px rgba(0,0,0,0.56),0 4px 25px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2);transition:opacity 0.4s;z-index:4;",";"],function(e){return e.isOpen?1:0},function(e){return e.isOpen?"initial":"none"},f.a.tablet(j(),function(e){return e.sidenavWidth})),S=p.c.div.withConfig({displayName:"Sidenav__Wrapper",componentId:"sc-1psbioe-1"})(["position:relative;height:calc(100vh - 50px);overflow:auto;width:100%;z-index:4;padding:12px;font-size:1em;& ul{margin-left:12px;list-style:none;}& p{margin:0;color:#fff;font-weight:bold;}"]),T=function(e){var n=e.isSidebarOpen,t=e.toggleSidebar,a=e.navMenu,r=e.sidenavWidth;return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{isOpen:n,sidenavWidth:r},c.a.createElement(M,null,"React-Contexify"),c.a.createElement(S,null,a.map(function(e){var n=e.prefix||"";return c.a.createElement(l.Fragment,{key:e.title},c.a.createElement("p",null,e.title),c.a.createElement("ul",null,e.menu.map(function(e){var t=e.link||e.label.toLowerCase().replace(/\'|\!/,"").replace(/\s/g,"-");return c.a.createElement("li",{key:t},c.a.createElement(C,{to:n+t},e.label))})))}))),c.a.createElement(w,{onToggle:t,toggled:n}))};t(182),t(183),t(184);function D(){var e=i()(["\n      transform: translateX(",");\n      transition: transform 0.4s;\n      margin-right: ",";\n      padding: 0 32px;\n  "]);return D=function(){return e},e}function N(){var e=i()(["\nh1{\n  color: #b561b7;\n  font-weight: bold;\n}\n\n@media (min-width: 48em) {\n  .react-live{\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  }\n  .react-live-preview, .react-live > .prism-code {\n    width: 100%;\n  },\n  .react-live-preview{\n    padding: 20px 0;\n  }\n}\n"]);return N=function(){return e},e}var I=Object(p.a)(N()),X=p.c.main.withConfig({displayName:"Layout__Main",componentId:"sc-138vppf-0"})(["",";"],function(e){return e.isSidebarOpen&&Object(p.b)(["",";"],f.a.tablet(D(),function(e){return e.sidenavWidth},function(e){return e.sidenavWidth}))}),L=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).state={isSidebarOpen:!0},n.toggleSidebar=function(){n.setState({isSidebarOpen:!n.state.isSidebarOpen})},n}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){d.a.highlightAll()},t.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(X,{isSidebarOpen:this.state.isSidebarOpen,sidenavWidth:"260px"},this.props.children),c.a.createElement(T,{sidenavWidth:"260px",navMenu:m,isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}),c.a.createElement(I,null),c.a.createElement(u.ToastContainer,null))},n}(l.Component);n.a=L},168:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(173);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=t(169);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},169:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=l(t(0)),o=l(t(53)),i=l(t(4));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),u=c.Provider,p=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,o=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return r.default.createElement(p,null,function(n){return r.default.createElement(e,a({components:t||n},o))})}};var s=function(e){var n=e.components,t=e.children;return r.default.createElement(u,{value:n},t)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},n.default=s},170:function(e,n,t){"use strict";t.r(n);var a=t(10),r=t.n(a),o=t(0),i=t.n(o),l=t(4),c=t.n(l),u=t(52),p=t(2),s=function(e){var n=e.location,t=p.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(u.a,r()({location:n,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=s},173:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(0),i=u(o),l=u(t(174)),c=t(169);function u(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,r=e.props,o=void 0===r?{}:r,c=e.children,u=e.components,s=void 0===u?{}:u,d=e.Layout,f=e.layoutProps,m=s[t+"."+n]||s[n]||p[n]||n;return d?((0,l.default)(this,d),i.default.createElement(d,a({components:s},f),i.default.createElement(m,o,c))):i.default.createElement(m,o,c)}}]),n}();n.default=(0,c.withMDXComponents)(s)},174:function(e,n,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=u&&u(Object);e.exports=function e(n,t,s){if("string"!=typeof t){if(p){var d=u(t);d&&d!==p&&e(n,d,s)}var f=i(t);l&&(f=f.concat(l(t)));for(var m=0;m<f.length;++m){var b=f[m];if(!(a[b]||r[b]||s&&s[b])){var g=c(t,b);try{o(n,b,g)}catch(e){}}}return n}return n}}}]);
//# sourceMappingURL=component---src-pages-api-theme-and-animation-mdx-4b9629f7e11d4e3955d8.js.map