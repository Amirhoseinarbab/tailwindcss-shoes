const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory database (for demonstration purposes)
const usersDatabase = [
  {
    email: "ali@example.com",
    password: "123",
    firstName: "ali",
    lastName: "arbab",
    address: "تهران خبالان آزادی پ 10",
    cart: [
      {
        product: {
          id: 1,
          src: "/src/assets/n1-min.png",
          className: "bg-[#EEFFA4]",
          title: "Nike Air Max 270",
          description:
            "نایک ایر مکس 270 یک کفش سبک زندگی است که با شیب رنگی پر جنب و جوش خود مطمئناً سرها را برمی انگیزد.",
          price: 160,
        },
        qty: "3",
        size: "45",
      },
      {
        product: {
          id: 2,
          src: "/src/assets/n2-min.png",
          className: "bg-[#DDCEFD]",
          title: "Nike Air Vapor",
          description:
            "Nike Air Vapor یک کفش براق و شیک است که برای هر موقعیتی مناسب است. این کفش مناسب برای هر سبک زندگی فعال است.",
          price: 100,
        },
        qty: "1",
        size: "45",
      },
    ],
  },
];

// Route to handle registration
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password, address } = req.body;
  console.log("req body : ", req.body);
  // Check if the user already exists

  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }

  const userExists = usersDatabase.some((user) => user.email === email);
  if (userExists) {
    console.log("user exist");
    return res.status(401).send("User already exists!");
  }

  // Save the user to the "database"
  const newUser = { firstName, lastName, email, password, address , cart:[]};
  console.log("usersDatabase", usersDatabase);
  console.log("Received data:", newUser);
  usersDatabase.push(newUser);

  res.json({ message: "Registration successful!", user: newUser });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }

  // const user = users[email];
  const user = usersDatabase.find(
    (user) => user.email === email && user.password === password
  );

  console.log("User logged in:", user);

  if (!user || user.password !== password) {
    return res.status(401).send("Invalid email or password");
  }

  res.json({ message: "Login successful!", user });
});


app.post("/update-cart-history", (req, res) => {
    const { email, password , cart} = req.body;
    console.log("🚀 ~ app.post ~ body:", req.body)
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }
  
    const user = usersDatabase.find(
      (user) => user.email === email && user.password === password
    );
  
    console.log("User logged in:", user);
  
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid email or password");
    }
    console.log("user.cart" , user.cart)
    cart.map((cartItem) => user.cart.push(cartItem) )
    
  
    res.json({ message: "User Cart Updated successful!", user });
  });
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
