//STEP01 引入系统模块以及工具生成的代码
var Tars  = require("@tars/rpc").client;
var TRom = require("./NodeJsCommProxy.js").TRom;
 
//STEP02 初始化Tars客户端
//       该步骤非必选项，后续文档将介绍[tars].client.initialize函数在什么情况下需要调用以及它做了哪些工作
//       initialize函数只需调用一次，初始化之后全局可用
//       在演示程序中我们不需要使用过多的特性，所以先将其注释
//Tars.initialize("./config.conf");
 
//STEP03 生成服务端调用代理类实例
var prx = Tars.stringToProxy(TRom.NodeJsCommProxy, "TRom.NodeJsTestServer.NodeJsCommObj@tcp -h 127.0.0.1 -p 14003 -t 60000");
 
//STEP04 客户端调用采用Promise机制进行回调，这里编写成功以及失败的回调函数
var success = function (result) {
    console.log("result.response.costtime:",    		result.response.costtime);
    console.log("result.response.return:",      		result.response.return);
    console.log("result.response.arguments.stResult:",  result.response.arguments.stResult);
}
 
var error = function (result) {
    console.log("result.response.costtime:",			result.response.costtime);
    console.log("result.response.error.code:",         	result.response.error.code);
    console.log("result.response.error.message:",       result.response.error.message);
}
 
//STEP05 初始化接口参数，开始调用RPC接口
var stUser = new TRom.User_t();
stUser.name = "tencent-mig";
 
prx.getall(stUser).then(success, error).done();