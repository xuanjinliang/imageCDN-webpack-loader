/**
 * Created by timxuan on 2016/11/3.
 */

'use strict';

let loaderUtils = require("loader-utils");

function checkNum(num,len){
    return num >= len ? 0: (num < 0 ? (len - 1):num);
}

module.exports = function(content) {
    this.cacheable && this.cacheable();
    let query = loaderUtils.parseQuery(this.query),
        domain = query.domain;

    if(!domain){
        return content;
    }

    let num = 0,len = 0,
        isArray = domain instanceof Array;

    if(isArray){
        len = domain.length;
        if(len > 0){
            num = Math.floor(Math.random() / (1 / len));
            num = checkNum(num, len);
            domain = domain[num]
        }
    }

    domain = domain.trim();

    if(!domain.charAt(domain.length - 1).match(/\\|\//gi)){
        domain += '/';
    }

    content = content.replace('__webpack_public_path__','\"'+domain+'\"');

    return content;
};