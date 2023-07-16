# 
A = <a1, a2, ... , an>, value v.

find index i such that v = Ai.


```pseudocode
for i = 1 to A.length
	if v == A[i]
		return i
	return NIL
```

Init: if array is have at least one element - it will check equality
Maintanance: loop moves an index to the right until v == Ai. 
Termination: if element is found return its index i. else return NIL.

2022/07/16::18:50
