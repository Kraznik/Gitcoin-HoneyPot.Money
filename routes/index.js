var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("This is private property. You shouldn't be here!");
});

//user
router.post("/user", auth, require("../controllers/postUser"));
router.get("/user/:walletAddress", auth, require("../controllers/getUser"));
router.patch("/user/:walletAddress", auth, require("../controllers/patchUser"));

//campaign
router.post("/campaign", auth, require("../controllers/postCampaign"));
router.patch("/campaignStatus/:tokenAddress", auth, require("../controllers/patchCampaignStatus"));
router.patch("/campaignAttempts/:tokenAddress", auth, require("../controllers/patchCampaignAttempts"));
router.get("/campaign/:tokenAddress", auth, require("../controllers/getCampaign"));


module.exports = router;
