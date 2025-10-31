import multer from 'multer';
//configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()} -${file.originalname}`);
    }
},
);
//file filter
const fileFilter = (req, file, cb) =>{
   const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true); 
}else{
    cb(new Error('Only jpeg, jpg, png files are allowed'), false);
}
}

//initialize multer
const upload = multer({ storage,fileFilter })
export default upload;
