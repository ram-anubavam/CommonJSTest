exports.MyFunc = new function(){
	this.superView = null;
	this.getSuperView = function(c){
		this.superView = Ti.UI.createView({backgroundColor:c,height: Ti.UI.SIZE, width:Ti.UI.FILL,layout:'vertical',top:10});
		for(var i=0;i<=999;i++){
		var myView = Ti.UI.createView({borderColor:"#000",backgroundColor:c,borderRadius:2,height:120,width:1000});
		this.superView.add(myView);
		}
		return this.superView;
	};
};


