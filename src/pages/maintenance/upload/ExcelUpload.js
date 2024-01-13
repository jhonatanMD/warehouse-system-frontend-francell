import React, { useState } from 'react';

const ExcelUpload = ({ onExcelUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (file) {
            onExcelUpload(file);
            setFile(null);
        }
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="input-group">
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                            accept=".xlsx"
                            onChange={handleFileChange}
                        />

                    </div>
                    <div className="input-group-append">
                        <button
                            type="button"
                            onClick={handleUpload}
                            className="btn btn-primary waves-effect waves-light btn-sm"
                        >
                            Subir Excel
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ExcelUpload;
