import Link from "next/link";
import React from "react";
const cityList = [
  {
    country: "USA",
    city: "NewYork",
  },
  {
    country: "Spain",
    city: "Madrid",
  },
  {
    country: "England",
    city: "London",
  },
];

const Header = () => {
  return (
    <div>
      {/* <Link href="/about">
        <a>Hello !</a>
      </Link> */}
      <hr />
      <ul>
        {cityList.map((item, index) => (
          <li key={index}>
            <Link as={`/dynamicRoute/${item.city}`} href="/dynamicRoute/[city]">
              {`${item.country} ${item.city}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
