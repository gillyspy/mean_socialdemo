var express = require('express');
var router = express.Router();
var path = require('path');// TODO: find out what 'path' module is for

// static javascript assets
router.use( '/assets', express.static(__dirname + '/../assets'));

// our Angular app
router.get('/*', function (req, res, next) {


    /* this is my own code to force express requests to load the proper ng controller.  Since ng routing is actually
     operating on the # parameter but changes the URL (via HTML5 mode) to look like it's operating on the full http request.
     TODO: is there a better way?  what is the best practice?

     Note: express apparently supports Regex (http://forbeslindesay.github.io/express-route-tester/?_ga=1.54431915.2070267857.1461359877)
     in it's path strings.  
     */
    var url = req.originalUrl.toString();
    var regextest1 = url.match(/.*\/(login|register|posts|)+([.]html)$/g);
    var regextest2 = url.match(/.*\/(login|register|posts|)+$/g);
    var regextest3 = url.match(/.*\/api\/.*$/g);
    console.log(url.toString(), regextest1, regextest2);
    if (regextest2) {
        res.sendFile(path.join(__dirname, '../layouts', 'app.html'));
    } else if (regextest1 || regextest3) {
        next();
    } else {
        res.sendStatus(404);
    }
    ;



});

router.use('/', express.static(__dirname + '/../templates'));

router.use('/', express.static(__dirname + '/../templates'));

module.exports = router;
