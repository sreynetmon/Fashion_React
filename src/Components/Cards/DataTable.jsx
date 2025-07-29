
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function DataTable({image, make, color, year, price}) {
    return (
        <div className="container mx-auto overflow-x-auto p-10">
            <Table striped>
                {/* header */}
                <TableHead>
                    <TableRow >
                        <TableHeadCell>Photo</TableHeadCell>
                        <TableHeadCell>Make</TableHeadCell>
                        <TableHeadCell>Color</TableHeadCell>
                        <TableHeadCell>Year</TableHeadCell>
                        <TableHeadCell>Price</TableHeadCell>
                        <TableHeadCell>
                            <span className="sr-only">Edit</span>
                        </TableHeadCell>
                    </TableRow>
                </TableHead>
                {/* body data */}
                <TableBody >
                    <TableRow>
                        {/* image */}
                         <TableCell>
                            <img src={image} alt={make} width={35} height={35}/>
                         </TableCell>
                         {/* make */}
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {make}
                        </TableCell>
                        {/* color */}
                        <TableCell>{color}</TableCell>
                        {/* year */}
                        <TableCell>{year}</TableCell>
                        {/* price */}
                        <TableCell>${price}</TableCell>
                        {/* action */}
                        <TableCell>
                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Edit
                            </a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
