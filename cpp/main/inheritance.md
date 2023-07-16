# 
C++ has three types of inheritance: 
- [[public inheritance]] - [[is-a]] relationship
- [[private inheritance]] [[has-a]] relationship
- [[protected inheritance]] [[has-a]] relationship

![[Pasted image 20220504222309.png]]

Constructors, destructors and assignment operators are NOT inherited.

base class:
```c++
class A
{
 int x;
 int y;
 public:
 /* some code */
};

```

derived class:
```c++
class B : public A // public derivation
{

};

```

[[access redefiniton with using]]

[[constructors - access of derived class]]
[[relationship between derived and base classes]]

[[polymorphic public relationships]]
[[static and dynamic binding]]

[[abstract base class]]
[[inheritance and dynamic memory allocation]]

[[multiple inheritance]]

2022/04/11::17:34
