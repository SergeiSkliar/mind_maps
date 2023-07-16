breaks assotiation of the thread with `std::thread` object.
enxures that `std::terminate()` won't be called when the `std::thread` object is destroyed.

detached thread is running in background, with no direct means of communicating with it.
ownership and control are passed over to the [[C++ Runtime Library]], which ensures that the resources assotiated with the thread are correctly reclaimed when the thread exits.

"daemon thread" - similarly to the UNIX concept of [[daemon process]]
can be called only when `std::thread.joinable()` returns `true`.

[[citation about multiple threads in word processor]]
