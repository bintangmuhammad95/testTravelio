import { useRouter } from "next/router";

export const Navbar = ({ value, onChange, searchBox }) => {
  const router = useRouter();
  const onClickListBooks = () => {
    router.push("/");
  };
  const onClickWhishlist = () => {
    router.push("/whishlist");
  };

  return (
    <div>
      <nav className="w-full tablet:h-20 tablet:px-5 laptop:px-[120px] laptop:py-[50px] laptop:h-32 h-16 px-2 py-5  flex items-center justify-between z-30">
        <div className="flex space-x-2 tablet:space-x-4">
          <div
            onClick={onClickListBooks}
            className="w-16 tablet:w-24 laptop:w-44 laptop:h-12 h-7 tablet:h-9 border border-secondary flex justify-center items-center rounded-2xl cursor-pointer"
          >
            <div className="text-secondary text-xs tablet:text-sm laptop:text-base font-semibold">
              List Books
            </div>
          </div>
          <div
            onClick={onClickWhishlist}
            className="w-20 tablet:w-28 h-7 tablet:h-9 laptop:w-48 laptop:h-12 bg-secondary flex justify-center items-center rounded-2xl cursor-pointer"
          >
            <div className="text-white text-xs tablet:text-sm laptop:text-base font-semibold">
              Whishlist
            </div>
          </div>
          {searchBox && (
            <div>
              <input
                placeholder="Search Book"
                type="text"
                className="w-full h-full text-xs tablet:text-sm focus:outline-none border rounded-xl py-1 pl-6  tablet:pl-9 pr-2 tablet:py-2 tablet:pr-10 laptop:text-lg"
                value={value}
                onChange={onChange}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
