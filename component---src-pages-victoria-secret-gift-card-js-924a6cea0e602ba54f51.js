(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var s=a(7),n=a.n(s),r=a(177),i=a(0),o=a.n(i),c=a(155),l=a(146),d=a(153),u=a(160),b=(a(154),a(178),a(158)),f=a.n(b),g="https://www.mb103.com/lnk.asp?o=13469&c=918277&a=367983&k=2A310CAE4F1F7D6CDA5DB67FD60E4533&l=14072",p=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))||this).state={step:"33%"},t.nextStep=function(e){t.setState({step:e})},t}return n()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(l.StaticQuery,{query:"917704070",render:function(t){var a,s,n,r=t.desktop.childImageSharp.fluid;return o.a.createElement(f.a,{Tag:"section",fluid:r,backgroundColor:"#fbeaf1"},o.a.createElement(c.a,{title:"Victoria Secret Gift Card | GB Offers",description:"WIN A $500 VICTORIA'S SECRET GIFT CARD"}),o.a.createElement("div",{className:"content-page"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"box"},o.a.createElement("h1",{className:"33%"!==e.state.step?"hide":""},"How Did You Hear About This Offer?"),o.a.createElement("h1",{className:"66%"!==e.state.step?"hide":""},"Do You Use Any Victoria’s Secret Products?"),o.a.createElement("h1",{className:"100%"!==e.state.step?"hide":""},"How Much Do You Spend A Year On Lingerie?"),o.a.createElement("h3",null,"WIN A $500 VICTORIA'S SECRET GIFT CARD"),o.a.createElement(u.a,{step:e.state.step}),o.a.createElement("a",((a={nohref:"true",onClick:function(t){return e.nextStep("66%")},title:"Instagram",className:"btn-blue orange"}).className="33%"!==e.state.step?"btn-blue orange hide":"btn-blue orange",a),"Instagram"),o.a.createElement("a",((s={nohref:"true",onClick:function(t){return e.nextStep("66%")},title:"Facebook",className:"btn-blue orange"}).className="33%"!==e.state.step?"btn-blue orange hide":"btn-blue orange",s),"Facebook"),o.a.createElement("a",((n={nohref:"true",onClick:function(t){return e.nextStep("66%")},title:"Google",className:"btn-blue orange"}).className="33%"!==e.state.step?"btn-blue orange hide":"btn-blue orange",n),"Google"),o.a.createElement("a",{nohref:"true",onClick:function(t){return e.nextStep("100%")},title:"Most of the time",className:"66%"!==e.state.step?"btn-blue orange hide":"btn-blue orange"},"Most of the time"),o.a.createElement("a",{nohref:"true",onClick:function(t){return e.nextStep("100%")},title:"Sometimes",className:"66%"!==e.state.step?"btn-blue orange hide":"btn-blue orange"},"Sometimes"),o.a.createElement("a",{nohref:"true",onClick:function(t){return e.nextStep("100%")},title:"Not really",className:"66%"!==e.state.step?"btn-blue orange hide":"btn-blue orange"},"Not really"),o.a.createElement("a",{href:g,title:"Less than $200",className:"100%"!==e.state.step?"btn-blue orange hide":"btn-blue orange"},"Less than $200"),o.a.createElement("a",{href:g,title:"$200-$500",className:"100%"!==e.state.step?"btn-blue orange hide":"btn-blue orange"},"$200-$500"),o.a.createElement("a",{href:g,title:"More than $500",className:"100%"!==e.state.step?"btn-blue orange hide":"btn-blue orange"},"More than $500"))))),o.a.createElement(d.a,null))},data:r})},t}(o.a.Component)},158:function(e,t,a){"use strict";var s=a(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var n=s(a(0)),r=s(a(4)),i=s(a(159));const o=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},c=e=>{if("undefined"!=typeof window){const t=o(e),a=new Image;return a.complete||"function"!=typeof t.onLoad||a.addEventListener("load",t.onLoad),"function"==typeof t.onError&&a.addEventListener("error",t.onError),a.src=t.fluid?t.fluid.src:t.fixed.src,a}return null};t.createImageToLoad=c;const l={},d=e=>{const t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;return l[a]||!1},u=e=>{const t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;l[a]=!0};let b;const f=[];const g=(e,t)=>{(void 0===b&&"undefined"!=typeof window&&window.IntersectionObserver&&(b=new window.IntersectionObserver(e=>{e.forEach(e=>{f.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),b).observe(e),f.push([e,t])},p=e=>{const t=e.src?`src="${e.src}" `:'src="" ',a=e.sizes?`sizes="${e.sizes}" `:"",s=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${a}/>`:"",n=e.srcSet?`<source srcSet="${e.srcSet}" ${a}/>`:"",r=e.title?`title="${e.title}" `:"",i=e.alt?`alt="${e.alt}" `:'alt="" ',o=e.width?`width="${e.width}" `:"",c=e.height?`height="${e.height}" `:"",l=e.opacity?e.opacity:"1";return`<picture>${s}${n}<img ${o}${c}${t}${i}${r}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${l};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},h=({classId:e,backgroundSize:t,backgroundRepeat:a,transitionDelay:s,bgImage:n,nextImage:r,afterOpacity:i,bgColor:o})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${s} ease-in-out;\n            -webkit-transition: opacity ${s} ease-in-out;\n            -moz-transition: opacity ${s} ease-in-out;\n            -o-transition: opacity ${s} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${o};\n            background-image: url(${n});\n            ${a}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${r});\n            ${a}\n            opacity: ${i};\n          }\n        `;class m extends n.default.Component{constructor(e){super(e);let t=!0,a=!1,s=e.fadeIn;const n=d(e);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,a=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,a=!1);const r=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:a,fadeIn:s,hasNoScript:r,seenBefore:n},this.bgImage="",this.backgroundStyles=(0,i.default)(this.props.className),this.imageRef=c(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:d(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&g(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:d(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){u(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=o(this.props),t=e.title,a=e.alt,s=e.className,r=e.style,i=void 0===r?{}:r,c=e.fluid,l=e.fixed,d=e.backgroundColor,u=e.Tag,b=e.classId,f=void 0===b?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):b,g=e.children,m="boolean"==typeof d?"lightgray":d,y=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",S=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(c){const e=c;let r=this.bgImage,o=null;e.tracedSVG&&(o=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(o=e.base64),this.state.isVisible&&(o=e.src);const l=o!==(r=""===r?o:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=r;const d={classId:f,backgroundSize:y,backgroundRepeat:S,transitionDelay:w,bgImage:r,nextImage:o,afterOpacity:l,bgColor:m};return n.default.createElement(u,{className:`${s||""} gatsby-background-image-${f} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},i,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},n.default.createElement("style",{dangerouslySetInnerHTML:{__html:h(d)}}),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p(Object.assign({alt:a,title:t},e))}}),g)}if(l){const e=l,r=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},i);"inherit"===i.display&&delete r.display;let o=this.bgImage,c="";e.tracedSVG&&(c=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(c=e.base64),this.state.isVisible&&(c=e.src);const d=c!==(o=""===o?c:"")?1:0;this.bgImage=o;const b={classId:f,backgroundSize:y,backgroundRepeat:S,transitionDelay:w,bgImage:o,nextImage:c,afterOpacity:d};return n.default.createElement(u,{className:`${s||""} gatsby-background-image-${f} gatsby-image-wrapper`,style:Object.assign({},r,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},n.default.createElement("style",{dangerouslySetInnerHTML:{__html:h(b)}}),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p(Object.assign({alt:a,title:t,width:e.width,height:e.height},e))}}),g)}return null}}m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const y=r.default.shape({width:r.default.number.isRequired,height:r.default.number.isRequired,src:r.default.string.isRequired,srcSet:r.default.string.isRequired,base64:r.default.string,tracedSVG:r.default.string,srcWebp:r.default.string,srcSetWebp:r.default.string}),S=r.default.shape({aspectRatio:r.default.number.isRequired,src:r.default.string.isRequired,srcSet:r.default.string.isRequired,sizes:r.default.string.isRequired,base64:r.default.string,tracedSVG:r.default.string,srcWebp:r.default.string,srcSetWebp:r.default.string});m.propTypes={resolutions:y,sizes:S,fixed:y,fluid:S,fadeIn:r.default.bool,title:r.default.string,alt:r.default.string,className:r.default.oneOfType([r.default.string,r.default.object]),critical:r.default.bool,style:r.default.object,imgStyle:r.default.object,placeholderStyle:r.default.object,placeholderClassName:r.default.string,backgroundColor:r.default.oneOfType([r.default.string,r.default.bool]),onLoad:r.default.func,onError:r.default.func,onStartLoad:r.default.func,Tag:r.default.string,classId:r.default.string};var w=m;t.default=w},159:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;const s=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),a=document.createElement("style");return a.textContent=e,t.body.appendChild(a),a.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let s=0;s<t.length;s++){let n;try{n=void 0!==t[s].rules?t[s].rules:void 0!==t[s].cssRules?t[s].cssRules:""}catch(a){console.debug(`Unable to read stylesheet rules for ${t[s].href}`,a)}if(n)for(let t=0;t<n.length;t++)if(n[t].selectorText===e){const e=n[t].cssText?n[t].cssText:n[t].style.cssText;return-1===e.indexOf(n[t].selectorText)?`${n[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(a=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(a)]=e[0].style[a]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,a)=>(e[a]=t[0].style[a],e),{}):{}};var n=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let a=[];return t.forEach(e=>a.push(s(e))),Object.assign(...a)}return s(e)}return{}};t.default=n},160:function(e,t,a){"use strict";var s=a(0),n=a.n(s);t.a=function(e){var t=e.step;return n.a.createElement("div",{className:"surveyStepProgressBar"},n.a.createElement("div",{className:"surveyStepProgressCounter",style:{width:t}}))}},177:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAd0lEQVQoz83SyQ5AMBSFYe//UmzEmmgNCyGmEENoa+riEF5ApMH+z5ebk6vJesBWdFiCApMdg+kuZppCtgxrVGH2MnArBDf9s9vKHoufY3ISMONoydE249XSDNodUNwFPRUgfQDy34PKN3z3QuUbkj+Awgq+e+wdKvR5KJhp9WYAAAAASUVORK5CYII=",aspectRatio:1.6666666666666667,src:"/static/41b9311c2a22043516dbb4b8b87f403d/e22a3/bg-victoria-secrets.png",srcSet:"/static/41b9311c2a22043516dbb4b8b87f403d/301a5/bg-victoria-secrets.png 1040w,\n/static/41b9311c2a22043516dbb4b8b87f403d/e22a3/bg-victoria-secrets.png 1500w",srcWebp:"/static/41b9311c2a22043516dbb4b8b87f403d/814e3/bg-victoria-secrets.webp",srcSetWebp:"/static/41b9311c2a22043516dbb4b8b87f403d/c97ac/bg-victoria-secrets.webp 1040w,\n/static/41b9311c2a22043516dbb4b8b87f403d/814e3/bg-victoria-secrets.webp 1500w",sizes:"(max-width: 1500px) 100vw, 1500px"}}},site:{siteMetadata:{title:"Get Best Offers"}}}}},178:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-victoria-secret-gift-card-js-924a6cea0e602ba54f51.js.map