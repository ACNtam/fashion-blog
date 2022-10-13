import express from "express";
import db from "../db/db.js";

const router = express.Router()

//get all post
router.get("/posts", async (req, res) => {
    try {
        let posts = await db.any("SELECT * FROM posts")
        res.json(posts)
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

//get post by id
router.get("/posts/:id", async (req, res) => {
    try {
        let id = req.params.id
        let post = await db.any("SELECT * FROM posts WHERE id=$1", [id])
        res.json(post[0])
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

router.post("/posts", async (req, res) => {
    try {
        //object destructure
        const { title, image, content } = req.body
        let post = await db.any("INSERT INTO posts (title, image, content) VALUES($1,$2,$3)", [title, image, content])
        res.status(201).json({message: "post added"})
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

//Add a like to a post
router.post("/posts/:id/likes", async (req, res) => {
    try {
        let id = req.params.id
        let post = await db.any("INSERT INTO likes (post_id) VALUES($1)", [id])
        res.status(201).json({message: "likes added"})
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

//update a post by id
router.put("/posts/:id", async (req, res) => {
    try {
        let id = req.params.id

        //object destructure
        const { title, image, content } = req.body
        let post = await db.any("UPDATE posts SET title=$1, image=$2, content=$3 WHERE id=$4", [title, image, content,id])
        res.status(201).json({message: "post updated"})
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

//delete post by id
router.delete("/posts/:id", async (req, res) => {
    try {
        let id = req.params.id

        let post = await db.any("DELETE FROM posts WHERE id=$1", [id])
        res.status(201).json({message: "post deleted"})
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

//get number of likes by post
router.get("/posts/:id/likes", async (req, res) => {
    try {
        let id = req.params.id
        let likes = await db.any("SELECT COUNT(*) FROM likes WHERE post_id=$1", [id])
        res.json(likes[0])
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})


export default router;