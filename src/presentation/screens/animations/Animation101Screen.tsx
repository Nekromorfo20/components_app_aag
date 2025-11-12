
import { Text, StyleSheet, Pressable, Animated, Easing } from "react-native"
import { useAnimation } from "../../hooks/useAnimation"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import { CustomView } from "../../components/ui/CustomView"
import { Button } from "../../components/ui/Button"

/*  Documentación de React Native "Animated": https://reactnative.dev/docs/animated */
export const Animation101Screen = () => {
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()
    const { colors } = useContext(ThemeContext)

  return (
    <CustomView style={styles.container}>
        <Animated.View
            style={[
                styles.purpleBox,
                { backgroundColor: colors.primary },
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]
                }
            ]}
        />

        <Button
            text="FadeIn"
            onPress={() => {
                fadeIn({})
                startMovingTopPosition({ initialPosition: -100, easing: Easing.elastic(1), duration: 750 })
            }}
            styles={{ marginTop: 10 }}
        />

        <Button
            text="FadeOut"
            onPress={() => fadeOut({})}
            styles={{ marginTop: 10 }}
        />
    </CustomView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    }
})