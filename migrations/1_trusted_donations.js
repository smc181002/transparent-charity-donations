const TrustedDonations = artifacts.require("./TrustedDonations.sol")

module.exports = function(deployer, orgName) {
    deployer.deploy(TrustedDonations, orgName)
}