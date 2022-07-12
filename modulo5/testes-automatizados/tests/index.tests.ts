import performPurchase from "../src/performPurchase"
import User from "../src/user"

describe("Esse é o meu primeiro teste", ()=>{
    test("Esse teste vai verificar uma string", ()=>{
        const nome: string = "raphael"

        expect(nome).toBe("raphael")
    })
})

// a) 

describe("Teste de compras1", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })
})

// b) 

describe("Teste 2", ()=> {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})

// c) 

describe("Teste 3", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).not.toBeDefined()
    })
})