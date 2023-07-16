# binding

static (compile-time)
dynamic (run-time)

to access anonymous structure members use `->` operator
`structureName* pt = new structureName;
pt -> memberName;`

rule of thumb: if structure identifier is a name use dot operator (`structureName.memberName`). if structure identifier is a pointer use arrow operator (`pt -> memberName`)


2022/02/23::14:03
