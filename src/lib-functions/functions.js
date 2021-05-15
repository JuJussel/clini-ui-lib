import {defineComponent,createApp, TrackOpTypes} from 'vue'
import Notification from '../lib-components/cui-notification/cui-notification'

export function notification(props) {
        const notificationView = defineComponent({
                extends: Notification, name: 'Notification', data() {
                    return {
                        title: props.title ? props.title : null,
                        text: props.text ? props.text : '',
                        color: props.color ? props.color : 'white',
                        duration: props.duration ? props.duration : 3000
                    }
                }
        })

        const div = document.createElement('div');
        document.body.appendChild(div);
        var notifApp = createApp(notificationView);
        notifApp.mount(div)

        setTimeout(function() {
                // console.log(notifApp);
                // notifApp = null
                notifApp.unmount();
                console.log(notifApp);
                notifApp = null
                document.body.removeChild(div);
        }.bind(this), props.duration ? props.duration : 3000)
    
}