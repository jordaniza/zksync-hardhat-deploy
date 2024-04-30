pragma solidity ^0.8.8;

contract Test  {
    

    function failsHere() public {
        require(false, "failMessage");
    }

}
