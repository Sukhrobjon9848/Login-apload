import fs from 'fs'
import path from 'path'

export default class{
    constructor(req,res){
        this.req=req
        this.res=res
    }

    get(route,callback){
        if(this.req.url==route && this.req.method=="GET"){
            return callback(this.req,this.res)
        }
    }

    engine(pathname){
        this.res.setHeader("Content-Type","text/html")
            return this.res.end(
                fs.readFileSync(path.join(process.cwd(),'src','views',`${pathname}.html`))
                
            )
    }
    engineCss(pathname){
        this.res.setHeader("Content-Type","text/css")
            return this.res.end(
                fs.readFileSync(path.join(process.cwd(),'src','public','css',`${pathname}.css`))
                
            )
    }
    engineImg(pathname){
        this.res.setHeader("Content-Type","image/svg+xml")
            return this.res.end(
                fs.readFileSync(path.join(process.cwd(),'src','images',`${pathname}.svg`))
                
            )
    }
    engineImgs(pathname){
        this.res.setHeader("Content-Type","image/png")
            return this.res.end(
                fs.readFileSync(path.join(process.cwd(),'src','images',`${pathname}.png`))
                
            )
    }
}