class Cart{
    constructor(){
        this.items=[];
        this.discount=0;
    }
    addItem(name,price,qty){
        this.items.push({name,price,qty});
    }
    applyCoupon(code){
        const reg=/^(SAVE|DISC)(\d{1,2})$/;
        const match=code.match(reg);
        if(match){
            this.discount=parseInt(match[2]);
        }
    }
    getTotal(){
        const sum=this.items.reduce((t,i)=>t+(i.price*i.qty),0);
        return sum-(sum*(this.discount/100));
    }
}
const cart=new Cart();
cart.addItem("Laptop",50000,1);
cart.addItem("Mouse",800,2);
cart.applyCoupon("SAVE20");
console.log(cart.getTotal());
