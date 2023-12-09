'use strict';

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      res.json({"stockData":{"stock":"NASDAQ","price":786.90,"likes":1}});
    });
    
};
