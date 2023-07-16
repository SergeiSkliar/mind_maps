# stream iterator
creating a stream iterator we must specify the tyoe of objects that the iterator will read or write.
the type must have input `>>` or output `<<` operators defined.

`istream_iterator`
`istream_iterator` are permitted to use lazy evaluation.
```c++
istream_iterator<T>in(is); // reads from input stream
istream_iterator<T>end;
in1 == in2;
in1 != in2;
*in;
in->mem; // (*in).mem
++in;
in++;
```
![[Pasted image 20220401195712.png]]

`ostream_iterator`
operates on C-style strings.
```c++
ostream_iterator<T>out(os);
ostream_iterator<T>out(os, d); // d points to a null-terminated character array.
out = val;
*out, ++out, out++; // exist but do nothing - returns out
```
![[Pasted image 20220401195737.png]]


2022/04/01::19:40
