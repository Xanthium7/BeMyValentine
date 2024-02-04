"use client";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Home() {
  const l = [
    "HAHA FUNNYY",
    "i think YOUR STUPID ASS misclicked go again",
    "TF do u mean NO",
    "U know this isnt a choice right?..",
  ];
  return (
    <main className=" w-[100vw]">
      <div className="flex justify-between ml-2">
        <Image
          className="h1 object-cover "
          src={"/heart.gif"}
          width={200}
          height={200}
        ></Image>
        <Image
          className="h1 object-cover object-top"
          src={"/heart2.gif"}
          width={200}
          height={200}
        ></Image>
      </div>
      <div className=" flex justify-center items-center mr-2">
        <Image
          className="h1 object-cover object-top lg:max-h-[300px] max-h-[220px] w-[500px]"
          src={"/giphy.gif"}
          width={100}
          height={100}
        ></Image>
      </div>

      <div className="Buttons flex justify-center gap-10 mt-10  mx-5">
        <Link
          href=""
          className="flex justify-center items-center bg-red-400 h-16 w-auto px-3 rounded-md hover:animate-wiggle  "
          onClick={() => {
            Swal.fire({
              showConfirmButton: false,
              imageUrl: "/yay.gif",
              background: "#f3f3f3",
              imageWidth: "100%",
              title: "YAYAYYAYAYAYAYAYAYAY",
            });
          }}
        >
          <Image
            className="h1 object-cover object-top "
            src={"/yes.gif"}
            width={100}
            height={100}
          ></Image>
        </Link>
        <Link
          href=""
          className="flex justify-center items-center bg-orange-300 h-16 w-28 px-3 rounded-md hover:animate-wiggle text-[#ffffffb4]"
          onClick={() => {
            Swal.fire({
              showConfirmButton: false,
              imageUrl: "/cat.jpg",
              background: "#f3f3f3",
              imageWidth: "100%",
              title: l[Math.floor(Math.random() * 4)],
            });
          }}
        >
          NO
        </Link>

        <Link
          href=""
          className="flex justify-center items-center bg-[#9d80ebbe] h-16 w-28 px-3 rounded-md hover:animate-wiggle "
          onClick={() => {
            Swal.fire({
              showConfirmButton: false,
              imageUrl: "/Trade.png",
              background: "#5b27b7",
            });
          }}
        >
          <Image
            className="h1 object-cover object-top "
            src={"/qs.gif"}
            width={70}
            height={70}
            alt="text"
          ></Image>
        </Link>
      </div>

      <Image
        className="h1 absolute lg:h-[550px] md:h-[300rpx] h-[300px] pl-10 lg:p-0 w-auto bottom-[-50px] lg:bottom-[-100px] "
        src={"/gutts.png"}
        width={210}
        height={210}
      ></Image>
    </main>
  );
}
