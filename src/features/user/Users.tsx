import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, UserState } from "./userSlice";

export const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const users: UserState = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <ul>
        {users.isLoading ? (
          <li>Loading...</li>
        ) : (
          users.items.map((user) => <li key={user.id}>{user.name}</li>)
        )}
      </ul>
    </div>
  );
};
