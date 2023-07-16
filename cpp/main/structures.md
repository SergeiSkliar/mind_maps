keyword `struct`

by default all members in `struct` gave `public` access.

```c++
struct structName {
	char var1[20];
	int var2;
	double var3;
};
```

```c++
struct inflatable {
	char name[20];
	float volume;
	double price;
};
```

```c++
inflatable boat1; // C++ style for declaring a variable of struct
struct inflatable boat2; // C style

inflatable duck = {"Daphne", 2.99, 5.56}; // [[initialization]]

inflatable general {} ; // default initialization to 0
```


