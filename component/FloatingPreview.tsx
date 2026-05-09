"use client";

import Image from "next/image";
import { useState } from "react";

export default function FloatingPreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-20 right-8 z-50">

            {/* Slide Panel */}
            <div
                className={`absolute bottom-16 right-0 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${open
                        ? "max-h-[500px] w-[320px] opacity-100"
                        : "max-h-0 w-[320px] opacity-0"
                    }`}
            >

                <div className="p-4">

                    <h2 className="mb-4 text-lg font-bold">
                        Customer Preview
                    </h2>

                    <div className="space-y-4">

                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src="/customer1.jpg"
                                alt="customer"
                                width={300}
                                height={180}
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src="/customer2.jpg"
                                alt="customer"
                                width={300}
                                height={180}
                                className="w-full object-cover"
                            />
                        </div>

                    </div>

                </div>

            </div>

            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition hover:scale-110"
            >
                <span
                    className={`text-xl transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                >
                    ▲
                </span>
            </button>

        </div>
    );
}