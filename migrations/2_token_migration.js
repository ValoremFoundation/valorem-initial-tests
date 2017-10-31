var BasicToken = artifacts.require("./BasicToken.sol");
var Owner = artifacts.require("./Owner.sol");
var SafeMath = reartifacts.quire("./SafeMath.sol");

module.exports = function (deployer) {
    deployer.deploy(BasicToken);
    deployer.link(BasicToken,Owner);
    deployer.link(BasicToken,SafeMath);
};