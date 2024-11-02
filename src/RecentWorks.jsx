
import React from 'react';

const RecentWorks = () => {
    
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
              </tr>
            </tbody>
          </table>
        </div>
      );
    };
    

export default RecentWorks;
