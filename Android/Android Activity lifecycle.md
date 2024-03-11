#android 

`onCreate()` called immidiately after an activity is launched. provides all necessary activity's setup.

`onStart()` called before the activity becomes visible.

`onRestart()` called before the `onStart()` when the activity becomes visible again.

`onResume()` called before the activity is about to get the focus (move to the foreground).

`onPause()` called when the activity is not in focus (move to background, but still visible).

`onStop()` called before the activity becomes invisible.

`onDestroy()` - called before the destruction of activity. does all cleanup.