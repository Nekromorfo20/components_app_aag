// import prompt from "react-native-prompt-android"

/* NOTA: La libreria tien problemas de compativilidad con la ultima versión de React Native, si se quiere usar se debe reinstalar
    URL de libreria a instalar: https://www.npmjs.com/package/react-native-prompt-android
*/

// interface PromptButton {
//     text : string
//     onPress: () => void
//     style? : "cancel" | "default" | "destructive"
// }

// interface Options {
//     title : string
//     subtitle? : string
//     buttons : PromptButton[]
//     promptType? : 'default' | 'plain-text' | 'secure-text'
//     placeholder? : string
//     defaultValue? : string
// }

// export const showPrompt = ({ title, subtitle, buttons, promptType='plain-text', defaultValue, placeholder } : Options) => {
//     prompt(
//         title,
//         subtitle,
//         buttons,
//         {
//             type: promptType,
//             cancelable: false,
//             defaultValue: defaultValue,
//             placeholder: placeholder
//         }
//     )
// }