import { useServices } from "@/hooks/services/useServices";
import { View, Text } from "tamagui";

export default function Home() {
  const services = useServices();
  return (
    <View>
      {services.map((service) => (
        <Text>{service.title}</Text>
      ))}
    </View>
  );
}
