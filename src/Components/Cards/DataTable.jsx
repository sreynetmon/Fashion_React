import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useSearchProductsQuery } from "../redux/features/car/car";
import { useState } from "react";

export default function DataTable({ data }) {
  const [search, setSearch] = useState("");
  const { data: searchResults, isLoading: searchLoading } =
    useSearchProductsQuery(search, {
      skip: !search,
    });

  return (
    <div className="container mx-auto overflow-x-auto p-10">
      <input
        className="p-3 border-1  "
        type="text"
        placeholder="Search car..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table striped>
        <TableHead>
          <TableRow>
            <TableHeadCell>Photo</TableHeadCell>
            <TableHeadCell>Make</TableHeadCell>
            <TableHeadCell>Model</TableHeadCell>
            <TableHeadCell>Color</TableHeadCell>
            <TableHeadCell>Year</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {(search ? searchResults : data)?.map((car) => (
            <TableRow
              key={car.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>
                <img
                  src={car.image}
                  alt={car.make}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {car.make}
              </TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.color}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>${car.price?.toLocaleString()}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Edit
                  </button>
                  <button className="font-medium text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
