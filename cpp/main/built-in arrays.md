# built-in arrays
values of the same type stored consecutively in memory. index of a built-in arrays is NOT an `unsigned` type.

array declaration uses array name to label storage
`sizeof` yields the size of the whole array
`&` returns address of the whole array

typeName arrayName[arraySize]

access to elements through subscript or index
int months[12];
months[0]; //first element
months[11]; //last element. i.e. (arraySize - 1)

int someArray[3];
someArray[0] = 1; // assign value
int someArray2[3] = {1,2,3}; //create, initialize
```c++
int size = 10;
int arr[size]; // error: dimension should be const
constexpr int sz = 10;
int arr[sz]; // ok
```
you can't initialize an array as a copy of another, nor assign one array to another
```c++
int a[] = {1,2};
int a2[] = a; // error
a2 = a; // error

#include <cstddef>
size_t b; // size_t is a machine-specific unsigned type`
```
__


2022/02/23::14:01
