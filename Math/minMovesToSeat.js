// 2037. Minimum Number of Moves to Seat Everyone
// Acceptance Rate: 87.7%

// Test case:
// input: seats = [3,1,5], students = [2,7,4]
// Expected output: 4
// Explanation: The students are moved as follows:
// - The first student is moved from from position 2 to position 1 using 1 move.
// - The second student is moved from from position 7 to position 5 using 2 moves.
// - The third student is moved from from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.

var minMovesToSeat = function (seats, students) {
    let seat = seats.sort((a, b) => a - b);
    let student = students.sort((a, b) => a - b);
    let totalMoves = 0;
    for (let i = 0; i < seat.length; i++) {
        totalMoves += Math.abs(seat[i] - student[i])
    }
    return totalMoves;
};

console.log(minMovesToSeat([3,1,5], [2,7,4])) // 4