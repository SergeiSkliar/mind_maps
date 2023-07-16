2021/08/30::20:05
Tags: #
__
# references
defines an alternative name to an object

IS NOT AN OBJECT

we may no define references to references.
references must be initialized

`int ival = 1024;`
`int &refVal = ival;  // refVal refers to (is another name for) ival  `
`int &refVal2; // error: a reference must be initialized`

`refVal = 2; // assigns 2 to the object to which refVal refers, i.e., to ival `

`int ii = refVal; // same as ii = ival`

`int &r = i;  // & follows a type and is part of a declaration; r is a reference`

`p = &i; // & is used in an expression as the address-of operator
`  
`*p = i; // * is used in an expression as the dereference operator
`
`int &r2 = *p; // & is part of the declaration; * is the dereference operator`

reference might be defined to a pointer:
`int i = 42;`
`int *p;`
`int *&r = p; // r is a reference to the pointer p`
`r = &i; // r refers to a pointer; assigning &i to r makes p point to i`
`*r = 0; // dereferencing r yields i; i is changed to 0`
__
### Zero-Links
-
__
### Links
-
