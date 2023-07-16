2021/09/21::19:59
Tags: #
__
# iterator
`begin` denotes first element of the container. `end` denotes one past the last element.
`cbegin` - const_iterator `cend` const_iterator

there is a difference between `begin` and `end` functions defined in `<iterator>` header and  `begin` and `end` member functions of stl containers.

`*iter; // return a reference to the element`
`iter->mem; // dereference iter and return mem member`
`(*iter).mem // same as iter->mem`
`++iter`
`--iter`
`iter1==iter2`
`iter1!=iter2`

`iter1 - iter2; // iterators of [[vector]] and [[string]] can be subtracted`
but there is no `+` operator for iterators

[[insert iterator]]
[[stream iterator]]
[[reverse iterator]]
[[move iterator]]

![[Pasted image 20220406185624.png]]

[[input iterator]] - read elements in a sequence.


[[output iterator]]- write elements. 

[[forward iterator]] - read and write a sequence. move in only one direction.

[[bidirectional iterator]] - read and write a sequence forward or backward. supports `--`

[[random access iterator]] - constant-time access to any position in the sequence. 
