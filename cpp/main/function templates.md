2021/12/07::22:25
Tags: #
__
# function templates

`template <typename Type>;`
`void func(Type & a, Type & b);`

explicit specialization (non-template)
`template <> void func<type>(type &, type &);`
OR
`template <> void func(type &, type &);`

explicit instantiation
`template void Swap<int>(int, int);`

__
### Zero-Links
-
__
### Links
-