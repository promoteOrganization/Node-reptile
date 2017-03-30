var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var pageUrls = [],	//存放收集文章页面网站
    pageNum = 2;	//要爬取文章的页数
for(var i=1 ; i<= pageNum ; i++){
    pageUrls.push('http://www.cnblogs.com/?CategoryId=808&CategoryType=%22SiteHome%22&ItemListActionName=%22PostList%22&PageIndex='+ i +'&ParentCategoryId=0');
}
var url = require('../model/url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    pageUrls.forEach(function(pageUrl) {
        superagent.get(pageUrl).end(function (err, res) {
            if (err) {
                return next(err);
            }
            // your code here
            var $ = cheerio.load(res.text);
            var urls = $(".titlelnk");
            for (var i = 0; i < urls.length; i++) {
                var saveUrls = new url({
                    'url': urls.eq(i).attr('href')
                });
                saveUrls.save(function (err,objs) {
                    if (err) {
                        return err;
                    }
                })
            }
        })
    })
});

module.exports = router;
