import * as React from "react";
import {cursorMoveListen} from "./core/input/cursor.ts";

function withListeners<P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> {
    return (props: P) => {
        React.useEffect(() => {
            return cursorMoveListen();
        }, []);

        return <Component {...props} />;
    };
}
export default withListeners;