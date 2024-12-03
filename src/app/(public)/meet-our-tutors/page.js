
import { getTutors } from "@/app/actions/(Admin)/tutorActions";
import Meet_Our_Tutor from "@/components/Public web components/(Meet_Our_Tutors_Components)/Meet_Our_Tutor";
import Image_Bg from "@/components/Public web components/Image_Bg";

export default async  function Meet_Our_Tutors_Page() {
    // Add your code here to fetch data and handle errors. For now, let's assume we're just returning a placeholder component.
    let tutors;
    try {
        tutors = await getTutors();
        // If there are no tutors, show a message
        if (tutors.length === 0) {
            return <div>No tutors found.</div>;
        }

    } catch (error) {
        console.error('Error fetching tutors:', error);
        return <div>Error fetching tutors.</div>;
        
    }
    // If we've gotten this far, render the component with the fetched data.
    console.log('rendering', tutors);
    return (
        <div className="mt-[0.1px]">
          
           <Image_Bg bg_Image="/tutorbg.png"/>
           <Meet_Our_Tutor tutors={tutors}/>
        
        </div>
    );
}