import { Service } from "@/types/entities/service";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    supabase
      .from("services")
      .select("*")
      .then((res) => setServices(res.data as Service[]));
  }, []);
  return services;
}
