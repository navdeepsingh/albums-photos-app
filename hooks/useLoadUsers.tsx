import { useEffect } from "react";
import { UserData } from "types";
import { getDataFromApi } from "../utils/getDataFromApi";
import { getItemFromLocalStorage } from "../utils/getItemFromLocalStorage";
import constants from "../config/constants";

const useLoadUsers = () => {
  // Run effect on page load only
  useEffect(() => {
    if (getItemFromLocalStorage("users")) {
      return;
    }
    async function fetchUsers() {
      const users = await getDataFromApi<UserData>(constants.USERS_API);
      localStorage.setItem("users", JSON.stringify(users));
    }
    fetchUsers();
    // On Unmounting locastorage data can be removed
  }, []);

  const users = getItemFromLocalStorage("users");
  // change index to change user
  const selectedUser = users && (users[0] as UserData);

  return selectedUser;
};

export default useLoadUsers;
