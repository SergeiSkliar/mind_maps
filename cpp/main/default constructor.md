2021/12/15::20:26
Tags: #
__
# default constructor
C++ provides default constructor implicitly if NONE were defined
`Class::Class() {}`

BUT if you defined any constructor you should define a default constructor
OR code like this
`Class var;`
becomes an error.

two ways to define default constructor
`Class::Class() {arguments}`
second
`Class(const string & name = "name", int n = 0);`

__
### Zero-Links
-
__
### Links
-