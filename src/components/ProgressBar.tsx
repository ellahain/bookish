//import React from 'react';
import banner from "/logo2025.png";

export default function ProgressBar() {
    const totalBooks = 25; // Total book goal
    const booksRead = 8; // Update this value to reflect your progress
    const progress = (booksRead / totalBooks) * 100; // Calculate progress percentage
  
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centers horizontally
          alignItems: 'center', // Centers vertically
          flexDirection: 'column', // Stack the image and progress bar vertically
          textAlign: 'center',
          padding: '20px',
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <img
          src={banner}
          alt="Goodreads Banner"
          style={{
            width: 'auto', // Adjusted width of the banner
            height: '150px',
            marginBottom: '20px', // Adds space between the banner and progress bar
          }}
        />
        <div
          style={{
            height: '30px',
            width: '40vw', // Match the width of the image
            backgroundColor: '#e0e0df',
            borderRadius: '15px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#d2928a',
              transition: 'width 0.3s ease',
            }}
          ></div>
        </div>
        <p style={{ color: 'white', marginTop: '10px' }}>
          {booksRead} of {totalBooks} books read ({Math.round(progress)}%)
        </p>
      </div>
    );
  }
  
