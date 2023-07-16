compile time polymorphism (early binding) (function overloading, operator overloading)

runtime polymorphism (late binding) (function overriding, virtual functions)

```c++
//early binding

class Base
{
public:
	void print() { cout << "Base class" << endl;}
}
class Derived : public Base
{
public:
	void print() { cout << "Derived class" << endl;}
}

int main()
{
	Base *bc = new Derived;
	bc->print();
}
```

```c++
//late binding
class Base
{
public:
	virtual void print() { cout << "Base class" << endl;}
}
class Derived : public Base
{
public:
	void print() { cout << "Derived class" << endl;}
}
int main()
{
	Base *bc = new Derived;
	bc->print();
	//Base base = Base();
	//base.print();
	//Derived d = Derived();
	//d.print();
}
```

when the base class pointer contains the derived class address, the object always executes the base class function.