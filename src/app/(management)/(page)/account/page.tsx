"use client";
import { useState, useEffect } from "react";
import { DataTable } from "../../components/table/DataTable";
import { Person } from "@/types/index";
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

const useGetUsers = async () => {
  const res = await getUsers();
  if (res.status_code !== 200) {
    throw new Error(res);
  }
  return res;
}

export default function Account() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = useState < string > ("");
  const [isLoadingFetch, setIsLoading] = useState(false);
  const [errorFetch, setError] = useState < string | null > (null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: useGetUsers,
  });

  // Fungsi untuk mengubah status menjadi 'Active' atau 'Inactive'
  const getStatus = (status: boolean) => {
    return status ? "Active" : "Inactive";
  };

  // fungsi delete
  const handleDelete = async (id: string) => {
    //konfirmasi dengan modal
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) {
      try {
        const response = await deleteUsers(id);
        if (response.status === true) {
          setIsLoading(false);
          toast.success("User deleted successfully", {
            position: "top-right",
            description: response.message
          })
          queryClient.invalidateQueries({ queryKey: ["users"] });
        } else {
          toast.error("Error deleting user", {
            position: "top-right",
            description: response
          });
          setIsLoading(false);
          setError(response); // Set error sebagai array
        }
      } catch (err) {

        setIsLoading(false);
        setError(["An unexpected error occurred."]); // Pesan error umum
      }
    }
  };

  const handleEdit = async (id: string) => {
    router.push(`/account/edit/${id}`);
  };

  // Definisi kolom tabel
  const columns: ColumnDef<Person>[] = [
    { accessorKey: "name", header: () => "Nama" },
    { accessorKey: "username", header: () => "Username" },
    { accessorKey: "email", header: () => "Email" },
    { accessorKey: "bidang", header: () => "Bidang" },
    { accessorKey: "role", header: () => "Role" },
    {
      accessorKey: "status",
      header: () => "Status",
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
            <DropdownMenuItem><Button onClick={() => handleEdit(row.original.id_users)}>Edit</Button></DropdownMenuItem>
            <DropdownMenuItem><Button onClick={() => handleDelete(row.original.id_users)}>Delete</Button></DropdownMenuItem>
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
        <h1 className="text-lg font-semibold md:text-2xl">Account</h1>
        <p className="text-sm text-muted-foreground">
          Management User
        </p>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="ml-auto h-8 w-36"
        onClick={() => {
          router.push("/account/add");
        }}
      >
        <div className="flex items-center space-x-2"><Plus className="h-4 w-4 mr-2" /> Add Account</div>
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
