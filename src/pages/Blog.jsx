import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1MIeWv2qjYYTJOW0QIcqkRFuVeCN9UwdLv-gyN4WfC3A/export?format=csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            // Filter out empty rows
            const validBlogs = results.data.filter(blog => blog.title || blog.description || blog.image);
            setBlogs(validBlogs);
            setLoading(false);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#fffbf0] pt-12 pb-12">
      {/* Banner */}
      <div className="bg-[#fffbf0] text-white py-12 mb-12 shadow-inner">
        <div className="container mx-auto px-4 text-center">
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#cc0000] border-t-transparent"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-24 text-gray-500 bg-white rounded-xl shadow-sm border border-gray-100">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No posts found</h3>
            <p className="text-gray-500 max-w-md mx-auto">We are currently working on new content. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="flex flex-col bg-transparent group">
                <div className="relative w-full aspect-video overflow-hidden rounded-[8px] bg-gray-200 mb-4">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://gurukul.org/wp-content/uploads/2023/09/head-logo-1.svg';
                        e.target.className = 'w-1/2 h-1/2 object-contain mx-auto mt-6 opacity-30';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-2 leading-tight font-['Zapf_Humanist','Optima','sans-serif'] group-hover:text-[#cc0000] transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-[16px] mb-4 line-clamp-3 leading-relaxed flex-grow">
                  {blog.description}
                </p>

                <a className="mt-auto self-start text-[#cc0000] font-bold text-sm hover:underline transition-all flex items-center cursor-pointer">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
