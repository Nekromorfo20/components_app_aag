
import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card";
import { CustomSwitch } from "../../components/ui/CustomSwitch";
import { Separator } from "../../components/ui/Separator";
import { Title } from "../../components/ui/Title";

/*  Documentación de React Native "Switches": https://reactnative.dev/docs/switch */
export const SwitchScreen = () => {

    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

  return (
    <CustomView
        style={{ paddingHorizontal: 10 }}
    >
        <Title text="Switches" safe />

        <Card>
            <CustomSwitch
                isOn={state.isActive}
                onChange={(value) => setstate({ ...state, isActive: value })}
                text="¿Está activo?"
            />
            <Separator />

            <CustomSwitch
                isOn={state.isHungry}
                onChange={(value) => setstate({ ...state, isHungry: value })}
                text="¿Tiene Hambre?"
            />
            <Separator />

            <CustomSwitch
                isOn={state.isHappy}
                onChange={(value) => setstate({ ...state, isHappy: value })}
                text="¿Es feliz?"
            />

        </Card>
    </CustomView>
  )
}

