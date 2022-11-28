
import { Swipe, SwipeItem } from 'vant';
const plugins = [Swipe, SwipeItem]

export default function useplugins(app) {
    plugins.forEach(function (value) {
        app.use(value)
    }
    )
}