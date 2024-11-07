import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ setFiles }) => {
  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      timestamp: new Date().toLocaleString(),
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="file-upload">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & Drop files here, or click to select</p>
      </div>
    </div>
  );
};

export default FileUpload;
