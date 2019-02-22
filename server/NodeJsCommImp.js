var TRom = require('./NodeJsComm.js').TRom;
module.exports.TRom = TRom;

TRom.NodeJsCommImp.prototype.initialize = function () {
    //TODO::

}

TRom.NodeJsCommImp.prototype.test = function (current) {
    //TODO::

}

TRom.NodeJsCommImp.prototype.getall = function (current, stUser, stResult) {
    //TODO::
    //初始时，每个RPC函数都为空，需要开发者自己完形填空，补齐这里缺失的业务逻辑。
    //补齐业务逻辑之后，开发者调用current的sendResponse函数，返回数据给调用方。
    //需要注意:每个函数的sendResponse都是不一样的，它的参数与当前函数的 返回值 和 出参 相对应。
    //         如果当前函数有返回值，那么current.sendResponse的第一个参数应该是该返回。示例中当前函数的返回值为int类型，我们返回200作为示例。
    //         解决返回值的问题之后，我们按顺序写入当前的出参即可。参数的编解码和网络传输由框架解决。

    stResult.id = 10000;
    stResult.iLevel = 1000122;

    current.sendResponse(200, stResult);
}

TRom.NodeJsCommImp.prototype.getUsrName = function (current, sUsrName, sValue1, sValue2) {
    //TODO::

}

TRom.NodeJsCommImp.prototype.secRequest = function (current, binRequest, binResponse) {
    //TODO::

}