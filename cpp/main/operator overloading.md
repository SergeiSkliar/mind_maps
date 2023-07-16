2021/09/29::20:26
Tags: #
__
# operator overloading
polymorphism

an *operator function* is used to overload an operator 
`operatorop(arguments)`
`operator+()`
`operator*()`

in essence the `obj1.operator+(obj2)` and `obj1 + obj2` is thee same member function call.

- at least on of the operands must be user-defined type
- can't violate the syntax rules
- can't alter operator precedence
- can't create new operator symbols
- can't overload: `sizeof` `.` `.*` `::` `?:` `typeid` `const_cast` `dynamic_cast` `reinterpret_cast` `static_cast`
- only member function can overload the following: `()` `=` `[]` `->`

general form for overloading `<<` operator:
`ostream & operator<<(ostream & os, const class_name & obj) {`
`	os << ...; // display obj contents`
`	return os; }`



![[Pasted image 20211219221415.png]]

__
### Zero-Links
-
__
### Links
-