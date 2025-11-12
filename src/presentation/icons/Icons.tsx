import { Ionicons } from "@react-native-vector-icons/ionicons";
import ionicGlyphmap from '../../../node_modules/@react-native-vector-icons/ionicons/glyphmaps/Ionicons.json'

interface IonIconProps {
    name : keyof typeof ionicGlyphmap
    size? : number
    color? : string
}

export const IonIcon = ({ name, size=25, color='#000' } : IonIconProps) => {
  return (
    <Ionicons
        name={name}
        size={size}
        color={color}
    />
  )
}

