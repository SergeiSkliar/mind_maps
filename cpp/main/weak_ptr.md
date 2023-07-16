# 
does not control the lifetime of the object to which it points.
binding a `weak_ptr` to a `shared_ptr` does not change the reference count of that `shared_ptr`.

we cannot use `weak_ptr` to access its object directly.
instead use `.lock()`

2022/10/10::17:26
