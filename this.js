const obj = {
  name: "loknath",
  age: 25,

  print: function() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
};

obj.print();
