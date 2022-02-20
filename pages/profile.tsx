import React from "react";
import Profile from "../components/profile/profile";
import useGetMe from "../hooks/useGetMe";
import PageLoader from "../components/ui/pageLoader";

type ProfilePageProps = {}

const ProfilePage : React.FC<ProfilePageProps> = () => {
    const {isLoading,data} = useGetMe()

    if (isLoading){
        return <PageLoader />
    }

    if (!data) {
        return <div>Something went wrong</div>
    }

    return (
        <>
        <Profile user={data} />
        </>
    )
}

export default ProfilePage