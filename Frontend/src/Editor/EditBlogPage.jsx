import React, { useContext, useEffect, useState } from 'react';
import toast from "react-hot-toast";
import blogBannerPlaceholder from "../assets/360_F_588335931_SG8mqLyvPnIQZL6vlkDtDhtJacYDoFuQ.jpg";
import BlogEditorNavbar from '../Components/Editor/BlogEditorNavbar';
import { EditorContext } from './EditorPage';
import EditorJS from '@editorjs/editorjs';
import { editorTools } from './Tools';
import { UserContext } from '../Authentication/Authentication.jsx'; // Corrected import path

function EditBlogPage() {
  const { blog, setBlog, textEditor, setTextEditor } = useContext(EditorContext);
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <div className="text-orange-600 text-xl font-serif">Loading...</div>
      </div>
    );
  }

  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  
  useEffect(() => {
    setTextEditor(new EditorJS({
      holder: "textEditor",
      data: {
        blocks: blog.content[0] || "",  // Pass blocks correctly
      },
      tools: editorTools,
      placeholder: "Start Writing a new Journey ..."
    }));
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      setImageLoading(true);

      // Display the image preview immediately after selection
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview for image
      };
      reader.readAsDataURL(file);

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_DOMAIN}/blog/upload-blog-banner/${user._id}`, // Use `user.id` or a similar property to identify the user
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();

      // Updating the blog banner in the context state
      setBlog((prevBlog) => ({
        ...prevBlog,
        banner: data.bannerImageUrl,
      }));

      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image');
    } finally {
      setImageLoading(false);
    }
  };
  
  console.log(user);
  
  return (
    <>
      <BlogEditorNavbar />
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen">
        <div className="mx-auto max-w-[900px] bg-white shadow-xl rounded-lg p-6 w-full border border-orange-200">
          <div className="relative aspect-video bg-white border-4 border-orange-300 hover:border-orange-400 transition-colors duration-200 rounded-lg overflow-hidden">
            <label htmlFor="uploadImage" className="cursor-pointer block h-full">
              {imageLoading ? (
                <div className="flex items-center justify-center h-full bg-orange-50">
                  <div className="text-center">
                    <div className="animate-spin inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full mb-2"></div>
                    <p className="text-orange-600 font-semibold">Uploading...</p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={imagePreview || blog.banner || blogBannerPlaceholder}
                    alt="Blog Banner"
                    className="w-full h-full object-cover"
                  />
                  {!imagePreview && !blog.banner && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-white">
                      <div className="text-center text-orange-600">
                        <div className="mb-2">
                          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="md:text-2xl text-lg font-bold font-serif">Upload</p>
                        <p className="md:text-3xl text-xl font-bold font-serif">Blog Banner</p>
                      </div>
                    </div>
                  )}
                </>
              )}
              <input
                id="uploadImage"
                type="file"
                accept=".png,.jpg,.jpeg"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div className="my-6">
            <input
              type="text"
              value={blog.title}
              onChange={(e) =>
                setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }))
              }
              placeholder="Enter Blog Title"
              className="w-full md:px-4 md:py-4 md:text-4xl text-xl px-2 py-2 border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 font-serif placeholder-orange-300"
            />
          </div>
          
          <div className="textEditor border-2 border-orange-200 rounded-lg p-4 focus-within:border-orange-500 transition-colors duration-200" id="textEditor"></div>
        </div>
      </section>
    </>
  );
}

export default EditBlogPage;