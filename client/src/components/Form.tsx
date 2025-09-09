import { useState, useRef } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    imgSrc: "",
    likes: 0,
    name: "",
    postDescription: "",
    timestamp: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch(`http://localhost:3040/api/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      if (response.success === true) {
        setErrorMessage("");
        setSuccessMessage("Post created Successfully!!");
        resetForm();
      } else {
        setErrorMessage(response.message);
      }
    } catch (error: any) {
      setErrorMessage("Error creating post: " + error.message);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCancelClick = () => {};

  const resetForm = () => {
    formRef.current !== null && formRef.current.reset();
  };

  return (
    <div className="create_post_area">
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        // action="/upload-handler"
        // method="post"
        // encType="multipart/form-data"
      >
        <div className="create_post_form">
          <label htmlFor="imgSrc">Image: </label>
          <input
            id="img_src"
            type="file"
            name="imgSrc"
            onChange={handleChange}
            placeholder="Image source"
            required
          />
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Users name"
            required
          />
          <label htmlFor="postDescription">Post description: </label>
          <input
            id="postDescription"
            type="text"
            name="postDescription"
            onChange={handleChange}
            placeholder="Post Description"
            required
          />
        </div>
        <div className="post-form-btns">
          <button type="submit">Post</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
