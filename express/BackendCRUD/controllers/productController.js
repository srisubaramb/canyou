import Product from "../models/Product.js";

export const createProduct = async (req , res) => {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    try {
        const { name, price } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ message: "Please upload an image" });
        }

        const { filename, path } = req.file;

        const newProduct = await Product.create({
            name,
            price,
            imageName: filename,
            imagePath: path,
        });

        res.status(201).json({ message: 'Created product entry', data: newProduct });
    } catch(error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: 'Product entry not created', error: error.message });
    }
}

export const getProducts = async (req, res) => {
	try {
		const productList = await Product.find({})
		res.status(200)
		res.send(productList)
	} catch(error) {
		res.send(500)
		res.send({message : error.message})
	}
}

export const updateProduct = async (req, res) => {
	try {
		const { id } = req.params
		const existingProduct = await Product.findById(id)
		if(!existingProduct) {
			res.status(400)
			res.send({message : "Product not found!"})
		}
		let updateData = {
            name: req.body.name,
            price: req.body.price
        }
		// 3. Handle the image if a new file was uploaded
        if (req.file) {
            updateData.imageName = req.file.filename;
            updateData.imagePath = req.file.path;
        }
		const updatedProduct = await Product.findByIdAndUpdate(id , updateData)
		res.status(200)
		res.send({message : "Product updated" , data : updatedProduct})
	} catch(error) {
		res.status(500)
		res.send({message : error.message})
	}
}
export const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params
		const existingProduct = await Product.findByIdAndDelete(id)
		if(!existingProduct) {
			res.status(400)
			res.send({message : "Product not found!"})
		} 
		
	}catch(error) {
		res.status(500)
		res.send({message : error.message})
	}

}