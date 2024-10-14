const ContainerW = ({ children, style, color }) => {
  return (
    <div
      className={`h-full w-auto flex flex-col justify-between p-3 ${
        color || "bg-white"
      } rounded-md shadow ${style}`}
    >
      {children}
    </div>
  );
};

export { ContainerW };
