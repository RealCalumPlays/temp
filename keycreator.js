var sha512 = require('js-sha512');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '168.119.33.83',
  user: 'u445_IjrxWIMUFK',
  password: 'AI6gOGl6@KPrx7^FatTboUsW',
  database: 's445_logger'
});

function makekey(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

function createkey(amount) {
	for (i = 0; i < amount; i++) {
		var key = makekey(8)
    var hashedkey = sha512(String(key))
    console.log(key)
  		connection.query(`INSERT INTO SpazWhitelist (whitelist) VALUES ('${hashedkey}')`, function (error, results, fields) {
        	if (error) throw error;
    	});
	}
}

function checkkey(key) {
  connection.query(`SELECT * FROM SpazWhitelist WHERE whitelist = '${sha512(String(key))}';`, function(error, results, fields) {
      if (error) throw error;
      var string = JSON.stringify(results)
      var json = JSON.parse(string)
      if ( typeof json[0] == 'undefined') {
        console.log('Invalid Key')
        return
      } else {
        console.log('Valid Key')
        return
      }
  })
};

createkey(10)