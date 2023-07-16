# static
[[static declarations of namespace members with static storage duration and internal linkage]]
[[static definitions of block scope variables with static storage duration and initialized once]]
[[static declarations of class members not bound to specific instances]]

exists while entire program is executed.
`static int count = 0;`
an uninitialized static variable has all its bits set to 0. zero-initialized.

linkage:
external (multiple files) - declare OUTSIDE any block
internal (one file) - declare OUTSIDE any block with modifier `static`
no linkage (one function) - declare INSIDE a block with modifier `static`

`int global = 1; // external`
`static int one_file = 2; // internal`
`{ static int no_link = 3; } // no linkage`

stored not in stack nor in heap. special memory - `.data` and `.bss`.
compiler allocates a fixed block of memory to hold all static variables.

## static with functions
makes function known only to a file in which it is declared and defined (use keyword in declaration and definition).

[[static class members]]

https://habr.com/ru/post/527044/