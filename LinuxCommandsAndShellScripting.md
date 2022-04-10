### Shells
- shell is user-interface and scripting languages
```
bash - going into the shell language

printenv SHELL
```

**shell basics commands**
```
whoami - username
id - user ID and group ID
uname - operating system name
ps - running processes
top - resource usage
df = mounted file systems
man - reference manual
date - today's date
```

**working with files**
```
cp - copy file
mv - change file name or path
rm - remove file
touch - create empty file, update file timestamp
chmod - change/modify file permissions
wc - get count of lines, words, characteristics in file
grep - return lines in file matching patterns
```
**Navigations**
```
ls - list files and directories
find - find files in directory tree
pwd - get present working directory
mkdir - make directory
cd - change directory
rmdir - remove directory
```
**printing files and string contents**
```
cat - print file contents
more - print file contents page-by-page
head - print first N lines of file
tail - print last N lines of file
echo - print string or variable value
```
**Compression and archiving**
```
tar - archive a set of files
zip - compress a set of files
unzip - extract files from a compressed zip archive
```
**Networking**
```
hostname - print hostname
ping - send packets to URL
ifconfig - display or configure system network interfaces
curl - display contents of file at a URL
wget - download file from URL
```

**Option	Description for ls command**
-a	list all the files including hidden files

-d	list directories themselves, not their contents

-h	with -l and -s, print sizes like 1K, 234M, 2G etc

-l	long listing of files which include information about permission, owner, size etc

-F	classify files by appending type indcator like *,/ etc. to file names

-r	reverse order while sorting

-S	sort by file size, largest first

-t	sort by time, newest first

**Shell Scripting**
Shell script, also known as *'shebang'*
``#!interpreter [optional-arg]``
*'interpreter'* - path to an executable program
*'optional-arg'* - single argument string

**Example of 'shebang' directives**
*shell script directives*
```
#!/bin/sh
#!/bin/bash
```
*python script directive*
``!#/usr/bin/env python3``

**Example shell script**
```
# create shell script
touch hello_world.sh # sh means it is a shell script
echo '#! /bin/bash' >> hello_world.sh
echo 'echo hello world' >> hello_world.sh

# checking the permissions
ls -l hello_world.sh

# granting permissions
chmod +x hello_world.sh
ls -l hello_world.sh

# runnit bash script
./hello_world.sh
```

**Filters** are some sort of functions that takes in input and return output

**Pipe** stands for pipeline, using the command ``|``

`` command1 | command2 ``

- `` set | head -4 `` to list all shell variables

**Define shell variable**

``variablename="Value"``

**Delete shell variable**

``unset variablename``

**Extended Scope** to environment variable

``export variablename``

``env`` to list all environment variables
