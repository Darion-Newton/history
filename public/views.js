var doT = (function(){
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['directory-list-item']=function anonymous(it) {
var out='';if(it.ext === ""){out+='<div><a href="'+(it.path.nav)+'">'+(it.name)+(it.ext)+'</a></div>';}else{out+='<div>'+(it.name)+(it.ext)+'</div>';}return out;
};
return tmpl;})();