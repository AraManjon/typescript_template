import { ReturnTrue } from '../src/index'
describe('Return true', ()=> {
    it('return true', () => {
        
        const returnTrue = new ReturnTrue()

        const result = returnTrue.do()
        
        expect(result).toBeTruthy
    })
})