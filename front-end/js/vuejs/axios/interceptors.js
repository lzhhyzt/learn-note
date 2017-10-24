/**
 *baseURl reques   tHeader  url method params header data timeout responseType   i
  并发请求的要求，发送多个请求
  response info:data,status,statusText header config
 */
import vue from "vue";
import axios from "axios";
 (function(){   
    
axios.defaulT.baseURL="http://localhost:80";

axios.all({},{}).then(axios.spread(function(res1,res2){ 
    let up=res1.data;
    let tp=res2.data;
})).catch(function(error){
    if(error.response){
        console.log(error.response.data);
        console.log(error.response.data);
    }
})

function getUserInfo(){
    return axios.get("http://lzhsdf/");
}

axios.all([func1,func2]).then(axios.spread(function(res1,res2){})).catch(function(err){});

//自定义实例默认值
var instance =axios.create({
    baseURL:"http://iokokojf/"
})

//拦截器
    axios.interceptors.request.use(function(config){},function(error){return Promiss.reject(error)})
    axios.interceptors.response.use(function(config){},function(err){return Promiss.reject(MediaStreamError)});
    axios.interceptors.request.user("  ");


    new Vue({
        el:'app',
        data:{
            
        }

    })

 })()