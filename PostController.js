import PostService from "./PostService.js"
import { userValidation } from "./validation/user.js"

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        
        
        try {
            const { error } = userValidation(req.body)
        if (error) {
            console.log(error);
            res.status(400).json({ message: 'error' })
        }

            const updatedPost = await PostService.update(req.body)
            res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()