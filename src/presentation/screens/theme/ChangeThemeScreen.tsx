
import { View, Text } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

/*  Documentación de React Native "Themes": https://reactnavigation.org/docs/themes/ */
export const ChangeThemeScreen = () => {
    const { setTheme, currentTheme, colors } = useContext(ThemeContext)

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <Button
        text="Ligth"
        onPress={() => setTheme('light')}
      />

      <View style={{ height: 10 }}></View>

      <Button
        text="Dark"
        onPress={() => setTheme('dark')}
      />

      <View style={{ height: 10 }}></View>

      <Text style={{ color: colors.text }}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  )
}

