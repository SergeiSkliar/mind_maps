# bitwise

`~` bitwise NOT
`<<` right shift
`>>` left shift
`&` bitwise AND
`^` bitwise XOR
`|` bitwise OR

[[bit shift]]

left shift inserts 0-valued bits on the right.
right shift: inserts 0 values on the left if type is unsigned. if type is signed then the behavior is implementation defined - either inserts 0 value or copies of the sign bit.

`&` result is 1 if both operands are 1; `|` result is 1 if either or both operands is 1; `^` is 1 if either but not both operands is 1. 


2022/02/23::14:03
