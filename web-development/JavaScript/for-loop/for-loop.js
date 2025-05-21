// for loop

// SYNTAX: for (initial variable;condition;iteration)

// 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  console.log("*****************");
  
  // 3 - 13
  for (let i = 3; i <= 13; i++) {
    console.log(i);
  }
  
  console.log("*****************");
  
  // 0 - 4
  for (let z = 0; z < 5; z++) {
    console.log(z);
  }
  
  console.log("*****************");
  
  // [1, 2, 3, ..., 20]
  let arr1 = [];
  for (let x = 1; x < 21; x++) {
    arr1.push(x);
  }
  
  console.log(arr1);
  
  // [0, 2, 4, 6, 8]
  // a += 2 or a = a + 2
  let arr2 = [];
  for (let a = 0; a <= 8; a += 2) {
    arr2.push(a);
  }
  console.log(arr2);
  
  // 10 - 12
  for (let h = 10; h < 13; h++) {
    console.log(h);
  }
  
  // why for loop
  let numbers = [10, 15, 6, 7, 50]; // 88
  let sum = 0;
  
  // WITHOUT FOR
  // sum = sum + numbers[]
  // sum += numbers[0]; // 0 = 0 + 10 = 10
  // sum += numbers[1]; // 10 = 10 + 15 = 25
  // sum += numbers[2]; // 25 = 25 + 6 = 31
  // sum += numbers[3]; // 31 = 31 + 7 = 38
  // sum += numbers[4]; // 38 = 38 + 50 = 88
  // console.log(sum); // 88
  
  // WITH FOR
  // let numbers = [10, 15, 6, 7, 50]; // 88
  // let sum = 0;
  console.log("**BETTER WAY**");
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); // 88
  
  console.log("*****************");
  
  let numbers1 = [10, 24, 100, 70, 95];
  // [20, 48, 200, 140, 190]
  for (let i = 0; i < numbers1.length; i++) {
    numbers1[i] = numbers1[i] * 2;
    // numbers1[i] *= 2;
    // console.log(numbers1)
  }
  console.log(numbers1);
  