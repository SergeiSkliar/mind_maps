2021/08/16::20:48
Tags: #
__
# delete
return memory allocated by [[new]]

`int* pt = new int;
...
delete pt;`

if not used after `new` can cause [[memory leak]]

DO NOT free memory that was previously freed. [[undefined behavior]]
a little different syntax for arrays:
`delete [] pt;`

