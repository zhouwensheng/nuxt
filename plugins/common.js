// 公共方法
global.AppUtil = {};
// cookie
global.AppUtil.cookie={
    // 设置cookie
    setCookie :(cname, cvalue, exdays, path, domain) => {
        var expires;
        path = path || "/";
        var isIE = !_.isEmpty((navigator.userAgent.toLowerCase()).match(/(msie\s|trident.*rv:)([\w.]+)/));
        if (exdays === "Session") {
            if (isIE) {
                    expires = 'expires=At the end of the Session';
            } else {
                    expires = "expires=-1";
            }
        }
        else {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + ";Domain=" + domain + ";" + expires + ";path=" + path;
    },
        //取得cookie
    getCookie :(objName) => {
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] === objName) {
                return decodeURI(temp[1]);
            }
        }
        return null;
    },
    // 删除cookie
    deleteCookie:(cname, domain, path) => {
        s.cookie.setCookie(cname, "", -1, path, domain);
    }
}
global.AppUtil.Local = {
    getLocal:(key) => {
        let result = localStorage.getItem(key);
        if (result == null || result === "" || result === undefined || result === "null") {
            return false;
        } else {
            return JSON.parse(result);
        }
    },
    setLocal:(key,value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
global.AppUtil.http = 'http://116.62.209.16:3001/';
//判断是否值对应
Array.prototype.contains = function (obj, obj2) {
    let i = this.length;
    while (i--) {
      if (this[i] === obj || this[i] === obj2) {
        return true;
      }
    }
    return false;
};

// 封装ajax请求
global.F = {
    post:(url, data) => {
        var data = data || {};
        data.method = 'post';
        return  fetch(url,data).then((res) => {
            return res.json()
        })
    },
    get:(url) => {
        return fetch(url).then((res) => {
            return res.json();
        })
    }
}