2021/08/25::19:41
Tags: #
__
# combinations of types
```c++
struct antarct_year
{
	int year;
	/*something*/
};
antarct_year s1, s2;
antarct_year* pt = &s2;
pt->year = 1990;
antarct_year duo[2];
duo[0].year = 2003;
(trio + 1)->year = 2004; // OR duo[1].year = 2004

const antarct_year* arp = {&s1. &s2};
std::cout << arp[1]->year << std::endl; //access of members

const antarct_year** ppa = arp;
auto ppb = arp;

(*ppa)->year;
(*(ppb+1))->year
```
`

__
### Zero-Links
-
__
### Links
-