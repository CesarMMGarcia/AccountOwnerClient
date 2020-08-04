(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[10],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(14),r=function(){return{type:a.a}},o=function(e,t){return 404===e.response.status?function(e){return{type:a.e,props:e}}(t):500===e.response.status?function(e){return{type:a.f,props:e}}(t):function(e){return{type:a.g,error:e}}(e)}},150:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(14),r=n(149),o=n(155),c=n.n(o).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}});n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m}));var l=function(e,t){return function(n){c.get(e).then((function(e){var t;n((t=e.data,{type:a.d,data:t}))})).catch((function(e){n(r.b(e,t))}))}},u=function(e,t,n){return function(o){c.post(e,t).then((function(e){o(function(e){return{type:a.i,response:e}}(e))})).catch((function(e){o(r.b(e,n))}))}},i=function(e,t,n){return function(o){c.put(e,t).then((function(e){o(function(e){return{type:a.j,response:e}}(e))})).catch((function(e){o(r.b(e,n))}))}},s=function(e,t){return function(n){c.delete(e).then((function(e){n(function(e){return{type:a.c,response:e}}(e))})).catch((function(e){n(r.b(e,t))}))}},d=function(e,t){return{type:a.b,props:t,url:e}},m=function(){return{type:a.h}}},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(263),c=n(253);n(150);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,{show:e.show,backdrop:"static"},r.a.createElement(o.a.Header,null,e.modalHeaderText),r.a.createElement(o.a.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(o.a.Footer,null,r.a.createElement(c.a,{bsStyle:"success",onClick:e.successClick},e.okButtonText))))}},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(263),c=n(253);n(150);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,{show:e.show,backdrop:"static"},r.a.createElement(o.a.Header,null,e.modalHeaderText),r.a.createElement(o.a.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(o.a.Footer,null,r.a.createElement(c.a,{bsStyle:"danger",onClick:e.closeModal},e.okButtonText))))}},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(255),c=n(144),l=n(256),u=n(264),i=n(164);n(162),n(158);t.a=function(e){var t=null,n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=r.a.createElement("em",null,e.errorMessage)),e.elementType){case"input":t=r.a.createElement(o.a,{controlId:e.id},r.a.createElement(c.a,{componentClass:l.a,sm:2},e.label),r.a.createElement(c.a,{sm:6},r.a.createElement(u.a,{type:e.type,value:e.value,onChange:e.changed,onBlur:e.blur})),r.a.createElement(c.a,null,r.a.createElement("em",null,n)));break;case"datePicker":t=r.a.createElement(o.a,{controlId:e.id},r.a.createElement(c.a,{componentClass:l.a,sm:2},e.label),r.a.createElement(c.a,{sm:6},r.a.createElement(i.a,{selected:e.value,dateFormat:"MM/DD/YYYY",readOnly:!0,onChange:e.changed,className:"datePickerControl",showYearDropdown:!0,dropdownMode:"select"})),r.a.createElement(c.a,null,r.a.createElement("em",null,n)));break;default:t=null}return r.a.createElement(a.Fragment,null,t)}},158:function(e,t,n){},159:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(156),r=n.n(a),o=function(){return{name:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Name:"},address:{element:"input",type:"text",value:"",validation:{required:!0,maxLength:60},valid:!1,touched:!1,errorMessage:"",label:"Address:"},dateOfBirth:{element:"datePicker",type:"text",value:r()(),valid:!0,touched:!1,errorMessage:"",label:"Date of birth:"}}},c=function(){return{accountType:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Account type:"},dateCreated:{element:"datePicker",type:"text",value:r()(),valid:!0,touched:!1,errorMessage:"",label:"Created date:"}}}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n(15),r=function(e){var t=[];for(var n in e)t.push({id:n,config:e[n]});return t},o=function(e,t,n){var r=Object(a.a)({},t[n]);r.value=n.startsWith("date")?e:e.target.value,r.touched=!0;var o=c(r.value,r.validation);return r.valid=o.isValid,r.errorMessage=o.errorMessage,r},c=function(e,t){var n={isValid:!0,errorMessage:""};return t?(t.required&&(n.isValid=""!==e.trim(),n.errorMessage=n.isValid?"":"Field is required"),n.isValid&&t.maxLength&&(n.isValid=e.length<=t.maxLength,n.errorMessage="Not allowed more than ".concat(t.maxLength," characters")),n):n},l=function(e){var t=0;for(var n in e)if(!e[n].valid){t+=1;break}return t}},258:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(50),o=n(51),c=n(53),l=n(52),u=n(54),i=n(0),s=n.n(i),d=n(157),m=n(214),f=n(257),p=n(255),h=n(144),v=n(253),b=n(159),g=n(160),E=n(151),y=n(149),w=n(47),O=n(156),M=n.n(O),k=n(153),x=n(154),C=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u)))).state={ownerForm:{},isFormValid:!0},n.componentWillMount=function(){n.setState({ownerForm:Object(b.b)()})},n.componentDidMount=function(){var e="/api/owner/"+n.props.match.params.id;n.props.onGetOwnerById(e,Object(a.a)({},n.props))},n.componentWillReceiveProps=function(e){var t=Object(a.a)({},n.state.ownerForm),r=Object(a.a)({},t.name),o=Object(a.a)({},t.dateOfBirth),c=Object(a.a)({},t.address);r.value=e.data.name,r.valid=!0,o.value=M()(e.data.dateOfBirth),c.value=e.data.address,c.valid=!0,t.name=r,t.dateOfBirth=o,t.address=c,n.setState({ownerForm:t})},n.updateOwner=function(e){e.preventDefault();var t={name:n.state.ownerForm.name.value,dateOfBirth:n.state.ownerForm.dateOfBirth.value,address:n.state.ownerForm.address.value},r="/api/owner/"+n.props.data.id;n.props.onUpdateOwner(r,t,Object(a.a)({},n.props))},n.redirectToOwnerList=function(){n.props.history.push("/owner-List")},n.handleChangeEvent=function(e,t){var r=Object(a.a)({},n.state.ownerForm);r[t]=g.c(e,r,t);var o=g.b(r);n.setState({ownerForm:r,isFormValid:0===o})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=g.a(Object(a.a)({},this.state.ownerForm));return s.a.createElement(m.a,null,s.a.createElement(f.a,{horizontal:!0,onSubmit:this.updateOwner},t.map((function(t){return s.a.createElement(d.a,{key:t.id,elementType:t.config.element,id:t.id,label:t.config.label,type:t.config.type,value:t.config.value,changed:function(n){return e.handleChangeEvent(n,t.id)},errorMessage:t.config.errorMessage,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,blur:function(n){return e.handleChangeEvent(n,t.id)}})})),s.a.createElement("br",null),s.a.createElement(p.a,null,s.a.createElement(h.a,{mdOffset:6,md:1},s.a.createElement(v.a,{type:"submit",bsStyle:"info",disabled:!this.state.isFormValid},"Update")),s.a.createElement(h.a,{md:1},s.a.createElement(v.a,{bsStyle:"danger",onClick:this.redirectToOwnerList},"Cancel")))),s.a.createElement(k.a,{show:this.props.showSuccessModal,modalHeaderText:"Success message",modalBodyText:"Action completed successfully",okButtonText:"OK",successClick:function(){return e.props.onCloseSuccessModal("/owner-List",Object(a.a)({},e.props))}}),s.a.createElement(x.a,{show:this.props.showErrorModal,modalHeaderText:"Error message",modalBodyText:this.props.errorMessage,okButtonText:"OK",closeModal:function(){return e.props.onCloseErrorModal()}}))}}]),t}(i.Component);t.default=Object(w.b)((function(e){return{data:e.repository.data,showSuccessModal:e.repository.showSuccessModal,showErrorModal:e.errorHandler.showErrorModal,errorMessage:e.errorHandler.errorMessage}}),(function(e){return{onGetOwnerById:function(t,n){return e(E.c(t,n))},onUpdateOwner:function(t,n,a){return e(E.f(t,n,a))},onCloseSuccessModal:function(t,n){return e(E.a(t,n))},onCloseErrorModal:function(){return e(y.a())}}}))(C)}}]);
//# sourceMappingURL=10.96e05e66.chunk.js.map