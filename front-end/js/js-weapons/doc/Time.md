#### 1. formatTime - 格式化时间为'年-月-日 时:分:秒'

    /**
    * @desc   格式化时间为'年-月-日 时:分:秒'
    * @param  {String} 格式 
    * @return {String}
    */
    function formatTime('yyyy-MM-dd hh:mm:ss') {
        var o = {
            'M+': this.getMonth() + 1,               // 月份
            'd+': this.getDate(),                    // 日
            'h+': this.getHours(),                   // 小时
            'm+': this.getMinutes(),                 // 分
            's+': this.getSeconds(),                 // 秒
            'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
            'S': this.getMilliseconds()             // 毫秒
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (var k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
            }
        }
        return fmt
    }
#### 2. revertFormat - '年-月-日 时:分:秒'转化为时间戳
 /**
    * @desc   格式化时间为'年-月-日 时:分:秒'
    * @param  {String}
    * @return {String}
    */
    function revertFormat(times) {
        var oldTime = new Date(times.replace(new RegExp('-', 'g'), '/')).getTime()
        return oldTime
    }


#### 3. formatPassTime - 格式化${startTime}距现在的已过时间

    /**
    * @desc   格式化${startTime}距现在的已过时间
    * @param  {Date} startTime 
    * @return {String}
    */
    function formatPassTime(startTime) {
        var currentTime = Date.parse(new Date()),
            time = currentTime - startTime,
            day = parseInt(time / (1000 * 60 * 60 * 24)),
            hour = parseInt(time / (1000 * 60 * 60)),
            min = parseInt(time / (1000 * 60)),
            month = parseInt(day / 30),
            year = parseInt(month / 12);
        if (year) return year + "年前"
        if (month) return month + "个月前"
        if (day) return day + "天前"
        if (hour) return hour + "小时前"
        if (min) return min + "分钟前"
        else return '刚刚'
    }

#### 4. formatRemainTime - 格式化现在距${endTime}的剩余时间

    /**
    * 
    * @desc   格式化现在距${endTime}的剩余时间
    * @param  {Date} endTime  
    * @return {String}
    */
    function formatRemainTime(endTime) {
        var startDate = new Date(); //开始时间
        var endDate = new Date(endTime); //结束时间
        var t = endDate.getTime() - startDate.getTime(); //时间差
        var d = 0,
            h = 0,
            m = 0,
            s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 3600 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
    }