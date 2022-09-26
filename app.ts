//getSum takes a number array and number in as arguments and returns a multi-dimensional number array
export default function getSum(array: number[], x: number): number[][] {
    let output = [];
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        if (!Number.isInteger(array[i])) {
            console.error("Input is not an integer. It has been skipped and moved on to next array value.");
            continue;
        }
        for (let j = 0; j < arrayLength; j++) {
            if (i == j) {
                continue;
            }
            let a = array[i];
            let b = array[j];
            if (a + b == x) {
                output.push([a, b]);
            }
        }
    }
    return output;
}