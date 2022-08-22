var Campaign = require("../models").Campaign

module.exports = async function(req,res){

    let {name, tokenName, tokenAddress, initialBudget, individualDistribution, scoreRequired, verifiableCredentials,status} = req.body;

    var checkUser = await Campaign.findAll({where:{tokenAddress}});

    if(!checkUser.length)
    {

        var uploadUser = await Campaign.create({
            name, tokenName, tokenAddress, initialBudget, individualDistribution, scoreRequired, verifiableCredentials,status,
            attempts: {
                failedCounts: 0, 
                successfulCounts: 0
            }

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
        res.send({error: "Tooken already exist. Please patch."});
        return;

    }
}