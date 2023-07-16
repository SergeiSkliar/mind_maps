# 
if names must differ, then thay should mean something different.

names like `a1, a2, ... aN` noninformative.

Example:
```c++
void copyChars(char a1[], char a2[]){
	int size = (sizeof(a)/sizeof(*a));
	for (int i = 0; i != size; ++i)
	a2[i] = a1[i]; // better use source and destination names
}
```


better NOT using noise words, like `ProductInfo` and `ProductData`.
Another bad example:
```c++
getActiveAccount();
getActiveAccounts();
getActiveAccountInfo();
```

2022/03/25::23:03