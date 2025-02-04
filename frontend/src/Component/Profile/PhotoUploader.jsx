import React from "react";

export function PhotoUploader() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
    }
  };

  return (
    
      <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600">
        Upload Photo
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
  );
}
