﻿// **********************************************************************
// Parsed By TarsParser(1.1.0), Generated By tars2node(20190109)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "NodeJsComm.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var TRom = TRom || {};
module.exports.TRom = TRom;

TRom.NodeJsCommProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

TRom.NodeJsCommProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

TRom.NodeJsCommProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

TRom.NodeJsCommProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

TRom.NodeJsCommProxy.prototype.getVersion = function () {
    return this._worker.version;
};

TRom.User_t = function() {
    this.id = 0;
    this.score = 0;
    this.name = "";
    this._classname = "TRom.User_t";
};
TRom.User_t._classname = "TRom.User_t";
TRom.User_t._write = function (os, tag, value) { os.writeStruct(tag, value); };
TRom.User_t._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
TRom.User_t._readFrom = function (is) {
    var tmp = new TRom.User_t;
    tmp.id = is.readInt32(0, false, 0);
    tmp.score = is.readInt32(1, false, 0);
    tmp.name = is.readString(2, false, "");
    return tmp;
};
TRom.User_t.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeInt32(1, this.score);
    os.writeString(2, this.name);
};
TRom.User_t.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
TRom.User_t.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
TRom.User_t.prototype.toObject = function() { 
    return {
        "id" : this.id,
        "score" : this.score,
        "name" : this.name
    };
};
TRom.User_t.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "id") && (this.id = json.id);
    _hasOwnProperty.call(json, "score") && (this.score = json.score);
    _hasOwnProperty.call(json, "name") && (this.name = json.name);
    return this;
};
TRom.User_t.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
TRom.User_t.new = function () {
    return new TRom.User_t();
};
TRom.User_t.create = function (is) {
    return TRom.User_t._readFrom(is);
};

TRom.Result_t = function() {
    this.id = 0;
    this.iLevel = 0;
    this._classname = "TRom.Result_t";
};
TRom.Result_t._classname = "TRom.Result_t";
TRom.Result_t._write = function (os, tag, value) { os.writeStruct(tag, value); };
TRom.Result_t._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
TRom.Result_t._readFrom = function (is) {
    var tmp = new TRom.Result_t;
    tmp.id = is.readInt32(0, false, 0);
    tmp.iLevel = is.readInt32(1, false, 0);
    return tmp;
};
TRom.Result_t.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeInt32(1, this.iLevel);
};
TRom.Result_t.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
TRom.Result_t.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
TRom.Result_t.prototype.toObject = function() { 
    return {
        "id" : this.id,
        "iLevel" : this.iLevel
    };
};
TRom.Result_t.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "id") && (this.id = json.id);
    _hasOwnProperty.call(json, "iLevel") && (this.iLevel = json.iLevel);
    return this;
};
TRom.Result_t.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
TRom.Result_t.new = function () {
    return new TRom.Result_t();
};
TRom.Result_t.create = function (is) {
    return TRom.Result_t._readFrom(is);
};

var __TRom_NodeJsComm$getUsrName$IF = {
    "name" : "getUsrName",
    "return" : "int32",
    "arguments" : [{
        "name" : "sUsrName",
        "class" : "string",
        "direction" : "in"
    }, {
        "name" : "sValue1",
        "class" : "string",
        "direction" : "out"
    }, {
        "name" : "sValue2",
        "class" : "string",
        "direction" : "out"
    }]
};

var __TRom_NodeJsComm$getUsrName$IE = function (sUsrName) {
    var os = new TarsStream.TarsOutputStream();
    os.writeString(1, sUsrName);
    return os.getBinBuffer();
};

var __TRom_NodeJsComm$getUsrName$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "sValue1" : is.readString(2, true, ""),
                    "sValue2" : is.readString(3, true, "")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$getUsrName$PE = function (sUsrName, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeString("sUsrName", sUsrName);
    return tup;
};

var __TRom_NodeJsComm$getUsrName$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "sValue1" : tup.readString("sValue1"),
                    "sValue2" : tup.readString("sValue2")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$getUsrName$ER = function (data) {
    throw _makeError(data, "Call NodeJsComm::getUsrName failed");
};

TRom.NodeJsCommProxy.prototype.getUsrName = function (sUsrName) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("getUsrName", __TRom_NodeJsComm$getUsrName$PE(sUsrName, version), arguments[arguments.length - 1], __TRom_NodeJsComm$getUsrName$IF).then(__TRom_NodeJsComm$getUsrName$PD, __TRom_NodeJsComm$getUsrName$ER);
    } else {
        return this._worker.tars_invoke("getUsrName", __TRom_NodeJsComm$getUsrName$IE(sUsrName), arguments[arguments.length - 1], __TRom_NodeJsComm$getUsrName$IF).then(__TRom_NodeJsComm$getUsrName$ID, __TRom_NodeJsComm$getUsrName$ER);
    }
};
TRom.NodeJsCommProxy.getUsrName = __TRom_NodeJsComm$getUsrName$IF;

var __TRom_NodeJsComm$getall$IF = {
    "name" : "getall",
    "return" : "int32",
    "arguments" : [{
        "name" : "stUser",
        "class" : "TRom.User_t",
        "direction" : "in"
    }, {
        "name" : "stResult",
        "class" : "TRom.Result_t",
        "direction" : "out"
    }]
};

var __TRom_NodeJsComm$getall$IE = function (stUser) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, stUser);
    return os.getBinBuffer();
};

var __TRom_NodeJsComm$getall$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "stResult" : is.readStruct(2, true, TRom.Result_t)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$getall$PE = function (stUser, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("stUser", stUser);
    return tup;
};

var __TRom_NodeJsComm$getall$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "stResult" : tup.readStruct("stResult", TRom.Result_t)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$getall$ER = function (data) {
    throw _makeError(data, "Call NodeJsComm::getall failed");
};

TRom.NodeJsCommProxy.prototype.getall = function (stUser) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("getall", __TRom_NodeJsComm$getall$PE(stUser, version), arguments[arguments.length - 1], __TRom_NodeJsComm$getall$IF).then(__TRom_NodeJsComm$getall$PD, __TRom_NodeJsComm$getall$ER);
    } else {
        return this._worker.tars_invoke("getall", __TRom_NodeJsComm$getall$IE(stUser), arguments[arguments.length - 1], __TRom_NodeJsComm$getall$IF).then(__TRom_NodeJsComm$getall$ID, __TRom_NodeJsComm$getall$ER);
    }
};
TRom.NodeJsCommProxy.getall = __TRom_NodeJsComm$getall$IF;

var __TRom_NodeJsComm$secRequest$IF = {
    "name" : "secRequest",
    "return" : "int32",
    "arguments" : [{
        "name" : "binRequest",
        "class" : "list(char)",
        "direction" : "in"
    }, {
        "name" : "binResponse",
        "class" : "list(char)",
        "direction" : "out"
    }]
};

var __TRom_NodeJsComm$secRequest$IE = function (binRequest) {
    var os = new TarsStream.TarsOutputStream();
    os.writeBytes(1, binRequest);
    return os.getBinBuffer();
};

var __TRom_NodeJsComm$secRequest$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "binResponse" : is.readBytes(2, true, TarsStream.BinBuffer)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$secRequest$PE = function (binRequest, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeBytes("binRequest", binRequest);
    return tup;
};

var __TRom_NodeJsComm$secRequest$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "binResponse" : tup.readBytes("binResponse")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$secRequest$ER = function (data) {
    throw _makeError(data, "Call NodeJsComm::secRequest failed");
};

TRom.NodeJsCommProxy.prototype.secRequest = function (binRequest) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("secRequest", __TRom_NodeJsComm$secRequest$PE(binRequest, version), arguments[arguments.length - 1], __TRom_NodeJsComm$secRequest$IF).then(__TRom_NodeJsComm$secRequest$PD, __TRom_NodeJsComm$secRequest$ER);
    } else {
        return this._worker.tars_invoke("secRequest", __TRom_NodeJsComm$secRequest$IE(binRequest), arguments[arguments.length - 1], __TRom_NodeJsComm$secRequest$IF).then(__TRom_NodeJsComm$secRequest$ID, __TRom_NodeJsComm$secRequest$ER);
    }
};
TRom.NodeJsCommProxy.secRequest = __TRom_NodeJsComm$secRequest$IF;

var __TRom_NodeJsComm$test$IF = {
    "name" : "test",
    "return" : "int32",
    "arguments" : []
};

var __TRom_NodeJsComm$test$IE = function () {
    var os = new TarsStream.TarsOutputStream();
    return os.getBinBuffer();
};

var __TRom_NodeJsComm$test$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$test$PE = function (__$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    return tup;
};

var __TRom_NodeJsComm$test$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeJsComm$test$ER = function (data) {
    throw _makeError(data, "Call NodeJsComm::test failed");
};

TRom.NodeJsCommProxy.prototype.test = function () {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("test", __TRom_NodeJsComm$test$PE(version), arguments[arguments.length - 1], __TRom_NodeJsComm$test$IF).then(__TRom_NodeJsComm$test$PD, __TRom_NodeJsComm$test$ER);
    } else {
        return this._worker.tars_invoke("test", __TRom_NodeJsComm$test$IE(), arguments[arguments.length - 1], __TRom_NodeJsComm$test$IF).then(__TRom_NodeJsComm$test$ID, __TRom_NodeJsComm$test$ER);
    }
};
TRom.NodeJsCommProxy.test = __TRom_NodeJsComm$test$IF;



