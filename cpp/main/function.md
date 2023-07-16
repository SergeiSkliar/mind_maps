

2021/11/09::18:53
Tags: #
__
# function
[[main]]
return type, function name, parameter list, function body

(return type, function name, parameter list) -> function header
function body -> function definition

function header describes an interface between function and another function that calls the first one

[[return]] terminates a function

function returns a value copying the returned value to CPU register or memory location. the calling program examines that location. they have to agree on the type of data at that location.
function prototype tells the calling program what to expect, function definition tells the called program what to return.

[[pointers]] to functions:
`process(think); // passes address of think() to process()`
`process(think()); // passes return value of think() to process()`

`double pam(int);`
`double (*pf)(int); // pf is pointer to function`
`pf = pam; // pf points to pam()`

signature and return type of pointer to function should match with pointed funtion prototype.

[[inline function]]
[[default arguments]]
[[function overloading]]
[[function templates]]
[[function matching]]

functions can an unknown number of arguments
[[std initializer_list]]
C-style [[ellipsis]]


__
### Zero-Links
-
__
### Links
-