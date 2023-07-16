# this
points to the invoking object

`this` pointer by default is `const` pointer which points to non-`const` object.
to make `this` point to `const` object use `const` after parameter list of member function declaration and definition.


```c++
const Class & Class::topval(const Class & s) const {
	if (s.total_val > total_val)
		return s;
	else
		return *this;
}
```

A `const` member function thar returns `*this` as a reference should have a reference to `const` return type.

2021/12/16::13:50