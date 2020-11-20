//expressモジュールを使えるように設定
const express = require('express');
//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express();

var  multer   =  require('multer')
var  upload  =  multer({  dest:'uploads /'  } )





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
// app.use(express.urlencoded({extended: false}));



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

// app.post('/create',(req,res)=>{
//   connection.query('INSERT INTO phone_table(pict,phoneName,size,gaso,battery,IPX,movieSize,other,Recommend)VALUES(?),(?),(?),(?),(?),(?),(?),(?),(?),(?)',
//   [req.body.pict,req.body.phoneName,req.body.size,req.body.gaso,req.body.battery,req.body.IPX,req.body.movieSize,req.body.other,req.body.Recommend],
//   (error,results)=>{
   
//       res.redirect('/phone_list');
    
    
//   })
// });


//管理データ削除
// app.post('/delete:id',(req,res)=>{
//   res.redirect('/phone_list')
// })


//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port 8000!'))