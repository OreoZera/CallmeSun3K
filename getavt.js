module.exports.config = {
    name: "getavt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jukie",
    description: "",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args,Users}) => {
  var _0x7afc=["\x66\x73\x2D\x65\x78\x74\x72\x61","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x72\x65\x71\x75\x65\x73\x74","\x74\x68\x72\x65\x61\x64\x49\x44","\x67\x65\x74","\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61","\x64\x61\x74\x61","\x50\x52\x45\x46\x49\x58","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x63\x6F\x6E\x66\x69\x67","\x6C\x65\x6E\x67\x74\x68","\u26A1\uFE0F\x42\u1EA1\x6E\x20\x63\xF3\x20\x74\x68\u1EC3\x20\x64\xF9\x6E\x67\x3A\x5C\x6E\x5C\x6E","","\x6E\x61\x6D\x65","\x20\x75\x73\x65\x72\x20\x3D\x3E\x20\x6E\xF3\x20\x73\u1EBD\x20\x6C\u1EA5\x79\x20\x61\x76\x74\x20\x63\u1EE7\x61\x20\x63\x68\xED\x6E\x68\x20\x62\u1EA1\x6E\x2E\x5C\x6E\x5C\x6E","\x20\x75\x73\x65\x72\x20\x40\x5B\x54\x61\x67\x5D\x20\x3D\x3E\x20\x6E\xF3\x20\x73\u1EBD\x20\x6C\u1EA5\x79\x20\x61\x76\x74\x20\x6E\x67\u01B0\u1EDD\x69\x20\x62\u1EA1\x6E\x20\x74\x61\x67\x2E\x5C\x6E\x5C\x6E","\x20\x62\x6F\x78\x20\x3D\x3E\x20\x6E\xF3\x20\x73\u1EBD\x20\x6C\u1EA5\x79\x20\x61\x76\x74\x20\x62\x6F\x78\x20\x63\u1EE7\x61\x20\x62\u1EA1\x6E\x5C\x6E\x5C\x6E","\x20\x75\x73\x65\x72\x20\x62\x6F\x78\x20\x74\x69\x64\x5D\x20\x6E\xF3\x20\x73\u1EBD\x20\x6C\u1EA5\x79\x20\x61\x76\x74\x20\x63\u1EE7\x61\x20\x74\x69\x64","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x62\x6F\x78","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x69\x6D\x61\x67\x65\x53\x72\x63","\u26A1\uFE0F\x41\x76\x61\x74\x61\x20\x63\u1EE7\x61\x20\x62\x6F\x78\x20","\x74\x68\x72\x65\x61\x64\x4E\x61\x6D\x65","\x20\u0111\xE2\x79","\u26A1\uFE0F\x41\x76\x61\x74\x61\x20\x62\x6F\x78\x20","\x2F\x63\x61\x63\x68\x65\x2F\x31\x2E\x70\x6E\x67","\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64\x53\x74\x72\x65\x61\x6D","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x63\x6C\x6F\x73\x65","\x6F\x6E","\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74\x65\x53\x74\x72\x65\x61\x6D","\x70\x69\x70\x65","\x75\x73\x65\x72","\x74\x79\x70\x65","\x6D\x65\x73\x73\x61\x67\x65\x5F\x72\x65\x70\x6C\x79","\x73\x65\x6E\x64\x65\x72\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x52\x65\x70\x6C\x79","\x67\x65\x74\x44\x61\x74\x61","\u26A1\uFE0F\x41\x76\x61\x74\x61\x20\x63\u1EE7\x61\x20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F","\x2F\x70\x69\x63\x74\x75\x72\x65\x3F\x68\x65\x69\x67\x68\x74\x3D\x37\x32\x30\x26\x77\x69\x64\x74\x68\x3D\x37\x32\x30\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D\x31\x37\x30\x34\x34\x30\x37\x38\x34\x32\x34\x30\x31\x38\x36\x7C\x62\x63\x38\x32\x32\x35\x38\x65\x61\x61\x66\x39\x33\x65\x65\x35\x62\x39\x66\x35\x37\x37\x61\x38\x64\x34\x30\x31\x62\x66\x63\x39","\x40","\x69\x6E\x64\x65\x78\x4F\x66","\x6A\x6F\x69\x6E","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x6B\x65\x79\x73","\u26A1\uFE0F\x41\x76\x61\x74\x61\x20\x63\u1EE7\x61\x20\x49\x44\x3A\x20"];const fs=global[_0x7afc[1]][_0x7afc[0]];const request=global[_0x7afc[1]][_0x7afc[2]];const threadSetting=global[_0x7afc[6]][_0x7afc[5]][_0x7afc[4]](parseInt(event[_0x7afc[3]]))|| {};const prefix=(threadSetting[_0x7afc[8]](_0x7afc[7]))?threadSetting[_0x7afc[7]]:global[_0x7afc[9]][_0x7afc[7]];if(args[_0x7afc[10]]== 0){return api[_0x7afc[19]](`${_0x7afc[11]}${prefix}${_0x7afc[12]}${this[_0x7afc[9]][_0x7afc[13]]}${_0x7afc[14]}${prefix}${_0x7afc[12]}${this[_0x7afc[9]][_0x7afc[13]]}${_0x7afc[15]}${prefix}${_0x7afc[12]}${this[_0x7afc[9]][_0x7afc[13]]}${_0x7afc[16]}${prefix}${_0x7afc[12]}${this[_0x7afc[9]][_0x7afc[13]]}${_0x7afc[17]}`,event[_0x7afc[3]],event[_0x7afc[18]])};if(args[0]== _0x7afc[20]){if(args[1]){let threadInfo= await api[_0x7afc[21]](args[1]);let imgg=threadInfo[_0x7afc[22]];if(!imgg){api[_0x7afc[19]](`${_0x7afc[23]}${threadInfo[_0x7afc[24]]}${_0x7afc[25]}`,event[_0x7afc[3]],event[_0x7afc[18]])}else {var callback=()=>{return api[_0x7afc[19]]({body:`${_0x7afc[26]}${threadInfo[_0x7afc[24]]}${_0x7afc[25]}`,attachment:fs[_0x7afc[28]](__dirname+ _0x7afc[27])},event[_0x7afc[3]],()=>{return fs[_0x7afc[29]](__dirname+ _0x7afc[27])},event[_0x7afc[18]])}};return request(encodeURI(`${_0x7afc[12]}${threadInfo[_0x7afc[22]]}${_0x7afc[12]}`))[_0x7afc[33]](fs[_0x7afc[32]](__dirname+ _0x7afc[27]))[_0x7afc[31]](_0x7afc[30],()=>{return callback()})};let threadInfo= await api[_0x7afc[21]](event[_0x7afc[3]]);let img=threadInfo[_0x7afc[22]];if(!img){api[_0x7afc[19]](`${_0x7afc[23]}${threadInfo[_0x7afc[24]]}${_0x7afc[25]}`,event[_0x7afc[3]],event[_0x7afc[18]])}else {var callback=()=>{return api[_0x7afc[19]]({body:`${_0x7afc[23]}${threadInfo[_0x7afc[24]]}${_0x7afc[25]}`,attachment:fs[_0x7afc[28]](__dirname+ _0x7afc[27])},event[_0x7afc[3]],()=>{return fs[_0x7afc[29]](__dirname+ _0x7afc[27])},event[_0x7afc[18]])}};return request(encodeURI(`${_0x7afc[12]}${threadInfo[_0x7afc[22]]}${_0x7afc[12]}`))[_0x7afc[33]](fs[_0x7afc[32]](__dirname+ _0x7afc[27]))[_0x7afc[31]](_0x7afc[30],()=>{return callback()})};if(args[0]== _0x7afc[34]){if(!args[1]){if(event[_0x7afc[35]]== _0x7afc[36]){id= event[_0x7afc[38]][_0x7afc[37]]}else {id= event[_0x7afc[37]]};var name=( await Users[_0x7afc[39]](id))[_0x7afc[13]];var callback=()=>{return api[_0x7afc[19]]({body:`${_0x7afc[40]}${name}${_0x7afc[25]}`,attachment:fs[_0x7afc[28]](__dirname+ _0x7afc[27])},event[_0x7afc[3]],()=>{return fs[_0x7afc[29]](__dirname+ _0x7afc[27])},event[_0x7afc[18]])};return request(encodeURI(`${_0x7afc[41]}${id}${_0x7afc[42]}`))[_0x7afc[33]](fs[_0x7afc[32]](__dirname+ _0x7afc[27]))[_0x7afc[31]](_0x7afc[30],()=>{return callback()})}else {if(args[_0x7afc[45]]()[_0x7afc[44]](_0x7afc[43])!==  -1){var mentions=Object[_0x7afc[47]](event[_0x7afc[46]]);var name=( await Users[_0x7afc[39]](mentions))[_0x7afc[13]];var callback=()=>{return api[_0x7afc[19]]({body:`${_0x7afc[40]}${name}${_0x7afc[25]}`,attachment:fs[_0x7afc[28]](__dirname+ _0x7afc[27])},event[_0x7afc[3]],()=>{return fs[_0x7afc[29]](__dirname+ _0x7afc[27])},event[_0x7afc[18]])};return request(encodeURI(`${_0x7afc[41]}${mentions}${_0x7afc[42]}`))[_0x7afc[33]](fs[_0x7afc[32]](__dirname+ _0x7afc[27]))[_0x7afc[31]](_0x7afc[30],()=>{return callback()})}else {var namee= await Users[_0x7afc[39]](args[1])[_0x7afc[13]];var callback=()=>{return api[_0x7afc[19]]({body:`${_0x7afc[48]}${args[1]}${_0x7afc[12]}`,attachment:fs[_0x7afc[28]](__dirname+ _0x7afc[27])},event[_0x7afc[3]],()=>{return fs[_0x7afc[29]](__dirname+ _0x7afc[27])},event[_0x7afc[18]])};return request(encodeURI(`${_0x7afc[41]}${args[1]}${_0x7afc[42]}`))[_0x7afc[33]](fs[_0x7afc[32]](__dirname+ _0x7afc[27]))[_0x7afc[31]](_0x7afc[30],()=>{return callback()})}}}
      }
