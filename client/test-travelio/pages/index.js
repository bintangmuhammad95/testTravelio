import axios from "axios";
import { useEffect, useState } from "react";
import { CardBook } from "../components/CardBook";
import { Navbar } from "../components/Navbar";
import { addWishlist, deleteWishlist, getAllWishlist } from "../services";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("batman");
  const [listWhishlist, setListWhishlist] = useState([]);

  async function getBook(book) {
    const { data } = await axios({
      method: "get",
      url: `https://www.googleapis.com/books/v1/volumes?q=${book}`,
    });

    const getWhishlist = await getAllWishlist();

    if (getWhishlist.data.length > 0) {
      setListWhishlist(getWhishlist.data);
    } else {
      setListWhishlist([]);
    }

    setBooks(data.items);
  }

  useEffect(() => {
    getBook(search);
  }, [search]);

  const checkWhishlist = (data) => {
    const check = listWhishlist.find((v) => v.bookId === data);
    if (check !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const onHandleClick = async (item) => {
    if (checkWhishlist(item?.id) === true) {
      await deleteWishlist(item?.id);
      location.reload();
    } else {
      const data = {
        bookId: item?.id,
        title: item?.volumeInfo?.title,
        img: item?.volumeInfo?.imageLinks?.thumbnail,
        author: item?.volumeInfo?.authors,
        rating: item?.volumeInfo?.averageRating,
      };
      await addWishlist(data);
      location.reload();
    }
  };

  return (
    <>
      <Navbar
        searchBox={true}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="w-full min-h-[20rem]  grid grid-cols-2 tablet:grid-cols-3 gap-2 bigMonitor:gap-4 small:px-3 laptop:px-40 small:py-3">
        {books?.map((item) => (
          <CardBook
            key={item?.id}
            image={item?.volumeInfo?.imageLinks?.thumbnail}
            title={item?.volumeInfo?.title}
            author={item?.volumeInfo?.authors?.join(", ")}
            rating={item?.volumeInfo?.averageRating || 0}
            onClick={() => onHandleClick(item)}
            found={checkWhishlist(item?.id)}
          />
        ))}
      </div>
    </>
  );
}
