const express=require('express');
const app=express();
const port=process.env.PORT||2000;
const cors=require('cors');
app.use(cors());
const coursedata=require('./data/courses.json');
const coursedetaildata=require('./data/courseDetail.json');
app.get('/',(req,res)=>{
    res.send("API runnung")
});
app.get('/courses',(req,res)=>{
    res.send(coursedata)
});
app.get('/coursedetaildata',(req,res)=>{
    res.send(coursedetaildata);
});
app.get('/coursedetaildata/:id',(req,res)=>{
    const id=req.params.id;
    const detaildata=coursedetaildata.find(data=>data.id==id);
    res.send(detaildata);
});
app.get('courses/:id',(req,res)=>{
    const id=req.params.id;
    const courses=coursedata.find(data=>data.id===id);
    res.send(courses)
})
app.listen(port,()=>{
    console.log('API running on port',port)
})