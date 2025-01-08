import Privacy_Policy from "@/components/Public web components/Privacy Policy Components/Privacy_Policy";
import Svg_Bg from "@/components/Public web components/Svg_Bg";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};
export default function Privacy_Policy_page() {
  return (
    <div>
      <Svg_Bg />
      <Privacy_Policy />
    </div>
  );
}
