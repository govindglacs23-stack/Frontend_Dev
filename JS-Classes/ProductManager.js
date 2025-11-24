class Product {
    constructor(id,name,price,category){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(percent){
        this.price=this.price-(this.price*(percent/100));
    }
    getDetails(){
        return `${this.id} - ${this.name} - ₹${this.price} - ${this.category}`;
    }
}
const products=[
    new Product(1,"Laptop",55000,"Electronics"),
    new Product(2,"Shoes",900,"Fashion"),
    new Product(3,"Mobile",1200,"Electronics"),
    new Product(4,"Watch",1500,"Accessories")
];
products.forEach(p=>console.log(p.getDetails()));
const highPrice=products.filter(p=>p.price>1000);
console.log(highPrice);
