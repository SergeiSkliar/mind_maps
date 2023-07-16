2021/08/17::20:15
Tags: #
__
# pointers
point to an object. pointer itself is an object (unlike [[references]]).

IS AN OBJECT

int ival = 42;  
int *p = &ival; // p holds the address of ival; p is a pointer to ival
![[Pasted image 20210830201030.png]]

the value (address) of a pointer can be in 4 states:
1. point to an object
2. point to the location immediately past the end of an object
3. null pointer - not bound to any object
4. invalid pointer

dereference operator *  

when we assign to *p we assign to the object to which p points

we may dereference only a valid pointer

int *p;  
pointer

// * follows a type and is part of a declaration; p is a

DON'T DO THAT:
int* ptr;
*ptr = 2324;

Always initialize a pointer to a definite and appropriate address before applying the dereferencing operator *


int* p;
pt = 0xB8000000; // type mismatch
pt = (int*) 0xB8000000; // ok

indirect membership operator `->`

void* pointer: used to deal with memory as memory.

pointers can be subtracted. the result is `ptrdiff_t` stl type. defined in `cstddef`.

__
### Zero-Links
-
__
### Links
- [[pointer arithmetic]]

