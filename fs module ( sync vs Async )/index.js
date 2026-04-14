const fs1 = require('fs');

 // sync

function writeFile_Sync(){ 
  fs1.writeFileSync('data.txt','hello Node \n',(err)=>{
    if(err){
      console.log(err);
    }
else{
  console.log("Files created successfully (sync)");
}

  });
};
writeFile_Sync();
function  readFile_Sync(){ 

    const data = fs1.readFileSync('./data.txt', 'utf8');
  console.log('File content with sync:\n', data);
}
readFile_Sync();

function appendToFile_sync(){ 
    fs1.appendFileSync('data.txt','hellllo again\n',(err)=>{
    if(err){
      console.log(err);
    }
else{
  console.log("'appendToFile added (sync)'");
}

  });
};
appendToFile_sync();

readFile_Sync();

function  deleteFile_sync(){ 
fs1.unlink('./data.txt',(err)=>{
if(err){
  console.log(err);

}
else{
  console.log("File deleted (sync)\n");
}
});
}
deleteFile_sync();


// Async
const fs = require('fs').promises;
async function writeFile_Async() {
  try {
    
    await fs.writeFile('data1.txt', 'Hello Node\n', 'utf-8');


    console.log('Files created successfully (Async)');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}
writeFile_Async();

async function readFile_Async() {
  try {
    const data = await fs.readFile('./data1.txt', 'utf8');
    console.log('File content (Async):\n', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFile_Async();

async function appendToFile_Async() {
  try {
    
    await fs.appendFile('./data1.txt', "hello again \n", 'utf8');

    console.log('appendToFile added (Async)');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}

appendToFile_Async();



async function deleteFile_Async() {
  const filePath = './data1.txt';

  try {
    
    await fs.access(filePath);

  
    await fs.unlink(filePath);
    console.log('File deleted successfully (Async)');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file:', err);
    }
  }
}

deleteFile_Async();
