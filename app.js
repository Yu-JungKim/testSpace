const express = require('express');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


let stack =[];

app.get('/api/read2',(req,res)=>{
  console.log('data sum');
  console.log(req.body);
  sum();
  res.status(200).send({stack: stack});
})

app.post('/api/push',(req,res) => {
  console.log('data pushed');
  console.log(req.body);
  if(req.body.value[0] == '-') {
    stack.pop();
  } else if (req.body.value == number ) {
    stack.push(req.body.value);
  }else {
    alert('not a number');
  }
  res.status(200).send({stack: stack});
});

// app.delete('/api/pop',(req,res) =>{
//   console.log('data pop');
//   stack.pop();
//   res.status(200).send({stack:stack});
// });

app.get('/api/read',(req,res) =>{
  console.log('data read');
  res.status(200).send({stack:stack});
});


app.put('/api/update/:key',(req,res) => {
  console.log('data update');
  console.log(req.params, req.body);
  stack[req.params.key] = req.body.value;
  res.status(200).send({stack:stack});

});

let port = 8887;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
