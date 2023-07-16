 prototypes for it in header `<new>`.
class objects created by placement new should explicitly call destructors.
`pointer->~ClassName();`

A placement new expression lets us pass additional arguments to `new`.

We can prevent `new` from throwing an exception by using a different form of `new`, placement new:
```c++
int *p1 = new (nothrow) int;
```
