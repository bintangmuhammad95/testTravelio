import apis from "../apis";

export async function addWishlist(payload) {
  return await apis({
    method: "post",
    url: "whishlist",
    data: payload,
  });
}

export async function getAllWishlist() {
  return await apis({
    method: "get",
    url: "whishlist",
  });
}

export async function deleteWishlist(id) {
  return await apis({
    method: "delete",
    url: "whishlist/" + id,
  });
}
