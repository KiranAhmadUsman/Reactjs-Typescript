import { ReactNode } from "react";

interface WarningBoxProp{
    mode: "warning";
    children: ReactNode
    severity:"low"|'high'|"medium"
}
interface HintBoxProp{
    mode: "hint";
    children: ReactNode
}
type InforBoxProp= HintBoxProp | WarningBoxProp;
export default function InfoBox(prop: InforBoxProp) {
    if (prop.mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
            <p>{prop.children}</p>
</aside>
        )
    }
    return (
        <aside className={`infobox infobox-warning warning--${prop.severity}`}>
            <h2>Warning</h2>
            <p>{prop.children}</p>
</aside>
    )
}