
import { Swipe, SwipeItem,Popup } from 'vant';
const plugins = [Swipe, SwipeItem,Popup]

export default function useplugins(app) {
    plugins.forEach(function (value) {
        app.use(value)
    }
    )
}