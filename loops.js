// 3x3 Arrays for testing
const testMatrices = [
    [   // ascending numbers
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [   // all even numbers
        [-2, 4, -6],
        [8, -10, 12],
        [14, -16, 18]
    ],
    [   // all odd numbers
        [1, 3, 5],
        [-7, -9, 11],
        [13, 15, -17]
    ],
    [   // digits of pi pattern
        [3, -1, 4],
        [1, 5, -9],
        [2, 6, -5]
    ],
    [   // includes undefined values
        [0, 1, undefined],
        [13, 17, 19],
        [5, undefined, 8]
    ],
    [   // includes null values
        [0, 1, null],
        [13, null, 7],
        [9, 2, null]
    ],
    [   // identity matrix
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],
    [   // mixed large integers
        [500, 100, 200],
        [300, 1000, 400],
        [700, 200, 600]
    ],
    [   // negative to positive range
        [-3, -2, -1],
        [0, 1, 2],
        [3, 4, 5]
    ],
    [   // uniform values
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ]
];




// Example completed function
function sumMatrix(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            total += val;
        }
    }
    console.log("The sum total is:", total);
    return total;
}

function rowSum(matrix) {
    const RowSums = [];
    for (i = 0; i < matrix.length; i++) {
        let RowTotal = 0;
        for (const val of matrix[i]) {
            RowTotal += val;
        }
        RowSums.push(RowTotal)
    }
    console.log("The row sum total is:", RowSums);
    return RowSums;
}

function colSum(matrix) {
    const ColSums = [];
    for (j = 0; j < matrix[0].length; j++){
        let ColTotal = 0;
        for (i = 0; i < matrix.length; i++){
            ColTotal += matrix[i][j];
        }
        ColSums.push(ColTotal)
    }
    console.log("The column sum total is:", ColSums);
    return ColSums;
}

function countZeros(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            if (val === 0) {
                total++;
            }
        }
    }
    console.log("The number of zeros is:", total);
    return total;
}

function minValue2D(matrix) {
    let smallest = Infinity;
    for (const row of matrix) {
        for (const val of row) {
            if (val < smallest) {
                smallest = val;
            }
        }
    }
    console.log("The smallest value is:", smallest);
    return smallest;
}

function maxValue2D(matrix) {
    let largest = null;
    for (const row of matrix) {
        for (const val of row) {
            if (val > largest) {
                largest = val;
            }
        }
    }
    console.log("The largest value is:", largest);
    return largest;
}

function doubleMatrix(matrix) {
    const NewMatrix = [];
    for (i = 0; i < matrix.length; i++) {
        const NewRow = [];
        for(j = 0; j < matrix[i].length; j++) {
            NewRow.push(matrix[i][j] * 2);
        }
        NewMatrix.push(NewRow);
    }
    console.log("The doubles of the values are:", NewMatrix);
    return NewMatrix;
}

function positiveMap(matrix) {
    const PositiveMap = []
    for (i = 0; i < matrix.length; i++) {
        const NewRow = [];
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                NewRow.push(true);
            }
            else {
                NewRow.push(false);
            }
        }
        PositiveMap.push(NewRow);
    }
    console.log("The integer value is:", PositiveMap);
    return PositiveMap;
}

function diagonalSum(matrix) {
    let DiagonalSum = 0;
    for (i = 0; i < matrix.length; i++) {
        DiagonalSum += matrix[i][i];
    }
    console.log("The diagonal sum is:", DiagonalSum);
    return DiagonalSum;
}

function transposeMatrix(matrix) {
    const TransposedMatrix = [];
    for (j = 0; j < matrix[0].length; j++) {
        const NewRow = [];
        for (i = 0; i < matrix.length; i++){
            NewRow.push(matrix[i][j]);
        }
        TransposedMatrix.push(NewRow);
    }
    console.log("The transposed matrix is:", TransposedMatrix);
    return TransposedMatrix;
}