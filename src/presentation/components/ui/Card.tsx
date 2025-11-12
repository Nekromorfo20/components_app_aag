
import { View, StyleProp, ViewStyle } from "react-native"
import { PropsWithChildren, useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

interface CardProps extends PropsWithChildren {
    style? : StyleProp<ViewStyle>
}

export const Card = ({ style, children } : CardProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    <View
        style={[
            {
              backgroundColor: colors.cardBackground,
              borderRadius: 10,
              padding: 10
            },
            style
        ]}
    >
      {children}
    </View>
  )
}

