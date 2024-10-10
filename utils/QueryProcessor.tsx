export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is paraujo."
    );
  }

  if (query.toLowerCase().includes('your name')) {
    return (
      "paraujo"
    );
  }

  if (query.toLowerCase().includes('largest')) {
    const elems = query.split(": ");
    console.log(elems)
    let nums = elems[1].split(", ");
    nums[2] = nums[2].slice(0, -1); 
    console.log(nums)
    const numArray = nums.map(Number);
    console.log(numArray)
    return Math.max(...numArray).toString();
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x * y).toString();
  }

  return "";
}
