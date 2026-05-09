"use client"

import Coverflow from "@/component/Coverflow";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-white">

      <Coverflow></Coverflow>

    </div>
  );
}
