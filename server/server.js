var Tars = require("@tars/rpc").server;
var TRom = require("./NodeJsCommImp.js").TRom;

/**
 * 创建方式 1
 */
var svr = Tars.createServer(TRom.NodeJsCommImp);
svr.start({
    name: "TRom.NodeJsTestServer.NodeJsCommObjAdapetr",
    servant: "TRom.NodeJsTestServer.NodeJsCommObj",
    endpoint: "tcp -h 127.0.0.1 -p 14003 -t 10000",
    protocol: "tars",
    maxconns: 200000
});
console.log("server started.");


 /**
 * 创建方式 2
 */
// //STEP02 创建一个服务的实例
// var svr = new Tars.server();
// svr.initialize("./TRom.NodeJsTestServer.config.conf", function (server){
//     server.addServant(TRom.NodeJsCommImp, server.Application + "." + server.ServerName + ".NodeJsCommObj");
// });
 
// //STEP03 上步初始化服务之后，开始启动服务
// svr.start();
/**
 * 创建方式 2： 部分启动
 */
//STEP01 引入关键模块
 
// Tars.server.getServant("./TRom.NodeJsTestServer.config.conf").forEach(function (config){
//     var svr, map;
//     map = {
//         'TRom.NodeJsTestServer.NodeJsCommObj' : TRom.NodeJsCommImp
//     };
 
//     svr = Tars.server.createServer(map[config.servant]);
//     svr.start(config);
// });


 /**
 * 创建方式 3
 */
// //STEP02 创建一个服务的实例
// //注意这里的配置，在正式环境时，用 process.env.TARS_CONFIG 来表示配置文件的路径
// var svr = new Tars.server();
// svr.initialize(process.env.TARS_CONFIG, function (server){
//     server.addServant(TRom.NodeJsCommImp, server.Application + "." + server.ServerName + ".NodeJsCommObj");
// });
 
// //STEP03 上步初始化服务之后，开始启动服务
// svr.start();