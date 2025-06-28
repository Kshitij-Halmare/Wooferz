import express from "express";
import { v2 as cloudinaryV2 } from "cloudinary";
import multer from "multer";
import UserSchema from "../Schemas/UserSchema.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/user/update-avatar
router.post("/update-avatar", upload.single("avatar"), async (req, res) => {
  try {
    const userId = req.body.userId; // Should be sent from frontend (or get from JWT)
    if (!userId) return res.status(400).json({ error: "User ID required" });
    if (!req.file) return res.status(400).json({ error: "No file uploaded." });

    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    const result = await cloudinaryV2.uploader.upload(base64Image, {
      folder: "Wooferz/avatars",
      timeout: 60000,
    });

    const updatedUser = await UserSchema.findByIdAndUpdate(
      userId,
      { avatar: result.secure_url },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: "User not found." });
    res.status(200).json({
      message: "Avatar updated successfully.",
      avatarUrl: result.secure_url,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error uploading avatar:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
