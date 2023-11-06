// eslint-disable-next-line react/prop-types
const Gif = ({ infoVisible }) => {
  if (infoVisible) {
    console.log(infoVisible);
  }
  return (
    <div className="relative w-full h-full -z-20">
      <video
        className="h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
        src="/landing-page.MOV"
        alt="table full of ceramic table ware"
      />
      {infoVisible && (
        <img
          className="absolute top-[15%] right-[10%] w-[40vh] object-cover z-50 blend-multiply"
          src="/public/annacalabrese.jpeg"
          alt="Portait of artist Calabrese"
        />
      )}
    </div>
  );
};

export default Gif;
