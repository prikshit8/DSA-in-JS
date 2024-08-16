var twoSum = function (nums, target) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[target - nums[i]] !== undefined)
      return [cache[target - nums[i]], i];
    else if (cache[nums[i]] === undefined) cache[nums[i]] = i;
  }
};
