#### 1. addClass-添加类

    /**
    * 
    * @desc   为元素添加class
    * @param  {HTMLElement} ele 
    * @param  {String} cls 
    */

    var hasClass = require('./hasClass');

    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    }

#### 2. hasClass- 判断元素是否有某个类

    /**
    * @desc 判断元素是否有某个class
    * @param {HTMLElement} ele 
    * @param {String} cls 
    * @return {Boolean}
    */
    function hasClass(ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }

#### 3. removeClass

    /**
    * 
    * @desc 为元素移除class
    * @param {HTMLElement} ele 
    * @param {String} cls 
    */

    var hasClass = require('./hasClass');

    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }
