const SectionHeading = ({ subtitle, title, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center mt-10 font-Inter space-y-5 `}
    >
      <p className={`text-color3 text-xl leading-6`}>{subtitle}</p>
      <h1
        className={`text-40 leading-48 text-color2 border border-x-0 border-y-4 border-color7 px-16 py-5 ${
          className || ""
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
