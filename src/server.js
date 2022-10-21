import http from 'http'
import HOST from './lib/network.js'

const PORT= process.cwd.PORT || 4000
const Server =http.createServer((req,res)=>{
    res.end("Hello")
})

Server.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})