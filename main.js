var r = /\b[a-zA-Z0-9]+\(\.+\)\b/;
var s = "getYaw(par1Object);获取实体的横向视角par1Object为实体preventDefault();阻止默认操作print(par1String);在游戏中输出Toast，就是提示栏par1String为内容rideAnimal(par1Object, par2Object);实体骑实体par1Object为实体par2Object为被骑的实体setNightMode(par1boolean);晚上模式par1boolean为布尔值，true或false";
console.log(s.split(r));
console.log("getPlayerEnt(re,er);".split(/\b[a-zA-Z0-9]+\b/));
var v = {
	TextView:
	{
		setText:function() {},
		setTextColor:function() {},
		setTypeface:function() {},
		setBackground:function() {},
		setBackgroundColor:function() {},
		setOnClickListener:function() {},
     setWidth:function() {},
	setHeight:function(){}
		}}
