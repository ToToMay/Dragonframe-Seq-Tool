//根据传入参数，得到vframe和vfile里面的数字，返回值为数组

const fs=require('fs');



function getXml(address,ele,callback) {
  var result;
  var xml = fs.readFileSync(address, "utf-8");

  var reg1 = /(vframe=")[0-9]{1,4}/g
  var vframexml=xml.match(reg1);
  var reg2 = /(file=")[0-9]{1,4}/g
  var vfilexml=xml.match(reg2);

  function cutTheString(str){
    return str.replace(/[^0-9]/ig,"");
  }

  //给vfile 补0
  function padding(num) {
    for(var len = (num + "").length; len < 4; len = num.length) {
     num = "0" + num;
    }
    return num;
   }
  
  

  var frame = vframexml.map(cutTheString).map(Number).map(padding);
  var file = vfilexml.map(cutTheString).map(Number).map(padding);
  // console.log(frame);
  // console.log(file);
  
 return ele=="vframe"?callback(frame):callback(file);
 
   
  }


  // getXml("./take.xml","vfile",(ele)=>{
  //   console.log(ele);
  //  });
 

  module.exports = getXml;

  


  
