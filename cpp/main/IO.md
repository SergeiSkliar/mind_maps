# IO
input/output
headers:

- [[streambuf]]
- [[ios_base]]
- [[ios]]
* [[iostream]] - lib
* [[fstream]] - file I/O
* [[sstream]] - stream I/O

classes of [[iostream]]:
* [[istream]] - type (class)
* [[ostream]] - type (class)


line-oriented method ('\n') 
word-oriented method ('\0')

[[cin]] - [[object]] of [[istream]]
[[cout]] - [[object]] of [[ostream]]
`dec`, `hex`, `oct` - [[manipulator]]s to display integers in decimal (default), hexadecimal and octal form.
```c++
cout.setf(ios_base::fixed, ios_base::floatfield); // fixed-point
```

[[cerr]] - [[object]] of `ostream` (standard error)
[[clog]] - [[object]] of `ostream` (logging)

``<<`` is output operator
it takes two arguments: left-hand is an ostream object, right-hand side is a value
the result of output operator is its left-hand operand

std::[[endl]] is a [[manipulator]] - end the current line and flush the buffer associated with that device

in the example:
`while (cin >> s) // IO lib defines conversion from istream to bool`
`// if input successful cin is true, if not - false`

[[fstream]] - standard library for file I/O

input operator `>>`
it takes two arguments: left-hand is an istream, right-hand is an object
returns left-hand operand as its result


[[buffer]]

[[IO redirection]]
