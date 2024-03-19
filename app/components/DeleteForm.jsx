const { deleteTask } = require("@/utils/actions");

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error uppercase">Delete</button>
    </form>
  );
};
export default DeleteForm;
