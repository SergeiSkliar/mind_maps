# 
properties are used to provide access to a private fields *in cases where the field is needed by the other classes*.
```cs
public int HoursWorked
{
	get
	{
		return hWorked;
	}
	set
	{
		if (value > 0)
			hWorked = value;
		else
			hWorked = 0;
	}
}
```

[[csharp auto implemented properties]]


2022/08/10::17:32
