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
or

```
vv dd if=/dev/zero of=/tmp/testfile bs=1M count=401
401+0 records in
401+0 records out
420478976 bytes (420 MB) copied, 0.0954823 s, 4.4 GB/s
        Command being timed: "nice ionice -c3 dd if=/dev/zero of=/tmp/testfile bs=1M count=401"
        User time (seconds): 0.00
        System time (seconds): 0.11
        Percent of CPU this job got: 99%
        Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.11
        Average shared text size (kbytes): 0
        Average unshared data size (kbytes): 0
        Average stack size (kbytes): 0
        Average total size (kbytes): 0
        Maximum resident set size (kbytes): 3032
        Average resident set size (kbytes): 0
        Major (requiring I/O) page faults: 0
        Minor (reclaiming a frame) page faults: 463
        Voluntary context switches: 1
        Involuntary context switches: 13
        Swaps: 0
        File system inputs: 0
        File system outputs: 0
        Socket messages sent: 0
        Socket messages received: 0
        Signals delivered: 0
        Page size (bytes): 4096
        Exit status: 0

real    0m0.035s
user    0m0.000s
sys     0m0.008s

Audio Device:   Advanced Linux Sound Architecture (ALSA) output

Playing: /usr/share/sounds/KDE-Im-Irc-Event.ogg
Ogg Vorbis stream: 2 channel, 48000 Hz
                                                                                
Done.
```
