"use client";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, Package2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { fotoBakeuda, logoBakeuda } from "@/lib/image";

export default function PageHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleOpen = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen((open) => !open);
  };

  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Image
          className="h-8 lg:h-12 w-auto"
          src={logoBakeuda}
          alt="logo"
          width={100}
          height={100}
          quality={100}

        />
        <NavigationMenu className="scale-75 -translate-x-20 lg:scale-100 lg:translate-x-0">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[800px] lg:w-[900px] md:grid-cols-3 ">
                  <li className="row-span-3 flex">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                        quality={100}
                        placeholder="blur"
                      />
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/sejarah-bakeuda-pangkalpinang"
                    title="Sejarah">
                    Sejarah Bakeuda Kota Pangkal Pinang
                  </ListItem>
                  <ListItem href="/visi-dan-misi" title="Visi Misi">
                    Visi dan Misi Kota Pangkal Pinang
                  </ListItem>
                  <ListItem
                    href="/tugas-fungsi-bakeuda-pangkalpinang"
                    title="Tugas dan Fungsi">
                    Tugas dan Fungsi Bakeuda Kota Pangkal Pinang
                  </ListItem>
                  <ListItem
                    href="/struktur-organisasi-bakeuda-pangkalpinang"
                    title="Struktur Organisasi">
                    Struktur Organisasi Bakeuda Kota Pangkal Pinang
                  </ListItem>
                  <ListItem
                    href="/maklumat-bakeuda-pangkalpinang"
                    title="Maklumat">
                    Maklumat Bakeuda Kota Pangkal Pinang
                  </ListItem>
                  <ListItem href="/motto-bakeuda-pangkalpinang" title="Motto">
                    Motto Bakeuda Kota Pangkal Pinang
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Publikasi</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[800px] lg:w-[950px] md:grid-cols-3 ">
                  <ListItem
                    href="/perwako-bakeuda-pangkalpinang"
                    title="Perwako">
                    Peraturan Wali Kota Pangkal Pinang
                  </ListItem>
                  <ListItem href="/perda-bakeuda-pangkalpinang" title="Perda">
                    Peraturan Daerah Kota Pangkal Pinang
                  </ListItem>
                  <ListItem
                    href="/sk-bakeuda-pangkalpinang"
                    title="SK">
                    Surat Keputusan
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Berita</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[800px] lg:w-[900px] md:grid-cols-3 ">
                  <li className="row-span-3 ">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                      />
                    </NavigationMenuLink>
                    <span className="text-sm p-1 line-clamp-2">
                      Judul berita yang akan disampaikan as Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Explicabo, nam.
                    </span>
                  </li>
                  <li className="row-span-3 ">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                      />
                    </NavigationMenuLink>
                    <span className="text-sm p-1 line-clamp-2">
                      Judul berita yang akan disampaikan as Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Explicabo, nam.
                    </span>
                  </li>
                  <li className="row-span-3 ">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                      />
                    </NavigationMenuLink>
                    <span className="text-sm p-1 line-clamp-2">
                      Judul berita yang akan disampaikan as Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Explicabo, nam.
                    </span>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                      />
                    </NavigationMenuLink>
                    <span className="text-sm p-1 line-clamp-2">
                      Judul berita yang akan disampaikan as Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Explicabo, nam.
                    </span>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                      />
                    </NavigationMenuLink>
                    <span className="text-sm p-1 line-clamp-2">
                      Judul berita yang akan disampaikan as Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Explicabo, nam.
                    </span>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Image
                        className="object-cover"
                        src={fotoBakeuda}
                        alt="Next.js"
                        width={600}
                        height={400}
                      />
                    </NavigationMenuLink>
                    <span className="text-sm p-1 line-clamp-2">
                      Judul berita yang akan disampaikan as Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Explicabo, nam.
                    </span>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[800px] lg:w-[900px] md:grid-cols-3 ">
                  <ListItem
                    href="/sejarah-bakeuda-pangkalpinang"
                    title="Cek PBB">
                    Yuk Cek PBB kalian di Kota Pangkal Pinang secara Online
                  </ListItem>
                  <ListItem href="/visi-dan-misi" title="Pajak Online">
                    Realisasi Pajak Daerah Kota Pangkal Pinang
                  </ListItem>
                  <ListItem
                    href="/tugas-fungsi-bakeuda-pangkalpinang"
                    title="E-Serang">
                    Elektonik Persediaan Barang
                  </ListItem>
                  <ListItem
                    href="/tugas-fungsi-bakeuda-pangkalpinang"
                    title="Loket Pelayanan">
                    Yuk Cari Tau Loket Pelayanan Pajak Daerah
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  LAPOR
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="/home"
              className={`${pathname === "/home"
                ? ""
                : "text-muted-foreground hover:text-foreground"
                }`}>
              Home
            </Link>

            <div className="mr-0">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground">
                  Profile
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 px-10 border-none shadow-none">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a href="/sejarah-bakeuda-pangkalpinang"> Sejarah Bakeuda Pangkal Pinang</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/tugas-fungsi-bakeuda-pangkalpinang"
                      className="">
                      Tugas dan Fungsi Bakeuda Pangkal Pinang
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/maklumat-bakeuda-pangkalpinang" className="">
                      Maklumat Bakeuda Pangkal Pinang
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/visi-dan-misi" className="">
                      Visi Misi Pangkal Pinang
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/visi-dan-misi" className="">
                      Struktur Organisasi Bakeuda Pangkal Pinang
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/motto-bakeuda-pangkalpinang" className="">
                      Motto Bakeuda Pangkal Pinang
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mr-0">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground">
                  Publikasi
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 px-10 border-none shadow-none">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a href="/perwako-bakeuda-pangkalpinang" className="py-4">Dokumen Perwako</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/perda-bakeuda-pangkalpinang"
                      className="py-4">
                      Dokumen Perda
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/sk-bakeuda-pangkalpinang" className="py-4">
                      Dokumen SK
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href="#"
              className={`${pathname === "/regulasi"
                ? ""
                : "text-muted-foreground hover:text-foreground"
                }`}>
              Regulasi
            </Link>
            <Link
              href="#"
              className={`${pathname === "/layanan"
                ? ""
                : "text-muted-foreground hover:text-foreground"
                }`}>
              Layanan
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Button
              onClick={toggleOpen}
              className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20 border border-input hover:bg-muted hover:shadow-md hover:text-primary px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-sm sm:pr-12 lg:w-40 xl:w-[12rem] md:scale-75  lg:scale-100 lg:translate-x-0">
              <span className="hidden lg:inline-flex">Search ...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem><Link href="/perwako-bakeuda-pangkalpinang">Perwako</Link></CommandItem>
                  <CommandItem><Link href="/perda-bakeuda-pangkalpinang">Perda</Link></CommandItem>
                  <CommandItem><Link href="/sk-bakeuda-pangkalpinang">Sk</Link></CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </form>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef <
  React.ElementRef < "a" >,
  React.ComponentPropsWithoutRef< "a" >
> (({ className, title, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
              {...props}>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    });
ListItem.displayName = "ListItem";
