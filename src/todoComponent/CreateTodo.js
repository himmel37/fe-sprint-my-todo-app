import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import useInput from "../util/useInput";
import Input from "../component/Input";

const CreateTodo = () => {
  const [text, textBind] = useInput("");
  const navigate = useNavigate();
  const [checked] = useInput("false");

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/`);
    console.log(e.type);
    const data = { text, checked };

    fetch("http://localhost:3001/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="create">
      <h2>Add a New To Do</h2>
      <form onSubmit={HandleSubmit}>
        <Input inputBind={textBind} checked={checked}></Input>
        <button>등록</button>
      </form>
      <Footer />
    </div>
  );
};

export default CreateTodo;
