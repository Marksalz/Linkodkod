import { useState, useRef, useEffect } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    imgSrc: "",
    likes: 0,
    name: "",
    description: "",
    timestamp: "",
  });
  //const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [errorMessage, successMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    //setFormData((prev) => ({ ...prev, imgSrc: file }));
    try {
      const res = await fetch(`http://localhost:3040/api/posts/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (res.status === 401) {
        throw new Error(await res.text());
      }

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
    console.log(formData);
  };
  // const handleFileChange = (e: any) => {
  //   setFile(e.target.files);
  // };

  const resetForm = () => {
    formRef.current !== null && formRef.current.reset();
  };

  return (
    <div className="create_post_area">
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} ref={formRef}>
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
            id="description"
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Post Description"
            required
          />
        </div>
        <div className="post-form-btns">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}
