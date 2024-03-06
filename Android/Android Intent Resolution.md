#android 

explicit intent resolution is straightforward - you need to specify the class.

for implicit intent resolution you need to provide additional information in the intent. then Android will use intent filter to figure out which components are able to receive an intent - by checking the AndroidManifest.xml of every app.

intent filter specifies what types of intent each component can receive.
```xml
<activity android:name="SomeActivity">
	<intent-filter>
		<action android:name="android.intent.action.SEND"/>
		<category android:name="android.intent.category.DEFAULT"/>
		<data android:mimeType="text/plain"/>
		<data android:mimeType="image/*"/>
	</intent-filter>
</activity>
```
