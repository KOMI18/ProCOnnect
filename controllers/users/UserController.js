const User = require('../../models/users/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { nom, prenom, email, telephone, dateDeNaissance, adresse, biographie, motDePasse, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(motDePasse, 10);

        const newUser = new User({
            nom,
            prenom,
            email,
            telephone,
            dateDeNaissance,
            adresse,
            biographie,
            password: hashedPassword,
            role
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Chercher d'abord dans la table User
        let user = await User.findOne({ email });
        let userType = 'condidat';

        // Si pas trouvé, chercher dans la table Company
        if (!user) {
            const Company = require('../../models/company/companyModel');
            user = await Company.findOne({ email });
            userType = 'company';
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, role: user.role, userType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

exports.getCurrentUser = async (req, res) => {
    const userId = req.user.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error getting current user', error });
    }
};



