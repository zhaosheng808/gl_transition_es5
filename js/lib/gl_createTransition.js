!function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=4)}([function(e,r){function t(e,r,t){this.shortMessage=r||"",this.longMessage=t||"",this.rawError=e||"",this.message="gl-shader: "+(r||e||"")+(t?"\n"+t:""),this.stack=(new Error).stack}t.prototype=new Error,t.prototype.name="GLError",t.prototype.constructor=t,e.exports=t},function(e,r,t){"use strict";function n(e,r){for(var t={},n=0;n<e.length;++n)for(var a=e[n].name,o=a.split("."),i=t,s=0;s<o.length;++s){var E=o[s].split("[");if(E.length>1){E[0]in i||(i[E[0]]=[]),i=i[E[0]];for(var _=1;_<E.length;++_){var u=parseInt(E[_]);_<E.length-1||s<o.length-1?(u in i||(_<E.length-1?i[u]=[]:i[u]={}),i=i[u]):i[u]=r?n:e[n].type}}else s<o.length-1?(E[0]in i||(i[E[0]]={}),i=i[E[0]]):i[E[0]]=r?n:e[n].type}return t}e.exports=n},function(e,r){e.exports=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]},function(e,r){e.exports=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]},function(e,r,t){"use strict";var n=t(5),a=function(e){return e&&e.__esModule?e:{default:e}}(n);window.gl_createTransition=a.default},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=t(6),o=function(e){return e&&e.__esModule?e:{default:e}}(a),i={cover:function(e){return".5+(uv-.5)*vec2(min(ratio/"+e+",1.),min("+e+"/ratio,1.))"},contain:function(e){return".5+(uv-.5)*vec2(max(ratio/"+e+",1.),max("+e+"/ratio,1.))"},stretch:function(){return"uv"}},s=function(e,r){var t=i[r];if(!t)throw new Error("invalid resizeMode="+r);return"precision highp float;varying vec2 _uv;uniform sampler2D from, to;uniform float progress, ratio, _fromR, _toR;vec4 getFromColor(vec2 uv){return texture2D(from,"+t("_fromR")+");}vec4 getToColor(vec2 uv){return texture2D(to,"+t("_toR")+");}\n"+e+"\nvoid main(){gl_FragColor=transition(_uv);}"};r.default=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n({resizeMode:"cover"},t),i=a.resizeMode,E=(0,o.default)(e,"attribute vec2 _p;\nvarying vec2 _uv;\nvoid main() {\ngl_Position = vec4(_p,0.0,1.0);\n_uv = vec2(0.5, 0.5) * (_p+vec2(1.0, 1.0));\n}",s(r.glsl,i));return E.bind(),E.attributes._p.pointer(),{draw:function(t,n,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.drawingBufferWidth,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.drawingBufferHeight,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};E.bind(),E.uniforms.ratio=o/i,E.uniforms.progress=t,E.uniforms.from=n.bind(0),E.uniforms.to=a.bind(1),E.uniforms._fromR=n.shape[0]/n.shape[1],E.uniforms._toR=a.shape[0]/a.shape[1];var _=2;for(var u in r.paramsTypes){var l=u in s?s[u]:r.defaultParams[u];if("sampler2D"===r.paramsTypes[u])if(l){if("function"!=typeof l.bind)throw new Error("uniform["+u+"]: A gl-texture2d API-like object was expected");E.uniforms[u]=l.bind(_++)}else console.warn("uniform["+u+"]: A texture MUST be defined for uniform sampler2D of a texture");else E.uniforms[u]=l}e.drawArrays(e.TRIANGLES,0,3)},dispose:function(){E.dispose()}}}},function(e,r,t){"use strict";function n(e){this.gl=e,this.gl.lastAttribCount=0,this._vref=this._fref=this._relink=this.vertShader=this.fragShader=this.program=this.attributes=this.uniforms=this.types=null}function a(e,r){return e.name<r.name?-1:1}function o(e,r,t,a,o){var i=new n(e);return i.update(r,t,a,o),i}var i=t(7),s=t(8),E=t(1),_=t(9),u=t(27),l=t(0),c=n.prototype;c.bind=function(){this.program||this._relink();var e,r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES),t=this.gl.lastAttribCount;if(r>t)for(e=t;e<r;e++)this.gl.enableVertexAttribArray(e);else if(t>r)for(e=r;e<t;e++)this.gl.disableVertexAttribArray(e);this.gl.lastAttribCount=r,this.gl.useProgram(this.program)},c.dispose=function(){for(var e=this.gl.lastAttribCount,r=0;r<e;r++)this.gl.disableVertexAttribArray(r);this.gl.lastAttribCount=0,this._fref&&this._fref.dispose(),this._vref&&this._vref.dispose(),this.attributes=this.types=this.vertShader=this.fragShader=this.program=this._relink=this._fref=this._vref=null},c.update=function(e,r,t,n){function o(){f.program=_.program(T,f._vref,f._fref,d,v);for(var e=0;e<t.length;++e)M[e]=T.getUniformLocation(f.program,t[e].name)}if(!r||1===arguments.length){var c=e;e=c.vertex,r=c.fragment,t=c.uniforms,n=c.attributes}var f=this,T=f.gl,g=f._vref;f._vref=_.shader(T,T.VERTEX_SHADER,e),g&&g.dispose(),f.vertShader=f._vref.shader;var A=this._fref;if(f._fref=_.shader(T,T.FRAGMENT_SHADER,r),A&&A.dispose(),f.fragShader=f._fref.shader,!t||!n){var p=T.createProgram();if(T.attachShader(p,f.fragShader),T.attachShader(p,f.vertShader),T.linkProgram(p),!T.getProgramParameter(p,T.LINK_STATUS)){var R=T.getProgramInfoLog(p);throw new l(R,"Error linking program:"+R)}t=t||u.uniforms(T,p),n=n||u.attributes(T,p),T.deleteProgram(p)}n=n.slice(),n.sort(a);var h,m=[],d=[],v=[];for(h=0;h<n.length;++h){var S=n[h];if(S.type.indexOf("mat")>=0){for(var I=0|S.type.charAt(S.type.length-1),N=new Array(I),C=0;C<I;++C)N[C]=v.length,d.push(S.name+"["+C+"]"),"number"==typeof S.location?v.push(S.location+C):Array.isArray(S.location)&&S.location.length===I&&"number"==typeof S.location[C]?v.push(0|S.location[C]):v.push(-1);m.push({name:S.name,type:S.type,locations:N})}else m.push({name:S.name,type:S.type,locations:[v.length]}),d.push(S.name),"number"==typeof S.location?v.push(0|S.location):v.push(-1)}var x=0;for(h=0;h<v.length;++h)if(v[h]<0){for(;v.indexOf(x)>=0;)x+=1;v[h]=x}var M=new Array(t.length);o(),f._relink=o,f.types={uniforms:E(t),attributes:E(n)},f.attributes=s(T,f,m,v),Object.defineProperty(f,"uniforms",i(T,f,t,M))},e.exports=o},function(e,r,t){"use strict";function n(e){return new Function("y","return function(){return y}")(e)}function a(e,r){for(var t=new Array(e),n=0;n<e;++n)t[n]=r;return t}function o(e,r,t,o){function E(t){return new Function("gl","wrapper","locations","return function(){return gl.getUniform(wrapper.program,locations["+t+"])}")(e,r,o)}function _(e,r,t){switch(t){case"bool":case"int":case"sampler2D":case"samplerCube":return"gl.uniform1i(locations["+r+"],obj"+e+")";case"float":return"gl.uniform1f(locations["+r+"],obj"+e+")";default:var n=t.indexOf("vec");if(!(0<=n&&n<=1&&t.length===4+n)){if(0===t.indexOf("mat")&&4===t.length){var a=t.charCodeAt(t.length-1)-48;if(a<2||a>4)throw new s("","Invalid uniform dimension type for matrix "+name+": "+t);return"gl.uniformMatrix"+a+"fv(locations["+r+"],false,obj"+e+")"}throw new s("","Unknown uniform data type for "+name+": "+t)}var a=t.charCodeAt(t.length-1)-48;if(a<2||a>4)throw new s("","Invalid data type");switch(t.charAt(0)){case"b":case"i":return"gl.uniform"+a+"iv(locations["+r+"],obj"+e+")";case"v":return"gl.uniform"+a+"fv(locations["+r+"],obj"+e+")";default:throw new s("","Unrecognized data type for vector "+name+": "+t)}}}function u(e,r){if("object"!=typeof r)return[[e,r]];var t=[];for(var n in r){var a=r[n],o=e;parseInt(n)+""===n?o+="["+n+"]":o+="."+n,"object"==typeof a?t.push.apply(t,u(o,a)):t.push([o,a])}return t}function l(r){for(var n=["return function updateProperty(obj){"],a=u("",r),i=0;i<a.length;++i){var s=a[i],E=s[0],l=s[1];o[l]&&n.push(_(E,l,t[l].type))}return n.push("return obj}"),new Function("gl","locations",n.join("\n"))(e,o)}function c(e){switch(e){case"bool":return!1;case"int":case"sampler2D":case"samplerCube":case"float":return 0;default:var r=e.indexOf("vec");if(0<=r&&r<=1&&e.length===4+r){var t=e.charCodeAt(e.length-1)-48;if(t<2||t>4)throw new s("","Invalid data type");return"b"===e.charAt(0)?a(t,!1):a(t,0)}if(0===e.indexOf("mat")&&4===e.length){var t=e.charCodeAt(e.length-1)-48;if(t<2||t>4)throw new s("","Invalid uniform dimension type for matrix "+name+": "+e);return a(t*t,0)}throw new s("","Unknown uniform data type for "+name+": "+e)}}function f(e,r,a){if("object"==typeof a){var i=T(a);Object.defineProperty(e,r,{get:n(i),set:l(a),enumerable:!0,configurable:!1})}else o[a]?Object.defineProperty(e,r,{get:E(a),set:l(a),enumerable:!0,configurable:!1}):e[r]=c(t[a].type)}function T(e){var r;if(Array.isArray(e)){r=new Array(e.length);for(var t=0;t<e.length;++t)f(r,t,e[t])}else{r={};for(var n in e)f(r,n,e[n])}return r}var g=i(t,!0);return{get:n(T(g)),set:l(g),enumerable:!0,configurable:!0}}var i=t(1),s=t(0);e.exports=o},function(e,r,t){"use strict";function n(e,r,t,n,a,o){this._gl=e,this._wrapper=r,this._index=t,this._locations=n,this._dimension=a,this._constFunc=o}function a(e,r,t,a,o,i,s){for(var E=["gl","v"],_=[],u=0;u<o;++u)E.push("x"+u),_.push("x"+u);E.push("if(x0.length===void 0){return gl.vertexAttrib"+o+"f(v,"+_.join()+")}else{return gl.vertexAttrib"+o+"fv(v,x0)}");var l=Function.apply(null,E),c=new n(e,r,t,a,o,l);Object.defineProperty(i,s,{set:function(r){return e.disableVertexAttribArray(a[t]),l(e,a[t],r),r},get:function(){return c},enumerable:!0})}function o(e,r,t,n,o,i,s){for(var E=new Array(o),_=new Array(o),u=0;u<o;++u)a(e,r,t[u],n,o,E,u),_[u]=E[u];Object.defineProperty(E,"location",{set:function(e){if(Array.isArray(e))for(var r=0;r<o;++r)_[r].location=e[r];else for(var r=0;r<o;++r)_[r].location=e+r;return e},get:function(){for(var e=new Array(o),r=0;r<o;++r)e[r]=n[t[r]];return e},enumerable:!0}),E.pointer=function(r,a,i,s){r=r||e.FLOAT,a=!!a,i=i||o*o,s=s||0;for(var E=0;E<o;++E){var _=n[t[E]];e.vertexAttribPointer(_,o,r,a,i,s+E*o),e.enableVertexAttribArray(_)}};var l=new Array(o),c=e["vertexAttrib"+o+"fv"];Object.defineProperty(i,s,{set:function(r){for(var a=0;a<o;++a){var i=n[t[a]];if(e.disableVertexAttribArray(i),Array.isArray(r[0]))c.call(e,i,r[a]);else{for(var s=0;s<o;++s)l[s]=r[o*a+s];c.call(e,i,l)}}return r},get:function(){return E},enumerable:!0})}function i(e,r,t,n){for(var i={},E=0,_=t.length;E<_;++E){var u=t[E],l=u.name,c=u.type,f=u.locations;switch(c){case"bool":case"int":case"float":a(e,r,f[0],n,1,i,l);break;default:if(c.indexOf("vec")>=0){var T=c.charCodeAt(c.length-1)-48;if(T<2||T>4)throw new s("","Invalid data type for attribute "+l+": "+c);a(e,r,f[0],n,T,i,l)}else{if(!(c.indexOf("mat")>=0))throw new s("","Unknown data type for attribute "+l+": "+c);var T=c.charCodeAt(c.length-1)-48;if(T<2||T>4)throw new s("","Invalid data type for attribute "+l+": "+c);o(e,r,f,n,T,i,l)}}}return i}e.exports=i;var s=t(0),E=n.prototype;E.pointer=function(e,r,t,n){var a=this,o=a._gl,i=a._locations[a._index];o.vertexAttribPointer(i,a._dimension,e||o.FLOAT,!!r,t||0,n||0),o.enableVertexAttribArray(i)},E.set=function(e,r,t,n){return this._constFunc(this._locations[this._index],e,r,t,n)},Object.defineProperty(E,"location",{get:function(){return this._locations[this._index]},set:function(e){return e!==this._locations[this._index]&&(this._locations[this._index]=0|e,this._wrapper.program=null),0|e}})},function(e,r,t){"use strict";function n(e,r,t,n,a,o,i){this.id=e,this.src=r,this.type=t,this.shader=n,this.count=o,this.programs=[],this.cache=i}function a(e){this.gl=e,this.shaders=[{},{}],this.programs={}}function o(e,r,t){var n=e.createShader(r);if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var a=e.getShaderInfoLog(n);try{var o=l(a,t,r)}catch(e){throw console.warn("Failed to format compiler error: "+e),new u(a,"Error compiling shader:\n"+a)}throw new u(a,o.short,o.long)}return n}function i(e,r,t,n,a){var o=e.createProgram();e.attachShader(o,r),e.attachShader(o,t);for(var i=0;i<n.length;++i)e.bindAttribLocation(o,a[i],n[i]);if(e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){var s=e.getProgramInfoLog(o);throw new u(s,"Error linking program: "+s)}return o}function s(e){var r=f.get(e);return r||(r=new a(e),f.set(e,r)),r}function E(e,r,t){return s(e).getShaderReference(r,t)}function _(e,r,t,n,a){return s(e).getProgram(r,t,n,a)}r.shader=E,r.program=_;var u=t(0),l=t(10),c="undefined"==typeof WeakMap?t(24):WeakMap,f=new c,T=0;n.prototype.dispose=function(){if(0==--this.count){for(var e=this.cache,r=e.gl,t=this.programs,n=0,a=t.length;n<a;++n){var o=e.programs[t[n]];o&&(delete e.programs[n],r.deleteProgram(o))}r.deleteShader(this.shader),delete e.shaders[this.type===r.FRAGMENT_SHADER|0][this.src]}};var g=a.prototype;g.getShaderReference=function(e,r){var t=this.gl,a=this.shaders[e===t.FRAGMENT_SHADER|0],i=a[r];if(i&&t.isShader(i.shader))i.count+=1;else{var s=o(t,e,r);i=a[r]=new n(T++,r,e,s,[],1,this)}return i},g.getProgram=function(e,r,t,n){var a=[e.id,r.id,t.join(":"),n.join(":")].join("@"),o=this.programs[a];return o&&this.gl.isProgram(o)||(this.programs[a]=o=i(this.gl,e.shader,r.shader,t,n),e.programs.push(a),r.programs.push(a)),o}},function(e,r,t){function n(e,r,t){"use strict";var n=i(r)||"of unknown name (see npm glsl-shader-name)",E="unknown type";void 0!==t&&(E=t===o.FRAGMENT_SHADER?"fragment":"vertex");for(var _=a("Error compiling %s shader %s:\n",E,n),u=a("%s%s",_,e),l=e.split("\n"),c={},f=0;f<l.length;f++){var T=l[f];if(""!==T&&"\0"!==T){var g=parseInt(T.split(":")[2]);if(isNaN(g))throw new Error(a("Could not parse error: %s",T));c[g]=T}}for(var A=s(r).split("\n"),f=0;f<A.length;f++)if(c[f+3]||c[f+2]||c[f+1]){var p=A[f];if(_+=p+"\n",c[f+1]){var R=c[f+1];R=R.substr(R.split(":",3).join(":").length+1).trim(),_+=a("^^^ %s\n\n",R)}}return{long:_.trim(),short:u.trim()}}var a=t(11).sprintf,o=t(12),i=t(14),s=t(21);e.exports=n},function(e,r,t){var n;!function(){"use strict";function a(e){return i(s(e),arguments)}function o(e,r){return a.apply(null,[e].concat(r||[]))}function i(e,r){var t,n,o,i,s,_,u,l,c,f=1,T=e.length,g="";for(n=0;n<T;n++)if("string"==typeof e[n])g+=e[n];else if(Array.isArray(e[n])){if(i=e[n],i[2])for(t=r[f],o=0;o<i[2].length;o++){if(!t.hasOwnProperty(i[2][o]))throw new Error(a('[sprintf] property "%s" does not exist',i[2][o]));t=t[i[2][o]]}else t=i[1]?r[i[1]]:r[f++];if(E.not_type.test(i[8])&&E.not_primitive.test(i[8])&&t instanceof Function&&(t=t()),E.numeric_arg.test(i[8])&&"number"!=typeof t&&isNaN(t))throw new TypeError(a("[sprintf] expecting number but found %T",t));switch(E.number.test(i[8])&&(l=t>=0),i[8]){case"b":t=parseInt(t,10).toString(2);break;case"c":t=String.fromCharCode(parseInt(t,10));break;case"d":case"i":t=parseInt(t,10);break;case"j":t=JSON.stringify(t,null,i[6]?parseInt(i[6]):0);break;case"e":t=i[7]?parseFloat(t).toExponential(i[7]):parseFloat(t).toExponential();break;case"f":t=i[7]?parseFloat(t).toFixed(i[7]):parseFloat(t);break;case"g":t=i[7]?String(Number(t.toPrecision(i[7]))):parseFloat(t);break;case"o":t=(parseInt(t,10)>>>0).toString(8);break;case"s":t=String(t),t=i[7]?t.substring(0,i[7]):t;break;case"t":t=String(!!t),t=i[7]?t.substring(0,i[7]):t;break;case"T":t=Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),t=i[7]?t.substring(0,i[7]):t;break;case"u":t=parseInt(t,10)>>>0;break;case"v":t=t.valueOf(),t=i[7]?t.substring(0,i[7]):t;break;case"x":t=(parseInt(t,10)>>>0).toString(16);break;case"X":t=(parseInt(t,10)>>>0).toString(16).toUpperCase()}E.json.test(i[8])?g+=t:(!E.number.test(i[8])||l&&!i[3]?c="":(c=l?"+":"-",t=t.toString().replace(E.sign,"")),_=i[4]?"0"===i[4]?"0":i[4].charAt(1):" ",u=i[6]-(c+t).length,s=i[6]&&u>0?_.repeat(u):"",g+=i[5]?c+t+s:"0"===_?c+s+t:s+c+t)}return g}function s(e){if(_[e])return _[e];for(var r,t=e,n=[],a=0;t;){if(null!==(r=E.text.exec(t)))n.push(r[0]);else if(null!==(r=E.modulo.exec(t)))n.push("%");else{if(null===(r=E.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){a|=1;var o=[],i=r[2],s=[];if(null===(s=E.key.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o.push(s[1]);""!==(i=i.substring(s[0].length));)if(null!==(s=E.key_access.exec(i)))o.push(s[1]);else{if(null===(s=E.index_access.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");o.push(s[1])}r[2]=o}else a|=2;if(3===a)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push(r)}t=t.substring(r[0].length)}return _[e]=n}var E={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/},_=Object.create(null);r.sprintf=a,r.vsprintf=o,"undefined"!=typeof window&&(window.sprintf=a,window.vsprintf=o,void 0!==(n=function(){return{sprintf:a,vsprintf:o}}.call(r,t,r,e))&&(e.exports=n))}()},function(e,r,t){var n=t(13);e.exports=function(e){return n[e]}},function(e,r){e.exports={0:"NONE",1:"ONE",2:"LINE_LOOP",3:"LINE_STRIP",4:"TRIANGLES",5:"TRIANGLE_STRIP",6:"TRIANGLE_FAN",256:"DEPTH_BUFFER_BIT",512:"NEVER",513:"LESS",514:"EQUAL",515:"LEQUAL",516:"GREATER",517:"NOTEQUAL",518:"GEQUAL",519:"ALWAYS",768:"SRC_COLOR",769:"ONE_MINUS_SRC_COLOR",770:"SRC_ALPHA",771:"ONE_MINUS_SRC_ALPHA",772:"DST_ALPHA",773:"ONE_MINUS_DST_ALPHA",774:"DST_COLOR",775:"ONE_MINUS_DST_COLOR",776:"SRC_ALPHA_SATURATE",1024:"STENCIL_BUFFER_BIT",1028:"FRONT",1029:"BACK",1032:"FRONT_AND_BACK",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",2304:"CW",2305:"CCW",2849:"LINE_WIDTH",2884:"CULL_FACE",2885:"CULL_FACE_MODE",2886:"FRONT_FACE",2928:"DEPTH_RANGE",2929:"DEPTH_TEST",2930:"DEPTH_WRITEMASK",2931:"DEPTH_CLEAR_VALUE",2932:"DEPTH_FUNC",2960:"STENCIL_TEST",2961:"STENCIL_CLEAR_VALUE",2962:"STENCIL_FUNC",2963:"STENCIL_VALUE_MASK",2964:"STENCIL_FAIL",2965:"STENCIL_PASS_DEPTH_FAIL",2966:"STENCIL_PASS_DEPTH_PASS",2967:"STENCIL_REF",2968:"STENCIL_WRITEMASK",2978:"VIEWPORT",3024:"DITHER",3042:"BLEND",3088:"SCISSOR_BOX",3089:"SCISSOR_TEST",3106:"COLOR_CLEAR_VALUE",3107:"COLOR_WRITEMASK",3317:"UNPACK_ALIGNMENT",3333:"PACK_ALIGNMENT",3379:"MAX_TEXTURE_SIZE",3386:"MAX_VIEWPORT_DIMS",3408:"SUBPIXEL_BITS",3410:"RED_BITS",3411:"GREEN_BITS",3412:"BLUE_BITS",3413:"ALPHA_BITS",3414:"DEPTH_BITS",3415:"STENCIL_BITS",3553:"TEXTURE_2D",4352:"DONT_CARE",4353:"FASTEST",4354:"NICEST",5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5124:"INT",5125:"UNSIGNED_INT",5126:"FLOAT",5386:"INVERT",5890:"TEXTURE",6401:"STENCIL_INDEX",6402:"DEPTH_COMPONENT",6406:"ALPHA",6407:"RGB",6408:"RGBA",6409:"LUMINANCE",6410:"LUMINANCE_ALPHA",7680:"KEEP",7681:"REPLACE",7682:"INCR",7683:"DECR",7936:"VENDOR",7937:"RENDERER",7938:"VERSION",9728:"NEAREST",9729:"LINEAR",9984:"NEAREST_MIPMAP_NEAREST",9985:"LINEAR_MIPMAP_NEAREST",9986:"NEAREST_MIPMAP_LINEAR",9987:"LINEAR_MIPMAP_LINEAR",10240:"TEXTURE_MAG_FILTER",10241:"TEXTURE_MIN_FILTER",10242:"TEXTURE_WRAP_S",10243:"TEXTURE_WRAP_T",10497:"REPEAT",10752:"POLYGON_OFFSET_UNITS",16384:"COLOR_BUFFER_BIT",32769:"CONSTANT_COLOR",32770:"ONE_MINUS_CONSTANT_COLOR",32771:"CONSTANT_ALPHA",32772:"ONE_MINUS_CONSTANT_ALPHA",32773:"BLEND_COLOR",32774:"FUNC_ADD",32777:"BLEND_EQUATION_RGB",32778:"FUNC_SUBTRACT",32779:"FUNC_REVERSE_SUBTRACT",32819:"UNSIGNED_SHORT_4_4_4_4",32820:"UNSIGNED_SHORT_5_5_5_1",32823:"POLYGON_OFFSET_FILL",32824:"POLYGON_OFFSET_FACTOR",32854:"RGBA4",32855:"RGB5_A1",32873:"TEXTURE_BINDING_2D",32926:"SAMPLE_ALPHA_TO_COVERAGE",32928:"SAMPLE_COVERAGE",32936:"SAMPLE_BUFFERS",32937:"SAMPLES",32938:"SAMPLE_COVERAGE_VALUE",32939:"SAMPLE_COVERAGE_INVERT",32968:"BLEND_DST_RGB",32969:"BLEND_SRC_RGB",32970:"BLEND_DST_ALPHA",32971:"BLEND_SRC_ALPHA",33071:"CLAMP_TO_EDGE",33170:"GENERATE_MIPMAP_HINT",33189:"DEPTH_COMPONENT16",33306:"DEPTH_STENCIL_ATTACHMENT",33635:"UNSIGNED_SHORT_5_6_5",33648:"MIRRORED_REPEAT",33901:"ALIASED_POINT_SIZE_RANGE",33902:"ALIASED_LINE_WIDTH_RANGE",33984:"TEXTURE0",33985:"TEXTURE1",33986:"TEXTURE2",33987:"TEXTURE3",33988:"TEXTURE4",33989:"TEXTURE5",33990:"TEXTURE6",33991:"TEXTURE7",33992:"TEXTURE8",33993:"TEXTURE9",33994:"TEXTURE10",33995:"TEXTURE11",33996:"TEXTURE12",33997:"TEXTURE13",33998:"TEXTURE14",33999:"TEXTURE15",34e3:"TEXTURE16",34001:"TEXTURE17",34002:"TEXTURE18",34003:"TEXTURE19",34004:"TEXTURE20",34005:"TEXTURE21",34006:"TEXTURE22",34007:"TEXTURE23",34008:"TEXTURE24",34009:"TEXTURE25",34010:"TEXTURE26",34011:"TEXTURE27",34012:"TEXTURE28",34013:"TEXTURE29",34014:"TEXTURE30",34015:"TEXTURE31",34016:"ACTIVE_TEXTURE",34024:"MAX_RENDERBUFFER_SIZE",34041:"DEPTH_STENCIL",34055:"INCR_WRAP",34056:"DECR_WRAP",34067:"TEXTURE_CUBE_MAP",34068:"TEXTURE_BINDING_CUBE_MAP",34069:"TEXTURE_CUBE_MAP_POSITIVE_X",34070:"TEXTURE_CUBE_MAP_NEGATIVE_X",34071:"TEXTURE_CUBE_MAP_POSITIVE_Y",34072:"TEXTURE_CUBE_MAP_NEGATIVE_Y",34073:"TEXTURE_CUBE_MAP_POSITIVE_Z",34074:"TEXTURE_CUBE_MAP_NEGATIVE_Z",34076:"MAX_CUBE_MAP_TEXTURE_SIZE",34338:"VERTEX_ATTRIB_ARRAY_ENABLED",34339:"VERTEX_ATTRIB_ARRAY_SIZE",34340:"VERTEX_ATTRIB_ARRAY_STRIDE",34341:"VERTEX_ATTRIB_ARRAY_TYPE",34342:"CURRENT_VERTEX_ATTRIB",34373:"VERTEX_ATTRIB_ARRAY_POINTER",34466:"NUM_COMPRESSED_TEXTURE_FORMATS",34467:"COMPRESSED_TEXTURE_FORMATS",34660:"BUFFER_SIZE",34661:"BUFFER_USAGE",34816:"STENCIL_BACK_FUNC",34817:"STENCIL_BACK_FAIL",34818:"STENCIL_BACK_PASS_DEPTH_FAIL",34819:"STENCIL_BACK_PASS_DEPTH_PASS",34877:"BLEND_EQUATION_ALPHA",34921:"MAX_VERTEX_ATTRIBS",34922:"VERTEX_ATTRIB_ARRAY_NORMALIZED",34930:"MAX_TEXTURE_IMAGE_UNITS",34962:"ARRAY_BUFFER",34963:"ELEMENT_ARRAY_BUFFER",34964:"ARRAY_BUFFER_BINDING",34965:"ELEMENT_ARRAY_BUFFER_BINDING",34975:"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",35040:"STREAM_DRAW",35044:"STATIC_DRAW",35048:"DYNAMIC_DRAW",35632:"FRAGMENT_SHADER",35633:"VERTEX_SHADER",35660:"MAX_VERTEX_TEXTURE_IMAGE_UNITS",35661:"MAX_COMBINED_TEXTURE_IMAGE_UNITS",35663:"SHADER_TYPE",35664:"FLOAT_VEC2",35665:"FLOAT_VEC3",35666:"FLOAT_VEC4",35667:"INT_VEC2",35668:"INT_VEC3",35669:"INT_VEC4",35670:"BOOL",35671:"BOOL_VEC2",35672:"BOOL_VEC3",35673:"BOOL_VEC4",35674:"FLOAT_MAT2",35675:"FLOAT_MAT3",35676:"FLOAT_MAT4",35678:"SAMPLER_2D",35680:"SAMPLER_CUBE",35712:"DELETE_STATUS",35713:"COMPILE_STATUS",35714:"LINK_STATUS",35715:"VALIDATE_STATUS",35716:"INFO_LOG_LENGTH",35717:"ATTACHED_SHADERS",35718:"ACTIVE_UNIFORMS",35719:"ACTIVE_UNIFORM_MAX_LENGTH",35720:"SHADER_SOURCE_LENGTH",35721:"ACTIVE_ATTRIBUTES",35722:"ACTIVE_ATTRIBUTE_MAX_LENGTH",35724:"SHADING_LANGUAGE_VERSION",35725:"CURRENT_PROGRAM",36003:"STENCIL_BACK_REF",36004:"STENCIL_BACK_VALUE_MASK",36005:"STENCIL_BACK_WRITEMASK",36006:"FRAMEBUFFER_BINDING",36007:"RENDERBUFFER_BINDING",36048:"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",36049:"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",36050:"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",36051:"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",36053:"FRAMEBUFFER_COMPLETE",36054:"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",36055:"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",36057:"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",36061:"FRAMEBUFFER_UNSUPPORTED",36064:"COLOR_ATTACHMENT0",36096:"DEPTH_ATTACHMENT",36128:"STENCIL_ATTACHMENT",36160:"FRAMEBUFFER",36161:"RENDERBUFFER",36162:"RENDERBUFFER_WIDTH",36163:"RENDERBUFFER_HEIGHT",36164:"RENDERBUFFER_INTERNAL_FORMAT",36168:"STENCIL_INDEX8",36176:"RENDERBUFFER_RED_SIZE",36177:"RENDERBUFFER_GREEN_SIZE",36178:"RENDERBUFFER_BLUE_SIZE",36179:"RENDERBUFFER_ALPHA_SIZE",36180:"RENDERBUFFER_DEPTH_SIZE",36181:"RENDERBUFFER_STENCIL_SIZE",36194:"RGB565",36336:"LOW_FLOAT",36337:"MEDIUM_FLOAT",36338:"HIGH_FLOAT",36339:"LOW_INT",36340:"MEDIUM_INT",36341:"HIGH_INT",36346:"SHADER_COMPILER",36347:"MAX_VERTEX_UNIFORM_VECTORS",36348:"MAX_VARYING_VECTORS",36349:"MAX_FRAGMENT_UNIFORM_VECTORS",37440:"UNPACK_FLIP_Y_WEBGL",37441:"UNPACK_PREMULTIPLY_ALPHA_WEBGL",37442:"CONTEXT_LOST_WEBGL",37443:"UNPACK_COLORSPACE_CONVERSION_WEBGL",37444:"BROWSER_DEFAULT_WEBGL"}},function(e,r,t){function n(e){for(var r=Array.isArray(e)?e:a(e),t=0;t<r.length;t++){var n=r[t];if("preprocessor"===n.type){var i=n.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/);if(i&&i[2]){var s=i[1],E=i[2];return(s?o(E):E).trim()}}}}var a=t(15),o=t(20);e.exports=n},function(e,r,t){function n(e,r){var t=a(r),n=[];return n=n.concat(t(e)),n=n.concat(t(null))}var a=t(16);e.exports=n},function(e,r,t){function n(e){function r(e){e.length&&H.push({type:S[X],data:e,position:W,line:j,column:k})}function t(e){w=0,z+=e,B=z.length;for(var r;b=z[w],w<B;){switch(r=w,X){case l:w=M();break;case c:w=x();break;case f:w=C();break;case T:w=L();break;case g:w=U();break;case v:w=O();break;case A:w=F();break;case u:w=D();break;case m:w=N();break;case _:w=I()}if(r!==w)switch(z[r]){case"\n":k=0,++j;break;default:++k}}return V+=w,z=z.slice(w),H}function n(e){return G.length&&r(G.join("")),X=d,r("(eof)"),H}function I(){return G=G.length?[]:G,"/"===y&&"*"===b?(W=V+w-1,X=l,y=b,w+1):"/"===y&&"/"===b?(W=V+w-1,X=c,y=b,w+1):"#"===b?(X=f,W=V+w,w):/\s/.test(b)?(X=m,W=V+w,w):(Y=/\d/.test(b),K=/[^\w_]/.test(b),W=V+w,X=Y?g:K?T:u,w)}function N(){return/[^\s]/g.test(b)?(r(G.join("")),X=_,w):(G.push(b),y=b,w+1)}function C(){return"\r"!==b&&"\n"!==b||"\\"===y?(G.push(b),y=b,w+1):(r(G.join("")),X=_,w)}function x(){return C()}function M(){return"/"===b&&"*"===y?(G.push(b),r(G.join("")),X=_,w+1):(G.push(b),y=b,w+1)}function L(){if("."===y&&/\d/.test(b))return X=A,w;if("/"===y&&"*"===b)return X=l,w;if("/"===y&&"/"===b)return X=c,w;if("."===b&&G.length){for(;P(G););return X=A,w}if(";"===b||")"===b||"("===b){if(G.length)for(;P(G););return r(b),X=_,w+1}var e=2===G.length&&"="!==b;if(/[\w_\d\s]/.test(b)||e){for(;P(G););return X=_,w}return G.push(b),y=b,w+1}function P(e){for(var t,n,a=0;;){if(t=o.indexOf(e.slice(0,e.length+a).join("")),n=o[t],-1===t){if(a--+e.length>0)continue;n=e.slice(0,1).join("")}return r(n),W+=n.length,G=G.slice(n.length),G.length}}function O(){return/[^a-fA-F0-9]/.test(b)?(r(G.join("")),X=_,w):(G.push(b),y=b,w+1)}function U(){return"."===b?(G.push(b),X=A,y=b,w+1):/[eE]/.test(b)?(G.push(b),X=A,y=b,w+1):"x"===b&&1===G.length&&"0"===G[0]?(X=v,G.push(b),y=b,w+1):/[^\d]/.test(b)?(r(G.join("")),X=_,w):(G.push(b),y=b,w+1)}function F(){return"f"===b&&(G.push(b),y=b,w+=1),/[eE]/.test(b)?(G.push(b),y=b,w+1):"-"===b&&/[eE]/.test(y)?(G.push(b),y=b,w+1):/[^\d]/.test(b)?(r(G.join("")),X=_,w):(G.push(b),y=b,w+1)}function D(){if(/[^\d\w_]/.test(b)){var e=G.join("");return X=Q.indexOf(e)>-1?h:Z.indexOf(e)>-1?R:p,r(G.join("")),X=_,w}return G.push(b),y=b,w+1}var b,y,B,w=0,V=0,X=_,G=[],H=[],j=1,k=0,W=0,Y=!1,K=!1,z="";e=e||{};var Z=i,Q=a;return"300 es"===e.version&&(Z=E,Q=s),function(e){return H=[],null!==e?t(e.replace?e.replace(/\r\n/g,"\n"):e):n()}}e.exports=n;var a=t(2),o=t(17),i=t(3),s=t(18),E=t(19),_=999,u=9999,l=0,c=1,f=2,T=3,g=4,A=5,p=6,R=7,h=8,m=9,d=10,v=11,S=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]},function(e,r){e.exports=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]},function(e,r,t){var n=t(2);e.exports=n.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"])},function(e,r,t){var n=t(3);n=n.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)}),e.exports=n.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"])},function(e,r){e.exports=function(e){return atob(e)}},function(e,r,t){function n(e,r,t){r="number"==typeof r?r:1,t=t||": ";var n=e.split(/\r?\n/),o=String(n.length+r-1).length;return n.map(function(e,n){var i=n+r,s=String(i).length;return a(i,o-s)+t+e}).join("\n")}var a=t(22);e.exports=n},function(e,r,t){"use strict";/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */
var n=t(23);e.exports=function(e,r,t){return t=void 0!==t?t+"":" ",n(t,r)+e}},function(e,r,t){"use strict";function n(e,r){if("string"!=typeof e)throw new TypeError("expected a string");if(1===r)return e;if(2===r)return e+e;var t=e.length*r;if(a!==e||void 0===a)a=e,o="";else if(o.length>=t)return o.substr(0,t);for(;t>o.length&&r>1;)1&r&&(o+=e),r>>=1,e+=e;return o+=e,o=o.substr(0,t)}/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var a,o="";e.exports=n},function(e,r,t){function n(){var e=a();return{get:function(r,t){var n=e(r);return n.hasOwnProperty("value")?n.value:t},set:function(r,t){return e(r).value=t,this},has:function(r){return"value"in e(r)},delete:function(r){return delete e(r).value}}}var a=t(25);e.exports=n},function(e,r,t){function n(){var e={};return function(r){if(("object"!=typeof r||null===r)&&"function"!=typeof r)throw new Error("Weakmap-shim: Key must be object");var t=r.valueOf(e);return t&&t.identity===e?t:a(r,e)}}var a=t(26);e.exports=n},function(e,r){function t(e,r){var t={identity:r},n=e.valueOf;return Object.defineProperty(e,"valueOf",{value:function(e){return e!==r?n.apply(this,arguments):t},writable:!0}),t}e.exports=t},function(e,r,t){"use strict";function n(e,r){if(!s){var t=Object.keys(i);s={};for(var n=0;n<t.length;++n){var a=t[n];s[e[a]]=i[a]}}return s[r]}function a(e,r){for(var t=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),a=[],o=0;o<t;++o){var i=e.getActiveUniform(r,o);if(i){var s=n(e,i.type);if(i.size>1)for(var E=0;E<i.size;++E)a.push({name:i.name.replace("[0]","["+E+"]"),type:s});else a.push({name:i.name,type:s})}}return a}function o(e,r){for(var t=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),a=[],o=0;o<t;++o){var i=e.getActiveAttrib(r,o);i&&a.push({name:i.name,type:n(e,i.type)})}return a}r.uniforms=a,r.attributes=o;var i={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube"},s=null}]);
//# sourceMappingURL=index.js.map?b1aa8e67