2021/12/15::20:01
Tags: #
__
# constructor
you can't create a class object the usual way with `{}`
reason - private access status.

need constructors

`Class(const string & name, long n = 0, double d = 0);` // public interface with optional default values

`Class::CLass(const string & name, long n, double d)`
`{`
`code`
`}`

Explicit constructor call
`Class var = Class(arguments);`

Implicit call
`Class var2(arguments);`

dynamic allocation
`Class *pvar = new Class(args);`

there also [[copy constructor]] and [[move constructor]].

member initialization list:
`ClassName::ClassName(typename t) : classmember(t) // initialize classmember to t`

operators and constructors can be defined in private section of the class - becoming inaccessible. this is a trick - for example, if class objects should not be copied.

`const` and reference data members can be initialized only in initializer list.
also the order of initializer list doesn't matter. the order in which members are declared inside a class matter.
```c++
class X{
int i;
int j;
public:
	X(int val) : j(val), i(j) {} // undefined: i is initialized before j
}
```


__
### Zero-Links
-
__
### Links
- [[default constructor]]