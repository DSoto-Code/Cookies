const { Cookie } = require("express-session")

const express = requiere ('express')
const session= reqiuere ('express-session')

const app=express()
const PORT=3000

app.use(express.json())

app.use (session({
    secret: 'miclave',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false}
}))

app.get('/inicio',(req, res)=>{
    
    req.session.destroy((err)=>{
        if (err){
            console.error("Error destroying session:", err);
            res.status(500).send("Error destroying session");
        }else{
            res.send("Session destroyed");
        }
    }
);
    
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});