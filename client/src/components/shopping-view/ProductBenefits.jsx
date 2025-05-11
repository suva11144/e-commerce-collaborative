import React from 'react';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';

const ProductBenefits = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
          <Truck className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="mt-3 text-sm font-medium text-gray-900">Free shipping over $50</h3>
        <p className="mt-1 text-sm text-gray-500">Delivered to your doorstep</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
          <RotateCcw className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="mt-3 text-sm font-medium text-gray-900">30-day returns</h3>
        <p className="mt-1 text-sm text-gray-500">No questions asked</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
          <ShieldCheck className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="mt-3 text-sm font-medium text-gray-900">Secure checkout</h3>
        <p className="mt-1 text-sm text-gray-500">Encrypted payment processing</p>
      </div>
    </div>
  );
};

export default ProductBenefits;