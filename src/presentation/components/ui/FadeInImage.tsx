
import { useState } from "react"
import { View, StyleProp, Animated, ActivityIndicator, ImageStyle } from "react-native"
import { useAnimation } from "../../hooks/useAnimation"

interface FadeInImageProps {
    uri : string
    style? : StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style } : FadeInImageProps) => {
    const { animatedOpacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        { isLoading && (
            <ActivityIndicator
                style={{ position: 'absolute' }}
                color='gray'
                size={30}
            />
        )}

        <Animated.Image
            source={{ uri }}
            onLoadEnd={() => {
                fadeIn({ duration: 700 })
                setIsLoading(false)
            }}
            style={[ style, { opacity: animatedOpacity } ]}
        />
    </View>
  )
}
