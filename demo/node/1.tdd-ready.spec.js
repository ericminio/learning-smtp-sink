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
            let inbox = '../inbox'
            let files = fs.readdirSync(inbox)
            
            expect(files).to.deep.equal([])
        })
    })
})
