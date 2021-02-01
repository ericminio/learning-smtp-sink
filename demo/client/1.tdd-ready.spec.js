const { expect } = require('chai')
const fs = require('fs')

describe('make sure first that', ()=>{

    describe('mocha', ()=>{

        it('is ready', ()=>{
            expect(1+1).to.equal(2)
        })
    })
    
    describe('inbox folder', ()=>{
    
        it('is readable', ()=>{
            let inbox = '../inbox'
            let files = fs.readdirSync(inbox)
            
            expect(files).to.deep.equal([])
        })
    })
})
