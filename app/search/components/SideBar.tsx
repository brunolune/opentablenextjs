import { Cuisine, Location, PRICE } from "@prisma/client";
import type { Route } from "next";
//import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback } from "react";

export default function SideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  /* const router = useRouter();
  let searchParams = useSearchParams();
  const pathname = usePathname(); */

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  /* const createQueryString = useCallback(
    (name: string, value: string) => {
      if (!searchParams) return "";
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  ); */
  console.log(searchParams);

  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>

        {locations.map((location) => (
          <Link
            //href="/"
            /* href={
              pathname  + '?' + createQueryString('city', location.name)
            } */
            href={{
              pathname: "/search",
              query: { ...searchParams, city: location.name },
            }}
            className="font-light text-reg"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>

        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            className="font-light text-reg"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex flex-col">
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: PRICE.CHEAP },
            }}
            className="text-reg font-light rounded-l p-2"
          >
            $
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: PRICE.REGULAR },
            }}
            className="text-reg font-light p-2"
          >
            $$
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: PRICE.EXPENSIVE },
            }}
            className="text-reg font-light p-2 rounded-r"
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
}
