import { H1, View, XStack, Button } from "tamagui";
import { Bell } from "@tamagui/lucide-icons";

export function Header() {
  return (
    <View paddingTop="$4" paddingHorizontal="$4">
      <XStack justifyContent="space-between" alignItems="center">
        <H1 fontSize="$8" textAlign="center">
          Domicilios Pet RD
        </H1>
        <Button icon={Bell}></Button>
      </XStack>
    </View>
  );
}
