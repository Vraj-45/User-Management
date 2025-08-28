"use client";

import { useDispatch } from "react-redux";
import { toggleLike } from "../../store/userSlice";

export default function LikeButton({ user }: { user: any }) {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(toggleLike(user.id))}
            className={`px-3 py-1 rounded ${user.liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
                }`}
        >
            {user.liked ? "♥ " : "♡ "}
        </button>
    );
}
