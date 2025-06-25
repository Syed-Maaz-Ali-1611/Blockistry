'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import ProductTabs from '@/components/Dashboard/ProductTabs'

const Dashboard = () => {
    const router = useRouter()
    

    useEffect(() => {
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

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });
            router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Welcome to your dashboard" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Dashboard' subHeading='Your Account' />
            </div>
            <div className="dashboard-block md:py-20 py-10">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="heading4">Welcome to your dashboard</div>
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                            title="Logout"
                        >
                            <Icon.SignOut size={24} />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                    <div className="mt-4">
                        <p>Here you can manage your products, orders, and preferences.</p>
                    </div>
                    
                    {/* Add the ProductTabs component */}
                    <ProductTabs />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard