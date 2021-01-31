const { expect } = require('chai')
const fs = require('fs')
const path = require('path')

describe('make sure first that', ()=>{

    describe('mocha', ()=>{

        it('is ready', ()=>{
            expect(1+1).to.equal(2)
        })
    })
    
    describe('inbox folder', ()=>{
    
        it('is mounted', ()=>{
            let inbox = '/usr/local/src/inbox'
            let files = fs.readdirSync(inbox)
            expect(files).to.include('README.md')

            let content = fs.readFileSync(path.join(inbox, 'README.md')).toString()
            expect(content).to.equal('REceived messages will be stored here')
        })
    })
})
