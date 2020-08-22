'use strict';

module.exports = function(Phoneclient) {
Phoneclient.observe('after save', function (ctx, next) {
        var massage = "CT-"+ ctx.instance["clientId"] +"\n"+
        "شكرا لانظمامك الى شركاء نجاح شركة اي دليفري \n"
		+ "و برنامج Shopper :)";
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
        });

        next();
    });
};
