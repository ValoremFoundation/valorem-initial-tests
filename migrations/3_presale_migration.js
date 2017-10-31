var Presale = artifacts.require("./Presale.sol");
var Owner = artifacts.require("./Owner.sol");
var SafeMath = reartifacts.quire("./SafeMath.sol");

module.exports = function (deployer) {
    deployer.deploy(Presale);
    deployer.link(BasicToken, Owner);
    deployer.link(BasicToken, SafeMath);
};