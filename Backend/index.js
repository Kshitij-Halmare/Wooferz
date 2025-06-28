import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./Routes/UserRouter.js";
import blogRouter from "./Routes/BlogRouter.js";
import dogRouter from "./Routes/DogRouter.js";
import volunteerRouter from "./Routes/VolunteerRouter.js";
import User from "./Schemas/UserSchema.js";
import Blog from "./Schemas/BlogSchema.js";
import Dog from "./Schemas/DogSchema.js";
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 8000;
app.use("/api/user",userRouter);
app.use("/blog",blogRouter);
app.use("/api/dog",dogRouter);
app.use("/api/volunteer",volunteerRouter);


// Get user profile
app.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate({
        path: 'dogsForAdoption',
        match: { isAdopted: false } // Only show non-adopted dogs
      })
      .populate({
        path: 'blogs',
        select: 'title banner publishedAt activity',
        options: { sort: { publishedAt: -1 } }
      })
      .exec();
      
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a dog
// Delete a dog
app.delete('/dog/:dogId', async (req, res) => {
  try {
    const { dogId } = req.params;
    const { userId } = req.body;
    
    const dog = await Dog.findById(dogId);
    
    if (!dog) {
      return res.status(404).json({ message: 'Dog not found' });
    }
    
    // Verify user owns the dog
    if (dog.owner.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    // Remove dog from user's dogsForAdoption array
    await User.findByIdAndUpdate(userId, {
      $pull: { dogsForAdoption: dogId }
    });
    
    // Delete the dog
    await Dog.findByIdAndDelete(dogId);
    
    res.json({ message: 'Dog removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a blog
app.delete('/blog/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userId } = req.body;
    
    const blog = await Blog.findById(blogId);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    // Verify user is the author
    if (blog.author.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    // Remove blog from user's blogs array
    await User.findByIdAndUpdate(userId, {
      $pull: { blogs: blogId }
    });
    
    // Delete the blog
    await Blog.findByIdAndDelete(blogId);
    
    res.json({ message: 'Blog removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// app.use("/api/problem",ProblemRouter);
// app.listen(PORT,()=>{
//     console.log(`server listening on port ${PORT}`);
// })
const MONGODB_URL=process.env.MONGODB_URL;
if(!MONGODB_URL){
    console.log("url not found");
}
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit if MongoDB connection fails
  });