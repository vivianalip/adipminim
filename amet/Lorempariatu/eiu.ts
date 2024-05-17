enum Alphabet {
  A = 'A',
  B = 'B',
  C = 'C',
  // ...assuming the pattern continues for the rest of the alphabet
  Y = 'Y',
  Z = 'Z'
}

// Utility function to get all enum keys
function getAllEnumKeys(): string[] {
  return Object.keys(Alphabet).filter(key => isNaN(Number(key)));
}

// Utility function to get all enum values
function getAllEnumValues(): string[] {
  return Object.keys(Alphabet)
    .map(key => Alphabet[key as keyof typeof Alphabet]);
}

// Example usage
console.log(getAllEnumKeys()); // Outputs all the enum keys
console.log(getAllEnumValues()); // Outputs all the enum values
