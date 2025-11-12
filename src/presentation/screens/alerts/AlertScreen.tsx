
import { Alert, View } from "react-native"
import { Button } from "../../components/ui/Button"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
// import { showPrompt } from "../../../config/adapters/promt.adapter"

/*  Documentación de React Native "Alerts": https://reactnative.dev/docs/alert */
export const AlertScreen = () => {
    const { isDark } = useContext(ThemeContext)

    const createTwoButtonAlert = () => {
        Alert.alert('Titulo alerta', 'Mensaje Alerta', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',

            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            },
        ],
        {
            userInterfaceStyle: isDark ? 'dark' : 'light'
        }
    )}

    const createThreeButtonAlert = () => {
        Alert.alert('Titulo alerta', 'Mensaje Alerta', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            },
        ], {
            cancelable: true,
            onDismiss() {
                console.log('OnDismiss')
            },
            userInterfaceStyle: isDark ? 'dark' : 'light'
        })
    }

    const onShowPrompt = () => {
        // El "Alert.prompt" solo funciona en IOS en Android se implementa con una libreria externa
        Alert.prompt('Titulo de alerta', 'Mensaje alerta',
            (value : string) => console.log({ value }),
            'secure-text',
            'Texto por defecto',
            'number-patd',
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        )

        // Uso de libreria "react-native-prompt-android" para Alerta promtp en Android
        // showPrompt({
        //     title: 'Titulo alerta',
        //     subtitle: 'Subtitulo alerta',
        //     buttons: [
        //         { text: 'Ok', onPress: () => console.log('Ok') }
        //     ],
        //     placeholder: 'Placeholder'
        // })
    }

  return (
    <CustomView margin>
      <Title safe text="Alertas" />

      <Button
        text="Alerta - 2 botones"
        onPress={createTwoButtonAlert}
      />
      <View style={{ height: 10 }} />

      <Button
        text="Alerta - 3 botones"
        onPress={createThreeButtonAlert}
      />
      <View style={{ height: 10 }} />

      <Button
        text="Prompt - Input"
        onPress={onShowPrompt}
      />
    </CustomView>
  )
}

