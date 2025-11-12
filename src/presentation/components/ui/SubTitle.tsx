
import { Text } from "react-native"
import { colors, globalStyles } from "../../../config/theme/theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"

interface SubTitleProps {
    text : string
    safe? : boolean
    backgroundColor? : string
}

export const SubTitle = ({ text, safe=false, backgroundColor=colors.background } : SubTitleProps) => {
  const { colors } = useContext(ThemeContext)  
  const { top } = useSafeAreaInsets()

  return (
      <Text
        style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            color: colors.text,
            marginBottom: 10,
            backgroundColor: backgroundColor ? backgroundColor : colors.background
        }}
      >{text}</Text>
  )
}


