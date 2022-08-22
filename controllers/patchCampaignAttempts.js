var Campaign = require("../models").Campaign

module.exports = async function(req,res){

    let {tokenAddress} = req.params;

    let{failedCounts,successfulCounts} = req.body;

    var checkUser = await Campaign.findAll({where:{tokenAddress}});

    if(!checkUser.length)
    {

            res.send({error: "Campaign not found"});
            return;

    }else{

        var successfulCountsC = checkUser[0].attempts.successfulCounts;
        var failedCountsC = checkUser[0].attempts.failedCounts;

        if(successfulCounts)
        {
            successfulCountsC += successfulCounts
        }
        if(failedCounts)
        {
            failedCountsC += failedCounts
        }


        var update = await Campaign.update({
            attempts:{
                successfulCounts: successfulCountsC,
                failedCounts: failedCountsC
            }
        },{
            where:{tokenAddress}
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