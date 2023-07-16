introduced as a part of C# 9. Supported only in .NET 5

```cs
class Person
{
	public string Name {get; init;}
}
```

we cannot assign to the init-only property unless we are in an object initializer, a constructor, or an init accessor.
```cs
//compiler error
Person p = new Person();
p.Name = "Sally";
//ok
Person p = new Person() {Name = "Sally"};
```

