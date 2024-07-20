import React, { useState, useEffect } from "react";
import Image from "next/image";

type Menu = {
  id: number;
  name: string;
  serving: number;
  imageUrl: string;
  time: number;
};

const menus: Menu[] = [
  {
    id: 1,
    name: "Menu 1",
    time: 10,
    serving: 1,
    imageUrl: "/assets/menu1.jpg",
  },
  {
    id: 2,
    name: "Menu 2",
    time: 20,
    serving: 2,
    imageUrl: "/assets/menu2.jpg",
  },
  {
    id: 3,
    name: "Menu 3",
    time: 30,
    serving: 3,
    imageUrl: "/assets/menu3.jpg",
  },
  {
    id: 4,
    name: "Menu 4",
    time: 40,
    serving: 4,
    imageUrl: "/assets/menu4.jpg",
  },
  {
    id: 5,
    name: "Menu 5",
    time: 50,
    serving: 5,
    imageUrl: "/assets/menu5.jpg",
  },
  {
    id: 6,
    name: "Menu 6",
    time: 60,
    serving: 6,
    imageUrl: "/assets/menu6.jpg",
  },
  {
    id: 7,
    name: "Menu 7",
    time: 15,
    serving: 7,
    imageUrl: "/assets/menu7.jpg",
  },
  {
    id: 8,
    name: "Menu 8",
    time: 25,
    serving: 8,
    imageUrl: "/assets/menu8.jpg",
  },
  {
    id: 9,
    name: "Menu 9",
    time: 20,
    serving: 9,
    imageUrl: "/assets/menu9.jpg",
  },
];

const RecommendedMenu: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animClass, setAnimClass] = useState("fade-in");

  useEffect(() => {
    setAnimClass("fade-in active");
  }, [currentIndex]);

  const prevMenu = () => {
    setAnimClass("fade-in");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? menus.length - 3 : prevIndex - 3
      );
      setAnimClass("slide-right active");
    }, 500);
  };

  const nextMenu = () => {
    setAnimClass("fade-in");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === menus.length - 3 ? 0 : prevIndex + 3
      );
      setAnimClass("slide-left active");
    }, 500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-300 p-6">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-rainbow-gradient animate-raintext shadow-lg">
        RECOMMENDED
      </h1>
      <div className="relative w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l transition duration-300"
          onClick={prevMenu}
        >
          &#9664;
        </button>
        <div className={`flex space-x-4 ${animClass}`}>
          {menus.slice(currentIndex, currentIndex + 3).map((menu) => (
            <div key={menu.id} className="flex flex-col items-center">
              <div className="relative w-80 h-80 ml-7">
                <Image
                  src={menu.imageUrl}
                  alt={menu.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h2 className="text-xl font-bold">{menu.name}</h2>
                  <p className="text-lg font-semibold">
                    {menu.time} mins | {menu.serving} servings
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r transition duration-300"
          onClick={nextMenu}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default RecommendedMenu;
