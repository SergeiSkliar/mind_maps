# static_cast
static_cast<> - cast values of one numeric type to another

`static_cast<typeName> value`
`static_cast<long> int_cariable`

`double slope = static_cast<double>(j) / i;`

static_cast can perform conversion that the compiler will not generate automatically.
e.g. pointer value that is stored in void*
`void* p = &r;`
`double* dp = static_cast<double*>(p);`

2021/10/08::22:17