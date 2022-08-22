var User = require("../models").Users

module.exports = async function(req,res){

    let {walletAddress, campaignId, totalRewardsClaimed} = req.body;

    if(!walletAddress || !campaignId)
    {
        res.send({error: "Invalid Payload"});
        return;
    }

    var checkUser = await User.findAll({where:{walletAddress: walletAddress}});

    if(!checkUser.length)
    {

        var uploadUser = await User.create({
            walletAddress,
            campaignId,
            totalRewardsClaimed
        });

        if(uploadUser)
        {
            res.send({message: "Successfully Added"});
            return;
        }else{
            res.send({error: "Something went wrong. Please contact support."});
            return;
        }

    }else{
        res.send({error: "Wallet already exist. Please patch."});
        return;

    }
}