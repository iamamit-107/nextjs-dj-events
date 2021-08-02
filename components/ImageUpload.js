import styles from "@/styles/Form.module.css";
import { useState } from "react";
import { API_URL } from "../config/index";

export default function ImageUpload({ evtId, uploadImage }) {
  const [image, setImage] = useState(null);

  console.log(image);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fomrData = new FormData();
    fomrData.append("files", image);
    fomrData.append("ref", "events");
    fomrData.append("refId", evtId);
    fomrData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: fomrData,
    });

    if (res.ok) {
      uploadImage();
    }
  };
  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  );
}
