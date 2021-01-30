const { expect } = require('chai')
const {SMTPClient} = require('smtp-client')
const fs = require('fs')
const path = require('path')

const sendMessage = async (body)=>{
    let s = new SMTPClient({
        host: 'smtp',
        port: 25
    })
    await s.connect();
    await s.greet({hostname: 'smtp'})
    await s.mail({from: 'from@sender.com'})
    await s.rcpt({to: 'to@recipient.com'})
    await s.data(body)
    await s.quit()
}

describe('sent email', ()=>{

    it('is readable', async ()=>{
        await sendMessage('hello world')
        let messages = await allReceivedMessages()
        let last = messages[messages.length-1]

        expect(last).to.contain('hello world')
    })
})

let allReceivedMessages = async ()=> {
    await new Promise((resolve, reject)=>{
        setTimeout(resolve, 1*1000)
    })
    let inbox = './messages'
    let messages = []
    let minutes = fs.readdirSync(inbox)
    for (var m=0; m<minutes.length; m++) {
        let minute = minutes[m]
        let seconds = fs.readdirSync(path.join(inbox, minute))
        for (var i=0; i<seconds.length; i++) {
            let second = seconds[i];
            let message = fs.readFileSync(path.join(inbox, minute, second)).toString()
            messages.push(message)
        }
    }
    return messages;
}