webpackJsonp([0xb2c7ae8e6d15],{77:function(e,t,n){e.exports=n.p+"static/home_header.c009805c.jpg"},56:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),r=i(o),a=n(14),u=n(77),l=(i(u),function(e){var t={jumbotron:{display:"flex",background:"url("+e.image+") no-repeat center center",backgroundSize:"cover",height:e.height,minHeight:"440px",alignItems:"flex-end"}};return r.default.createElement(a.Jumbotron,{style:t.jumbotron},e.children)});t.default=l,e.exports=t.default},57:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),r=i(o),a={title:{margin:0}},u=function(e){return r.default.createElement("div",{className:"display-subtitle edit-container"},r.default.createElement("h3",null,r.default.createElement("span",{className:"headline-holder",style:a.headlineHolder},e.text)))};t.default=u,e.exports=t.default},58:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),r=i(o),a={title:{margin:0}},u=function(e){return r.default.createElement("div",{className:"display-title edit-container"},r.default.createElement("h1",null,r.default.createElement("span",{className:"headline-holder",style:a.headlineHolder},e.text)))};t.default=u,e.exports=t.default},107:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(1),d=i(l),c=n(56),s=i(c),f=n(18),p=i(f),g=n(110),h=i(g),E=function(e){function t(n){o(this,t);var i=r(this,e.call(this,n));return i.state={editing:!1},i.toggleEditing=function(){return i._toggleEditing()},i.doneEditing=function(e){return i._doneEditing(e)},i}return a(t,e),t.prototype._toggleEditing=function(){this.setState({editing:!this.state.editing})},t.prototype._doneEditing=function(e){this.toggleEditing(),this.props.updateHeader({image:e.source})},t.prototype.render=function(){return this.state.editing?d.default.createElement(s.default,{image:this.props.image,height:"auto"},d.default.createElement("div",null,d.default.createElement(h.default,{source:this.props.image,doneEditing:this.doneEditing}),this.props.children)):d.default.createElement(p.default,u({toggleEditing:this.toggleEditing,fullWidth:!0,height:"65vh"},this.props),d.default.createElement(s.default,{image:this.props.image},this.props.children))},t}(d.default.Component);E.propTypes={},t.default=E,e.exports=t.default},108:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=i(u),d=(n(14),n(18)),c=i(d),s=n(57),f=i(s),p=n(36),g=i(p),h=function(e){function t(n){o(this,t);var i=r(this,e.call(this,n));return i.state={editing:!1},i.toggleEditing=function(){return i._toggleEditing()},i.doneEditing=function(e){return i._doneEditing(e)},i}return a(t,e),t.prototype._toggleEditing=function(){this.setState({editing:!this.state.editing})},t.prototype._doneEditing=function(e){this.toggleEditing(),this.props.updateHeader({subtitle:e})},t.prototype.render=function(){return this.state.editing?l.default.createElement("div",{className:"display-subtitle edit-container"},l.default.createElement("h3",null,l.default.createElement(g.default,{text:this.props.text,doneEditing:this.doneEditing}))):l.default.createElement(c.default,{toggleEditing:this.toggleEditing},l.default.createElement(f.default,{text:this.props.text}))},t}(l.default.Component);h.propTypes={},t.default=h,e.exports=t.default},109:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=i(u),d=(n(14),n(18)),c=i(d),s=n(58),f=i(s),p=n(36),g=i(p),h=function(e){function t(n){o(this,t);var i=r(this,e.call(this,n));return i.state={editing:!1},i.toggleEditing=function(){return i._toggleEditing()},i.doneEditing=function(e){return i._doneEditing(e)},i}return a(t,e),t.prototype._toggleEditing=function(){this.setState({editing:!this.state.editing})},t.prototype._doneEditing=function(e){this.toggleEditing(),this.props.updateHeader({title:e})},t.prototype.render=function(){return this.state.editing?l.default.createElement("div",{className:"display-title edit-container"},l.default.createElement("h1",{className:"display-3"},l.default.createElement(g.default,{text:this.props.text,doneEditing:this.doneEditing}))):l.default.createElement(c.default,{toggleEditing:this.toggleEditing},l.default.createElement(f.default,{text:this.props.text}))},t}(l.default.Component);h.propTypes={},t.default=h,e.exports=t.default},111:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return{content:e.content.header,isEditingPage:e.adminTools.isEditingPage}}function r(e){return{updatePageHeader:function(t){e((0,d.updatePageHeader)(t))}}}t.__esModule=!0;var a=n(1),u=i(a),l=n(12),d=n(13),c=n(109),s=i(c),f=n(108),p=i(f),g=n(107),h=i(g),E=n(58),m=i(E),y=n(57),_=i(y),b=n(56),x=i(b),v=(n(14),n(77)),w=i(v),O={titleWrapper:{display:"flex",flexDirection:"column"}},P=function(e){var t=e.content&&e.content.image?e.content.image:w.default;return e.isEditingPage?u.default.createElement(h.default,{image:t,updateHeader:e.updatePageHeader},u.default.createElement("div",{style:O.titleWrapper},u.default.createElement(s.default,{text:e.content.title,updateHeader:e.updatePageHeader}),u.default.createElement(p.default,{text:e.content.subtitle,updateHeader:e.updatePageHeader}))):u.default.createElement(x.default,{image:t},u.default.createElement("div",{style:O.titleWrapper},u.default.createElement(m.default,{text:e.content.title}),u.default.createElement(_.default,{text:e.content.subtitle})))};t.default=(0,l.connect)(o,r)(P),e.exports=t.default},344:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{content:e.content,pageData:e.pageData}}function l(e){return{onUpdatePageContent:function(t){e((0,E.updatePageContent)(t))},onUpdatePageMetaData:function(t){e((0,E.updatePageMetaData)(t))}}}t.__esModule=!0,t.query=void 0;var d=n(1),c=i(d),s=n(42),f=i(s),p=n(111),g=i(p),h=(n(37),n(33),n(12)),E=n(13),m=function(e){function t(n){o(this,t);var i=r(this,e.call(this,n));return i.props.onUpdatePageContent(JSON.parse(i.props.data.pages.childPagesContent.internal.content)),i.props.onUpdatePageMetaData(JSON.parse(i.props.data.pages.internal.content)),i}return a(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"home"},c.default.createElement(g.default,null),c.default.createElement(f.default,null))},t}(c.default.Component);m.propTypes={},t.default=(0,h.connect)(u,l)(m);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-home-jsx-e850255484e19e9e726f.js.map