'use client'

// Quickview.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ProductType } from '@/type/ProductType';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalQuickviewContext } from '@/context/ModalQuickviewContext';
import { useCart } from '@/context/CartContext';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'
import Rate from '../Other/Rate';
import ModalSizeguide from './ModalSizeguide';

const ModalQuickview = () => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [openPopupImg, setOpenPopupImg] = useState(false)
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const { selectedProduct, closeQuickview } = useModalQuickviewContext()
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare();
    const { openModalCompare } = useModalCompareContext()
    const percentSale = selectedProduct && Math.floor(100 - ((selectedProduct.price / selectedProduct.originPrice) * 100))

    const handleOpenSizeGuide = () => {
        setOpenSizeGuide(true);
    };

    const handleCloseSizeGuide = () => {
        setOpenSizeGuide(false);
    };

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleIncreaseQuantity = () => {
        if (selectedProduct) {
            selectedProduct.quantityPurchase += 1
            updateCart(selectedProduct.id, selectedProduct.quantityPurchase + 1, activeSize, activeColor);
        }
    };

    const handleDecreaseQuantity = () => {
        if (selectedProduct && selectedProduct.quantityPurchase > 1) {
            selectedProduct.quantityPurchase -= 1
            updateCart(selectedProduct.id, selectedProduct.quantityPurchase - 1, activeSize, activeColor);
        }
    };

    const handleAddToCart = () => {
        if (selectedProduct) {
            if (!cartState.cartArray.find(item => item.id === selectedProduct.id)) {
                addToCart({ ...selectedProduct });
                updateCart(selectedProduct.id, selectedProduct.quantityPurchase, activeSize, activeColor)
            } else {
                updateCart(selectedProduct.id, selectedProduct.quantityPurchase, activeSize, activeColor)
            }
            openModalCart()
            closeQuickview()
        }
    };

    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (selectedProduct) {
            if (wishlistState.wishlistArray.some(item => item.id === selectedProduct.id)) {
                removeFromWishlist(selectedProduct.id);
            } else {
                // else, add to wishlist and set state to true
                addToWishlist(selectedProduct);
            }
        }
        openModalWishlist();
    };

    const handleAddToCompare = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (selectedProduct) {
            if (compareState.compareArray.length < 3) {
                if (compareState.compareArray.some(item => item.id === selectedProduct.id)) {
                    removeFromCompare(selectedProduct.id);
                } else {
                    // else, add to wishlist and set state to true
                    addToCompare(selectedProduct);
                }
            } else {
                alert('Compare up to 3 products')
            }
        }
        openModalCompare();
    };

    return (
        <>
            <div className={`modal-quickview-block`} onClick={closeQuickview}>
                <div
                    className={`modal-quickview-main py-6 ${selectedProduct !== null ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="flex h-full max-md:flex-col-reverse gap-y-6">
                        <div className="left lg:w-[388px] md:w-[300px] flex-shrink-0 px-6">
                            <div className="list-img max-md:flex items-center gap-4">
                                {selectedProduct?.images.map((item, index) => (
                                    <div className="bg-img w-full aspect-[3/4] max-md:w-[150px] max-md:flex-shrink-0 rounded-[20px] overflow-hidden md:mt-6" key={index}>
                                        <Image
                                            src={item}
                                            width={1500}
                                            height={2000}
                                            alt={item}
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right w-full px-4">
                            <div className="heading pb-6 px-4 flex items-center justify-between relative">
                                <div className="heading5">Quick View</div>
                                <div
                                    className="close-btn absolute right-0 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                                    onClick={closeQuickview}
                                >
                                    <Icon.X size={14} />
                                </div>
                            </div>
                            <div className="product-infor px-4">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="heading4 mt-1">{selectedProduct?.name}</div>
                                    </div>
                                 
                                </div>
                                <div className="flex items-center mt-3">
                              
                                    <div className='desc text-secondary mt-3'>{selectedProduct?.description}</div>
                                </div>
                                <div className="list-action mt-6">
                                  
                                    <div className="choose-size mt-5">
                                     
                                    </div>
                                   
                                    <div className="button-block mt-5">
                                        <div className="button-main w-full text-center">Buy It Now</div>
                                    </div>
                                    <div className="flex items-center flex-wrap lg:gap-20 gap-8 gap-y-4 mt-5">
                                     
                                    </div>
                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ModalQuickview;
