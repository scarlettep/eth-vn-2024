// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract QuadraticAuctionProxy is TransparentUpgradeableProxy {
    
    address private constant initProxy = 0xa5D617BbCb81F05BA5A662341261402E86B215C8;
    
    constructor() TransparentUpgradeableProxy(initProxy, msg.sender, "") {
    }
    
}
