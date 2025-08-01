const Company = require('../../models/company/companyModel');

// Create a new company
const bcrypt = require('bcryptjs'); // Assurez-vous d'importer bcrypt

const createCompany = async (req, res) => {
    try {
        const { name, sector, email, phonePro, address, size, type, password } = req.body;
        
        // Hacher le mot de passe avant de sauvegarder
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const newCompany = new Company({ 
            name, 
            sector, 
            email, 
            phonePro, 
            address, 
            size, 
            type, 
            password: hashedPassword, // Utiliser le mot de passe haché
            role: 'company' 
        });
        
        await newCompany.save();
        
        // Ne pas retourner le mot de passe dans la réponse
        const { password: _, ...companyWithoutPassword } = newCompany.toObject();
        res.status(201).json(companyWithoutPassword);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Get a company by ID
const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createCompany,
    getCompanyById
};

