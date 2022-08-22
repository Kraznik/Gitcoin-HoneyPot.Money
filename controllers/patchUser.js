var User = require("../models").Users

module.exports = async function(req,res){

    let {walletAddress} = req.params;

    let{campaignId,totalRewardsClaimed} = req.body;

    if(!walletAddress)
    {
        res.send({error: "Invalid Request"});
        return;
    }

    var checkUser = await User.findAll({where:{walletAddress: walletAddress}});

    if(!checkUser.length)
    {

            res.send({error: "Wallet not found"});
            return;

    }else{

        var campaignIdWallet = checkUser[0].campaignId;
        var totalRewardsClaimedWallet = parseFloat(checkUser[0].totalRewardsClaimed);

        if(campaignId)
        {
            campaignIdWallet = campaignIdWallet.concat(campaignId);
        }
        if(totalRewardsClaimed)
        {
            totalRewardsClaimedWallet+=parseFloat(totalRewardsClaimed);
        }

        var update = await User.update({
            campaignId:campaignIdWallet,
            totalRewardsClaimed:totalRewardsClaimedWallet
        },{
            where:{walletAddress}
        })

        if(update)
        {
            res.send({message: "Updated"});
            return;
        }else{
            res.send({error: "Something went wrong. Please contact support."});
            return;
        }

    }
}