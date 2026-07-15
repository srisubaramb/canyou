import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
	destination : (req, file , cb) => {
		cb(null, 'uploads/')
	}, 
	fileFilter : (req, file, cb) => {
		if (file.mimetype.startsWith('image/')) {
            cb(null, true); // Accept file
        } else {
            cb(new Error('Only image files are allowed!'), false); // Reject file
        }
	},
	filename : (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		const fileExtension = path.extname(file.originalname)
		const baseName = path.basename(file.originalname , fileExtension)
		cb(null , baseName + '-' + uniqueSuffix + fileExtension)
	} 
})
const upload = multer({storage : storage})
export default upload