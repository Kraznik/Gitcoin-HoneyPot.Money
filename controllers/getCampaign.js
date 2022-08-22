var Campaign = require("../models").Campaign

module.exports = async function(req,res){

    let {tokenAddress} = req.params;

    if(!tokenAddress)
    {
        res.send({error: "Invalid Request"});
        return;
    }

    var checkUser = await Campaign.findAll({where:{tokenAddress}});

    if(!checkUser.length)
    {

            res.send({error: "Campaign Not Found"});
            return;

    }else{
        
            res.send({data: checkUser[0]});
            return;      

    }
}