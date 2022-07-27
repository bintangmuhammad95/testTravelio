import Image from "next/image";

export default function ButtonPrimary({
  title,
  className,
  onClick,
  disabled,
  image,
  ouline,
}) {
  return (
    <>
      <button
        className={`flex items-center justify-center px-3 ${className} ${
          ouline
            ? "bg-white border border-secondary hover:bg-secondary hover:text-white ease-in-out duration-300"
            : "bg-secondary"
        }  cursor-pointer`}
        disabled={disabled}
        onClick={onClick}
      >
        {image && (
          <div className="relative w-3 h-3 laptop:w-6 laptop:h-6 mr-2 bg-transparent">
            <Image src={`${image}`} objectFit="contain" layout="fill" alt="" />
          </div>
        )}
        {title}
      </button>
    </>
  );
}
