'use strict';
var request = require('request');
module.exports = function (Phonenumber) {
    Phonenumber.observe('after save', function (ctx, next) {
        var massage = "CR-"+ ctx.instance["customerId"] +"\n"+
        "شكرا لتواصلك مع اي دليفري \n" + 
		"يرجي اخبارنا بما يمكننا القيام به لمساعدتك";
        var res = encodeURI('https://smsmisr.com/api/webapi/?username=7TLgq36R&password=3fMMaB0OMX&language=2&sender=D Services&mobile=2'+ctx.instance["Phone_Number"]+'&message='+massage); 
        var options = {
            'method': 'POST',
            'url': res,
            'headers': {
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
			setTimeout(function(){ console.log(response.body);; },3000);
        });

        next();
    });
};
