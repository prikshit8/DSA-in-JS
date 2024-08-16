var maxSubArray = function (nums) {
  let result = nums[0];
  let mini_ans = 0;
  nums.forEach((item) => {
    mini_ans += item;
    result = Math.max(result, mini_ans);
    mini_ans = Math.max(mini_ans, 0);
  });
  return result;
};
