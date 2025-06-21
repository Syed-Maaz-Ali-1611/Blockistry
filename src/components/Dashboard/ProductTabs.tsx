'use client'
import React, { useState } from 'react'
import AddProductForm from './AddProductForm'
import ProductList from './ProductList'
import { Tab } from '@headlessui/react'

const ProductTabs = () => {
  return (
    <div className="w-full mt-8">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
          {['Add Product', 'List of Products'].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ${
                  selected
                    ? 'bg-black text-white shadow'
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-700'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <AddProductForm />
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ProductList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ProductTabs