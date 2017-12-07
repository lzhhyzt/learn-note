#### 1. parseQueryString -url参数转对象

    /**
    * 
    * @desc   url参数转对象
    * @param  {String} url  default: window.location.href
    * @return {Object} 
    */
    function parseQueryString(url) {
        url = url == null ? window.location.href : url
        var search = url.substring(url.lastIndexOf('?') + 1)
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }

#### 2. stringfyQueryString -对象序列化

    /**
    * 
    * @desc   对象序列化
    * @param  {Object} obj 
    * @return {String}
    */
    function stringfyQueryString(obj) {
        if (!obj) return '';
        var pairs = [];

        for (var key in obj) {
            var value = obj[key];

            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }

            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return pairs.join('&');
    }