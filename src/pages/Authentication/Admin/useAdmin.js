import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    const email = user?.email;
    useEffect(() => {
        if (email) {
            fetch(`https://fast-reef-28359.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    // console.log("from use admin", data)
                    setAdmin(data)
                    setAdminLoading(false)
                })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;