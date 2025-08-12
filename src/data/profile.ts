import type { ProfileData } from "@/interface";
import profileImage from "@/public/images/avatar.webp"

const profileData: ProfileData = {
    name: "Selly Supriyatin",
    description: "Frontend Developer Enthusiast",
    image: profileImage,
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://linkedin.com/in/sellysupriyatin/"
        },
        {
            name: "Github",
            url: "https://github.com/seriouselly"
        }
    ]
}
export default profileData