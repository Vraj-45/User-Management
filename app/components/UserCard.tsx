"use client";

import { useDispatch } from "react-redux";
import { removeUser } from "../../store/userSlice";
import { useState } from "react";
import EditModal from "./EditModal";
import LikeButton from "./LikeButton";
import { Mail, Phone, Globe, Pencil, Trash2 } from "lucide-react";

export default function UserCard({ user }: { user: any }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-2xl transition text-white flex flex-col items-center">
            
            <img
                src={`https://api.dicebear.com/9.x/personas/svg?seed=${user.username}`}
                alt={user.username}
                className="w-20 h-20 rounded-full mb-4 border-2 border-white"
            />

            
            <div className="space-y-3 text-sm w-full">
                <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Globe size={16} />
                    <span>{user.website}</span>
                </div>
            </div>

            
            <div className="flex justify-center gap-25 mt-5">
                <LikeButton user={user} />
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 rounded-full bg-blue-500 hover:bg-blue-600"
                >
                    <Pencil size={18} />
                </button>
                <button
                    onClick={() => dispatch(removeUser(user.id))}
                    className="p-2 rounded-full bg-red-500 hover:bg-red-600"
                >
                    <Trash2 size={18} />
                </button>
            </div>

            {isOpen && <EditModal user={user} onClose={() => setIsOpen(false)} />}
        </div>
    );
}
