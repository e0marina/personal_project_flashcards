// MVP:
//1. display description of the app on the first card. / oposite side will have a message like "have fun"
//2. create an array of questions and another array of solutions
//3. display each one of those (q's on front and solutions on back)

//==================================================
// GLOBAL VARS
//==================================================

//==================================================
// FUNCTIONS
//==================================================
const questionsArr = [
  "Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0,1]"
];
//answers array
const answerImgArr = new Array();

answerImgArr[0] = new Image();
answerImgArr[0].src = "images/two_sum_solution.png";
