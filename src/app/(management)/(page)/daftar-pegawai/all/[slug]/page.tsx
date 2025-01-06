"use client";
import { useState, useEffect } from "react";
import { DataTable } from "@/app/(management)/components/table/DataTable";
import { Pegawai } from "@/types/index";
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
import PageLanding from '@/components/loading-ui/landing-page';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logout } from "@/features/management/auth/useLogOutAuth";
import { verifyToken } from "@/features/management/auth/useVerifyToken";
import { toast } from 'sonner';
import { deletePegawai, getPegawai } from "@/features/management/pegawai/usePegawaiService";


export default function DaftarPegawai({ params }: { params: { slug: String } }) {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [globalFilter, setGlobalFilter] = useState < string > ("");
    const [isLoadingFetch, setIsLoading] = useState(false);
    const [errorFetch, setError] = useState < string | null > (null);

    const [title, setTitle] = useState < string > ("");

    const { data, isLoading, error } = useQuery({
        queryKey: ["pegawai", params.slug],
        queryFn: async () => {
            return await getPegawai(params.slug); // Panggil dan tunggu hasil dari useGetPegawai
        },
    });

    // Fungsi untuk mengubah status menjadi 'Active' atau 'Inactive'
    const getStatus = (status: boolean) => {
        return status ? "Published" : "Unpublished";
    };

    // fungsi delete
    const handleDelete = async (id: string) => {
        //konfirmasi dengan modal
        const confirm = window.confirm("Are you sure you want to delete this user?");
        if (confirm) {
            try {
                const response = await deletePegawai(id);
                if (response.status === true) {
                    setIsLoading(false);
                    toast.success("User deleted successfully", {
                        position: "top-right",
                        description: response.message
                    })
                    queryClient.invalidateQueries({ queryKey: ["pegawai"] });
                } else {
                    toast.error("Error deleting user", {
                        position: "top-right",
                        description: response.message
                    });
                    setIsLoading(false);
                    setError(response); // Set error sebagai array
                }
            } catch (err: any) {
                setIsLoading(false);
                setError(err); // Pesan error umum
            }
        }
    };

    const handleEdit = async (id: string) => {
        router.push(`/daftar-pegawai/edit/phl-pendaftaran/${id}`);
    };

    // Definisi kolom tabel
    const actionsColumn: ColumnDef<Pegawai> = {
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
                    <DropdownMenuItem><Button onClick={() => handleEdit(row.original.id_pegawai)}>Detail</Button></DropdownMenuItem>
                    <DropdownMenuItem><Button onClick={() => handleEdit(row.original.id_pegawai)}>Edit</Button></DropdownMenuItem>
                    <DropdownMenuItem><Button onClick={() => handleDelete(row.original.id_pegawai)}>Delete</Button></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    };

    let columns: ColumnDef<Pegawai>[] = [];

    if (params.slug === "pejabat-eselon") {
        columns = [
            { accessorKey: "name", header: () => "Nama" },
            { accessorKey: "jabatan", header: () => "Jabatan" },
            { accessorKey: "nip", header: () => "NIP" },
            { accessorKey: "golongan", header: () => "Golongan" },
            {
                accessorKey: "published",
                header: () => "Published",
                cell: (info) => getStatus(info.getValue() as boolean),
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
            actionsColumn
        ];
    } else if (params.slug === "staf-pns" || params.slug === "staf-pppk") {
        columns = [
            { accessorKey: "name", header: () => "Nama" },
            { accessorKey: "jabatan", header: () => "Jabatan" },
            { accessorKey: "nip", header: () => "NIP" },
            { accessorKey: "golongan", header: () => "Golongan" },
            { accessorKey: "bidang", header: () => "Bidang" },
            {
                accessorKey: "published",
                header: () => "Published",
                cell: (info) => getStatus(info.getValue() as boolean),
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
            actionsColumn
        ];
    } else {
        columns = [
            { accessorKey: "name", header: () => "Nama" },
            { accessorKey: "bidang", header: () => "Bidang" },
            { accessorKey: "pendidikan_terahir", header: () => "Pendidikan Terahir" },
            { accessorKey: "email", header: () => "Email" },
            {
                accessorKey: "published",
                header: () => "Published",
                cell: (info) => getStatus(info.getValue() as boolean),
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
            actionsColumn
        ];
    }



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

    useEffect(() => {
        // Update title berdasarkan pathname
        if (params.slug === "pejabat-eselon") {
            setTitle("Daftar Pejabat Eselon");
        } else if (params.slug === "staf-pns") {
            setTitle("Daftar Staf PNS");
        } else if (params.slug === "staf-pppk") {
            setTitle("Daftar Staf PPPK");
        } else if (params.slug === "phl-sekretariat") {
            setTitle("Daftar PHL Sekretariat");
        } else if (params.slug === "phl-perbendaharaan") {
            setTitle("Daftar PHL Perbendaharaan");
        } else if (params.slug === "phl-aset") {
            setTitle("Daftar PHL Aset");
        } else if (params.slug === "phl-akuntansi") {
            setTitle("Daftar PHL Akuntansi");
        } else if (params.slug === "phl-anggaran") {
            setTitle("Daftar PHL Anggaran");
        } else if (params.slug === "phl-pendaftaran") {
            setTitle("Daftar PHL Pendaftaran");
        } else if (params.slug === "phl-penagihan") {
            setTitle("Daftar PHL Penagihan");
        } else {
            setTitle("Daftar Pegawai");
        }
    }, [params.slug]);

    if (isLoading) return <PageLanding />;
    if (error) return <div>{error.message}</div>;


    return (
        <div className="p-4">
            <div className="flex flex-col gap-1 ">
                <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
                <p className="text-sm text-muted-foreground">
                    Management {title}
                </p>
            </div>

            <Button
                variant="outline"
                size="icon"
                className="ml-auto h-8 w-36"
                onClick={() => {
                    router.push(`/daftar-pegawai/add/${params.slug}`);
                }}
            >
                <div className="flex items-center space-x-2"><Plus className="h-4 w-4 mr-2" /> Add Pegawai</div>
            </Button>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
            >
                <DataTable
                    data={data?.data || []}
                    columns={columns}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
            </div>
        </div>
    );
}
