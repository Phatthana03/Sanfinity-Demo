"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
    "/1.png", "/2.png", "/3.png", "/4.png",
    "/5.png", "/6.png", "/7.png", "/8.png",
];

export default function GlobeCarousel() {
    const [angle, setAngle] = useState(0);
    const [isSpinning, setIsSpinning] = useState(true);
    const spinningRef = useRef(true);

    const getFrontIndex = (angle: number) => {
        const normalized = ((angle % 360) + 360) % 360;
        return Math.round(normalized / step) % slides.length;
    };

    const getOpacity = (i: number, angle: number) => {
        const frontIndex = getFrontIndex(angle);

        if (i === frontIndex) return 1;        // 👈 หน้าแท้
        if (Math.abs(i - frontIndex) === 1) return 0.6; // ข้าง
        return 0.35;                          // หลัง
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let pauseTimeout: NodeJS.Timeout;

        let isPaused = false;

        const stepAngle = 360 / slides.length;

        const start = () => {
            interval = setInterval(() => {
                setAngle((prev) => {
                    const next = prev + 1;

                    // 🔥 ตรวจว่าตรง “ตำแหน่งรูป” ไหม
                    const normalized = next % 360;

                    const hitIndex = Math.round(normalized / stepAngle);

                    const hitAngle = hitIndex * stepAngle;

                    // 🎯 ถ้าเข้าใกล้ตำแหน่งรูป
                    if (!isPaused && Math.abs(normalized - hitAngle) < 1) {
                        isPaused = true;

                        clearInterval(interval);

                        // 🔥 SNAP ให้ตรงตำแหน่งก่อนหยุด
                        setAngle(hitAngle);

                        pauseTimeout = setTimeout(() => {
                            isPaused = false;
                            start(); // 🔁 หมุนต่อ
                        }, 1500);
                    }

                    return next;
                });
            }, 30);
        };

        start();

        return () => {
            clearInterval(interval);
            clearTimeout(pauseTimeout);
        };
    }, []);

    const step = 360 / slides.length;

    // 🔥 เพิ่ม radius ให้ “ลูกโลกใหญ่เต็มขึ้น”
    const radius = 950;

    return (

        //<div className="flex min-h-screen items-center justify-center bg-white overflow-hidden">
        <div className="flex min-h-screen items-start justify-center bg-black overflow-hidden pt-26">
            {/* 🔥 ขยายพื้นที่ + ให้พอดีกับลูกโลก */}
            <div
                className="relative w-[1800px] h-[550px]"
                style={{ perspective: "7000px", transformStyle: "preserve-3d" }}
            >

                <div
                    className="absolute left-1/2 top-1/2"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `translate(-50%, -50%) rotateY(${angle}deg)`,
                    }}
                >

                    {slides.map((img, i) => (
                        <div
                            key={i}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                transform: `translate(-50%, -50%)
                                            rotateY(${i * step}deg)
                                            translateZ(${radius}px)`}}
                                            >

                            <div className="w-[650px] h-[650px]">
                                <Image
                                    src={img}
                                    alt="img"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}