# 
```c++
char c1 = 1.57e27; // double-to-char, undefined behavior  
char c2 = 459585821; // int-to-char, undefined behavior
char c1 {66}; // int-to-char, in range, allowed  
double c2 = {66}; // int-to-double, allowed
```

2022/05/25::15:15
