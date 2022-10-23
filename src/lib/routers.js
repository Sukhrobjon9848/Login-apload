'use strict'
import http from 'http'
import url from 'url';
import  qs from 'querystring';
   const hendler={}
   
function Server(req,res){
     req.query=qs.parse(url.parse(req.url).query)


     res.json= function (data) {
        res.setHeader("Content-Type","application/json")
        return res.end(JSON.stringify(data))
     }
     res.render= function (data) {
        res.setHeader("Content-Type","text/html")
        return res.end(JSON.stringify(data))
     }

    let urlname=url.parse(req.url).pathname.toLowerCase()
    let method= req.method.toUpperCase()
    if(hendler[urlname]){
        return hendler[urlname][method](req,res)
    }
    else{
        res.end("Not Found")
    }

} 

export default class {
  constructor(){
    this.server=http.createServer(Server)
    this.get=function(path,callbackHendler){
hendler[path.toLowerCase()]=hendler[path.toLowerCase()] || {}
        hendler[path.toLowerCase()]["GET"]=callbackHendler
    }


    this.listen= function(PORT,callback){
        this.server.listen(PORT,callback)
    }
}
    
}