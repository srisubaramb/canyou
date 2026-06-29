import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
	destination : (req, file , cb) => {
		cb(null, 'uploads/')
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