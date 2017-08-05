/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs')

// 异步打开文件
console.log("准备打开文件！");
fs.open('./1.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
})


// path 文件路径
// mtime 修改时间 ，表示文件被修改的时间和日期。文件的内容发生改变时，文件的修改日期将随之更新
// atime 访问时间 ，表示文件最后被访问的时间和日期。 每一次应用程序或服务使用系统调用，读取一个文件时，文件的访问时间都会更新。
// callback 回调，传递一个异常参数err
//
// fs.utimes('./1.txt', atime, mtime, function(err){
//     if(err){
//         throw err;
//     }
//     console.log('time update');
//
// });
