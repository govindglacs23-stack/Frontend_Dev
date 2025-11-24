const user = {
    name: "Suraj",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const fixedUser = {
    name: "Suraj",
    showName() {
        console.log(this.name);
    }
};

fixedUser.showName();
