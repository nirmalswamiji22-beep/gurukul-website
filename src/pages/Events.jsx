import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Reduced to 6 because the vertical timeline takes more space

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1XC9vc1_XwfdUJYbILau4Ygi9Lmi_7x13YSxMiHJveDE/export?format=csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            // Filter out empty rows if any
            const validEvents = results.data.filter(event => event.title || event.description || event.date || event.image);
            setEvents(validEvents);
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

    fetchEvents();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fffbf0] pt-24 pb-12">
      {/* Banner */}

      <div className="container mx-auto px-4 max-w-7xl">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#cc0000] border-t-transparent"></div>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-24 text-gray-500 bg-white rounded-xl shadow-sm border border-gray-100 mt-10">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-500 max-w-md mx-auto">We're updating our calendar. Check back later for upcoming events, cultural programs, and academic celebrations.</p>
          </div>
        ) : (
          <>
            <div className="events-timeline">
              {currentEvents.map((event, index) => (
                <section key={index} className="blog-section animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="line"></span>
                  <div className="img-section">
                    <p className="date">{event.date || 'TBD'}</p>
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        onError={(e) => {
                          e.target.src = 'https://gurukul.org/wp-content/uploads/2023/09/head-logo-1.svg';
                          e.target.className = 'w-1/2 object-contain mx-auto opacity-30 mt-8 mb-8';
                        }}
                      />
                    ) : (
                      <div className="w-full max-w-[450px] aspect-[3/2] flex flex-col items-center justify-center text-gray-400 bg-gray-100 rounded-[10px] mb-[25px]">
                        <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="description-group">
                    <h3 className="heading">{event.title}</h3>
                    <p className="description line-clamp-4">{event.description}</p>
                    <a className="read-more">Read more</a>
                  </div>
                </section>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 space-x-2 pb-8">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-[#cc0000] hover:text-white border border-gray-200 shadow-sm'
                    }`}
                >
                  Previous
                </button>

                <div className="flex space-x-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center transition-all ${currentPage === i + 1
                          ? 'bg-[#cc0000] text-white shadow-md transform scale-105'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm'
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-[#cc0000] hover:text-white border border-gray-200 shadow-sm'
                    }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
