import React, { useContext, useState } from 'react';
import { X, Image, Tag, Eye } from 'lucide-react';

function PublishPage() {
  // Mock contexts for demo - replace with your actual contexts
  const user = { _id: 'user123' };
  const loading = false;
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="text-orange-600 text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="text-gray-600 text-lg">Please log in to edit the blog.</div>
      </div>
    );
  }

  const NumberofTags = 5;
  // Mock blog state for demo - replace with your actual context
  const [blog, setBlog] = useState({
    title: 'Sample Blog Title',
    description: 'This is a sample description for the blog preview.',
    banner: '',
    tags: ['React', 'JavaScript'],
    blog_id: 'blog123'
  });
  const [tag, setTag] = useState("");

  const goBack = () => {
    // setEditorState('editor'); // Uncomment when using actual context
    console.log('Going back to editor');
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const handleBlogTitleChange = (e) => {
    setBlog((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    console.log('Publishing blog:', blog);
    // Mock success for demo
    alert('Blog published successfully!');
    
    /* Uncomment for actual implementation:
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/blog/createBlog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ blog, authorId: user._id, draft: false, blog_id: blog.blog_id })
      });

      const resData = await response.json();

      if (resData.success) {
        toast.success("Your blog is being published.");
        navigate("/community");
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
      toast.error("An error occurred while publishing your blog. Please try again.");
    }
    */
  };

  const handleBlogDescriptionChange = (e) => {
    setBlog((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handleAddTheTag = (e) => {
    const text = tag.trim();
    if (!blog.tags.includes(text) && text.length > 0) {
      if (blog.tags.length < NumberofTags) {
        setBlog(prev => ({
          ...prev,
          tags: [...prev.tags, text]
        }));
        setTag("");
        alert("Tag added successfully"); // Replace with toast.success when available
      } else {
        alert("Tags limit exceeded"); // Replace with toast.error when available
      }
    } else {
      alert("Please add a unique tag"); // Replace with toast.error when available
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header Bar */}
      <div className="bg-white border-b border-orange-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Publish Your Blog</h1>
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          <X className="text-xl" />
          <span className="hidden sm:inline">Back to Editor</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Preview Section */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Eye className="text-orange-600" />
              Preview
            </h2>
          </div>

          <div className="p-6">
            {/* Banner Preview */}
            <div className="relative h-48 bg-orange-50 rounded-lg overflow-hidden mb-6 border border-orange-200">
              {blog?.banner ? (
                <img
                  src={blog.banner}
                  alt="Blog Banner"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-400">
                  <Image className="text-4xl mb-2" />
                  <p className="text-lg">No Banner Image</p>
                </div>
              )}
            </div>

            {/* Content Preview */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
                {blog?.title || 'Untitled Blog'}
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                {blog?.description || 'Write a short description to preview your blog content here.'}
              </p>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
            <h2 className="text-lg font-semibold text-gray-800">Blog Details</h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Title Input */}
            <div>
              <label htmlFor="blog-title" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                id="blog-title"
                type="text"
                onChange={handleBlogTitleChange}
                value={blog.title || ''}
                className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200"
                placeholder="Enter your blog title"
              />
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor="blog-description" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Description
              </label>
              <textarea
                id="blog-description"
                onChange={handleBlogDescriptionChange}
                value={blog.description || ''}
                maxLength={200}
                rows={4}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Write a short description about your blog (max 200 characters)"
              />
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-500">
                  {(blog.description || '').length}/200 characters
                </span>
                <span className="text-orange-600">
                  {200 - (blog.description || '').length} remaining
                </span>
              </div>
            </div>

            {/* Tags Section */}
            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Tag className="text-orange-600" />
                Topics
                <span className="text-xs text-gray-500 font-normal">(Helps in searching and ranking)</span>
              </label>
              
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  onChange={(e) => setTag(e.target.value)}
                  value={tag}
                  placeholder="Enter a topic"
                  className="flex-1 px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTheTag();
                    }
                  }}
                />
                <button
                  onClick={handleAddTheTag}
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  Add
                </button>
              </div>

              {/* Tags Display */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((val, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-right">
                <span className="text-sm text-orange-600">
                  {NumberofTags - (blog.tags?.length || 0)} tags remaining
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Publish Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublishPage;