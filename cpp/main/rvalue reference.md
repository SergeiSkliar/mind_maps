# 
`&&`

literal constants (aside from C-style strings), expressions such as `x+y`, function return values (if function does not return a reference).
```c++
int x = 10;  
int y = 23;  
int && r1 = 13;  
int && r2 = x + y;  
double && r3 = std::sqrt(2.0);
```

2022/05/25::16:59
