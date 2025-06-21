// app/dashboard/page.tsx
'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'

const Dashboard = () => {
    const router = useRouter()

    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth/verify', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!response.ok) {
                    router.push('/login');
                }
            } catch (error) {
                router.push('/login');
            }
        };

        checkAuth();
    }, [router]);

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Welcome to your dashboard" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Dashboard' subHeading='Your Account' />
            </div>
            <div className="dashboard-block md:py-20 py-10">
                <div className="container">
                    <div className="heading4">Welcome to your dashboard</div>
                    <div className="mt-4">
                        <p>Here you can manage your account, orders, and preferences.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard