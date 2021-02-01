const { expect } = require('chai')
const {SMTPClient} = require('smtp-client')
const fs = require('fs')
const path = require('path')

const sendMessage = async (body)=>{
    let s = new SMTPClient({
        host: 'smtp',
        port: 5025
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
        
        let inbox = '/usr/local/src/inbox'
        let folder = fs.readdirSync(inbox)[0]        
        let message = fs.readdirSync(path.join(inbox, folder))[0]
        let content = fs.readFileSync(path.join(inbox, folder, message)).toString()

        expect(content).to.contain('hello world')
    })
})
