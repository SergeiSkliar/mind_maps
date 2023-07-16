2022/02/09::16:40
Tags: #
__
# function matching
```c++
void f();  
void f(int);  
void f(int, int);  
void f(double, double = 3.14);  
f(5.6); // calls void f(double, double) - the second argument have a default value
```

__
### Zero-Links
-
__
### Links
-