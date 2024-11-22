import Svg_Bg from "@/components/Public web components/Svg_Bg";
import User_Selected_Event_Component from "@/components/Public web components/Upcoming Events components/User_Selected_Event_Component";
import { upcoming_events } from "@/utils/constvalues";

export default async function User_Selected_Upcoming_Event({ params }) {
    const {id} = await params || {}; // Ensure params is awaited


    const user_selected_event=upcoming_events.filter(event => event.id==id);
  
    return (
        <div>
            <Svg_Bg/>
           <User_Selected_Event_Component selected_Event={user_selected_event[0]}/>
        </div>

    );
}