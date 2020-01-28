var anagramGroups = require("./anagram_map");

test('should generate groupings of anagrams using primes', () => {
  let test_grams = ['cat', 'hat', 'tah', 'tac', 'dog', 'god', 'ogd'];
  expect(anagramGroups.groupAnagrams(test_grams)).toEqual({"2698": ["hat", "tah"], "5593": ["dog", "god", "ogd"], "710": ["cat", "tac"]});
});

test('should return the same value for two words containing same letters', () => {
  
  let word_a = 'williamgarrett';
  let word_b = 'grillatwartime';

  let sorted_a = word_a.split('').sort().join('');
  let sorted_b = word_b.split('').sort().join('');

  // Proof of anagram between 'williamgarrett' and 'grillatwartime'
  expect(sorted_a).toEqual(sorted_b);

  // Values of sorted anagrams
  val_sorted_a = anagramGroups.getWordVal(sorted_a);
  val_sorted_b = anagramGroups.getWordVal(sorted_b);

  // Values of unsorted anagrams
  value_a = anagramGroups.getWordVal(word_a);
  value_b = anagramGroups.getWordVal(word_b);

  console.log(word_a, ":", value_a);
  console.log(word_b, ":", value_b);
  console.log(sorted_a, ":", val_sorted_a);
  console.log(sorted_b, ":", val_sorted_b);
  console.log(Number.MAX_VALUE);
  console.log(value_a);
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MAX_SAFE_INTEGER > val_sorted_a);
  // TEST SHOULD PASS
  expect(value_a).toEqual(value_b);
});
