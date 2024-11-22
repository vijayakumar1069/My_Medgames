import Svg_Bg from "@/components/Public web components/Svg_Bg";
import Event_Register from "@/components/Public web components/Upcoming Events components/Event_Register";
import { upcoming_events } from "@/utils/constvalues";

export default async  function Event_Register_Page({searchParams}) {
      // Await the params object to access its properties safely
      const {id} = await searchParams || {}; // Ensure params is awaited


      const user_selected_event=upcoming_events.filter(event => event.id==id);
    return (
        <div>
            <Svg_Bg/>
            <Event_Register/>
          
        </div>
    );
}