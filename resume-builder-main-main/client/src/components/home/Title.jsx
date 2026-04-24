const Title = ({ title, description }) => {
  return (
    <div className="text-center mt-6 text-slate-100">
      <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
      <p className="max-sm:text-sm max-w-2xl mt-4 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default Title;
