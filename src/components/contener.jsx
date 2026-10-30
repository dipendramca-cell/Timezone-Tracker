function Contener({ children }) {
  return (
    <div className=" flex items-center justify-center h-screen ">
      <div className=" shadow p-10 rounded-2xl bg-white">{children} </div>
    </div>
  );
}
export default Contener;
