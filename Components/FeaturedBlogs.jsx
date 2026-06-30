import { useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useMemo } from 'react';

const  FeaturedBlogs = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/featuredblogs`)
      .then((res) => res.json())
      .then((data) => setTopPosts(data))
      .catch((err) => console.error(err));
  }, []);

  //  Creating columns

  const columns = useMemo(
    () => [
      {
        header: '#',
        accessorFn: (row, index) => index + 1,
        id: 'index',
      },
      {
        header: 'Title',
        accessorKey: 'title',
      },
      {
        header: 'Author',
        accessorKey: 'name',
      },
      {
        header: 'Category',
        accessorKey: 'category',
      },
      
    ],
 
  );

  // Creating table for featured blog

  const table = useReactTable({
    data: topPosts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-7xl bg-white mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center
        bg-gradient-to-r from-[#FF3366] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent">
         Our Top 10 Featured Picks for You!
      </h1>
       <div className='overflow-x-auto rounded-2xl shadow-lg'>
      <table className="table-auto w-full border  border-gray-500 rounded-md overflow-hidden">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-50">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border px-4 py-2 text-left
                  bg-gradient-to-r from-[#FF5F7E] via-[#FF9E80] to-[#FF9E80] bg-clip-text text-transparent">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-[#FFF3F0] transition duration-200">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="  px-4 py-3 text-gray-800">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
