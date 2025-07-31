'use client'
import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import ProductModal from './ProductModal'
import EditProductModal from './EditProductModal'

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    description: '100% cotton, premium quality white t-shirt for everyday wear.',
    price: 24.99,
    category: 'clothing',
    size: 'M',
    color: 'White',
    rating: 4.5,
    images: [
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg',
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg'
    ]
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    description: 'Slim fit jeans with stretch for maximum comfort.',
    price: 59.99,
    category: 'clothing',
    size: '32',
    color: 'Blue',
    rating: 4.2,
    images: [
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg',
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg'
    ]
  },
  {
    id: 3,
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with multiple card slots.',
    price: 39.99,
    category: 'accessories',
    color: 'Brown',
    rating: 4.7,
    images: [
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg',
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg'
    ]
  },
  {
    id: 4,
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned soles.',
    price: 89.99,
    category: 'shoes',
    size: '10',
    color: 'Black/Red',
    rating: 4.8,
    images: [
     'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg',
      'https://i.pinimg.com/736x/be/ce/c1/becec11aee909a53a8c29b8ece4cd84c.jpg'
    ]
  }
]

const ProductList = () => {
  const [products, setProducts] = useState(sampleProducts)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const openModal = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const openEditModal = (product: any) => {
    setEditingProduct(product)
    setIsEditModalOpen(true)
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false)
    setEditingProduct(null)
  }

  const handleDelete = (id: number) => {
    setDeleteConfirm(id)
  }

  const confirmDelete = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id))
    setDeleteConfirm(null)
  }

  const cancelDelete = () => {
    setDeleteConfirm(null)
  }

  const handleUpdateProduct = (updatedProduct: any) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    )
    closeEditModal()
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}

                    <img className="h-10 w-10 rounded-full object-cover" src={product.images[0]} alt={product.name} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.color} {product.size && `| ${product.size}`}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                {product.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon.Star
                      key={i}
                      size={16}
                      weight={i < Math.floor(product.rating) ? 'fill' : 'regular'}
                      className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openModal(product)}
                    className="text-black hover:text-gray-700"
                    title="View"
                  >
                    <Icon.Eye size={20} />
                  </button>
                  <button
                    onClick={() => openEditModal(product)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <Icon.Pencil size={20} />
                  </button>
                  {deleteConfirm === product.id ? (
                    <div className="flex space-x-1">
                      <button
                        onClick={() => confirmDelete(product.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Confirm Delete"
                      >
                        <Icon.Check size={20} />
                      </button>
                      <button
                        onClick={cancelDelete}
                        className="text-gray-600 hover:text-gray-800"
                        title="Cancel"
                      >
                        <Icon.X size={20} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Icon.Trash size={20} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
      
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        product={editingProduct}
        onSave={handleUpdateProduct}
      />
    </div>
  )
}

export default ProductList