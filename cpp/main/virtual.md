# 
`virtual` specifier - specifies that a non-static member function is virtual.

virtual functions are members whose behavior can be overriden in derived class.

constructors cannot be virtual.
destructors can be virtual - in that case the destructor corresponding to the object type is called.
[[friends]] cannot be virtual.

compiler adds a hidden member to each object. that member holds a pointer to an array of function addresses - [[virtual function table]].

overhead:
- each object has its size increased by the amount needed to hold an address
- for each class a compiler creates a table of addresses of virtual functions
- for each function call, there's an extra step of going to a table to look up an address


2022/04/13::16:20
