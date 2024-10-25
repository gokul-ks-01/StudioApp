
import React from 'react';

const RecentWorks = () => {
    useEffect(() => {
        // This loads Instagram's embed script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.instagram.com/embed.js';
        document.body.appendChild(script);
      }, []);
    
      return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <table style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
            <tbody>
              <tr>
                {/* First column: Image */}
                <td style={{ border: '1px solid black', padding: '10px' }}>
                  <img
                    src="https://via.placeholder.com/150" // Replace with your image URL
                    alt="First Column"
                    style={{ width: '150px', height: '150px' }}
                  />
                </td>
    
                {/* Second column: Image */}
                <td style={{ border: '1px solid black', padding: '10px' }}>
                  <img
                    src="https://via.placeholder.com/150" // Replace with your image URL
                    alt="Second Column"
                    style={{ width: '150px', height: '150px' }}
                  />
                </td>
    
                {/* Third column: Instagram Reel */}
                <td style={{ border: '1px solid black', padding: '10px' }}>
                  {/* Instagram Embed */}
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink="https://www.instagram.com/reel/your-reel-id/"
                    data-instgrm-version="14"
                    style={{ width: '100%' }}
                  >
                    <a href="https://www.instagram.com/reel/your-reel-id/">
                      Instagram Reel
                    </a>
                  </blockquote>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    };
    

export default RecentWorks;
