const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';

  // parse json data here...
  
  resp.on('data', (chunk) => {
    data += chunk;
  })

  resp.on('end', () => {
    const parsedData = JSON.parse(data).data;
    const toArr = parsedData.split(', ');

    let age32Counter = 0;
    var stream = fs.createWriteStream('output.txt');
    let dataToWrite = '';

    
    console.log('\n\n>>>>>>>>>>>>>>>>>>>> >>> toArr <<<<<<<<<<<<<<<<<<<<<\n\n')
    console.log(toArr)
    console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
    

    for(let pair of toArr){
      const temp = pair.split('=')
      
      console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>> temp <<<<<<<<<<<<<<<<<<<<<\n\n')
      console.log(temp)
      console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
      
      const key = temp[0];
      const value = temp[1];

      if(key === 'age' && value === 32){
        age32Counter += 1;
      }

      // values to stream
      dataToWrite += value + '\n'
    }
    console.log(age32Counter);
    let response = ''
    stream.write(dataToWrite, () => {
      const fileBuffer = fs.readFileSync('output.txt');
      const hashsum = crypto.createHash('sha1');

      hashsum.update(fileBuffer);
      response = hashsum.digest('hex') + '1slcdjvkf37';

      let newString = '';
      let nextX = 2;

      for(let i = 0; i < response.length; i++){
        if(i === nextX){
          newString += 'X';
          nextX += 3;
        } else {
          newString += response[i]
        }
      }

      return newString

    })
  })
});