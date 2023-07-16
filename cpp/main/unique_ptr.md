# 
```c++
unique_ptr<string> s1(new string("adsa"));
unique_ptr<string> s2;
s2 = s1; // compiler error, not allowed
```

but compiler allows to assign one `unique_ptr` to another if the source object is a temporary rvalue and disallows it if the source object has some duration.

`unique_ptr` can operate on `new[]`.

2022/05/17::19:54
