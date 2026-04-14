 import fs from 'fs';
fs.readFile("./data.txt","utf-8",(err,data)=>{
if(err){
    console.error(err);
}
else{ 
console.log('File content:',data);

}
});
fs.appendFile('./data.txt', "\n Hello  again!", 'utf8',()=>{
});
fs.unlink('./data.txt', "\n Hello  again!", 'utf8',()=>{
});