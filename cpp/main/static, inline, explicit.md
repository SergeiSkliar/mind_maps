`static` - for this members memory allocated once with `static` or `thread` storage duration. not associated with any object.
`static` cannot be const, virtual, volatile
	`static` data members cannot be `mutable`
	may be `inline`

stored in the regions, called .bss or .data


`inline` - a function defined entirely inside a class/struct/union definition is implicitly inline
`constexpr` - implicitly inline
`inline` replaces code inside function definition for every function call.

`explicit` - in constructors with one parameter it forbids implicit type conversions. also for more parameters - if they are default-initialized

