import { useRef } from "react";

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }

    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary">submit</button>
      </form>
    </>
  );
}
