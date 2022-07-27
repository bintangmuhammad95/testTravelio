import axios from "axios";
import { useEffect, useState } from "react";
import { CardBook } from "../../components/CardBook";
import { Navbar } from "../../components/Navbar";
import { deleteWishlist, getAllWishlist } from "../../services";

const Whishlist = () => {
  const [listWhishlist, setListWhishlist] = useState([]);
  async function getBook() {
    const { data } = await getAllWishlist();

    setListWhishlist(data);
  }

  useEffect(() => {
    getBook();
  }, []);

  const onHandleClick = async (data) => {
    await deleteWishlist(data);
    location.reload();
  };
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[20rem]  grid grid-cols-2 tablet:grid-cols-3 gap-2 bigMonitor:gap-4 small:px-3 laptop:px-40 small:py-3">
        {!listWhishlist.length ? (
          <div>Whishlist is Empty</div>
        ) : (
          listWhishlist.map((item) => (
            <CardBook
              key={item?.bookId}
              image={item?.img}
              title={item?.title}
              author={item?.authors?.join(", ")}
              rating={item?.rating || 0}
              onClick={() => onHandleClick(item?.bookId)}
              found={true}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Whishlist;
