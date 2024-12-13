const User = require("../model/model")

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password)))
        res.json({ message: "Login successful" });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}
