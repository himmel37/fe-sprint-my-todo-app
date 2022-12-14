import TodoList from "./todoComponent/TodoList";
import Loading from "./component/Loading";

const Home = ({ todos, isPending }) => {
  return (
    <div className="home">
      {isPending && <Loading />}
      {todos && <TodoList todos={todos} />}
    </div>
  );
};

export default Home;
