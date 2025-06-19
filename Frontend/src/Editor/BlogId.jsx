import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegThumbsUp, FaRegComments, FaEye, FaTwitter, FaThumbsUp } from 'react-icons/fa';
import { UserContext } from '../Authentication/Authentication.jsx';
import toast from 'react-hot-toast';
import { fetchComment } from "../Components/Editor/ComponentsContainer"
import ComponentsContainer from '../Components/Editor/ComponentsContainer';
import Header from "../Components/Header.jsx"

export const BlogContext = createContext({});

function BlogId() {
  const [blog_id, setBlog_id] = useState(null);
  const [commentsWrapper, setCommentWrapper] = useState(true);
  const [totalParentsCommentsLoaded, settotalParentsCommentsLoaded] = useState(0);
  let blogId = useParams();
  blogId = blogId.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState('');
  const [relBlog, setRelBlog] = useState([]);
  const navigate = useNavigate();
  const [isLiked, setIsLikedUser] = useState(true);

  useEffect(() => {
    setCommentWrapper(false);
    settotalParentsCommentsLoaded(0);
    setCommentWrapper(0);
  }, [])
  
  useEffect(() => {
    if (blog_id) {
      const fetchLikeDetails = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/blog/isLikedUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blog_id: blog_id,
              user_id: user._id,
            }),
          });
          const resData = await response.json();
          console.log(resData);
          setIsLikedUser(Boolean(resData.data)); // Set whether the blog is liked by the user
        } catch (error) {
          console.error(error);
        }
      };
      fetchLikeDetails();
    }
  }, [blog_id]);

  // Handle like/dislike click
  const handleClickLike = async () => {
    if (!user || !user._id) {
      toast.error("Please Sign in");
      return;
    }
    const newLikeState = !isLiked;

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/blog/updateLike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blog_id: blog._id,  // Blog ID
          user_id: user._id,   // User ID
          isLiked: newLikeState, // Whether the user liked or disliked the blog
        }),
      });

      const resData = await response.json();
      console.log(resData);

      if (resData) {
        toast(newLikeState ? "Successfully liked" : "Successfully unliked");

        // Update the UI based on the new like state
        setIsLikedUser(prev => !prev);
        setBlog({
          ...blog,  // Keep the rest of the blog object intact
          activity: {
            ...blog.activity,  // Keep the existing activity object
            total_likes: resData.updatedLikes,  // Update the total_likes field
          },
        });

        console.log(blog);
      } else {
        toast(resData.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error in handleClickLike:", error);
    }
  };

  const fetchBlogDetails = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/blog/getBlogData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blogId }), // Pass the blogId in the request body
      });
      const resData = await response.json();
      if (resData.success) {
        const blogData = resData.data;
        blogData.comments = await fetchComment({ blog_id: blogData._id }) || [];
        setBlog(blogData);
        console.log(blogData);
        setBlog_id(blogData._id);
        setCategory(blogData.tags[0]); // Assuming the first tag is the category
      } else {
        console.error('Error fetching blog data:', resData);
      }
    } catch (error) {
      console.error('Error fetching blog details:', error);
    } finally {
      setLoading(false);
    }
  }, [blogId]);

  // Fetch related blogs based on category
  const getSpecificBlog = useCallback(async (category) => {
    if (!category) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/blog/getSpecificTag`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category }),
      });
      const resData = await response.json();
      if (resData.success && resData.data) {
        setRelBlog(resData.data);
      }
    } catch (err) {
      console.error('Error fetching specific blogs:', err);
    }
  }, []);

  useEffect(() => {
    fetchBlogDetails(); // Fetch blog details on initial render or blogId change
  }, [fetchBlogDetails]);

  useEffect(() => {
    if (category) {
      getSpecificBlog(category); // Fetch related blogs when category is available
    }
  }, [category, getSpecificBlog]);

  // Show loading state while the data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <div className="text-center">
          <div className="animate-spin inline-block w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mb-4"></div>
          <p className="text-orange-600 text-lg font-serif">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle case when blog data is not available
  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <div className="text-lg font-semibold text-orange-600 bg-white p-6 rounded-lg shadow-lg border border-orange-200">
          Blog not found
        </div>
      </div>
    );
  }

  const { title, description, banner, content, publishedAt, tags, activity, author } = blog;
  console.log("degrader", { title, description, banner, content, publishedAt, tags, activity, author });
  
  const generateTwitterLink = () => {
    const tweetText = encodeURIComponent(`${title}: ${description}`);
    const tweetUrl = encodeURIComponent(window.location.href);
    const tweetHashtags = encodeURIComponent(tags.join(', '));
    return `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}&hashtags=${tweetHashtags}`;
  };

  const renderContent = (content) => {
    // Check if content is defined and blocks exists as an array
    if (!content || !content.blocks || !Array.isArray(content.blocks)) {
      console.log("Content or blocks are undefined or not an array");
      return <p className="text-gray-500">No content available.</p>;
    }

    const blocks = content.blocks;

    return blocks.map((block) => {
      const { id, type, data } = block;

      switch (type) {
        case 'paragraph':
          return (
            <p key={id} className="text-base text-gray-700 mb-4 leading-relaxed">
              {data.text || 'No text available'}
            </p>
          );

        case 'header':
          const HeaderTag = `h${data.level}`; // Dynamically decide header level
          return (
            <HeaderTag key={id} className="text-2xl font-bold text-orange-700 mb-4 border-l-4 border-orange-500 pl-4">
              {data.text || 'No header text available'}
            </HeaderTag>
          );

        case 'list':
          if (Array.isArray(data.items)) {
            const ListTag = data.style === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag key={id} className="list-disc ml-6 mb-4 text-gray-700">
                {data.items.map((item, index) => (
                  <li key={index} className="text-base mb-1">
                    {item.content || 'Empty item'}
                  </li>
                ))}
              </ListTag>
            );
          } else {
            return <p key={id}>List data is missing or incorrect.</p>;
          }

        case 'image':
          return (
            <div key={id} className="mb-6">
              <img
                src={data.file?.url || '/path/to/fallback-image.jpg'}
                alt={data.file?.filename || 'Image'}
                className="w-[600px] h-[300px] object-cover mx-auto rounded-lg shadow-md border border-orange-200"
              />
            </div>
          );

        case 'quote':
          return (
            <blockquote
              key={id}
              className="bg-orange-50 border-l-4 border-orange-500 p-6 italic text-lg text-gray-700 shadow-lg rounded-lg mb-6 relative"
            >
              <div className="absolute left-2 top-2 text-4xl text-orange-500">"</div>
              <p>{data.text || 'No quote text available'}</p>
            </blockquote>
          );

        default:
          return <p key={id}>Unrecognized block type: {type}</p>;
      }
    });
  };

  return (
    <BlogContext.Provider value={{ commentsWrapper, setCommentWrapper, totalParentsCommentsLoaded, settotalParentsCommentsLoaded, blog, blog_id, setBlog }}>
      {/* <Header /> */}
      <ComponentsContainer />
      <div className="max-w-4xl overflow-hidden px-4 rounded-lg mt-8 mx-auto min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <img src={banner} alt={title} className="w-[800px] h-[400px] object-cover rounded-lg mb-6 shadow-lg border border-orange-200" />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-xl border border-orange-200">
          <h1 className="text-4xl font-serif font-bold text-orange-700 mb-4 border-b-2 border-orange-200 pb-2">{title}</h1>

          <div className="flex items-center justify-between mb-6 space-x-4">
            <div className="flex items-center">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-800">{author.name}</p>
                <p
                  onClick={() => navigate(`/profile/${author.email}`)}
                  className="text-sm cursor-pointer text-orange-600 hover:text-orange-700 font-medium"
                >
                  @{author.email}
                </p>
              </div>
            </div>
            <a href={generateTwitterLink()} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-orange-500 text-2xl hover:text-orange-600 transition-colors duration-200" />
            </a>
          </div>

          <p className="text-lg text-gray-700 mb-6 bg-orange-50 p-4 rounded-lg border border-orange-200">
            <span className='font-bold font-serif text-orange-700'>Description: </span>
            {description}
          </p>

          <div className="space-y-6">
            {content && content.length > 0 ? renderContent(...content)
              : <p className="text-gray-500">No content available.</p>}
          </div>

          <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
            <div className="flex flex-wrap space-x-4 mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-orange-700">Published on:</strong> {new Date(publishedAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong className="text-orange-700">Tags:</strong> 
                <span className="ml-2">
                  {tags.map(tag => (
                    <span key={tag} className="inline-block bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs mr-2">
                      {tag}
                    </span>
                  ))}
                </span>
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-6 text-gray-600">
                <p className="flex items-center space-x-2">
                  {isLiked ? (
                    <FaThumbsUp
                      className="text-orange-500 cursor-pointer hover:text-orange-600 transition-colors duration-200"
                      onClick={handleClickLike}
                    />
                  ) : (
                    <FaRegThumbsUp
                      className="text-orange-500 cursor-pointer hover:text-orange-600 transition-colors duration-200"
                      onClick={handleClickLike}
                    />
                  )}
                  <span className="font-semibold text-orange-700">Likes:</span>
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-sm">{activity.total_likes}</span>
                </p>
                <p className="flex items-center space-x-2 cursor-pointer" onClick={() => { setCommentWrapper(prev => !prev) }}>
                  <FaRegComments className="text-orange-500 hover:text-orange-600 transition-colors duration-200" />
                  <span className="font-semibold text-orange-700">Comments:</span>
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-sm">{activity.total_comments}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaEye className="text-orange-500" />
                  <span className="font-semibold text-orange-700">Reads:</span>
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-sm">{activity.total_reads}</span>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-12">
            <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2">Related Blogs</h2>
            <div className="space-y-4">
              {relBlog && relBlog.length > 0 ? (
                relBlog.map((relatedBlog, index) => (
                  relatedBlog.blog_id !== blogId ? (
                    <div 
                      key={index} 
                      onClick={() => navigate(`/blog/${relatedBlog.blog_id}`)} 
                      className="p-4 cursor-pointer flex justify-between hover:border-orange-300 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:bg-orange-50"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-orange-700 hover:text-orange-800">{relatedBlog.title}</h3>
                        <p className="text-gray-600">{relatedBlog.description}</p>
                      </div>
                      <img src={relatedBlog.banner} alt="" className="w-32 h-20 object-cover rounded-md border border-orange-200" />
                    </div>
                  ) : null
                ))
              ) : (
                <p className="text-gray-500 text-center py-8 bg-orange-50 rounded-lg border border-orange-200">No related blogs found.</p>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </BlogContext.Provider>
  );
}

export default BlogId;