# 
```c++
dynamic_cast<Type *>(pt);
```
it converts the pointer `pt` to a pointer of type `Type*` if the pointed-to object (`*pt`) is of type `Type` or derived directly or inderectly from `Type`. Otherwise, it evaluates to 0, null pointer. 

if used with references instead of pointers, to indicate failure `dynamic_cast` throws [[bad_cast]] exception.


2022/05/15::16:31
