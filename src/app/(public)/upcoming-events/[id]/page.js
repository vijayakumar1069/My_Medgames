import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { upcoming_events } from "@/utils/constvalues";

export default async function User_Selected_Upcoming_Event({ params }) {
    const {id} = await params || {}; // Ensure params is awaited


    const user_selected_event=upcoming_events.filter(event => event.id==id);
  
    return (
        <div>
            <Svg_Bg/>
            {user_selected_event[0].id}
        </div>

    );
}