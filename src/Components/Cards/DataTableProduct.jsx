import DataTable from 'react-data-table-component';

import { useGetProductsQuery } from "../redux/api";


const columns = [
    {
        name: 'Image',
        selector: row => (
            <img src={row.image} alt={row.make} width={45} height={45} />
        ),
    },

    {
        name: 'make',
        selector: row => row.make,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },

    {
        name: 'Color',
        selector: row => row.color
    },
    {
        name: 'Price',
        selector: row => row.price
    }
];

export default function DataTableProduct() {

    const { data = [] } = useGetProductsQuery({
        page: 1,
        limit: 5
    })
    
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
