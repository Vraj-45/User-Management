"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setUsers } from "../store/userSlice";
import UserCard from "./components/UserCard";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const { data, isLoading } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <main className="p-6 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}
