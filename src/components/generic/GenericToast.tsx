const GenericToast = ({ message }: { message: string }) => {
  return (
    <div className="toast z-50 top-16 transition-opacity ease-in-out duration-500 opacity-100">
      <div className="alert alert-info font-light">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default GenericToast;
