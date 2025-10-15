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
    
    if(req.session.usuariuo){
        res.send(`Bienvenido${req.session.usuario}al panel`)
    }else{
        res.status(401).send ('No tienes sesion activa')
    }   
    
});

app.post('login',(req,res)=>{
    const {usuario, password}=req.body
    if(usuario=='admin'&& password ==='1234'){
        res.send('Inicio de sesion correcto')
    }else{
        res.status(401).send('Credenciales incorrectas')
    }
})