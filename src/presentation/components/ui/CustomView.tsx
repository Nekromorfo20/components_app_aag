
import { View, StyleProp, ViewStyle } from "react-native"
import { globalStyles } from "../../../config/theme/theme"
import { ReactNode, useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

interface CustomViewProps {
    style? : StyleProp<ViewStyle>
    margin? : boolean
    children? : ReactNode
}

export const CustomView = ({ style, margin, children } : CustomViewProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    <View
        style={[
          globalStyles.mainContainer,
          margin ? globalStyles.globalMargin : null,
          { backgroundColor: colors.background },
          style
        ]}
    >
      {children}
    </View>
  )
}

