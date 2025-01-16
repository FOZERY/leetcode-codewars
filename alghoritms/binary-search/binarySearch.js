// Template 1
function binarySearchTemplate1(nums, target) {
	if (nums.length === 0) {
		return -1;
	}

	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		mid = left + Math.floor((right - left) / 2);

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

function binarySearchTemplate2(nums, target) {
	if (nums.length === 0) {
		return -1;
	}

	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	if (nums[left] === target) {
		return left;
	}
}

// Template 3
function binarySearchTemplate3(nums, target) {
	if (nums.length === 0) {
		return -1;
	}

	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid;
		} else {
			right = mid;
		}
	}

	if (nums[left] === target) return left;
	if (nums[right] === target) return left;
}
