//传入参数 文件夹路径 在制定路径创建新文件夹Newtake

const fs=require('fs');
const  path = require('path');

function createDir(dirpath){
  let pathdir = path.join(dirpath,'/',"newtake");
 
    while(fs.existsSync(pathdir)){
      pathdir = path.join(pathdir+1);
      
    }
     fs.mkdirSync(pathdir);
     return pathdir;
    }

// var p ="E:\\2019动画\\tuzi_001.dgn\\tuzi_001_Take_02"
// createDir(p);
module.exports = createDir;