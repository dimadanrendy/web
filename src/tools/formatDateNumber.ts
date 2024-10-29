export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0"); // Mengambil hari, dengan padding 0 jika kurang dari 10
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Mengambil bulan (ditambah 1 karena bulan dimulai dari 0)
  const year = date.getFullYear(); // Mengambil tahun

  return `${day}-${month}-${year}`; // Mengembalikan tanggal dalam format DD-MM-YYYY
};
