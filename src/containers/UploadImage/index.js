import { useEffect, useRef, useState } from "react";
import { getImage, uploadImages } from "../../shared/service";

const withUploadImage = (Component) => {
  const UploadImage = (props) => {
    const [images, setImages] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    const inputRef = useRef(null);

    const handleUpload = () => {
      inputRef.current.click();
      inputRef.current.onchange = function (e) {
        const files = Array.from(inputRef.current.files);
        uploadImages(files).then((res) => {
          setImages(res.data.map((img) => getImage(img)));
          setIsUploading(false);
        });
      };
      setIsUploading(true);
    };

    return (
      <>
        <input
          type="file"
          ref={inputRef}
          id="uploadImages"
          name="images"
          accept="images/*"
          multiple
        />
        <Component
          images={images}
          uploading={isUploading}
          upload={handleUpload}
          clearImage={() => setImages([])}
          {...props}
        />
      </>
    );
  };
  return UploadImage;
};

export default withUploadImage;
