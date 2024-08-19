import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
    try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
            throw new Error(data.error || "Something went wrong");
        }
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

const useUser = () => {
    return useQuery({
        queryKey: ['authUser'],
        queryFn: fetchUser,
      });
};

export default useUser;