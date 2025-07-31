const jwt = require('jsonwebtoken');
// Remplacez par le chemin vers votre config d'environnement

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Token manquant.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie et décode le token
    req.user = decoded; // Stocke les informations de l'utilisateur dans req.user
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token invalide.' });
  }
};

module.exports = authenticateToken;
