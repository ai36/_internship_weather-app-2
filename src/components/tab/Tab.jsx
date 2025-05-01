import { Slider } from "../../components";
import styles from "./tab.module.css";

export function Tab({ forecastRange }) {
    return (
       <div className={`${styles['slider__weather']}`}>
            <Slider forecastRange={forecastRange} />
      </div>
    );
}