2021/12/07::22:20
Tags: #
__
# function overloading
function with the same name but different signature.

OK:
`int square(int);`
`double square(double);`

NOT OK:
`int square(int);`
`double square(int);`
`double cube(double);`
`double cube(double &);`
__
### Zero-Links
-
__
### Links
-