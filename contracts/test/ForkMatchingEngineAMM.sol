/**
 * @author Musket
 */
// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.9;
import "@positionex/matching-engine/contracts/test/MockMatchingEngineAMM.sol";

contract ForkMatchingEngineAMM is MockMatchingEngineAMM {
    function setCounterParty02(address a) public {
        counterParty = a;
    }

    function resetFeeShareAmm() public {
        feeShareAmm = 0;
    }
}
