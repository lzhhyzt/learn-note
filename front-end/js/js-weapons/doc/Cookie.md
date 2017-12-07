#### 1. getCookie - 根据name读取cookie

    /**
    * 
    * @desc 根据name读取cookie
    * @param  {String} name 
    * @return {String}
    */
    function getCookie(name) {
        var arr = document.cookie.replace(/\s/g, "").split(';');
        for (var i = 0; i < arr.length; i++) {
            var tempArr = arr[i].split('=');
            if (tempArr[0] == name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    }


#### 2. removeCookie - 根据name删除cookie

    var setCookie = require('./setCookie');
    /**
    * 
    * @desc 根据name删除cookie
    * @param  {String} name 
    */
    function removeCookie(name) {
        // 设置已过期，系统会立刻删除cookie
        setCookie(name, '', -1);
    }

    module.exports = removeCookie

#### 3. setCookie 添加cookie

    /**
    * 
    * @desc  设置Cookie，可添加可删除
    * @param {String} name 
    * @param {String} value 
    * @param {Number} days 
    */
    function setCookie(name, value, days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + date;
    }










