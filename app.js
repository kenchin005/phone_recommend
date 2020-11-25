//expressモジュールを使えるように設定
const express = require('express');
//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express();

// var  multer   =  require('multer')
// var  upload  =  multer({dest:'uploads /'} )





//SQL接続
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
 password: '',
 database: 'phone_db'
});

// 接続できなかったらエラーを返す
connection.connect((err) => {
 if (err) {
   console.log('error connecting: ' + err.stack);
   return;
 }
 console.log('success');
});


//フォーム取得
app.use(express.urlencoded({extended: false}));



app.use(express.static('public'));
app.use(express.static('views'));


// 最初の画面アクセス
app.get('/',(req,res)=>{
  res.render('index.ejs')
});


//list
// app.get('/phone_list', (req, res) => {
//   connection.query('SELECT*FROM phone_table',(error,results)=>{
//     res.render('phone_list.ejs',{phone_table: results})
//   })
// });

//リストから新規機種登録
app.get('/new',(req,res)=>{
  res.render('new.ejs')
})


//携帯リスト
app.get('/phone_list',(req,res)=>{
  connection.query('SELECT * FROM test_table',(error,results)=>{
    console.log(results);
  res.render('phone_list.ejs')
  })
});
//インサートテスト
app.post('/uploads',(req,res)=>{
  connection.query('INSERT INTO test_table(text)VALUES("?")'),
  (error,results)=>{
    console.log(results);
  }
})




// app.post('/uploads',(req,res)=>{
  
//   var pict = req.body.pict
//   var phoneName = req.body.phoneName
//   var size = req.body.size
//   var gaso = req.body.gaso
//   var battery = req.body.battery
//   var IPX = req.body.IPX
//   var movieSize = req.body.movieSize
//   var other = req.body.other
//   var Recommend = req.body.Recommend


//   connection.query('INSERT INTO phone_table(pict,phoneName,size,gaso,battery,IPX,movieSize,other,Recommend)VALUES("'+ pict +'","'+ phoneName +'","'+ size +'""'+ gaso +'","'+ battery +'","'+ IPX +'","'+ movieSize +'","'+ other +'","'+ Recommend +'")',
  
//   (error,results)=>{
   

//     console.log(results);
    
    
//   })
// });


//管理データ削除
// app.post('/delete:id',(req,res)=>{
//   res.redirect('/phone_list')
// })


//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port 8000!'))