export const validAnagram = (str1: string, str2: string) => {
  const frequencyCounter1: { [key: string]: number } = {};
  const frequencyCounter2: { [key: string]: number } = {};

  if (str1.length !== str2.length) return false;

  for(let i = 0; i < str1.length; i++){
    const letter1 = str1[i];
    frequencyCounter1[letter1] = (frequencyCounter1[letter1] || 0 ) + 1;
    
    const letter2 = str2[i];
    frequencyCounter2[letter2] = (frequencyCounter2[letter2] || 0) + 1;
 }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
