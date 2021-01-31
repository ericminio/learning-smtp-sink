const { expect } = require('chai')
const fs = require('fs')
const path = require('path')

describe.only('make sure first that', ()=>{

    describe('mocha', ()=>{

        it('is ready', ()=>{
            expect(1+1).to.equal(2)
        })
    })
    
    describe('inbox folder', ()=>{
    
        it('is mounted', ()=>{
            let inbox = '/usr/local/src/inbox'
            let files = fs.readdirSync(inbox)
            expect(files).to.deep.equal(['README.md'])

            let content = fs.readFileSync(path.join(inbox, files[0])).toString()
            expect(content).to.equal('REceived messages will be stored here')
        })
    })
})
