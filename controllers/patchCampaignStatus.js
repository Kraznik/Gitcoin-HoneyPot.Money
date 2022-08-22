var Campaign = require("../models").Campaign

module.exports = async function(req,res){

    let {tokenAddress} = req.params;

    let{status} = req.body;

    if(!status)
    {
        res.send({error: "Invalid Request"});
        return;
    }

    var checkUser = await Campaign.findAll({where:{tokenAddress}});

    if(!checkUser.length)
    {

            res.send({error: "Campaign not found"});
            return;

    }else{

        var update = await Campaign.update({
            status
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