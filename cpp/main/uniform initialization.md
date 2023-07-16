# 
lbrace-enclosed list (list-initialization)

```c++
int x = {5};
double y {2.5};
short arr[5] {1,2,3,4,5};
int * ar = new int [4] {2,3,4,5};
```

doesn't allow [[type narrowing]]
```c++
char c1 {1.57e27}; // double-to-char, compile-time error  
char c2 = {459585821};// int-to-char,out of range, compile-time error
```

2022/05/25::15:12
