/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <typeinfo>
using namespace std;

int main()
{
//auto i = 0, *p = &i;
//auto sz = 0, pi = 3.14;
int i = 0, &r = i;
auto a = r; // 
const int ci = i, &cr = ci;
auto b = ci; // b is an int (top-level const in ci is dropped)
auto c = cr; // c is an int (cr is an alias for ci whose const is top-level)
auto d = &i; // d is an int*(& of an int object is int*)
auto e = &ci; // e is const int*(& of a const object is low-level const)
const auto f = ci; 
auto &g = ci; // g is a const int& that is bound to ci
//auto &h = 42; // error: we can't bind a plain reference to a literal
const auto &j = 42;
cout << a << " " << b << " " << c << " " << d << " " << e << " " << g << endl;;
cout << typeid(a).name() << " " << typeid(b).name() << " " << typeid(c).name()
<< " " << typeid(d).name() << " " << typeid(e).name() << " " << typeid(g).name() << endl;

/
a = 42; b = 42; c = 42;
decltype(i) d = 42; //e = 42; 
decltype(ci) g = 42;

const int i = 42;
auto j = i; const auto& k = i; auto* p = &i;
const auto j2 = i, & k2 = i;


    return 0;
}
