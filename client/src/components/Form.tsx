import { useState } from "react";
//import type PostInfo from "../interfaces/postDataType";

export default function Form() {
  const [formData, setFormData] = useState({
    imgSrc: "",
    likes: 0,
    name: "",
    postDescription: "",
    timestamp: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const creationTime = Date().toLocaleString();
    setFormData((prev) => ({ ...prev, creationTime }));
    try {
      console.log(formData);
      const res = await fetch(`http://localhost:3040/api/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      console.log(response);
      if (response.success === true) {
        setErrorMessage("");

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

  return (
    <div className="create_post_area">
      {errorMessage ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : (
        <p style={{ color: "green" }}>{"Post created successfully!!"}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="create_post_form">
          <label htmlFor="imgSrc">Image: </label>
          <input
            id="img_src"
            type="text"
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
