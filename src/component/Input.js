const Input = ({ inputBind }) => {
  return (
    <>
      <label>To Do</label>
      <input
        type="text"
        required
        {...inputBind}
        placeholder="할일을 입력해주세요."
      />
    </>
  );
};
export default Input;
