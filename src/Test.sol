pragma solidity ^0.8.8;

contract Test {
    error Hell(uint8 _hellId);

    function failsHere() public {
        revert Hell(12);

        require(false, "failMessage");
    }
}
