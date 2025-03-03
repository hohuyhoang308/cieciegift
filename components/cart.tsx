'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Trash } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/lib/context/cart-context"

export default function Cart() {
  const { state, updateQuantity, removeFromCart } = useCart()

  const formatPrice = (price: string) => {
    return parseInt(price.replace(/\D/g, '')).toLocaleString('vi-VN') + 'đ'
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative p-0 hover:bg-transparent">
          <ShoppingCart className="h-6 w-6 text-white hover:text-red-400" />
          {state.items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 text-xs text-white flex items-center justify-center">
              {state.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#4a1414] text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Giỏ hàng</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {state.items.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-red-400">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="group w-8 h-8 bg-red-950 border-red-400 hover:bg-red-900 hover:border-red-900"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4 text-red-400" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="group w-8 h-8 bg-red-950 border-red-400 hover:bg-red-900 hover:border-red-900"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4 text-red-400" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="w-8 h-8 ml-2 bg-red-600 hover:bg-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-red-950">
                <div className="flex justify-between text-lg font-medium">
                  <span>Tổng tiền:</span>
                  <span className="text-red-400">{formatPrice(state.total.toString())}</span>
                </div>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                  Thanh toán
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
} 