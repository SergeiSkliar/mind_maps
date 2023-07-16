# 
written by programmers, for programmers, in the programming language of the system

cpputest

[[Software Engineering/main/The Three Laws of TDD]]
[[Software Engineering/main/keeping tests clean]]
[[Software Engineering/main/clean tests]]
[[Software Engineering/main/one assert per test]]
[[Software Engineering/main/F.I.R.S.T.]]


given-when-then convention:
```java
public void testGetPageHierarchyAsXML() throws Exception {
	givenPages("PageOne", "PageOne.ChildOne", "PageTwo");
	whenRequestIsIssued("root", "type:pages");
	thenResponseShouldXML();
}
```


2022/03/22::19:03