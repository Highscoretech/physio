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
app.get("/four", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "child walker box",
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
    price:
      " ₦15,000 - 35,000 (Depending on the age and height of the patients)",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/eleven", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "cerebral palsy chair",
    price:
      " ₦17,000 - ₦35,000 (Depending on the age and height of the patients)",
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

//  Each product
app.get("/thirteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "posterior limb (children)",
    price: " ₦5,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/fourteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "back slap (children)",
    price: " ₦4,000 - ₦8,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/fifteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Quadriceps benches",
    price: " ₦18,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/sixteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Tunnel bath",
    price: " ₦250,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/seventeen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "parallel bar metalic",
    price: " ₦150,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/eighteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "parallel bar stainless",
    price: " ₦300,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/nineteen", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Aeroplane splint",
    price: " ₦5,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Sand bags",
    price:
      " 1kg-₦1,500, 1.5kg-₦2,000, 2kg-₦2,500, 2.5kg-₦3,000, 3kg-₦3,000, 4kg-₦4,500, 4kg-₦5,500",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-one", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Wall Ladder / Wall Bar",
    price: " ₦80,000 - ₦120,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-two", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Hamstring Broad",
    price: " ₦18,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-three", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Dynamic Foot Rise children",
    price: " ₦4,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-four", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Long Cork Up Adult",
    price: " ₦14,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

// //  Each product
app.get("/twenty-five", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Shoulder Support",
    price: " ₦7,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-six", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Dynamic Foot Rise Adult",
    price: " ₦6,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-seven", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Long Cork Up children",
    price: " ₦5,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-eight", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Artificial Leg (Above the knee amputee)",
    price: " ₦900,000 - ₦1,500,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

//  Each product
app.get("/twenty-nine", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Artificial Leg (below the knee amputee)",
    price: " ₦600,000 - ₦900,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

// Each Product
app.get("/thirty", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Stair case (children)",
    price: " ₦100,000",
    Quantity: 1,
  };
  res.render("form", {
    title: "form",
    Product: Product,
    count: req.session.count,
  });
});

// Each Product
app.get("/thirty-one", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count = 1;
  }
  let Product = {
    name: "Stair case (adult)",
    price: " ₦250,000",
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
app.get("/Reciprocal_pulley", (req, res) => {
  if (!req.session.count) {
    req.session.count = 0;
  } else {
    req.session.count = 0;
  }
  res.render("Reciprocal_pulley", {
    title: "Reciprocal_pulley",
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

// product three
app.get("/cork_splint_Adult", (req, res) => {
  res.render("cork_splint_adult", {
    title: "cork_splint_Adult",
    count: req.session.count,
  });
});

// product four
app.get("/child_walker_box", (req, res) => {
  res.render("child_walker_box", {
    title: "child_walker_box",
    count: req.session.count,
  });
});

// product five
app.get("/Lumbar_roll", (req, res) => {
  res.render("Lumbar_roll.ejs", {
    title: "Lumbar_roll.ejs",
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
app.get("/cerebral_palsy_chair", (req, res) => {
  res.render("cerebral_palsy_chair", {
    title: "cerebral_palsy_chair",
    count: req.session.count,
  });
});

// product twelve
app.get("/cork_splint", (req, res) => {
  res.render("cork_splint", { title: "cork_splint", count: req.session.count });
});

// product thirteen
app.get("/posterior_limb_kid", (req, res) => {
  res.render("posterior_limb_kid", {
    title: "posterior_limb_kid",
    count: req.session.count,
  });
});

// product fourteen
app.get("/back_slab_kid", (req, res) => {
  res.render("back_slab_kid", {
    title: "back_slab_kid",
    count: req.session.count,
  });
});

// product fifteen
app.get("/Quadriceps_benches", (req, res) => {
  res.render("Quadriceps_benches", {
    title: "Quadriceps_benches",
    count: req.session.count,
  });
});

// product sixteen
app.get("/Tunnel_bath", (req, res) => {
  res.render("Tunnel_bath", { title: "Tunnel_bath", count: req.session.count });
});

// product seventeen
app.get("/parallel_bar_matalic", (req, res) => {
  res.render("parallel_bar_matalic", {
    title: "parallel_bar_matalic",
    count: req.session.count,
  });
});

// product eighteen
app.get("/parallel_bar_stainless", (req, res) => {
  res.render("parallel_bar_stainless", {
    title: "parallel_bar_stainless",
    count: req.session.count,
  });
});

// product nineteen
app.get("/Aeroplane_splint", (req, res) => {
  res.render("Aeroplane_splint", {
    title: "Aeroplane_splint",
    count: req.session.count,
  });
});

// product twenty
app.get("/sand_bags", (req, res) => {
  res.render("sand_bags", {
    title: "sand_bags",
    count: req.session.count,
  });
});

// product twenty-two
app.get("/wall_ladder", (req, res) => {
  res.render("wall_ladder", {
    title: "wall_ladder",
    count: req.session.count,
  });
});

// product twenty-two
app.get("/Hamstring", (req, res) => {
  res.render("Hamstring", {
    title: "Hamstring",
    count: req.session.count,
  });
});

// product twenty-three
app.get("/foot_rise_kid", (req, res) => {
  res.render("foot_rise_kid", {
    title: "foot_rise_kid",
    count: req.session.count,
  });
});

// product twenty-four
app.get("/cork_up_adult", (req, res) => {
  res.render("cork_up_adult", {
    title: "cork_up_adult",
    count: req.session.count,
  });
});

// product twenty-five
app.get("/shoulder_support", (req, res) => {
  res.render("shoulder_support", {
    title: "shoulder_support",
    count: req.session.count,
  });
});

// product twenty-six
app.get("/foot_rise_adult", (req, res) => {
  res.render("foot_rise_adult", {
    title: "foot_rise_adult",
    count: req.session.count,
  });
});

// product twenty-seven
app.get("/cork_up_kid", (req, res) => {
  res.render("cork_up_kid", {
    title: "cork_up_kid",
    count: req.session.count,
  });
});

// product twenty-eight
app.get("/artificial_leg_above_knee", (req, res) => {
  res.render("artificial_leg_above_knee", {
    title: "artificial_leg_above_knee",
    count: req.session.count,
  });
});

// product twenty-nine
app.get("/artificial_leg_below_knee", (req, res) => {
  res.render("artificial_leg_below_knee", {
    title: "artificial_leg_below_knee",
    count: req.session.count,
  });
});

// product thirty
app.get("/stair_case_kid", (req, res) => {
  res.render("stair_case_kid", {
    title: "stair_case_kid",
    count: req.session.count,
  });
});

// product thirty-one
app.get("/stair_case_adult", (req, res) => {
  res.render("stair_case_adult", {
    title: "stair_case_adult",
    count: req.session.count,
  });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404", count: req.session.count });
});
