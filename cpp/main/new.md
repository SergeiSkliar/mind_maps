2021/08/16::19:56
Tags: #
__
# new
allocating unnamed memory at runtime

`int* pn = new int; // general form is: typeName* pointerName = new typeName`

memory allocated by new is in a region called [[heap]]

to free the memory use [[cpp delete]]. if you do not free memory, it can cause a [[memory leak]]

fot creating a dynamic array:
`int* pt = new int [10];`
do not forget to [[cpp delete]]
`delete [] pt;`

`new` operator call a function `void * operator new();`

there is also placement `new` ([[c++ placement new]]) operator. prototypes for it in header `<new>`.
class objects created by placement new should explicitly call destructors.
`pointer->~ClassName();`


__
### Zero-Links
-
__
### Links
-