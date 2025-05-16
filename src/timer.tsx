import Countdown from "react-countdown";
import { TARGET_TIME } from "./config";

export const Timer = () => {
    return <div className="flex flex-col justify-center items-center px-6 py-8 border-2 border-foreground/50 border-dashed mr-8 h-full gap-y-4">
        <div className="flex flex-col items-center justify-center gap-y-1">
            <h1 className="text-3xl font-bold">
                ITCLASH: Final Round
            </h1>
            <span className="text-lg font-medium">
                Countdown timer
            </span>
        </div>
        <Countdown
            date={TARGET_TIME}
            intervalDelay={0}
            precision={3}
            renderer={({ minutes, seconds, completed }) => {
                if (completed) {
                    return <div className="text-itcPrimaryBlueShade-200 text-2xl font-semibold">Time's up!</div>;
                } else {
                    return <div className='text-4xl font-semibold'>{minutes}:{seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</div>;
                }
            }}
        />
    </div>
}