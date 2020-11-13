//expressモジュールを使えるように設定
const express = require('express')
//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express()

//SQL接続
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

//接続できなかったらエラーを返す
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});


app.use(express.static('public'));


// 最初の画面アクセス
app.get('/index',(req,res)=>{
  res.render('index.ejs')
});


//list
app.get('/phone_list', (req, res) => {
  connection.query('SELECT*FROM items',(error,results)=>{
    res.render('phone_list.ejs',{items: results})
  })
});

//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port 8000!'))