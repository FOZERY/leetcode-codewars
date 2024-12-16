// Template 1
function binarySearchTemplate1(nums, target) {
	if (nums.length === 0) {
		return -1;
	}

	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		mid = left + (right - left) / 2;

		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

// Template 2
