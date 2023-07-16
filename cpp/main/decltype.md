2021/09/03::19:37
Tags: #
__
# decltype

specifier
`decltype(x) y; // make y of the same type as x`

```c++
int j = 3;  
int &k = j  
const int &n = j;  
decltype(n) i1; // i1 type const int &  
decltype(j) i2; // i2 type int  
decltype((j)) i3; // i3 type int &  
decltype(k + 1) i4; // i4 type int
```

```c++
decltype((variable)); // always a reference type
decltype(variable); // is a reference type ONLY if variable is a reference
```


__
### Zero-Links
-
__
### Links
-