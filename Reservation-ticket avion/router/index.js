var ejs = require('ejs');
let fetch = require("../Fetch/fetch.js");
let db = require("../Mutations/index.js");

const fs=require('fs');

const path = require('path')

module.exports = routes = {


    home: async function (data, res) {
        let fetchfrom = await fetch.get(db.vol_from());
        let fetchto = await fetch.get(db.vol_to());
        console.log("eee",fetchto, fetchfrom);
        
        ejs.renderFile('./views/home.ejs', {
            from: fetchfrom,
            to: fetchto
        }, function (err, str) {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            if (err) {
                res.end();
            } else {
                res.end(str);
            }
        });

    },

    assets: function (data, res) {

        let assets = fs.readFileSync(path.join(__dirname + "/.." + data.url));
        res.writeHead(200);
        res.write(assets);
        res.end("\n");
      },
    // home: async function(data, res) {

    // let fetchedData = await fetch.get(Queries.getFlights());
    // data = { ...data, flights: fetchedData };
    // let html = ejs.render(fs.readFileSync("./views/home.ejs", "utf8"), {
    //   data: data.flights,
    // });
    // res.writeHead(200);
    // res.write(html);
    // res.end("\n");

    //     ejs.renderFile('./views/home.ejs',  function(err, str){
    //       res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    //              if (err) {
    //                  console.log(err)
    //                      res.end();
    //                      } else {
    //                      res.end(str);
    //                      }
    //          });
    // }
    test:function(data, res) {
        let html = ejs.render(fs.readFileSync("./views/test.ejs", "utf8"));
          res.writeHead(200);
          res.write(html);
          res.end("\n");
    },
    404:function (data,res) {
        let html = ejs.render(fs.readFileSync("./views/404.ejs", "utf8"));
        res.writeHead(200);
        res.write(html);
        res.end("\n");
    }
}