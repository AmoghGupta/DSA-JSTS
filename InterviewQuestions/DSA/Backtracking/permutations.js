
// Permutations: Focus on arrangements or sequences where the order of elements is significant.

const result = [];
  
function backtrack(currentPermutation, remainingElements) {
  if (remainingElements.length === 0) {
    result.push([...currentPermutation]); // Add a copy to the result
    return;
  }

  for (let i = 0; i < remainingElements.length; i++) {
    const chosenElement = remainingElements[i];

    const nextPermutation = [...currentPermutation, chosenElement];
    const nextRemainingElements = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1));

    backtrack(nextPermutation, nextRemainingElements);
  }
}

const letters = ['a', 'b', 'c'];
backtrack([], letters);
console.log(result);

// Expected Output:
// [
//   [ 'a', 'b', 'c' ],
//   [ 'a', 'c', 'b' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
