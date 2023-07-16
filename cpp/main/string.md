
# string

`std::string s1;`
`std::string s2(s1); // equivalent to s2 = s1`

`string::size_type`

before accessing any character in `std::string` check if the string is empty
`if (!s.empty()) cout << s[0];`
if s is empty -> s[0] is undefined.
for index or subscript use string::size_type:
`for (decltype(s.size()) index = 0; index < s.size();...) OR`
`for (string::size_type index = 0; index < s.size();...)`

![[string_search.jpg]]

![[string_conversions.jpg]]

2021/08/26::22:18