var request = require("request");




request("https://books.zoho.com/api/v3/contacts/947941000008804671?organization_id=654034948&authtoken=cb658eef9e445c8ec2e0973452975a52",function(error,response,body) {


console.log(body);


var jsonObj = JSON.parse(body);


console.log(jsonObj);
});
