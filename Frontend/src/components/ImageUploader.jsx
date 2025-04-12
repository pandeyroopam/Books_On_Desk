import { useState } from "react";

const ImageUploader = () => {
  const [files, setFiles] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = [...e.target.files];

    if (selectedFiles.length > 4) {
      alert("You can only upload up to 4 images.");
      setFiles(selectedFiles.slice(0, 4));
    } else {
      setFiles(selectedFiles);
    }
  };

  return (
    <div className="my-4">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Image Thumbnails */}
      <div className="mt-4 flex gap-4 flex-wrap">
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className="w-24 h-24 relative border rounded-md overflow-hidden">
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUploader;
