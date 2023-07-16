[[preprocessor]] runs first. it replaces patterns in the source code with other patterns defined by the programmer (preprocessor directives).

usually compilers runs in two passes.
the first is parsing of the source code. it breaks the source code into small units and organizes it into a structure called a *tree*. `A + B` becomes `A`, `+` and `B` leaves.

then runs (it depends) *global optimizer*.

second pass - *code generator* walks through the parse tree and generates either assembly code or machine instructions for the nodes. the end result is an [[object module]].

then runs a peephole optimizer to look for pieces of code with redundant assembly-language statements.

the [[linker]] then combines a list of object modules into an executable program.

