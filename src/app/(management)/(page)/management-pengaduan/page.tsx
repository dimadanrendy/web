"use client";
import { useState, useEffect } from "react";
import { DataTable } from "../../components/table/DataTable";
import { Pengaduan } from "@/types/index";
import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/tools/formatDateNumber";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import { getUsers } from "@/features/management/users/useGetUsers";
import PageLanding from '@/components/loading-ui/landing-page';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logout } from "@/features/management/auth/useLogOutAuth";
import { verifyToken } from "@/features/management/auth/useVerifyToken";
import { deleteUsers } from "@/features/management/users/useDeleteUser";
import { toast } from 'sonner';
import { getAllPengaduan } from "@/features/management/pengaduan/useManagementPengaduan";

const useGetPengaduan = async () => {
    // buat data dummy dari field dibawah
    const data = await getAllPengaduan();

    return data.data

}

export default function Account() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [globalFilter, setGlobalFilter] = useState < string > ("");
    const [isLoadingFetch, setIsLoading] = useState(false);
    const [errorFetch, setError] = useState < string | null > (null);

    const { data, isLoading, error } = useQuery({
        queryKey: ["pengaduan"],
        queryFn: useGetPengaduan,
    });


    // Fungsi untuk mengubah status menjadi 'Active' atau 'Inactive'
    const getStatus = (status: number) => {
        switch (status) {
            case 1:
                return "Masuk";
            case 2:
                return "Diproses";
            case 3:
                return "Ditanggapi";
            default:
                return "Tidak Diketahui";
        }
    };


    const handleDetail = async (id: string) => {
        router.push(`/management-pengaduan/detail/${id}`);
    };

    // Definisi kolom tabel
    const columns: ColumnDef<Pengaduan>[] = [
        { accessorKey: "email", header: () => "Email" },
        { accessorKey: "lingkuppengaduan", header: () => "Lingkup Pengaduan" },
        { accessorKey: "areapengaduan", header: () => "Area Pengaduan" },
        { accessorKey: "namaterlapor", header: () => "Nama Terlapor" },
        { accessorKey: "lokasikejadian", header: () => "Lokasi Kejadian" },
        {
            accessorKey: "tanggalkejadian",
            header: () => "Tanggal Kejadian",
            cell: (info) => formatDate(info.getValue() as string)
        },

        {
            accessorKey: "waktukejadian",
            header: () => "Waktu Kejadian",

            cell: (info) => {
                const waktuKejadian = info.getValue() as string;
                const [jam, menit] = waktuKejadian.split(":");
                return `${jam}:${menit}`;
            }
        },
        {
            accessorKey: "status",
            header: () => "Status",
            cell: (info) => getStatus(info.getValue() as number),
        },
        {
            accessorKey: "createdAt",
            header: () => "Tanggal Dibuat",
            cell: (info) => formatDate(info.getValue() as string),
        },
        {
            accessorKey: "updatedAt",
            header: () => "Terakhir Diubah",
            cell: (info) => formatDate(info.getValue() as string),
        },
        {
            id: "actions",
            header: () => "Actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            aria-haspopup="true"
                            size="icon"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Button onClick={() => handleDetail(row.original.id_pengaduan)}>Lihat</Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];



    useEffect(() => {
        const checkToken = async () => {
            const isValid = await verifyToken();
            if (isValid === false || isValid === null || isValid === undefined) {
                const success = await logout();
                localStorage.removeItem('auth-storage');
                router.push('/login');
            }

        };
        checkToken();
    }, [router]);

    if (isLoading) return <PageLanding />;
    if (error) return <div>{error.message}</div>;

    return (
        <div className="p-4">
            <div className="flex flex-col gap-1 ">
                <h1 className="text-lg font-semibold md:text-2xl">Pengaduan Masyarakat</h1>
                <p className="text-sm text-muted-foreground">
                    Management Pengaduan Masyarakat
                </p>
            </div>

            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
            >
                <DataTable
                    data={data || []}
                    columns={columns}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
            </div>
        </div>
    );
}
