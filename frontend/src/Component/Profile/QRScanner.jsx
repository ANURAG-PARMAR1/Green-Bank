import { Scanner } from '@yudiel/react-qr-scanner';
import { useNavigate } from 'react-router';

export const QRScanner = () => {
    const navigate = useNavigate();
  const handleError = (error) => {
    alert(`An error occurred: ${error.message || error}`);
  };

  const handleQRScannerData = (result) => {
    alert(result[0].rawValue);
    navigate("/amount");
  }

  const containerStyle = {
    width: '100vw', // 50% of the viewport width
    height: '100vw', // Make it square by matching width and height
    maxWidth: '700px', // Maximum size for larger screens
    maxHeight: '700px', // Maintain square proportions
    margin: 'auto', // Center on the screen
    overflow: 'hidden', // Prevent overflow
    borderRadius: '10px', // Rounded corners for better design
    border: '2px solid #000', // Optional border for clarity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const scannerStyle = {
    width: '100%', // Full width of the container
    height: '100%', // Full height of the container
    objectFit: 'cover', // Maintain aspect ratio and fill the container
    
  };

  return (
    <div className='flex flex-row justify-center items-center'>
        <div style={containerStyle}>
        <Scanner
        onScan={handleQRScannerData}
        onError={handleError}
        style={scannerStyle}
      />
    </div>
    </div>
  );
};


