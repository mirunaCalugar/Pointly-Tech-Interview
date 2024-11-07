import React from "react";

const FileList = ({ files, setFiles }) => {
  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="file-list">
      <h3>Uploaded Files:</h3>
      {files.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.name} className="file-item">
              <span className="file-name">{file.name}</span>
              <span className="file-size">
                ({(file.size / 1024).toFixed(2)} KB)
              </span>
              <span className="file-timestamp">
                Uploaded at: {file.timestamp}
              </span>
              <button
                onClick={() => handleDelete(file.name)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileList;
