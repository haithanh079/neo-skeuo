import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { NeoButton, NeoProvider, NeoSurface } from "@neo-skeuo/react-native";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <NeoProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <NeoSurface elevation="raised" style={{ padding: 16, marginBottom: 16 }}>
          <Text>Neo-skeuo Expo example</Text>
        </NeoSurface>
        <NeoButton variant="primary" onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle theme ({theme})
        </NeoButton>
      </SafeAreaView>
    </NeoProvider>
  );
}
