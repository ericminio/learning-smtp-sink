const { expect } = require('chai')
const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')

describe('sent email', ()=>{

    it('is readable', (done)=>{
        sendMessage('greetings', 'hello world', ()=>{
            let inbox = '../inbox'
            expect(fs.readdirSync(inbox).length).to.equal(1)
            
            let folder = fs.readdirSync(inbox)[0]        
            let message = fs.readdirSync(path.join(inbox, folder))[0]
            let content = fs.readFileSync(path.join(inbox, folder, message)).toString()
    
            expect(content).to.contain('Subject: greetings')
            expect(content).to.contain('hello world')           

            done()
        })        
    })
})

const sendMessage = (subject, body, done)=>{
    let transporter = nodemailer.createTransport({
        host: "0.0.0.0",
        port: 5025
    })
    
    let message = {
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: subject,
        text: body,
    }
    
    transporter.sendMail(message, (error, info)=>{
        transporter.close()
        console.log('error', error)
        console.log('info', info)
        done()
    })    
}

