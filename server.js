const express = require("express");
const _ = require("lodash");
const con = require("./database");
const transporter = require("./email");
const session = require("express-session");
let log = console.log;

const app = express();

app.set("view engine", "ejs");

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(process.env.PORT || 3000);

app.get("/", (req, res, next) => {
  if (!req.session.count) {
    req.session.count = 0;
  } else {
    req.session.count += 1;
  }
  res.render("index", { title: "Home", count: req.session.count });
});

app.post("/", (req, res) => {
  let fname = req.body.firstname;
  let lname = req.body.lastname;
  let email = req.body.email;
  let phone = req.body.phone;
  let state = req.body.state;
  let address = req.body.address;
  let pname = req.body.Pname;
  let quantity = req.body.Quantity;
  let Price = req.body.price;

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = `INSERT INTO customers (fname,Lname,email,phone,state,address,price,pname,quality) VALUES ?;`;

    let values = [
      [fname, lname, email, phone, state, address, Price, pname, quantity],
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

  //   Sending email to the user
  let mailOptions = {
    from: "highscoretechng@gmail.com",
    to: `${email}`,
    subject: "Adamsonic medical and physiotherapy equipments",
    text: "Your product has been processed",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.render("thanks", { title: "thanks", count: req.session.count });
});

//  Each product

app.get("/one", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Reciprocal pulley (Local)",
    price: "₦4,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/two", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Wobble board",
    price: "₦18,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/onhhe", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "prosthetic leg",
    price: "₦1,500,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/two", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "hamstring Broad",
    price: "₦18,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/three", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "cork-up splint (adult)",
    price: "₦7000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/th", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Cock-up splint (kids)",
    price: "₦5,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/five", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }

  let Product = {
    name: "Lumber Roll",
    price: "₦7,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/six", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }

  let Product = {
    name: "finger-ladder",
    price: "₦100,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/seven", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Posterior Limb support (Adult)",
    price: " ₦10,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/eight", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Back Limb",
    price: "₦13,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/nine", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Truck Support",
    price: " ₦50,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/ten", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Standing Frame",
    price: " ₦15,000 - 35,000 (depending on age and height)",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product

app.get("/twelve", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Cock-up splint (Children)",
    price: " ₦5000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

// app.get("/twelve", (req, res) => {
//   if (!req.session.count) {
//     req.session.count = 1;
//   } else {
//     req.session.count = 1;
//   }
//   let Product = {
//     name: "Stair case",
//     price: " ₦250,000",
//     Quantity: 1,
//   };
//   res.render("form", {
//     title: "form",
//     Product: Product,
//     count: req.session.count,
//   });
// });

//  Each product
app.get("/thirteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "posterior limb_kids (children)",
    price: " ₦5,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", count: req.session.count });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact", count: req.session.count });
});

app.get("/cart", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count += 1;
  }
  res.render("cart", { title: "Cart", count: req.session.count });
});

app.get("/email", (req, res) => {
  res.render("Email", { title: "Email", count: req.session.count });
});

app.get("/process", (req, res) => {
  res.render("process", { title: "process", count: req.session.count });
});

app.get("/products", (req, res) => {
  if (!req.session.count) {
    req.session.count = 0;
  } else {
    req.session.count = 0;
  }
  res.render("products", { title: "products", count: req.session.count });
});

// product one
app.get("/prosthetic_leg", (req, res) => {
  if (!req.session.count) {
    req.session.count = 0;
  } else {
    req.session.count = 0;
  }
  res.render("prosthetic_leg", {
    title: "prosthetic_leg",
    count: req.session.count,
  });
});

// product two
app.get("/wobble_board", (req, res) => {
  res.render("wobble_board", {
    title: "wobble_board",
    count: req.session.count,
  });
});

// product
app.get("/hamstring", (req, res) => {
  res.render("hamstring", { title: "hamstring", count: req.session.count });
});

// product three
app.get("/cork_splint_Adult", (req, res) => {
  res.render("cork_splint_adult", {
    title: "cork_splint_Adult",
    count: req.session.count,
  });
});

// product three
app.get("/cork_splint", (req, res) => {
  res.render("cork_splint", { title: "cork_splint", count: req.session.count });
});

// product five
app.get("/Aeroplane_splint", (req, res) => {
  res.render("Aeroplane_splint", {
    title: "Aeroplane_splint",
    count: req.session.count,
  });
});

// product six
app.get("/finger-ladder", (req, res) => {
  res.render("finger-ladder", {
    title: "finger-ladder",
    count: req.session.count,
  });
});

// product seven
app.get("/long-cork-up-slints", (req, res) => {
  res.render("long-cork-up-slints", {
    title: "long-cork-up-slints",
    count: req.session.count,
  });
});

// product eight
app.get("/back_slab", (req, res) => {
  res.render("back_slab", { title: "Back slab", count: req.session.count });
});

// product nine
app.get("/Trunk_support", (req, res) => {
  res.render("Trunk_support", {
    title: "Trunk_support",
    count: req.session.count,
  });
});

// product
app.get("/posterior_limb", (req, res) => {
  res.render("posterior_limb", {
    title: "posterior_limb",
    count: req.session.count,
  });
});
// product ten
app.get("/Standing_frame", (req, res) => {
  res.render("Standing_frame", {
    title: "Standing_frame",
    count: req.session.count,
  });
});

// product eleven
app.get("/Reciprocal_pulley", (req, res) => {
  res.render("Reciprocal_pulley", {
    title: "Reciprocal_pulley",
    count: req.session.count,
  });
});

// product twelve
app.get("/cork_splint", (req, res) => {
  res.render("cork_splint", { title: "cork_splint", count: req.session.count });
});
// app.get("/Stair_case", (req, res) => {
//   res.render("Stair_case", { title: "Stair_case", count: req.session.count });
// });

// product thirteen
app.get("/posterior_limb_kid", (req, res) => {
  res.render("posterior_limb_kid", {
    title: "posterior_limb_kid",
    count: req.session.count,
  });
});

// product fifteen
app.get("/Tunnel_bath", (req, res) => {
  res.render("Tunnel_bath", { title: "Tunnel_bath", count: req.session.count });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404", count: req.session.count });
});
