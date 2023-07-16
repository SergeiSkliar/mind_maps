this function does three things:
- loop over employees
- check if employee need do be paid
- pays employee

```java
public void pay(){
	for (Employee e : employees){
		if (e.isPayday()){
		Money pay = e.calculatePay();
		e.deliverPay(pay);
		}
	}
}
```

Each of these three functions do one thing:
```java
public void pay(){
	for (Employee e : employees){
	payIfNecessary(e);
	}
}

public void payIfNecessary(Employee e){
	if (e.isPayday()){
	calculateAndDeliverPay(e);
	}
}

public void calculateAndDeliverPay(Employee e){
	Money pay = e.calculatePay();
	e.deliverPay(pay);
}
```