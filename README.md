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
or (I’ll give some example output in this one)

```
vv dd if=/dev/zero of=/tmp/testfile bs=1M count=4010     
4010+0 records in
4010+0 records out
4204789760 bytes (4.2 GB) copied, 0.852751 s, 4.9 GB/s
        Command being timed: "nice ionice -c3 dd if=/dev/zero of=/tmp/testfile bs=1M count=4010"
        User time (seconds): 0.00
        System time (seconds): 0.87
        Percent of CPU this job got: 99%
        Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.87
        Average shared text size (kbytes): 0
        Average unshared data size (kbytes): 0
        Average stack size (kbytes): 0
        Average total size (kbytes): 0
        Maximum resident set size (kbytes): 2872
        Average resident set size (kbytes): 0
        Major (requiring I/O) page faults: 0
        Minor (reclaiming a frame) page faults: 459
        Voluntary context switches: 1
        Involuntary context switches: 12
        Swaps: 0
        File system inputs: 0
        File system outputs: 0
        Socket messages sent: 0
        Socket messages received: 0
        Signals delivered: 0
        Page size (bytes): 4096
        Exit status: 0

real    0m0.082s
user    0m0.000s
sys     0m0.012s

Audio Device:   Advanced Linux Sound Architecture (ALSA) output

Playing: /usr/share/sounds/KDE-Im-Irc-Event.ogg
Ogg Vorbis stream: 2 channel, 48000 Hz
                                                                                
Done.
```

### notes, caveats, troubleshooting

There are some escaping issues that can be uncovered by throwing lot’s of interpretation snafu at it in $@
i.e. I imagine I’ll have to throw some escape trickery in there at some point.  I’ll fix it when I run into one of those cases, but for now I’m using this daily without issue.
I’m open to suggestions on better encapsulation inside the script

some examples of how it might get borked are here:
http://unix.stackexchange.com/questions/57830/trouble-in-script-with-spaces-in-filename

e.g. this works fine
```
vv sudo cp -a 'VirtualBox VMs' /mnt/virtualbox/
```
but this does not
```
vv sudo cp -a VirtualBox\ VMs /mnt/virtualbox/
```
