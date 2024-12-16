# Binary Search

## How do we identify binary search?

Binary Search is an algorithm that divides the search space in 2 after every comparison. Binary Search should be considered every time you need to _search for an index or element in a collection_. If the collection is unordered, we can always sort it first before applying Binary Search.

## 3 Parts of a Successful Binary Search

Binary Search is generally composed of 3 main sections:

-   Pre-processing - Sort if collection is unsorted. (we always need **sorted collection**)
-   Binary Search - Using a **loop** or **recursion** to divide search space in half after each comparison.
-   Post-processing - Determine viable candidates in the remaining space.

## Templates

### Binary Search Template I

The most basic template for BS.

```cpp
int binarySearch(vector<int>& nums, int target){
  if(nums.size() == 0)
    return -1;

  int left = 0, right = nums.size() - 1;
  while(left <= right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}
```

#### Distinguishing Syntax:

Initial Condition: left = 0, right = length-1  
Termination: left > right  
Searching Left: right = mid-1  
Searching Right: left = mid+1
