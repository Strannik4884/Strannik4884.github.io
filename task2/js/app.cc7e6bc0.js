(function(e){function t(t){for(var a,o,l=t[0],u=t[1],c=t[2],m=0,d=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);n&&n(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,l=1;l<s.length;l++){var u=s[l];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/task2/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var n=u;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"22ea":function(e,t,s){"use strict";s("515a")},"515a":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"form container",staticStyle:{display:"inline"}},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"left-col form-input col"},[s("resume-form",{attrs:{resume:e.resume,"resume-view":e.resumeView,"education-levels":e.educationLevels}})],1),s("div",{staticClass:"right-col form-output col"},[s("resume-template",{attrs:{resume:e.resume,"resume-view":e.resumeView,"education-levels":e.educationLevels}})],1)])])])},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"text-center form-col-title"},[e._v("Форма резюме")]),e.showResumeForm?s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.applyResumeForm(t)},reset:function(t){return t.preventDefault(),e.clearResumeForm(t)}}},[0!==this.resumeFormErrors.length?s("div",e._l(this.resumeFormErrors,(function(t){return s("div",{key:t,staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"}),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-control bg-danger text-white pb-2 pt-2"},[s("div",{staticClass:"pl-2"},[e._v(e._s(t))])])])])})),0):e._e(),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Профессия:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.profession,expression:"resume.profession"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Программист",required:""},domProps:{value:e.resume.profession},on:{input:function(t){t.target.composing||e.$set(e.resume,"profession",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Город:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.city,expression:"resume.city"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Липецк",required:""},domProps:{value:e.resume.city},on:{input:function(t){t.target.composing||e.$set(e.resume,"city",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Фото (URL):")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.photoUrl,expression:"resume.photoUrl"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.resume.photoUrl},on:{input:function(t){t.target.composing||e.$set(e.resume,"photoUrl",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("ФИО:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.name,expression:"resume.name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"150",placeholder:"Петров Пётр Петрович",required:""},domProps:{value:e.resume.name},on:{input:function(t){t.target.composing||e.$set(e.resume,"name",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Номер телефона:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.phone,expression:"resume.phone"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10",placeholder:"9876543210",required:""},domProps:{value:e.resume.phone},on:{input:function(t){t.target.composing||e.$set(e.resume,"phone",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Email:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.email,expression:"resume.email"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",maxlength:"255",placeholder:"mail@example.ru",required:""},domProps:{value:e.resume.email},on:{input:function(t){t.target.composing||e.$set(e.resume,"email",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Дата рождения:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.birthday,expression:"resume.birthday"}],staticClass:"form-control",attrs:{type:"date",placeholder:e.birthdayPlaceholder,required:""},domProps:{value:e.resume.birthday},on:{input:function(t){t.target.composing||e.$set(e.resume,"birthday",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Образование:")]),s("div",{staticClass:"col-lg-8"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.resume.educationLevel,expression:"resume.educationLevel"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.resume,"educationLevel",t.target.multiple?s:s[0])}}},e._l(e.educationLevels,(function(t){return s("option",{key:t},[e._v(e._s(t))])})),0)])]),e.resume.educationLevel!==e.educationLevels[0]&&""!==e.resume.educationLevel?s("education-special",{attrs:{resume:e.resume}}):e._e(),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Желаемая зарплата:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.desiredSalary,expression:"resume.desiredSalary"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10",placeholder:"50000",required:""},domProps:{value:e.resume.desiredSalary},on:{input:function(t){t.target.composing||e.$set(e.resume,"desiredSalary",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Навыки:")]),s("div",{staticClass:"col-lg-8"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resume.skills,expression:"resume.skills"}],staticClass:"form-control form-text-area",attrs:{maxlength:"500",rows:"3",required:""},domProps:{value:e.resume.skills},on:{input:function(t){t.target.composing||e.$set(e.resume,"skills",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("О себе:")]),s("div",{staticClass:"col-lg-8"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resume.about,expression:"resume.about"}],staticClass:"form-control form-text-area",attrs:{maxlength:"500",rows:"3"},domProps:{value:e.resume.about},on:{input:function(t){t.target.composing||e.$set(e.resume,"about",t.target.value)}}})])]),s("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[e._v("Очистить форму")]),s("button",{staticClass:"btn btn-primary apply-btn-style",attrs:{type:"submit"}},[e._v("Применить")])],1):e._e()])},l=[],u=(s("fb6a"),s("b0c0"),s("4d63"),s("ac1f"),s("25f0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Учебное заведение:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.educationPlace,expression:"resume.educationPlace"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Липецкий Государственный Технический Университет",required:""},domProps:{value:e.resume.educationPlace},on:{input:function(t){t.target.composing||e.$set(e.resume,"educationPlace",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Факультет:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.educationFaculty,expression:"resume.educationFaculty"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Автоматизации и информатики",required:""},domProps:{value:e.resume.educationFaculty},on:{input:function(t){t.target.composing||e.$set(e.resume,"educationFaculty",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Специализация:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.educationSpecialization,expression:"resume.educationSpecialization"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Математическое обеспечение и администрирование информационных систем",required:""},domProps:{value:e.resume.educationSpecialization},on:{input:function(t){t.target.composing||e.$set(e.resume,"educationSpecialization",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Год окончания:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.educationEndDate,expression:"resume.educationEndDate"}],staticClass:"form-control",attrs:{type:"text",maxlength:"4",placeholder:"2021",required:""},domProps:{value:e.resume.educationEndDate},on:{input:function(t){t.target.composing||e.$set(e.resume,"educationEndDate",t.target.value)}}})])])])}),c=[],n={name:"EducationSpecial",props:["resume"]},m=n,d=s("2877"),p=Object(d["a"])(m,u,c,!1,null,"918a81ec",null),v=p.exports,h={name:"ResumeForm",props:["resume","resumeView","educationLevels"],data:function(){return{birthdayPlaceholder:new Date(Date.now()).toLocaleString().slice(0,10),showResumeForm:!0,resumeFormErrors:[]}},components:{educationSpecial:v},methods:{clearResumeForm:function(){var e=this;this.resumeFormErrors=[],this.resume.profession="",this.resume.city="",this.resume.photoUrl="",this.resume.name="",this.resume.phone="",this.resume.email="",this.resume.birthday="",this.resume.educationLevel="",this.resume.educationPlace="",this.resume.educationFaculty="",this.resume.educationSpecialization="",this.resume.educationEndDate="",this.resume.desiredSalary="",this.resume.skills="",this.resume.about="",this.showResumeForm=!1,this.$nextTick((function(){e.showResumeForm=!0}))},applyResumeForm:function(){this.resumeFormErrors=[];var e=new RegExp("\\d{"+this.resume.phone.length+"}","gim"),t=new RegExp("\\d{"+this.resume.desiredSalary.length+"}","gim");if((this.resume.phone.length<6||this.resume.phone.length>10||!e.test(this.resume.phone))&&this.resumeFormErrors.push("Номер телефона должен состоять из цифр и быть в длину от 6 до 10 символов"),this.resume.educationLevel!==this.educationLevels[0]){var s=new RegExp("\\d{"+this.resume.educationEndDate.length+"}","gim");(""===this.resume.educationEndDate||parseInt(this.resume.educationEndDate)<1945||parseInt(this.resume.educationEndDate)>2021||!s.test(this.resume.educationEndDate))&&this.resumeFormErrors.push("Укажите корректную дату окончания обучения")}t.test(this.resume.desiredSalary)||this.resumeFormErrors.push("Укажите корректный размер желаемой зарплаты"),0===this.resumeFormErrors.length&&this.renderResumeTemplate()},renderResumeTemplate:function(){this.resumeView.profession=this.resume.profession,this.resumeView.city=this.resume.city,this.resumeView.photoUrl=this.resume.photoUrl,this.resumeView.name=this.resume.name,this.resumeView.phone=this.resume.phone,this.resumeView.email=this.resume.email,this.resumeView.birthday=new Date(this.resume.birthday).toLocaleDateString(),this.resumeView.educationLevel=this.resume.educationLevel,this.resumeView.educationPlace=this.resume.educationPlace,this.resumeView.educationFaculty=this.resume.educationFaculty,this.resumeView.educationSpecialization=this.resume.educationSpecialization,this.resumeView.educationEndDate=this.resume.educationEndDate,this.resumeView.desiredSalary=this.resume.desiredSalary,this.resumeView.skills=this.resume.skills,this.resumeView.about=this.resume.about}}},f=h,w=(s("e27f"),Object(d["a"])(f,o,l,!1,null,"0ed4968a",null)),g=w.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"text-center form-col-title"},[e._v("Сформированное резюме")]),s("div",[s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticClass:"resume-image rounded-circle mb-2",attrs:{src:e.resumeView.photoUrl,alt:"Image not found",onerror:"this.src='person.jpg';"}})]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Профессия: "+e._s(e.resumeView.profession))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Город: "+e._s(e.resumeView.city))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("ФИО: "+e._s(e.resumeView.name))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Номер телефона: "+e._s(e.resumeView.phone))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Email: "+e._s(e.resumeView.email))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Дата рождения: "+e._s(e.resumeView.birthday))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Образование: "+e._s(e.resumeView.educationLevel))])])]),e.resume.educationLevel!==e.educationLevels[0]&&""!==e.resume.educationLevel?s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Учебное заведение: "+e._s(e.resumeView.educationPlace))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Факультет: "+e._s(e.resumeView.educationFaculty))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Специализация: "+e._s(e.resumeView.educationSpecialization))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Год окончания: "+e._s(e.resumeView.educationEndDate))])])])]):e._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Желаемая зарплата: "+e._s(e.resumeView.desiredSalary))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Навыки: "+e._s(e.resumeView.skills))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("О себе: "+e._s(e.resumeView.about))])])]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.clearResumeTemplate}},[e._v("Очистить резюме")])])])},b=[],y={name:"ResumeTemplate",props:["resume","resumeView","educationLevels"],methods:{clearResumeTemplate:function(){this.resumeView.profession="",this.resumeView.city="",this.resumeView.photoUrl="",this.resumeView.name="",this.resumeView.phone="",this.resumeView.email="",this.resumeView.birthday="",this.resumeView.educationLevel="",this.resumeView.educationPlace="",this.resumeView.educationFaculty="",this.resumeView.educationSpecialization="",this.resumeView.educationEndDate="",this.resumeView.desiredSalary="",this.resumeView.skills="",this.resumeView.about=""}}},x=y,_=(s("22ea"),Object(d["a"])(x,C,b,!1,null,"7483d61f",null)),V=_.exports,S={data:function(){return{resume:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:"",desiredSalary:"",skills:"",about:""},resumeView:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:"",desiredSalary:"",skills:"",about:""},educationLevels:["Среднее","Среднее специальное","Неоконченное высшее","Высшее"]}},components:{resumeForm:g,resumeTemplate:V}},E=S,P=(s("8d1f"),Object(d["a"])(E,i,r,!1,null,"20b50270",null)),F=P.exports;new a["a"]({render:function(e){return e(F)}}).$mount("#app")},"735a":function(e,t,s){},7791:function(e,t,s){},"8d1f":function(e,t,s){"use strict";s("735a")},e27f:function(e,t,s){"use strict";s("7791")}});
//# sourceMappingURL=app.cc7e6bc0.js.map