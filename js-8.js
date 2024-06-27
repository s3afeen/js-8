//-----------------1+2+3

// class cars {
//   make;
//   model;


//   on(){ 
//     console.log("started car");
//   }

//   constructor(Model, Make){ 
//     this.make = Make;
//     this.model = Model;
//   }
// }
  
  

// let car = new cars()
// car.make = "japan"
// car.model = 2015

// console.log(car);


// car.on();

// let car2 = new cars("American",2020);
// console.log(car2);



//-----------------4+5+6

class ElectricCar extends cars {
    battery_size;

}
class Account {
    #balance

    set_balance(Balance){
        this.#balance = Balance;
    }
    deposite(dolar){
        this.#balance += dolar;
        console.log(this.#balance);
    }
    withdraw(Dolar){
        this.#balance -= Dolar;
        console.log(this.#balance);
    }
    get_baalance(){
        return this.#balance
    }


}
let bnk = new Account;
bnk.set_balance(600);
bnk.deposite(60)
bnk.withdraw(50)
console.log(bnk)