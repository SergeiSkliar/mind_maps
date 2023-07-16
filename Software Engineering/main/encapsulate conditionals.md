`if (shouldBeDeleted(timer))`
is better than
`if (timer.hasExpired() && !timer.isReccurent())`