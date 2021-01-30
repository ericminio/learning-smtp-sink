#/bin/bash

function test_send {
    rm -rf messages/*
    echo "hello :)" | sendmail -v -f from@example.com -S smtp to@example.com
    local file=`grep -r "hello" messages | cut -d':' -f1`
    cat $file
    local actual=`cat $file | grep "To: to@example.com" | wc -l`

    assertequals "$actual" "1"
}

