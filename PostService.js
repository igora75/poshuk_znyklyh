import Post from "./Post.js"
import fileService from "./fileService.js"

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({ ...post, picture: fileName })
        return createdPost
    }

    async getAll() {
        const posts = await Post.find().sort({ _id: -1 }).limit(16).lean()
        return posts
    }

    async getSearch(post) {
        const posts = await Post.find(post)
        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id not specified')
        }
        const post = await Post.findById(id)
        return post
    }

    async update(post) {
        if (!post._id) {
            throw new Error('id not specified')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('id not specified')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }

}

export default new PostService()