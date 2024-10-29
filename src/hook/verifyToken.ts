// // src/hooks/useSimpleEffect.ts
// import { useEffect } from "react";
// import { useAuthStore } from "@/store/useAuthStore";
// import { useGetToken } from "@/features/management/auth/useGetToken";

// const verifyToken = () => {
//   const { accessToken, user, logout, newRefreshToken, isLoading } =
//     useAuthStore();

//   // Get user ID and token
//   const id = user?.id || "";
//   const token = accessToken || "";

//   useEffect(() => {
//     const verifyAndRefreshToken = async () => {
//       try {
//         const newAccessToken = await useGetToken(token, id);
//         console.log("newAccessToken", newAccessToken);
//         if (!newAccessToken) {
//           newRefreshToken();
//         }
//       } catch (error) {
//         logout(); // Call logout if there's an error
//         localStorage.removeItem("auth-storage");
//       }
//     };

//     verifyAndRefreshToken();
//   }, [token, id, logout, newRefreshToken, isLoading]); // Include only necessary dependencies
// };

// export default verifyToken;
