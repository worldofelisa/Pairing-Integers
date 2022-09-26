import getSum from "./app";
import { describe, it } from "mocha";
import {expect} from "chai";

//initializes the testing of the whole project
describe('Integer Pairing Testing', () => {
    //expected to pass, passing
    it('takes in 2 numbered arrays and returns both pairs', () => {
        let result = getSum([3,7], 10);
        expect(result).to.have.deep.members([[7,3], [3,7]]);
    });
    //expected to pass, passing
    it('takes in an array containing floats and returns none', () => {
        let result = getSum([2.25, 2.5], 5);
        expect(result).to.not.have.deep.members([[2.25,2.5], [2.5,2.25]]);
    });
    //expected to pass, passing
    it('takes in a multi number array and reutrns many pairs that equal the intended number', () => {
        let result = getSum([1,2,3,4,5,6,7,8,9,0], 7);
        expect(result).to.have.deep.members([[2,5], [5,2], [7,0], [0,7], [3,4], [4,3], [1,6], [6,1]]);
    });
    //expected to pass, passing
    it('takes in an array of mixed numerical values and returns blank as no match', () => {
        let result = getSum([1.25, 2.47, 3.86, 4.99, 5.2, 6, 7.85, 8.25, 9, 0], 10);
        expect(result).to.have.deep.members([]);
    });
    //expected to pass, passing
    it('takes in a range of positive and negative numbers and return those that match', () => {
        let result = getSum([59, -21, 43, 19, -25, -8, -37, 12], 22);
        expect(result).to.have.deep.members([[59,-37],[-21,43],[-37,59],[43,-21]]);
    });
    //expected to pass, passing
    it('takes in a one number array and returns none', () => {
        let result = getSum([3], 3);
        expect(result).to.not.have.deep.members([[3]]);
    });
});

//expected to fail, failing (compiler error)
// describe('mixedArrayAdd', function () {
//     it('doNotReturn', function () {
//         let result = getSum([23, "type", 52, 4.25, -11, "script", "1", -9.99], 12);
//         expect(result).to.not.have.deep.members([[23,-11],[-11,23]]);
//     });
// });

//expected compiler error due to strongly typed number array being passed in, received compiler error
// describe('stringArray', function () {
//     it('willNotWork', function () {
//         let result = getSum(["three", "seven"], 10);
//         expect(result).to.have.deep.members([[]]);
//     });
// });
