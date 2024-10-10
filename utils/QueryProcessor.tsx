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


  const sumMatch = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
  if (sumMatch) {
    const x: number = parseInt(sumMatch[1]);
    const y: number = parseInt(sumMatch[2]);
    const z: number = parseInt(sumMatch[3]);
    return (x + y + z).toString();
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
  const squareAndCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (.+)\?/);
  if (squareAndCubeMatch) {
    const numbers = squareAndCubeMatch[1].split(", ").map(Number);
    const isSquareAndCube = (num: number) => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    };
    const results = numbers.filter(isSquareAndCube);
    return results.length ? results.join(", ") : "None";
  }

const primeMatch = query.match(/Which of the following numbers are primes: (.+)\?/);
if (primeMatch) {
  const numbers = primeMatch[1].split(", ").map(Number);
  const isPrime = (num: number) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primes = numbers.filter(isPrime);
  return primes.length ? primes.join(", ") : "None";
}

const subtractMatch = query.match(/What is (\d+) minus (\d+)/);
if (subtractMatch) {
  const x: number = parseInt(subtractMatch[1]);
  const y: number = parseInt(subtractMatch[2]);
  return (x - y).toString();
}


const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
if (powerMatch) {
  const base = BigInt(powerMatch[1]);
  const exponent = BigInt(powerMatch[2]);
  
  // Perform manual exponentiation using a loop
  let result = BigInt(1);
  for (let i = BigInt(0); i < exponent; i++) {
    result *= base;
  }
  
  return result.toString();
}

  return "";
}
