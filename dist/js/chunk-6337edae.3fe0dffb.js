(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6337edae"],{"40a0":function(s,o,i){},"4fc4":function(s,o,i){"use strict";i.r(o);var a=function(){var s=this,o=s.$createElement,i=s._self._c||o;return i("div",{staticClass:"single"},[i("div",{staticClass:"container"},[i("div",{staticClass:"single--container"},[i("p",{staticClass:"back"},[i("a",{attrs:{href:"javascript:;"},on:{click:function(o){return s.$router.go(-1)}}},[i("i",{staticClass:"el-icon-back"}),s._v("Regresar ")])]),i("h1",{staticClass:"title text-blue"},[s._v("Respuesta para tu Asesoria")]),i("p",[s._v(" "+s._s(null==s.listAsesoriaAbogado||void 0==s.listAsesoriaAbogado||0==s.listAsesoriaAbogado.length?"":s.listAsesoriaAbogado.ubigeo2.nombre)+" - "+s._s(null==s.listAsesoriaAbogado||void 0==s.listAsesoriaAbogado||0==s.listAsesoriaAbogado.length?"":s.listAsesoriaAbogado.ubigeo1.nombre)+" - "+s._s(null==s.listAsesoriaAbogado||void 0==s.listAsesoriaAbogado||0==s.listAsesoriaAbogado.length?"":s.listAsesoriaAbogado.ubigeo.nombre)+" ")]),i("br"),i("output",[s._v(" "+s._s(null==s.listAsesoriaAbogado||void 0==s.listAsesoriaAbogado||0==s.listAsesoriaAbogado.length?"":s.listAsesoriaAbogado.asesoria.descripción_solicitante)+" ")]),i("div",[i("el-form",{ref:"listUpAsesoriaAbogado",attrs:{"label-position":s.labelPosition,model:s.listUpAsesoriaAbogado,"label-width":"100px","hide-required-asterisk":""}},[i("el-form-item",{attrs:{label:"Respuesta",prop:"descripción_solicitante"}},[i("output",[s._v(" "+s._s(null==s.listAsesoriaAbogado||void 0==s.listAsesoriaAbogado||0==s.listAsesoriaAbogado.length?"":s.listAsesoriaAbogado.descripción_asistente)+" ")])]),i("el-form-item",{staticClass:"element-right"},[i("router-link",{attrs:{to:"/cita/"+(null==s.listAsesoriaAbogado||void 0==s.listAsesoriaAbogado||0==s.listAsesoriaAbogado.length?"":s.listAsesoriaAbogado.id_asesoria_abogado)}},[i("el-button",{attrs:{type:"primary",round:""}},[s._v("Reservar cita")])],1)],1)],1)],1)])])])},t=[],e={props:["id","userlogin"],components:{},created:function(){document.body.style.backgroundColor="#fff",this.getAsesoriaAbogado(),this.listUpAsesoriaAbogado.id_asesoria_abogado=this.id},data:function(){return{envio:"",listAsesoriaAbogado:null,labelPosition:"top",showModal:null,showModalSend:null,listUpAsesoriaAbogado:{id_asesoria_abogado:"null",respuesta:null}}},computed:{},methods:{getAsesoriaAbogado:function(){var s=this,o=this.$route.params.id,i="/getAsesoriaAbogado/00/00/00/"+o;this.$http.get(i).then((function(o){s.listAsesoriaAbogado=o.data.resultado[0],null==s.listUpAsesoriaAbogado.respuesta&&(s.listUpAsesoriaAbogado.respuesta=o.data.resultado[0].asesoria.descripción_asistente)})).catch((function(s){console.log(s)}))},close:function(){this.showModal=!1}}},l=e,r=(i("f243"),i("e31e"),i("2877")),n=Object(r["a"])(l,a,t,!1,null,"7db1fe7e",null);o["default"]=n.exports},"6eb7":function(s,o,i){},e31e:function(s,o,i){"use strict";var a=i("6eb7"),t=i.n(a);t.a},f243:function(s,o,i){"use strict";var a=i("40a0"),t=i.n(a);t.a}}]);
//# sourceMappingURL=chunk-6337edae.3fe0dffb.js.map