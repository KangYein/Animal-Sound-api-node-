const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/user/:id', (req, res) => {
    // const q =req.params
    // console.log(q);
    const q= req.query;
    console.log(q)
    res.json({'userid':q.id})
})
app.get('/dog', (req, res) => {
    res.json({'sound':'멍멍'})
})
app.get('/cat', (req, res) => {
    res.json({'sound':'야옹'})
})
app.get('/sound/:name', (req, res) => {
    const {name} =req.params;
    if(name=="dog"){
        res.json({'sound':'멍멍'});
    }else if(name=="cat"){
        res.json({'sound':'야옹'});
    }else if(name=="pig"){
        res.json({'sound':'꿀꿀'});
    }else{
        res.json({'sound':'알수없음'});
    }
    
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})