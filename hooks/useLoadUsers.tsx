import { useEffect, useState } from "react";
import { UserData } from "types";
import { getDataFromApi } from "../utils/getDataFromApi";
import { getItemFromLocalStorage } from "../utils/getItemFromLocalStorage";
import constants from "../config/constants";

const useLoadUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  // Run effect on page load only
  useEffect(() => {
    const users = getItemFromLocalStorage("users");
    // dont call users api when its already stored in localStorage
    if (users) {
      setUsers(users);
      return;
    }
    async function fetchUsers() {
      const users = await getDataFromApi<UserData>(constants.USERS_API);
      setUsers(users);
      localStorage.setItem("users", JSON.stringify(users));
    }
    fetchUsers();
    // On Unmounting locastorage data can be removed
  }, []);

  // change index to change user
  const selectedUser = users && (users[0] as UserData);

  return selectedUser;
};

export default useLoadUsers;
