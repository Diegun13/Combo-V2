export default function CharacterIcon({ name, img }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center  bg-UFD-Char-bg   hover:scale-105 border border-neutral-500" >
        <h2 className="absolute text-3xl text-white font-poppins drop-shadow-xl font-extrabold">{name}</h2>
        <img className=" selectChar" src={img} />
      </div>
    </>
  );
}
