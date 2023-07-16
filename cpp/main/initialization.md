happens when a variable is given a value when it is created.
### Overview of C++ Variable Initialization
https://www.caichinger.com/cpp/initialization.html

default initialization
```c++
int i;
```
direct initialization
```c++
int i2(42);
//c++11
int i2 {42};
```
copy initialization
```c++
int i3 = 3;
//c++11

int i3 = {3};
```
value initialization
```c++
int i4 = int();
//c++11
int i4 {};
```

[[c++ aggreagate initialization]]

list initialization

```c++
int units_sold = 0;  
int units_sold = {0};  // list initialization
int units_sold{0};  // list initialization
int units_sold(0);

int i = {}; // 0
int i{}; // 0
```

list initialization with built-in types: the compiler won't allow it if the initializer might lead to the loss of information.

```c++
long double ld =  3.1415926536;
int a{ld}, b = {ld}; //error
int c(ld), b = ld; //ok
```

default initialization

variable defined without an initializer it is default initialized. default value

variables defined outside of any function initialized to 0. 
variables defined inside of any function uninitialized. undefined

if some variable need to be constant use declaration + [[initialization]]
`const int i = 1;`

