2021/08/31::20:25
Tags: #
__
# const
qualifier makes variable unmutable.
must be initialized at the same time as it created.

`const int bufSize = 512;`
`const int i = getsize(); // initialized during runtime`

`int i = 42;`
`const int ci = i; // value of i copied into ci`
`int j = ci; // ok, value of ci copied into j`

to share a const object use `extern` keyword
`extern const int bufSize = fcn();`

const expression - value cannot be changed, can be evaluated at compile time.

__
### Zero-Links
-
__
### Links
- [[const exercises]]