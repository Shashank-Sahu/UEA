"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[825],{4085:function(e,n,t){t(7313);var r=t(182),o=t(6417);n.Z=function(e){var n=e.title,t=e.description,i=e.children;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(r.q,{children:[(0,o.jsx)("title",{children:n}),(0,o.jsx)("meta",{name:"description",content:t})]}),i]})}},5998:function(e,n,t){t(7313);var r=t(3428),o=t(3405),i=t(1113),a=t(5898),c=t(7829),s=t(6417);n.Z=function(e){var n=e.title,t=e.subtitle,u=e.children,d=e.action,l=e.footer,f=e.cardheading,v=e.headtitle,p=e.headsubtitle,m=e.middlecontent;return(0,s.jsxs)(r.Z,{sx:{padding:0},elevation:9,variant:void 0,children:[f?(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(i.Z,{variant:"h5",children:v}),(0,s.jsx)(i.Z,{variant:"subtitle2",color:"textSecondary",children:p})]}):(0,s.jsxs)(o.Z,{sx:{p:"30px"},children:[n?(0,s.jsxs)(a.Z,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,s.jsxs)(c.Z,{children:[n?(0,s.jsx)(i.Z,{variant:"h5",children:n}):"",t?(0,s.jsx)(i.Z,{variant:"subtitle2",color:"textSecondary",children:t}):""]}),d]}):null,u]}),m,l]})}},4825:function(e,n,t){t.r(n);t(7313);var r=t(4085),o=t(5998),i=t(6417);n.default=function(){return(0,i.jsx)(r.Z,{title:"Icons",description:"this is Icons",children:(0,i.jsx)(o.Z,{title:"Icons",children:(0,i.jsx)("iframe",{src:"https://tabler-icons.io/",title:"Inline Frame Example",frameBorder:0,width:"100%",height:"650"})})})}},3405:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(7462),o=t(3366),i=t(7313),a=t(3061),c=t(1921),s=t(7592),u=t(7342),d=t(7430),l=t(2298);function f(e){return(0,l.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var v=t(6417),p=["className","component"],m=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCardContent"}),i=t.className,s=t.component,d=void 0===s?"div":s,l=(0,o.Z)(t,p),Z=(0,r.Z)({},t,{component:d}),h=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},f,n)}(Z);return(0,v.jsx)(m,(0,r.Z)({as:d,className:(0,a.Z)(h.root,i),ownerState:Z,ref:n},l))}))},3428:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),o=t(3366),i=t(7313),a=t(3061),c=t(1921),s=t(7592),u=t(7342),d=t(501),l=t(7430),f=t(2298);function v(e){return(0,f.Z)("MuiCard",e)}(0,l.Z)("MuiCard",["root"]);var p=t(6417),m=["className","raised"],Z=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),h=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCard"}),i=t.className,s=t.raised,d=void 0!==s&&s,l=(0,o.Z)(t,m),f=(0,r.Z)({},t,{raised:d}),h=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},v,n)}(f);return(0,p.jsx)(Z,(0,r.Z)({className:(0,a.Z)(h.root,i),elevation:d?8:void 0,ref:n,ownerState:f},l))}))},5898:function(e,n,t){var r=t(8002),o=t(7592),i=t(7342),a=(0,r.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,i.Z)({props:e,name:"MuiStack"})}});n.Z=a},8002:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(4942),o=t(3366),i=t(7462),a=t(7313),c=t(3061),s=t(3019),u=t(1921),d=t(2298),l=t(6694),f=t(4614),v=t(9028),p=t(9456),m=t(4929),Z=t(6886),h=t(6417),x=["component","direction","spacing","divider","children","className","useFlexGap"],j=(0,p.Z)(),b=(0,l.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function g(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:j})}function k(e,n){var t=a.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(a.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var C=function(e){var n=e.ownerState,t=e.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:t},(0,m.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,Z.hB)(t),c=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),u=(0,m.P$)({values:n.direction,base:c}),d=(0,m.P$)({values:n.spacing,base:c});"object"===typeof u&&Object.keys(u).forEach((function(e,n,t){if(!u[e]){var r=n>0?u[t[n-1]]:"column";u[e]=r}}));o=(0,s.Z)(o,(0,m.k9)({theme:t},d,(function(e,t){return n.useFlexGap?{gap:(0,Z.NA)(a,e)}:{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=t?u[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,Z.NA)(a,e))};var o})))}return o=(0,m.dt)(t.breakpoints,o)};function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?b:n,r=e.useThemeProps,s=void 0===r?g:r,l=e.componentName,f=void 0===l?"MuiStack":l,p=t(C);return a.forwardRef((function(e,n){var t=s(e),r=(0,v.Z)(t),a=r.component,l=void 0===a?"div":a,m=r.direction,Z=void 0===m?"column":m,j=r.spacing,b=void 0===j?0:j,g=r.divider,C=r.children,w=r.className,y=r.useFlexGap,M=void 0!==y&&y,S=(0,o.Z)(r,x),N={direction:Z,spacing:b,useFlexGap:M},R=(0,u.Z)({root:["root"]},(function(e){return(0,d.Z)(f,e)}),{});return(0,h.jsx)(p,(0,i.Z)({as:l,ownerState:N,ref:n,className:(0,c.Z)(R.root,w)},S,{children:g?k(C,g):C}))}))}},6694:function(e,n,t){var r=(0,t(6541).ZP)();n.Z=r}}]);