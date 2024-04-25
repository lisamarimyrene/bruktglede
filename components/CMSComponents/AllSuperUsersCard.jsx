"use client"
import { FiXCircle } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { deleteStoreUser } from "@/lib/supabase/actionsAuth";
import { useRouter } from 'next/navigation';

export const AllSuperUsersCard = ({ superUserData }) => {
    const delIconStyle = { marginRight: "10px", color: "#E89A9A" }
    const [allSuperUsersData, setAllSuperUsersData] = useState([]);
    const router = useRouter()

    useEffect(() => {
        setAllSuperUsersData(superUserData || []);
    }, [allSuperUsersData]);


    const handleDeleteStoreUser = async (storeId) => {
        try {
            await deleteStoreUser(storeId);
            router.refresh();
        } catch (error) {
            console.error("Error deleting store user:", error);
        }
    };
    return (
        <div className="w-full text-wrap pl-3 bg-[#F8F8F7]">
            {allSuperUsersData.length === 0 ? (
                <p>Ingen superbrukere i databasen</p>
            ) : (
                allSuperUsersData.map((users, index) => (
                    <div key={index} className="flex items-center py-2">
                        <button onClick={() => handleDeleteStoreUser(users.accountData.store_id)}><FiXCircle style={delIconStyle} /></button>
                        <p className="w-[30%] font-medium text-sm">{users.storeData}</p>
                        <p className="w-[30%] text-sm">{users.accountData?.username}</p>
                        <p className="w-[40%] text-sm">{users.accountData?.email}</p>
                    </div>
                ))
            )}
        </div>
    )
}