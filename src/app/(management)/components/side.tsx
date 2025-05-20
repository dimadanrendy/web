"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    MoveDown,
    CircleChevronDown,
    Files,
    Newspaper,
    Earth,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/store/store";


export default function Side() {
    const user = useUser((state) => state.user);
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="">Bakeuda</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4 text-black" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            Dashboard
                        </Link>
                        {user?.role === "admin" || user?.role === "superadmin" && (
                            <Link
                                href="/account"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Users className="h-4 w-4" />
                                Account
                            </Link>
                        )}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Files className="h-4 w-4" />
                                    Dokumen
                                    <CircleChevronDown className="h-4 w-4" />
                                </Link>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <Link href="/peraturan-walikota">Peraturan Wali Kota</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/peraturan-daerah">Peraturan Daerah</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/surat-keputusan">Surat Keputusan</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/lainnya">Lainnya</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link
                            href="/management-berita"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Newspaper className="h-4 w-4" />
                            Berita
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Files className="h-4 w-4" />
                                    Daftar Pegawai
                                    <CircleChevronDown className="h-4 w-4" />
                                </Link>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/pejabat-eselon">Daftar Pejabat Eselon</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/staf-pns">Daftar Staf PNS</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/staf-pppk">Daftar Staf PPPK</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-sekretariat">Daftar PHL Bidang Sekretariat</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-perbendaharaan">Daftar PHL Bidang Perbendaharaan</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-aset">Daftar PHL Bidang Aset</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-akuntansi">Daftar PHL Bidang Akuntansi</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-anggaran">Daftar PHL Bidang Anggaran</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-pendaftaran">Daftar PHL Bidang Pendaftaran</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/daftar-pegawai/all/phl-penagihan">Daftar PHL Bidang Penagihan</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {user?.role === "admin" || user?.role === "superadmin" && (
                            <Link
                                href="/management-pengaduan"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Users className="h-4 w-4" />
                                Admin Pengaduan
                            </Link>
                        )}
                        <Link
                            href="/home"
                            target="_blank"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Earth className="h-4 w-4" />
                            Cek website
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="dashboard-02-chunk-0">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>{user ? user.name : "Loading..."}</CardTitle>
                            <CardDescription>
                                Bidang : {user ? user.bidang : "Loading..."}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Edit Profile
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
