2021/09/29::20:31
Tags: #
__
# conditional
`condition ? exp1 : exp2;`
exp2 evaluated ONLY if condition false.

the result is lvalue if both expressions are lvalues or can be converted to the common lvalue. otherwise - rvalue.

can be nested
`condition ? exp1 : exp2 ? exp3 : exp4;`
`finalg = (grade > 90) ? "high pass" : (grade < 60) ? "fail" : "pass";`

__
### Zero-Links
-
__
### Links
-