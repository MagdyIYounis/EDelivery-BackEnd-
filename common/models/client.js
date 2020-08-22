'use strict';
var request = require('request');
module.exports = function(Client) {
	
	Client.observe('before save', (ctx, next) => {
		
		if (ctx.isNewInstance) {
            var set = () => {
                var ID = Math.random() * (150 - 80) + 80;

                var options = {
                    'method': 'GET',
                    'url': address + '/api/Client/' + ID + '/exists',
                    'headers': {
                        'Content-Type': ['application/json']
                    }
                };
                request(options, async function (error, response) {
                    if (error) throw new Error(error);
                    if (JSON.parse(response.body)["exists"]) {
                        set();
                    } else {
                        ctx.instance["Code_Client"] = ID;
                        next();
                    }
                });
            }
            set();
        } else {
            next()
        }


    });

};
