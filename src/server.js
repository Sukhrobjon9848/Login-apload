import  Express from './lib/routers.js'
import HOST from './lib/network.js'
import users from './database/users.js'
const PORT= process.cwd.PORT || 4000

const app= new Express()

app.get('/users',(req,res)=>{
      let store=[]
     for (const user of users) {
        let counter=0
        for (const key in req.query) {
            if(user[key]==req.query[key]){  
                counter++
            } 
        }
        if(Object.keys(req.query).length==counter) store.push(user)
     }

     return res.json((Object.keys(req.query)).length ?store : users)
})


app.get('/posts',(req,res)=>{
    res.json({data:10})
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})