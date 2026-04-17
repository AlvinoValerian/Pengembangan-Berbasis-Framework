import { useSession } from 'next-auth/react';

const HalamanProfile = () => {
    const { data }:any = useSession();
    return (
        <div>
            <h1 className='text-3xl font-bold'>Halaman Profile</h1>
            <h1 className='text-3xl font-bold'>Selamat Datang {data?.user?.fullname}</h1>
        </div>
    )
}

export default HalamanProfile;