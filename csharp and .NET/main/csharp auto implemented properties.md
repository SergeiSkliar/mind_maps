# 
```cs
public int HoursWorked {get; set;}
```
OR
```cs
private int hWorked;
public int HoursWorked
{
	get
	{
		return hWorked;
	}
	set
	{
		hWorked = value;
	}
}
```

to make a property read-only:
```cs
public int HoursWorked { get; private set;}
```

2022/08/10::17:36
