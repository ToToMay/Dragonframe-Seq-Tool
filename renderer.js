// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var {remote}=require('electron');
var getxml = require('./renderer/getXml');
var createdir = require('./renderer/createDir');

var fs=require('fs');
var path =require('path');

let btn = document.querySelector("#btn");
let btnxml = document.querySelector("#btnxml");
let btnstart = document.querySelector("#btnstart");
let btnArea= document.querySelector("#inpt");
let xmlArea= document.querySelector("#inptxml");

let pathx1 ,
    pathxml ;

btn.onclick = function(){
   remote.dialog.showOpenDialog({

    properties:['openDirectory'],
    defaultPath:'C:\Users\Administrator\Desktop',
    title:'open TAKE_X1'
}).then(result => {
  if(result.canceled ==false){
    pathx1 = result.filePaths;
    btnArea.innerHTML = result.filePaths;
    // console.log(pathx1);
  }
  
}).catch(err => {
  console.log(err)
})
   
}

btnxml.onclick = function () {

  remote.dialog.showOpenDialog({

    properties:['openFile'],
    defaultPath:'C:\Users\Administrator\Desktop',
    title:'open take.xml'
}).then(result => {
  if(result.canceled ==false){
    pathxml=result.filePaths;
    xmlArea.innerHTML = result.filePaths;
    // console.log(pathxml);
  }
  
}).catch(err => {
  console.log(err)
})
   
}

btnstart.onclick = function () {
  let filearr;//拍摄相机文件序列号
  let framearr;//摄影表序列号
  
  if(pathxml && pathx1){//判断两个地址都拿到了
    //1将两个变量传入，通过方法拿到两个数组
   getxml(pathxml[0],'vframe',(ele)=>{
    framearr = ele;
  });
  getxml(pathxml[0],'vfile',(ele)=>{
    filearr = ele;
  })
    // console.log(filearr);
  // console.log(framearr);
}else{
alert('请选择X1文件夹和take.xml文件夹')
 }
  //新建文件夹，在take.xml所在的目录下 
  let pos = pathxml[0].lastIndexOf("\\");
  let newtakepath = pathxml[0].slice(0,pos);
  let newtakedir = createdir(newtakepath);//newtake文件的路径名
  //截取源文件的目录名子
  let posx1 = pathx1[0].lastIndexOf("\\");
  let x1name = pathx1[0].slice(posx1+1);
  //for循环第二个数组，len=第一个数组.length。根据第二个数组的值，找到X1中对应的文件，拷贝。
  
    for(var i=0, len = framearr.length;i<len;i++){
    //拼接源文件完整路径
       var ftemp = pathx1[0]+"\\"+x1name+"_"+filearr[i];
      //设置源文件和目标文件的完整路径
      let sourceFile = path.join(ftemp+".jpg");
      let destPath = path.join(newtakedir, x1name+"_"+framearr[i]+".jpg");
      //创建文件流
      let readStream = fs.createReadStream(sourceFile)
      let writeStream = fs.createWriteStream(destPath)
      readStream.pipe(writeStream) 
        }
        alert("已经完成，若文件数量过多，建议您稍等几分钟，待计算机处理缓存！")

}