import { useState } from "react";
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    flexRender,
} from "@tanstack/react-table";
import { DataTablePagination } from "./DataTablePagination";

interface DataTableProps<TData> {
    data: TData[]; // Data yang diterima oleh tabel
    columns: ColumnDef<TData>[];
    globalFilter: string;
    setGlobalFilter: (filter: string) => void;
}

export function DataTablePengaduan<TData>({ data, columns, globalFilter, setGlobalFilter }: DataTableProps<TData>) {
    const table = useReactTable({
        data: data || [],
        columns,
        state: {
            globalFilter,
        },
        initialState: {
            pagination: { pageIndex: 0, pageSize: 10 },
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="w-full p-2">
            <input
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search..."
                className="border p-2 w-full"
            />
            <table className="w-full border">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="border p-2 text-[10px]">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="group hover:bg-gray-100 transition-colors duration-200">
                            {row.getVisibleCells().map((cell: any) => (
                                <td key={cell.id} className="border p-2 text-center text-[10px] relative">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    {cell.column.id === "judul" && (
                                        <div className="absolute inset-0 justify-center items-center hidden group-hover:block">
                                            <div className="bg-gray-700 text-white text-xs p-2 rounded shadow-lg">
                                                <p>{cell.getValue()}</p>
                                            </div>
                                        </div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <DataTablePagination table={table} />
        </div>
    );
}
