import React, { useState, useEffect } from 'react';
import { Download, FileText, Heart, Star } from 'lucide-react';
import './Resume.css'

const AnimatedGreetingCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 300);
    setTimeout(() => setShowDownloadButton(true), 2000);
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Fetch the PDF from public folder
      const response = await fetch('/Bipul_New.pdf');
      
      if (!response.ok) {
        throw new Error('Resume not found');
      }
      
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Bipul_New.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Sorry, the resume could not be downloaded. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };
  const handleGoBack = () => {
    window.location.href = '/';
  };
  return (
    <>
      <div className="greeting-container">
        {/* Floating Background Elements */}
        <div className="floating-stars">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <Star size={Math.random() * 20 + 10} />
            </div>
          ))}
        </div>

        {/* Main Card */}
        <div className={`main-card ${isVisible ? 'visible' : ''}`}>
          <div className="card-container">
            
            {/* Animated Background Pattern */}
            <div className="background-pattern">
              <div className="bg-shape-1"></div>
              <div className="bg-shape-2"></div>
              <div className="bg-shape-3"></div>
            </div>

            {/* Content */}
            <div className="card-content">
              {/* Animated Hello */}
              <div>
                <h1 className={`hello-title ${isVisible ? 'visible' : ''}`}>
                  Hello! 👋
                </h1>
                
                {/* Animated underline */}
                <div className={`title-underline ${isVisible ? 'visible' : ''}`}></div>
              </div>

              {/* Thank you message */}
              <div className={`thank-you-message ${isVisible ? 'visible' : ''}`}>
                <p className="main-message">
                  Thank you for visiting! 
                  <Heart className="heart-icon" size={20} />
                </p>
                <p className="sub-message">
                  I'm excited you're here!
                </p>
                <p className="download-prompt">
                  Want to download my resume?
                </p>
              </div>

              {/* Download Button */}
              <div className={`download-section ${showDownloadButton ? 'visible' : ''}`}>
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="download-button"
                >
                  {/* Button Content */}
                  <div className="button-content">
                    {isDownloading ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Downloading...</span>
                      </>
                    ) : (
                      <>
                        <Download className="download-icon" size={24} />
                        <span>Download Resume</span>
                        <FileText className="file-icon" size={20} />
                      </>
                    )}
                  </div>
                </button>
                <div>
                <button onClick={handleGoBack} className="go-back-button">
                  OK Go Back Now
                </button>
                </div>

                {/* Download hint */}
                <p className="download-hint">
                  Click above to get my latest resume! 📄
                </p>
              </div>

              {/* Floating hearts animation */}
              <div className="floating-hearts">
                <Heart className="floating-heart" size={16} />
                <Heart className="floating-heart" size={16} />
                <Heart className="floating-heart" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedGreetingCard;