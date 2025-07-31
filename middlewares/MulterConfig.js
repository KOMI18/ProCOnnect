const multer = require('multer');
const path = require('path');

// Configuration du stockage Multer pour gérer les images et les PDF
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Choisir un dossier spécifique en fonction du type de fichier
    if (file.mimetype === 'application/pdf') {
      cb(null, 'uploads/documents'); // Stocker les PDF dans un sous-dossier 'documents'
    } else {
      cb(null, 'uploads/photos'); // Stocker les images dans le sous-dossier 'photos'
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nom unique
  }
});

// Filtrer les types de fichiers pour n'accepter que les images et les PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Format de fichier non pris en charge. Veuillez télécharger un fichier PDF ou une image.'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
