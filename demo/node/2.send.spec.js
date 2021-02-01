const { expect } = require('chai')
const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')

describe('sent email', ()=>{

    it('is readable', async ()=>{
        await sendMessage('greetings', 'hello world')
        
        let inbox = '../inbox'
        let folder = fs.readdirSync(inbox)[0]        
        let message = fs.readdirSync(path.join(inbox, folder))[0]
        let content = fs.readFileSync(path.join(inbox, folder, message)).toString()

        expect(content).to.contain('Subject: greetings')
        expect(content).to.contain('hello world')
    })
})

const sendMessage = async (subject, body)=>{
    let transporter = nodemailer.createTransport({
        host: "0.0.0.0",
        port: 5025
    })
    let result = await transporter.verify()
    expect(result).to.equal(true)    
    console.log('transporter ok')
    
    let message = {
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: subject,
        text: body,
    }
    console.log('message', message)
    result = await transporter.sendMail(message)
    console.log('sendMail result: ', result)
    transporter.close()
}

