/**
 * 客户端
 */

// 引入系统模块以及工具生成的代码
var Tars = require("@tars/rpc").client;
var TRom = require("./NodeJsCommProxy.js").TRom;
var tarsRegistry = require('@tars/registry');

// 从配置文件中获取locator地址
var Config = require('@tars/utils').Config;
var config = new Config();
config.parseFile('./config.conf', 'utf8');
var locator = config.get('tars.application.client.locator');
console.log('tars.application.client.locator: ', locator);

// 设置注册中心地址
tarsRegistry.setLocator(locator);

console.log(tarsRegistry.initialize);
console.log(tarsRegistry._locator);
console.log(typeof (tarsRegistry));

// 从注册中心中获取到对应对象的地址列表
var serverObj = tarsRegistry.findObjectById('TRom.NodeJsTestServer.NodeJsCommObj');
serverObj.then(function (value) {
    console.log(value.response.return.value)
    return value.response.return.value
}).then(function (value) {

    var host = value[0].host
    var port = value[0].port

    var prx = Tars.stringToProxy(TRom.NodeJsCommProxy, "TRom.NodeJsTestServer.NodeJsCommObj@tcp -h " + host + " -t 60000 -p " + port);

    // 客户端调用采用Promise机制进行回调，这里编写成功以及失败的回调函数
    var success = function (result) {
        console.log("result.response.costtime:", result.response.costtime);
        console.log("result.response.return:", result.response.return);
        console.log("result.response.arguments.back:", result.response.arguments.back);
    }

    var error = function (result) {
        console.log("result.response.costtime:", result.response.costtime);
        console.log("result.response.error.code:", result.response.error.code);
        console.log("result.response.error.message:", result.response.error.message);
    }
    // 初始化接口参数，开始调用RPC接口
    var stUser = new TRom.User_t();
    stUser.name = "tencent-mig";

    prx.getall(stUser).then(success, error).done();

}).catch(function (reason) {
    console.log(reason)
});
