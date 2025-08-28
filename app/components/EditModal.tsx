"use client";

import { useDispatch } from "react-redux";
import { editUser } from "../../store/userSlice";
import { useState } from "react";

export default function EditModal({ user, onClose }: { user: any; onClose: () => void }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState(user);

    const handleSave = () => {
        dispatch(editUser(form));
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-gray-800 p-6 rounded-xl w-96 text-white shadow-2xl">
                <h2 className="text-lg font-bold mb-4">Edit User</h2>

                <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Name"
                />

                <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Email"
                />

                <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Phone"
                />

                <input
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Website"
                />

                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onClose}
                        className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
