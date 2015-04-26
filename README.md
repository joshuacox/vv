# vv
VV is a wrapper for command line tasks, it's most important feature is that it makes a noise when it is done, allowing me to background and do something else while the task completes, then I generally wrap some nice and ionice and /usr/bin/time -v into the command to make it nice and give me an idea of how long it took.  I added the time sync, to let me know how much of the above the kernel is trying to hide from me as well (of course the sync may reflect something else going on in the system, in any case I think it's a good idea to let the discs sync in general before other things commence and no need to alert me till afterwards)

notes: I imagine there are some escaping issues that could be uncovered by throwing lot’s of interpretation snafu at it in $@  i.e. I imagine I’ll have to throw some escape trickery in there at some point.  I’ll fix it when I run into one of those cases, but for now I’m using this daily without issue.  I tend to escape things pretty heavily though, so I might not run into one of those cases anytime soon.

## Install
`cp vv /usr/local/bin`
or somewhere in your path

## Usage
just place vv at the start of your command line
e.g.
```
vv apt-get upgrade -y
```
