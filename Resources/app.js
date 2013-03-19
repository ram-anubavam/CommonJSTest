var global = 0;
var JJ = require('commonjs');
var win = Ti.UI.createWindow({backgroundColor:'#FFF',layout:'vertical'});

var bu = Ti.UI.createButton({title:"Click"});
win.add(bu);
var sc = Ti.UI.createScrollView({layout:'vertical',top:10});
win.add(sc);
bu.addEventListener('click',function(){

var c = '#FF0000';

if(global == 1){
	c = '#00FF00';
}
else if(global == 2){
	c = '#0000FF';
}
else if(global == 3){
	c = '#F000F0';
}
else if(global == 4){
	c = '#F0000F';
}
else if(global == 5){
	c = '#FAA000';
	global = 0;
}

var vi = require('commonjs').MyFunc.getSuperView(c);
sc.add(vi);
global++;
alert(sc.children.length + ":::" + sc.children[0].children.length);
if(sc.children.length > 1)
{
	sc.remove(sc.children[0]);
}

});

win.open();
