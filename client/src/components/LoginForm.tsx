import { useState } from "react";

export default function LoginForm(props: {
  formFields: Array<any>;
  showLogin: boolean;
  onClick: (formData: any) => void;
}) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onClick(formData);
  };

  return (
    <div>
      <form className="form" action="#" onSubmit={handleSubmit}>
        {props.formFields.map((field, idx) => (
          <input
            key={idx}
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            value={formData[field.name] ?? ""}
            onChange={handleChange}
          />
        ))}
        <button type="submit">{props.showLogin ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}
