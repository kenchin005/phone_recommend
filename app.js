//expressモジュールを使えるように設定
const express = require('express');
//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

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
  res.render('phone_list.ejs',{test_table: results})
  })
});





//インサートテスト
app.post('/uploads',(req,res)=>{

  var text = req.body.text
  

  connection.query('INSERT INTO test_table(text)VALUES(?)',
    [text],(error,results)=>{
    
      res.redirect("/phone_list")
})
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

//管理データ削除テスト
app.post('/delete/:id',(req,res)=>{

  var id = req.params.id

  connection.query('DELETE FROM test_table WHERE id = ?',
  [id],(error,results)=>{
    res.redirect('/phone_list');
  })
});



//管理データ削除
// app.post('/delete:id',(req,res)=>{
//   res.redirect('/phone_list')
// })

//管理データ編集
app.get("/edit/:id",(req,res)=>{

  var id = req.params.id
  //1201ここまで
  //上記関数外で定義したい

  connection.query('SELECT*FROM test_table WHERE id = ?',[id],(error,results)=>{

    res.render('edit.ejs',{test_table:results[0]})
  })
  
})

//更新
app.post("/update/:id",(req,res)=>{

  var id = req.params.id;
  var text = req.body.text

  connection.query("UPDATE test_table SET text = ? WHERE id = ?",
  [text,id],(error,results)=>{
    res.redirect("/phone_list")
  })
})
//1205テストOK
//あとは本格実装→CSS

//サーバーを起動したら、リクエストを8000番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port 8000!'))




 //MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48


 function task() {
  var spreadsheet = SpreadsheetApp.openById('1-HzZt_NCq64UuSutkfQhhhgP__qdwjMkzQ-NpQiIlXM');//タスクidに変更
  var sheet3 = spreadsheet.getSheetByName("シート3");
  
  var lastrow = sheet3.getLastRow();
  
  var Today = Moment.moment(new Date());
  var nokori = sheet3.getRange("B2").getValue();
  var nokori1 = Today.add(nokori,'d').format();
//  console.log(nokori);
//  console.log(nokori1);
  
  var limit = Moment.moment(sheet3.getRange("C3").getValue()).format();
  
  console.log(limit);
  
  if(Moment.moment(nokori1).isAfter(limit)){
    var range = sheet3.getRange("A1:B1").getValues();
//    console.log(range);
//    
//    var color = "#FFFF00";
//    range.setBackground(color);
    
  }
  

  
  
  
}