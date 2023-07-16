similar to [[structures]] but can hold only one type at a time

```c++
union something {
	int val1;
	long val2;
	double val3;
};

something bucket;
bucket.val1 = 2;
cout << bucket.val1;
bucket.val3 = 3.2;
cout << bucket.val3;
```

`union`s often are used in low level programming or for space saving