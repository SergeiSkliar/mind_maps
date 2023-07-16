
O(n log n)

uses [[cs algo divide and conquer]]

find base case - e.g. an empty subarray or a subbarray with 1 element
Python:
```python
def quicksort(array):
	if len(array) < 2:
		return array
	else:
	pivot = arr[0]
	less = [i for i in array[1:] if i <= pivot]
	greater = [i for i in array[1:] if i > pivot]
	return quicksort(less) + [pivot] + quicksort(greater)
```
C++:
```c++


```