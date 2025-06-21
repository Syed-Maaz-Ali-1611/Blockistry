'use client'
import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"

const ProductModal = ({ isOpen, onClose, product }: any) => {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{product.name}</h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Icon.X size={24} />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                      {product.images.map((img: string, index: number) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${product.name} ${index + 1}`}
                          className="h-16 w-16 object-cover rounded border"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Description</h4>
                      <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium">Price</h4>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Rating</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon.Star
                              key={i}
                              size={16}
                              weight={i < Math.floor(product.rating) ? 'fill' : 'regular'}
                              className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                          <span className="ml-1 text-gray-600">({product.rating})</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {product.category && (
                        <div>
                          <h4 className="font-medium">Category</h4>
                          <p className="text-gray-600 capitalize">{product.category}</p>
                        </div>
                      )}
                      {product.color && (
                        <div>
                          <h4 className="font-medium">Color</h4>
                          <p className="text-gray-600">{product.color}</p>
                        </div>
                      )}
                      {product.size && (
                        <div>
                          <h4 className="font-medium">Size</h4>
                          <p className="text-gray-600">{product.size}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal