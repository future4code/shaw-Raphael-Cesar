import {Client} from './Client'
import {Commerce} from './Commerce'
import {Industry} from './Industry'
import {Place} from './Place'
import { Residence } from './Residence'



//1 a) Sim.
//b) Duas vezes.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    // public introduce: string
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
        //   introduce: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
        //   this.introduce = introduce
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string{
        return `Olá, sou ${this.name}. Bom dia!`
    }
  }

  let instancia = new User('1', 'rapha@email.com', 'raphael', '1234' )

 



//2 a) 1vez.
//b) 2 vezes. Porque CUstomer é uma subclasse. E com o super, estamos chamando o constructor da User.

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      purchaseTotal: number,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  let instancia2: Customer = new Customer('1', 'rapha@email.com', 'raphael', '1234', 25, '5522 5556 5554 8855')

//   console.log(instancia2.introduceYourself())



//1a) Só consegui imprimir o calculateBill separadamente.

const client: Client = {
    name: 'rapha',
    registrationNumber: 1,
    consumedEnergy: 25,

    calculateBill:()=>{
        return 2
    }
}

// console.log(client.calculateBill())


const casa:Residence = new Residence(4, '33333333')
const loja:Commerce = new Commerce(2, '44444444')
const fabrica:Industry = new Industry(10, '55555555')
console.log(casa.getCep())
console.log(loja.getCep())
console.log(fabrica.getCep())