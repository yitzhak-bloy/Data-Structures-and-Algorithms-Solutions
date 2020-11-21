const mergeSortedArrays = (ar1, arr2) => [...ar1, ...arr2].sort((a, b) => a - b);

mergeSortedArrays([0,3,4,31], [3,4,6,30]);
