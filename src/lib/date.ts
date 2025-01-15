import { format } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return format(date, "eeee, dd MMMM yyyy", { locale: id });
};
