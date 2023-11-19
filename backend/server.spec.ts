
const sum = (a: number,b: number): number =>{
    return a + b
}
describe('Server', ()=>{
    it('Should Work the right sum', ()=>{
        expect(sum(2,2)).toEqual(4)
    })

})