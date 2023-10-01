var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/backend", async function (req, res, next) {
  const response_instance_id = await fetch(
    "http://169.254.169.254/latest/meta-data/instance-id"
  );
  const instance_id = await response_instance_id.text();
  const response_public_ipv4 = await fetch(
    "http://169.254.169.254/latest/meta-data/public-ipv4"
  );
  const public-ipv4 = await response_public_ipv4.text();
  const result = {
    instance_id,

  }
  res.json(result);
});

module.exports = router;
