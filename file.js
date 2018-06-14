fs = require('fs');
var watch=require('node-watch')
fs.watchFile('my.txt', function(curr,prev) 
{
 	console.log(curr);
 	console.log(prev);
 	var a = curr.size;
 	var b = prev.size;
 	console.log('a',a);
 	console.log('b',b);
 	var diff = a-b;
 	console.log('c',diff);
    fs.open('my.txt', 'r', function(err, data) 
   {
   	 var buffer = new Buffer.alloc(diff);
     fs.read(data, buffer, 0, diff,b, function(error, bytesRead, buffer)
      {
      	var my =  buffer.toString('ascii',0,diff);
        if (err) 
        {
         return console.log(err);
        }
        console.log(my);
      });
   });
 });