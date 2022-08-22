var User = require("../models").Users

module.exports = async function(req,res){

    let {walletAddress} = req.params;

    if(!walletAddress)
    {
        res.send({error: "Invalid Request"});
        return;
    }

    var checkUser = await User.findAll({where:{walletAddress: walletAddress}});

    if(!checkUser.length)
    {

            res.send({error: "Wallet Not Found"});
            return;

    }else{
        
            res.send({data: checkUser[0]});
            return;      

    }
}