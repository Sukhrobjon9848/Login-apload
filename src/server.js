import http from 'http'
import HOST from './lib/network.js'
import Express from './lib/routers.js'
const PORT= process.cwd.PORT || 4000
const Server =http.createServer((req,res)=>{
   let app= new Express(req,res)
    console.log(req.url);
   app.get('/',(req,res)=>{
    app.engine('index')
   })
  
   app.get('/public/css/styles.css',(req,res)=>{
    app.engineCss('styles')
   })

   app.get('/images/logo.svg',(req,res)=>{
    app.engineImg('logo')
   })
   app.get('/images/healthcare-illustration.png',(req,res)=>{
    app.engineImgs('healthcare-illustration')
   })

})

Server.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})